import React, { useRef } from 'react';
import { Link } from "react-router-dom"
import "../css_comps/atlas.css"

function Nav(props) {
    const searchInput = useRef();
    return (
        <nav className="container bg-dark text-white d-flex justify-content-around">


            <div className="row">
                <Link onClick={()=>{props.setName("usa")}} to="/">USA</Link>
                <Link onClick={()=>{props.setName("israel")}} to="/">ISRAEL</Link>
                <Link onClick={()=>{props.setName("uk")}} to="/">UK</Link>
                <Link onClick={()=>{props.setName("france")}} to='/'>FRANCE</Link>
                <Link onClick={()=>{props.setName("thailand")}}to='/'>THAILAND</Link>
            </div>
            <div className="col-lg-6">
                <div className="row text-right">
                    <input ref={searchInput} type="text" placeholder="Search..." className="col-lg-8 form-control" />
                    
                    <button  onClick={()=>{props.setName(searchInput.current.value)}} className="btn btn-success"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                </svg></button>
                    
                </div>


            </div>



        </nav>
        //  <nav className="container d-flex justify-content-around">  
        //  <div className="row">
        //      <button className="btn btn-light">Isreal</button>
        //      <button className="btn btn-light">U.S.A</button>
        //      <button className="btn btn-light">U.K</button>
        //      <button className="btn btn-light">Russian</button>
        //      <button className="btn btn-light">Chaina</button>
        //  </div>
        //  <div className="col-lg-6">
        //      <div className="row">
        //          <input className="col-lg-8 form-control" type="text" placeholder="Search state..."/>
        //          <button className="btn btn-primary ml-3">Found</button>
        //      </div>
        //  </div>
        // </nav> 


    )
}

export default Nav
