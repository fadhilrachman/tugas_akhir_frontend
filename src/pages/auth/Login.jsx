import React, { useEffect } from "react";
import BaseButton from "../../components/BaseButton";
import BaseInput from "../../components/input/BaseInput";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { login } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const Login = ({ setShowNav }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.Auth);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("email tidak boleh kosong"),
      password: Yup.string().required("password tidak boleh kosong"),
    }),
    onSubmit: async (val) => {
      await dispatch(login(val));
      // if (auth.result?.token) {
      //   await localStorage.setItem("token", auth.result?.token);
      // }
      if (auth.status === "error") {
        return toast.error("pastikan password dan email benar");
      }
      navigate("/");
    },
  });

  return (
    <div className="font-index flex justify-center items-center h-screen flex-col">
      <span className="text-3xl text-green-600 font-bold">Login</span>
      <div className="w-2/6 px-4 py-5 rounded">
        <form action="" onSubmit={formik.handleSubmit}>
          <BaseInput
            type="email"
            name="email"
            placeholder="email..."
            onChange={formik.handleChange}
            value={formik.values.email}
            isInvalid={formik.errors.email && formik.touched.email}
            errMessage={formik.errors.email}
          />
          <BaseInput
            placeholder="password"
            name="password"
            type="password"
            class="mt-3"
            onChange={formik.handleChange}
            value={formik.values.password}
            isInvalid={formik.errors.password && formik.touched.password}
            errMessage={formik.errors.password}
          />
          <BaseButton class="mt-5" type="submit">
            Login
          </BaseButton>
        </form>
        <small>
          Belum punya akun?
          <span className="text-green-600">
            <Link to="/register">Register</Link>
          </span>
        </small>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Login;
