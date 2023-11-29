import {
  IonCard,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useHistory } from 'react-router';
import './LetStart.css';
import LetStartImg from './../../assets/images/let-start.png';
import LetStartCard from '../../assets/images/let-start-card.png';
import LetStartCard2 from '../../assets/images/let-start-card2.png';

export const LetStart: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar color='transparent'>
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
                src={LetStartImg}
                style={{
                  width: '100%',
                }}
              />
            </IonGrid>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='ion-padding'>
        <IonGrid className='walkthrough-content'>
          <IonRow>
            <div
              style={{
                margin: '0 auto',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                paddingRight: 18,
                borderRadius: 5,
              }}
            >
              <img style={{ width: '40%' }} src={LetStartCard} />
              <IonText
                style={{
                  textAlign: 'center',
                  fontSize: '22px',
                  color: 'black',
                }}
                color={'dark'}
              >
                <b>human Resource</b>
              </IonText>
            </div>
            <div
              style={{
                margin: '0 auto',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                paddingRight: 18,
                padding: 6,
                marginTop: 25,
                borderRadius: 5,
              }}
            >
              <img style={{ width: '40%' }} src={LetStartCard2} />
              <IonText
                style={{
                  textAlign: 'center',
                  fontSize: '22px',
                  color: 'black',
                }}
                color={'dark'}
              >
                <b>Employee</b>
              </IonText>
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
