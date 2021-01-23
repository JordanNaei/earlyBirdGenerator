import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import "../../styles/homeStyle.css";

function CreatePostForm() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <div>
      <div className="jumbotron yandal3">

        {/* <label for="m" className="text-center">The United States Military</label> */}
        <img
          className="img-fluid img-thumbnail"
          src="https://images04.military.com/sites/default/files/2019-04/joint-services-color-guard-1200.jpg"
          id="m"
        />
      </div>
      <div className="yandal">
        <h1>Members Article Search</h1>
        <form className="form-group mt-3 mb-3 text-center" onSubmit={handleSubmit}>
          <input className="form-control mb-3 col-6 yandal1" required ref={titleRef} placeholder="Search Term" />
          {/* <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Body" />
        <input className="form-control mb-5" ref={authorRef} placeholder="Screen name" /> */}
          <button className="btn btn-light mt-3 mb-5" disabled={state.loading} type="submit">
            Search
        </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePostForm;
