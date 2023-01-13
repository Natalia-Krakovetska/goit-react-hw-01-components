import PropTypes from 'prop-types';
import { FriendItem, StatusPoint, FriendName } from './FriendListItem.styled';

export default function FriendListItem ({ id, name, avatar, isOnline }) {
        return (                      
             <FriendItem key={id}>
            <StatusPoint isOffline={isOnline === false}></StatusPoint>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
          </FriendItem>
         )
}

FriendListItem.itemTypes = {  
        key: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }
