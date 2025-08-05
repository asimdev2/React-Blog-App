import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  let [blogData, setBlogdata] = useState("");
  let [error, setError] = useState("");

  useEffect(function () {
    (async () => {
      try {
        let response = await fetch("http://localhost:3000/blogs", {
          method: "GET",
        });
        if (!response.ok) {
          throw `error while requesting ${response.status}`;
        }
        let data = await response.json();
        setBlogdata(data);

        console.log("printed data", blogData);
      } catch (err) {
        setError(err.message);
        console.log("printed error", error);
      }
    })();
  }, []);

  // let ref = true && "value"
  // let ref1 = false && "value"
  // let ref3 = false || "value"

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {blogData &&
          blogData.map((blog) => (
            <div className="col-md-10 my-2">
              <div className="card border-2 p-5 border-success gap-3">
                <div
                  className="card-header bg-black  text-center  border-2  rounded-3   text-white"
                  style={{ fontFamily: "serif" }}
                >
                  <h5>{blog.title}</h5>
                </div>
                <div
                  className="card-body fs-1 "
                  style={{ fontFamily: "serif" }}
                >
                  {blog.img && (
                    <img
                      src={blog.img}
                      alt=""
                      style={{ height: "50px", width: "50px" }}
                    />
                  )}
                  <h5 className="fw-bold">Title : {blog.title}</h5>
                  <hr />
                  <h5 className="fw-bold">Written By {blog.author}</h5>
                  <hr />
                  <Link
                    className="btn btn-success w-100 my-2"
                    to={`viewBlog/${blog.id}`}
                  >
                    Read More...
                  </Link>
                  <Link
                    className="btn btn-success w-100 my-2"
                    to={`editBlog/${blog.id}`}
                  >
                    Edit Blog
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
