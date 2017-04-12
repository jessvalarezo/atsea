import React from 'react'
import GradientBackground from '../components/GradientBackground'
import Header from '../components/Header'
import ProductsContainer from './ProductsContainer'
import CustomerContainer from './CustomerContainer'
import LoginContainer from './LoginContainer'
import CartContainer from './CartContainer'
import LoginForm from '../components/LoginForm'
import TopNav from '../components/TopNav'

const App = () => (
  <div>
    <TopNav />
    <GradientBackground />
    <LoginContainer />
    <CustomerContainer />
    <Header />
    <CartContainer />
    <ProductsContainer />
  </div>
)

export default App
