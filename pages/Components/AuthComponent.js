import React, { useState } from 'react';
import { auth } from '../../services/firebaseClientSetup';
import { useRouter } from 'next/router';
import Image from 'next/image';
import 'rsuite/dist/rsuite-no-reset.min.css';
import styles from '@/styles/Home.module.css';
import { Input, Button, ButtonGroup } from 'rsuite';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import clear_logo from '../../public/images/clear_logo.png'


const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Successfully signed in!");
        // You can navigate the user to the dashboard or main page.
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Successfully signed up!");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  

  return (
    <>
      <div className={styles.headerAuth}>
        <Image className={styles.headerImage} src={clear_logo} alt='clear logo' height={100} width={100} />
        CLEAR
      </div>
      <div className={styles.authCard}>
        <h1 style={{marginBottom: '2rem'}}>Login/Signup</h1>
        <Input
            className={styles.authEmail}
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={value => setEmail(value)} 
        />
        <Input
            className={styles.authPassword}
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={value => setPassword(value)} 
        />
        <ButtonGroup className={styles.authButton}>
          <Button className={styles.loginButton} onClick={handleSignIn} appearance='primary'>Login</Button>
          <Button className={styles.signinButton} onClick={handleSignUp} appearance='primary'>Sign Up</Button>
        </ButtonGroup>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </>
  );
};

export default AuthComponent;
