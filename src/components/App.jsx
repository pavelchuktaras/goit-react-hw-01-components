import React from 'react';
import ProfileList from './profile/profile';
import user from './profile/user.json';

import Statistics from './statistiks/statistics'
import data from './statistiks/data.json';

import FriendList from './friendlist/friend-list'
import friends from './friendlist/friends.json'
import TransactionHistory from './transaktions/transactions.jsx'
import transactions from './transaktions/transactions.json'
export const App = () => {
  return (
    <React.Fragment>

      <ProfileList profile={[user]} />

      <Statistics 
    title="Upload stats" stats={data}
      />

      <FriendList friends={friends}/>

     <TransactionHistory  transactions={transactions}/>

    </React.Fragment>
  );
};
