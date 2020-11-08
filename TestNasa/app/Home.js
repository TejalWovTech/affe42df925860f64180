import React, { Component } from 'react';
import {
   View,
  Text,StyleSheet,
  StatusBar,TextInput, Button, FlatList, TouchableOpacity
} from 'react-native';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
                astroidId:'',
                astroidIdList:'',
                astroidData:[]
        }
    }

    //onchange astroid id
    astroidInput(input){
        this.setState({astroidId:input})
    }
    
    getAstroidId=()=>{
        return fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=OMun98CDkddUWbEV3KQNpLh73ujQNGz6mXofge2m').then((response)=>
          response.json).then((json)=>
                           this.setState({
                                astroidIdList:json.near_earth_objects
                           })).catch((error)=>
                               {
                                   alert("data not found")
                               })

    }
    getId=(id)=>{
        return fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=OMun98CDkddUWbEV3KQNpLh73ujQNGz6mXofge2m`).then((response)=>
          response.json).then((json)=>
                           this.setState({
                            astroidData:json
                           }),
                           this.props.navigation.navigate('Details',{astroidDetails:this.state.astroidData})).catch((error)=>
                               {
                                   alert("data not found")
                               })

    }

    renderItem=(data)=>{
                return(
                    <TouchableOpacity 
                    style={styles.list}
                    onpress={()=>
                            this.getId(data.item.id)}>
                    <Text style={style.text}>{data.item.id}</Text>

                        </TouchableOpacity>
                )
    }

    render(){
        return(
            <View style={styles.container}>
             <TextInput 
               borderBottomColour={'#000'}
               placeholder={'Enter astroid id'}
               onChangeText={this.astroidInput}/>

               <Button 
                 disabled={this.state.astroidId=='' ? true :false}
                 title={'Submit'}
                  onPress={()=>
                    this.getId(this.state.astroidId)
                  }/>

                   <Button 
                      title={'Random Astroid Id'}
                      onPress={()=>
                        this.getAstroidId()}/>

                    <View style={styles.listBox}>
                      <FlatList data={this.state.astroidIdList}
                      renderItem={item=>this.renderItem(item)}/>
                    </View>
                      
         </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding:20,
   },
   list:{
       padding:10,
       borderBottomWidth:1,
       borderBottomColor:'#ccc'
   },
   listBox:{
       padding:20,
   },
   text:{
       fontSize:16,
   }
})