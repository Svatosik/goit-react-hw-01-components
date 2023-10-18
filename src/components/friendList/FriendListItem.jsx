import css from './FriendListItem.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span class={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

