import React, { useState } from "react";

import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import Items from "./components/Items";
import { items } from "./data";

const App = () => {
    const [itemsData, setItemsData] = useState(items);

    const allCategories = ['الكل', ...new Set(items.map(item => item.categoty))];

    const filterByCategory = (cat) => {
        if (cat === 'الكل') {
            setItemsData(items);
        } else {
            const newArr = items.filter((item) => item.categoty === cat);
            console.log(newArr.length);
            setItemsData(newArr);
        }    
    };

    const filterBySearch = (word) => {
        if (word !== '') {
            const newArr = items.filter((item) => item.title === word);
            setItemsData(newArr);
        }
    };

    return (
        <div className="font color-body">
            <NavBar filterBySearch={filterBySearch} />
            <Container>
                <Header />
                <Category
                    allCategories={allCategories}
                    filterByCategory={filterByCategory}
                />
                <Items itemsData={itemsData} />
            </Container>
        </div>
    );
}

export default App;
