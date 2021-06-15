import React, {useContext} from 'react';
import {TouchableOpacity, StyleSheet, Text, FlatList, View} from 'react-native';
import {ProductsContext} from '../context/ProductsContext';

export const ProductsScreen = () => {
  const {products, loadProducts} = useContext(ProductsContext);

  // TODO: Pull to refresh

  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <FlatList
        data={products}
        keyExtractor={p => p.id}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.productName}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View style={styles.itemSeparator}></View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productName: {
    fontSize: 20,
  },
  itemSeparator: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    marginVertical: 5,
  },
});