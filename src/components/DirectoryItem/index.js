import { useNavigate } from "react-router-dom";
import "./index.scss";

const DirectoryItem = ({ props }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(props.route);

  return (
    <div className="directory-item-container">
      <div
        className="bg-category"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      />
      <div className="directory-item-body-container" onClick={onNavigateHandler}>
        <h2>{props.title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
