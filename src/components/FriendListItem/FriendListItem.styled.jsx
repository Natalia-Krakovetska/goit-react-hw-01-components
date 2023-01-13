import styled from 'styled-components';
export const FriendItem = styled.li`
display: flex;
gap: 30px;
justify-content: flex-start;
align-items: center;
width: 100%;
padding: 20px;
border: 2px solid black; 
box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
`;
export const StatusPoint = styled.span`
display: block;
width: 15px;
height: 15px;
border: 2px solid black;
border-radius: 50%;
background-color: ${prop => { return !prop.isOffline ? 'green' : 'red'}};

`;
export const FriendName = styled.span`
font-size: 36px;
font-weight: 600;
`;