import React from "react";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";

const About = () => {
  return (
    <>
      <div className=" mt-0 row">
        <h2 id="about" className="mt-0 text-dark">
          <hr></hr>
          <small className="text-dark mt-4">
            <b>A</b>bout <b>U</b>s
          </small>
        </h2>
        <div class="container-fluid text-center">
          <div class="mt-2 row">
            <div class="col">
              <img style={{ height: "14rem", width: "22rem" }} src={c1}></img>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                asperiores pariatur tempora eum unde fuga reiciendis ab
                Aut
                asperiores pariatur tempora eum unde fuga reiciendis ab
                voluptatem a nostrum facilis, dicta assumenda exercitationem
                quaerat, provident nulla vel obcaecati odit. Sint, nobis?
              </p>
            </div>
            <div class="col">
              <img style={{ height: "14rem", width: "22rem" }} src={c2}></img>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                asperiores pariatur tempora eum unde fuga reiciendis ab
                Aut
                asperiores pariatur tempora eum unde fuga reiciendis ab
                voluptatem a nostrum facilis, dicta assumenda exercitationem
                quaerat, provident nulla vel obcaecati odit. Sint, nobis?
              </p>
            </div>
          </div>
          <p class="lead">
            This is a lead paragraph. It stands out from regular paragraphs. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, excepturi.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
