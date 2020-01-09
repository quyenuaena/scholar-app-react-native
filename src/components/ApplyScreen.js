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

export default class ApplyScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerShown: false,
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
          Học bổng Niềm tin
        </Text>
        <View
          style={{marginLeft: 16, marginVertical: 16, marginHorizontal: 16}}>
          <Text style={{fontSize: 18, marginTop: 8}}>
            1. Allowance for academy degrees and language certification, i.e.
            Master, Englistions
          </Text>
          <Text style={{fontSize: 18, marginTop: 8}}>
            2. Subsidy for inflation, transportation and meals
          </Text>
        </View>
        <Image
          source={require('../assets/applybar.png')}
          style={{alignSelf: 'center', marginTop: 40}}
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
});
