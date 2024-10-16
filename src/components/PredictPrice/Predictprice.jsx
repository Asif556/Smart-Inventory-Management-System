import React from 'react'
import { useState } from 'react';
import './Predictprice.css'
const Predictprice = () => {
    const [quantity, setQuantity] = useState();
    const [fruit, setFruit] = useState('apple');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Quantity: ${quantity}, Fruit: ${fruit}`);
    };
  
  return (
    <div className="container">
    
      <h1>Fruit Selector</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="number"
            placeholder="Enter quantity..."
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="mango">Mango</option>
            <option value="orange">Orange</option>
          </select>
        </div>
        <button type="submit">Predict</button>
      </form>
    </div>
  );
  
}

export default Predictprice