import PropTypes from 'prop-types';

export default function ItemTemplate({ name, avatar, isOnline }) {
  return (
    <li>
      <span class="status">{isOnline ? 'A' : 'B'}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

ItemTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
