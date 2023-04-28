import usecharacter from "../hooks/useCharacter";
import style from "./Detail.module.css";

const Detail = () => {
    const character = usecharacter();   

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