import React, { useRef, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom"
import "../css_comps/atlas.css"



function Nav(props) {
    const searchInput = useRef();

    const searchBtn = ()=>{
        if(searchInput.current.value ===""){
            alert("Please a Country name Courtry in the search field")
        }
        else{
            props.setName(searchInput.current.value);
            searchInput.current.value ="";
        } 
    }

    
    return (
        <nav className="container bg-secondary text-white overflow-hidden d-flex align-items-center justify-content-between">
            <div className="row">
                <NavLink onClick={() => { props.setName("USA") }} to={"/country/USA"} className="text-decoration-none">USA</NavLink>
                <NavLink onClick={() => { props.setName("Israel") }} to={"/country/israel"} className="text-decoration-none">ISRAEL</NavLink>
                <NavLink onClick={() => { props.setName("UK") }} to={"/UK"} className="text-decoration-none">UK</NavLink>
                <NavLink onClick={() => { props.setName("France") }} to={"/country/France"} className="text-decoration-none">FRANCE</NavLink>
                <NavLink onClick={() => { props.setName("Thailand") }} to={"/country/Thailand"} className="text-decoration-none">THAILAND</NavLink>
                <NavLink onClick={() => { props.setName("Japan") }} to={"/country/Japan"} className="text-decoration-none">JAPAN</NavLink>
                <NavLink onClick={() => { props.setName("Brazil") }} to={"/country/Brazil"} className="text-decoration-none">BRAZIL</NavLink>
                <NavLink onClick={() => { props.setName("Ethiopia") }} to={"/country/Ethiopia"} className="text-decoration-none">ETHIOPA</NavLink>
                <NavLink onClick={() => { props.setName("China") }} to={"/country/China"} className="text-decoration-none">CHINA</NavLink>
            </div>
                <div className="float-right">
                    <div className="row ">
                        <input ref={searchInput} type="text" placeholder="Search..." className="col-lg-8 form-control" />
                        <Link to={"/"+props.name} onClick={searchBtn}className="btn btn-success h-25">Search</Link>
                    </div>
                </div>
        </nav>

    )
}

export default Nav
