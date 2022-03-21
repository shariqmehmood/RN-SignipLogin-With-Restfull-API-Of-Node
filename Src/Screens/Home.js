import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    ImageBackground
} from 'react-native';
import laptop from "../images/laptop.jpg"
import laptop1 from "../images/laptop1.jpg"
import laptop2 from "../images/laptop2.jpg"
import laptop3 from "../images/laptop3.jpg"



const Home = () => {
    return (
        <SafeAreaView >

            <StatusBar />
            <ScrollView>
                <View style={{ backgroundColor: "black" }}>
                    <Text style={{ fontSize: 35, fontFamily: "bold", textAlign: "center", color: "white", backgroundColor: "black" }}>Welcome in Online Mart</Text>

                    <ImageBackground source={laptop} style={{ width: 400, height: 200 }} />
                    <View style={{ backgroundColor: "black" }}>
                        <Text>
                            Delivery on Time
                        </Text>

                    </View>
                    <View style={{ margin: 20 }}>
                        <Image style={{ width: 400, height: 200 }} source={laptop1}></Image>
                        <Image style={{ width: 400, height: 200 }} source={laptop2}></Image>
                        <Image style={{ width: 400, height: 300 }} source={laptop3}></Image>

                    </View>






                 <View style={{height:150}}>
                     <Text style={{color:"white",textAlign:"right",fontSize:20,borderBottomColor:"black",}}>@ShariqMehmood</Text>
 
                        <Text>

                        </Text>
                 </View>


                </View>



            </ScrollView>

        </SafeAreaView>
    );
};

export default Home;