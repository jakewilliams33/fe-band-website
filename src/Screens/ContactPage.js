import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../Styles/ContactPageStyles.css";
import { motion } from "framer-motion";
export const ContactPage = ({ opacity }) => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: function (e) {
      sendEmail(e);
    },
    validationSchema: Yup.object({
      name: Yup.string().required(" is required"),
      email: Yup.string().email(" is not valid").required(" is required"),
      message: Yup.string().required(" is required"),
    }),
  });

  function confirm() {
    setSent(true);
  }

  const sendEmail = (e) => {
    console.log(e);
    emailjs
      .sendForm(
        "service_sbd1l45",
        "template_pu53lyo",
        form.current,
        "isoK9qyOCXn6S9buo"
      )
      .then(
        (result) => {
          confirm();
        },
        (error) => {
          alert(error.text);
        }
      );
    formik.resetForm();
  };

  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <div className="contact-page">
        <h1 className="contact-title">Contact</h1>

        <section className="skew-background-contact"></section>
        <div className={sent ? "sent" : "formContainer"}>
          {!sent && (
            <div>
              <h3>
                email:
                <a href="mailto:adultdvdmenu@gmail.com">
                  {" "}
                  adultdvdmenu@gmail.com
                </a>
              </h3>
              <h3>or use the form below </h3>
            </div>
          )}
          {sent && (
            <div>
              <h3>Message sent!</h3>
            </div>
          )}

          <form ref={form} onSubmit={formik.handleSubmit}>
            <label>Name</label>
            {formik.touched.name && formik.errors.name && (
              <span className="error-messages">{formik.errors.name}</span>
            )}
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              type="text"
              name="name"
              className="feedback-input"
            />
            <label>Email</label>
            {formik.touched.email && formik.errors.email && (
              <span className="error-messages">{formik.errors.email}</span>
            )}
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              type="text"
              name="email"
              className="feedback-input"
            />

            <label>Subject</label>
            {formik.touched.subject && formik.errors.subject && (
              <span className="error-messages">{formik.errors.subject}</span>
            )}
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              type="text"
              name="subject"
              className="feedback-input"
            />
            <label>Message</label>
            {formik.touched.message && formik.errors.message && (
              <span className="error-messages">{formik.errors.message}</span>
            )}
            <textarea
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              name="message"
              className="message"
            />
            <input type="submit" value="Send" />
          </form>
          <button onClick={() => setSent(false)}>send another?</button>
        </div>
      </div>
    </motion.div>
  );
};
