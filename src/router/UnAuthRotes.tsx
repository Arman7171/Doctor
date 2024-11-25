import { Route, Routes } from "react-router-dom";
import NotFoundPage from "@/pages/NotFoundPage";
import Home from "@/pages/Home";

const UnAuthRotes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default UnAuthRotes;
