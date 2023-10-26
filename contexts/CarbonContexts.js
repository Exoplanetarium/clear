import React, { useState } from 'react';

// Define the contexts
export const CommuteContext = React.createContext();
export const FoodContext = React.createContext();
export const EnergyContext = React.createContext();

export default function CarbonContexts({ children }) {
    // Define the state variables for the contexts
    const [milesDaily, setMilesDaily] = useState(0);
    const [daysPerWeek, setDaysPerWeek] = useState('');
    const [methodTravel, setMethodTravel] = useState('');
    const [percentLocal, setPercentLocal] = useState(0);
    const [redMeat, setRedMeat] = useState('');
    const [foodSaved, setFoodSaved] = useState(0);
    const [electricityBill, setElectricityBill] = useState(0);
    const [homeType, setHomeType] = useState('');
    const [heatingCoEff, setHeatingCoEff] = useState('');

    return (
        // Provide the contexts
        <CommuteContext.Provider value={{milesDaily, setMilesDaily, daysPerWeek, setDaysPerWeek, methodTravel, setMethodTravel}}>
            <FoodContext.Provider value={{percentLocal, setPercentLocal, redMeat, setRedMeat, foodSaved, setFoodSaved}}>
                <EnergyContext.Provider value={{electricityBill, setElectricityBill, homeType, setHomeType, heatingCoEff, setHeatingCoEff}}>
                    {children}
                </EnergyContext.Provider>
            </FoodContext.Provider>
        </CommuteContext.Provider>
    );
}