import axios from "axios";

export default {

  getArticles: function (sT) {
    console.log(sT.search);
    return axios.get("http://newsapi.org/v2/everything?q="+ sT.search +"&from=2020-12-23&sortBy=publishedAt&apiKey=b21576c70cd24ab8a978d4b96c008837");
  },
  // Gets all posts
  getPosts: function () {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function (id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function (id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  savePost: function (postData) {
    return axios.post("/api/posts", postData);
  }
};
