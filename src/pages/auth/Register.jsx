import React from "react";
import { Link } from "react-router-dom";
import BaseButton from "../../components/BaseButton";
import BaseInput from "../../components/BaseInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "./redux/authSlice";

const Register = () => {
  const dispatch = useDispatch();
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
    onSubmit: (val) => {
      dispatch(register(val));
    },
  });
  console.log(formik.values);
  return (
    <div className="font-index flex justify-center items-center h-screen flex-col">
      <span className="text-3xl text-green-600 font-bold">Register</span>
      <div className="w-2/6 px-4 py-5 rounded">
        <form onSubmit={formik.handleSubmit}>
          <BaseInput
            type="text"
            placeholder="username..."
            name="username"
            class="text-sm"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <BaseInput
            placeholder="email..."
            // type="email"
            class="text-sm mt-3"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <BaseInput
            type="password"
            placeholder="password"
            class="text-sm mt-3"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <BaseInput
            type="password"
            placeholder="password"
            class="text-sm mt-3"
            name="confirm_password"
            onChange={formik.handleChange}
            value={formik.values.confirm_password}
          />
          <BaseButton class="mt-5" type="submit">
            Login
          </BaseButton>
        </form>
        <small>
          Belum punya akun?
          <span className="text-green-600">
            <Link to="/login">Login</Link>
          </span>
        </small>
      </div>
    </div>
  );
};

export default Register;
