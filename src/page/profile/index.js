import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {StackActions} from '@react-navigation/native';
const u = require('../../assets/user.png');
const iconNotify = require('../../assets/notification.png');
const cart = require('../../assets/c2.png');
const setting = require('../../assets/settings.png');
const avt = require('../../assets/avt.png');
const bill = require('../../assets/receip.png');
const iconFavourite = require('../../assets/heart.png');
const chervon_right = require('../../assets/chervon_right.png');
const hd = require('../../assets/hd.png');
const help = require('../../assets/help.png');
const lock = require('../../assets/lock.png');
const gift = require('../../assets/gift.png');

const ProfilePage = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'red'}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1, backgroundColor: '#F9B15D'}}>
          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
              height: 40,
              marginTop: 10,
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
              <Image source={cart} />
              <Image source={setting} />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 40,
            }}>
            <View
              style={{
                width: 70,
                height: 70,
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
            <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
              Kiều Minh Tú
            </Text>
          </View>
        </View>
        <View
          style={{flex: 4, backgroundColor: '#FCF9F9', position: 'relative'}}>
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              alignItems: 'center',
              top: -30,
            }}>
            <View
              style={{
                width: '85%',
                paddingVertical: 10,
                borderRadius: 6,
                backgroundColor: 'white',
                elevation: 9,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                  }}>
                  <Image
                    source={bill}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
                <Text style={{color: '#DBA668', fontWeight: 'bold'}}>
                  My Order
                </Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                  }}>
                  <Image
                    source={iconFavourite}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
                <Text style={{color: '#DBA668', fontWeight: 'bold'}}>
                  Favourite
                </Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    width: 40,
                    padding: 3,
                    height: 40,
                  }}>
                  <Image
                    source={iconNotify}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
                <Text style={{color: '#DBA668', fontWeight: 'bold'}}>
                  Notification
                </Text>
              </View>
            </View>
          </View>

          {/* extensions */}
          <View style={{marginTop: 60, paddingHorizontal: 20, gap: 10}}>
            <Text style={{fontSize: 20, color: 'black'}}>Tiện ích</Text>
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 9,
                gap: 20,
                elevation: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={u}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
                <View
                  style={{flex: 1, alignItems: 'flex-start', paddingStart: 8}}>
                  <Text style={{color: 'black', fontSize: 15}}>
                    Thông Tin Cá Nhân
                  </Text>
                </View>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={chervon_right}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={hd}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
                <View
                  style={{flex: 1, alignItems: 'flex-start', paddingStart: 8}}>
                  <Text style={{color: 'black', fontSize: 15}}>
                    Thông Tin Hoá Đơn
                  </Text>
                </View>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={chervon_right}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={help}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
                <View
                  style={{flex: 1, alignItems: 'flex-start', paddingStart: 8}}>
                  <Text style={{color: 'black', fontSize: 15}}>
                    Trung Tâm Trợ Giúp
                  </Text>
                </View>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={chervon_right}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={lock}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
                <View
                  style={{flex: 1, alignItems: 'flex-start', paddingStart: 8}}>
                  <Text style={{color: 'black', fontSize: 15}}>
                    Lịch Sử Mua Hàng
                  </Text>
                </View>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={chervon_right}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          {/* gift */}

          <View style={{marginTop: 20, paddingHorizontal: 20, gap: 10}}>
            <Text style={{fontSize: 20, color: 'black'}}>
              Ưu đãi và tích điểm
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 9,
                gap: 20,
                elevation: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={gift}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
                <View
                  style={{flex: 1, alignItems: 'flex-start', paddingStart: 8}}>
                  <Text style={{color: 'black', fontSize: 15}}>
                    Thẻ Quà Tặng{' '}
                  </Text>
                </View>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={chervon_right}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{marginTop: 20, paddingHorizontal: 20, gap: 10}}>
            <Text style={{fontSize: 20, color: 'black'}}>Tiện ích</Text>
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 9,
                gap: 20,
                elevation: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={u}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
                <View
                  style={{flex: 1, alignItems: 'flex-start', paddingStart: 8}}>
                  <Text style={{color: 'black', fontSize: 15}}>
                    Thông Tin Cá Nhân
                  </Text>
                </View>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={chervon_right}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={hd}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
                <View
                  style={{flex: 1, alignItems: 'flex-start', paddingStart: 8}}>
                  <Text style={{color: 'black', fontSize: 15}}>
                    Thông Tin Hoá Đơn
                  </Text>
                </View>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={chervon_right}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={help}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
                <View
                  style={{flex: 1, alignItems: 'flex-start', paddingStart: 8}}>
                  <Text style={{color: 'black', fontSize: 15}}>
                    Trung Tâm Trợ Giúp
                  </Text>
                </View>
                <View
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={chervon_right}
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                    }}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => {
                navigation.dispatch(StackActions.replace('LoginPage'));
              }}>
              <Text style={styles.loginText}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: 'transparent',
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
    borderWidth: 1,
    borderColor: '#DDBBAA',
  },
  loginText: {color: 'black', fontSize: 16},
});
