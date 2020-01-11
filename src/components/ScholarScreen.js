/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Card, Button} from 'react-native-elements';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationService from './NavigationService';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
//navigation-lib
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {main_color, background_color} from '../color';

const {width, height} = Dimensions.get('window');
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
import ApplyScreen from './ApplyScreen';
import {ScrollView} from 'react-native-gesture-handler';

class Detail extends React.Component {
  renderCover = item => {
    return (
      <Image
        source={item.image}
        style={{width: width / 2, height: 140, marginRight: 8}}
      />
    );
  };
  goToApply = () => {
    this.props.navigation.navigate('Apply');
  };
  render() {
    return (
      <View style={{backgroundColor: background_color, flex: 1}}>
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
              fontSize: 24,
              fontWeight: 'bold',
              marginLeft: 8,
              marginTop: 8,
            }}>
            Học Bổng Bán Phần Bậc Cử Nhân Và Thạc Sĩ Của Chính Phủ Hà Lan 2020
          </Text>
          <View style={{marginLeft: 16}}>
            <Text style={{color: '#585a5e', fontSize: 16}}>#caohoc #my</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginLeft: 16,
              marginTop: 8,
            }}>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="check" size={8} style={{marginTop: 2}} />
                <Text style={{fontSize: 16}}> Nước: Hà Lan</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="check" size={8} style={{marginTop: 2}} />
                <Text style={{fontSize: 16}}> Ngành: Bất kì</Text>
              </View>
            </View>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="check" size={8} style={{marginTop: 2}} />
                <Text style={{fontSize: 16}}> Giá trị: €5,000</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="check" size={8} style={{marginTop: 2}} />
                <Text style={{fontSize: 16}}> Loại: Bán phần</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 16,
            }}>
            <Icon name="check" size={8} style={{marginTop: 2}} />

            <Text style={{fontSize: 16}}> Đối tượng: Học sinh, sinh viên</Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 8,
              marginTop: 16,
            }}>
            Mô tả học bổng
          </Text>
          <View>
            <Text style={{fontSize: 16, marginLeft: 16}}>
              - Ngày hết hạn: 01/02/2020
            </Text>
            <Text style={{fontSize: 16, marginLeft: 16}}>
              - Cấp bậc: Cử nhân, Kỹ sư, thạc sĩ
            </Text>
            <Text style={{fontSize: 16, marginLeft: 16}}>
              - Giới thiệu: Bạn sẽ có cơ hội nhận học bổng và được đặt chân đến
              đất nước Hà Lan ngay bây giờ. Đây là học bổng được trao bởi chính
              quyền Hà Lan và được tài trợ bởi Bộ giáo dục, bộ Văn hóa, bộ Khoa
              học Hà Lan. Học bổng sẽ được trao cho các học sinh sinh viên ngoài
              Khu vực Kinh tế châu Âu nhằm khuyến khích tinh thần học tập, giúp
              đỡ và tạo điều kiện học tập tại đất nước Hà Lan Ứng cử viên sáng
              giá sẽ được trao tặng học bổng bao gồm số tiền lên đến €5,000
              trong năm nhất
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 8,
              marginTop: 16,
            }}>
            Yêu cầu
          </Text>
          <View style={{marginLeft: 16}}>
            <Text style={{fontSize: 16}}>
              - Du học sinh ngoài Khu vực Kinh tế châu Âu
            </Text>
            <Text style={{fontSize: 16}}>
              - Ngành theo học: bất kì ngành nào có đào tạo tại các nhà tại trợ
              ở Hà Lan
            </Text>
            <Text style={{fontSize: 16}}>
              - Chưa có bằng cấp tại các cơ sở giáo dục tại Hà Lan - Bạn sẽ theo
              học Cử nhân, Kỹ sư, thạc sĩ toàn thời gian ở Hà Lan - Có yêu cầu
              tiếng Anh
            </Text>
            <Text style={{fontSize: 16}}>
              - Bạn sẽ theo học Cử nhân, Kỹ sư, thạc sĩ toàn thời gian ở Hà Lan
            </Text>
            <Text style={{fontSize: 16}}>- Có yêu cầu tiếng Anh</Text>
          </View>
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
            <Text style={{marginLeft: 8, fontSize: 16}}>
              + Tham gia vào các trường đại học về Khoa học ứng dụng.{' '}
              <Text style={{textDecorationLine: 'underline', color: '#000ce8'}}>
                Danh sách tại đây
              </Text>
            </Text>
            <Text style={{marginLeft: 8, fontSize: 16}}>
              + Tham gia vào các trường đại học về nghiên cứu.{' '}
              <Text style={{textDecorationLine: 'underline', color: '#000ce8'}}>
                Danh sách tại đây
              </Text>
            </Text>
            <Text style={{fontSize: 16}}>
              - Bảng điểm cấp 3 hoặc các cấp cao hơn
            </Text>
            <Text style={{fontSize: 16}}>
              - Bằng tiếng Anh cấp độ cao nhất còn thời hạn
            </Text>
          </View>

          <TouchableOpacity onPress={this.goToApply}>
            <View
              style={{
                width: width - 32,
                borderRadius: 20,
                height: 40,
                alignSelf: 'center',
                marginTop: 8,
                justifyContent: 'center',
                backgroundColor: '#f26b38',
                marginBottom: 16,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 24,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                Đăng kí
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const list = [
  {
    id: 'l1',
    ten: 'Lê Quốc Thiên',
    noidung: 'Học bổng rất tốt, cảm ơn công ty.',
    avatar: require('../assets/avatar.jpg'),
    date: '1/1/1111',
  },
  {
    date: '2/2/2222',
    avatar: require('../assets/avatar.jpg'),
    id: 'l2',
    ten: 'Nguyên Văn Nam',
    noidung: 'Tôi đã nhận được học bổng.',
  },
];
class Comment extends React.Component {
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
              <Text style={{fontSize: 16, color: '#ccc'}}>{item.date}</Text>
              <Text style={{fontSize: 16}}>{item.noidung}</Text>
            </View>
          </View>
        </View>
      </Card>
    );
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: background_color}}>
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
              Bình luận
            </Text>
          }
        />
        <View style={{alignSelf: 'flex-start', flexDirection: 'row'}}>
          <TextInput
            style={{
              height: 40,
              width: width - 60,
              fontSize: 16,
              paddingLeft: 20,
              backgroundColor: '#fff',
              marginBottom: 8,
              marginLeft: 8,
              borderColor: '#000',
              borderWidth: 1,
            }}
            placeholder="Type here ..."
            underlineColorAndroid="transparent"
          />
          <Icon
            name="paper-plane"
            size={28}
            style={{alignSelf: 'center', marginLeft: 8, marginTop: -8}}
          />
        </View>
      </View>
    );
  }
}

