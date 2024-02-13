import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import Favourites from "./Favourites";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobCreation, searched } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.content);
  const jobs = useSelector((state) => state.searched.searched);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobCreation(query));

    // try {
    //   const response = await fetch(baseEndpoint + query + "&limit=20");
    //   if (response.ok) {
    //     const { data } = await response.json();
    //     setJobs(data);
    //     dispatch(searched(data));
    //   } else {
    //     alert("Error fetching results");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        {/* <Col xs={2} className="text-end">
          <Favourites></Favourites>
        </Col> */}
        <Col xs={2}>
          <Button variant="white" onClick={() => navigate("/favourites")}>
            <i className="bi bi-star-fill text-warning"></i>
            {favourites.length}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
