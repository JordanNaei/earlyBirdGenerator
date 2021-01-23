import React, { useEffect, useState } from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "semantic-ui-css/semantic.min.css";
import "./search.css";

import API from "../../../../utils/API"


 function DividerComponent() {
   // setting our components state
   const [formObject, setFormObject] = useState({
     title: "",
     source: "",
     author: "",
     url: "",
     article: "",
   });

   // Handles updating component state when the user types into the input field
   function handleInputChange(event) {
     const { name, value } = event.target;
     setFormObject({ ...formObject, [name]: value });
   }
   function handleFormSubmit(event) {
     event.preventDefault();
     if (formObject.title && formObject.source && formObject.author && formObject.url && formObject.article) {
       API.saveBook({
         title: formObject.title,
         source: formObject.source,
         author: formObject.author,
         url: formObject.synopsis,
         article: formObject.article
       })
         .then(() =>
           setFormObject({
             title: "",
             source: "",
             author: "",
             url: "",
             article: ""
           })
         )
         .catch((err) => console.log(err));
     }
   }

   return (
     <Segment placeholder>
       <Grid columns={2} relaxed="very" stackable>
         <Grid.Column>
           <Form>
             <Form.Input
               onChange={handleInputChange}
               label="Title"
               placeholder="Title"
               name="title"
               value={formObject.title}
             />
             <Form.Input
               onChange={handleInputChange}
               label="Source"
               placeholder="Source"
               name="source"
               value={formObject.source}
             />
             <Form.Input
               onChange={handleInputChange}
               label="Author"
               placeholder="Author"
               name="author"
               value={formObject.author}
             />
             <Form.Input
               onChange={handleInputChange}
               label="URL"
               placeholder="URL"
               name="url"
               value={formObject.url}
             />
             <Form.Input
               onChange={handleInputChange}
               label="Article"
               placeholder="Article"
               name="article"
               value={formObject.article}
             />

             <Button
               content="Add"
               primary
               disabled={
                 !(
                   formObject.title &&
                   formObject.source &&
                   formObject.author &&
                   formObject.url &&
                   formObject.article
                 )
               }
               onClick={handleFormSubmit}
             />
           </Form>
         </Grid.Column>

         <Grid.Column verticalAlign="middle">
           <div className="search-box">
             <input
               className="search-text"
               type="text"
               name=""
               placeholder="Search"
             />
             <button className="search-btn">
               <FontAwesomeIcon icon={faSearch} />
             </button>
           </div>
         </Grid.Column>
       </Grid>

       <Divider vertical>Or</Divider>
     </Segment>
   );
 }
export default DividerComponent;
