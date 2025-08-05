import React, { useEffect, useState } from "react";

export default function AdminHome() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function blogfetch() {
      try {
        let response = await fetch("http://localhost:3000/blogs", {
          method: "GET",
        });
        if (!response.ok) {
          throw `New error ${response.status}`;
        }
        let data = await response.json();
        setBlogs(data);
        console.log("Data Of adminCreate", data);
      } catch (error) {
        console.log("Error of Admin Create: ", error);
      }
    }
    blogfetch();
  }, []);

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        {blogs.map((blog) => (
          <div className="col-12 col-sm-8 col-md-4 mb-4" key={blog.id}>
            <div className="card text-bg-primary h-100">
              <div className="card-header text-center">{blog.title}</div>
              <div className="card-body">
                <h5 className="card-title text-center">{blog.author}</h5>
                <p className="card-text">{blog.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
