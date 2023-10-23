import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import clear_logo from '../public/images/clear_logo.png'
import AuthComponent from './Components/AuthComponent'
import HomePage from './Components/HomePage'
import HamburgerMenu from './Components/HamburgerMenu'
import CarbonContexts from './contexts/CarbonContexts'
import { auth } from './services/firebaseClientSetup';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false); // Set loading to false after auth check
    });
  
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div style={{fontSize: '4rem', fontFamily: 'Lato, Open Sans', display: 'flex', height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center'}}>Loading...</div>; // Or any other placeholder/loading component
  }
  
  if (!isAuthenticated) {
    return <AuthComponent />;
  }

  return (
    <CarbonContexts>
      <Head>
        <title>Clear Climate Change</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link ref="icon" src={clear_logo} />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <Image className={styles.headerImage} src={clear_logo} alt='clear logo' height={100} width={100} />
          CLEAR
        </div>
        <HomePage />
      </main>
    </CarbonContexts>
  )
}
