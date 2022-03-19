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

const Home = () => {

    return (
        <SafeAreaView >

            <StatusBar />
            <ScrollView>
                <View >

                    <TouchableOpacity>

                        <Text style={styles.sectionTitle}>
                            HomePage
                        </Text>
                    </TouchableOpacity>








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

export default Home;