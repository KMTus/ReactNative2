import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {phoneCategory} from '../home/data';
import ItemFavourite from '../favourite/components/item';
import {rowCategories} from './data';
import ItemDetail from './item';
const iconSearch = require('../../assets/search.png');

const BillPage = () => {
  const [selectedItem, setSelectedItem] = useState(rowCategories[0].id);

  const handleItemPress = itemId => {
    setSelectedItem(itemId);
  };
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
        data={rowCategories}
        renderItem={({item}) => (
          <Text
            style={{
              color: 'black',
              borderBottomWidth: item.id === selectedItem ? 2 : 0,
              borderColor: 'black',
              lineHeight: 26,
              marginBottom: 5,
            }}
            onPress={() => handleItemPress(item.id)}>
            {item.title}
          </Text>
        )}
        keyExtractor={item => item.id}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexDirection: 'row', gap: 20}}
      />
      <FlatList
        data={phoneCategory}
        renderItem={({item}) => <ItemDetail item={item} />}
        keyExtractor={item => item.id}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BillPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
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
