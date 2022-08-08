import { useState, createContext } from "react";
import React from 'react'

export default function About(props) {

   const [name,setName] = useState("");
   const [adress,setAderess] = useState("");

   const handleSubmit= (event) => {
    event.preventDefault();
    props.parentCallback(name);
  
    }
  return (
    <div className="container my-5">
        <form onSubmit={handleSubmit}>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                <input type="text" className="form-control" value={adress} onChange={(e) => setAderess(e.target.value)} />
            </div>
            <div className="col-12 mt-3">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </form>
    </div>
  )
}
