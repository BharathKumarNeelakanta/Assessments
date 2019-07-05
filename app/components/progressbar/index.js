import React from 'react';
import * as styles from './styles';

export default function ProgressBar(props) {
  return (
    <styles.ProgressBar>
      <styles.filler percentage={props.percentage} />
    </styles.ProgressBar>
  );
}
