/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {Button} from 'react-native-elements';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NavigationService from './src/components/NavigationService';
import {main_color, background_color} from './src/color';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
//navigation-lib
import {
  createAppContainer,
  NavigationEvents,
  NavigationActions,
} from 'react-navigation';
//screen
import SearchScreen from './src/components/SearchScreen';
import ScholarScreen from './src/components/ScholarScreen';
import HomeScreen from './src/components/HomeScreen';
import MessengerScreen from './src/components/MessengerScreen';
import ProfileScreen from './src/components/ProfileScreen';
import FavoriteScreen from './src/components/FavoriteScreen';
import ListScreen from './src/components/ListScreen';
import NotifyScreen from './src/components/NotifyScreen';
import CompanyScreen from './src/components/CompanyScreen';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
const TabMaterialNavigator = createMaterialTopTabNavigator(
  {
    //RouteConfigs
    Home: HomeScreen,
    Notify: NotifyScreen,
    Messenger: MessengerScreen,

    Favorite: FavoriteScreen,
    List: ListScreen,
  },
  {
    // MaterialBottomTabNavigatorConfig

    initialRouteName: 'Home',
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: main_color,
      },
      showIcon: true,
      showLabel: false,
      activeTintColor: main_color,
      inactiveTintColor: '#ccc',
      style: {
        borderTopColor: '#ccc',
        borderTopWidth: 0.8,
        backgroundColor: '#ffffff',
      },
      iconStyle: {
        marginLeft: 12,
        width: 40,
        marginTop: -5,
        marginBottom: -2,
      },
    },
  },
);

const navigateAction = NavigationActions.navigate({
  routeName: 'Home',

  action: NavigationActions.navigate({routeName: 'Search'}),
});
const AppNavigator = createStackNavigator({
  Home: {
    screen: TabMaterialNavigator,
    navigationOptions: {
      headerStyle: {
        backgroundColor: main_color,
      },
      headerLeft: (
        <View
          style={{
            height: 56,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Button
            icon={
              <Image
                source={require('./src/assets/avatar.jpg')}
                color="#fff"
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                }}
              />
            }
            onPress={() => NavigationService.navigate('Profile')}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
          <TouchableOpacity>
            <View>
              <TextInput
                style={{
                  height: 40,
                  width: width - 120,
                  fontSize: 16,
                  paddingLeft: 40,
                  backgroundColor: '#fff',
                  marginTop: 8,
                  marginLeft: 8,
                  borderColor: '#000',
                  borderWidth: 1,
                  borderRadius: 20,
                }}
                placeholder="Tìm kiếm ..."
                underlineColorAndroid="transparent"
                onSubmitEditing={() => NavigationService.navigate('Search')}
              />
              <Icon
                name="search"
                color={main_color}
                size={24}
                style={{position: 'absolute', marginLeft: 18, marginTop: 14}}
              />
            </View>
          </TouchableOpacity>
        </View>
      ),
      headerRight: (
        <Button
          buttonStyle={{backgroundColor: 'transparent', marginRight: 8}}
          icon={<Icon name="cog" size={24} color="#fff" />}
          
        />
      ),
    },
  },
  Scholar: {
    screen: ScholarScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: main_color,
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerBackImage: <Icon name="arrow-circle-left" size={26} color="#fff" />,
      headerTitle: 'Thông tin học bổng',
      headerRight: (
        <View style={{flexDirection: 'row', marginHorizontal: 8}}>
          <Button
            buttonStyle={{backgroundColor: 'transparent'}}
            icon={<Icon name="envelope" size={24} color="#fff" />}
            onPress={() => alert('aaa')}
          />
          <Button
            buttonStyle={{backgroundColor: 'transparent'}}
            icon={<Icon name="bookmark" size={24} color="#fff" />}
            onPress={() => alert('aaa')}
          />
        </View>
      ),
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      headerBackImage: <Icon name="arrow-circle-left" size={26} color="#fff" />,
      headerStyle: {backgroundColor: main_color},
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerBackImage: <Icon name="arrow-circle-left" size={26} color="#fff" />,
      headerStyle: {backgroundColor: main_color},
      headerTitleStyle: {
        color: '#fff',
      },
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
  Company: {
    screen: CompanyScreen,
    navigationOptions: {
      headerBackImage: <Icon name="arrow-circle-left" size={26} color="#fff" />,
      headerStyle: {backgroundColor: main_color},
      headerTitleStyle: {
        color: '#fff',
      },
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});
const AppContainer = createAppContainer(AppNavigator);
const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </View>
  );
};

export default App;
