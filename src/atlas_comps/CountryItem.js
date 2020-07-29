import React, { useState } from 'react';
import { Link } from "react-router-dom"
import AppMap from './appMap';
function CountryItem(props) {

    let item = props.item;
    let borders = item.borders;

    let temp_ar = props.allState_arr.filter(item => {
        return (borders.indexOf(item.alpha3Code) > -1)
    })

    console.log("state", item);
    return (
        <div className="container">
            <div className="row" >
                <img className="float-left mr-2" src={item.flag} alt="Card image cap" height="200" />
                <div className="col">
                    <h3 >{item.name}</h3>
                    <div >populatio: {item.population}</div>
                    <div >Region: {item.region}</div>
                    <div >Lenguage: {item.languages[0].iso639_2}, {item.languages[0].name} </div>
                    <div >Coin: {item.currencies[0].code}, {item.currencies[0].name}</div>
                    <div >Capital: {item.capital}</div>
                </div>
            </div>

            <div className="row " >
                    <AppMap item={item} />
                <div className="col mt-4 ">
                    <h3 className>States with borders</h3>
                    <div className="row pl-2">
                        {temp_ar.map((item, i) => {
                            return (
                                <div key={i}>
                                    <Link className="mx-1"  onClick={() => { props.setName(item.name) }} to={"/code/" + item.alpha3Code}>{item.name}</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}




export default CountryItem