import {
  IonButton,
  IonCard,
  IonCheckbox,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonProgressBar,
  IonRow,
  IonText,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useHistory } from 'react-router';
import './AttendanceDetails.css';

import { chevronBackOutline } from 'ionicons/icons';

export const AttendanceDetails: React.FC = () => {
  const history = useHistory();
  const [progress, setProgress] = useState(100);
  const [progress2, setProgress2] = useState(0);

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar color='primary'>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <IonIcon icon={chevronBackOutline} />
            <IonText>Attendance Details</IonText>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='ion-padding'>
        <IonGrid>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 15,
            }}
          >
            <IonText>Select Month :</IonText>
            <input
              style={{
                height: 40,
                width: 130,
                border: '1px solid rgb(201, 200, 200)',
                borderRadius: 4,
              }}
              type='month'
            />
          </div>

          <IonRow>
            <div style={{ width: '100%', marginTop: 25 }}>
              <IonLabel>Present</IonLabel>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 15,
                }}
              >
                <IonProgressBar value={progress}></IonProgressBar>
                <IonLabel>{progress}%</IonLabel>
              </div>
            </div>
            <div style={{ width: '100%', marginTop: 25 }}>
              <IonLabel>Absent</IonLabel>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 15,
                }}
              >
                <IonProgressBar value={progress2}></IonProgressBar>
                <IonLabel>{progress2}%</IonLabel>
              </div>
            </div>
            <div style={{ width: '100%', marginTop: 25, marginBottom: 35 }}>
              <IonLabel>Performance</IonLabel>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 15,
                }}
              >
                <IonProgressBar value={progress}></IonProgressBar>
                <IonLabel>{progress}%</IonLabel>
              </div>
            </div>
          </IonRow>
          <div style={{ width: '100%', height: 2, background: 'gold' }}></div>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCard
              style={{
                display: 'flex',
                justifyContent: 'space-between  ',
                width: '100%',
                padding: 15,
                background: 'rgb(236,236,236)',
                borderRadius: 3,
              }}
            >
              <IonText style={{ fontSize: 18 }} color={'dark'}>
                Total Present Days
              </IonText>
              <IonText style={{ fontSize: 18 }} color={'dark'}>
                <b>24</b>
              </IonText>
            </IonCard>
            <IonCard
              style={{
                display: 'flex',
                justifyContent: 'space-between  ',
                width: '100%',
                padding: 15,
                background: 'rgb(236,236,236)',
                borderRadius: 3,
                marginTop: 0,
              }}
            >
              <IonText style={{ fontSize: 18 }} color={'dark'}>
                Total Absent Days
              </IonText>
              <IonText style={{ fontSize: 18 }} color={'dark'}>
                <b>02</b>
              </IonText>
            </IonCard>
            <IonCard
              style={{
                display: 'flex',
                justifyContent: 'space-between  ',
                width: '100%',
                padding: 15,
                background: 'rgb(236,236,236)',
                borderRadius: 3,
                marginTop: 0,
              }}
            >
              <IonText style={{ fontSize: 18 }} color={'dark'}>
                Total Holidays
              </IonText>
              <IonText style={{ fontSize: 18 }} color={'dark'}>
                <b>01</b>
              </IonText>
            </IonCard>
            <IonCard
              style={{
                display: 'flex',
                justifyContent: 'space-between  ',
                width: '100%',
                padding: 15,
                background: 'rgb(236,236,236)',
                borderRadius: 3,
                marginTop: 0,
              }}
            >
              <IonText style={{ fontSize: 18 }} color={'dark'}>
                Total Week Off
              </IonText>
              <IonText style={{ fontSize: 18 }} color={'dark'}>
                <b>04</b>
              </IonText>
            </IonCard>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
