import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";


//El componente Nav lo creamos con un componente de Clase:

class Nav extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={style.navDiv}>
                <SearchBar onSearch={this.props.onSearch} />
                <button className={style.btnHome}><Link to="/home">🏠Home</Link></button>  
                <button className={style.btnFavorites}><Link to="/favorites">💗Favorites</Link></button>
                <button className={style.btnAbout}><Link to="/about">💻About</Link></button>                                                                   
                <button className={style.btnLogout}><Link to="/">🔚LOGOUT</Link></button>
            </div>
        );
    }
}

export default Nav;