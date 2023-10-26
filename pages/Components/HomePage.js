import styles from '@/styles/Home.module.css'
import React , { useState, useEffect }from 'react'
import Image from 'next/image'
import { Button, ButtonGroup, InputGroup, Input } from 'rsuite'
import stepOne from '@/public/images/stepOne.png'
import greenHouse from '@/public/images/greenHouse.png'
import stepThree from '@/public/images/stepThree.png'
import CalculatorCard from './CalculatorCard'
import { signOut } from 'firebase/auth'
import { auth } from '../services/firebaseClientSetup'
import 'rsuite/dist/rsuite-no-reset.min.css'


export default function HomePage() {
    const [selectedOption, setSelectedOption] = useState(false);
    const [showHome, setShowHome] = useState(true);

    const openCalculator = () => {
        setShowHome(false);
    };

    const handleCalculator = () => {
        setSelectedOption(!selectedOption);
        openCalculator();
    };

    const [email, setEmail] = useState(''); // For the newsletter signup

    const handleEmailChange = (e) => {
        setEmail(e);
    };

    const handleSignup = () => {
        // Logic to handle the newsletter signup
        // For now, just a console log
        console.log(`Signed up with email: ${email}`);
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

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

    const parallaxEffect = scrollPosition * -0.05;

    return (
        <>
            {showHome && <div className={styles.carbon}>
                <p className={styles.carbonHeader}>Discover Your Carbon Footprint</p>
                <p className={styles.carbonSub}>to see how you impact the environment</p>
                <ButtonGroup className={styles.carbonButton}>
                    <Button
                        onClick={handleCalculator}
                        appearance='primary'
                        style={{fontFamily: 'Lato, Open Sans', fontSize: '1.5rem', padding: '1.4rem', margin: '24px'}}>
                        Start Calculating
                    </Button>
                </ButtonGroup>
            </div>}
            {showHome && !selectedOption && <div className={styles.stepWrap}>
                <div className={styles.stepOne}>
                    <div className={styles.stepHeader}>
                        <span className={styles.steps}>1</span>
                        <h1>Measure your impact</h1>
                        <p style={{paddingTop: '1rem', color: '#666'}}>Understand the global impact of climate change and discover your personal role. <br /> Use our interactive tool to calculate your carbon footprint.</p>
                    </div>
                    <div className={styles.stepBody} style={{ transform: `translateY(${parallaxEffect}px)` }}>
                        <Image src={stepOne} alt="globe and calculator" />
                    </div>
                </div>
                <div className={styles.stepTwo}>
                    <div className={styles.stepBody} style={{ transform: `translateY(${parallaxEffect}px)` }} >
                        <Image src={greenHouse} alt="green house" />
                    </div>
                    <div className={styles.stepHeader}>
                        <span className={styles.steps}>2</span>
                        <h1>Personalize Your Action Plan</h1>
                        <p style={{paddingTop: '1rem', color: '#666'}}>We'll help you create a personalized action plan to reduce your carbon footprint.</p>
                    </div>
                </div>
                <div className={styles.stepThree}>
                    <div className={styles.stepHeader}>
                        <span className={styles.steps}>3</span>
                        <h1>Track Your Progress</h1>
                        <p style={{paddingTop: '1rem', color: '#666'}}>Monitor your journey towards a greener lifestyle. <br /> Celebrate your achievements and stay motivated with our progress tracking feature.</p>
                    </div>
                    <div className={styles.stepBody} style={{ transform: `translateY(${parallaxEffect}px)` }} >
                        <Image src={stepThree} height={400} width={400} alt="target and calendar juxtaposed over rising arrow" />
                    </div>
                </div>
            </div>}
            {showHome && !selectedOption && <div className={styles.newsletterSection}>
                <h1 className={styles.newsletterHeader}>Stay Updated on Climate Change</h1>
                <p>Sign up for our newsletter to get the latest news, tips, and more.</p>
                <InputGroup className={styles.newsletterInput}>
                    <Input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                    />
                    <InputGroup.Button onClick={handleSignup}>Sign Up</InputGroup.Button>
                </InputGroup>
            </div>}
            {!showHome && selectedOption && (
                <CalculatorCard setShowHome={setShowHome} setSelectedOption={setSelectedOption} />)}
            <Button className={styles.signOutButton} onClick={handleSignOut} style={{ position: 'fixed', top: '10px', right: '10px', zIndex: '1000000000000' }} appearance='primary'>Sign Out</Button>
        </>
    )
}