/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Button,
  Modal, Picker, ScrollView, TouchableOpacity, TouchableHighlight} from 'react-native';
// import { SearchBar } from 'react-native-elements';
  //import Button from "react-native-bootstrap-buttons";


export default class App extends Component {

  state = {
    UHID: "",
    age: "",
    gender: "Gender",
    pregnancyStatus: "",
    department: "",
    careType: "",
    suspectedInfection: "",
    modalVisible: false,
    searchDevices: ''
  }
  UHIDChange = val => {
    this.setState({
      UHID : val
    });
  }
  ageChange = val => {
    this.setState({
      age : val
    });
  }
  genderButtonClicked = val => {
    this.setState({
      gender : val
    });
  }
  pregnancyStatusChange = val => {
    this.setState({
      pregnancyStatus : val
    });
  }
  departmentChange = val => {
    this.setState({
      department : val
    });
  }
  careTypeChange = val => {
    this.setState({
      careType : val
    });
  }
  suspectedInfectionChange = val => {
    this.setState({
      suspectedInfection : val
    });
  }
  onPressAddDevices = val => {
    this.setState({
      modalVisible: val
    });
  }
  onSearchDevices = search => {
    this.setState({
      search
    });
  }
  render() {
    let maleButton, femaleButton, othersButton;

    if( this.state.gender === "MALE" ){
      maleButton= <View style={styles.button2}>
      <Button title="Male" onPress={() => this.genderButtonClicked("MALE")} color="#2CA1F7" />
    </View>
    }
    else{
      maleButton= <View style={styles.button}>
      <Button title="Male" onPress={() => this.genderButtonClicked("MALE")} color="#eee" />
    </View>
    }

    if( this.state.gender === "FEMALE" ){
      femaleButton= <View style={styles.button2}>
      <Button title="Female" onPress={() => this.genderButtonClicked("FEMALE")} color="#2CA1F7" />
    </View>
    }
    else{
      femaleButton= <View style={styles.button}>
      <Button title="Female" onPress={() => this.genderButtonClicked("FEMALE")} color="#eee" />
    </View>
    }

    if( this.state.gender === "OTHERS" ){
      othersButton= <View style={styles.button2}>
      <Button title="Others" onPress={() => this.genderButtonClicked("OTHERS")} color="#2CA1F7" />
    </View>
    }
    else{
      othersButton= <View style={styles.button}>
      <Button title="Others" onPress={() => this.genderButtonClicked("OTHERS")} color="#eee" />
    </View>
    }

    // const { search } = this.state.search;
    return (
      <View style={styles.container}>
      <ScrollView>
      <Text style={styles.inputHeading}>Patient's UHID</Text>
        <TextInput 
          style={{width: 380, borderColor: "#2CA1F7", borderWidth: 1, borderRadius: 10, backgroundColor: "#FFF", marginLeft: 15, marginBottom: 5}}
          placeholder="Enter to prefill rest details"
          value={this.state.UHID}
          onChangeText={this.UHIDChange}
        />
        <Text style={styles.inputHeading}>Age( in years )</Text>
        <TextInput 
          style={{width: 380, borderColor: "#2CA1F7", borderWidth: 1, borderRadius: 10, backgroundColor: "#FFF", marginLeft: 15, marginBottom: 5}}
          placeholder="Enter to prefill rest details"
          value={this.state.age}
          onChangeText={this.ageChange}
        />
        <Text style={styles.inputHeading}>Gender</Text>
        <View style={styles.container2}>
          {maleButton}
          {femaleButton}
          {othersButton}
        </View>
        <Text style={styles.inputHeading}>Pregnancy Status</Text>
        <View>
          <Picker selectedValue = {this.state.pregnancyStatus} onValueChange = {this.pregnancyStatusChange} mode = 'dialog' style={styles.pickerStyle}>
              <Picker.Item label = "a" value = "a" />
              <Picker.Item label = "b" value = "b" />
              <Picker.Item label = "c" value = "c" />
              <Picker.Item label = "d" value = "d" />
          </Picker>
        </View>
        <Text style={styles.inputHeading}>Department</Text>
        <View>
          <Picker selectedValue = {this.state.department} onValueChange = {this.departmentChange} mode = 'dialog' style={styles.pickerStyle}>
              <Picker.Item label = "x" value = "a" />
              <Picker.Item label = "y" value = "b" />
              <Picker.Item label = "z" value = "c" />
              <Picker.Item label = "w" value = "d" />
          </Picker>
        </View>
        <Text style={styles.inputHeading}>Care Type</Text>
        <View>
          <Picker selectedValue = {this.state.careType} onValueChange = {this.careTypeChange} mode = 'dialog' style={styles.pickerStyle}>
              <Picker.Item label = "1" value = "a" />
              <Picker.Item label = "2" value = "b" />
              <Picker.Item label = "3" value = "c" />
              <Picker.Item label = "4" value = "d" />
          </Picker>
        </View>
        <Text style={styles.inputHeading}>Suspected Infection</Text>
        <View>
          <Picker selectedValue = {this.state.suspectedInfection} onValueChange = {this.suspectedInfectionChange} mode = 'dialog' style={styles.pickerStyle}>
              <Picker.Item label = "@" value = "a" />
              <Picker.Item label = "#" value = "b" />
              <Picker.Item label = "$" value = "c" />
              <Picker.Item label = "%" value = "d" />
          </Picker>
        </View>
        <View style={styles.container2}>
          <Text style={styles.inputHeading}>Associated devices</Text>
          <TouchableOpacity style={styles.opacity} onPress={() => this.onPressAddDevices(!this.state.modalVisible)}>
            <Text>Add more devices</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Modal transparent={false} visible={this.state.modalVisible}>
            <View style = {styles.modal}>
                    <Text>Modal is open!</Text>
                    
                    <TouchableHighlight onPress = {() => {
                      this.onPressAddDevices(!this.state.modalVisible)}}>
                      
                      <Text>Close Modal</Text>
                    </TouchableHighlight>
            </View>
          </Modal>
        </View>
        {/* <View>
          <SearchBar placeholder="Search for associated devices" onChangeText={this.onSearchDevices} value={search} />
        </View> */}

        <Button title="SUBMIT" margin color="#2CA1F7" width='100'/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: "flex-start"
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
  },
  inputHeading: {
    fontSize: 15,
    textAlign: 'left',
    color: '#2CA1F7',
    margin: 5,
    marginLeft: 25,
  },
  pickerStyle:{
    backgroundColor: "#FFF",
    width: 380,
    marginLeft: 15,
    paddingTop:30,
    marginTop: 10,
    marginBottom: 5
  },
  button: {
    backgroundColor: "#FFF",
    width: '20%',
    marginLeft: 20
  },
  button2: {
    backgroundColor: "#2CA1F7",
    width: '20%',
    marginLeft: 20
  },
  opacity : {
    backgroundColor : "#eee",
    alignItems : 'flex-end',
    marginRight: 20,
    margin: 5,
    marginLeft: 100,
    marginTop: 6
  }
});
