import { IonContent, IonGrid, IonPage, IonText } from '@ionic/react';
import { useEffect } from 'react';
import WelcomeImg from '../../assets/images/welcome.png';
import { useHistory } from 'react-router-dom';

const Welcome: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push('/walkthrough');
    }, 1500);
  }, []);
  return (
    <IonPage>
      <IonContent fullscreen>
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
            src={WelcomeImg}
            style={{
              width: '100%',
            }}
          />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
