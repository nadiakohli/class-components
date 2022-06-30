import React, { Component } from 'react';
import styled from 'styled-components';

// Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0; 
`;

const Loading = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  color: pink;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  color: #ff738b;
  font-size: 18px;
`;

class PeopleList extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      isLoading: false,
    };
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://swapi.dev/api/people')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ characters: data.results })
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.setState({ isLoading: false })
      });
  }

  render() {
    return this.state.isLoading
      ? <Loading>Loading...</Loading>
      : (
        <Wrapper>
          <List>
            {this.state.characters.map(({ name, height, mass }, index) => (
              <li key={index}>name: {name}, height: {height}, mass: {mass}</li>
            ))}
          </List>
        </Wrapper>
      );
  };
};

export default PeopleList;
