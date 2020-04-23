import React, { Component } from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const ErrorComponent = styled.div`
  font-size: 2rem;
  padding: 4rem;
  padding-top: 6rem;
  text-align: center;
`

const ButtonBack = styled.div`
  font-size: 1rem;
  text-align: center;
  color: grey;
`

class RigAssociate extends Component {
  render() {
    return (
        <div> 
            <ErrorComponent>Page does not exist</ErrorComponent>
            <ButtonBack><Link to="/" >Go back to Main Page</Link></ButtonBack>
        </div>
    );
  }
}

export default RigAssociate;