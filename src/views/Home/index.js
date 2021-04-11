import React, { useState } from "react";
// Components
import AuthLayout from "layouts/Auth";
import Search from "views/Home/Search";
import InfoSection from "views/Home/InfoSection";
import NoResultAlert from "./NoResultAlert";
const Home = () => {
  const [alert, setAlert] = useState(null);
  return (
    <>
      <AuthLayout>
        <Search alert={alert} setAlert={setAlert} />
      </AuthLayout>
      <NoResultAlert alert={alert} setAlert={setAlert} />
      <InfoSection />
    </>
  );
};

export default Home;
