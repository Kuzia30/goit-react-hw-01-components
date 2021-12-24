import PropTypes from 'prop-types';
import Discription from './discription/Discription';
import Stats from './stats/Stats';
import { ProfileCard } from './Profile.styled';

export default function Profile({ items }) {
  return (
    <ProfileCard>
      <Discription
        avatar={items.avatar}
        userName={items.username}
        tag={items.tag}
        location={items.location}
      />
      <Stats
        likes={items.stats.likes}
        views={items.stats.views}
        followers={items.stats.followers}
      />
    </ProfileCard>
  );
}

Profile.propTypes = {
  items: PropTypes.object,
};
