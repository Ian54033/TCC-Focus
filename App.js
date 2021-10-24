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

import LoginPage from './src/components/Login/login';
import CadastroPage from './src/components/Cadastro/cadastro';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
      // <LoginPage/>
      <CadastroPage/>
  );
}