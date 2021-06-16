import React from "react"
import productcss from "../css/Product.module.css"
import AsusProducts from "../screens/AsusProducts"
import AcerProducts from "../screens/AcerProducts"
import GrocProducts from "../screens/GrocProducts"

const Products = ({ storepoint }) => {
  return (
    <section className={productcss.products}>
      {storepoint === "asus" && <AsusProducts />}
      {storepoint === "acer" && <AcerProducts />}
      {storepoint === "groceries" && <GrocProducts />}
    </section>
  )
}

export default Products
