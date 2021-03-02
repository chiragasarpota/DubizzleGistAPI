import React, { Component } from "react";
import Gist from "./Gist";
import moment from "moment";

function GistList(props) {
  return (
    <div style={centerDivsStyle}>
      {props.invalidUser === true ? (
        <h1 style={h1Style}>Username is Invalid</h1> //Conditionally rendering Error Message
      ) : props.gistList === null ? (
        <h1 style={h1Style}>No Gists for User</h1>
      ) : (
        props.gistList.map((
          gistItem //Rendering Gist List using maps
        ) => (
          <Gist
            avatar_link={gistItem.owner.avatar_url}
            user_link={gistItem.owner.html_url}
            user_name={gistItem.owner.login}
            file_length={Object.keys(gistItem.files).length}
            created_time={moment(gistItem.created_at).format("L")} //Using Moment.js for formatting date
            updated_time={moment(gistItem.updated_at).format("L")}
            description={gistItem.description}
            gistItem={gistItem}
            comments={gistItem.comments}
          />
        ))
      )}
    </div>
  );
}
const h1Style = {
  textAlign: "center",
  paddingTop: "200px",
};
const centerDivsStyle = {
  diplay: "flex",
  alignItems: "center",
};
export default GistList;
