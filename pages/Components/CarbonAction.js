import styles from '/styles/Home.module.css'
import React from 'react'
import ReactSlider from 'react-slider'
import { useState, useEffect, useContext } from 'react'
import { Input, InputGroup, Button, ButtonGroup, Checkbox, CheckboxGroup } from 'rsuite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGasPump, faBolt, faBus, faTrain, faBicycle, faWalking } from '@fortawesome/free-solid-svg-icons'
import 'rsuite/dist/rsuite-no-reset.min.css'
import clear_logo from '../../public/images/clear_logo.png'
import CarbonCalculations from './CarbonCalculations'
import { CommuteContext, FoodContext, EnergyContext } from '../contexts/CarbonContexts'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
const { Configuration, OpenAIApi } = require("openai");

export default function CarbonAction() {
    const commuteData = useContext(CommuteContext);
    const foodData = useContext(FoodContext);
    const energyData = useContext(EnergyContext);

    const convertMethodTravelPrompt = (option) => {
        switch (option) {
            case 'gasCar': return 'driving a gasoline car'
            case 'elecCar': return 'driving an electric car'
            case 'bus': return 'riding a bus'
            case 'train': return 'riding a train'
            case 'bike': return 'cycling'
            case 'walk': return 'walking'
            default: return ''
        }
    }

    const convertRedMeatPrompt = (option) => {
        switch (option) {
            case 'never': return "don't eat red meat"
            case 'everyMeal': return 'eat red meat every meal'
            case 'once': return 'eat red meat once a week'
            case 'severalPerWeek': 'eat red meat several times a week'
            case 'severalPerMonth': 'eat red meat several times a month'
            default: return ''
        }
    }

    const convertHomeTypePrompt = (option) => {
        switch (option) {
            case 'detached': return 'single-family detached house'
            case 'attached': return 'single-family attached house'
            case 'smallApt': return 'small apartment (2 - 4 units)'
            case 'largeApt': return 'large apartment (5+ units)'
            case 'mobile': return 'mobile home'
            default: return ''
        }
    }

    const convertHeatingCoEffPrompt = (option) => {
        switch (option) {
            case 'never': return 'never on'
            case 'fewHours': return 'on for a few hours each day'
            case 'mostHours': return 'on for most of the day'
            case 'allDay': return 'on all day and night'
            default: return ''
        }
    }

    let methodTravel = convertMethodTravelPrompt(commuteData.methodTravel)
    let redMeat = convertRedMeatPrompt(foodData.redMeat)
    let homeType = convertHomeTypePrompt(energyData.homeType)
    let heatingCoEff = convertHeatingCoEffPrompt(energyData.heatingCoEff)

    const constructGoalsPrompt = () => {
        let prompt = "Here's an example of how I want the suggestions (but with three instead of two): \
        - Take a bike instead of driving when possible.\
        - Try carpooling with coworkers or friends.\
        \n\
        - Plan meals around seasonal produce. \
        - Explore vegetarian or vegan meals a few times a week. \
        \n\
        - Unplug devices when they're not in use.\
        - Consider switching to energy-efficient light bulbs."
        
        prompt += "Based on my (the user's) data: \n";

        prompt += `I commute ${commuteData.milesDaily} miles daily ${methodTravel}. I travel ${commuteData.daysPerWeek} days per week. `;
        prompt += `Locally-sourced food comprises of ${foodData.percentLocal}% of my meals and I ${redMeat}. I save ${100 - foodData.foodSaved} percent of my food per week. `;
        prompt += `My monthly electricity bill is ${energyData.electricityBill} dollars. I live in a ${homeType}. During the cold months, my heating is ${heatingCoEff}.`;

        prompt += "What are some suggestions to improve my carbon footprint? Be specific. Give 3 short suggestions for each category of commute, food, and electricity. \
                   After each category of suggestions (commute, food, electricity), make two new lines before starting the next one. Do not include the category name (ex: commute, food, electricity). \
                   Each suggestion should be less than 10 words. One new line after every suggestion \
                   (except the space between the categories). Sound like a human being. Don't include a preface. Don't include a closing paragraph. \
                   Make sure the suggestions are relevant to the user's data. \n";

        return prompt;
    }

    function removeBulletsAndNumbering(text) {
        // Remove bullet points, numbering, and other common list indicators
        let cleanedText = text.replace(/^(?:\d+\.\s*|\d+\)\s*|\d+\s*|[a-zA-Z]\.\s*|\*\s*|-\s*|•\s*|→\s*|>\s*)/gm, '');

        // Remove any leading or trailing whitespace
        cleanedText = cleanedText.trim();

        return cleanedText;
    }

    const [isLoading, setIsLoading] = useState(false);

    const getGoalSuggestions = async () => {
        const prompt = constructGoalsPrompt();

        const response = await fetch('/api/openai-goals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });
        const data = await response.json();
        console.log("OpenAI Response:", data);  // Log the response

        // Check if data exists and has at least one item
        if (data && data.message.length > 0) {
            const rawSuggestions = data.message.split('\n').filter(line => line.trim() !== '').slice(0, 9);
            return rawSuggestions.map(suggestion => removeBulletsAndNumbering(suggestion));
        } else {
            console.error("Unexpected OpenAI response format:", data);
            return [];  // Return an empty array or some default value
        }
    }

    const [goalSuggestions, setGoalSuggestions] = useState([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            setIsLoading(true);  //* <- start loading
            const goalResult = await getGoalSuggestions();
            setGoalSuggestions(goalResult);
            setIsLoading(false);  //* <- end loading
        };

        fetchSuggestions();
    }, []);

    const LoadingAnimation = () => (
        <div className={styles.loadingGoalsSection}>
            <div className={styles.loadingGoals}>
                <h6 className={styles.loadingGoalsHeader}>Working on climate change tips for you...</h6>
                <div className={styles.pulsatingCircle}></div>
            </div>
        </div>
    );

    return (
        <>
            <div className={styles.carbonActionCard}>
                {/* Goal Setting */}
                <div className={styles.goalSettingSection}>
                    <h1 className={styles.goalSettingHeader}>Personalized Climate Change Tips</h1>
                    <p className={styles.goalSettingHeaderCond}>We'll keep you updated on your climate goals</p>
                {isLoading ? (  
                    <LoadingAnimation />
                ) : (
                    <div className={styles.goalSettingCheckbox}>
                        {/* Commute Goals */}
                        <div className={styles.goalSettingCheckboxGroup}>
                            <h2 className={styles.goalSettingSubHeader}>Commute</h2>
                            <div
                                className={styles.goalCheckboxGroup}
                            // ... (other props as needed)
                            >
                                {goalSuggestions.slice(0, 3).map((goal, index) => (
                                    <p
                                        className={styles.goalItem}
                                        key={index}
                                    >
                                        {goal}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className={styles.goalSettingCheckboxGroup}>
                            {/* Food Goals */}
                            <h2 className={styles.goalSettingSubHeader}>Food</h2>
                            <div
                                className={styles.goalCheckboxGroup}
                            // ... (other props as needed)
                            >
                                {goalSuggestions.slice(3, 6).map((goal, index) => (
                                    <p
                                        className={styles.goalItem}
                                        key={index}
                                    >
                                        {goal}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className={styles.goalSettingCheckboxGroup}>
                            {/* Electricity Goals */}
                            <h2 className={styles.goalSettingSubHeader}>Electricity</h2>
                            <div
                                className={styles.goalCheckboxGroup}
                            // ... (other props as needed)
                            >
                                {goalSuggestions.slice(6, 9).map((goal, index) => (
                                    <p
                                        className={styles.goalItem}
                                        key={index}
                                    >
                                        {goal}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                </div>
                <div className={styles.yellowCircleContainer}>
                    <div className={`${styles.yellowCircle} ${styles.yellowCircle1}`}></div>
                    <div className={`${styles.yellowCircle} ${styles.yellowCircle2}`}></div>
                    <div className={`${styles.yellowCircle} ${styles.yellowCircle3}`}></div>
                </div>
            </div>
        </>
    );
};
