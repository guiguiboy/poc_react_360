import React from 'react';
import {AppRegistry} from 'react-360';
import Menu from './Menu';
import ProductList from './ProductList';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';
import Add2Cart from './Add2Cart';
import Add2CartNotification from './Add2CartNotification';
import * as Store from './Store';

Store.initialize();

AppRegistry.registerComponent('Hello360', () => Hello360);
AppRegistry.registerComponent('Menu', () => Menu);
AppRegistry.registerComponent('ProductList', () => ProductList);
AppRegistry.registerComponent('ProductImage', () => ProductImage);
AppRegistry.registerComponent('ProductDescription', () => ProductDescription);
AppRegistry.registerComponent('Add2Cart', () => Add2Cart);
AppRegistry.registerComponent('Add2CartNotification', () => Add2CartNotification);
