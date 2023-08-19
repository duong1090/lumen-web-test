import { BrowserRouter, Routes, Route} from "react-router-dom";
import { HomePage } from "pages";
import BottomTab from "./BottomTabs";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <BottomTab />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterProvider;