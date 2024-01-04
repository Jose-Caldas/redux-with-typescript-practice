import { SetStateAction, useState } from 'react'
import Navigation from './components/navigation'
import Sidebar from './components/sidebar'
import Recommended from './components/recommended'
import Products from './components/products'
import products from './data/products'
import Card from './components/card'
import { IProduct } from './components/interface/Product'

function App() {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null || String)

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  )

  const handleChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setSelectedCategory(event.target.value)
  }

  const handleClick = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products: IProduct[], selected: string, query: string) {
    let filteredProducts = products

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          String(newPrice) === selected ||
          title === selected
      )
    }

    return filteredProducts.map((product) => <Card product={product} />)
  }

  const result = filteredData(products, selectedCategory, query)

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  )
}

export default App
