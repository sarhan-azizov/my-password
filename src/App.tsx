import { Routes, Route } from "react-router-dom";

import { NotFoundPage, LayoutPage, SignInPage } from '@/pages';

const App = () => (
  <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<SignInPage />} />  
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
);

export default App;
