/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Header from '../../components/header';
import Questionare from '../../components/questionare';
import Footer from '../../components/footer';
import * as styles from './styles';
const Schema = [
  {
    id: 1,
    name: 'Patient Details',
    description: 'Enter your personal & communication details',
    type: null,
    isCustomQuestion: false,
    sequence: 1,
    QuestionOptions: [],
    SubQuestions: [
      {
        id: 2,
        name: 'Date',
        description: null,
        type: 'date',
        sequence: 1,
        QuestionOptions: [],
      },
      {
        id: 3,
        name: 'Patient name',
        description: null,
        type: 'text',
        sequence: 2,
        QuestionOptions: [],
      },
      {
        id: 4,
        name: 'Date of birth',
        description: null,
        type: 'date',
        sequence: 3,
        QuestionOptions: [],
      },
      {
        id: 5,
        name: 'Phone Number',
        description: null,
        type: 'phone',
        sequence: 4,
        QuestionOptions: [],
      },
      {
        id: 6,
        name: 'E-mail',
        description: null,
        type: 'email',
        sequence: 5,
        QuestionOptions: [],
      },
    ],
  },
  {
    id: 7,
    name: 'What is the main reason for your visit today?',
    description: null,
    type: 'textarea',
    isCustomQuestion: false,
    sequence: 2,
    QuestionOptions: [],
    SubQuestions: [],
  },
  {
    id: 8,
    name: 'I would like to be advised on',
    description: null,
    type: 'multipleChoice',
    isCustomQuestion: false,
    sequence: 3,
    QuestionOptions: [
      {
        id: 1,
        description: 'How I can look better for my age',
        sequence: 1,
        type: 'string',
      },
      {
        id: 2,
        description:
          'How I can change something that has been bothering me for years',
        sequence: 2,
        type: 'string',
      },
      {
        id: 3,
        description: 'How I can look look more attractive',
        sequence: 3,
        type: 'string',
      },
      {
        id: 4,
        description: 'Other',
        sequence: 4,
        type: 'string',
      },
    ],
    SubQuestions: [],
  },
  {
    id: 9,
    name:
      'Have you had a consultation or treatment for a cosmetic procedure before?',
    description: null,
    type: 'singleChoice',
    isCustomQuestion: false,
    sequence: 4,
    QuestionOptions: [
      {
        id: 5,
        description: 'Yes',
        sequence: 1,
        type: 'string',
      },
      {
        id: 6,
        description: 'No',
        sequence: 2,
        type: 'string',
      },
    ],
    SubQuestions: [],
  },
  {
    id: 10,
    name: 'How often do you think about wanting a cosmetic procedure?',
    description: null,
    type: 'singleChoice',
    isCustomQuestion: false,
    sequence: 5,
    QuestionOptions: [
      {
        id: 7,
        description: 'Most days',
        sequence: 1,
        type: 'string',
      },
      {
        id: 8,
        description: 'Weekly',
        sequence: 2,
        type: 'string',
      },
      {
        id: 9,
        description: 'Monthly',
        sequence: 3,
        type: 'string',
      },
    ],
    SubQuestions: [],
  },
  {
    id: 11,
    name:
      'Which three statements best reflect how you would like to feel after the treatment',
    description: null,
    type: 'multipleChoice',
    isCustomQuestion: false,
    sequence: 6,
    QuestionOptions: [
      {
        id: 10,
        description: 'I want to look less tired',
        sequence: 1,
        type: 'string',
      },
      {
        id: 11,
        description: 'I want to look less tired',
        sequence: 2,
        type: 'string',
      },
      {
        id: 12,
        description: 'I want to look less sad',
        sequence: 3,
        type: 'string',
      },
      {
        id: 13,
        description: 'I want a less saggy appearance',
        sequence: 4,
        type: 'string',
      },
      {
        id: 14,
        description: 'I want to look more youthful',
        sequence: 5,
        type: 'string',
      },
      {
        id: 15,
        description: 'I want to look more attractive',
        sequence: 6,
        type: 'string',
      },
      {
        id: 16,
        description: 'I want to look my face slimmer',
        sequence: 7,
        type: 'string',
      },
      {
        id: 17,
        description: 'I want softer features',
        sequence: 8,
        type: 'string',
      },
    ],
    SubQuestions: [],
  },
  {
    id: 23,
    name: 'Please select the area(s) of your interest:',
    description: null,
    type: 'singleChoice',
    isCustomQuestion: true,
    sequence: 7,
    QuestionOptions: [
      {
        id: 64,
        description: 'Female',
        sequence: 1,
        type: 'string',
      },
      {
        id: 65,
        description: 'Male',
        sequence: 2,
        type: 'string',
      },
    ],
    SubQuestions: [
      {
        id: 24,
        name: 'Female',
        description: null,
        type: 'multipleChoice',
        sequence: 1,
        QuestionOptions: [
          {
            id: 66,
            description: 'Teeth',
            sequence: 1,
            type: 'image',
          },
          {
            id: 67,
            description: 'Stomach',
            sequence: 2,
            type: 'image',
          },
          {
            id: 68,
            description: 'Nose',
            sequence: 3,
            type: 'image',
          },
          {
            id: 69,
            description: 'Elbow',
            sequence: 4,
            type: 'image',
          },
          {
            id: 70,
            description: 'Ear',
            sequence: 5,
            type: 'image',
          },
          {
            id: 71,
            description: 'Lips',
            sequence: 6,
            type: 'image',
          },
          {
            id: 72,
            description: 'face',
            sequence: 7,
            type: 'image',
          },
          {
            id: 73,
            description: 'Eye Lash',
            sequence: 8,
            type: 'image',
          },
          {
            id: 74,
            description: 'Eyes',
            sequence: 9,
            type: 'image',
          },
          {
            id: 75,
            description: 'Neck',
            sequence: 10,
            type: 'image',
          },
          {
            id: 76,
            description: 'Legs',
            sequence: 11,
            type: 'image',
          },
        ],
      },
      {
        id: 25,
        name: 'Male',
        description: null,
        type: 'multipleChoice',
        sequence: 2,
        QuestionOptions: [
          {
            id: 77,
            description: 'Teeth',
            sequence: 1,
            type: 'image',
          },
          {
            id: 78,
            description: 'Stomach',
            sequence: 2,
            type: 'image',
          },
          {
            id: 79,
            description: 'Nose',
            sequence: 3,
            type: 'image',
          },
          {
            id: 80,
            description: 'Elbow',
            sequence: 4,
            type: 'image',
          },
          {
            id: 81,
            description: 'Ear',
            sequence: 5,
            type: 'image',
          },
          {
            id: 82,
            description: 'face',
            sequence: 6,
            type: 'image',
          },
          {
            id: 83,
            description: 'Eyes',
            sequence: 7,
            type: 'image',
          },
          {
            id: 84,
            description: 'Neck',
            sequence: 8,
            type: 'image',
          },
          {
            id: 85,
            description: 'Legs',
            sequence: 9,
            type: 'image',
          },
        ],
      },
    ],
  },
  {
    id: 12,
    name: 'How would you rate the quality of your skin?',
    description: null,
    type: 'singleChoice',
    isCustomQuestion: false,
    sequence: 8,
    QuestionOptions: [
      {
        id: 18,
        description: 'Poor',
        sequence: 1,
        type: 'string',
      },
      {
        id: 19,
        description: 'Fair',
        sequence: 2,
        type: 'string',
      },
      {
        id: 20,
        description: 'Good',
        sequence: 3,
        type: 'string',
      },
      {
        id: 21,
        description: 'Very Good',
        sequence: 4,
        type: 'string',
      },
      {
        id: 22,
        description: 'Excellent',
        sequence: 5,
        type: 'string',
      },
    ],
    SubQuestions: [],
  },
  {
    id: 13,
    name:
      'If you could enhance an aspect of your skin, what could you enchance?',
    description: null,
    type: 'multipleChoice',
    isCustomQuestion: false,
    sequence: 9,
    QuestionOptions: [
      {
        id: 23,
        description: 'Hydration',
        sequence: 1,
        type: 'string',
      },
      {
        id: 24,
        description: 'Elasticity',
        sequence: 2,
        type: 'string',
      },
      {
        id: 25,
        description: 'Smoothness',
        sequence: 3,
        type: 'string',
      },
      {
        id: 26,
        description: 'Color',
        sequence: 4,
        type: 'string',
      },
    ],
    SubQuestions: [],
  },
  {
    id: 14,
    name: 'These treatments/products interest me:',
    description: null,
    type: null,
    isCustomQuestion: false,
    sequence: 10,
    QuestionOptions: [],
    SubQuestions: [
      {
        id: 15,
        name: 'SKIN ENHANCEMENT',
        description: null,
        type: 'multipleChoice',
        sequence: 1,
        QuestionOptions: [
          {
            id: 27,
            description: 'Skin injectables',
            sequence: 1,
            type: 'string',
          },
          {
            id: 28,
            description: 'Skin Products',
            sequence: 2,
            type: 'string',
          },
          {
            id: 29,
            description: 'Laser Treatment',
            sequence: 3,
            type: 'string',
          },
          {
            id: 30,
            description: 'Peeling',
            sequence: 4,
            type: 'string',
          },
          {
            id: 31,
            description: 'Microdermabrasion',
            sequence: 5,
            type: 'string',
          },
          {
            id: 32,
            description: 'Facial',
            sequence: 6,
            type: 'string',
          },
          {
            id: 33,
            description: 'Skin tightening',
            sequence: 7,
            type: 'string',
          },
        ],
      },
      {
        id: 16,
        name: 'FACIAL IMPROVEMENT',
        description: null,
        type: 'multipleChoice',
        sequence: 2,
        QuestionOptions: [],
      },
      {
        id: 17,
        name: 'BODY CONTOURING',
        description: null,
        type: 'multipleChoice',
        sequence: 3,
        QuestionOptions: [],
      },
      {
        id: 18,
        name: 'OTHER',
        description: null,
        type: 'multipleChoice',
        sequence: 4,
        QuestionOptions: [],
      },
    ],
  },
  {
    id: 19,
    name: 'How did you hear about us?',
    description: null,
    type: 'singleChoice',
    isCustomQuestion: false,
    sequence: 11,
    QuestionOptions: [
      {
        id: 34,
        description: 'My Doctor',
        sequence: 1,
        type: 'string',
      },
      {
        id: 35,
        description: 'My insurance provider company',
        sequence: 2,
        type: 'string',
      },
      {
        id: 41,
        description: 'Advertisements/Periodicals',
        sequence: 3,
        type: 'string',
      },
      {
        id: 36,
        description: 'A friend of family member',
        sequence: 4,
        type: 'string',
      },
      {
        id: 37,
        description: 'Search engine',
        sequence: 5,
        type: 'string',
      },
      {
        id: 38,
        description: 'Social media platform',
        sequence: 6,
        type: 'string',
      },
      {
        id: 39,
        description: 'Seminar',
        sequence: 7,
        type: 'string',
      },
      {
        id: 40,
        description: 'Other',
        sequence: 8,
        type: 'string',
      },
    ],
    SubQuestions: [],
  },
  {
    id: 26,
    name: 'Date of birth',
    description: null,
    type: 'singleChoice',
    isCustomQuestion: false,
    sequence: 12,
    QuestionOptions: [
      {
        id: 86,
        description: '25-30 years',
        sequence: 1,
        type: 'string',
      },
      {
        id: 87,
        description: '>30 years',
        sequence: 2,
        type: 'string',
      },
    ],
    SubQuestions: [],
  },
];
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    const answers = {};
    Schema.forEach(obj => {
      answers[obj.id] = [];
      if (obj.type === null) {
        obj.SubQuestions.forEach(subobj => {
          answers[subobj.id] = [];
        });
      }
    });
    const mapper = this.numberOfQuestionsToBeShownPerPage();
    this.state = { answers, mapper, currentPage: 1, percentageCompletion: 0 };
  }

  handleAnswers = obj => {
    console.log('obj is::::', obj);
    const { answers } = this.state;
    const { questionId } = obj;
    let selectionType = '';
    Schema.forEach(obj => {
      if (obj.type === null) {
        obj.SubQuestions.forEach(subobj => {
          if (subobj.id === questionId) {
            selectionType = subobj.type;
          }
        });
      }
      if (obj.id === questionId) {
        selectionType = obj.type;
      }
    });
    console.log('selectionType', selectionType);
    if (selectionType === 'singleChoice') {
      const selectedValue = obj.optionId;
      answers[questionId] = [];
      answers[questionId].push(selectedValue);
    } else if (selectionType === 'multipleChoice') {
      const selectedValue = obj.optionId;
      if (answers[questionId].includes(selectedValue)) {
        // toggle the option
        const filtered = answers[questionId].filter(
          value => value != selectedValue,
        );
        answers[questionId] = filtered;
      } else {
        answers[questionId].push(selectedValue);
      }
    } else if (selectionType === 'textarea') {
      const selectedValue = obj.value;
      answers[questionId] = selectedValue;
    } else if (selectionType === null) {
      const selectedValue = obj.value;
      const { subQuestionId } = obj;
      answers[subQuestionId] = selectedValue;
      console.log('====', answers[subQuestionId]);
    }

    this.setState({ answers });
  };

  handleText = text => {};

  // Function to Map questions to Page Number
  numberOfQuestionsToBeShownPerPage = () => {
    const mapper = [];
    let pageNumber = 0;
    let skipIteration = false;
    Schema.forEach((obj, i) => {
      if (!skipIteration) {
        if (obj.QuestionOptions.length > 4) {
          pageNumber++;
          mapper.push(pageNumber);
        } else if (obj.type === null) {
          pageNumber++;
          mapper.push(pageNumber);
        } else if (obj.type === 'textarea') {
          pageNumber++;
          mapper.push(pageNumber);
          // skipping the next iteration if next question has options
          if (Schema[i + 1] && Schema[i + 1].QuestionOptions.length > 0) {
            skipIteration = true;
          }
        } else {
          // Verifying the next question values and previous questions page number
          if (
            Schema[i + 1] &&
            Schema[i + 1].QuestionOptions.length > 6 &&
            mapper[i - 1] != mapper[i - 2]
          ) {
            mapper.push(pageNumber);
          } else {
            pageNumber++;
            mapper.push(pageNumber);
          }
        }
      } else {
        mapper[i] = pageNumber;
        skipIteration = false;
      }
    });
    console.log(mapper);
    return mapper;
  };

  mapQuestionsToPageNumber = () => {
    const assessmentDetails = {};
    this.state.mapper.forEach((obj, i) => {
      if (!assessmentDetails[obj]) {
        assessmentDetails[obj] = [];
      }
      const question = (
        <Questionare
          data={Schema[i]}
          updateAnswers={this.handleAnswers}
          answers={this.state.answers}
        />
      );
      assessmentDetails[obj].push(question);
    });
    return assessmentDetails;
  };

  handlePrevPage = () => {
    if (this.state.currentPage != 1) {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  };

  handleNextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  calculatePercentageCompletion = () => {
    let numberOfQuestionAnswered = 0;
    let numberofQuestions = 0;
    Schema.forEach(obj => {
      if (obj.type === null) {
        obj.SubQuestions.forEach(subobj => {
          numberofQuestions++;
          this.state.answers[subobj.id] != ''
            ? numberOfQuestionAnswered++
            : numberOfQuestionAnswered;
        });
      } else if (Array.isArray(this.state.answers[obj.id])) {
        numberofQuestions++;
        this.state.answers[obj.id].length != 0
          ? numberOfQuestionAnswered++
          : numberOfQuestionAnswered;
      } else {
        numberofQuestions++;
        this.state.answers[obj.id] != ''
          ? numberOfQuestionAnswered++
          : numberOfQuestionAnswered;
      }
    });
    const percentageCompletion =
      (numberOfQuestionAnswered / numberofQuestions) * 100;
    return Math.round(percentageCompletion);
  };

  render() {
    const percentageCompletion = this.calculatePercentageCompletion();
    const assessmentDetails = this.mapQuestionsToPageNumber();
    return (
      <styles.assessmentWrapper>
        <styles.assessmentContiner>
          <Header />
          <styles.assessmentSectionWrapper>
            {assessmentDetails[this.state.currentPage]}
          </styles.assessmentSectionWrapper>
          <Footer
            percentageCompletion={percentageCompletion}
            currentPage={this.state.currentPage}
            handlePrevPage={this.handlePrevPage}
            handleNextPage={this.handleNextPage}
          />
        </styles.assessmentContiner>
      </styles.assessmentWrapper>
    );
  }
}
