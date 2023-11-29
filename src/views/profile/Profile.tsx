import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCheckbox,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
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
import './Profile.css';

import { chevronBackOutline } from 'ionicons/icons';

export const Profile: React.FC = () => {
  const history = useHistory();
  const [progress, setProgress] = useState(100);
  const [progress2, setProgress2] = useState(0);

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar color='primary'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <IonIcon icon={chevronBackOutline} />
              <IonText>Profile</IonText>
            </div>
            <div>
              <IonText>Log Out</IonText>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='ion-padding'>
        <IonGrid>
          <IonRow>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <IonAvatar style={{ background: 'red', width: 80, height: 80 }}>
                <img
                  alt="Silhouette of a person's head"
                  src='https://ionicframework.com/docs/img/demos/avatar.svg'
                />
              </IonAvatar>
            </div>

            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                marginTop: 25,
                borderRadius: 3,
              }}
            >
              <input
                placeholder='Names'
                style={{
                  width: '80%',
                  padding: 8,
                  height: 35,
                  border: '1px solid rgb(236, 235, 235)',
                  borderRadius: 3,
                }}
                type='text'
              />
              <input
                placeholder='EmployeeId'
                style={{
                  width: '80%',
                  padding: 8,
                  height: 35,
                  border: '1px solid rgb(236, 235, 235)',
                  borderRadius: 3,
                }}
                type='text'
              />
              <input
                placeholder='Mail Id'
                style={{
                  width: '80%',
                  padding: 8,
                  height: 35,
                  border: '1px solid rgb(236, 235, 235)',
                  borderRadius: 3,
                }}
                type='email'
              />
              <input
                placeholder='Mobile Number'
                style={{
                  width: '80%',
                  padding: 8,
                  height: 35,
                  border: '1px solid rgb(236, 235, 235)',
                  borderRadius: 3,
                }}
                type='email'
              />
              <input
                placeholder='Date of Birth'
                style={{
                  width: '80%',
                  padding: 8,
                  height: 35,
                  border: '1px solid rgb(236, 235, 235)',
                  borderRadius: 3,
                }}
                type='date'
              />
              <textarea
                placeholder='Address'
                style={{
                  width: '80%',
                  padding: 8,
                  height: 65,
                  border: '1px solid rgb(236, 235, 235)',
                  borderRadius: 3,
                }}
              ></textarea>
              <input
                placeholder='Position'
                style={{
                  width: '80%',
                  padding: 8,
                  height: 35,
                  border: '1px solid rgb(236, 235, 235)',
                  borderRadius: 3,
                }}
                type='text'
              />
              <input
                placeholder='Create Password'
                style={{
                  width: '80%',
                  padding: 8,
                  height: 35,
                  border: '1px solid rgb(236, 235, 235)',
                  borderRadius: 3,
                }}
                type='text'
              />
              <input
                placeholder='Confirm Password'
                style={{
                  width: '80%',
                  padding: 8,
                  height: 35,
                  border: '1px solid rgb(236, 235, 235)',
                  borderRadius: 3,
                }}
                type='text'
              />
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>

      <IonFooter class='ion-padding' style={{ background: 'white' }}>
        <IonButton className='ion-padding' expand='block'>
          Save And Done
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};
