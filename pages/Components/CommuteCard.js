import styles from '/styles/Home.module.css'
import React from 'react'
import ReactSlider from 'react-slider'
import { useState, useEffect, useContext } from 'react'
import { CommuteContext } from '../contexts/CarbonContexts'
import { ButtonToolbar, IconButton, ButtonGroup, Button } from 'rsuite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGasPump, faBolt, faBus, faTrain, faBicycle, faWalking } from '@fortawesome/free-solid-svg-icons'
import { TypeAnimation } from 'react-type-animation'
import 'rsuite/dist/rsuite-no-reset.min.css'

export default function CommuteCard(props) {
    const { milesDaily, setMilesDaily, daysPerWeek, setDaysPerWeek, methodTravel, setMethodTravel } = useContext(CommuteContext);
    const [marksPositions, setMarksPositions] = useState([])

    const pageNumber = props.pageNumber

    const handleMilesDaily = (value) => {
        setMilesDaily(value)
    }

    const handleSelectTravel = (option) => {
        setMethodTravel(prevOption => {
          if(option === prevOption){
            // if the option is already selected, unselect it
            return ''
          } else {
            // if the option is not selected, make it the selected option
            return option
          }
        })
    }

    const handleSelect = (option) => {
        setDaysPerWeek(prevOption => {
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

    return (
        <div className={styles.commuteArea}>
            {pageNumber == 0 ? <div className={styles.commuteCard}>
                <div className={styles.commuteCardHeader}>
                    <p>How many miles do you travel every day?</p>
                </div>
                <div className={styles.commuteCardInfo}>
                    <div className="customSlider-values">
                        {marksPositions.map((position, index) => (
                            <div
                                key={index}
                                className={`customSlider-value${index * 10 === milesDaily ? " active" : ""}`}
                                style={{
                                    left: `calc(${position}% - ${index === 0 ? 0 : -1}px)`,
                                }}
                            >
                                {index * 10}
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
                        step={10}
                        defaultValue={0}
                        value={milesDaily}
                        onChange={setMilesDaily}  
                        renderMark={(props) => {
                            if (props.key <= milesDaily) {
                            props.className = "customSlider-mark customSlider-mark-before"
                            } else {
                            props.className = "customSlider-mark"
                            }
                            return <span {...props} />
                        }} 
                    />
                </div>
            </div> : null}
            {pageNumber == 1 ? <div className={styles.commuteCard} style={{padding: '2rem'}}>
                <div className={styles.commuteCardHeader}>
                    <p>Out of the week, how many days do you travel?</p>
                </div>
                <div className={styles.commuteCardInfo} style={{paddingTop: "0px"}}>
                    <div className="customSlider-values">
                        {marksPositions.map((position, index) => (
                            <div
                                key={index}
                                className={`customSlider-value${index === daysPerWeek ? " active" : ""}`}
                                style={{
                                    left: `calc(${position}% - ${index === 0 ? 0 : -1}px)`,
                                }}
                            >
                                {index}
                            </div>
                        ))}
                    </div>
                    <ReactSlider
                        className="customSlider"
                        trackClassName="customSlider-track"
                        thumbClassName="customSlider-thumb"
                        markClassName="customSlider-mark"
                        marks={1}
                        min={0}
                        max={7}
                        step={1}
                        defaultValue={0}
                        value={daysPerWeek}
                        onChange={setDaysPerWeek}  
                        renderMark={(props) => {
                            if (props.key <= daysPerWeek) {
                            props.className = "customSlider-mark customSlider-mark-before"
                            } else {
                            props.className = "customSlider-mark"
                            }
                            return <span {...props} />
                        }} 
                    />
                </div>
            </div> : null}
            {pageNumber == 2 ? <div className={styles.commuteCard} >
                <div className={styles.commuteCardHeader}>
                    <p>What mode of transportation <br /> do you primarily use?</p>
                </div>
                <div className={styles.commuteCardInfo} style={{paddingTop: "0px"}}>
                <ButtonToolbar className={styles.buttonGroup} style={{width: 'fit-content'}}>
                    <Button key='gasCar' onClick={() => handleSelectTravel('gasCar')} 
                                appearance={methodTravel.includes('gasCar') ? 'primary' : 'ghost'}>
                            <FontAwesomeIcon key={methodTravel} icon={faGasPump} style={methodTravel.includes('gasCar') ? {color: "#ffffff", marginRight: "10px"} : {color: "#172a4a", marginRight: "10px"}} />
                            Gasoline Car
                    </Button>
                    <Button key='elecCar' onClick={() => handleSelectTravel('elecCar')} 
                                appearance={methodTravel.includes('elecCar') ? 'primary' : 'ghost'}>
                            <FontAwesomeIcon key={methodTravel} icon={faBolt} style={methodTravel.includes('elecCar') ? {color: "#ffffff", marginRight: "10px"} : {color: "#172a4a", marginRight: "10px"}} />
                            Electric Car
                    </Button>
                    <Button key='bus' onClick={() => handleSelectTravel('bus')} 
                                appearance={methodTravel.includes('bus') ? 'primary' : 'ghost'}>
                            <FontAwesomeIcon key={methodTravel} icon={faBus} style={methodTravel.includes('bus') ? {color: "#ffffff", marginRight: "10px"} : {color: "#172a4a", marginRight: "10px"}} />
                            Bus
                    </Button>
                    <Button key='train' onClick={() => handleSelectTravel('train')} 
                                appearance={methodTravel.includes('train') ? 'primary' : 'ghost'}>
                            <FontAwesomeIcon key={methodTravel} icon={faTrain} style={methodTravel.includes('train') ? {color: "#ffffff", marginRight: "10px"} : {color: "#172a4a", marginRight: "10px"}} />
                            Train
                    </Button>
                    <Button key='bike' onClick={() => handleSelectTravel('bike')} 
                                appearance={methodTravel.includes('bike') ? 'primary' : 'ghost'}>
                            <FontAwesomeIcon key={methodTravel} icon={faBicycle} style={methodTravel.includes('bike') ? {color: "#ffffff", marginRight: "10px"} : {color: "#172a4a", marginRight: "10px"}} />
                            Bicycle
                    </Button>
                    <Button key='walk' onClick={() => handleSelectTravel('walk')} 
                                appearance={methodTravel.includes('walk') ? 'primary' : 'ghost'}>
                            <FontAwesomeIcon key={methodTravel} icon={faWalking} style={methodTravel.includes('walk') ? {color: "#ffffff", marginRight: "10px"} : {color: "#172a4a", marginRight: "10px"}} />
                            Walking
                    </Button>
                </ButtonToolbar>
                </div>
            </div> : null}
        </div>
    )
}