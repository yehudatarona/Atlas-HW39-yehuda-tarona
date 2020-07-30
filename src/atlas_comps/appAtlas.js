import React, { useState, useEffect } from 'react';
import Header from './header';
import Nav from './nav';
import Main from './main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function AppAtlas(props) {
  
    return (
        <div >
            <Router>
                <Header />
                <Nav/>
                <Route exact path={"/"} component={Main} />
                <Route exact path={"/country/"} component={Main}/>
                <Route exact path={"/country/:name"} component={Main}/>
                <Route exact path={"/code/:countryCode"} component={Main} />
            </Router>
        </div>
    )
}

export default AppAtlas


