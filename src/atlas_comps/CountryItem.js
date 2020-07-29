import React, { useState } from 'react';
import { Link } from "react-router-dom"
function CountryItem(props) {
    // let [temp_ar,setTempAr]=useState([])
    // let state = props.state_arr[0];
    let item = props.item;
    let borders= item.borders;

    let temp_ar = props.allArr.filter(item=>
    {
        return(borders.indexOf(item.alpha3Code)>-1)
    })
    console.log("borders",temp_ar);



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

            <div className="row mt-4" >
                {/* <img className="float-left mr-2" src={`https://www.google.com/maps/place/${item.latlng[0]},${item.latlng[0]}/@${item.latlng[0]},${item.latlng[0]},7z/data=!3m1!1e3`} alt="Card image cap" height="200" /> */}
                {/* https://www.google.com/maps/place/31.5,34.75/@31.5,34.75,7z/data=!3m1!1e3 */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4250081.265934838!2d34.75!3d31.5!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMwJzAwLjAiTiAzNMKwNDUnMDAuMCJF!5e1!3m2!1sen!2sil!4v1595923216701!5m2!1sen!2sil" width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

                <div className="col mt-4">
                    <h3>States with borders</h3>
                    <div className="row ">
                         {temp_ar.map((item,i)=>{
                        return(
                        <div  key ={i}>
                            <Link className="mx-1" onClick={() => { props.setName(item.name) }} to={"/"+item.name}>{item.name}</Link>
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