import { registerRootComponent } from 'expo';
import App from './App';
import StatusBar from './testComponents/statusBarComponent'; 
import activityIndicator from './testComponents/activityIndicator';

import modalComponent from './testComponents/modalComponent';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(modalComponent);
// registerRootComponent(StatusBar);
registerRootComponent(activityIndicator);
// registerRootComponent(App);
