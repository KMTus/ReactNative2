import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '../../../common/check_box';

const chervon_left = require('../../../assets/chervon_left.png');
const view = require('../../../assets/view.png');
const hide = require('../../../assets/hide.png');
const RegisterPage = ({navigation}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowRePassword, setIsShowRePassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}>
        <View style={styles.imageContainer}>
          <Image
            source={chervon_left}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.welcome}>Đăng ký</Text>
      </View>
      <View style={styles.form}>
        <View>
          <Text
            style={{
              fontWeight: '600',
            }}>
            Name
          </Text>
          <TextInput
            placeholder="Nguyen Viet Anh"
            onChangeText={setName}
            value={name}
            style={styles.email}
          />
        </View>
        <View>
          <Text
            style={{
              fontWeight: '600',
            }}>
            Email
          </Text>
          <TextInput
            inputMode="email"
            placeholder="vanhcoder@8386@gmail.com"
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
            Phone Number
          </Text>
          <TextInput
            placeholder="0984907397"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            inputMode="numeric"
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
            placeholder=""
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
        <View>
          <Text
            style={{
              fontWeight: '600',
            }}>
            Confirm Password
          </Text>
          <TextInput
            placeholder=""
            value={rePassword}
            onChangeText={setRePassword}
            secureTextEntry={isShowRePassword}
            style={styles.password}
          />
          <View
            onTouchEnd={() => {
              setIsShowRePassword(!isShowRePassword);
            }}
            style={styles.visible}>
            <Image source={isShowRePassword ? view : hide} />
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: 8}}>
          <CheckBox />
          <Text style={{color: 'black'}}>
            Tôi đồng ý với chính sách của app
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnLogin} onPress={()=>{navigation.pop()}}>
        <Text style={styles.loginText}>Đăng ký</Text>
      </TouchableOpacity>
      <View
        onTouchEnd={() => {
          navigation.pop();
        }}
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
          Bạn đã có tải khoản?{' '}
          <Text style={{color: 'black', fontWeight: 'bold'}}>Đăng nhập</Text>
        </Text>
      </View>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  imageContainer: {
    width: 35,
    height: 35,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  header: {
    marginTop: 35,
  },
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
    marginTop: 30,
    marginBottom: 10,
    gap: 30,
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
  btnLogin: {
    backgroundColor: '#F9B15D',
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  loginText: {color: 'white', fontWeight: 'bold', fontSize: 16},
});
