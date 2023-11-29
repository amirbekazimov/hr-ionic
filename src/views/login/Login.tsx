import {
  IonButton,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useHistory } from 'react-router';
import './Login.css';
import LoginImg from '../../assets/images/login.png';

import { backspaceOutline, chevronBackOutline } from 'ionicons/icons';

export const Login: React.FC = () => {
  const history = useHistory();

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
                src={LoginImg}
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
            <b>Login</b>
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
              style={{
                width: '80%',
                height: 50,

                padding: 10,
                border: '1px solid rgb(239, 239, 239)',
              }}
              placeholder='Enter mobile number'
              type='number'
            />
            <input
              style={{
                width: '80%',
                height: 50,
                padding: 10,
                border: '1px solid rgb(239, 239, 239)',
              }}
              placeholder='Enter employee ID'
              type='text'
            />
            <IonText
              style={{
                width: '80%',
                textAlign: 'right',
                textDecoration: 'underline',
              }}
              color={'dark'}
            >
              <b>Forgot Password</b>
            </IonText>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter
        style={{ background: 'white', paddingBottom: 50, textAlign: 'center' }}
      >
        <IonButton style={{ width: '80%', margin: '0 auto' }} expand='block'>
          LOG IN
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};
