import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen110921Navigator from '../features/CopyOfBlankScreen110921/navigator';
import BlankScreen110919Navigator from '../features/BlankScreen110919/navigator';
import BlankScreen010917Navigator from '../features/BlankScreen010917/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen110921: { screen: CopyOfBlankScreen110921Navigator },
BlankScreen110919: { screen: BlankScreen110919Navigator },
BlankScreen010917: { screen: BlankScreen010917Navigator },

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
