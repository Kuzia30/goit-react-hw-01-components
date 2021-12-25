import PropTypes from 'prop-types';
import ItemTemplate from './itemTemplate/ItemTemplate';

export default function FriendsList({ friends }) {
  return (
    <ul class="friend-list">
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
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
