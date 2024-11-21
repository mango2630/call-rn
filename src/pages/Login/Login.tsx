import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { UserInfoContext } from '../../context';
import { genTestUserSig } from '../../debug/GenerateTestUserSig-es';
const LOGO_EN_SRC = require('../../assets/logo-en.png');
const BG_SRC = require('../../assets/bg.png');

export default function Login(): React.JSX.Element {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const navigation = useNavigation();
  const [userID, setUserID] = useState('');
  const handleLogin = () => {
    console.log('login', userID);
    const { SDKAppID, userSig } = genTestUserSig(userID);
    // TUICallKit.login()
    setUserInfo({
      ...userInfo,
      userID,
      currentPage: 'login',
      SDKAppID,
      userSig,
    });

    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img_bg}
        source={BG_SRC}
        resizeMode='stretch'
      >
        <Image
          style={styles.img_logo}
          source={LOGO_EN_SRC}
        />
      </ImageBackground>
      <View style={styles.box_login}>
        <TextInput
          style={styles.input_userID}
          onChangeText={setUserID}
          value={userID}
          placeholder="请输入要创建/登录的 userID"
        />
        <Text style={styles.text_login_tip}> 仅支持大、小写字母、数字、“_”和“-”，不超过32位 </Text>
        <TouchableOpacity 
          style={{
            backgroundColor: '#0070f0',
            width: '100%',
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={handleLogin}
        >
          <Text style={{color: '#fff'}}> 注册/登录 </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  img_bg: {
    height: 300,
    alignItems: 'center',
  },
  img_logo: {
    width: 250,
    height: 50,
    marginTop: 100,
  },
  box_login: {
    padding: 20,
    rowGap: 20,
  },
  input_userID: {
    height: 52,
    padding: 10,
    borderWidth: 1,
    borderRightColor: '#E7ECF6',
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  text_login_tip: {
    color: '#99a2b2',
    marginTop: -10,
  },
});
