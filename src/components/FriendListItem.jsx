import PropTypes from 'prop-types';
export default function FriendListItem ({ id, name, avatar, isOnline }) {
        return (                      
             <li className="item" key={id}>
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
         )
}

FriendListItem.itemTypes = {  
        key: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }
