import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

export default function Question(props) {
  return <styles.Question>{props.children}</styles.Question>;
}

Question.propTypes = {
  children: PropTypes.element.isRequired,
};
