import styled from 'styled-components';

const footerwrapper = styled.div`
  display: flex;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: #2d2d2d;
  color: #ffffff;
`;

const progressWrapper = styled.div`
  flex: 7;
  margin: 30px 15px;
`;

const nextandPreviouWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-around;
  color: #ffffff;
`;

const percentageWrapper = styled.p`
  margin-top: 0px;
  margin-bottom: 3px;
`;

const nextWrapper = styled.div`
  flex: 1;
  background-color: #65d7d1;
  display: flex;
  justify-content: center;
  padding-top: 35px;
`;

const prevWrapper = styled.div`
  flex: 1;
  background-color: #1d7c7e;
  display: flex;
  justify-content: center;
  padding-top: 35px;
`;

const nextBtn = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(-45deg);
`;

const prevBtn = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(135deg);
`;

export {
  footerwrapper,
  progressWrapper,
  percentageWrapper,
  nextandPreviouWrapper,
  nextWrapper,
  prevWrapper,
  nextBtn,
  prevBtn,
};
