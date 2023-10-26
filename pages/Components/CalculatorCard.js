import styles from '/styles/Home.module.css'
import React from 'react'
import ReactSlider from 'react-slider'
import { useState, useEffect } from 'react'
import { ButtonToolbar, IconButton, ButtonGroup, Button } from 'rsuite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGasPump, faBolt, faBus, faTrain, faBicycle, faWalking } from '@fortawesome/free-solid-svg-icons'
import 'rsuite/dist/rsuite-no-reset.min.css'
import clear_logo from '../../public/images/clear_logo.png'
import CommuteCard from './CommuteCard'
import FoodCard from './FoodCard'
import EnergyCard from './EnergyCard'
import Result from './Result'
import CarbonCalculations from './CarbonCalculations'
import CarbonAction from './CarbonAction'
import HomePage from './HomePage'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

export default function CalculatorCard({ setShowHome, setSelectedOption }) {
    const [currentSection, setCurrentSection] = useState('commute');
    const [page, setPage] = useState(0);

    const handleNext = () => {
        if (currentSection === 'commute' && page === 2) {
            setCurrentSection('food');
            setPage(0);
        } else if (currentSection === 'food' && page === 2) {
            setCurrentSection('electricity');
            setPage(0);
        } else if (currentSection === 'electricity' && page === 2) {
            setCurrentSection('result');
            setPage(0);
        } else {
            setPage(page + 1);
        }
      };
    
    const handleBack = () => {
        if (currentSection === 'food' && page === 0) {
            setCurrentSection('commute');
            setPage(2);
        } else if (currentSection === 'electricity' && page === 0) {
            setCurrentSection('food');
            setPage(2);
        } else if (currentSection === 'result' && page === 0) {
            setCurrentSection('electricity');
            setPage(2);
        } else {
            setPage(page - 1);
        }
    };

    const funFacts = [
        `Fun Fact: \n\nIf every American skipped meat for just one day a week, the carbon dioxide savings \nwould be the same as taking 30 million cars off the roads for a year.`,
        `Fun Fact: \n\nIn the early 20th century, people used hydrogen balloons to measure the temperature of the atmosphere. \nToday, we have satellites for that!`,
        `Fun Fact: \n\nRecycling one aluminum can save enough energy to listen to a full album on your smartphone. \nRecycling 100 cans could light your bedroom for two whole weeks!`,
        `Fun Fact: \n\nThe amount of sunlight that hits the Earth's surface in just one hour could \ncover the world's energy consumption for an entire year.`,
        `Fun Fact: \n\nThe highest temperature ever recorded on Earth was 134°F (56.7°C) in Death Valley National Park, California, in 1913. \nGlobal warming is expected to make heat records like this more common.`,
        `Fun Fact: \n\nCovering less than 1% of the ocean floor, coral reefs are home to more than 25% of marine life, \nmaking them the most diverse ecosystems on the planet.`,
        `Fun Fact: \n\nIn 70 years, the area suitable for coffee production is expected to decrease by 50%. \nProtecting the climate means protecting your brew!`,
    ]

    const handleHome = () => {
        setShowHome(true);
        setSelectedOption(false);
    };

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // swap elements
        }
    }

    shuffleArray(funFacts);

    const generateSequence = (facts) => {
        const sequence = [];
        facts.forEach(fact => {
            sequence.push(fact, 2000); // Assuming you want a 2000ms pause after each fact
        });
        return sequence;
    };
    
    const shuffledSequence = generateSequence(funFacts);
    
    return (
        <div className={styles.calculatorWrap}>
            <div className={styles.calculatorArea} styles={{margin: '0'}}>
                {currentSection === 'commute' && page === 0 ? <div className={styles.backButtonAreaTransparent}> <div className={styles.backButton}><i className='fa fa-chevron-left'></i></div></div> : 
                currentSection === 'result' && page === 0 ? <div className={styles.backToCalculator}><button className={styles.backButton} onClick={handleBack}><h6>Back To Calculator</h6></button></div> : 
                <div className={styles.backButtonArea}>
                    <div className={styles.backButton} onClick={handleBack}><i className='fa fa-chevron-left'></i></div>
                </div>}
                {currentSection === 'commute' && <CommuteCard pageNumber={page}/>}
                {currentSection === 'food' && <FoodCard pageNumber={page}/>}
                {currentSection === 'electricity' && <EnergyCard pageNumber={page}/>}
                {currentSection === 'result' && <div className={styles.resultArea}>  
                    <CarbonCalculations/>
                    <CarbonAction/>
                </div>}
                {currentSection === 'result' && page === 0 ? null :
                <div className={styles.nextButtonArea}>
                    <button className={styles.nextButton} onClick={handleNext}><i className='fa fa-chevron-right'></i></button>
                </div>}
            </div>
            {currentSection !== 'result' && page === 0 &&
                <TypeAnimation
                    cursor={false}
                    className={styles.funFactText}
                    speed={60}
                    deletionSpeed={99}
                    sequence={shuffledSequence}
                />}
            {currentSection !== 'result' &&
            <ButtonToolbar className={styles.calculatorTab}>
                <Button onClick={() => setCurrentSection('commute')}
                        appearance='ghost'
                        style={{width: '250px', padding: '0.8rem'}}>Commute</Button>
                <Button onClick={() => setCurrentSection('food')}
                        appearance='ghost'
                        style={{width: '250px', padding: '0.8rem'}}>Food</Button>
                <Button onClick={() => setCurrentSection('electricity')}
                        appearance='ghost'
                        style={{width: '250px', padding: '0.8rem'}}>Electricity</Button>
            </ButtonToolbar>}
            {currentSection !== 'result' && <div className={styles.backToCalculator}><button className={styles.backButton} onClick={handleHome}><h6>Back To Home</h6></button></div>}
        </div>
    )
}