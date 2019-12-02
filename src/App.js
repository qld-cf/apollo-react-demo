import React from 'react';
import './App.css';
import client from './Apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ExchangeRates from './ExchangeRates';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex">
        <div>
        <h2>My first Apollo app 🚀</h2>
          <h1>获取美元对各货币汇率</h1>
          <ExchangeRates />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
