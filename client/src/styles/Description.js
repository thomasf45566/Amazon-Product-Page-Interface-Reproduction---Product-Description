import styled, { keyframes } from 'styled-components';
import fonts from 'google-fonts';

fonts.add({
  'Lato': true,
});

export const Div = styled.div`
  font-family: 'Lato';
  font-size: 13px;
  line-height: 1.2;
  font-color: #111;
`;

export const Title = styled.p`
  font-size: 20px;
  text-transform: capitalize;
`;

export const Price = styled.a`
  margin-left: 5px;
  font-size: 18px;
  color: #cc0000;
`;

export const Para = styled.p`
  display: flex;
  text-transform: capitalize;
`;

export const List = styled.li`
  font-size: 13px;
`;

export const Op = styled.option`
  font-size: 13px;
`;
export const OneLine = styled.div`
  display: flex;
`;

export const Link = styled.a`
  // vertical-align: middle;
  margin-left: 5px;
  margin-right: 5px;
  text-decoration: none;
  color: #4169E1;
`;

export const Box = styled.div`
  display: none;
  position: fixed;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  height: 180px;
  width: 18%;
`;

export const BoxText = styled.p`
  vertical-align: middle;
  text-align: center;
`;

const barGrow = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const Bar = styled.div`
  margin: 0.3px;
  margin-bottom: 0.7px;
  margin-top: 0.5px;
  height: 15.8px;
  width: 100%;
  animation: ${barGrow} 1s;
  vertical-align: middle;
  background-color: #ffcc00;
`;

export const Row = styled.div`
  margin: 2px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 1;
  height: 17px;
  width: 60%;
  background-color: #f2f2f2;
  border: 0.3px solid grey;
`;

export const Strong = styled.strong`
  margin-right: 5px;
`;

export const UL = styled.ul`
  overflow: hidden;
  height: 105px;
`;