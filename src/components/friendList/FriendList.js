import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friend.module.css';

import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={styles.item} key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.prototype = {
  id: PropTypes.number.isRequired,
};
export default FriendList;
