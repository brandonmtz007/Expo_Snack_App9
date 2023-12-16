import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [frutas, setFrutas] = useState([
    {
      id: 0,
      nombre: 'Limon',
      urlImagen:
        'https://www.spa-puntacana.com/wp-content/uploads/2016/03/news_photo_04.jpg',
      precio: '10',
      unidades: '500',
    },
    {
      id: 1,
      nombre: 'Papaya',
      urlImagen: 'https://sicarfarms.com/wp-content/uploads/2021/02/Papaya.png',
      precio: '25',
      unidades: '100',
    },
    {
      id: 2,
      nombre: 'Manzana',
      urlImagen:
        'https://www.recetasnestle.com.mx/sites/default/files/inline-images/tipos-de-manzana-royal-gala.jpg',
      precio: '5',
      unidades: '750',
    },
    {
      id: 3,
      nombre: 'Pera',
      urlImagen: 'https://www.herbazest.com/imgs/d/8/7/551784/pera.jpg',
      precio: '8',
      unidades: '230',
    },
    {
      id: 4,
      nombre: 'Fresa',
      urlImagen: 'https://frutass.org/wp-content/uploads/2020/05/Fresa.jpg',
      precio: '11',
      unidades: '200',
    },
  ]);

  alertItemName = (item) => {
    alert(item.nombre);
  };

  return (
    <View>
      {frutas.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={styles.container}
          onPress={() => alertItemName(item)}>
          <Image style={styles.image} source={{ uri: item.urlImagen }} />
          <Text style={styles.text}>
            <Text style={styles.boldText}>ID: {item.id}</Text>
            {'\n'}Nombre: {item.nombre}
            {'\n'}Precio: {item.precio}
            {'\n'}Unidades: {item.unidades}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 3,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#751aff',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  text: {
    marginTop: 10,
    fontSize: 24,
    color: 'white',
  },
  boldText: {
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
  },
});
