import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const view = require('../../../assets/view.png');
const hide = require('../../../assets/hide.png');
const google = require('../../../assets/google.png');
const facebook = require('../../../assets/facebook.png');
const LoginPage = ({navigation}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Chào mừng bạn</Text>
        <Text style={styles.login}>Đăng nhập để tiếp tục</Text>
      </View>
      <View style={styles.form}>
        <View>
          <Text
            style={{
              fontWeight: '600',
            }}>
            Email
          </Text>
          <TextInput
            placeholder="vanhcoder@8386@gmail.com"
            inputMode='email'
            onChangeText={setEmail}
            value={email}
            style={styles.email}
          />
        </View>
        <View>
          <Text
            style={{
              fontWeight: '600',
            }}>
            Password
          </Text>
          <TextInput
            placeholder="*****"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={isShowPassword}
            style={styles.password}
          />
          <View
            onTouchEnd={() => {
              setIsShowPassword(!isShowPassword);
            }}
            style={styles.visible}>
            <Image source={isShowPassword ? view : hide} />
          </View>
        </View>
      </View>
      <Text style={styles.fogotPassword}>Quên mật khẩu?</Text>
      <TouchableOpacity style={styles.btnLogin} onPress={()=>{navigation.navigate("MainScreen")}}>
        <Text style={styles.loginText}>Đăng nhập</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 7,
        }}>
        <View style={{width: 10, height: 1, backgroundColor: 'black'}}></View>
        <Text style={{fontSize: 16, color: 'black'}}>Hoặc</Text>
        <View style={{width: 10, height: 1, backgroundColor: 'black'}}></View>
      </View>

      <View style={styles.option}>
        <TouchableOpacity
          style={[
            styles.btnLogin,
            {
              marginVertical: 20,
              backgroundColor: 'transparent',
              borderColor: 'black',
              borderWidth: 0.5,
              position: 'relative',
            },
          ]}>
          <Image source={google} style={{position: 'absolute', left: 10}} />

          <Text
            style={[styles.loginText, {color: 'black', fontWeight: 'normal'}]}>
            Đăng nhập với Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnLogin,
            {
              marginVertical: 0,
              backgroundColor: 'transparent',
              borderColor: 'black',
              borderWidth: 0.5,
              position: 'relative',
            },
          ]}>
          <Image source={facebook} style={{position: 'absolute', left: 10}} />

          <Text
            style={[styles.loginText, {color: 'black', fontWeight: 'normal'}]}>
            Đăng nhập với Facebook
          </Text>
        </TouchableOpacity>
      </View>
      <View
      onTouchEnd={()=>{navigation.navigate("RegisterPage")}}
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#F4F2F2',
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          left: 0,
          right: 0,
        }}>
        <Text style={{fontSize: 15}}>
          Bạn chưa có tải khoản?{' '}
          <Text style={{color: 'black', fontWeight: 'bold'}}>Đăng ký</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    position: 'relative',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  header: {},
  welcome: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'black',
  },
  login: {
    fontSize: 16,
    fontWeight: '600',
  },
  form: {
    marginTop: 60,
    marginBottom: 10,
    gap: 40,
  },
  email: {
    marginTop: -10,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  password: {
    position: 'relative',
    marginTop: -10,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  visible: {
    position: 'absolute',
    width: 26,
    height: 26,
    right: 5,
    top: 22,
  },
  fogotPassword: {
    textAlign: 'right',
    color: 'black',
  },
  btnLogin: {
    backgroundColor: '#F9B15D',
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  loginText: {color: 'white', fontWeight: 'bold', fontSize: 16},
});
