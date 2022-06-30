import React from 'react';

// Components
import GoodWishes from './components/common/GoodWishes';
import PeopleList from './components/common/PeopleList';
import CounterOfToggle from './components/common/CounterOfToggle';

const App = () => {
  return (
    <div className="App">
      <GoodWishes />
      <PeopleList />
      <CounterOfToggle />
    </div>
  );
};

export default App;
