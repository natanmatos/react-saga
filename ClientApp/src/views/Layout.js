import React, {Fragment} from 'react';
import { Container } from 'reactstrap';
import Navbar from '../components/Theme/Navbar/Navbar';

export default props => (
  <Fragment>
    <Navbar />
    <Container>
      {props.children}
    </Container>
  </Fragment>
);
