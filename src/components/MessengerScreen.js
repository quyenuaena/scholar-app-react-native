/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Card} from 'react-native-elements';
import {main_color, background_color} from '../color';

const {width, height} = Dimensions.get('window');
const list = [
  {
    id: 'l1',
    ten: 'Công ty LQT',
    noidung: 'Hồ sơ còn thiếu bằng tốt nghiệp.',
    avatar: require('../assets/avatar.jpg'),
  },
  {
    avatar: require('../assets/avatar.jpg'),
    id: 'l2',
    ten: 'Công ty LQT',
    noidung: 'Hồ sơ còn thiếu bằng tốt nghiệp.',
  },
];
export default class MessengerScreen extends React.Component {
  static navigationOptions = {
    title: 'Danh sách yêu thích',
    tabBarLabel: 'Ban do',
    tabBarIcon: ({tintColor}) => (
      <Icon name="envelope" size={28} color={tintColor} />
    ),
  };
  renderCard = item => {
    return (
      <Card containerStyle={styles.card} imageProps={{borderRadius: 6}}>
        <View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: '#ccc',
                }}
                source={item.avatar}
              />
            </View>
            <View
              style={{
                display: 'flex',
                marginTop: -4,
                flex: 5,
                marginLeft: -4,
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.ten}</Text>
              <Text style={{fontSize: 16}}>{item.noidung}</Text>
            </View>
          </View>
        </View>
      </Card>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={list}
          renderItem={({item}) => this.renderCard(item)}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <Text
              style={{
                fontSize: 20,
                marginLeft: 8,
                marginTop: 8,
                color: main_color,
              }}>
              Tin nhắn
            </Text>
          }
        />
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
  card: {
    width: width - 16,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 16,
    alignSelf: 'center',
  },
});
