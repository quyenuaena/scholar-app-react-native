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
import {main_color, background_color} from '../color';
const {width, height} = Dimensions.get('window');
const listHB = [
  {
    id: 'n2',
    tenhocbong: 'Học bổng Niềm tin',
    nguon: 'Công ty VNG',
    giatri: '- Giá trị: 10000 USD',
    loai: '- Loại: Toàn phần',
    quocgia: '- Nước: Việt Nam',
    doituong: '- Đối tượng: Sinh viên năm 4',
    slot: 20,
    view: 100,
    nganh: '-Ngành: CNTT',
    avatar: require('../assets/vng.png'),
  },
  {
    id: 'n1',
    tenhocbong: 'Học bổng LQT',
    nguon: 'Công ty Gameloft',
    giatri: '- Giá trị: 10000 USD',
    loai: '- Loại: Toàn phần',
    quocgia: '- Nước: Việt Nam',
    doituong: '- Đối tượng: Sinh viên năm 4',
    slot: 20,
    view: 100,
    nganh: '-Ngành: CNTT - Game',
    avatar: require('../assets/gameloft.jpg'),
  },
  {
    id: 'n3',
    tenhocbong: 'Học bổng Ước mơ',
    nguon: 'Công ty FPT',
    giatri: '- Giá trị: 10000 USD',
    loai: '- Loại: Toàn phần',
    quocgia: '- Nước: Việt Nam',
    doituong: '- Đối tượng: Sinh viên năm 4',
    slot: 20,
    view: 100,
    nganh: '-Ngành: CNTT',
    avatar: require('../assets/fpt.png'),
  },
  {
    id: 'n4',
    tenhocbong: 'Học bổng Niềm tin 2',
    nguon: 'Công ty VNG',
    giatri: '- Giá trị: 99900 USD',
    loai: '- Loại: Toàn phần',
    quocgia: '- Nước: Việt Nam',
    doituong: '- Đối tượng: Sinh viên năm 3, 4',
    slot: 20,
    view: 100,
    nganh: '-Ngành: CNTT',
    avatar: require('../assets/vng.png'),
  },
];

const listNHB = [
  {
    id: 'n5',
    nguon: 'Công ty LQT',
    mota: '- Công ty chuyên thiết kế phần mềm',
    nganh: '- Ngành: CNTT',
    hocbong: '- Học bổng cao học, du học.',
    avatar: require('../assets/avatar.jpg'),
  },
];
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [...listHB],
      listType: true,
      activeColor: '#ff9e34',
      inactiveColor: '#e8d2c3',
      colorHB: '#ff9e34',
      colorNHB: '#e8d2c3',
    };
  }
  static navigationOptions = {
    headerRight: (
      <View style={{marginRight: 16, marginBottom: 8}}>
        <TextInput
          style={{
            height: 40,
            width: width - 60,
            fontSize: 16,
            paddingLeft: 40,
            backgroundColor: '#fff',
            marginTop: 8,
            marginLeft: 16,
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 40,
          }}
          placeholder="Tìm kiếm ..."
          underlineColorAndroid="transparent"
        />
        <Icon
          name="search"
          size={24}
          style={{position: 'absolute', marginLeft: 30, marginTop: 14}}
        />
      </View>
    ),
    tabBarIcon: ({tintColor}) => (
      <Icon name="newspaper" size={28} color={tintColor} />
    ),
  };
  goToHome = () => {
    this.props.navigation.navigate('Scholar');
  };
  goToCompany = () => {
    this.props.navigation.navigate('Company');
  };
  renderScholarCard = item => {
    return (
      <TouchableOpacity onPress={this.goToHome}>
        <Card containerStyle={styles.card} imageProps={{borderRadius: 6}}>
          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TouchableOpacity onPress={this.goToCompany}>
                <View style={{flex: 1}}>
                  <Image
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 30,
                      borderWidth: 2,
                      borderColor: '#ccc',
                    }}
                    source={item.avatar}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={{
                  display: 'flex',
                  marginTop: -4,
                  flex: 5,
                  marginLeft: 8,
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  {item.tenhocbong}
                </Text>
                <Text style={{fontSize: 16, color: '#9a9a9c'}}>
                  {item.nguon}
                </Text>
              </View>
              <View style={{flex: 1, marginRight: -30}}>
                <TouchableOpacity>
                  <Icon name="bookmark" size={27} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: 16,
                marginTop: 8,
              }}>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 16}}>{item.giatri}</Text>
                <Text style={{fontSize: 16}}>{item.loai}</Text>
                <Text style={{fontSize: 16}}>{item.quocgia}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 16}}>{item.doituong}</Text>
                <Text style={{fontSize: 16}}>{item.nganh}</Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                marginHorizontal: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Còn {item.slot} slot
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, marginRight: 8}}>
                  {' '}
                  {item.view}
                </Text>
                <TouchableOpacity>
                  <Icon name="eye" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };
  renderCard = item => {
    return (
      <TouchableOpacity onPress={this.goToCompany}>
        <Card containerStyle={styles.card} imageProps={{borderRadius: 6}}>
          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Image
                  style={{
                    width: 56,
                    height: 56,
                    borderWidth: 2,
                    borderColor: '#ccc',
                    borderRadius: 30,
                  }}
                  source={item.avatar}
                />
              </View>
              <View
                style={{
                  display: 'flex',
                  marginTop: -4,
                  flex: 5,
                  marginLeft: 8,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  {item.nguon}
                </Text>
              </View>
              <View style={{flex: 1, marginRight: -30}}>
                <TouchableOpacity>
                  <Icon name="envelope" size={27} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                display: 'flex',

                marginLeft: 48,
              }}>
              <Text style={{fontSize: 16}}>{item.mota}</Text>
              <Text style={{fontSize: 16}}>{item.nganh}</Text>
              <Text style={{fontSize: 16}}>{item.hocbong}</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 8,
            marginLeft: 16,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: this.state.colorHB,
              width: 100,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginTop: 8,
            }}
            onPress={() =>
              this.setState({
                list: [...listHB],
                listType: true,
                colorHB: this.state.activeColor,
                colorNHB: this.state.inactiveColor,
              })
            }>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
              Học bổng
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: this.state.colorNHB,
              width: 150,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginTop: 8,
            }}
            onPress={() =>
              this.setState({
                list: [...listNHB],
                listType: false,
                colorNHB: this.state.activeColor,
                colorHB: this.state.inactiveColor,
              })
            }>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
              Nguồn học bổng
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.state.list}
          renderItem={({item}) =>
            this.state.listType
              ? this.renderScholarCard(item)
              : this.renderCard(item)
          }
          keyExtractor={item => item.id}
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
    padding: 8,
    alignSelf: 'center',
  },
});
