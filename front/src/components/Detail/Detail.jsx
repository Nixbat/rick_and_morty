import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";


const Detail = () => {
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        const URL_BASE = "http://localhost:3001/rickandmorty";                  
        
        axios(`${URL_BASE}/detail/${detailId}`)
        .then((response) => setCharacter(response.data));        

    // eslint-disable-next-line
    }, []);

    return(
        <div>
            {character.name ? (
                <div className={style.detailContainer}>                
                    <h2 className={style.detailName}>Name: {character.name}</h2>                    
                    <h3 className={style.detailH3}>Status: {character.status}</h3>
                    <h3 className={style.detailH3}>Specie: {character.species}</h3>
                    <h3 className={style.detailH3}>Gender: {character.gender}</h3>
                    <h3 className={style.detailH3}>Origin: {character.origin?.name}</h3>
                    <img className={style.imgDetail} src={character.image} alt="img" />                                            
                </div>
            ) : (
                <div className={style.spinner}></div>                               
            )}                       
        </div>
    );
};

export default Detail;