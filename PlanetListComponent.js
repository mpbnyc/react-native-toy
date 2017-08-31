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
import { StackNavigator, NavigationActions } from 'react-navigation';
import PlanetScreen from './PlanetScreen'
import PlanetApp from './App';

export default class PlanetListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  render() {
    const navigation = this.props.navigation;
    if (!this.props.dataSource) {
      return (
        <View>
          <Text>No data found</Text>
        </View>
      );
    }
    return (
      <View>
        <ListView
          dataSource={this.props.dataSource}
          renderRow={(rowData) =>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight onPress={() => {
            let navigateToPlanetDetail = NavigationActions.navigate({
                routeName: 'Detail',
                params: {planet: rowData},
            });
            navigation.dispatch(navigateToPlanetDetail);
          }}> 
              <Text style={{margin: 5, fontSize: 20}}>{rowData.name}</Text>
          </TouchableHighlight>
          </View>
        }/>
        <Button
        title="Trigger alert"
        onPress={() => {
            Alert.alert('Alert Title',
            'My Alert Msg',
            [
                {text: 'Sure', onPress: () => console.log('Ask me later pressed')},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: true })
        }}
        ></Button>
      </View>
    );
  }
}