import { Profile } from './Profile'

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
    <div>
        <Profile
          avatar={profile.avatar}
          username={profile.username}
          tag={profile.tag}
          location={profile.location}
        />
          {/* <img src={user.avatar} alt={user.username} width="80" height="80" />
      <p>{user.username}</p>
      <p>{user.tag}</p>
      <p>{user.location}</p>
      <ul>
        {user.stats}
        <li>{user.stats.followers}</li>
        <li>{user.stats.views}</li>
        <li>{user.stats.likes}</li>
  </ul> */}
    </div>
  );
};
