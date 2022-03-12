import React, {useEffect, useState} from "react";
import Categories from "./Categories";
import axios from "axios";
import Menu from './components/Menu'
import {CircularProgress} from '@mui/material'
import Basket from './components/basket'
function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredFoodList, setFilteredFoodList] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [order, setOrder] = useState([])

  //Millana

  //const [isLoading, setIsLoading] = useState(true)

  //Want to make API
  const getData = async () => {
    try {
      const api = await axios.get("https://mocki.io/v1/a017e031-466a-4a49-891e-85495999669c")

      setMenuItems(api.data)
      setFilteredFoodList(api.data)
    } catch (err) {
      console.log(err, "Something went wrong!")
    }

  }
  useEffect(() => {
    getData()
    setIsLoading(false)
  }, [])

  useEffect(() => {
    let filtered = menuItems.filter((item) => item.category === selectedCategory || selectedCategory === "all");
    setFilteredFoodList(filtered);
  }, [selectedCategory])

  const categoryList = ["all", ...new Set(menuItems.map((item) => item.category))];

  return isLoading ? <div>
    <h1>Is Loading...</h1>
    <CircularProgress />
  </div> :
    (
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories filteredFoodList={filteredFoodList} categoryList={categoryList} setSelectedCategory={setSelectedCategory} />
          <Menu data={menuItems} filteredData={filteredFoodList} setOrder={setOrder} />

          <Basket order={order} />
        </section>
      </main>
    );
}

export default App;

