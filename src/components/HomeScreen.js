/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Card} from 'react-native-elements';
import {main_color, background_color} from '../color';
import {list} from './data';
const {width, height} = Dimensions.get('window');
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="newspaper" size={28} color={tintColor} />
    ),
  };
  goToScholar = () => {
    this.props.navigation.navigate('Scholar');
  };
  goToCompany = () => {
    this.props.navigation.navigate('Company');
  };
  renderScholarCard = item => {
    return (
      <TouchableOpacity onPress={this.goToScholar}>
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
              <View style={{flex: 0}}>
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
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="check" size={8} style={{marginTop: 2}} />
                  <Text style={{fontSize: 16}}> {item.quocgia}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="check" size={8} style={{marginTop: 2}} />
                  <Text style={{fontSize: 16}}> {item.nganh}</Text>
                </View>
              </View>
              <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="check" size={8} style={{marginTop: 2}} />
                  <Text style={{fontSize: 16}}> {item.giatri}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="check" size={8} style={{marginTop: 2}} />
                  <Text style={{fontSize: 16}}> {item.loai}</Text>
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

              <Text style={{fontSize: 16}}> {item.doituong}</Text>
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
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={list}
          renderItem={({item}) => this.renderScholarCard(item)}
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
    borderRadius: 10,
    padding: 8,
    alignSelf: 'center',
  },
});
