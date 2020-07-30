import React, { useState, useEffect } from 'react';
import { doApiGet, apiUrl } from '../services/apiService';
import CountryItem from './CountryItem';




function Main(props) {
    let [state_arr, setStateArr] = useState(null);
    let [allState_arr, setAllStateArr] = useState([])
    let [countryName,setCourtryName] = useState("Israel")

    useEffect(() => {
        
        let url ="https://restcountries.eu/rest/v2/name/"+countryName+"?fullText=true"
        if (props.match) {
            if (props.match.params.name) {
                url ="https://restcountries.eu/rest/v2/name/"+props.match.params.name+"?fullText=true"
               
            }
            if (props.match.params.countryCode) {
                url= "https://restcountries.eu/rest/v2/alpha/"+props.match.params.countryCode
               
            }
        }

            doApiGet(url)
                // doApiGet(apiUrl + props.name)
                .then(data => {
                    // console.log(data);
                    if(props.match.params.countryCode){

                        setStateArr(data);
                    }
                    else{
                        setStateArr(data[0]);
                    }
                })
                .catch(err => {
                    alert(err)
                    console.log(err)
                })

        }, [props.match])

    useEffect(() => {
        let url = "https://restcountries.eu/rest/v2/all"
        doApiGet(url)
            .then(data => {
                setAllStateArr(data)
            })
    }, [])



    return (
        <div className="container mt-3">
            {(state_arr)? <CountryItem  item={state_arr} allState_arr={allState_arr} />:"Result Not Found"}
        </div>
    )
}

export default Main