const TabMaterialNavigator = createMaterialTopTabNavigator(
  {
    //RouteConfigs
    Detail: {
      screen: Detail,
      navigationOptions: {
        title: 'Chi tiết',
      },
    },
    Comment: {
      screen: Comment,
      navigationOptions: {
        title: 'Bình luận',
      },
    },
  },
  {
    // MaterialBottomTabNavigatorConfig
    initialRouteName: 'Detail',
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: main_color,
      },
      showIcon: false,
      showLabel: true,
      activeTintColor: main_color,
      inactiveTintColor: '#ccc',
      style: {
        borderTopColor: '#ccc',
        borderTopWidth: 0.8,
        backgroundColor: '#ffffff',
      },
      tabStyle: {
        borderTopColor: main_color,
      },
      labelStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    },
  },
);
TabMaterialNavigator.navigationOptions = {};
const stack = createStackNavigator({
  Detail: {
    screen: TabMaterialNavigator,
    navigationOptions: {
      headerStyle: {
        backgroundColor: main_color,
      },
      headerTitleStyle: {
        color: '#fff',
      },

      headerTitle: 'Thông tin học bổng',
      headerLeft: (
        <View style={{marginLeft: 16}}>
          <TouchableOpacity onPress={() => NavigationService.navigate('Home')}>
            <Icon name="arrow-circle-left" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      ),
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
  Apply: {
    screen: ApplyScreen,
  },
});

const AppContainer = createAppContainer(stack);
export default class ScholarScreen extends React.Component {
  static navigationOptions = {};
  render() {
    return <AppContainer />;
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

    borderColor: '#ccc',
    borderRadius: 10,
    padding: 16,
    alignSelf: 'center',
  },
});
