import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    result: null
  });

  useEffect(() => {
    setAppState({ loading: true });

    fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
      .then((res) => res.json())
      .then(
        (result) => {
        setAppState({ 
          loading: false, 
          result: result });
      });
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        <h1>Currency rates of the National Bank of the RB</h1>
      </div>
      <div className='curs-container'>
        <ListLoading isLoading={appState.loading} result={appState.result} />
      </div>
    </div>
  );
}
export default App;