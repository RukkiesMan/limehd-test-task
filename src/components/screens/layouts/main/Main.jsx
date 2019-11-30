import React from 'react';

import { Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ScreenLayoutMain = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand tabIndex={-1}>Starship Gallery</Navbar.Brand>
        </LinkContainer>
      </Navbar>
      <Container className="my-5">{children}</Container>
    </React.Fragment>
  );
};

export default ScreenLayoutMain;
