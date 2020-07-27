import React, {useState, useEffect} from 'react';
import { doApiGet, apiUrl } from '../services/apiService';
import CountryItem from './CountryItem';


function Main(props) {
    let [state_arr,setStateArr]=useState([]);
    let [count,setCount]=useState(0)

    useEffect(()=>{
        // let url ="https://restcountries.eu/rest/v2/name/"+props.name;
        let url ="https://restcountries.eu/rest/v2/name/"+props.name+"?fullText=true"
        doApiGet(url)
        // doApiGet(apiUrl)
        .then(data=>{
            // console.log(data);
            setStateArr(data)
        })

    },[props.name])
    
    return (
        <div className="container">
            {
                
            }
            <CountryItem state_arr={state_arr} count={setCount}/>
           
        </div>
    )
}

export default Main


