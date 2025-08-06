import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function View() {
  const { id } = useParams();
  let [blogData, setBlogdata] = useState("");
  let [error, setError] = useState("");
  let [ispending, setispending] = useState("");

  useEffect(function () {
    (async () => {
      try {
        let response = await fetch(
          `https://6892fe83c49d24bce868ff5e.mockapi.io/Blogs/${id}`,
          {
            method: "GET",
          }
        );
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

  return (
    <div
      className="container my-5"
      style={{ fontFamily: "serif", textAlign: "center" }}
    >
      <div className="row justify-content-center ">
        <div className="col-md-10 my-2">
          <div className="card">
            <div className="card-header bg-dark text-light">
              <h5>{blogData.title}</h5>
            </div>
            <div className="card-body">
              <h5>{blogData.title}</h5>
              <p>{blogData.description}</p>
              <hr />
              <h5>Written By {blogData.author}</h5>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
