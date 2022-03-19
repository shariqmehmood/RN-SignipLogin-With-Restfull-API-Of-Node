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

const ForgetPassword = ({navigation}) => {

    const [email, setemail] = useState("")
    const [sccmsg, setsccmsg] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const Submit = () => {
        
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
       
        if (email === "") {
            setErrMsg("Email is Required");
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
        else {

            setsccmsg("User Login Sucess");
            setTimeout(() => {
                setsccmsg('');
            }, 1000)
            let data = {
                email,
            }
            console.log(data)


        }
    }
    return (
        <SafeAreaView >
            <StatusBar />
            <ScrollView>
                <View style={styles.background}>


                    <Text style={styles.sectionTitle}>
                        SetPassword
                    </Text>
                    <View>

                        
                        <View>
                            <TextInput style={styles.input} onChangeText={text => (setemail(text))} placeholder='Place Your Gmail' />
                        </View>
                       
                    </View>

                </View>
                <View style={styles.Button_Veiw}>
                    <TouchableOpacity>
                        <Text style={styles.button} onPress={Submit}>Submit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.VeiW}>
                  
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

export default ForgetPassword;