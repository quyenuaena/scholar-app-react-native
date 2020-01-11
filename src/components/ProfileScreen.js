/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Card} from 'react-native-elements';
import {main_color} from '../color';
const {width, height} = Dimensions.get('window');
import {background_color} from '../color';
import {ScrollView} from 'react-native-gesture-handler';

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerTitle: 'Thông tin cá nhân',
    headerRight: (
      <Icon
        name="user-edit"
        size={24}
        style={{marginRight: 8, marginTop: 4}}
        color={'#fff'}
      />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={require('../assets/avatar.jpg')}
            style={{
              borderRadius: 60,
              width: 120,
              height: 120,
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
          <Text style={{alignSelf: 'center', fontSize: 32, fontWeight: 'bold'}}>
            Nguyễn Văn Nam
          </Text>
          <View style={{marginTop: 16, alignSelf: 'center'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginVertical: 4,
              }}>
              <Icon name="venus-mars" size={24} />
              <Text style={{fontSize: 20, marginLeft: 8}}>Nam</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginVertical: 4,
              }}>
              <Icon name="birthday-cake" size={24} />
              <Text style={{fontSize: 20, marginLeft: 8}}> 10/01/1999</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginVertical: 4,
              }}>
              <Icon name="graduation-cap" size={24} />
              <Text style={{fontSize: 20, marginLeft: 8}}>Tốt nghiệp UIT</Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginVertical: 4,
              }}>
              <Icon name="trophy" size={24} />
              <Text style={{fontSize: 20, marginLeft: 8}}>
                Thủ khoa KTPM 2020
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginVertical: 4,
              }}>
              <Icon name="map-marker-alt" size={24} />
              <Text style={{fontSize: 20, marginLeft: 16}}>Sống tại TPHCM</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginVertical: 4,
              }}>
              <Icon name="phone" size={24} />
              <Text style={{fontSize: 20, marginLeft: 12}}>01234567</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: background_color,
    display: 'flex',
    flex: 0,
  },
});
