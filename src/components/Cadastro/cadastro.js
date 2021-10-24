import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import styles from '../../../assets/Style/Styles';

export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState("");
    const [confirmemail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../../assets/log2.png")} />
            Cadastro
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="E-mail"
                    placeholderTextColor="#ffffff"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Confirmação de E-mail"
                    placeholderTextColor="#ffffff"
                    onChangeText={(confirmemail) => setConfirmEmail(confirmemail)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Senha"
                    placeholderTextColor="#ffffff"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Confirmar Senha"
                    placeholderTextColor="#ffffff"
                    secureTextEntry={true}
                    onChangeText={(confirmpassword) => setConfirPassword(confirmpassword)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.CadastroBtn}>
                <Text style={styles.CadastroText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    );
}

