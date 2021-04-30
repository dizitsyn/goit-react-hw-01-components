import React from 'react';
import Profile from './components/profile/Profile';

import user from './user.json';
import stats from './statistical-data.json';
import title from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import Statisctcs from './components/statistical/Statisctcs';
import FriendList from '../components/friendList/FriendList';
import TransactionHistory from './components/transaction/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statisctcs data={(stats, title)} />
      <FriendList friends={friends} />
      <TransactionHistory data={transactions} />
    </>
  );
};

export default App;
