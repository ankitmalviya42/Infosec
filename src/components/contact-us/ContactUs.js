import React from "react";
import { Wrapper } from "../Home/Home";
import cover_1 from "../../asset/img/cover_1.jpg";
import cover_2 from "../../asset/img/cover_2.jpg";
import cover_3 from "../../asset/img/cover_3.jpg";

const ContactUs = () => {
  const Background_1 = {
    b1: {
      backgroundImage: "url(" + cover_1 + ")",
    },

    b2: {
      backgroundImage: "url(" + cover_2 + ")",
    },

    b3: {
      backgroundImage: "url(" + cover_3 + ")",
    },
  };

  return (
    <Wrapper>
      <section
        id="contact"
        className="bg-cover text-white"
        style={Background_1.b3}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div
              className="col-12 section-intro text-center"
              data-aos="fade-up"
            >
              <h1>Get in touch</h1>
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
          <div className="row">
            <div className="col-md-8 mx-auto" data-aos="fade-up">
              <form action="#" className="row g-4">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group col-md-12">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="4"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button className="btn btn-main" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default ContactUs;
