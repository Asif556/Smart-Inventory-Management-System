
import React, { useState } from "react";
import "./Display.css";

const Display = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [tableData, setTableData] = useState([]);

  const items = [
    { id: 1, name: "Item 1", quantity: 10, space: "10 sq ft" },
    { id: 2, name: "Item 2", quantity: 5, space: "5 sq ft" },
    { id: 3, name: "Item 3", quantity: 8, space: "8 sq ft" },
    { id: 4, name: "Item 4", quantity: 12, space: "12 sq ft" },
  ];

 
  const handleSelect = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleDisplay = () => {
    const selected = items.find((item) => item.name === selectedItem);
    if (selected && !tableData.some((data) => data.id === selected.id)) {
      setTableData((prevData) => [...prevData, selected]); 
    } else {
      alert("Please select a valid item or avoid duplicates.");
    }
  };


  const handleRemove = (id) => {
    setTableData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h2 className="animated-title">Select and Display Items</h2>

      <label htmlFor="itemSelect">Item: </label>
      <select id="itemSelect" onChange={handleSelect}>
        <option value="">--Select an Item--</option>
        {items.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      <button className="display-button" onClick={handleDisplay}>
        Display
      </button>

      {tableData.length > 0 && (
        <table className="animated-table">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Available Space</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={item.id} className="table-row">
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.space}</td>
                <td>
                  <button
                    className="remove-button"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Display;
