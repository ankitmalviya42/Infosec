import React from "react";
import styled from "styled-components";
import cover_2 from "../../asset/img/cover_2.jpg";
import cover_3 from "../../asset/img/cover_3.jpg";
import Image_1 from "../../asset/img/image_1.jpg";
import Cover from "../../asset/image/cover.jpg";
import OurVideo from "../../asset/image/OurVideo.jpg";

const Home = () => {
  const Background_1 = {
    b1: {
      backgroundImage: "url(" + Cover + ")",
    },

    watchourvideo: {
      backgroundImage: "url(" + OurVideo + ")",
    },

    b3: {
      backgroundImage: "url(" + cover_3 + ")",
    },
  };

  return (
    <Wrapper>
      {/* <!--hero--> */}
      <section
        id="home"
        className="bg-cover hero-section"
        style={Background_1.b1}
      >
        <div className="overlay"></div>
        <div className="container text-white text-center">
          <div className="row">
            <div className="col-12">
              <h1 className="display-4" data-aos="zoom-in">
                Welcome to Infosec
              </h1>
              <p className="my-4" data-aos="fade-up">
                Infosec is an ISO 27001:2013 Certified information security
                consulting company providing out-most service quality,
                innovation and research in the field of Information Security and
                Technology. We provide a unique blend of services to our
                customers catering to the current information security
                landscape.
              </p>
              <a href="#" data-aos="fade-up" className="btn btn-main">
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!--services--> */}
      <section id="services" className="text-center">
        <div className="container">
          <div className="row">
            <div
              className="col-12 section-intro text-center"
              data-aos="fade-up"
            >
              <h1>Our Services</h1>
              <div className="divider"></div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered
                <br />
                alteration in some form, by injected humour, or randomised words
                which don't look even slightly
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="zoom-in">
              <div className="service">
                <div className="service-img">
                  <img src={Image_1} alt="" />
                  <div className="icon">
                    <i className="icon-browser"></i>
                  </div>
                </div>
                <h5 className="mt-5 pt-4">Service Name</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <div className="service">
                <div className="service-img">
                  <img src={Image_1} alt="" />
                  <div className="icon">
                    <i className="icon-bargraph"></i>
                  </div>
                </div>
                <h5 className="mt-5 pt-4">Service Name</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <div className="service">
                <div className="service-img">
                  <img src={Image_1} alt="" />
                  <div className="icon">
                    <i className="icon-camera"></i>
                  </div>
                </div>
                <h5 className="mt-5 pt-4">Service Name</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--about--> */}
      <section
        id="about"
        className="bg-cover"
        style={Background_1.watchourvideo}
      >
        <div className="overlay"></div>
        <div className="container text-white text-center">
          <div className="row">
            <div
              className="col-12 section-intro text-center"
              data-aos="fade-up"
            >
              <h1>Watch our video</h1>
              <div className="divider"></div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered
                <br />
                alteration in some form, by injected humour, or randomised words
                which don't look even slightly
              </p>
              <a href="#" className="video-btn">
                <i className="bx bx-play"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!--features--> */}
      <section id="features" className="text-center">
        <div className="container">
          <div className="row">
            <div
              className="col-12 section-intro text-center"
              data-aos="fade-up"
            >
              <div className="divider"></div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered
                <br />
                alteration in some form, by injected humour, or randomised words
                which don't look even slightly
              </p>
            </div>
          </div>
          <div className="row gx-4 gy-5">
            <div className="col-md-4 feature" data-aos="fade-up">
              <div className="icon">
                <i className="icon-tools"></i>
              </div>
              <h5 className="mt-4 mb-3">Feature Title</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className="col-md-4 feature" data-aos="fade-up">
              <div className="icon">
                <i className="icon-browser"></i>
              </div>
              <h5 className="mt-4 mb-3">Feature Title</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className="col-md-4 feature" data-aos="fade-up">
              <div className="icon">
                <i className="icon-calendar"></i>
              </div>
              <h5 className="mt-4 mb-3">Feature Title</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className="col-md-4 feature" data-aos="fade-up">
              <div className="icon">
                <i className="icon-camera"></i>
              </div>
              <h5 className="mt-4 mb-3">Feature Title</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className="col-md-4 feature" data-aos="fade-up">
              <div className="icon">
                <i className="icon-scissors"></i>
              </div>
              <h5 className="mt-4 mb-3">Feature Title</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className="col-md-4 feature" data-aos="fade-up">
              <div className="icon">
                <i className="icon-strategy"></i>
              </div>
              <h5 className="mt-4 mb-3">Feature Title</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!--counters--> */}
      <section className="bg-cover" style={Background_1.b3}>
        <div className="overlay"></div>
        <div className="container text-white text-center">
          <div className="row gy-4" data-aos="fade-up">
            <div className="col-md-3">
              <i className="icon-trophy h1"></i>
              <h1 className="mt-3 mb-2">45,00</h1>
              <p>Awards Won</p>
            </div>
            <div className="col-md-3">
              <i className="icon-camera h1"></i>
              <h1 className="mt-3 mb-2">120k</h1>
              <p>Pictures Taken</p>
            </div>
            <div className="col-md-3">
              <i className="icon-happy h1"></i>
              <h1 className="mt-3 mb-2">30M+</h1>
              <p>Happy Clients</p>
            </div>
            <div className="col-md-3">
              <i className="icon-paintbrush h1"></i>
              <h1 className="mt-3 mb-2">4,005</h1>
              <p>Themes Designed</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!--reviews--> */}
      <section id="reviews" className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-12 section-intro text-center">
              <h1>Our Testimonials</h1>
              <div className="divider"></div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered
                <br />
                alteration in some form, by injected humour, or randomised words
                which don't look even slightly
              </p>
            </div>
          </div>
          <div className="row g-4 text-start">
            <div className="col-md-4" data-aos="fade-up">
              <div className="review p-4">
                <div className="person">
                  <img src={Image_1} alt="" />
                  <div className="text ms-3">
                    <h6 className="mb-0">John Walker</h6>
                    <small>Google</small>
                  </div>
                </div>
                <p className="pt-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected
                </p>
                <div className="stars">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up">
              <div className="review p-4">
                <div className="person">
                  <img src={Image_1} alt="" />
                  <div className="text ms-3">
                    <h6 className="mb-0">John Walker</h6>
                    <small>Google</small>
                  </div>
                </div>
                <p className="pt-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected
                </p>
                <div className="stars">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up">
              <div className="review p-4">
                <div className="person">
                  <img src={Image_1} alt="" />
                  <div className="text ms-3">
                    <h6 className="mb-0">John Walker</h6>
                    <small>Google</small>
                  </div>
                </div>
                <p className="pt-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected
                </p>
                <div className="stars">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up">
              <div className="review p-4">
                <div className="person">
                  <img src={Image_1} alt="" />
                  <div className="text ms-3">
                    <h6 className="mb-0">John Walker</h6>
                    <small>Google</small>
                  </div>
                </div>
                <p className="pt-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected
                </p>
                <div className="stars">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up">
              <div className="review p-4">
                <div className="person">
                  <img src={Image_1} alt="" />
                  <div className="text ms-3">
                    <h6 className="mb-0">John Walker</h6>
                    <small>Google</small>
                  </div>
                </div>
                <p className="pt-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected
                </p>
                <div className="stars">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up">
              <div className="review p-4">
                <div className="person">
                  <img src={Image_1} alt="" />
                  <div className="text ms-3">
                    <h6 className="mb-0">John Walker</h6>
                    <small>Google</small>
                  </div>
                </div>
                <p className="pt-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected
                </p>
                <div className="stars">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--blog--> */}
      <section id="blog" className="bg-light">
        <div className="container">
          <div className="row">
            <div
              className="col-12 section-intro text-center"
              data-aos="fade-up"
            >
              <h1>Our Blog Posts</h1>
              <div className="divider"></div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered
                <br />
                alteration in some form, by injected humour, or randomised words
                which don't look even slightly
              </p>
            </div>
          </div>
          <div className="row text-start">
            <div className="col-md-4" data-aos="fade-up">
              <img src={Image_1} alt="" />
              <div className="mt-4">
                <small>
                  Posted in <a href="#">Web Design</a>, 12 Dec 2055
                </small>
                <h5 className="mt-1 mb-2">
                  <a href="#">Website design in 2055</a>
                </h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis aperiam unde officiis?
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <img src={Image_1} alt="" />
              <div className="mt-4">
                <small>
                  Posted in <a href="#">Web Design</a>, 12 Dec 2055
                </small>
                <h5 className="mt-1 mb-2">
                  <a href="#">Website design in 2055</a>
                </h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis aperiam unde officiis?
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <img src={Image_1} alt="" />
              <div className="mt-4">
                <small>
                  Posted in <a href="#">Web Design</a>, 12 Dec 2055
                </small>
                <h5 className="mt-1 mb-2">
                  <a href="#">Website design in 2055</a>
                </h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis aperiam unde officiis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  a {
    text-decoration: none;
    transition: all 0.4s ease;
    font-weight: 800;
    color: #20212c;
  }

  img {
    width: 100%;
  }

  section {
    padding-top: 80px;
    padding-bottom: 80px;
    z-index: 2;
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(3 3 3 / 68%), rgb(97 9 104 / 65%));
    z-index: -1;
  }

  .bg-cover {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  .hero-section {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn {
    padding: 14px 22px;
    transition: all 0.3s ease;
  }

  .btn-main {
    background: linear-gradient(to right, #fe00fa, #2d289d);
    border-radius: 100px;
    border: none;
    font-weight: 600;
    color: #fff;
  }

  .btn:hover {
    color: #fff;
    transform: translateY(-5px);
  }

  .video-btn {
    width: 60px;
    height: 60px;
    background: linear-gradient(to right, #00e0fe, #1107fe);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 100px;
  }

  .video-btn i {
    font-size: 32px;
  }

  .navbar {
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }

  .navbar-light .navbar-nav .nav-link.active,
  .navbar-light .navbar-nav .show > .nav-link {
    background: -webkit-linear-gradient(#00e0fe, #1107fe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .section-intro {
    margin-bottom: 40px;
  }

  .section-intro .divider {
    height: 4px;
    width: 70px;
    background: linear-gradient(to right, #fe00df, #4642b1);
    margin: 16px auto;
  }

  .service .service-img {
    position: relative;
  }

  .service .service-img .icon {
    width: 90px;
    height: 90px;
    background: linear-gradient(to right, #fe00df, #4642b1);
    color: #fff;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -45px;
    left: 50%;
    transform: translateX(-50%);
  }

  .service .service-img .icon i {
    font-size: 36px;
  }

  .feature i {
    background: -webkit-linear-gradient(#00e0fe, #1107fe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 54px;
  }

  .review {
    box-shadow: 0 12px 12px rgba(0, 0, 0, 0.1);
  }
  .review .person {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
    padding-bottom: 18px;
  }

  .review .person img {
    width: 75px;
    height: 75px;
    border-radius: 100px;
  }

  .review .stars {
    color: orange;
  }

  form .form-control {
    border-radius: 0;
    background: transparent;
    color: #fff;
    border-color: rgba(255, 255, 255, 0.5);
  }

  form .form-control:focus {
    color: #fff;
    background: transparent;
    border-color: #fff;
  }

  form input.form-control {
    height: 54px;
  }

  form .form-control::placeholder {
    color: #fff;
  }

  footer {
    background: linear-gradient(to right, #fe00d2, #757490);
    color: #fff;
  }

  footer a {
    color: #fff;
  }
`;

export default Home;
