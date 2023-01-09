import Section from './Section';
import user from '../data/user.json';
import Profile from './Profile';
import Statistics from '../data/data.json';
import data from '../data/data.json';



export const App = () => {
  return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  />

      </Section>
      <Section>
      <Statistics title="Upload stats" stats={data} />
      </Section> 
    </div>
    );
};
