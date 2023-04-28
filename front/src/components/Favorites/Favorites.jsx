import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getFavorites } from "../../redux/actions";


const Favorites = () => {
    const favorites = useSelector((state) => state.myFavorites);    
    const dispatch = useDispatch();

    const handlerOrder = (event) => {
        dispatch (cleanDetail(event.target.value))
    };

    const handlerFilter = (event) => {
        dispatch(getFavorites(event.target.value))
    };

    return(        
        <div>
            <div>
                <select className={style.selectUno} onChange={handlerOrder} >
                    <option value="order" disabled="disabled">Order by:</option>
                    <option value="Ascendente">Ascend</option>
                    <option value="Descendente">Descend</option>
                </select>
                <select className={style.selectDos} onChange={handlerFilter} >
                    <option value="filter" disabled="disabled">Filter by:</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknow">Unknow</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </div>

            <div className={style.containerFavs}>
                {favorites.map(({ id, name, species, gender, image }) => {
                    return(
                        <Card 
                            key={id}
                            id={id}
                            name={name}
                            species={species}
                            gender={gender}
                            image={image}
                        />
                    );
                })}       
            </div>
        </div>
    );
};

export default Favorites;