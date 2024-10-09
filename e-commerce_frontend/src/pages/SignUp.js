import React, { useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { imageTobase64 } from "../helpers/imageTobase64";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await imageTobase64(file);

    console.log("imagePic ", imagePic);
    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic,
      };
    });
  };

  console.log("data login", data);
  return (
    <section id="signup">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-md mx-auto rounded">
          <div className="w-20 h-20 mx-auto">
            <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
              <div>
                <img src={data.profilePic || loginIcons} alt="login icons" />
              </div>
              <form>
                <label>
                  <div className="text-xs bg-opacity-80 bg-slate-200 pb-3 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                    Carregar foto
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleUploadPic}
                  />
                </label>
              </form>
            </div>
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Nome : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  name="name"
                  required
                  value={data.name}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>

              <label>Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  name="email"
                  required
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Senha : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  name="password"
                  required
                  value={data.password}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>

              <label>Confirmar senha : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Digite sua senha novamente"
                  name="confirmPassword"
                  required
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((preve) => !preve)}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Cadastrar
            </button>
          </form>

          <p className="my-5">
            Possui uma conta?{" "}
            <Link
              to={"/login"}
              className="text-red-600 hover:text-red-700 hover:underline"
            >
              Acesse
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
