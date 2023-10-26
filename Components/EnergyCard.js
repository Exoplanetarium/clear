import styles from '/styles/Home.module.css'
import React from 'react'
import ReactSlider from 'react-slider'
import { useState, useEffect, useContext } from 'react'
import { EnergyContext } from '../contexts/CarbonContexts'
import { ButtonToolbar, IconButton, ButtonGroup, Button, InputNumber, InputGroup, Divider } from 'rsuite'
import 'rsuite/dist/rsuite-no-reset.min.css'

export default function EnergyCard(props) {
    const { electricityBill, setElectricityBill, homeType, setHomeType, heatingCoEff, setHeatingCoEff } = useContext(EnergyContext)
    const [marksPositions, setMarksPositions] = useState([])

    const pageNumber = props.pageNumber

    const handleKeyPress = (event) => {
        if (event.key === '-' || event.key === '.' || event.key === 'e') {
          event.preventDefault();
        }
    };

    // for second question single-select
    const handleHomeType = (option) => {
        setHomeType(prevOption => {
          if(option === prevOption){
            // if the option is already selected, unselect it
            return ''
          } else {
            // if the option is not selected, make it the selected option
            return option
          }
        })
    }

    const handleHeatingCoEff = (option) => {
        setHeatingCoEff(prevOption => {
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
            {pageNumber == 0 ? <div className={styles.commuteCard}>
                <div className={styles.commuteCardHeader}>
                    <p>What is your average monthly electricity bill?</p>
                </div>
                <div className={styles.commuteCardInfo}>
                    <InputGroup className={styles.inputGroup}>
                        <InputNumber min={0} type='number' onKeyPress={handleKeyPress} value={electricityBill} onChange={setElectricityBill} prefix='$' defaultValue={0}/>
                    </InputGroup>
                </div>
            </div> : null}
            {pageNumber == 1 ? <div className={styles.commuteCard} style={{padding: '2rem'}}>
                <div className={styles.commuteCardHeader}>
                    <p>What kind of home do you live in?</p>
                </div>
                <div className={styles.commuteCardInfo}>
                <ButtonToolbar className={styles.buttonGroup}>
                    <Button onClick={() => handleHomeType('detached')} 
                                appearance={homeType.includes('detached') ? 'primary' : 'ghost'}>
                            Single Family (Detached)
                    </Button>
                    <Button onClick={() => handleHomeType('attached')} 
                                appearance={homeType.includes('attached') ? 'primary' : 'ghost'}>
                            Single Family (Attached)
                    </Button>
                    <Button onClick={() => handleHomeType('smallApt')} 
                                appearance={homeType.includes('smallApt') ? 'primary' : 'ghost'}>
                            Apartment (2 - 4 units)
                    </Button>
                    <Button onClick={() => handleHomeType('largeApt')} 
                                appearance={homeType.includes('largeApt') ? 'primary' : 'ghost'}>
                            Apartment (5+ units)
                    </Button>
                    <Button onClick={() => handleHomeType('mobile')} 
                                appearance={homeType.includes('mobile') ? 'primary' : 'ghost'}>
                            Mobile Homes
                    </Button>
                </ButtonToolbar>
                </div>
            </div> : null}
            {pageNumber == 2 ? <div className={styles.commuteCard}>
                <div className={styles.commuteCardHeader}>
                    <p>During the cold months, how often is the heating turned on in your home?</p>
                </div>
                <div className={styles.commuteCardInfo}>
                <ButtonToolbar className={styles.otherButtonGroup}>
                    <Button onClick={() => handleHeatingCoEff('never')} 
                                appearance={heatingCoEff.includes('never') ? 'primary' : 'ghost'}>
                            Rarely or never
                    </Button>
                    <Button onClick={() => handleHeatingCoEff('fewHours')} 
                                appearance={heatingCoEff.includes('fewHours') ? 'primary' : 'ghost'}>
                            A few hours a day
                    </Button>
                    <Button onClick={() => handleHeatingCoEff('mostHours')} 
                                appearance={heatingCoEff.includes('mostHours') ? 'primary' : 'ghost'}>
                            Most of the day
                    </Button>
                    <Button onClick={() => handleHeatingCoEff('allDay')} 
                                appearance={heatingCoEff.includes('allDay') ? 'primary' : 'ghost'}>
                            All day and night
                    </Button>
                </ButtonToolbar>
                </div>
            </div> : null}
        </div>
    )
}