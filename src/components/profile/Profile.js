import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={user.avatar} alt="Аватар пользователя" className="avatar" />
        <p className={styles.name}>{user.name}</p>
        <p className={styles.tag}>{user.tag}</p>
        <p className={styles.location}>{user.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className="label">Followers</span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className="label">Views</span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className="label">Likes</span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

export default Profile;
