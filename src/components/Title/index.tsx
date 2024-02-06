import React from 'react';
import {Text, StyleSheet} from 'react-native';

/* Komentar */
const Title = ({text}) => {
  /* Komentar */
  return (
    <>
      {/* Komentar */}
      <Text style={style.title}>{text}</Text>
    </>
  );
};

/* Komentar */
const style = StyleSheet.create({
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Title;
