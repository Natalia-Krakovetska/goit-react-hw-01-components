import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }){
return <ul className="friend-list">
    {friends.map(friend => 
    <FriendListItem 
        key={friend.id}
        name={friend.name}
        avatar={friend.avatar}
        isOnline={friend.isOnline} 
    /> 
      )}
 </ul>
};
