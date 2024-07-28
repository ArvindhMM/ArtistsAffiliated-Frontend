import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

const AddTransaction = () => {
  const [type, setType] = useState('Credit');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type, amount, description, date })
      });
      const result = await response.json();
      if (response.ok) {
        navigate('/');
      } else {
        console.error('Error adding transaction:', result.error);
      }
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  return (
    <div className='add-transaction-container'>
      <h2 className='add-transaction-title'>Add Transaction</h2>
      <form onSubmit={handleSubmit} className='add-transaction-form'>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <div className='add-transaction-buttons-container'>
          <button type="submit" className='save-button'>Save</button>
          <button className='cancel-button' onClick = {() => navigate('/') }>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
