import React, { useRef } from 'react';
import { Link } from "react-router-dom"
import "../css_comps/atlas.css"

function Nav(props) {
    const searchInput = useRef();
    return (
        <nav className="container bg-secondary text-white d-flex justify-content-around">
            <div className="row">
                <Link onClick={() => { props.setName("usa") }} to={"/USA"}>USA</Link>
                <Link onClick={() => { props.setName("israel") }} to={"/israel"}>ISRAEL</Link>
                <Link onClick={() => { props.setName("uk") }} to={"/UK"}>UK</Link>
                <Link onClick={() => { props.setName("france") }} to={"/France"}>FRANCE</Link>
                <Link onClick={() => { props.setName("thailand") }} to={"/Thailand"}>THAILAND</Link>
            </div>
            <div className="col-lg-6">
                <div className="row text-right">
                    <input ref={searchInput} type="text" placeholder="Search..." className="col-lg-8 form-control" />

                    <Link to={"/"} onClick={() => { props.setName(searchInput.current.value) }} className="btn btn-success">Search</Link>

                </div>


            </div>
        </nav>

    )
}

export default Nav
