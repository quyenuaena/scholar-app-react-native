/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Card} from 'react-native-elements';
import {background_color} from '../color';
const {width, height} = Dimensions.get('window');

const list = [
  {
    id: 'n2',
    tenhocbong:
      'Học Bổng Bán Phần Bậc Cử Nhân Và Thạc Sĩ Của Chính Phủ Hà Lan 2020',
    nguon: 'Công ty VNG',
    giatri: 'Giá trị: €5,000',
    loai: 'Loại: Bán phần',
    quocgia: 'Nước: Hà Lan',
    doituong: 'Đối tượng: Học sinh, sinh viên',
    slot: 20,
    view: 100,
    nganh: 'Ngành: Bất kỳ',
    avatar: require('../assets/vng.png'),
    cover: require('../assets/scholar1.jpg'),
  },

  {
    id: 'n4',
    tenhocbong:
      'Chương Trình Học Bổng Toàn Phần Bậc Thạc Sĩ Của Fulbright Vietnamese Student Program 2021-2022',
    nguon: 'Công ty VNG',
    giatri: 'Giá trị: 10000USD',
    loai: 'Loại: Toàn phần',
    quocgia: 'Nước: Mỹ',
    doituong: 'Đối tượng: Sinh viên đã tốt nghiệp ',
    slot: 20,
    view: 100,
    nganh: 'Ngành: 20 ngành',
    avatar: require('../assets/vng.png'),
    cover: require('../assets/scholar.jpg'),
  },
];
export default class CompanyScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerTitle: 'Thông tin ',
    headerRight: (
      <Icon
        name="envelope"
        size={28}
        style={{marginRight: 8, marginTop: 2}}
        color="#fff"
      />
    ),
  };
  renderCard = item => {
    return (
      <TouchableOpacity>
        <Card imageStyle={{height: 80, width: width / 2}} image={item.cover}>
          <Text style={{width: width / 2}} NumberOfLines={2}>
            {item.tenhocbong.length < 80
              ? `${item.tenhocbong}`
              : `${item.tenhocbong.substring(0, 80)}...`}
          </Text>
        </Card>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={require('../assets/vng.png')}
            style={{
              borderRadius: 60,
              width: 120,
              height: 120,
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
          <Text style={{alignSelf: 'center', fontSize: 32, fontWeight: 'bold'}}>
            Công ty VNG
          </Text>
          <View style={{marginTop: 16, alignSelf: 'center'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginVertical: 4,
              }}>
              <Icon name="map-marker-alt" size={24} />
              <Text style={{fontSize: 20, marginLeft: 8}}>
                Tp HCM, Việt Nam
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginVertical: 4,
              }}>
              <Icon name="search" size={24} />
              <Text style={{fontSize: 20, marginLeft: 8}}>
                Lĩnh vực Công nghệ thông tin
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginVertical: 4,
              }}>
              <Icon name="envelope" size={24} />
              <Text style={{fontSize: 20, marginLeft: 8}}>
                scholar@vng.com.vn
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginVertical: 4,
              }}>
              <Icon name="phone" size={24} />
              <Text style={{fontSize: 20, marginLeft: 8}}>02839623888</Text>
            </View>
          </View>
          <Text
            style={{
              marginLeft: 8,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 8,
            }}>
            Học bổng hiện có:{' '}
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={list}
            renderItem={({item}) => this.renderCard(item)}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: background_color,
    display: 'flex',
    flex: 1,
  },
});
