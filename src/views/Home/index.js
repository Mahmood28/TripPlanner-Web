import React from "react";
// Components
import AuthLayout from "layouts/Auth";
import Search from "views/Home/Search";
import InfoSection from "views/Home/InfoSection";

const Home = () => {
  return (
    <>
      <AuthLayout>
        <Search />
      </AuthLayout>
      <InfoSection />
    </>
  );
};

export default Home;
