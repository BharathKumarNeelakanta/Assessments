import styled, { css } from 'styled-components';
import Button from 'reactstrap';

const textArea = styled.textarea.attrs(props => ({
  rows: 4,
  cols: 50,
}))`
  border-radius: 12px;
  border: solid 1px #fa7369;
  resize: none;
`;

const option = styled.div`
  display: inline-block;
  padding: 0.25em 1em;
  border: solid 1px #979797;
  display: block;
  border-radius: 15px;
  background-color: #ffffff;
  color: #4a4a4a;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 17px;
  margin-right: 17px;
  &:hover {
    cursor: pointer;
  }
  ${props =>
    props.selected &&
    css`
      border: 2px solid palevioletred;
      background-color: #fa7369;
      color: white;
    `}
`;

const optionWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-d-rection: wrap;
`;
const subQuestionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InputWrapper = styled.div`
  display: block;
  flex-direction: column;
  margin: 10px;
`;
const Label = styled.label`
  display: block;
  padding-left: 10px;
  opacity: 0.49;
  font-size: 15px;
  font-weight: 500;
  color: #4a4a4a;
`;
const Input = styled.input.attrs(props => ({
  type: 'text',
}))`
  border-radius: 16px;
  border: solid 1px #fa7369;
  min-height: 40px;
  min-width: 300px;
  padding: 10px;
  outline: none;
`;

const Date = styled(Input).attrs(props => ({
  type: 'date',
}))``;

const phoneInput = styled(Input)`
  padding-left: 40px;
`;

const phone = styled(Input).attrs(props => ({
  minwidth: 30,
}))`
  min-width: 30px;
`;
export {
  textArea,
  option,
  optionWrapper,
  subQuestionWrapper,
  InputWrapper,
  Label,
  Input,
  Date,
  phoneInput,
  phone,
};
