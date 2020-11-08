import React, { Component } from 'react';
import {
   View,
  Text,StyleSheet,
  StatusBar,TextInput, Button, FlatList, TouchableOpacity
} from 'react-native';

export default class Details extends Component{
    constructor(props){
        super(props);
        this.state={
             
        }
    }
    render(){
        const data=this.props.route.parms.astroidDetails
        return(
        <View style={{padding:20,margin:20,borderWidth:1}}>
         <Text> <Text style={{fontWeight:'bold'}}>Name:-</Text>{data.name}</Text>
        <Text> <Text style={{fontWeight:'bold'}}>Nasa_jpl_url:-</Text>{data.nasa_jpl_url}</Text>
        <Text> <Text style={{fontWeight:'bold'}}>Is_potentially_hazardous_asteroid:-</Text>{data.is_potentially_hazardous_asteroid.toString()}</Text>

      </View>

        )
    }
}