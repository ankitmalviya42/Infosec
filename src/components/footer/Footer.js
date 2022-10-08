import React from "react";
import { Wrapper } from "../Home/Home";

const Footer = () => {
  return (
    <Wrapper>
      <footer class="py-4">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p class="mb-0">Copyright © 2015-2020. Designed By Salman</p>
            </div>
            <div class="col-md-6 text-md-end">
              <div>
                <a href="#">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
                <a href="#">
                  <i class="bx bxl-twitter"></i>
                </a>
                <a href="#">
                  <i class="bx bxl-dribbble"></i>
                </a>
                <a href="#">
                  <i class="bx bxl-instagram"></i>
                </a>
                <a href="#">
                  <i class="bx bxl-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
