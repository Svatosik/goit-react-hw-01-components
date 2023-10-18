import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends &&
        friends.map(({avatar, name, isOnline, id}) => (
          <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
        ))}
    </ul>
  );
};
