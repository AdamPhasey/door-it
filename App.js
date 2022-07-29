import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';
import {useState} from 'react';
import { Badge, Slider, Text, Icon} from "@rneui/themed";



export default function App() {
  const arr = ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Felis_silvestris_catus_lying_on_rice_straw.jpg/2560px-Felis_silvestris_catus_lying_on_rice_straw.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/5e/Domestic_Cat_Face_Shot.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3b/Gato_enervado_pola_presencia_dun_can.jpg',
'https://upload.wikimedia.org/wikipedia/commons/d/da/Cat_tongue_macro.jpg',
'https://upload.wikimedia.org/wikipedia/commons/b/b5/1dayoldkitten.JPG']

  let randomNumber = Math.floor(Math.random() * 6);
  const [cat, setCat] = useState(arr[randomNumber])
  const [count, setCount] = useState(0);
  const [vertValue, setVertValue] = useState(0);

  return (
    <View style={styles.container}>
    <Image
        style={{width: 400, height: 400}}
        source={{uri: cat}}
      />
      
      <Text style={{fontSize: 20}}>I LOVE MY HAWA PHASEY</Text>
      <Badge style={{fontSize: 50}} value={count} status="success"  />
      <TouchableOpacity onPress={() => {setCount(count + 1), setCat(arr[randomNumber])}} style={styles2.button}>
        <Text style={styles2.button} >TAP THIS HAWA!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 30
  }
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFc0cb",
    padding: 10,
    color: '#000',
    fontSize: 20
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});