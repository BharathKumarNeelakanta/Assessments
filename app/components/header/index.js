import React from 'react';
import * as styles from './styles';
export default function Header() {
  return (
    <styles.headerWrapper>
      <styles.logowrapper>
        <styles.logo />
      </styles.logowrapper>
      <styles.headerContentWrapper>
        Client Assessment Questionnaire
      </styles.headerContentWrapper>
    </styles.headerWrapper>
  );
}
