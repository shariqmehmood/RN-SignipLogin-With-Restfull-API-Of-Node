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

const Headings = ({ navigation }) => {
    const [count, setcount] = useState("");
    const show = () => {
        setcount("Show");
    }



    return (
        <SafeAreaView >

            <StatusBar />
            <ScrollView>
                <View >

                    <TouchableOpacity>

                        <Text onPress={show} style={styles.sectionTitle}>
                            ClickMe
                        </Text>
                    </TouchableOpacity>

                    {count ? <>


                        <View style={styles.veiw}>

                            <Text style={styles.text}>
                                You are new Here
                            </Text>
                            <TouchableOpacity>

                                <Text onPress={() => { navigation.navigate("Signup"), setcount("") }} style={styles.Signup}>
                                    Signup
                                </Text>
                            </TouchableOpacity>



                            <Text style={styles.textL}>
                                Already Have An Account
                            </Text>

                            <TouchableOpacity>
                                <Text onPress={() => { navigation.navigate("Login"), setcount("") }} style={styles.Login}>
                                    Login
                                </Text>
                            </TouchableOpacity>

                        </View>



                    </> : null}




                </View>



            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    sectionTitle: {
        color: "#D70F64",
        marginTop: 100,
        textAlign: "center",
        fontSize: 50,
        fontWeight: '600',
        alignContent: "center",
    },
    veiw: {

    },
    text: {
        alignContent: "center",
        textAlign: "center",
        marginTop: 200,
        color: "black",
        fontSize: 20
    }, Signup: {
        color: "#D70F64",
        textAlign: "center",
        fontSize: 50,
        fontWeight: '600',
        alignContent: "center",
    },
    textL: {
        alignContent: "center",
        textAlign: "center",
        marginTop: 40,
        color: "black",
        fontSize: 20
    }, Login: {
        color: "#D70F64",
        textAlign: "center",
        fontSize: 50,
        fontWeight: '600',
        alignContent: "center",
    }

});

export default Headings;