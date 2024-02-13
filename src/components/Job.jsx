import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ADD_TO_FAVOURITES,
  DELETE_TO_FAVOURITES,
  addToFavouritesAction,
  removeToFavourites,
} from "../redux/actions";

const Job = ({ data }) => {
  // console.log(data);
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={2}>
        <i
          className="bi bi-star"
          style={clicked ? { color: "gold" } : { color: "black" }}
          onClick={() => {
            setClicked(!clicked);
            dispatch(addToFavouritesAction(data));
          }}
        ></i>
        <i
          className="bi bi-trash ms-5 text-danger"
          onClick={() => {
            dispatch(removeToFavourites(data));
          }}
        ></i>
      </Col>
    </Row>
  );
};

export default Job;
