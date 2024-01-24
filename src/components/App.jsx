import { Profile } from './Profile';

const profile = {
  username: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

export const App = () => {
  return (
    <Profile
      key={profile.id}
      avatar={profile.avatar}
      username={profile.username}
      tag={profile.tag}
      location={profile.location}
      followers={profile.stats[0]}
      followersQuantity={profile.stats.followers}
      viewsQuantity={profile.stats.views}
      likesQuatity={profile.stats.likes}
    />
  );
};
