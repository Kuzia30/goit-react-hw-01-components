import PropTypes from 'prop-types';
import { FriendsItem, Status, Avatar, Name } from './ItemTemplate.styled';
export default function ItemTemplate({ name, avatar, isOnline }) {
  return (
    <FriendsItem>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendsItem>
  );
}

ItemTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
