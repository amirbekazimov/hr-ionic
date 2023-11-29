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
import React, { useState, useRef, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useHistory } from 'react-router';
import './Otp.css';
import OtpImg from './../../assets/images/otp.png';

import { backspaceOutline, chevronBackOutline } from 'ionicons/icons';

export const Otp: React.FC = () => {
  const history = useHistory();
  const [OTP, setOTP] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (index: number, value: string) => {
    const newOTP = [...OTP];
    newOTP[index] = value;
    const maxLength = 1;
    newOTP[index] = value.slice(0, maxLength);

    if (value && index < newOTP.length - 1) {
      setOTP(newOTP);
      const nextInputRef = inputRefs.current[index + 1];
      if (nextInputRef) {
        nextInputRef.setFocus();
      }
    } else {
      setOTP(newOTP);
    }
  };

  const inputRefs = useRef<HTMLIonInputElement[]>([]);
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, OTP.length);
  }, [OTP]);

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
                src={OtpImg}
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
            <b>OTP</b>
          </IonText>
          <IonRow>
            <IonText>Enter Your OTP</IonText>
            <br />
            <IonCol
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              {OTP.map((value, index) => (
                <IonInput
                  key={index}
                  className='small-input'
                  ref={(el) => (inputRefs.current[index] = el!)}
                  value={value}
                  // @ts-ignore
                  maxLength={1}
                  autofocus={index === 0}
                  onIonInput={(e) =>
                    // @ts-ignore
                    handleOtpChange(index, (e.target as HTMLInputElement).value)
                  }
                ></IonInput>
              ))}
            </IonCol>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                padding: 4,
              }}
            >
              <IonText color={'primary'}>Resend OTP?</IonText>
              <IonText color={'dark'}>00:59</IonText>
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter style={{ background: 'white', paddingBottom: 50 }}>
        <IonButton style={{ width: '80%', margin: '0 auto' }} expand='block'>
          VERIFY OTP
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};
