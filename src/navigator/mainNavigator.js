import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile103355Navigator from '../features/UserProfile103355/navigator';
import Tutorial103354Navigator from '../features/Tutorial103354/navigator';
import NotificationList103326Navigator from '../features/NotificationList103326/navigator';
import Settings103325Navigator from '../features/Settings103325/navigator';
import Settings103317Navigator from '../features/Settings103317/navigator';
import UserProfile103315Navigator from '../features/UserProfile103315/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile103355: { screen: UserProfile103355Navigator },
Tutorial103354: { screen: Tutorial103354Navigator },
NotificationList103326: { screen: NotificationList103326Navigator },
Settings103325: { screen: Settings103325Navigator },
Settings103317: { screen: Settings103317Navigator },
UserProfile103315: { screen: UserProfile103315Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
