import React, { useContext } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { categories, sources } from "../API/api";
import Carousel from "react-native-snap-carousel";

const DiscoverScreen = () => {
    const windowWidth = Dimensions.get("window").width;
    const SLIDE_WIDTH = Math.round(windowWidth / 3.5);
  return (
    <View style={styles.discover}>
   <Text  style={{ ...styles.subtitle, color: "white" }}>
    Category
   </Text>
  
    </View>
  )
}


const styles = StyleSheet.create({
    discover: {
      padding: 10,
      alignItems: "center",
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 8,
        marginHorizontal: 5,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        alignSelf: "flex-start",
        borderRadius: 10,
      },
      category: {
        height: 130,
        margin: 10,
        alignItems: "center",
        justifyContent: "space-evenly",
      },
      categoryImage: {
        height: "60%",
        width: "100%",
        resizeMode: "contain",
      },
      name: {
        fontSize: 14,
        textTransform: "capitalize",
      },
      sources: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingVertical: 15,
      },
      sourceContainer: {
        height: 150,
        width: "40%",
        borderRadius: 10,
        margin: 15,
        backgroundColor: "#cc313d",
      },
      sourceImage: {
        height: "100%",
        borderRadius: 10,
        resizeMode: "cover",
      },
});
export default DiscoverScreen