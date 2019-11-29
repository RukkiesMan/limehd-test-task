import React from 'react';

import { Spinner as BootstrapSpinner } from 'react-bootstrap';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <BootstrapSpinner className="mx-auto" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </BootstrapSpinner>
    </div>
  );
};

export default Spinner;
