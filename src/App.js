import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/Addtransaction';
import Header from './components/Header';
const App = () => {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<TransactionsList />} />
          <Route path="/add-transaction" element={<AddTransaction />} />
        </Routes>
      </div>
  );
};

export default App;
