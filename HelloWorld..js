import React, { Component } from 'react';
import { Text, View, FlatList,  ActivityIndicator, Image , StyleSheet, Dimensions} from 'react-native';
import { ListItem, Button, Icon } from 'react-native-elements';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
const {height, width} = Dimensions.get('window')

export default class HomeApp extends Component {
  constructor(props) {
    super(props)
    this.state ={ isLoading: true}

  }

  componentDidMount(){
    return fetch('http://reddit.it.ws312.net:3000/posts?fromApp=1')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.result,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View style={{flex: 1, padding:20 }}>
        <Text style={styles.ItemTitle}>Posts à la Une</Text>
        <FlatList
          numColumns={ 1 }
          data={this.state.dataSource}
          renderItem={({item}) =>         
          <Card>
            <CardContent 
              avatarSource={{ uri: item.author.avatar}} 
              text={item.author.pseudo}
            />           
          <CardImage source={{uri: item.media.url}} />
          <CardTitle 
            title={item.title}
            subtitle={item.sub}
           />
          
          <CardAction 
            separator={true} 
            inColumn={false}>
            <CardButton
              onPress={() => { this.props.navigation.navigate('Post', {itemId: item._id})}}
              title="Voir"
              color="blue"
            />            
          </CardAction>
        </Card>
          }
          keyExtractor={item => item._id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Images: {
    width: width-100,
    minHeight:200    
  },
  Avatar: {
    
    height: 50,
    width: 50
  },
  ItemTitle: {
    paddingBottom: 20,
    textAlign:'center', 
    fontSize:25
  }
  
});

