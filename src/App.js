import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Form,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

function HomeComponent() {
  return (
    <Box>
      <Flex gap={"10px"}>
        <Box>
          {/*react router 사용시 a태그 사용하지 않을 것*/}
          <a href="/apath">A 로 가기</a>
        </Box>
        <Box>
          <a href="/bpath">B 로 가기</a>
        </Box>
        {/*대신 Link Component 사용*/}
        <Box>
          <Link to={"apath"}>A 로 ㄱㄱ</Link>
        </Box>
        <Box>
          <Link to={"bpath"}>B 로 ㄱㄱ</Link>
        </Box>
      </Flex>
      <Outlet />
    </Box>
  );
}

function AComp() {
  return <Box>A Component</Box>;
}

function BComp() {
  return <Box>B Component</Box>;
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeComponent />}>
      <Route path="apath" element={<AComp />} />
      <Route path="bpath" element={<BComp />} />
    </Route>,
  ),
);

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;
