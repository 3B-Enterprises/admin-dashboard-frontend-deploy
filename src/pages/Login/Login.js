import React, { useState } from "react";
import {loginuser} from "../../utils/requests";
import {useNavigate} from 'react-router-dom';

function LoginForm() {
  const[user,setUser] = useState("");
  const[pass,setPass] = useState("");
  const navigation = useNavigate();

  const handleLogin = async(user, pass) => {
    //const req = await loginuser(user,pass);
    const req= {status:200}
    if (req.status === 200) {
      window.localStorage.setItem('TOKEN',req.data);
      navigation('/dashboard')
    }else{
      navigation("/");
    }
  };

  return (
    <div>
      <div className="bg-[#fff] flex w-full min-h-screen overflow-hidden">
        <div
          className="box-border border rounded-[12px] flex flex-col"
          style={{ minHeight: "100vh", flexGrow: 1 }}
        >
          <div
            className="box-border border rounded-[12px] pt-6 flex flex-col"
            style={{ flexGrow: 1, zIndex: 9 }}
          >
            <div className="box-border pt-10 pb-2 flex justify-center mb-4">
              <h1 className="tracking-tighter text-[#FF6600] text-center text-3xl">
                Asociación Esperanza y Fe En El Divino Niño
              </h1>
            </div>
            <div>
              <div className="m-auto w-full max-w-[448px] bg-[#ffffff] border-2 rounded-[12px] shadow-md">
                <div className="px-12 mb-6">
                  <div className="py-3 w-1/2 mx-auto">
                    <span className="text-2xl font-semibold">
                      Iniciar sesión
                    </span>
                  </div>
                  <div className="pb-6 my-4">
                    <label htmlFor="text">Usuario</label>
                    <input
                      type="text"
                      name="user"
                      autoComplete="off"
                      className="text-base leading-7 py-2 px-4 w-full min-h-[44px] border-2 rounded focus:outline-none shadow-md"
                      onChange={(e) => {
                        setUser(e.target.value)
                      }}
                    />
                  </div>
                  <div className="pb-6">
                    <div className="grid grid-cols-2 align-middle">
                      <label htmlFor="password">Contraseña</label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      className="text-base leading-7 py-2 px-4 w-full min-h-[44px] border-2 rounded focus:outline-none bg-[rgb(255, 255, 255)] shadow-md"
                      onChange={(e) => {
                        setPass(e.target.value);
                      }}
                    />
                  </div>
                  <div className="pb-6 flex align-center">
                    <label htmlFor="checkbox">
                      <input
                        type="checkbox"
                        name="checkbox"
                        className="w-5 h-4 mr-1"
                        disabled
                      />{" "}
                      Recuérdame
                    </label>
                  </div>
                  <div className="field pb-6">
                    <input
                      className="bg-[#FF6600] text-[#ffffff] font-semibold cursor-pointer text-base leading-7 py-2 px-4 w-full min-h-[44px] border-unset rounded outline outline-[rgb(84 105 212 / 0.5)] bg-[rgb(255, 255, 255)] shadow-md"
                      type="submit"
                      name="submit"
                      onClick={handleLogin(user,pass)}
                    />
                  </div>
                </div>
              </div>
              <div className="footer-link pt-6">
                <div className="listing py-6  flex align-middle justify-center">
                  <span>
                    <a
                      className="font-semibold my-0 mx-[10px] text-[#697386]"
                      href="/"
                    >
                      © 3B Enterprises
                    </a>
                  </span>
                  <span>
                    <a
                      className="font-semibold my-0 mx-[10px] text-[#697386]"
                      href="/"
                    >
                      Contact
                    </a>
                  </span>
                  <span>
                    <a
                      className="font-semibold my-0 mx-[10px] text-[#697386]"
                      href="/"
                    >
                      Privacy &amp; terms
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
