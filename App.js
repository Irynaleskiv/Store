import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

import AuthScreen from "./src/screens/Auth/Auth";
import ThingsList from "./src/screens/ThingsList/ThingsList";
import Messages from "./src/screens/Messages/Messages";
import SearchAgent from "./src/screens/SearchAgent/SearchAgent";
import ProfileInfo from "./src/screens/ProfileInfo/ProfileInfo";
import ItemDetail from "./src/screens/ItemDetail/ItemDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

Navigation.registerComponent("store.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("store.ThingsList", () => ThingsList, store, Provider);
Navigation.registerComponent("store.Messages", () => Messages, store, Provider);
Navigation.registerComponent("store.SearchAgent", () => SearchAgent, store, Provider);
Navigation.registerComponent("store.ProfileInfo", () => ProfileInfo, store, Provider);

Navigation.registerComponent("store.ItemDetail", () => ItemDetail, store, Provider);
Navigation.registerComponent("store.SideDrawer", () => SideDrawer, store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: "store.AuthScreen",
    title: "Login"
  }
});
