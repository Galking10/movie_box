import React from "react";
import { Icons } from "../../asset/Icons";
import './styles.scss'


export const Form = ()=>{
    return(
        <div>
            <form>
                <input placeholder="What do you want to watch?"></input>
                <button className="search"><Icons type='magnifier'/></button>
            </form>
        </div>
    )
}