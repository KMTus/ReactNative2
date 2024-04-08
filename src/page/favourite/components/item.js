import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Button,
  ScrollView,
} from 'react-native';
import CheckBox from '../../../common/check_box';
import { deleteYeuthApi } from '../../home/redux/actions/yeuthichAction';
import { useDispatch, useSelector } from 'react-redux';

const heartSelected = require('../../../assets/heart_select.png');
const heartUnSelected = require('../../../assets/heart_unselec.png');
const close = require('../../../assets/close.png');

const ItemFavourite = ({
  item,
  width = 140,
  height = 120,
  heightContainer = 160,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedConfigIndex, setSelectedConfigIndex] = useState(null);
  const [isSelected, setIsSelected] = useState(false);


  const dispatch = useDispatch();

  const deleteFavourite = () => {
    dispatch(deleteYeuthApi(item.id)).then(() => console.log('delete succes')).catch(err => console.log(err))
    
  }
  return (
    <View
      style={[styles.category, {height: heightContainer, width: '100%'}]}
      key={item.id}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          gap: 2,
          paddingRight: 10,
        }}
        onPress={() => setModalVisible(true)}>
        <Image
          resizeMode='center'
          source={{uri: item.image.toString()}}
          style={{
            borderRadius: 19,
            width: width,
            height: height,
          }}
        />
        <View style={{flexDirection: 'column', flex: 1, gap: 8}}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>
            {item.name}
          </Text>
          <Text style={{color: 'black'}}>
            Ram: {item.configurations[0].ram}
          </Text>
          <Text style={{color: 'black'}}>
            Rom: {item.configurations[0].rom}
          </Text>
          <Text style={{color: 'black'}}>
            Price: {item.configurations[0].price}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            height: '100%',
          }}>
            <TouchableOpacity onPress={() => deleteFavourite()}>
              <Image source={heartSelected} width={undefined} height={undefined} />
            </TouchableOpacity>
          <Text>Xem chi tiết</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <View style={{position: 'absolute', right: 18, top: 8}}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                <Image source={close} />
              </TouchableOpacity>
            </View>

            <Image
              source={{uri: item.image.toString()}}
              resizeMode="contain"
              style={{width: 400, height: 300, marginTop: 35}}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 28,
                  textAlign: 'left',
                  color: 'black',
                }}>
                {item.name}
              </Text>
              <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
                <Image source={isSelected ? heartSelected : heartUnSelected} />
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 20, color: 'black'}}>
              {item.description}
            </Text>
            <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
              Ram/Rom:
            </Text>
            {item.configurations.map((config, index) => (
              <View
                key={`config_${index}`}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                  <CheckBox
                    checked={selectedConfigIndex === index}
                    onPress={() => setSelectedConfigIndex(index)}
                  />
                  <Text style={{fontSize: 18, color: 'black'}}>
                    {config.ram}/{config.rom}
                  </Text>
                </View>
                <Text style={{fontSize: 18, color: 'black'}}>
                  {config.price}
                </Text>
              </View>
            ))}

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                backgroundColor: '#F9B15D',
                height: 50,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Buy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ItemFavourite;

const styles = StyleSheet.create({
  category: {
    elevation: 4,
    marginVertical: 8,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 0.5,
    paddingTop: 10,
    alignItems: 'flex-start',
    borderRadius: 12,
    marginRight: 20,
  },
  modalView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'relative',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    gap: 10,
    width: '100%',
    height: '90%',
    alignItems: 'stretch',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
