import React, { useRef } from 'react';
import { Link,NavLink } from "react-router-dom"
import "../css_comps/atlas.css"
{/* <link to = "/" activeStyle ={{background:"hotpink"}} className =" btn btn-primary text-decoration-none  mr-2">Home</NavLink> */}

function Nav(props) {
    const searchInput = useRef();
    return (
        <nav className="container bg-secondary text-white d-flex justify-content-around">
            <div className="row">
                <NavLink  onClick={() => { props.setName("usa") }} to={"/USA"} activeStyle ={{background:"hotpink"}} className ="text-decoration-none">USA</NavLink>
                <NavLink onClick={() => { props.setName("israel") }} to={"/israel"} activeStyle ={{background:"hotpink"}} className ="text-decoration-none">ISRAEL</NavLink>
                <NavLink onClick={() => { props.setName("uk") }} to={"/UK"} activeStyle ={{background:"hotpink"}} className ="text-decoration-none">UK</NavLink>
                <NavLink onClick={() => { props.setName("france") }} to={"/France"} activeStyle ={{background:"hotpink"}} className ="text-decoration-none">FRANCE</NavLink>
                <NavLink onClick={() => { props.setName("thailand") }} to={"/Thailand"} activeStyle ={{background:"hotpink"}} className ="text-decoration-none">THAILAND</NavLink>
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
