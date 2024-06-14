import React from 'react'
import ResponsiveAppBar from './Navbar'
import SearchBar  from './SearchBar'
import Categories from './ProductCategories'

const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <SearchBar />
      <Categories />
    </>
  )
}

export default Home
