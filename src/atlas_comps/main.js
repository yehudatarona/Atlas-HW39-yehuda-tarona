import React, {useState, useEffect} from 'react';
import { doApiGet, apiUrl } from '../services/apiService';
import CountryItem from './CountryItem';


function Main(props) {
    let [state_arr,setStateArr]=useState([]);
    let [code,setCode]=useState([])

    useEffect(()=>{
        
        let url ="https://restcountries.eu/rest/v2/name/"+props.name+"?fullText=true"
        doApiGet(url)
        // doApiGet(apiUrl)
        .then(data=>{
            // console.log(data);
            setStateArr(data)
        })

    },[props.name])

    useEffect(()=>{
        
        let url ="https://restcountries.eu/rest/v2/all"
        doApiGet(url)
        // doApiGet(apiUrl)
        .then(data=>{
            // console.log(data);
            setCode(data)
        })

    },[])


    
    return (
        <div className="container mt-3">
           {state_arr.map((item,i) => {
               
                return (
                    
                    <CountryItem key ={item.callingCodes[0]} item={item} allArr={code} setName= {props.setName} />
                )
            })}
            {/* <CountryItem state_arr={state_arr} count={setCount}/> */}
           
        </div>
    )
}

export default Main


