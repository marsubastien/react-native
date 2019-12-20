import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Post extends Component {

    constructor(props) {
        super(props)
       this.state = { id: props.navigation.getParam('itemId')};
    }

    componentDidMount() {
      console.log('===> HERE')
        return fetch(`http://reddit.it.ws312.net:3000/posts/${this.state.id}?&fromApp=1`)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson)
            this.setState({
              post: responseJson.result,
            });    
          })
          .catch((error) =>{
            console.error(error);
          });
    }
    render() {
        const { navigation } = this.props;
        const { post } = this.state;
        return (
          <>
          {post && post.title ? (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>               
                <Text>{post.message}</Text>
            </View>
          ) : null }
          </>
        );
    }
}