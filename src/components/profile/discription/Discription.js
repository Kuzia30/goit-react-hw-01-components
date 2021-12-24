import PropTypes from 'prop-types';

const Discription = ({ avatar, userName, tag, location }) => {
  return (
    <div class="description">
      <img src={avatar} alt={userName} class="avatar" />
      <p class="name">{userName}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>
  );
};
Discription.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
export default Discription;
