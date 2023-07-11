import "./index.scss";

const Category = ({ props }) => {
  return (
    <div className="category-container">
      <div
        className="bg-category"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{props.title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default Category;
