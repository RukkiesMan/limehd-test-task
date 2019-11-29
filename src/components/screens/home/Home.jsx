import React from 'react';

import { Row, Col } from 'react-bootstrap';

import ScreenLayoutMain from '../layouts/main';
import StarshipList from '../../starship/list';

const HomeScreen = () => {
  return (
    <ScreenLayoutMain>
      <Row className="justify-content-center">
        <Col xs sm={6}>
          <StarshipList />
        </Col>
      </Row>
    </ScreenLayoutMain>
  );
};

export default HomeScreen;
