import { registerRootComponent } from "expo";
import App from "./App";
import StatusBar from "./testComponents/StatusBarComponent";
import activityIndicator from "./testComponents/ActivityIndicator";
import modalComponent from "./testComponents/ModalComponent";
import alertComponent from "./testComponents/AlertComponent";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(modalComponent);
// registerRootComponent(StatusBar);
// registerRootComponent(activityIndicator);
// registerRootComponent(alertComponent);
registerRootComponent(App);
