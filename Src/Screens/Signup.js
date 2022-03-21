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
    ImageBackground
} from 'react-native';
import axios from "axios";
import img from "../images/Sign.jpg"
const Signup = ({ navigation }) => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")
    const [Number, setnumber] = useState("")
    const [errMsg, setErrMsg] = useState('o');
    const [ErrColor, setErrcolor] = useState('white');


    const signup = () => {

        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        const axios = require('axios');


        if (name === "") {
            setErrcolor("red")
            setErrMsg("All Feild is Rquired");
            setTimeout(() => {
                setErrcolor("white")
                setErrMsg('o');
            }, 3000)

        }
        else if (email === "") {
            setErrcolor("red")
            setErrMsg("All Feild is Rquired");
            setTimeout(() => {
                setErrcolor("white")
                setErrMsg('o');
            }, 3000)

        }
        else if (!regEx.test(email) && email !== "") {
            //   setemailErrMsg("Email is Not Valid");
            setErrcolor("red")
            setErrMsg("email is not valid")
            setTimeout(() => {
                setErrcolor("white")
                setErrMsg('o');
            }, 3000)
        }
        else if (password === "") {
            setErrcolor("red")
            setErrMsg("All Feild is Rquired");
            setTimeout(() => {
                setErrcolor("white")
                setErrMsg('o');
            }, 3000)

        }
        else if (Number === "") {
            setErrcolor("red")
            setErrMsg("All Feild is Rquired");
            setTimeout(() => {
                setErrcolor("white")
                setErrMsg('o');
            }, 3000)

        }

        else {


            let user = {
                Name: name,
                Email: email,
                Password: password,
                Number: Number,
            }
            axios.post("https://form-back-end.herokuapp.com/Signup", user)
                .then((res) => {
                    console.log(res.data.msg, 'response');

                    if (res.data.msg === "email is alredy in Use") {
                        setErrcolor("red")
                        setErrMsg("Email is Already in Used");
                        setTimeout(() => {
                            setErrcolor("white")
                            // setErrMsg('o');
                        }, 3000)
                    }
                    else {
                        setErrcolor("green")
                        setErrMsg("user auth sucess");
                        setname(""),
                        setemail(""),
                        setpassword(""),
                        setnumber(""),
                        setTimeout(() => {
                            navigation.navigate('Login')
                            setErrcolor("white")
                        }, 1500)

                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }





    }
    return (
        <SafeAreaView >
            <StatusBar />
            <ScrollView>
                <View style={{ backgroundColor: "black" }}>

                    <ImageBackground source={img} style={{ height: 150, marginTop: -30 }}></ImageBackground>
                    <View style={styles.background}>

                        <Text style={styles.sectionTitle}>
                            Signup
                        </Text>
                        <View>

                            <View style={styles.input_VeiW}>
                                <TextInput style={styles.input} value={name} onChangeText={text => (setname(text))} placeholder='Place Your Name' />
                            </View>
                            <View>
                                <TextInput style={styles.input} value={email} onChangeText={text => (setemail(text))} placeholder='Place Your Gmail' />
                            </View>
                            <View>
                                <TextInput style={styles.input} value={password} onChangeText={text => (setpassword(text))} keyboardType="visible-password" placeholder='Place Your Password' />
                            </View>
                            <View>
                                <TextInput style={styles.input} value={Number} onChangeText={text => (setnumber(text))} keyboardType="number-pad" placeholder='Eg :03440324499' />
                            </View>
                        </View>

                    </View>
                    <View style={styles.Button_Veiw}>
                        <TouchableOpacity>
                            <Text style={styles.button} onPress={signup}>Signup</Text>
                        </TouchableOpacity>
                        <Text style={styles.Text} onPress={() => { navigation.navigate('Login') }} >You Have an Account ?
                        </Text>

                        {errMsg ? <Text style={{ color: ErrColor, paddingBottom: 20, textAlign: "center", fontSize: 25, fontWeight: "bold", marginTop: 20, }}>{errMsg}</Text> : null}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Text: {
        marginLeft: 180,
        fontSize: 18,
        color: "#3b5998",
        marginTop: 20,
    },
    sectionTitle: {
        color: "black",
        marginTop: 20,
        textAlign: "center",
        fontSize: 50,
        fontWeight: '600',
    },
    login: {
        color: "white",
        fontSize: 30,
        fontWeight: '400',
        marginLeft: 210,

    },
    input: {
        height: 40,
        margin: 12,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
        padding: 10,
        color: "black",
        borderRadius: 9,
        color: "black"
    },
    input_VeiW: {
        marginTop: 30,

    },
    VeiW: {
        marginTop: 30,
        textAlign: "center",


    }, text: {
        marginLeft: 50,
        // fontSize: 18,
        marginTop: 20


    },
    button: {
        backgroundColor: "black",
        textAlign: "center",
        color: "white",
        fontSize: 30,
        marginTop: 20,
        width: 200,
        alignContent: "center",
        borderRadius: 10,


    },
    Button_Veiw: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",

    },
    background: {
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        // paddingBottom:50


    }


});

export default Signup;