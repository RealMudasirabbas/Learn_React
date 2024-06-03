import React from "react";
import "./App.css"
import ShowNumbers from "./components/ShowNumbers";
import DisplayUserName from "./components/DisplayUserName";
import FilteredEvenNumbers from "./components/FilteredEvenNumbers";
import FilteredProducts from "./components/FilteredProducts";
import FilteredTasks from "./components/FilteredTasks"


function App() {
    return (
        <div>
            <ShowNumbers />
            <br />
            <FilteredEvenNumbers />
            <br />
            <DisplayUserName />
            <br />
            <FilteredProducts />
            <br />
            <FilteredTasks />
        </div>
    );
}

export default App;
