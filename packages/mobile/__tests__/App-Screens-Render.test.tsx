/**
 * @format
 */

import 'react-native';
import React from 'react';
import 'navigation/registerScreens';
import renderer from 'react-test-renderer';
import TestComponent from './TestComponent';

it('Login renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.Login',
      }}
    />,
  );
});

it('OTP renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.OTP',
      }}
    />,
  );
});

it('Register renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.Register',
      }}
    />,
  );
});

it('Home renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.Home',
      }}
    />,
  );
});

it('Favorite renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.Favorite',
      }}
    />,
  );
});

it('Sales renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.Sales',
      }}
    />,
  );
});

it('Cart renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.Cart',
      }}
    />,
  );
});

it('Account renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.Account',
      }}
    />,
  );
});

it('VendorDetails renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.VendorDetails',
      }}
    />,
  );
});

it('Wallet renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.Wallet',
      }}
    />,
  );
});

it('Coupons renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.Coupons',
      }}
    />,
  );
});

it('Address renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.Address',
      }}
    />,
  );
});

it('New Courier renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.NewCourier',
      }}
    />,
  );
});

it('New Address renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.NewAddress',
      }}
    />,
  );
});

it('Cards renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.Cards',
      }}
    />,
  );
});

it('New Card renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.NewCard',
      }}
    />,
  );
});

it('Qutations renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.Qutations',
      }}
    />,
  );
});

it('Qutation Details renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.QutationDetails',
      }}
    />,
  );
});

it('Chat renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.Chat',
      }}
    />,
  );
});

it('New Qutation renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.NewQutation',
      }}
    />,
  );
});

it('Settings renders correctly', () => {
  renderer.create(
    <TestComponent
      component={{
        name: 'Kartonah.Screens.Settings',
      }}
    />,
  );
});
