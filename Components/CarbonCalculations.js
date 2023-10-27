import styles from '/styles/Home.module.css'
import React, { useMemo } from 'react'
import ReactSlider from 'react-slider'
import { useState, useEffect, useContext, useCallback } from 'react'
import { CommuteContext } from '../contexts/CarbonContexts'
import { FoodContext } from '../contexts/CarbonContexts'
import { EnergyContext } from '../contexts/CarbonContexts'
import { Chart } from 'react-google-charts'
import dynamic from 'next/dynamic';
import { Button, Divider, Modal } from 'rsuite'
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import app from '../services/firebaseClientSetup'
import 'rsuite/dist/rsuite-no-reset.min.css'
import ScrollArrow from './ScrollArrow'

const CountUp = dynamic(() => import('react-countup'), {
    ssr: false
})

const db = getFirestore(); // Initialize Firestore

export default function CarbonCalculations(props) {
           //* miles traveled per day             // days traveled per week            // method used for traveling
    const {milesDaily, setMilesDaily,             daysPerWeek, setDaysPerWeek,         methodTravel, setMethodTravel}                             = useContext(CommuteContext)

           //* percent of food that is local      // red meat consumption              // amount of food saved
    const {percentLocal, setPercentLocal,         redMeat, setRedMeat,                 foodSaved, setFoodSaved}                                   = useContext(FoodContext)

           //* electricity bill per month         // home type                         // heating coefficient
    const {electricityBill, setElectricityBill,   homeType, setHomeType,               heatingCoEff, setHeatingCoEff}                             = useContext(EnergyContext)

    const [openModal, setOpenModal] = useState(false);

    // 6.5 metric tons / year --> 386.4 grams / mile for gasoline car
    // 2.0 metric tons / year --> 225.24 grams / mile for electric car
    // 177 grams / mile for buses
    // 106.6 grams / mile for trains
    // 0.0 grams / mile for cycling
    // 0.0 grams / mile for walking
    // 398.7 grams / kwH for electricity
    // 1200 kwH for refrigerator
    // 360 kwH for dishwasher
    // 400 kwH for washing machine
    // 1200 kwH for dryer
    // 1200 kwH for central air conditioner
    // 1000 kwH for lighting
    // 5000 kwH for heating
    // 16000000 grams for person in U.S.
    // local food is 17 times less distance than normal
    // food transporation is 11% of food emissions
    // red meat is 3000 grams of CO2 per 150g serving of meat
    // 


    const convertEmissionsPerMile = (option) => {
        switch(option) {
            case 'gasCar': return 386.4
            case 'elecCar': return 225.24
            case 'bus': return 177
            case 'train': return 106.6
            case 'bike': return 0
            case 'walk': return 0
            default: return 0
        }
    }

    const convertRedMeat = (option) => {
        switch(option) {
            case 'never': return 0
            case 'everyMeal': return 9000
            case 'once': return 3000
            case 'severalPerWeek': return 1500
            case 'severalPerMonth': return 750
            default: return 0
        }
    }

    //! the below figures are in kwH, not grams of CO2.
    const convertHomeTypekwH = (option) => {
        switch(option) {    
            case 'detached': return 25
            case 'attached': return 20
            case 'smallApt': return 15
            case 'largeApt': return 10
            case 'mobile': return 20
            default: return 0
        }
    }

    const convertHomeTypeHeating = (option) => {
        switch(option) {    
            case 'detached': return 0.6
            case 'attached': return 0.5
            case 'smallApt': return 0.4
            case 'largeApt': return 0.3
            case 'mobile': return 0.55
            default: return 0
        }
    }

    //* theses ones are just coefficients, not actual values
    const convertHeatingCoEff = (option) => {
        switch(option) {
            case 'never': return 0.1
            case 'fewHours': return 0.25
            case 'mostHours': return 0.75
            case 'allDay': return 1
            default: return 0
        }
    }

    const calculateCommuteEmissions = (milesPerDay, daysPerWeek, travelMethods) => {
        let totalEmissions = 0;
        let emissionsPerMile = convertEmissionsPerMile(travelMethods);

        totalEmissions = emissionsPerMile * milesPerDay * daysPerWeek * 52; // 52 weeks in a year

        // convert to metric tons
        totalEmissions /= 1000000;
    
        return totalEmissions;
    }

    const calculateFoodEmissions = (percentLocal, redMeat, foodSaved) => {
        let totalEmissions = 0;
        let dailyRedMeat = convertRedMeat(redMeat);
    
        totalEmissions += dailyRedMeat * 365; // red meat emissions per year
    
        const F = 2000; // 2000 grams of food consumed daily.
        const l = 0.5; // This is an assumption: 0.5 kgCO2e per kg of food
        const nl = 5; // This is an assumption: 5 kgCO2e per kg of food
        
        let yearlyEmissionsLocal = F * 365 * (percentLocal * 0.01) * l;
        let yearlyEmissionsNonLocal = F * 365 * (1 - (percentLocal * 0.01)) * nl;
    
        totalEmissions += (yearlyEmissionsLocal + yearlyEmissionsNonLocal); // adjust for local sourcing
    
        let foodWaste = totalEmissions * (foodSaved * 0.01);
        totalEmissions += foodWaste; // adjust for food waste
    
        // convert to metric tons
        totalEmissions /= 1000000;
    
        return totalEmissions;
    }
    
    
    const calculateElectricityEmissions = (electricityBill, homeType, energyEff) => {
        let totalEmissions = 0;
        
        totalEmissions += (electricityBill / 0.27) * 398.7 * 12; 

        let heatingkwH = convertHomeTypekwH(homeType) * convertHeatingCoEff(energyEff);

        totalEmissions = totalEmissions * (1 - convertHomeTypeHeating(homeType)) + heatingkwH * 398.7 * convertHomeTypeHeating(homeType);

        // convert to metric tons
        totalEmissions /= 1000000;

        return totalEmissions;
    }

    const calculateTotalEmissions = () => {
        let totalEmissions = 0;
        let commuteEmissions = calculateCommuteEmissions(milesDaily, daysPerWeek, methodTravel);
        let foodEmissions = calculateFoodEmissions(percentLocal, redMeat, foodSaved);
        let electricityEmissions = calculateElectricityEmissions(electricityBill, homeType, heatingCoEff);

        totalEmissions = commuteEmissions + foodEmissions + electricityEmissions;
        console.log(totalEmissions)
        return totalEmissions;
    }

    const percentageEmissions = () => {
        let percentage = 0;
        let emissionsPerYear = calculateTotalEmissions();
        let averageEmissionsPerYear = 14.6;
        percentage = ((averageEmissionsPerYear - emissionsPerYear) / averageEmissionsPerYear) * 100;
        percentage = Math.round(percentage * 10) / 10; // round to 1 decimal place
        return percentage;
    }

    const totalEmissions = useMemo(() => calculateTotalEmissions(), [milesDaily, daysPerWeek, methodTravel, percentLocal, redMeat, foodSaved, electricityBill, homeType, heatingCoEff])

    console.log(totalEmissions)

    async function handleSave() {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            const userRef = doc(db, 'users', user.uid); 
            const emissionData = {
                timestamp: new Date(),
                value: carbonEmission
            };

            try {
                await setDoc(doc(userRef, 'emissions', emissionData.timestamp.toISOString()), emissionData);
                console.log('Data saved successfully');
                // Optionally, provide user feedback like a toast message or modal
            } catch (error) {
                console.error('Error saving emission data: ', error);
                // Optionally, provide user feedback about the error
            }
        } else {
            console.error('No user logged in');
            // Optionally, alert the user that they need to be logged in
        }
    }

    const handleSaveButton = () => {
        handleSave();
        setOpenModal(true);
    }

    const handleModalClose = () => {
        setOpenModal(false);
    }

    // using react-google-charts
    const data = [
        ['Emissions', 'Metric Tons per Year'],
        ['Commute', calculateCommuteEmissions(milesDaily, daysPerWeek, methodTravel)],
        ['Food', calculateFoodEmissions(percentLocal, redMeat, foodSaved)],
        ['Electricity', calculateElectricityEmissions(electricityBill, homeType, heatingCoEff)]
    ]

    const options = {
        title: '',
        pieHole: 0.4,
        is3D: true,
        backgroundColor: 'transparent',
        legend: {
            textStyle: {color: 'black', fontSize: 16},
            position: 'left',
            alignment: 'center',
        },
        titleTextStyle: {color: 'black', fontSize: 24},
        pieSliceTextStyle: {color: 'white', fontSize: 16},
        slices: {
            0: { color: '#FFC300' },
            1: { color: '#FF5733' },
            2: { color: '#C70039' }
        },
        chartArea: {
            top: 0,
            left: 0,
            right: '10%',
            bottom: 0,
            width: '100%',
            height: '100%'
        }, 
    }

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const parallaxEffect = scrollPosition * -0.25;
      
    return (
        <>
            <div className={styles.carbonCalculations}>
                <CountUp start={0} end={totalEmissions} duration={4.8} decimal='.' decimals={1}>
                    {({ countUpRef }) => (
                        <div className={styles.calculationCard} style={{fontSize: '1.2em'}}>
                            <div className={styles.countUp}>
                                <div className={styles.animationWrapper} style={{marginRight: '0.5rem'}}>
                                    <h3 className={styles.pMarginBottom} style={{marginLeft: '16px'}}>Your Yearly Emissions</h3>
                                    <span className={styles.animatedCount} ref={countUpRef} />
                                    <br/><p className={styles.pMarginTop}>metric tons per year</p>
                                    <div className={`${styles.circle} ${styles.circle1}`}></div>
                                    <div className={`${styles.circle} ${styles.circle2}`}></div>
                                    <div className={`${styles.circle} ${styles.circle3}`}></div>
                                </div>
                                <div style={{marginLeft: '0.5rem'}}>
                                    <h3 className={styles.pMarginBottom} style={{marginLeft: '16px'}}>Average Yearly Emissions</h3>
                                    <span>14.6</span>
                                    <br/><p className={styles.pMarginTop}>metric tons per year</p>
                                </div>
                            </div>
                            {percentageEmissions() < 0 ? 
                            <p style={{fontSize: '1rem', marginTop: '16px', textAlign: 'center'}}>Your commute emissions are <b>{-(percentageEmissions())}%</b> more than average.</p> :
                            <p style={{fontSize: '1rem', marginTop: '16px', textAlign: 'center'}}>Your commute emissions are <b>{percentageEmissions()}%</b> less than average.</p>} 
                        </div>
                    )}
                </CountUp>
                <ScrollArrow />
            </div>
            <div className={styles.chartContainer}>
                <div className={styles.chartContainer} style={{ transform: `translateY(${parallaxEffect}px)` }}>
                    <div className={styles.chartHeader}>
                        <h1 style={{paddingBottom: '2rem'}}>Your Emissions</h1>
                        <p>See a breakdown of <br /> your carbon footprint</p>
                    </div>
                    <Chart
                        className={styles.emissionsChart}
                        chartType='PieChart'
                        data={data}
                        options={options}
                        width='100%'
                        height='100vh'
                    />
                </div>
                <div className={`${styles.greenCircle} ${styles.greenCircle1}`}></div>
                <div className={`${styles.greenCircle} ${styles.greenCircle2}`}></div>
                <div className={`${styles.greenCircle} ${styles.greenCircle3}`}></div>
            </div>
            <Button appearance='primary' className={styles.saveButton} onClick={handleSaveButton} style={{position: 'fixed'}}>Save My Calculation</Button>
            {/* <Button appearance='primary' className={styles.loadButton} onClick={handleLoadButton} style={{position: 'fixed'}}>Load Saved Calculations</Button> */}
            <Modal open={openModal} onClose={handleModalClose} enforceFocus={false} size='xs'  className={`modal ${styles.saveModal}`}>
                <Modal.Body>
                    Calculation successfully saved!   
                </Modal.Body>
            </Modal>
        </>
    )
}