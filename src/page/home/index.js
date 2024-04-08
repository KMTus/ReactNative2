import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Slider from './components/slider';
import ItemCategory from './components/item_category';
import {phoneCategory} from './data';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/actions/todoAction';


const iconCart = require('../../assets/cart.png');
const iconNotify = require('../../assets/notification.png');
const iconSearch = require('../../assets/search.png');

const HomePage = () => {

  const listTodo = useSelector(state => state.listTodo.listTodo);

  const dispatch = useDispatch();// của redux
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);


  // console.log(listTodo);

  return (
    <FlatList
      style={styles.scrollView}
      data={[{key: '1'}]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 80}}
      renderItem={({item}) => (
        <View style={styles.container}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 22, color: '#F1A247', fontWeight: 'bold'}}>
              Home
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
              <Image source={iconCart} />
              <Image source={iconNotify} />
            </View>
          </View>

          {/* search */}
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
            <TextInput placeholder="Find the phone brand you want." />
          </View>
          <Slider />

          <View style={{marginVertical: 40, gap: 10}}>
            
            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{fontSize: 22, fontWeight: 'bold', color: '#DBA668'}}>
                Category
              </Text>
              <Text
                style={{fontSize: 13, fontWeight: 'bold', color: '#929292'}}>
                View All
              </Text>
            </View> */}


            {/* <FlatList
              data={phoneCategory}
              renderItem={({item}) => <ItemCategory item={item} />}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            /> */}
          </View>

          <View style={{gap: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{fontSize: 22, fontWeight: 'bold', color: '#DBA668'}}>
                Hot
              </Text>
              <Text
                style={{fontSize: 13, fontWeight: 'bold', color: '#929292'}}>
                View All
              </Text>
            </View>
            <FlatList
              data={listTodo}
              numColumns={2}
              renderItem={({item}) => (
                <ItemCategory
                  item={item}
                  width={160}
                  heightContainer={220}
                  height={160}
                />
              )}
              keyExtractor={item => item.id}
              horizontal={false}
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              showsHorizontalScrollIndicator={false}
            />
          </View>













          
          <View style={{marginVertical: 40, gap: 10}}>
            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{fontSize: 22, fontWeight: 'bold', color: '#DBA668'}}>
                Top Sale
              </Text>
              <Text
                style={{fontSize: 13, fontWeight: 'bold', color: '#929292'}}>
                View All
              </Text>
            </View> */}
            {/* <FlatList
              data={phoneCategory}
              renderItem={({item}) => <ItemCategory item={item} />}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            /> */}
          </View>
          <View style={{gap: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{fontSize: 22, fontWeight: 'bold', color: '#DBA668'}}>
                History
              </Text>
              <Text
                style={{fontSize: 13, fontWeight: 'bold', color: '#929292'}}>
                View All
              </Text>
            </View>
            <FlatList
              data={listTodo}
              // numColumns={2}
              renderItem={({item}) => (
                <ItemCategory
                  item={item}
                  width={160}
                  heightContainer={220}
                  height={160}
                />
              )}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal: 10}}
            />
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  container: {
    flex: 1,
  },
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

export default HomePage;
