import React from 'react';
import {Route} from 'react-router-dom';
import "../styles/footer.css";
const Footer = () => {
    return(
        <div>
            <h2>Footer</h2>
            <Route path="/" exact render={(props)=>(
             <p>Jestes na stronie glownej</p>
            )}/>

<Route path="/:page" exact render={(props)=>{
                console.log(props);
                return(
                    <>
                <p>Jestes na <span>{props.match.params.page}</span></p>
                <p>Jestes na <span>{props.match.params.url}</span></p>
                <p>Jestes na <span>{props.match.params.path}</span></p>
                    </>
                )
            }}/>

<Route path="/:page/:idProduct" exact render={(props)=>{
                console.log(props);
                return(
                    <>
                <p>Jestes na <span>{props.match.params.idProduct}</span></p>
                <p>Jestes na <span>{props.match.params.url}</span></p>
                <p>Jestes na <span>{props.match.params.path}</span></p>
                    </>
                )
            }}/>
        </div>
    );
}

export default Footer;