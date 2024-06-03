import React from 'react'

function FilteredProducts() {
  const products = [
      { id: 1, name: "Laptop", price: 1200, inStock: true },
      { id: 2, name: "Smartphone", price: 800, inStock: false },
      { id: 3, name: "Tablet", price: 500, inStock: true },
      { id: 4, name: "Headphones", price: 100, inStock: false },
      { id: 5, name: "Keyboard", price: 50, inStock: true },
  ];

const filteredProducts = products.filter(product => product.inStock)

const mappedProducts = filteredProducts.map(product => (
  <>
  <li key={`${product.name}-${product.id}`}>Product name: {product.name}</li>
  <li key={`${product.name}-${product.id}`}>Product price: {product.price}</li>
  <br />
  
  </>
))


  return (
    <div>

      <h2>Products in Stock</h2>

      <ul>
        {mappedProducts}
      </ul>

    </div>
  )
}

export default FilteredProducts