import React, { useState } from 'react';
import { Link } from "react-router-dom"
import AppMap from './appMap';
function CountryItem(props) {
    // let [temp_ar,setTempAr]=useState([])
    // let state = props.state_arr[0];
    let item = props.item;
    let borders = item.borders;

    let temp_ar = props.allArr.filter(item => {
        return (borders.indexOf(item.alpha3Code) > -1)
    })
    console.log("borders", temp_ar);



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
           
            <AppMap item={item} />
            <div className="row float-left" >
                <div className="col mt-4">
                    <h3>States with borders</h3>
                    <div className="row ">
                        {temp_ar.map((item, i) => {
                            return (
                                <div key={i}>
                                    <Link className="mx-1" onClick={() => { props.setName(item.name) }} to={"/" + item.name}>{item.name}</Link>
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