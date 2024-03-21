import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  LogBox,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import { carouselData } from '../data';

const Carousel = () => {
  const flatlistRef = useRef();
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatlistRef.current.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });
  // Data for carousel
 

  const renderItem = ({item, index}) => {
    return (
      <View key={item.id}>
        <Image
          source={item.image}
          style={{
            height: 200,
            width: screenWidth,
          }}
        />
      </View>
    );
  };

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;

    const index = Math.round(scrollPosition / screenWidth);

    setActiveIndex(index);
  };

  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {
      if (activeIndex === index) {
        return (
          <View
            key={dot.id}
            style={{
              backgroundColor: '#FD6A00',
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 6,
            }}
          />
        );
      } else {
        return (
          <View
            key={dot.id}
            style={{
              backgroundColor: '#F8CDAE',
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 6,
            }}
          />
        );
      }
    });
  };

  return (
    <View>
      <FlatList
        data={carouselData}
        showsHorizontalScrollIndicator={false}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        {renderDotIndicators()}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
