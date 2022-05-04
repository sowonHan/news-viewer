import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  /* https://developer.mozilla.org/ko/docs/Web/CSS/white-space */
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  /* props에 따른 css */
  /* ${(props) =>
    // &&연산자 이용해서 active가 참이면 css 적용
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;

      &:hover {
        color: #3bc9db;
      }
    `} */

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;

    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

function Categories({ onSelect, category }) {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          // active는 아무 이름이나 넣어줘도 됨
          // active={category === c.name}
          // onClick={() => onSelect(c.name)}

          // https://docs.microsoft.com/ko-kr/dotnet/api/system.windows.window.isactive?view=windowsdesktop-6.0
          // https://v5.reactrouter.com/web/api/NavLink
          // 이 코드 없어도 active 클래스 적용되네...? active는 router에서 주는 거라고 함!!!
          // className={({ isActive }) => (isActive ? "active" : undefined)}

          // https://v5.reactrouter.com/web/api/Link/to-string
          to={c.name === "all" ? "/" : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
}

export default Categories;
