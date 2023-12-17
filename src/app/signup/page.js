"use client";
import React, { useState } from "react";

import "../login.css";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

export default function page() {
  //   let container = document.getElementById("container");
  const [mode, setMode] = useState(false);

  const toggle = () => {
    setMode(!mode);
    // container.classList.toggle("sign-in");
    // container.classList.toggle("sign-up");
  };

  return (
    <>
      <NavBar />
      <div id="container" class={`container1 ${mode ? "sign-in" : "sign-up"}`}>
        <div class="row">
          <div class="col align-items-center flex-col sign-up">
            <div class="form-wrapper align-items-center">
              <div class="form sign-up">
                <div class="input-group">
                  <i class="bx bxs-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div class="input-group">
                  <i class="bx bx-mail-send"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div class="input-group">
                  <i class="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <div class="input-group">
                  <i class="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Confirm password" />
                </div>
                <button>Sign up</button>
                <p>
                  <span>Already have an account?</span>
                  <b onClick={toggle} class="pointer">
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div class="col align-items-center flex-col sign-in">
            <div class="form-wrapper align-items-center">
              <div class="form sign-in">
                <div class="input-group">
                  <i class="bx bxs-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div class="input-group">
                  <i class="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <button>Sign in</button>
                <p>
                  <b>Forgot password?</b>
                </p>
                <p>
                  <span>Don't have an account?</span>
                  <b onClick={toggle} class="pointer">
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
            <div class="form-wrapper"></div>
          </div>
        </div>
        <div class="row content-row">
          <div class="col align-items-center flex-col">
            <div class="text sign-in">
              <h2>Welcome</h2>
            </div>
            <div class="img sign-in"></div>
          </div>
          <div class="col align-items-center flex-col">
            <div class="img sign-up"></div>
            <div class="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
