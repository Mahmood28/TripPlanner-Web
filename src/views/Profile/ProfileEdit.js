import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const ProfileEdit = () => {
  const { user } = useSelector((state) => state.authReducer);
  if (!user) return <Redirect to="/home" />;
  return "this is a form";
};

export default ProfileEdit;
