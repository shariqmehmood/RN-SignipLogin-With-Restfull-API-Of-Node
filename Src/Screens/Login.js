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
    Image
} from 'react-native';
import axios from "axios";


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


        // else {

        //     setsccmsg("User Login Sucess");
        //     setTimeout(() => {
        //         setsccmsg('');
        //         navigation.navigate('Home')
        //     }, 1000)
        //     let data = {
        //         email,
        //         password
        //     }
        //     console.log(data)


        // }
    }
    return (
        <SafeAreaView >
            <StatusBar />
            <ScrollView>
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
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    sectionTitle: {
        color: "#D70F64",
        marginTop: 40,
        textAlign: "center",
        fontSize: 50,
        fontWeight: '600',
    },
    login: {
        color: "#D70F64",
        fontSize: 30,
        fontWeight: '400',
        marginLeft: 210,

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        borderColor: "#D70F64",
        padding: 10,
        color: "black",
        borderRadius: 9,
        color: "#D70F64"
    },
    input_VeiW: {
        marginTop: 60,

    },
    VeiW: {
        marginTop: 30,
        // textAlign: "center",


    }, text: {
        marginLeft: 180,
        fontSize: 18,
        color: "#3b5998"



    },
    button: {
        backgroundColor: "#D70F64",
        textAlign: "center",
        color: "black",
        fontSize: 30,
        marginTop: 50,
        width: 200,
        alignContent: "center",
        borderRadius: 10,


    },
    Button_Veiw: {
        justifyContent: "center",
        alignItems: "center",

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