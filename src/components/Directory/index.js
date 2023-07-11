import Category from "../Category";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((item, id) => {
        return <Category key={id} props={item} />;
      })}
    </div>
  );
};

export default Directory;
