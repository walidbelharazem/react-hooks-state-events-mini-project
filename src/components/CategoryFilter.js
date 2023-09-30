import React from "react";
  import {useState} from "react";

  function CategoryFilter({ categories,onCategoryChange }) {
    const [selectedCata,setSelectedCata] = useState("All");

    function handleCate (category){
      setSelectedCata(category);
      onCategoryChange(category);
    }
    return (
      <div className="categories">
        <h5>Category filters</h5>
        {categories.map((category) => (
        <button
          key={category}
          className={selectedCata === category ? "selected" : ""}
          onClick={() => handleCate(category)}
        >
          {category}
        </button>
      ))}
    </div>
    );
  }

  export default CategoryFilter;