
import FriendListItem from "../FriendListItem/FriendListItem";
import {List} from "./FriendList.styled";

export default function FriendList({ friends }){
return <List>
    {friends.map(friend => 
    <FriendListItem 
        key={friend.id}
        name={friend.name}
        avatar={friend.avatar}
        isOnline={friend.isOnline} 
    /> 
      )}
 </List>
};

