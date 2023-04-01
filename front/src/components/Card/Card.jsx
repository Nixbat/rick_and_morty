import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFavorite } from "../../redux/actions";
import axios from "axios";
import { useEffect, useState } from "react";


function Card({ id, name, species, gender, image, onClose, removeFavorite, myFavorites }) {
   const [isFav, setIsFav] = useState(false);

   const addFavorite = (character) => {
      axios
      .post("http://localhost:3001/rickandmorty/fav", character)
      .then((res) => console.log("Ok"));
   };

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({ id, name, species, gender, image });
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id) {
            setIsFav(true);
         }
      });
   
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [myFavorites]);

   return (      
      <div className={style.container}>
         {isFav ? (
            <button className={style.buttonRedHeart} onClick={handleFavorite}>❤️</button>
         ) : (
            <button className={style.buttonWhiteHeart} onClick={handleFavorite}>🤍</button>
         )}
         <div>
            <button className={style.buttonClose} onClick={() => onClose(id)}>X</button>
         </div>
         <Link to={`/detail/${id}`}>
            <h2 className={style.nameCard}>{name}</h2>         
         </Link>
            <img className={style.imageCard} src={image} alt={name} /> 
            <h2 className={style.specieCard}>Specie: {species}</h2>
            <h2 className={style.genderCard}>Gender: {gender}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return{
      removeFavorite: (id) => {
         dispatch(removeFavorite(id));
      },
   };
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);