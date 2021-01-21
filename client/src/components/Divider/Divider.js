import React from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "semantic-ui-css/semantic.min.css";
import "./search.css";



const DividerPage = () => (
  <Segment placeholder>
    <Grid columns={2} relaxed="very" stackable>
      <Grid.Column>
        <Form>
          <Form.Input label="Title" placeholder="Title" />
          <Form.Input label="Date" placeholder="Date" />
          <Form.Input label="Source" placeholder="Source" />
          <Form.Input label="Author" placeholder="Author" />
          <Form.Input label="URL" placeholder="URL" />
          <Form.Input label="Article" placeholder="Article" />

          <Button content="Add" primary />
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

export default DividerPage;
