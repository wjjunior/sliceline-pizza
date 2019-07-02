import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle'
import { Navbar } from "./Navbar/Navbar"
import { Banner } from "./Banner/Banner"
import { Menu } from './Menu/Menu'
import { FoodDialog } from './FoodDialog/FoodDialog'
import { Order } from './Order/Order'
import { useOpenFood } from './Hooks/useOpenFood'
import { useOrders } from './Hooks/useOrders'
import { useTitle } from './Hooks/useTitle'
import { useAuthentication } from './Hooks/useAuthentication'

function App() {

  const openFood = useOpenFood()

  const orders = useOrders()

  const auth = useAuthentication()

  useTitle({...openFood, ...orders})

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar {...auth} />
      <Order {...orders} {...openFood} {...auth} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
