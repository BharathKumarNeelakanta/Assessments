import React from 'react';
import * as styles from './styles';
export default class Options extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.answer);
    console.log(props.questionId);
    this.state = { answers: props.answers };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.answers !== prevState.answers) {
      return { answers: nextProps.answers };
    }
    return null;
  }

  handleOptionClick = optionId => {
    const obj = {};
    obj.questionId = this.props.questionId;
    obj.optionId = optionId;
    this.props.updateAnswers(obj);
  };

  render() {
    const answers = this.state.answers[this.props.questionId] || [];
    console.log('answer inside options is ::', answers);
    console.log(this.props.data);
    const options = this.props.data.map(obj => {
      const selected = answers.includes(obj.id);
      return (
        <styles.option
          key={obj.id}
          onClick={() => this.handleOptionClick(obj.id)}
          selected={selected}
        >
          {obj.description}
        </styles.option>
      );
    });
    return <styles.optionWrapper>{options}</styles.optionWrapper>;
  }
}
