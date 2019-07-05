import styled from 'styled-components';

const ProgressBar = styled.div`
  position: relative;
  height: 20px;
  width: 650px;
  border-radius: 50px;
  border: 1px solid white;
`;

const filler = styled.div`
  height: 100%;
  border-radius: 50px;
  background: #1da598;
  transition: width 0.2s ease-in;
  width: ${props => props.percentage};
`;

export { ProgressBar, filler };
