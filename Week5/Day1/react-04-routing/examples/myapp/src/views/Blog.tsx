//import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Blog() {
  const blogs = [
    { id: 1, title: "blog1" },
    { id: 2, title: "blog2" },
    { id: 3, title: "blog3" },
  ];
  const { id } = useParams();
  if (!id) {
    return (
      <>
        <div>Blog HomePage</div>
        {blogs.map((blog) => (
          <div>
            <Link to={"/blog/" + blog.id}> {blog.title}</Link>
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      <div>You have selected blog id:{id}</div>
      <Link to={"/blog"}>Back</Link>
    </>
  );
}
