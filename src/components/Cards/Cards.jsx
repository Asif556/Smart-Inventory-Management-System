import React from 'react';
import './Cards.css';
import { useNavigate } from "react-router-dom";

const Cards = () => {
    const navigate = useNavigate();
    const change = (path) => () => {
        navigate(path);
    };

    return (
        <div className='cardsection'>
            <div className="card card1" onClick={change("/add")}>  Add Items</div>
            <div className="card card2" onClick={change("/check")}> Check Freshness</div>
            <div className="card card3" onClick={change("/display")}> Display Items</div>
            <div className="card card4" onClick={change("/predict")}> Predict Price</div>
            <div className="card card5" onClick={change("/retrive")}> Retrieve Items</div>
        </div>
    );
};

export default Cards;
