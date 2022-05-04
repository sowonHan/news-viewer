import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title: "제목",
//   description: "내용",
//   url: "https://www.google.com",
//   urlToImage:
//     "https://symbolsandsynchronicity.com/wp-content/uploads/2022/01/pink-sky-sunset-spiritual-meaning-omens.jpg",
// };

function NewsList({ category }) {
  const [articles, setArticles] = useState(null);
  // 로딩 상태를 조절할 state
  const [loading, setLoading] = useState(false);

  // 처음 페이지가 렌더링될 때 useEffect가 실행
  useEffect(() => {
    const fetchData = async () => {
      // 데이터 로딩시킴
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;

        // await로 잡아줬기 때문에 axios.get이 끝날 때까지 밑에 있는 코드는 실행 안 됨
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=fac282711c5a453faa38b33f2ffad7f1`
        );

        setArticles(response.data.articles);
      } catch (e) {}
      // 다 끝나면 false로 만들어서 로딩 상태를 정지
      setLoading(false);
    };

    fetchData();
    // category 바뀔 때마다 재실행되어 분류되도록 배열에 넣어주기
  }, [category]);

  // 데이터가 늦게 로딩될 경우 사용자에게 보여줄 화면
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // articles 값이 아직 null로 설정이 안 됐을 때
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
