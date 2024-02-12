import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Favourites = () => {
  const navigate = useNavigate();
  const favourites = useSelector((state) => state.favourites.content);
  return (
    <Button variant="white" onClick={() => navigate("/favourites")}>
      <i className="bi bi-star-fill text-warning"></i> {favourites.length}
    </Button>
  );
};
export default Favourites;
