import React from "react";
import style from "./About.module.css";

//Este es un componente de Clase:

class About extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={style.principalContent}>                
                <h1 className={style.intro}>This is my introduction and my thanks</h1>
                <article className={style.aboutArticle}>
                    <div className={style.containerDiv}>                        
                        <h2>Created By</h2>
                        <h3>Nixon Batallas</h3>
                        <h2>Student at Henry</h2>
                        <h3>Cohorte FT-36A</h3>
                        <h3>Instructor: Jorge Vega</h3>
                        <p>                            
                           I am currently in the process of training in the Full Stack Developer career.
                           I thank Henry for this study opportunity that they give us since I have managed
                           to find my true passion, which is programming.
                        </p>
                    </div>
                </article>
            </div>
        )
    }
}

export default About;