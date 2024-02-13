import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Job from "./Job";

const Favourites = () => {
  const navigate = useNavigate();
  const favourites = useSelector((state) => state.favourites.content);
  console.log(favourites);
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-4">Job posting for:</h1>
          {favourites.map((favorito) => (
            <Job key={favorito._id} data={favorito} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default Favourites;
