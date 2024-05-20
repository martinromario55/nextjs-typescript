import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const MyThirdComponent = () => {
  const [data, setData] = useState<Product | null>(null)

  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch one product from dummyjson.com
        const response = await fetch('https://dummyjson.com/products/1')
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      {data ? (
        <div>
          <h1>{data.title}</h1>
          <p>ID: {data.id}</p>
          <p>Description: {data.description}</p>
          <p>Price: {data.price}</p>
          <p>Category: {data.category}</p>
          <p>Discount: {data.discountPercentage}</p>
          <p>Rating: {data.rating}</p>
          <p>Stock: {data.stock}</p>
          <p>Brand: {data.brand}</p>
          <p>Thumbnail: {data.thumbnail}</p>
          <Image
            src={data.thumbnail}
            alt={data.title}
            width={400}
            height={400}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default MyThirdComponent
