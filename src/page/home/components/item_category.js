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

const heartSelected = require('../../../assets/heart_select.png');
const heartUnSelected = require('../../../assets/heart_unselec.png');
const close = require('../../../assets/close.png');

const ItemCategory = ({
  item,
  width = 120,
  height = 120,
  heightContainer = 160,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedConfigIndex, setSelectedConfigIndex] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View style={[styles.category, {height: heightContainer}]} key={item.id}>
      <TouchableOpacity
        style={{alignItems: 'center', flexDirection: 'column', gap: 2}}
        onPress={() => setModalVisible(true)}>
        <Image
          source={item.image}
          style={{
            borderRadius: 19,
            width: width,
            height: height,
          }}
        />
        <Text style={{fontWeight: 'bold', color: 'black'}}>{item.name}</Text>
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
              source={item.image}
              resizeMode="contain"
              style={{width: 400, height: 300,marginTop:35}}
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

export default ItemCategory;

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
