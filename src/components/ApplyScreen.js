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
import {background_color} from '../color';
import {ScrollView} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
import {main_color} from '../color';
const listCover = [
  {
    id: 'c1',
    image: require('../assets/vng1.png'),
  },
  {
    id: 'c2',
    image: require('../assets/vng2.jpg'),
  },
  {
    id: 'c3',
    image: require('../assets/vng3.jpg'),
  },
];

export default class ApplyScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerTitle: 'Tiến độ',
    headerStyle: {
      backgroundColor: main_color,
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerBackImage: <Icon name="arrow-circle-left" size={28} color="#fff" />,
    headerRight: (
      <Icon
        name="envelope"
        size={28}
        style={{marginRight: 8, marginTop: 2}}
        color="#fff"
      />
    ),
  };
  renderCover = item => {
    return (
      <Image
        source={item.image}
        style={{width: width / 2, height: 140, marginRight: 8}}
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={listCover}
              renderItem={({item}) => this.renderCover(item)}
              keyExtractor={item => item.id}
            />
          </View>
          <Text
            style={{
              fontSize: 26,
              fontWeight: 'bold',
              marginLeft: 8,
              marginTop: 8,
            }}>
            Học Bổng Bán Phần Bậc Cử Nhân Và Thạc Sĩ Của Chính Phủ Hà Lan 2020
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 8,
              marginTop: 16,
            }}>
            Thủ tục
          </Text>
          <View style={{marginLeft: 16}}>
            <Text style={{fontSize: 16}}>
              - Bạn cần sự cho phép của một trong 2 điều kiện dưới đây:
            </Text>
            <View style={{flexDirection: 'column'}}>
              <View>
                <Text style={{marginLeft: 8, fontSize: 16}}>
                  + Tham gia vào các trường đại học về Khoa học ứng dụng.{' '}
                  <Text
                    style={{textDecorationLine: 'underline', color: '#000ce8'}}>
                    Danh sách tại đây
                  </Text>
                </Text>
              </View>
              <View></View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={{marginLeft: 8, fontSize: 16}}>
                  + Tham gia vào các trường đại học về nghiên cứu.{' '}
                  {
                    <Text
                      style={{
                        textDecorationLine: 'underline',
                        color: '#000ce8',
                      }}>
                      Danh sách tại đây
                    </Text>
                  }
                </Text>
              </View>
              <View></View>
            </View>
            <Text style={{fontSize: 16}}>
              - Bảng điểm cấp 3 hoặc các cấp cao hơn
            </Text>
            <Text style={{fontSize: 16}}>
              - Bằng tiếng Anh cấp độ cao nhất còn thời hạn
            </Text>
          </View>

          <Image
            source={require('../assets/tiendo.png')}
            style={{
              alignSelf: 'center',
              marginTop: 40,
              width: 360,
              height: 70
            }}
          />
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
