import styled from 'styled-components';

const questionareWrapper = styled.div`
  display: flex;
  margin: 20px;
  flex: 1;
`;
const questionNumberWrapper = styled.div``;
const questionNumber = styled.p`
  background-color: #1d7c7e;
  border-radius: 50%;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: 600;
  line-height: 0.6;
  margin: 0;
  margin-right: 10px;
  padding: 13px 10px;
  min-width: 40px;
`;

const questionAndAnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  questionareWrapper,
  questionNumberWrapper,
  questionNumber,
  questionAndAnswerWrapper,
};
