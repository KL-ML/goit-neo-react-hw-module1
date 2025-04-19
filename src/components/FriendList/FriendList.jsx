import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import css from "./FriendList.module.css"

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

FriendList.PropTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
