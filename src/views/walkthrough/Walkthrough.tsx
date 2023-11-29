import {
  IonButton,
  IonCol,
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
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useHistory } from 'react-router';
import { arrowForwardOutline } from 'ionicons/icons';
import WalkthroughImg1 from '../../assets/images/walkthrough1.png';
import WalkthroughImg2 from '../../assets/images/walkthrough2.png';
import WalkthroughImg3 from '../../assets/images/walkthrough3.png';
import './Walkthrough.css';

export const Walkthrough: React.FC = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const history = useHistory();

  const swiperData = [
    {
      title: 'Leave Manage',
      description:
        "Leave management is the process of managing employee time-off requests. It's a specific subset of the broader discipline of absence management.",
      img: WalkthroughImg1,
    },
    {
      title: 'Attendance Manage',
      description:
        'Attandance management is the process of managing employee time-off requests. It is a specific subset of the broader discipline of absence management.',
      img: WalkthroughImg2,
    },
    {
      title: 'Salary Manage',
      description:
        'A salary is a form of payment from an employer to an employee. A salary is fixed and is paid in regular instalments, often monthly.',
      img: WalkthroughImg3,
    },
  ];

  const handleNextSlide = () => {
    if (swiper) {
      if (currentSlide === 2) {
      } else if (currentSlide === swiperData.length - 1) {
        history.push('/other-path');
      } else {
        swiper.slideNext();
      }
    }
  };

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar color='transparent'>
          <div
            style={{
              display: 'flex',
              float: 'right',
            }}
            className='swiper-custom-pagination'
          >
            <IonButton fill='clear' color={'primary'}>
              <b>Skip</b>
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='ion-padding'>
        <IonGrid className='walkthrough-content'>
          <IonRow>
            <Swiper
              pagination={{
                el: '.swiper-custom-pagination',

                type: 'custom',
                clickable: true,
              }}
              style={{
                padding: 0,
              }}
              modules={[Pagination]}
              onSlideChange={(swiper) => {
                setCurrentSlide(swiper.activeIndex);
              }}
              onSwiper={(swiper) => {
                setSwiper(swiper);
              }}
            >
              {swiperData.map((item, index) => (
                <SwiperSlide key={index}>
                  <IonRow>
                    <IonCol>
                      <IonImg
                        style={{
                          width: '100%',
                        }}
                        src={item.img}
                        alt='The Wisconsin State Capitol building in Madison, WI at night'
                      ></IonImg>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol style={{ textAlign: 'center' }}>
                      <IonText color={'primary'}>
                        {' '}
                        <h1>
                          <b>{item.title}</b>
                        </h1>
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol style={{ textAlign: 'center' }}>
                      <IonText style={{ textAlign: 'center' }}>
                        {item.description}
                      </IonText>
                    </IonCol>
                  </IonRow>
                </SwiperSlide>
              ))}
            </Swiper>
          </IonRow>
          <IonRow className='ion-justify-content-center'>
            <IonCol>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                }}
                className='swiper-custom-pagination'
              >
                {swiperData.map((item, index) => (
                  <div
                    key={index}
                    style={{ background: 'rgb(0,99,220)' }}
                    className={`swiper-pagination-bullet ${
                      index === currentSlide
                        ? 'swiper-pagination-bullet-active'
                        : ''
                    }`}
                  ></div>
                ))}
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter style={{ background: 'white' }}>
        <IonRow>
          <IonCol style={{ textAlign: 'center' }}>
            <IonButton
              size='large'
              style={{ marginBottom: '15px' }}
              className='walkthrough-btn'
              onClick={handleNextSlide}
            >
              Next
            </IonButton>
          </IonCol>
        </IonRow>
      </IonFooter>
    </IonPage>
  );
};
