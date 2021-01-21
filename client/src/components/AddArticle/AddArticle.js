import React from "react";
import "./AddArticle.css"

function AddArticle() {
  return (
    <div className="wrapper">
      <div className="article-form">
        <form className="input-fields">
          <input type="text" className="input" placeholder="Title" />
          <input type="text" className="input" placeholder="Date" />

          <input type="text" className="input" placeholder="Source" />

          <input type="text" className="input" placeholder="Author" />

          <input type="text" className="input" placeholder="URL" />
          <input type="text" className="input" placeholder="Article" />
          <button className="btn">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddArticle;
