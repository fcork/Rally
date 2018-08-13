import React from 'react';
import { Row, Col} from 'react-bootstrap';

const RecentMatches = (props) => {
  console.log(props.history)
  return (
    <div>
      <h4>Recent Matches</h4>
      <Row className="show-grid">
        {props.history.map(match =>
          <Col sm={6} md={3}>
            {match.participants.b} <br/>
            {match.time} <br/>
            {match.loc} <br/>
            {match.results}
          </Col>)}
      </Row>
    </div>
  );
};

export default RecentMatches;