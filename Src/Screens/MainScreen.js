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
    ImageBackground,
} from 'react-native';
import imgtop from "../images/Sign.jpg"
import imgbottom from "../images/w.png"
import Google from './google';
const Headings = ({ navigation }) => {
    const [count, setcount] = useState("Show");
 
    setTimeout(() => {
        setcount("")
    }, 3500)

    return (

        <View>


            {count ?
                <View style={styles.ad}>

                    <Image source={imgbottom} style={{ height: 200, width: 400 }}></Image>
                    <ActivityIndicator size="large" color="white" style={{ width: 400 }} />

                </View>

                :

                <View style={{ backgroundColor: "black" }} >

                    <ImageBackground source={imgtop} style={{ width: 400, height: 100, marginTop: 220 }} />




                    <View style={styles.veiw}>


                        <TouchableOpacity>

                            <Text onPress={() => { navigation.navigate("Signup"), setcount("") }} style={styles.Signup}>
                                Signup
                            </Text>
                        </TouchableOpacity>




                        <TouchableOpacity>
                            <Text onPress={() => { navigation.navigate("Login"), setcount("") }} style={styles.Login}>
                                Login
                            </Text>
                        </TouchableOpacity>

                        <Google />

                    </View>








                </View>

            }


        </View>

    );
};

const styles = StyleSheet.create({

    ad: {
        backgroundColor: "black",
        paddingTop: 220,
        paddingBottom: 350
    },
    Signup: {
        fontFamily: "",

        // marginTop:200,
        height: 80,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        // alignSelf:"center",
        borderWidth: 2,
        borderColor: "white",
        padding: 10,
        // color: "black",
        borderRadius: 9,
        color: "white",
        fontSize: 40,
        textAlign: "center",
        backgroundColor: "black",
        width: 180
    },
    Login: {

        height: 80,
        width: 180,
        marginTop: -90,
        // alignSelf:"center",
        marginLeft: 200,
        borderWidth: 2,
        borderColor: "white",
        padding: 10,
        borderRadius: 9,
        color: "white",
        fontSize: 40,
        textAlign: "center",
        backgroundColor: "black",
        marginBottom: 120
    }
    , google: {
        marginLeft: 10,
        height: 80,
        width: 370,
        marginTop: -90,
        // alignSelf:"center",
        // marginLeft: 200,
        borderWidth: 2,
        borderColor: "white",
        padding: 10,
        borderRadius: 9,
        color: "white",
        fontSize: 33,
        textAlign: "center",
        backgroundColor: "black",
        // marginBottom: 120

    }
    , veiw: {
        marginTop: 135
    }

});

export default Headings;