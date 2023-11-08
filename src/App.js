import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";

function HomeComponent() {
  // 경로 이동시 useNavigate hook 사용 해야함
  const navigate = useNavigate();

  return (
    <Box>
      <Flex gap={"10px"}>
        {/*경로 이동시 자바 스크립트 코드를 그냥 쓰면 안됨*/}
        <Box>
          <Button onClick={() => (window.location.href = "/apath")}>
            A로 가기
          </Button>
        </Box>
        <Box>
          <Button onClick={() => (window.location.href = "/bpath")}>
            B로 가기
          </Button>
        </Box>
        <Box>
          <Button onClick={() => navigate("/apath")}>A</Button>
        </Box>
        <Box>
          <Button onClick={() => navigate("/bpath")}>B</Button>
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
