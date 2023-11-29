import {
  IonButton,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useHistory } from 'react-router';
import './HrHome.css';
import CardImg from '../../assets/images/hr-card.png';
import AttendanceImg from '../../assets/images/attendance.png';
import ChatboxImg from '../../assets/images/chatbox.png';
import SalaryImg from '../../assets/images/salary.png';
import UiUxImg from '../../assets/images/ui-ux.png';

import { chatbox, chevronForwardOutline, menuOutline } from 'ionicons/icons';

export const HrHome: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar color='primary'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <IonIcon size='large' icon={menuOutline} />
              <IonText>HR Home</IonText>
            </div>
            <IonIcon size='large' icon={chatbox} />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='ion-padding'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <IonText style={{ fontSize: 25 }}>Upcoming Event</IonText>
          <IonIcon size='large' color='medium' icon={chevronForwardOutline} />
        </div>
        <br />
        <img style={{ width: '100%', height: 167 }} src={CardImg} />

        <br />
        <IonText style={{ fontSize: 25 }}>Service</IonText>

        <IonGrid>
          <IonRow style={{ display: 'flex', paddingTop: 15 }}>
            <div className='service-circle'>
              <img src={AttendanceImg} alt='errorImg' />
              <IonText color={'medium'}>
                <b>Attendance</b>
              </IonText>
            </div>
            <div className='service-circle'>
              <img src={ChatboxImg} alt='errorImg' />
              <IonText color={'medium'}>
                <b>Chatbox</b>
              </IonText>
            </div>
            <div className='service-circle'>
              <img src={SalaryImg} alt='errorImg' />
              <IonText color={'medium'}>
                <b>Salary</b>
              </IonText>
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter class='ion-padding' style={{ background: 'white' }}>
        <IonText style={{ fontSize: 23 }}>
          <b>Ongoing Task</b>
        </IonText>
        <br />
        <br />
        <img style={{ height: 180 }} src={UiUxImg} alt='' />
      </IonFooter>
    </IonPage>
  );
};
