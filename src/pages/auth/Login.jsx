import React from "react";
import BaseButton from "../../components/BaseButton";
import BaseInput from "../../components/BaseInput";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("usernama tidak boleh kosong"),
      email: Yup.string().required("email tidak boleh kosong"),
      password: Yup.string().required("password tidak boleh kosong"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "password error")
        .required("confirm password tidak boleh kosong"),
    }),
  });
  return (
    <div className="font-index flex justify-center items-center h-screen flex-col">
      <span className="text-3xl text-green-600 font-bold">Login</span>
      <div className="w-2/6 px-4 py-5 rounded">
        <BaseInput placeholder="email..." />
        <BaseInput type="password" placeholder="password" class="mt-3" />
        <BaseButton class="mt-5">Login</BaseButton>
        <small>
          Belum punya akun?
          <span className="text-green-600">
            <Link to="/register">Register</Link>
          </span>
        </small>
      </div>
    </div>
  );
};

export default Login;
