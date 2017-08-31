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

import PlanetApp from './App';
import PlanetListComponent from './PlanetListComponent';

export default class PlanetListContainer extends React.Component {
  static navigationOptions = {
    title: 'Planet List'
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://swapi.co/api/planets/')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.results),
        }, function() {

        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <PlanetListComponent navigation={this.props.navigation} dataSource={this.state.dataSource}></PlanetListComponent>
      </View>
    );
  }
}