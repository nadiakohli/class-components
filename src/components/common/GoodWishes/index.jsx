import React, { Component } from 'react';
import styled from 'styled-components';

// Styles
const H1 = styled.h1`
  display: flex;
  justify-content: center;
  color: pink;
  font-size: 41px;
`;

class GoodWishes extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: 'Hi, robot!'
    };
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: 'Robot, have a nice day!' });
    }, 5000);
  };

  render() {
    return (
      <H1>{this.state.data}</H1>
    );
  };
};

export default GoodWishes;
