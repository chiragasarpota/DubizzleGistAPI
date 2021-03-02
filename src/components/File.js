import React, { Component } from "react";
import Octicon from "react-octicon";
import styled from "styled-components";

//File component to generate file list dynamically
function File(props) {
  return (
    <div>
      <Wrapper>
        {Object.keys(props.gistItem.files).map((key, index) => (
          <FileItem
            fileName={props.gistItem.files[key].filename}
            url={props.gistItem.files[key].raw_url}
          />
        ))}
      </Wrapper>
    </div>
  );
}

//Individual file component
function FileItem(props) {
  return (
    <div>
      <Wrapper>
        <Octicon name="file" />
        <a href={props.url} style={aStyle}>
          {props.fileName}
        </a>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  color: #0366d6;
  z-index: 32;
  padding-left: 25px;
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
`;

const aStyle = {
  color: "#0366d6",
  fontWeight: "600",
  textDecoration: "none",
};

export default File;
