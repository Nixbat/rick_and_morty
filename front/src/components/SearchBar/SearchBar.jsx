import { useState } from "react";
import style from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={style.search}>
         <input className={style.searchInput} type='search' onChange={handleChange} placeholder='Search character...' />
         <button className={style.searchButton} onClick={() => onSearch(id)}>Add</button> 
      </div>
   );
}

export default SearchBar;