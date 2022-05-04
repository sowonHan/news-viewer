import React from "react";
// import { useState, useCallback } from "react";
// import axios from "axios";
// import NewsList from "./components/NewsList";
// import Categories from "./components/Categories";
import { Route, Routes } from "react-router-dom";
import NewPage from "./pages/NewPage";

function App() {
  // const [data, setData] = useState(null);
  // // axios를 동기 처리하려고 async 사용
  // const onClick = async () => {
  //   // try+catch는 에러를 잡아주는 에러 구문
  //   try {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=kr&category=science&apiKey=fac282711c5a453faa38b33f2ffad7f1"
  //     );

  //     setData(response.data);
  //   } catch (e) {
  //     // e에는 에러가 담겨있다
  //     console.log(e);
  //   }
  // };

  // return (
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {/* JSON.stringify : json을 string 형식으로 바꿔주는 것(그냥 json 쓰면 못 가져오고 에러남)
  //     그냥 value 썼더니 콘솔에 value가 고정값이 아니라는 경고 뜸 defaultValue로 바꿔주니까 없어짐 */}
  //     {data && (
  //       <textarea rows={7} defaultValue={JSON.stringify(data, null, 2)} />
  //     )}
  //   </div>
  // );

  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => setCategory(category), []);

  // return (
  //   <>
  //     {/* props로 category={category} onSelect={onSelect} 넘겨주기 */}
  //     <Categories category={category} onSelect={onSelect} />
  //     <NewsList category={category} />
  //   </>
  // );

  return (
    <Routes>
      <Route path="/" element={<NewPage />} />
      <Route path="/:category" element={<NewPage />} />
    </Routes>
  );
}

export default App;
