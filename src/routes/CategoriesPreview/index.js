import { Fragment, useContext } from "react";
import "./index.scss";

import { CategoriesContext } from "../../contexts/categories";
import CategoryPreview from "../../components/CategoryPreview";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const product = categoriesMap[title];
        return <CategoryPreview title={title} products={product}/>
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
