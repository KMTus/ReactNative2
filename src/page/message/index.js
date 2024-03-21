import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
const iconSearch = require('../../assets/search.png');
const avt = require('../../assets/avt.png');

const MessagePage = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          height: 40,
          justifyContent: 'center',
          backgroundColor: '#F1A247',
        }}>
        <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
          Message
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
        }}>
        <View style={styles.password}>
          <View style={styles.visible}>
            <Image
              source={iconSearch}
              style={{
                flex: 1,
                width: undefined,
                height: undefined,
              }}
            />
          </View>
          <TextInput placeholder="Find someone..." />
        </View>
        <View
          style={{flexDirection: 'row', gap: 8}}
          onTouchEnd={() => navigation.navigate('DetailMessage')}>
          <View
            style={{
              width: 50,
              height: 50,
              borderWidth: 1,
              borderRadius: 40,
            }}>
            <Image
              source={avt}
              style={{
                flex: 1,
                width: undefined,
                height: undefined,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'space-evenly',
            }}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 17}}>
              Nguyễn Văn Nam
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontSize: 13,
                flexWrap: 'wrap',
              }}>
              Bạn: Chào cô giáo tôi là phụ huynh em vanh
            </Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
                fontSize: 10,
              }}>
              2 phút trước
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MessagePage;

const styles = StyleSheet.create({
  visible: {
    width: 26,
    height: 26,
  },
  password: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
    borderBottomColor: 'black',
    borderWidth: 0.8,
    paddingHorizontal: 7,
    borderRadius: 12,
    marginVertical: 15,
  },
});
