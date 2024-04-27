import { Routes, Route } from "react-router-dom";

import { NotFoundPage, LayoutPage, SignInPage, MyPasswordsPage } from './pages';

const App = () => (
  <>
    <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<SignInPage />} />
          <Route path="my-passwords" element={<MyPasswordsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
  </>
);

export default App;
