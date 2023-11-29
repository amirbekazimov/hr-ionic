import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Welcome from './views/welcome/Welcome';
import { Walkthrough } from './views/walkthrough/Walkthrough';
import { LetStart } from './views/let-start/LetStart';
import { Forgot } from '././views/forgot-password/Forgot';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Otp } from './views/otp/Otp';
import { SignUp } from './views/sign-up/SignUp';
import { Login } from './views/login/Login';
import { HrHome } from './views/hr-home/HrHome';
import { UserHome } from './views/user-home/UserHome';
import { Attendance } from './views/attendence/Attendance';
import { AttendanceDetails } from './views/attendance-details/AttendanceDetails';
import { Profile } from './views/profile/Profile';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path='/tab1'>
            <Tab1 />
          </Route>
          <Route exact path='/tab2'>
            <Tab2 />
          </Route>
          <Route path='/tab3'>
            <Tab3 />
          </Route>
          <Route exact path='/'>
            <Redirect to='/tab1' />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab='tab1' href='/tab1'>
            <IonIcon aria-hidden='true' icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab='tab2' href='/tab2'>
            <IonIcon aria-hidden='true' icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab='tab3' href='/tab3'>
            <IonIcon aria-hidden='true' icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <div>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/walkthrough'>
          <Walkthrough />
        </Route>
        <Route path='/let-start'>
          <LetStart />
        </Route>
        <Route path='/otp'>
          <Otp />
        </Route>
        <Route path='/sign-up'>
          <SignUp />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/forgot-password'>
          <Forgot />
        </Route>
        <Route path='/hr-home'>
          <HrHome />
        </Route>
        <Route path='/user-home'>
          <UserHome />
        </Route>
        <Route path='/attendance'>
          <Attendance />
        </Route>
        <Route path='/attendance-details'>
          <AttendanceDetails />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </div>
    </IonReactRouter>
  </IonApp>
);

export default App;
