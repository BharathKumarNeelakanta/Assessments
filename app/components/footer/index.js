import React from 'react';
import * as styles from './styles';
import ProgressBar from '../progressbar/index';

export default class Footer extends React.Component {
  render() {
    return (
      <styles.footerwrapper>
        <styles.progressWrapper>
          <styles.percentageWrapper>
            {this.props.percentageCompletion}% Completed
          </styles.percentageWrapper>
          <ProgressBar percentage={`${this.props.percentageCompletion}%`} />
        </styles.progressWrapper>
        <styles.nextandPreviouWrapper>
          <styles.prevWrapper>
            <a href="#" onClick={this.props.handlePrevPage}>
              <styles.prevBtn />
            </a>
          </styles.prevWrapper>
          <styles.nextWrapper>
            <a href="#" onClick={this.props.handleNextPage}>
              <styles.nextBtn />
            </a>
          </styles.nextWrapper>
        </styles.nextandPreviouWrapper>
      </styles.footerwrapper>
    );
  }
}
