import { Routes, Route, useNavigate } from "react-router-dom";
import { Redirect } from "./pages/Redirect";
import { Home } from "./pages/Home";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    overflow-x: hidden;
    user-select: none;
    box-sizing: border-box;
    border: none;
    transition: all ease .25s;
  }
  &::-webkit-scrollbar {
    width: 5px;
    background: #111 !important;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background:rgba(72, 99, 255, 0.62);
    border-radius: 999px;
  }
`

export default function Routing() {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/*" element={<Home/>} />
        <Route path="/discord" element={<Redirect direction={"discord"}/>} />
      </Routes>
    </>
  );
}
