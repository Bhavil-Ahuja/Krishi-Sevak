import "../Home/Home.css";
// import { Fa500Px } from "react-icons/fa";
import React from "react";
import {Farmer} from "../Login Pages/farmer"
export default function Home() {
  return (
    <>
      <header class="header">
        <div class="content" >
          <h1>KRISHI-SEVAK</h1>
          <h2>One-stop platform to connect Indian farmers to renowned companies</h2>
          <div class="arrow bounce">
            <a class="fa fa-arrow-down" href="#features"> </a>
          </div>
          <section class="button">
            <div class="searchBox">
              <button class="searchButton" href="Farmer">
                FARMER
              </button>
              <button class="searchButton" href="#">
                BUYER
              </button>
            </div>
          </section>
          <section class="social_icons">
            <a href="#" title="Facebook" target="_blank">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#" title="Instagram" target="_blank">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#" title="Twitter" target="_blank">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#" title="Telegram" target="_blank">
              <i class="fa fa-telegram"></i>
            </a>
          </section>
        </div>
      </header>

      <section class="features" id="features">
        <h1 class="features__heading">OUR SPECIAL FEATURES</h1>
        <div class="features__box">
          <div class="box-wrapper">
            <div class="feature-photo">
              <div class="box-photo box-photo-1">
                <div class="buttons">
                  <a class="view" href="#">
                    View
                  </a>
                </div>
              </div>

              <div class="info">
                <h4>This is what we work here.</h4>
                <span class="description">
                  Lorem ipsum dolor sit amet, amet leo arcu hendrerit commodo
                  consectetuer, rhoncus ut diam molestie id mi ...
                </span>
              </div>
            </div>
          </div>
          <div class="box-wrapper">
            <div class="feature-photo">
              <div class="box-photo box-photo-2">
                <div class="buttons">
                  <a class="view" href="#">
                    View
                  </a>
                </div>
              </div>

              <div class="info">
                <h4>This is what we work here.</h4>
                <span class="description">
                  Lorem ipsum dolor sit amet, amet leo arcu hendrerit commodo
                  consectetuer, rhoncus ut diam molestie id mi ...
                </span>
              </div>
            </div>
          </div>
          <div class="box-wrapper">
            <div class="feature-photo">
              <div class="box-photo box-photo-3">
                <div class="buttons">
                  <a class="view" href="#">
                    View
                  </a>
                </div>
              </div>

              <div class="info">
                <h4>This is what we work here.</h4>
                <span class="description">
                  Lorem ipsum dolor sit amet, amet leo arcu hendrerit commodo
                  consectetuer, rhoncus ut diam molestie id mi ...
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section__testimonials">
        <h1 class="heading-1">Testimonials</h1>
        <div class="section__testimonials__container">
          <div class="slider">
            <input type="radio" name="testimonial" id="t-1" />
            <input type="radio" name="testimonial" id="t-2" />
            <input type="radio" name="testimonial" id="t-3" checked />
            <input type="radio" name="testimonial" id="t-4" />
            <input type="radio" name="testimonial" id="t-5" />
            <div class="testimonials mb-8">
              <label class="item" for="t-1">
                <div class="mycard">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200"
                      alt="nivel5"
                      class="cardimg"
                    />
                  </div>
                  <div>
                    <p class="carddescription">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorum voluptates iste maiores animi
                    </p>
                  </div>
                  <p class="cardtitle">Ankit</p>
                </div>
              </label>
              <label class="item" for="t-2">
                <div class="mycard">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200"
                      alt="nivel5"
                      class="cardimg"
                    />
                  </div>
                  <div>
                    <p class="carddescription">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam perferendis architecto rerum, labore dolor
                      asperiores?
                    </p>
                  </div>
                  <p class="cardtitle">-Swati</p>
                </div>
              </label>
              <label class="item" for="t-3">
                <div class="mycard">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200"
                      alt="nivel5"
                      class="cardimg"
                    />
                  </div>
                  <div>
                    <p class="carddescription">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Facere veritatis nostrum eius deserunt velit quibusdam.
                    </p>
                  </div>
                  <p class="cardtitle">-Shubham</p>
                </div>
              </label>
              <label class="item" for="t-4">
                <div class="mycard">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200"
                      alt="nivel5"
                      class="cardimg"
                    />
                  </div>
                  <div>
                    <p class="carddescription">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque, blanditiis? sldkjjvb wadkdjbwr
                    </p>
                  </div>
                  <p class="cardtitle">-Swati</p>
                </div>
              </label>
              <label class="item" for="t-5">
                <div class="mycard">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200"
                      alt="nivel5"
                      class="cardimg"
                    />
                  </div>
                  <div>
                    <p class="carddescription">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ea, tempora alias corporis reprehenderit asperiores
                      praesentium.
                    </p>
                  </div>
                  <p class="cardtitle">-Umar</p>
                </div>
              </label>
            </div>
            <div class="dots">
              <label for="t-1"></label>
              <label for="t-2"></label>
              <label for="t-3"></label>
              <label for="t-4"></label>
              <label for="t-5"></label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
