import Discription from './discription/Discription';
import Stats from './stats/Stats';

export default function Profile({ items }) {
  return (
    <div class="profile">
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
    </div>
  );
}
