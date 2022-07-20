import React from "react";
import { Text, View, Image } from "react-native";

import {
  styles
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextButton,
} from "./styles";

export default function SignIn() {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if(emailField != '' && passwordField != '') {

      let json = await Api.signIn(emailField, passwordField);

      if(json.token) {
        await AsyncStorage.setItem('token', json.token);

        userDispatch({
            type: 'setAvatar',
            payload:{
                avatar: json.data.avatar
            }
        });

        navigation.reset({
            routes:[{name:'MainTab'}]
        });
      } else {
        alert('E-mail e/ou senha errados!');
      }

    } else {
        alert("Preencha os campos!");
    }
  }

  const handleMessageButtonClick = () => {
    navigation.reset({
        routes: [{name: 'SignUp'}]
    });
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/work.png")} />
      <SignInput
        IconSvg={EmailIcon}
        placeholder="Digite seu e-mail"
        value={emailField}
        onChangeText={t => setEmailField(t)}
      />

      <SignInput
        IconSvg={LockIcon}
        placeholder="Digite sua senha"
        value={passwordField}
        onChangeText={t => setPasswordField(t)}
        password={true}
      />

        <CustomButton>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>

        <SignMessageButton onPress={handleMessageButtonClick}>
          <SignMessageButtonText>
            Ainda não possui sua conta?
          </SignMessageButtonText>
          <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>
    </View>
  );
}
