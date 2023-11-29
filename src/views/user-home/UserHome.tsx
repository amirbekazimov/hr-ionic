import {
  IonButton,
  IonCard,
  IonCheckbox,
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
import './UserHome.css';
import CardImg from '../../assets/images/hr-card.png';
import AttendanceImg from '../../assets/images/attendance.png';
import ChatboxImg from '../../assets/images/chatbox.png';
import SalaryImg from '../../assets/images/salary.png';
import UiUxImg from '../../assets/images/ui-ux.png';

import {
  chatbox,
  chevronForwardOutline,
  menuOutline,
  timeOutline,
} from 'ionicons/icons';

export const UserHome: React.FC = () => {
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
        <IonCard
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            padding: 8,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <IonText color={'dark'}>Attendence</IonText>
            <IonText color={'dark'}>Tue 26 July</IonText>
            <IonText color={'dark'}>10.00.30 AM</IonText>
            <IonIcon
              color='primary'
              size='large'
              icon={chevronForwardOutline}
            />
          </div>
          <IonButton style={{ width: '80%', margin: '0 auto' }} expand='block'>
            <IonIcon color='warning' icon={timeOutline} />
            <IonText style={{ marginLeft: 8 }}>Out Of Office</IonText>
          </IonButton>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <IonText color={'dark'}>10.00.30AM</IonText>
              <br />
              <br />
              <IonText color={'dark'}>05.0030PM</IonText>
            </div>
            <div>
              <IonCheckbox>In Office</IonCheckbox>
              <br />
              <IonCheckbox> Out Office</IonCheckbox>
            </div>
          </div>
        </IonCard>
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
