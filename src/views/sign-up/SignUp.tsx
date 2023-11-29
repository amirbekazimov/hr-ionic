import {
  IonBackButton,
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from '@ionic/react';
import React, { useState, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useHistory } from 'react-router';
import './SignUp.css';
import SignUpImg from '../../assets/images/sign-up.png';

import { backspaceOutline, chevronBackOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

export const SignUp: React.FC = () => {
  const BASE_URL = 'https://www.prounity.uz/v1';
  const history = useHistory();
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const mobileNumberRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signUp = () => {
    const mobileNumberValue = mobileNumberRef.current?.value;
    const passwordValue = passwordRef.current?.value;

    fetch(`${BASE_URL}/authentification/api/register-by-sms/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: mobileNumberValue,
        password: passwordValue,
        email: mobileNumber + '@gmail.com',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        history.push('/opt');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar
          style={{ background: 'rgb(249,250,255)' }}
          color='transparent'
        >
          <IonButton fill='clear'>
            <IonIcon size='large' icon={chevronBackOutline} />
          </IonButton>
          <div>
            <IonGrid
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <img
                alt='bright'
                src={SignUpImg}
                style={{
                  width: '100%',
                }}
              />
            </IonGrid>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='ion-padding'>
        <IonGrid style={{ textAlign: 'center' }}>
          <IonText
            class='ion-text-center'
            style={{
              textAlign: 'center',
              width: '100%',
              fontSize: 22,
              color: 'rgb(46, 116, 230)',
            }}
            color={'primary'}
          >
            <b>Sign Up</b>
          </IonText>
          <IonRow
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              alignItems: 'center',
            }}
          >
            <br />
            <input
              ref={mobileNumberRef}
              style={{
                width: '80%',
                height: 50,
                padding: 10,
                border: '1px solid rgb(239, 239, 239)',
              }}
              placeholder='Enter mobile number'
              type='number'
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <input
              ref={passwordRef}
              style={{
                width: '80%',
                height: 50,
                padding: 10,
                border: '1px solid rgb(239, 239, 239)',
              }}
              placeholder='Enter password'
              type='text'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter
        style={{ background: 'white', paddingBottom: 50, textAlign: 'center' }}
      >
        <IonButton
          onClick={signUp}
          style={{ width: '80%', margin: '0 auto' }}
          expand='block'
        >
          GET OTP
        </IonButton>
        <br />
        <Link style={{ textDecoration: 'none' }} to={'/login'}>
          <IonText color={'primary'}>
            <IonText color={'dark'}>Already </IonText>
            Login?
          </IonText>
        </Link>
      </IonFooter>
    </IonPage>
  );
};
