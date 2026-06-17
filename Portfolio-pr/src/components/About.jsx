import React from "react";
import RG from "../assets/RG.jpeg";
export default function About() {
  return (
    <>
      <section className="container">
        <div className="container col d-flex justify-content-center ">
          <div className="card mb-3 p-5" style={{ maxWidth: 1400 }}>
            <div className="row g-0">
              <div className="col-md-4 shadow rounded-5">
                <img src={RG} className="img-fluid" alt="IMG" />
              </div>
              <div className="col-md-8 ">
                <div className="card-body">
                  <h5 className="card-title text-center">💻 About Me</h5>
                  <p className="card-text text-center">
                    <b className="fs-3"> Hi, I’m Roushan!</b>
                    <br /> I am a full-stack developer who loves building
                    high-quality web applications that solve real-world
                    problems. What I Do: Build seamless, end-to-end web
                    applications utilizing React, Node.js, Express, and MongoDB.
                    My Philosophy: Write clean, self-documenting code. When a
                    problem gets tough, I pivot between strategic planning and
                    relentless brute-force problem solving. The Core Strengths:
                    A strong analytical mindset (sharpened by a deep love for
                    chess), strict self-discipline, and a team-oriented
                    attitude. I'm currently looking to bring my full-stack
                    capabilities to impactful projects and innovative
                    engineering teams.
                  </p>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
