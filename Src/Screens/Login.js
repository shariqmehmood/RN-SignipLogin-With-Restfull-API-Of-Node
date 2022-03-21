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

const Login = ({ navigation }) => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [sccmsg, setsccmsg] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const Login = () => {

        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        const axios = require('axios');


        if (email === "") {
            setErrMsg("All Feild is Required");
            setTimeout(() => {
                setErrMsg('');
            }, 3000)

        }
        else if (!regEx.test(email) && email !== "") {
            //   setemailErrMsg("Email is Not Valid");
            setErrMsg("email is not valid")
            setTimeout(() => {
                setErrMsg('');
            }, 3000)
        }
        else if (password === "") {
            setErrMsg("All Feild is Required");
            setTimeout(() => {
                setErrMsg('');
            }, 3000)

        }


        else {
            const axios = require('axios');
            let user = {
                Email: email,
                Password: password,
            }

            axios.post("https://form-back-end.herokuapp.com/login", user)

                .then(function (response) {
                    setsccmsg("User Login Sucess");

                    console.log(response.data.msg);
                    setTimeout(() => {
                        setemail("");
                        setpassword("");
                        navigation.navigate('Home')
                        setsccmsg("")
                    }, 3000)

                })
                .catch(function (error) {
                    if (error?.response?.data?.msg === "Email not found") {
                        setErrMsg("Email not found");
                        setTimeout(() => {
                            setErrMsg('');
                        }, 1000)
                    }
                    else if (error?.response?.data?.msg === "incorrect password") {
                        setErrMsg("incorrect password")
                        setTimeout(() => {
                            setErrMsg('');
                        }, 1000)

                    }
                    else if (error?.response?.data?.msg === "server err") {
                        setErrMsg("Try again later")
                        setTimeout(() => {
                            setErrMsg('');
                        }, 1000)

                    } else {
                        setErrMsg("")
                    }


                    console.log({ error });
                });

        }





    }
    return (
        <SafeAreaView >
            <StatusBar />
            <View style={{backgroundColor:"black",height:1000}}>

                <ImageBackground source={img} style={{ height: 100 }} />
                <View style={styles.background}>


                    <Text style={styles.sectionTitle}>
                        Login
                    </Text>
                    <View>


                        <View>
                            <TextInput value={email} style={styles.input} onChangeText={text => (setemail(text))} placeholder='Place Your Gmail' />
                        </View>
                        <View>
                            <TextInput value={password} style={styles.input} onChangeText={text => (setpassword(text))} placeholder='Place Your Password' />
                        </View>
                    </View>

                </View>
                <View style={styles.Button_Veiw}>
                    <TouchableOpacity>
                        <Text style={styles.button} onPress={Login}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.VeiW}>
                    <TouchableOpacity>

                        <Text style={styles.text} onPress={() => { navigation.navigate('SetPassword') }} >Forget your  Password ?
                        </Text>
                    </TouchableOpacity>
                    {errMsg ? <Text style={{ color: "red", textAlign: "center", fontSize: 25, fontWeight: "bold", marginTop: 20, }}>{errMsg}</Text> : null}
                    {sccmsg ? <Text style={{ color: "green", textAlign: "center", fontSize: 25, fontWeight: "bold", marginTop: 20, }}>{sccmsg}</Text> : null}



                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    sectionTitle: {
        color: "black",
        marginTop: 50,
        textAlign: "center",
        fontSize: 50,
        fontWeight: '600',
    },
    login: {
        color: "#D70F64",
        fontSize: 30,
        fontWeight: '400',
        marginLeft: 210,

    }, background: {
        backgroundColor: "white",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        marginTop:50
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        backgroundColor: "white",
        borderColor: "black",
        padding: 10,
        color: "black",
        borderRadius: 9,
    },
    input_VeiW: {
        marginTop: 60,

    },
    VeiW: {
        paddingTop: 30,
        // textAlign: "center",
        backgroundColor:"white",
        height:300


    }, text: {
        marginLeft: 180,
        fontSize: 18,
        color: "#3b5998",
    },



    button: {
        backgroundColor: "black",
        textAlign: "center",
        color: "white",
        fontSize: 30,
        // paddingTop: 50,
        width: 200,
        alignContent: "center",
        borderRadius: 10,


    },
    Button_Veiw: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white",
        paddingTop:80

    },
    imgStyle: {
        height: 200,
        width: 200,
    },
    img: {
        height: 200,
        width: 200,
        marginLeft: 70,
    },


});

export default Login;