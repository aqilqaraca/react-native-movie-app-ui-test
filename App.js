import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["transparent", "rgb(149, 165, 166)"]}
        style={styles.background}
        locations={[0.1, 0.8]}
      />
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <View style={styles.back}>
            <AntDesign name="left" size={18} color="white" />
            <Text style={styles.headerBack}>Back</Text>
          </View>
          <View style={styles.category}>
            <Entypo name="dots-three-vertical" size={18} color="white" />
            <AntDesign
              name="hearto"
              size={18}
              color="white"
              style={{ marginLeft: 5 }}
            />
          </View>
        </View>
        <View style={styles.itemBox}>
          <View style={styles.item}>
            <View style={styles.headerBody}>
              <View style={styles.posterBox}>
                <Image
                  style={styles.poster}
                  source={require("./assets/images/poster.jpg")}
                />
              </View>
              <AntDesign
                name="hearto"
                size={20}
                color="white"
                style={styles.wish}
              />
              <Text style={styles.title}>Godzilla vs. Kong</Text>
              <View style={styles.stars}>
                <FontAwesome name="star" size={24} color="orange" />
                <FontAwesome
                  style={styles.star}
                  name="star"
                  size={24}
                  color="orange"
                />
                <FontAwesome
                  style={styles.star}
                  name="star"
                  size={24}
                  color="orange"
                />
                <FontAwesome
                  style={styles.star}
                  name="star-o"
                  size={24}
                  color="orange"
                />
                <FontAwesome
                  style={styles.star}
                  name="star-o"
                  size={24}
                  color="orange"
                />
              </View>
              <View style={styles.tags}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Sci-fi</Text>
                </View>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Horror</Text>
                </View>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Drama</Text>
                </View>
              </View>
            </View>
            <View style={styles.bottom}>
              <Text style={styles.bottomText}>book now</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <Image
        source={require("./assets/images/wall.jpeg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 30,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  safe: {
    elevation: 5,
    marginTop: StatusBar.currentHeight,
  },
  headerBack: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
    fontSize: 14,
    marginLeft: 5,
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
  },
  category: {
    flexDirection: "row",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
    elevation: 5,
  },
  image: {
    position: "absolute",
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    bottom: 100,
    elevation: 3,
  },
  scro: {
    backgroundColor: "purple",
  },
  itemBox: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
  item: {
    backgroundColor: "white",
    width: "70%",
    height: 550,
    borderRadius: 130,
    overflow : 'hidden'
  },
  headerBody: {
    padding: 30,
    alignItems: "center",
  },
  posterBox: {
    height: 300,
    width: "100%",
  },
  poster: {
    height: "100%",
    width: "100%",
    resizeMode: "center",
    borderRadius: 160,
  },
  title: {
    fontSize: 24,
  },
  wish: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 50,
    position: "absolute",
    bottom: "37%",
    right: "4%",
  },
  stars: {
    flexDirection: "row",
    marginTop: 15,
  },
  star: {
    marginLeft: 7,
  },
  tags : {
    flexDirection : 'row',
    marginTop : 15
  },
  tag : {
    borderColor : 'rgba(0,0,0,0.2)',
    borderWidth : 1,
    borderRadius : 15,
    paddingHorizontal : 10,
    paddingVertical : 3,
    marginLeft : 10
  },
  tagText : {
    fontSize : 15
  },
  bottom : {
    backgroundColor : 'black',
    width : '100%',
    height : 100,
    position : 'absolute',
    bottom : -25,
    borderRadius : 100,
    justifyContent : 'flex-start',
    alignItems : 'center'
  },
  bottomText : {
    textTransform : 'uppercase',
    color : 'white',
    fontWeight : 'bold',
    fontSize : 18,
    marginTop : 20
  }
});
