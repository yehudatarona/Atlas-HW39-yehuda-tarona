import React, { useRef, useEffect } from 'react';
import { Link, NavLink,useHistory } from "react-router-dom"
import "../css_comps/atlas.css"



function Nav(props) {
    const searchInput = useRef();
    let history = useHistory();

    const searchBtn = ()=>{

        if(searchInput.current.value ===""){
            alert("Please a Country name Courtry in the search field")
        }
        else{
            // props.setName(searchInput.current.value);
            history.push("/country/" + searchInput.current.value);
            searchInput.current.value ="";
        } 
    }

    
    return (
        <nav className="container  text-white d-flex align-items-center justify-content-between backg">
            <div className="row">
                <Link to={"/country/USA"} className="text-decoration-none">USA</Link>
                <Link to={"/country/israel"} className="text-decoration-none">ISRAEL</Link>
                <Link to={"/country/UK"} className="text-decoration-none">UK</Link>
                <Link to={"/country/France"} className="text-decoration-none">FRANCE</Link>
                <Link to={"/country/Thailand"} className="text-decoration-none">THAILAND</Link>
                <Link to={"/country/Japan"} className="text-decoration-none">JAPAN</Link>
                <Link to={"/country/Brazil"} className="text-decoration-none">BRAZIL</Link>
                <Link to={"/country/Ethiopia"} className="text-decoration-none">ETHIOPA</Link>
                <Link to={"/country/China"} className="text-decoration-none">CHINA</Link>
            </div>
                <div className="float-right">
                    <div className="row ">
                        <input ref={searchInput} type="text" placeholder="Search..." className="col-lg-8 form-control" />
                        {/* <Link to={"/"+props.name} onClick={searchBtn}className="btn btn-success h-25">Search</Link> */}
                        <button  onClick={searchBtn}className="btn btn-info h-25">Search</button>
                    </div>
                </div>
        </nav>

    )
}

export default Nav
