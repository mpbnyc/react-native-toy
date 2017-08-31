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
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class PlanetScreen extends React.Component {
    state = {
        modalVisible: false,
        name: "Earth",
        population: '7000000000',
        terrain: 'varied',
        climate: 'temperate'
    }
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    static navigationOptions = {
      title: 'Planet',
    };
    static textFieldStyle = {height: 40, borderBottomWidth: 1, borderBottomColor: 'grey'};
    render() {
      const { navigate } = this.props.navigation;

      return (
        <View style={{padding: 20}}>
          <Text style={{fontSize: 40}}>{this.props.navigation.state.params.planet.name}</Text>
          <Text>Population: {this.props.navigation.state.params.planet.population}</Text>
          <Image source={{uri: 'https://www.windows2universe.org/neptune/images/neptune_false_med.jpg'}} style={{width: 300, height: 225}}/>
          <Text>{this.props.navigation.state.params.planet.climate}</Text>
          <Text>{this.props.navigation.state.params.planet.terrain}</Text>
          <Button title="Edit"
          onPress={() => { this.setModalVisible(true) }}
          style={{margin: 5, fontSize: 20}}></Button>

          <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
            <View style={{marginTop: 22, paddingHorizontal: 20}}>
              <View>
                <Text style={{fontSize: 20}}>Edit {this.props.navigation.state.params.planet.name}</Text>
                <TextInput
                    style={{height: 40}}
                    onChangeText={(name) => this.setState({name})}
                    value={this.props.navigation.state.params.planet.name}
                />
                <TextInput
                    style={{height: 40}}
                    onChangeText={(population) => this.setState({population})}
                    value={this.props.navigation.state.params.planet.population}
                />
                <TextInput
                    style={{height: 40}}
                    onChangeText={(terrain) => this.setState({terrain})}
                    value={this.props.navigation.state.params.planet.terrain}
                />
                <TextInput
                    style={{height: 40}}
                    onChangeText={(climate) => this.setState({climate})}
                    value={this.props.navigation.state.params.planet.climate}
                />
                <Button title="Close" onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                </Button>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }