import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from "./components/GistList";
import { getPublicGists, getGistForUser } from "./services/gistService";
import React, { useState, useEffect } from "react";

const App = () => {
  //Declaring state variables with appropriate initial states
  const [publicList, setPublicList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [invalidUser, setInvalidUser] = useState(false);

  //fetching public data on component mount
  useEffect(() => {
    const getList = async () => {
      // Using OctoKit package functions to fetch data
      const res = await getPublicGists();
      if (res.status === 200) {
        setPublicList(res.data);
        console.log("Public: " + publicList);
      } else {
        setPublicList([]);
      }
    };
    getList();
  }, []);

  //Funtion for fetching specific user data which is called on Enter key in search field
  function getUserList(username) {
    if (username === "") {
      setUserList([]);
      setInvalidUser(false); //Reset Invalid User state
    } else {
      getGistForUser(username)
        .then((res) => {
          if (res.status === 200) {
            setInvalidUser(false);
            if (res.data.length > 0) {
              setUserList(res.data); //Setting state variable for fetched data
            } else {
              setUserList(null);
            }
          }
        })
        .catch((e) => setInvalidUser(true)); //Invalid user state to show message on fetch failure
    }
  }
  return (
    <Wrapper className="App" data-testid="app">
      <Header getUserList={getUserList} />
      <GistList
        gistList={
          userList === null ? null : userList.length > 0 ? userList : publicList //Conditionally passing state to child component
        }
        invalidUser={invalidUser} //To track invalid user
      />
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
