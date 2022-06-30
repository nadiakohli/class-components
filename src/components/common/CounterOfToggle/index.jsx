import React, { Component } from 'react';
import styled from 'styled-components';

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 25px 0;
`;

const Button = styled.button`
  padding: 6px 15px;
  background-color: pink;
  color: rgb(243, 103, 127);
  font-weight: bold;
  border: 2px solid rgb(254, 171, 185);
`;

const SomeText = styled.div`
  position: relative;
  top: 30px;
  left: 0;
  display: flex;
  flex-direction: column;
  color: pink;
  font-size: 21px;
  font-weight: bold;
`;

class CounterOfToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      hideCount: 0,
      showCount: 0,
    };
    this.buttonClicked = this.buttonClicked.bind(this);
  };
  
  buttonClicked() {
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
      hideCount: !prevState.isShow ? prevState.hideCount + 1 : prevState.hideCount,
      showCount: prevState.isShow ? prevState.showCount + 1 : prevState.showCount,
    }));
  };

  componentDidUpdate() {
    console.log(
      this.state.isShow 
      ? `showCount - ${this.state.showCount}` 
      : `hideCount - ${this.state.hideCount}` 
    );
  };

  render() {
    return (
      <Wrapper>
        <Button onClick={this.buttonClicked}>{this.state.isShow ? 'Hide' : 'Show'}</Button>
        {this.state.isShow && (<SomeText>Hi, robot!</SomeText>)}
      </Wrapper>
    );
  };
};

export default CounterOfToggle;
