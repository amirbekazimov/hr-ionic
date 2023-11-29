import {
  IonButton,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useHistory } from 'react-router';
import './Attendance.css';
import TakePhoto from '../../assets/images/take-photo.png';
import {
  arrowDownOutline,
  caretDownOutline,
  chevronBackOutline,
} from 'ionicons/icons';

export const Attendance: React.FC = () => {
  const history = useHistory();
  const [currentTab, setCurrentTab] = useState('check-in');
  const [selectedImage, setSelectedImage] = useState(null);

  const scheduleData = [
    {
      date: 'Mon 1 July',
      duration: '8 hours',
      timeRange: ['10:00 am', '06:00 pm'],
      status: 'In Time',
    },
    {
      date: 'Fri 18 Aug',
      duration: '5 hours',
      timeRange: ['11:00 am', '07:00 pm'],
      status: 'In Time',
    },
    {
      date: 'Fri 18 Aug',
      duration: '5 hours',
      timeRange: ['11:00 am', '07:00 pm'],
      status: 'In Time',
    },
    {
      date: 'Fri 18 Aug',
      duration: '5 hours',
      timeRange: ['11:00 am', '07:00 pm'],
      status: 'In Time',
    },
    {
      date: 'Fri 18 Aug',
      duration: '5 hours',
      timeRange: ['11:00 am', '07:00 pm'],
      status: 'In Time',
    },
  ];

  const handleFileSelect = (event: any) => {
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        // @ts-ignore
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  const handleButtonClick = () => {
    // @ts-ignore
    document.getElementById('hiddenFileInput').click();
  };

  let content;
  if (currentTab === 'check-in') {
    content = (
      <>
        <div className='date-box'>
          <div
            style={{
              display: 'flex',
              gap: 30,
              alignItems: 'center',
            }}
          >
            <IonText>
              <h5>Date:</h5>
            </IonText>
            <input type='date' />
          </div>
          <div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
            <IonText>
              <h5>Time:</h5>
            </IonText>
            <input type='date' />
          </div>
        </div>
        <br />
        <IonText style={{ fontSize: 22 }}>Upload Photo</IonText>
        <IonGrid>
          <IonRow style={{ display: 'flex', paddingTop: 15 }}>
            <input
              type='file'
              id='hiddenFileInput'
              style={{ display: 'none' }}
              onChange={handleFileSelect}
            />
            <div style={{ margin: '0 auto' }}>
              {selectedImage ? (
                <IonImg src={selectedImage} alt='Selected Image' />
              ) : (
                <IonImg src={TakePhoto} onClick={handleButtonClick} />
              )}
            </div>
          </IonRow>
        </IonGrid>
        <IonFooter class='ion-padding' style={{ background: 'white' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              padding: 20,
            }}
          >
            <IonButton expand='block'>
              <b>Check In</b>
            </IonButton>
            <IonButton expand='block'>
              <b>Attendance Details</b>
            </IonButton>
          </div>
        </IonFooter>
      </>
    );
  } else if (currentTab === 'login') {
    content = (
      <>
        <div
          className='date-buttons'
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <IonButton>Daily</IonButton>
          <IonButton>Week</IonButton>
          <IonButton>Month</IonButton>
        </div>
        <div
          style={{
            marginTop: 10,
            display: 'flex',
            paddingLeft: 12,
            paddingRight: 12,
            justifyContent: 'space-between',
          }}
        >
          <IonText>
            <b>Total Hours:40</b>
          </IonText>
          <IonText style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <b>Select Week</b>
            <IonIcon icon={caretDownOutline} />
          </IonText>
        </div>

        <IonList>
          {scheduleData.map((item, index) => (
            <IonItem style={{ marginTop: 10 }} key={index}>
              <div
                style={{
                  marginTop: 8,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 5,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  <IonText>{item.date}</IonText>
                  <IonText>{item.duration}</IonText>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 5,
                    paddingBottom: 5,
                  }}
                >
                  <IonText style={{ display: 'flex', gap: 5 }}>
                    <IonIcon
                      style={{ rotate: '45deg' }}
                      color='success'
                      icon={arrowDownOutline}
                    />
                    {item.timeRange[0]}
                  </IonText>
                  <IonText style={{ display: 'flex', gap: 5 }}>
                    <IonIcon
                      style={{ rotate: '135deg' }}
                      color='danger'
                      icon={arrowDownOutline}
                    />
                    {item.timeRange[1]}
                  </IonText>
                  <IonText>{item.status}</IonText>
                </div>
              </div>
            </IonItem>
          ))}
        </IonList>
      </>
    );
  }

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar color='primary'>
          <div style={{ width: '100%' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <IonIcon size='large' icon={chevronBackOutline} />
              <IonText style={{ fontSize: 23 }}>Attendance</IonText>
            </div>
          </div>
        </IonToolbar>
        <div style={{ background: 'rgb(55,132,250)' }}>
          <IonSegment
            value={currentTab}
            // @ts-ignore
            onIonChange={(e) => setCurrentTab(e.detail.value!)}
            className='segment-active'
          >
            <IonSegmentButton value='check-in'>
              <IonLabel>Check In</IonLabel>
              <div className='segment-indicator'></div>
            </IonSegmentButton>
            <IonSegmentButton value='login'>
              <IonLabel>Attendance Record</IonLabel>
              <div className='segment-indicator'></div>
            </IonSegmentButton>
          </IonSegment>
        </div>
      </IonHeader>
      <IonContent fullscreen class='ion-padding'>
        {content}
      </IonContent>
    </IonPage>
  );
};
