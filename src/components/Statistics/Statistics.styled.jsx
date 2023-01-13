import styled from 'styled-components';
// import getRandomHexColor from 'js/randomColor';
export const  StatisticsWrapper = styled.section`
height: 150px;
border: 2px solid black; 
text-align: center;
padding-top:30px;
margin-bottom: 50px;
width: 300px;

`;
export const  StatisticsTitle = styled.h2`
margin-top: 0;
margin-bottom: 40px;
color: #808080;
font-weight: 800;
`;

export const  StatisticsList = styled.ul`
display: flex;
align-items: center;
justify-content: center;
list-style: none;
padding: 0;
margin: 0px;
height: 80px;
background-color: #C0C0C0;

`;

export const  StatisticsItem = styled.li`
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 100%;
border: 2px solid #808080; 
`;
