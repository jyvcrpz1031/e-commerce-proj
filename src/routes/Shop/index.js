import "./index.scss";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview";
import Category from "../Category";

import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase";
import { setCategories } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(setCategories(categoriesArray));
    }

    getCategoriesMap();
}, []);

  return (
    <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
    </Routes>
  )
};

export default Shop;
