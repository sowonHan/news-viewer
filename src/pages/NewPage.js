import React from "react";
import { useParams } from "react-router-dom";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

function NewPage() {
  // 파라미터 불러오는 애. App.js 에서 :category 받아온다
  const params = useParams();
  const category = params.category || "all";

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}

export default NewPage;
