import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useEffect } from 'react';
import ItemFavourite from './components/item';
import {phoneCategory} from '../home/data';
import { fetchYeuthic } from '../home/redux/actions/yeuthichAction';
const iconSearch = require('../../assets/search.png');
import { useDispatch, useSelector } from 'react-redux';

const FavouritePage = () => {


  const listYeuthich = useSelector(state => state.listYeuthich.listYeuthich);

  const dispatch = useDispatch();// của redux
  useEffect(() => {
    dispatch(fetchYeuthic());
  }, [dispatch]);


  console.log(listYeuthich);





  return (
    <View style={styles.container}>
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
      <FlatList
        data={listYeuthich}
        renderItem={({item}) => <ItemFavourite item={item} />}
        keyExtractor={item => item.id}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FavouritePage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,backgroundColor:'white'
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
