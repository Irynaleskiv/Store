import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {

  Promise.all([
    Icon.getImageSource("md-basket", 20),
    Icon.getImageSource("md-chatboxes", 20),
    Icon.getImageSource("md-search", 20),
    Icon.getImageSource("md-person", 20),
    Icon.getImageSource("md-menu", 20)
  ]).then(sources => {

    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "store.ThingsList",
          label: "Things List",
          title: "Things List",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[4],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "store.Messages",
          label: "Message",
          title: "Messages",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[4],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "store.SearchAgent",
          label: "Search",
          title: "Search",
          icon: sources[2],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[4],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "store.ProfileInfo",
          label: "Profile",
          title: "Profile",
          icon: sources[3],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[4],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: "store.SideDrawer"
        }
      }
    });
  });

};

export default startTabs;