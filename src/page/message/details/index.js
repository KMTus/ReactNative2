import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
const chervon_left = require('../../../assets/left.png');
const avt = require('../../../assets/avt.png');
const phone = require('../../../assets/phone.png');
const cam = require('../../../assets/cam.png');
const like = require('../../../assets/like.png');
const pic = require('../../../assets/pic.png');
const img = require('../../../assets/img.png');
const voice = require('../../../assets/voice.png');
const emoji = require('../../../assets/emoji.png');

const DetailMessage = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', position: 'relative'}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          height: 55,
          gap: 9,
          paddingHorizontal: 10,
          justifyContent: 'flex-start',
          backgroundColor: '#fff',
          elevation: 7,
        }}>
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
        <View style={{flexDirection: 'row', gap: 8, flex: 1}}>
          <View style={{width: 40, height: 40, position: 'relative'}}>
            <Image source={avt} style={styles.image} resizeMode="contain" />
            <View
              style={{
                position: 'absolute',
                width: 15,
                right: 0,
                bottom: 0,
                height: 15,
                borderRadius: 20,
                backgroundColor: '#07FF02',
              }}></View>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
              Nguyễn Văn Nam
            </Text>
            <Text style={{fontSize: 13, color: 'grey'}}>Đang hoạt động</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <View style={styles.imageContainer}>
            <Image source={phone} style={styles.image} resizeMode="cover" />
          </View>
          <View style={styles.imageContainer}>
            <Image source={cam} style={styles.image} resizeMode="cover" />
          </View>
        </View>
      </View>
      {/* content */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 30,
          alignItems: 'stretch',
          gap: 20,
        }}>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <View style={{width: 40, height: 40, position: 'relative'}}>
            <Image source={avt} style={styles.image} resizeMode="contain" />
          </View>
          <View
            style={{
              width: 260,
              backgroundColor: '#D9D9D9',
              borderRadius: 20,
              padding: 10,
            }}>
            <Text style={{fontSize: 14, letterSpacing: 0.5, color: 'black'}}>
              Anh à con trai anh đi học ngoan lắm chiều anh đến đón cháu nhớ
              mang theo áo ấm nhé
            </Text>
          </View>
        </View>

        <View
          style={{flexDirection: 'row-reverse', gap: 10, alignItems: 'center'}}>
          <View
            style={{
              width: 50,
              alignItems: 'center',
              backgroundColor: '#F9B15D',
              borderRadius: 20,
              padding: 10,
            }}>
            <Text style={{fontSize: 14, letterSpacing: 0.5, color: 'white'}}>
              Ok
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <View style={{width: 40, height: 40, position: 'relative'}}>
            <Image source={avt} style={styles.image} resizeMode="contain" />
          </View>
          <View
            style={{
              maxWidth: 150,
              borderRadius: 20,
              padding: 10,
            }}>
            <View style={{width: 35, height: 35}}>
              <Image source={like} style={styles.image} resizeMode="cover" />
            </View>
          </View>
        </View>

        <View
          style={{flexDirection: 'row-reverse', gap: 10, alignItems: 'center'}}>
          <View
            style={{
              maxWidth: 150,
              alignItems: 'center',
              backgroundColor: '#F9B15D',
              borderRadius: 20,
              padding: 10,
            }}>
            <Text style={{fontSize: 14, letterSpacing: 0.5, color: 'white'}}>
              Chiều anh qua nhé
            </Text>
          </View>
        </View>
      </View>

      <View style={{position: 'absolute', width: '100%', bottom: 0}}>
        <View
          style={{
            paddingVertical: 7,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            height: 55,
            gap: 15,
            paddingHorizontal: 10,
            justifyContent: 'flex-start',
            backgroundColor: '#fff',
            elevation: 7,
          }}>
          <View style={styles.imageContainer}>
            <Image source={pic} style={styles.image} resizeMode="contain" />
          </View>
          <View style={styles.imageContainer}>
            <Image source={img} style={styles.image} resizeMode="contain" />
          </View>
          <View style={styles.imageContainer}>
            <Image source={voice} style={styles.image} resizeMode="contain" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              flex: 1,
              borderWidth: 1,
              height: '100%',
              borderRadius: 20,
              backgroundColor: '#D5D5D5',
              position: 'relative',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Nhập tin nhắn..."
              style={{
                width: '100%',
                paddingHorizontal: 20,
              }}
            />
            <View style={{width: 20, height: 20, right: 40}}>
              <Image source={emoji} style={styles.image} resizeMode="cover" />
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image source={like} style={styles.image} resizeMode="cover" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailMessage;

const styles = StyleSheet.create({
  imageContainer: {
    width: 25,
    height: 25,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
