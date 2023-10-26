import styles from '/styles/Home.module.css'
import React from 'react'
import ReactSlider from 'react-slider'
import { useState, useEffect, useContext } from 'react'
import { FoodContext } from '../contexts/CarbonContexts'
import { ButtonToolbar, IconButton, ButtonGroup, Button } from 'rsuite'
import 'rsuite/dist/rsuite-no-reset.min.css'

export default function FoodCard(props) {
    const { percentLocal, setPercentLocal, redMeat, setRedMeat, foodSaved, setFoodSaved } = useContext(FoodContext)
    const [marksPositions, setMarksPositions] = useState([])


    const pageNumber = props.pageNumber

    const handleRedMeat = (option) => {
        setRedMeat(prevOption => {
          if(option === prevOption){
            // if the option is already selected, unselect it
            return ''
          } else {
            // if the option is not selected, make it the selected option
            return option
          }
        })
    }
    
    // Just to get the values centered on the marks :/
    useEffect(() => {
        const calculateMarksPositions = () => {
            const sliderElement = document.querySelector('.customSlider')

            if (sliderElement) {
                const sliderWidth = sliderElement.clientWidth
                const marks = document.querySelectorAll('.customSlider-mark')
        
                const positions = Array.from(marks).map((mark) => {
                    const markRect = mark.getBoundingClientRect()
                    const sliderRect = mark.closest('.customSlider').getBoundingClientRect()
                    const position = ((markRect.left - sliderRect.left) / sliderWidth) * 100
                    return position
                })
        
                setMarksPositions(positions)
            }
        }

        calculateMarksPositions()
        window.addEventListener('resize', calculateMarksPositions)
        return () => {
            window.removeEventListener('resize', calculateMarksPositions)
        }
    })

    return(
        <div className={styles.commuteArea}>
            {pageNumber == 0 ? <div className={styles.commuteCard} style={{padding: '2rem'}}>
                <div className={styles.commuteCardHeader}>
                    <p>How often do you consume red meat?</p>
                </div>
                <div className={styles.commuteCardInfo} style={{paddingTop: "0px"}}>
                    <ButtonToolbar className={styles.otherButtonGroup}>
                        <Button onClick={() => handleRedMeat('never')} 
                                    appearance={redMeat.includes('never') ? 'primary' : 'ghost'}>
                                Never
                        </Button>
                        <Button onClick={() => handleRedMeat('everyMeal')} 
                                    appearance={redMeat.includes('everyMeal') ? 'primary' : 'ghost'}>
                                In every meal
                        </Button>
                        <Button onClick={() => handleRedMeat('once')} 
                                    appearance={redMeat.includes('once') ? 'primary' : 'ghost'}>
                                Once a day
                        </Button>
                        <Button onClick={() => handleRedMeat('severalPerWeek')} 
                                    appearance={redMeat.includes('severalPerWeek') ? 'primary' : 'ghost'}>
                                Several times a week
                        </Button>
                        <Button onClick={() => handleRedMeat('severalPerMonth')} 
                                    appearance={redMeat.includes('severalPerMonth') ? 'primary' : 'ghost'}>
                                Several times a month
                        </Button>
                    </ButtonToolbar>
                </div>
            </div> : null}
            {pageNumber == 1 ? <div className={styles.commuteCard} style={{padding: '2rem'}}>
                <div className={styles.commuteCardHeader}>
                    <p>How much food goes uneaten <br/>in your household each week?</p>
                </div>
                <div className={styles.commuteCardInfo} style={{paddingTop: "0px"}}>
                    <div className="customSlider-values">
                            {marksPositions.map((position, index) => (
                                <div
                                    key={index}
                                    className={`customSlider-value${index * 10 === foodSaved ? " active" : ""}`}
                                    style={{
                                        left: `calc(${position}% - ${index === 0 ? 0 : -1}px)`,
                                    }}
                                >
                                    {index * 10 + '%'}
                                </div>
                            ))}
                        </div>
                        <ReactSlider
                            className="customSlider"
                            trackClassName="customSlider-track"
                            thumbClassName="customSlider-thumb"
                            markClassName="customSlider-mark"
                            marks={10}
                            min={0}
                            max={100}
                            step={1}
                            defaultValue={0}
                            value={foodSaved}
                            onChange={setFoodSaved}
                            renderMark={(props) => {
                                if (props.key <= foodSaved) {
                                props.className = "customSlider-mark customSlider-mark-before"
                                } else {
                                props.className = "customSlider-mark"
                                }
                                return <span {...props} />
                            }} 
                        />
                    </div>
            </div> : null}
            {pageNumber == 2 ? <div className={styles.commuteCard}>
                <div className={styles.commuteCardHeader}>
                    <p>How much of your diet consists of locally sourced foods?</p>
                </div>
                <div className={styles.commuteCardInfo} style={{paddingTop: "0px"}}>
                    <div className="customSlider-values">
                        {marksPositions.map((position, index) => (
                            <div
                                key={index}
                                className={`customSlider-value${index * 10 === percentLocal ? " active" : ""}`}
                                style={{
                                    left: `calc(${position}% - ${index === 0 ? 0 : -1}px)`,
                                }}
                            >
                                {index * 10 + '%'}
                            </div>
                        ))}
                    </div>
                    <ReactSlider
                        className="customSlider"
                        trackClassName="customSlider-track"
                        thumbClassName="customSlider-thumb"
                        markClassName="customSlider-mark"
                        marks={10}
                        min={0}
                        max={100}
                        step={1}
                        defaultValue={percentLocal}
                        onChange={setPercentLocal}
                        renderMark={(props) => {
                            if (props.key <= percentLocal) {
                            props.className = "customSlider-mark customSlider-mark-before"
                            } else {
                            props.className = "customSlider-mark"
                            }
                            return <span {...props} />
                        }} 
                    />
                </div>
            </div> : null}
        </div>
    )
}