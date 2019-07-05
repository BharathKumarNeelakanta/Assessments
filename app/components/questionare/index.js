import React from 'react';
import PropTypes from 'prop-types';
import Question from '../question';
import Answers from '../answers';
import * as styles from './styles';

export default function Questionare(props) {
  return (
    <React.Fragment>
      <styles.questionareWrapper>
        <styles.questionNumberWrapper>
          <styles.questionNumber> {props.data.sequence} </styles.questionNumber>
        </styles.questionNumberWrapper>
        <styles.questionAndAnswerWrapper>
          <Question>{props.data.name}</Question>
          <Answers
            data={props.data}
            questionId={props.data.id}
            answers={props.answers}
            updateAnswers={props.updateAnswers}
          />
        </styles.questionAndAnswerWrapper>
      </styles.questionareWrapper>
    </React.Fragment>
  );
}

Questionare.propTypes = {
  data: PropTypes.object.isRequired,
};
