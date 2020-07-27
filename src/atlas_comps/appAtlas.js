import React ,{useState, useEffect} from 'react';
import Header from './header';
import Nav from './nav';
import Main from './main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function AppAtlas(props) {
    let [name, setName]= useState("israel");
    useEffect(()=>{
        setName(name);

    },[name])

    const stateName =(_name)=>{
        setName(_name);

    }
    return (
        <div >
            <Router>
                {/* <Switch>
                    <Route exact path={"/header"} component={Header} />
                    <Route exact path={"/"} component={Nav} />
                    <Route exact path={"/"} component={Main} />
                </Switch> */}
                <Header />
                <Nav setName= {setName}/>
                <Main name={name}/>

            </Router>
        </div>
    )
}

export default AppAtlas
