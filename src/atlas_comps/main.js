import React, { useState, useEffect } from 'react';
import { doApiGet, apiUrl } from '../services/apiService';
import CountryItem from './CountryItem';




function Main(props) {
    let [state_arr, setStateArr] = useState([]);
    let [allState_arr, setAllStateArr] = useState([])
    let [countryName,setCourtryName] = useState("Israel")

    useEffect(() => {
        // let url = "https://restcountries.eu/rest/v2/name/israel"
        let url ="https://restcountries.eu/rest/v2/name/israel?fullText=true"
        if (props.match) {
            if (props.match.params.name) {
                url ="https://restcountries.eu/rest/v2/name/"+props.match.params.name+"?fullText=true"
                // url = "https://restcountries.eu/rest/v2/name/" + props.match.params.name;
            }
            if (props.match.params.countryCode) {
                url ="https://restcountries.eu/rest/v2/name/"+countryName+"?fullText=true"
                // url = "https://restcountries.eu/rest/v2/name/" + props.match.params.countryCode;
            }
        }

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

        }, [props.match])

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
            {(state_arr.length > 0) ? state_arr.map((item, i) => {
                return (
                    <CountryItem key={item.callingCodes[0]} item={item} allState_arr={allState_arr} setCourtryName={setCourtryName} />
                )
            })
                : "result Not Found"}
        </div>
    )
}

export default Main


