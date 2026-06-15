import React from "react";

export default function About() {
  return (
    <>
      <section className="container-fluid">
        <div className="container col d-flex justify-content-center ">
          <div className="card mb-3 p-5" style={{ maxWidth: 980 }}>
            <div className="row g-0">
              <div className="col-md-4 shadow rounded-5">
                <img
                  src="https://i.pinimg.com/474x/d4/4e/f7/d44ef76169ce9910323092a87f9fd570.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">💻 About Me</h5>
                  <p className="card-text">
                   <b className="fs-3"> Hi, I’m Roushan!</b><br /> I am a full-stack developer who loves
                    building high-quality web applications that solve real-world
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
                  <p className="card-text">
                  p
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
