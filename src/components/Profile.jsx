export const Profile = ({avatar, username, tag, location, stats, followers, followersQuantity, viewsQuantity, likesQuatity}) => {
  return (
  <div className="profile">
    <div className="description">   
    <img className="avatar" src={avatar} alt="User Avatar" width="70" height = "70" />
    <p className="name">
      {username}
    </p>
    <p className="tag">
      @{tag}
    </p>
    <p className="location">
    {location}
    </p>
    </div>
    <ul className="stats"> {stats}
    <li>
      <span className="label">{followers}</span>
      <span className="quantity">{followersQuantity}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{viewsQuantity}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likesQuatity}</span>
    </li> 
    </ul>
    </div>
  );
};