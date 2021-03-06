import React from 'react';

class startPage extends React.Component {  
    static navigationOptions = {  
        title: 'Home',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
      //  headerTintColor: '#0ff',  
        headerTitleStyle: {  
           fontWeight: 'bold',  
        },  
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Home Screen</Text>  
            </View>  
        );  
    }  
}  
