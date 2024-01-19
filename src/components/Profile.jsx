export const Profile = ({avatar, username, tag, location}) => {
  return (
  <div>
    <img src={avatar} alt="User Avatar" width="70" height = "70" />
    <p>
      {username}
    </p>
    <p>
      @{tag}
    </p>
    <p>
    {location}
    </p>
    </div>
  );
};