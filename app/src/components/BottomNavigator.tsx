import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'screens/Home';
import FindBin from 'screens/FindBin';
import MyPage from 'screens/MyPage';
import HomeSvg from 'assets/images/HomeSvg';
import MySvg from 'assets/images/MySvg';
import BinSvg from 'assets/images/BinSvg';
import { Palette } from 'constants/palette';
import { StyleSheet } from 'react-native';

export default function BottomNavigator() {
  const Tab = createBottomTabNavigator<RootTabParamList>();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarItemStyle: styles.tabBarItem
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: 'HOME',
            tabBarActiveTintColor: Palette.Primary,
            tabBarIcon: ({focused}) => (
              <HomeSvg width='25' height='24' fill={focused ? Palette.Primary : Palette.Gray3}/>
            ),
          }}
        />
        <Tab.Screen
          name="FindBin"
          component={FindBin}
          options={{
            headerShown: false,
            tabBarLabel: 'FIND BINS',
            tabBarActiveTintColor: Palette.Primary,
            tabBarIcon: ({focused}) => (
              <BinSvg width='25' height='24' fill={focused ? Palette.Primary : Palette.Gray3}/>
            ),
          }}
        />
        <Tab.Screen
          name="MyPage"
          component={MyPage}
          options={{
            headerShown: false,
            tabBarLabel: 'MY',
            tabBarActiveTintColor: Palette.Primary,
            tabBarIcon: ({focused}) => (
              <MySvg width='25' height='24' fill={focused ? Palette.Primary : Palette.Gray3}/>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    paddingTop: 6,
    paddingHorizontal: 20,
    paddingBottom: 10,
    height: 59
  },
  tabBarItem: {
    gap: 2
  }
})