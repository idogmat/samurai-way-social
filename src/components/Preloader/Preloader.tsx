import React from 'react';
import Spinner from "../../assets/Spinner.svg";

const Preloader = () => {
    return (
        <div>
            <img src={Spinner} alt="Spinner"/>
        </div>
    );
};

export default Preloader;