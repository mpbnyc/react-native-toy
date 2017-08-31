import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  ActivityIndicator,
  ListView,
  Image,
  Modal,
  TextInput,
  Alert,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PlanetScreen from './PlanetScreen'
import PlanetListContainer from './PlanetListContainer'

export default class CedrusReact extends React.Component {
  static navigationOptions = {
    title: 'Planet List',
  };

  render() {
    return (
      <View style={{flex: 1, padding: 20}}>
        <PlanetListContainer navigation={this.props.navigation}></PlanetListContainer>
      </View>
    );
  }
}

const PlanetApp = StackNavigator({
  Home: { screen: CedrusReact },
  Detail: { screen: PlanetScreen }
});

AppRegistry.registerComponent('CedrusReact', () => PlanetApp);