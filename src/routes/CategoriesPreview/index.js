import { Fragment } from "react";
import "./index.scss";

import CategoryPreview from "../../components/CategoryPreview";

import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const product = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={product}/>
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
