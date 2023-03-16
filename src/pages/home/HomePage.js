import React, { useState, useEffect } from "react";
import { Auth, API } from "aws-amplify";
import { listRecipes } from "../../graphql/queries";

const HomePage = () => {
  const [user, setUser] = useState("");
  const [counter, setCounter] = useState(0);

  // get user's name from aws amplify
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await API.graphql({ query: listRecipes });
      // console.log("data", data.data);
    };
    fetchData();
  }, []);
  const getUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user.username);
  };

  const Container = ({ setCounter }) => {
    return (
      <div>
        <AddOneButton setCounter={setCounter} />
      </div>
    );
  };
  const AddOneButton = ({ setCounter }) => {
    return (
      <div>
        <button onClick={() => setCounter((state) => state + 1)}>
          Add One
        </button>
      </div>
    );
  };

  const Counter = ({ counter }) => {
    return <h4>Counter: {counter}</h4>;
  };

  return (
    <main className="defaultContainer">
      <h1>Default Page</h1>
      <p>Welcome, {user}</p>
      <br />
      <br />
      <div>
        <Counter counter={counter} />
        <Container setCounter={setCounter} />
      </div>
    </main>
  );
};

export default HomePage;
