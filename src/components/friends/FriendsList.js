import PropTypes from 'prop-types';
import ItemTemplate from './itemTemplate/ItemTemplate';
import { FriendsWrap } from './FriendsList.styled';

export default function FriendsList({ friends }) {
  return (
    <FriendsWrap>
      {friends.map(friend => {
        return (
          <ItemTemplate
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          ></ItemTemplate>
        );
      })}
    </FriendsWrap>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
