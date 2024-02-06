import {
  Text, 
  View, 
  Image, 
  ScrollView, 
  TextInput, 
  StyleSheet,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={style.title}>Tempo Doeloe Restaurant</Text>
      <ScrollView>
        <Text style={style.menu}>Menu</Text>
        <TextInput
        placeholder="Masukkan pesanan anda"
        style={style.inputUsername}
        />
        <Text style={style.koda}> 1 </Text>
        <Image
          source={require('./assets/klepon.jpg')}
          style={{width: 400,  height: 200}}
        />
        <Text style={style.koda}> 2 </Text>
        <Image
          source={require('./assets/lumpia.jpg')}
          style={{width: 400,  height: 200}}
        />
        <Text style={style.koda}> 3 </Text>
        <Image
          source={require('./assets/pisangijo.jpg')}
          style={{width: 400,  height: 200}}
        />
        <Text style={style.koda}> 4 </Text>
        <Image
          source={require('./assets/sotobetawi.jpg')}
          style={{width: 400,  height: 200}}
        />
        
        </ScrollView>
      </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  koda: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  menu: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  inputUsername: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,    
  },
});

export default App;