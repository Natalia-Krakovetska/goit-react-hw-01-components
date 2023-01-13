import PropTypes from 'prop-types';
import { ProfileCard,ProfileImg, DescriptionWrapper, Name, StatsList, StatsItem } from './Profile.styled';
export default function Profile ({ avatar, username, tag, location, stats }) {
   return (   
 <ProfileCard>
  <DescriptionWrapper>
    <ProfileImg
      src = {avatar}
      alt="User avatar"
      className="avatar"
    />
    <Name>{username}</Name>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </DescriptionWrapper>

  <StatsList>
    <StatsItem>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </StatsItem>
  </StatsList>
 </ProfileCard>);
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),

}