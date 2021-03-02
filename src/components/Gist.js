import React, { Component } from "react";
import Octicon from "react-octicon";
import styled from "styled-components";
import File from "./File";

const image_style = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
};

function Gist(props) {
  return (
    //Rendering individual components using values passed in properties by parent component
    <div style={rootDivStyle}>
      <Wrapper>
        <img src={props.avatar_link} style={image_style}></img>
        <a href={props.user_link} style={aStyle}>
          {props.user_name}
        </a>
        <Octicon name="code" />
        <p>{props.file_length} Files</p>
        <Octicon name="repo-forked" />
        <p>Forks</p>
        <Octicon name="comment" />
        <p>{props.comments} Comments</p>
        <Octicon name="star" />
        <p>Stars</p>
      </Wrapper>
      <div style={internalDivStyle}>
        <p>Created at: {props.created_time} </p>
        <p>Last updated: {props.updated_time}</p>
      </div>
      <h3 style={internalDivStyle}>{props.description}</h3>
      <File gistItem={props.gistItem} />
    </div>
  );
}

const Wrapper = styled.div`
  color: #0366d6;
  z-index: 32;
  padding: 16px;
  padding-bottom: 0;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const rootDivStyle = {
  borderBottom: "1px solid #D3D3D3",
  paddingTop: "25px",
  paddingBottom: "25px",
  width: "80%",
};
const internalDivStyle = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  marginTop: "0",
  paddingLeft: "16px",
};

const aStyle = {
  color: "#0366d6",
  fontWeight: "600",
  paddingRight: "150px",
  textDecoration: "none",
};
export default Gist;
