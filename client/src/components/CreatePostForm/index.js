import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { GET_ARTICLES, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import "../../styles/homeStyle.css";

function CreatePostForm() {
  const searchRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: GET_ARTICLES });
    API.getArticles({
      search: searchRef.current.value,
    })
      .then(result => {
        // dispatch({
        //   type: ADD_POST,
        //   post: result.data
        // });
        console.log(result.data);
      })
      .catch(err => console.log(err));

    searchRef.current.value = "";
  };

  return (
    <div >
      <div className=" yandal3 tit2">

        <span for="m"><h1 className="mHead">The Land Of The Free</h1></span>
        <img
          className="img-fluid img-thumbnail yan"
          src="https://images04.military.com/sites/default/files/2019-04/joint-services-color-guard-1200.jpg"
          id="m"
        />
      </div>
      <div className="yandal">
        <h1>Members Article Search</h1>
        <form className="form-group mt-3 mb-3 text-center" onSubmit={handleSubmit}>
          <input className="form-control mb-3 col-6 yandal1" required ref={searchRef} placeholder="Search Term" />
          {/* <input className="form-control mb-5" required ref={titleRef} placeholder="Title" />
          <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Body" /> */}
          {/* <button className="btn btn-light mt-3 mb-5" disabled={state.loading} type="submit"> */}
          <button className="btn btn-light mt-3 mb-5" type="submit">
            Search
        </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePostForm;
