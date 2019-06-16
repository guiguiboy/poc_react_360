import React from 'react';
import {AppRegistry} from 'react-360';
import Menu from './Menu';
import ProductList from './ProductList';
import ProductImage from './ProductImage'
import * as Store from './Store';

Store.initialize();

AppRegistry.registerComponent('Hello360', () => Hello360);
AppRegistry.registerComponent('Menu', () => Menu);
AppRegistry.registerComponent('ProductList', () => ProductList);
AppRegistry.registerComponent('ProductImage', () => ProductImage);
