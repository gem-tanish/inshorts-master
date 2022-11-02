import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

const SingleNews = ({item , index}) => {
  return (
    <View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    title: {
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 10,
        color: "white",
      },
});

export default SingleNews