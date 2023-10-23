import styles from '/styles/Home.module.css'
import React from 'react'
import ReactSlider from 'react-slider'
import { useState, useEffect } from 'react'
import { ButtonToolbar, IconButton, ButtonGroup, Button } from 'rsuite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGasPump, faBolt, faBus, faTrain, faBicycle, faWalking } from '@fortawesome/free-solid-svg-icons'
import CarbonCalculations from './CarbonCalculations'
import 'rsuite/dist/rsuite-no-reset.min.css'

export default function Result() {
    return (
        <div className={styles.result}>
            <CarbonCalculations />
        </div>
    )
}