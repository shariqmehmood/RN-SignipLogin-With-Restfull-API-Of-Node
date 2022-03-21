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
import img from "../images/Sign.jpg"
const ForgetPassword = ({ navigation }) => {

    const [email, setemail] = useState("")
    const [errcolor, seterrcolor] = useState('white');
    const [errMsg, setErrMsg] = useState('o');

    const Submit = () => {

        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

        if (email === "") {
            seterrcolor("red")
            setErrMsg("Email is Required");
            setTimeout(() => {
                seterrcolor("white")
                setErrMsg('o');
            }, 3000)

        }
        else if (!regEx.test(email) && email !== "") {
            //   setemailErrMsg("Email is Not Valid");
            seterrcolor("red")
            setErrMsg("email is not valid")
            setTimeout(() => {
                setErrMsg('o');
                seterrcolor("white")

            }, 3000)
        }
        else {
            setemail("")
            seterrcolor("green")
            setErrMsg("wait");
            setTimeout(() => {
            seterrcolor("white")
                setErrMsg('o');
            }, 2000)
            let data = {
                email,
            }
            console.log(data)


        }
    }
    return (
        <SafeAreaView >
            <StatusBar />
            <View style={{ backgroundColor: "black" }}>

                <ImageBackground source={img} style={{ height: 100 }} />
                <View style={styles.background}>


                    <Text style={styles.sectionTitle}>
                        SetPassword
                    </Text>
                    <View>


                        <View>
                            <TextInput style={styles.input} value={email} onChangeText={text => (setemail(text))} placeholder='Place Your Gmail' />
                        </View>

                    </View>

                    <View style={styles.Button_Veiw}>
                        <TouchableOpacity>
                            <Text style={styles.button} onPress={Submit}>Submit</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.VeiW}>
                        {errMsg ? <Text style={{ color: errcolor, textAlign: "center", fontSize: 25, fontWeight: "bold", marginTop: 50, marginBottom: 200 }}>{errMsg}</Text> : null}


                    </View>

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
        marginBottom: 50,
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
        borderColor: "black",
        padding: 10,
        color: "black",
        borderRadius: 9,
        backgroundColor: "white"
        // color: "#D70F64"
    },
    input_VeiW: {
        marginTop: 60,

    },
    text: {
        marginLeft: 180,
        fontSize: 18,
        color: "#3b5998"



    },
    button: {
        backgroundColor: "black",
        textAlign: "center",
        color: "white",
        fontSize: 30,

        width: 200,
        alignContent: "center",
        borderRadius: 10,
        // marginBottom:10


    },
    Button_Veiw: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        marginTop: 50
    },

    background: {
        backgroundColor: "white",
        marginTop: 60,
        // marginBottom:20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    }

});

export default ForgetPassword;