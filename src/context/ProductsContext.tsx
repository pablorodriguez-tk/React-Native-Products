import React, {createContext, useState, useEffect} from 'react';
import cafeApi from '../api/cafaApi';
import {Producto, ProductsResponse} from '../interfaces/appInterfaces';

type ProductsContextProps = {
  products: Producto[];
  loadProducts: () => Promise<void>;
  addProducts: (categoryId: string, productName: string) => Promise<void>;
  updateProducts: (
    categoryId: string,
    productName: string,
    productId: string,
  ) => Promise<void>;
  deleteProducts: (id: string) => Promise<void>;
  loadProductbyId: (id: string) => Promise<Producto>;
  uploadImage: (data: any, id: string) => Promise<void>; //TODO:Cambiar ANY
};

export const ProductsContext = createContext({});

export const ProductsProvider = ({children}: any) => {
  const [products, setProducts] = useState<Producto[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const resp = await cafeApi.get<ProductsResponse>('/productos?limite=50');
    setProducts([...resp.data.productos]);
  };

  const addProducts = async (categoryId: string, productName: string) => {};

  const updateProducts = async (
    categoryId: string,
    productName: string,
    productId: string,
  ) => {};

  const deleteProducts = async (id: string) => {};

  const loadProductbyId = async (id: string) => {
    return new Error('not implemented');
  };

  //TODO:Cambiar ANY
  const uploadImage = async (data: any, id: string) => {};

  return (
    <ProductsContext.Provider
      value={{
        products,
        loadProducts,
        addProducts,
        updateProducts,
        deleteProducts,
        loadProductbyId,
        uploadImage,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};
