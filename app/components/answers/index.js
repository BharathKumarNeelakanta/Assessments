import React from 'react';
import Options from './options';
import SubQuestions from './SubQuestions';
import * as styles from './styles';

export default class Answers extends React.Component {
  handleTextArea = (event, questionId) => {
      let {value} = event.target;
      this.props.updateAnswers({questionId,value})
  };
  render() {
      let answers ;
      if(this.props.data.type === "multipleChoice"){
        answers = <React.Fragment>
          <Options data = {this.props.data.QuestionOptions} questionId={this.props.questionId} answers={this.props.answers} updateAnswers={this.props.updateAnswers}/>
        </React.Fragment>
      } else if(this.props.data.type === "singleChoice"){
        answers = <React.Fragment>
          <Options data = {this.props.data.QuestionOptions} questionId={this.props.questionId} answers={this.props.answers} updateAnswers={this.props.updateAnswers}/>
        </React.Fragment>
      }else if(this.props.data.type === "textarea"){
        let value = this.props.answers[this.props.questionId];
        answers = <styles.textArea value={value} questionId={this.props.questionId} onChange = { (e) => this.handleTextArea(e,this.props.questionId)}/>
      }else if(this.props.data.type === null){
        answers = <SubQuestions data={this.props.data.SubQuestions} questionId={this.props.questionId} answers={this.props.answers} updateAnswers={this.props.updateAnswers}></SubQuestions>
      }
      return(
        answers
      )
}
