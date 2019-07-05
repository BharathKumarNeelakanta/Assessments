import styled from 'styled-components';
import logoImage from '../../images/logo.png';

const headerWrapper = styled.div`
  position: relative;
  background-color: #fa7369;
  padding: 30px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const logowrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 14px;
`;

const logo = styled.img.attrs({
  src: logoImage,
})`
  width: 300px;
  height: 56px;
`;

const headerContentWrapper = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
`;

export { headerWrapper, logowrapper, logo, headerContentWrapper };
