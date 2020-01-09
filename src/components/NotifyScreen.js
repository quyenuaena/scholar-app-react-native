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
    noidung: 'Học bổng Niềm tin đang xét duyệt',
    avatar: require('../assets/avatar.jpg'),
  },
  {
    avatar: require('../assets/notify.png'),
    id: 'l2',
    noidung: 'Học bổng Du học có vẻ phù hợp với bạn. Xem',
  },
];
export default class NotifyScreen extends React.Component {
  static navigationOptions = {
    title: 'Danh sách yêu thích',
    tabBarLabel: 'Ban do',
    tabBarIcon: ({tintColor}) => (
      <Icon name="bell" size={28} color={tintColor} />
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
              Thông báo
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
