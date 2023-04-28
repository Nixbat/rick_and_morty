import Card from '../Card/Card';
import style from "./Cards.module.css";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFavorites } from "../../redux/actions";

function Cards({ characters, onClose }) {   
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getFavorites());
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (      
      <div className={style.divContain}>
         {
            characters.map(({id, name, species, gender, image}) => {
               return (
                <Card                
               key={id}
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}               
               onClose={() => onClose(id)}                                      
               />
               );
            })
         }
      </div>
   )
}


export default Cards;


