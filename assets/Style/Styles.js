import {
    StyleSheet
  } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 30,
      
    },
   
    inputView: {
      backgroundColor: "#8ca7c8",
      borderRadius: 30,
      width: "80%",
      height: 45,
      marginBottom: 20,
      
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
      color: 'black'
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 1,
      backgroundColor: "#8ca7c8",
      
    },
  });

  export default styles;