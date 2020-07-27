import React from 'react';
import {Link} from "react-router-dom"
function CountryItem(props){
    let state = props.state_arr[0];
    
    console.log("state",state);
    return (
        <div className="container">
            <div className="row" >
                <img className="float-left mr-2" src={"https://restcountries.eu/data/isr.svg"} alt="Card image cap" height="200" />
                <div className="col">
                    <h5 >Israel</h5>
                    <div >populatio:9,000,000</div>
                    <div >Region:9,000,000</div>
                    <div >Lenguage:Heb</div>
                    <div >Coin:ILS, Israel new shekel</div>
                    <div >Capital:Jerusalem</div>
                </div>
            </div>

            <div className="row" >
                <img className="float-left mr-2" src={"https://lh3.googleusercontent.com/proxy/ZcaaiL24s0KRAnrzWJZsVQ1DMuk56UOQiwqbo03ieVmWtAfmPlzK0HRAwGGrWit5zzs4PbD0rZX3nodxFydlMt-otGoZfC7E96iIG5bDlLJaFDbJ"} alt="Card image cap" height="200" />
                <div className="col">
                    <h5 >States with borders</h5>
                    <div className="row">
                        <Link onClick={()=>{props.setName("egy")}} to="/">EGY, </Link>
                        <Link onClick={()=>{props.setName("jor")}} to="/">JOR, </Link>
                        <Link onClick={()=>{props.setName("lbn")}}to="/">LBN, </Link>
                        <Link onClick={()=>{props.setName("syr")}} to='/'>SYR</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CountryItem