import React from 'react';
import Options from './options';
import * as styles from './styles';

export default class SubQuestions extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event, subQuestionId) => {
      let {value} = event.target;
      let id = this.props.questionId;
      this.props.updateAnswers({questionId:id,subQuestionId,value});
    });
  };

  buildSubQuestions = data => {
      let questions = data.map(obj =>{
            if(obj.type === 'text' || obj.type ==='email'){
               return (
                <styles.InputWrapper>
                    <styles.Label>{obj.name}</styles.Label>
                    <styles.Input id={obj.id} onChange={(e)=>this.handleChange(e,obj.id)} value={this.props.answers[obj.id]}></styles.Input>
                </styles.InputWrapper>
               ) 
            }if (obj.type === 'date'){
                return (
                    <styles.InputWrapper>
                        <styles.Label>{obj.name}</styles.Label>
                        <styles.Date onChange={(e)=>this.handleChange(e,obj.id)} value={this.props.answers[obj.id]}></styles.Date>
                    </styles.InputWrapper>
                )
            }else if (obj.type ==='phone'){
                return(
                    <styles.InputWrapper>
                        <styles.Label>{obj.name}</styles.Label>
                        <styles.phoneInput onChange={(e)=>this.handleChange(e,obj.id)} value={this.props.answers[obj.id]}></styles.phoneInput>
                    </styles.InputWrapper>
                )
            }else if(obj.type === 'multipleChoice'){
                return(
                    <React.Fragment>
               <Options data = {obj.QuestionOptions} questionId={obj.id} answers={this.props.answers} updateAnswers={this.props.updateAnswers}/>
            </React.Fragment>
                )
            }
        })
      return questions;
  };

  render() {
      let questions = this.buildSubQuestions(this.props.data);
      return(
        <styles.subQuestionWrapper>
          {questions}
        </styles.subQuestionWrapper>
      )
}
