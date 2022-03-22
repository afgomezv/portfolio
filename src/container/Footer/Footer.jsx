import React from "react";
import { useForm } from "../../Hooks/UseForm.js";
import { AppWrap, MotionWrap } from "../../wrapper";
import { validationsForm } from "../../Helpers/ValidationsForm.js";
import "./Footer.scss";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

let styles = {
  width: "60%",
  textAlign: "center",
  fontWeight: "bold",
  padding: "0.6rem",
  borderRadius: "0.3rem",
  backgroundColor: "#f44336",
  color: "black",
};

export const Footer = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      {!response ? (
        <form className="app__footer-form app__flex">
          <h2 className="head-text">Take a coffee & chat with me</h2>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              name="name"
              placeholder="Your Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.name}
              required
            />
          </div>
          {errors.name && <p style={styles}>{errors.name}</p>}
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              name="email"
              placeholder="Your Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.email}
              required
            />
          </div>
          {errors.email && <p style={styles}>{errors.email}</p>}
          <div className="app__flex"></div>
          <div className="app__flex">
            <textarea
              className="p-text"
              name="message"
              placeholder="Your Message"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.message}
              required
            />
          </div>
          {errors.message && <p style={styles}>{errors.message}</p>}
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          <br />
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
