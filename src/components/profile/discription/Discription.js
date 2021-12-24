import PropTypes from 'prop-types';
import {
  DiscriptionWrap,
  Image,
  Name,
  Tag,
  Location,
} from './Discription.styled';

const Discription = ({ avatar, userName, tag, location }) => {
  return (
    <DiscriptionWrap>
      <Image src={avatar} alt={userName} />
      <Name>{userName}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </DiscriptionWrap>
  );
};

Discription.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Discription;
