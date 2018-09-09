import styled, { keyframes } from 'styled-components';
import fonts from 'google-fonts';

fonts.add({
  'Lato': true,
});

export const WhiteStar = styled.div`
  background: url(https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/customer-reviews/RYP_mobile_spritex2-v8._V316463287_.png) no-repeat;
  width: 20.48px;
  height: 18.48px;
  background-position: -42.9px -99px;
  background-size: 73.04px 120.78px;
`;

export const YellowStar = styled.div`
  background: url(https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/customer-reviews/RYP_mobile_spritex2-v8._V316463287_.png) no-repeat;
  width: 20.48px;
  height: 18.48px;
  background-position: -1.98px -99px;
  background-size: 73.04px 120.78px;
`;

export const Div = styled.div`
  font-family: 'Lato';
  font-size: 13px;
  line-height: 1.2;
  font-color: #111;
`;

export const Name = styled.p`
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