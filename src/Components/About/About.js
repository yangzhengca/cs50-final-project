import React from "react";
import doctor from "../../images/doctor.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about">
      <div class="container p-5">
      <h2 class="text-center mt-5">About Us</h2>
        <div class="row mt-5">
          <div class="col-md-6">
            <div class="about-info">
              <h2 class="px-5 mt-5">Welcome to The Clinic</h2>
              <p class="px-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
              <h2 class="px-5 mt-5">Doctor John Doe</h2>
              <p class="px-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <img src={doctor} class={styles.img} alt="" />

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
