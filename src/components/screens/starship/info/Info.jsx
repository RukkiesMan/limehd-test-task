import React from 'react';
import { useHistory } from 'react-router-dom';

import { Row, Col, Button } from 'react-bootstrap';

import ScreenLayoutMain from '../../layouts/main';
import StarshipInfo from '../../../starship/info';

const ScreenStarshipInfo = ({ match }) => {
  const history = useHistory();

  return (
    <ScreenLayoutMain>
      <Row className="mb-3">
        <Col>
          <Button variant="secondary" onClick={() => history.push('/')}>
            Back
          </Button>
        </Col>
      </Row>
      <StarshipInfo starshipId={match.params.id} />
    </ScreenLayoutMain>
  );
};

export default ScreenStarshipInfo;
