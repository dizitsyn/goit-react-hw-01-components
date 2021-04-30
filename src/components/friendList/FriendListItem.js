import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friend.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className="status">
        {isOnline ? (
          <span className={styles.on}></span>
        ) : (
          <span className={styles.off}></span>
        )}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
