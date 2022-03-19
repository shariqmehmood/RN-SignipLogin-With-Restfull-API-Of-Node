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


const Signup = ({ navigation }) => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")
    const [Number, setnumber] = useState("")
    const [errMsg, setErrMsg] = useState('');
    const [sccmsg, setsccmsg] = useState('');


    const signup = () => {

        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        const axios = require('axios');


        if (name === "") {
            setErrMsg("All Feild is Rquired");
            setTimeout(() => {
                setErrMsg('');
            }, 3000)

        }
        else if (email === "") {
            setErrMsg("All Feild is Rquired");
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
            setErrMsg("All Feild is Rquired");
            setTimeout(() => {
                setErrMsg('');
            }, 3000)

        }
        else if (Number === "") {
            setErrMsg("All Feild is Rquired");
            setTimeout(() => {
                setErrMsg('');
            }, 3000)

        }

        else {
            setTimeout(() => {
                setErrMsg("")
            }, 3000)

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
                        setErrMsg("email is found");
                    }
                    else {
                        setsccmsg("user auth sucess");
                        setTimeout(() => {
                            navigation.navigate('Login')
                            setsccmsg('');
                        }, 1000)
                        setTimeout(() => {
                            setname("");
                            setpassword("");
                            setnumber("");
                            setemail("");

                        }, 2000)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        // else {
        // let data = {
        //         name,
        //         email,
        //         password
        //     }
        //     console.log(data)
        //     
        // }



    }
    return (
        <SafeAreaView >
            <StatusBar />
            <ScrollView>
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
                </View>

                {errMsg ? <Text style={{ color: "red", textAlign: "center", fontSize: 25, fontWeight: "bold", marginTop: 20, }}>{errMsg}</Text> : null}
                {sccmsg ? <Text style={{ color: "green", textAlign: "center", fontSize: 25, fontWeight: "bold", marginTop: 20, }}>{sccmsg}</Text> : null}

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
        textAlign: "center",


    }, text: {
        marginLeft: 50,
        fontSize: 18,
        marginTop: 20


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

export default Signup;