import styled from 'styled-components';
export const ProfileCard = styled.div`
heigth: 300px;
border: 1px solid black; 
text-align: center;
padding-top:20px;
width: 300px;

`;
export const ProfileImg = styled.img`
display: block;
width: 100%;
height: 240px;
margin: 0;
margin-bottom: 20px;
object-fit: contain;
`;

export const DescriptionWrapper = styled.div`
font-size: 20px;
color: gray;
margin-bottom: 20px;
`;
export const Name = styled.p`
font-size: 30px;
font-weight: 600;
color: black;
margin: 0;
`; 
export const StatsList = styled.ul`
display: flex;
align-items: center;
justify-content: center;
list-style: none;
padding: 0;
margin: 0px;
height: 100px;
background-color: #C0C0C0;

`;
export const StatsItem = styled.li`
display: flex;
gap: 15px;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 100%;
border: 1px solid #808080; 
`;