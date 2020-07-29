import React, { useState, useEffect } from 'react';
import { doApiGet, apiUrl } from '../services/apiService';
import CountryItem from './CountryItem';



function Main(props) {
    let [state_arr, setStateArr] = useState([]);
    let [allState_arr, setAllStateArr] = useState([])

    useEffect(() => {
        let url = "https://restcountries.eu/rest/v2/name/"+props.name
        // let url ="https://restcountries.eu/rest/v2/name/"+props.name+"?fullText=true"
        doApiGet(url)
        // doApiGet(apiUrl + props.name)
            .then(data => {
                // console.log(data);
                setStateArr(data)
            })
            .catch(err => {
                alert(err)
                console.log(err)
            })

    }, [props.name])

    useEffect(() => {
        // let url ="https://restcountries.eu/rest/v2/alpha/co";
        let url = "https://restcountries.eu/rest/v2/all"
        doApiGet(url)
            .then(data => {
                setAllStateArr(data)
            })


    }, [])



    return (
        <div className="container mt-3">
          
            {state_arr.map((item, i) => {
                return (
                    <CountryItem key={item.callingCodes[0]} item={item} allState_arr={allState_arr} setName={props.setName} />
                )
            })}
    
        </div>
    )
}

export default Main


