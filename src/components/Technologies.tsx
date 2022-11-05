import React from "react";
import './Technologies.scss'
const Technologies=()=>{
    const skills = ['css','html','js','react'].map(e=>{
        return <li>{e}</li>
    })
    return(
        <div>
            <ul>
                {skills}
            </ul>
        </div>
    )
}
export default Technologies