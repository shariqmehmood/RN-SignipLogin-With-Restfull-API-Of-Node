import React, { useEffect } from "react";
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
import google from "../images/gogle.png"

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';


const Google = () => {

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
            webClientId: '197995320864-ahh6kn6jbcb01ojb5b7pn64ivqo1vhkf.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            // hostedDomain: '', // specifies a hosted domain restriction
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            // accountName: '', // [Android] specifies an account name on the device that should be used
            // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
            // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
            // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
            // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px

        })
        // /////


    }, []);

    let signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo)
            // this.setState({ userInfo });
        } catch (error) {
            console.log(error)
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow

            } else if (error.code === statusCodes.IN_PROGRESS) {

                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated

            } else {
                // some other error happened

            }
        }
    };

    return (
        <>
            <TouchableOpacity>
                <Text onPress={signIn} style={styles.google}>
                    Countinue With <Image style={{ height: 40, width: 40, marginLeft: 100 }} source={google}></Image>
                </Text>

               

            </TouchableOpacity>

        </>
    )

}
export default Google;

const styles = StyleSheet.create({



    google: {
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


});