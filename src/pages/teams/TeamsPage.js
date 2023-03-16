import React, { useEffect } from "react";
import { AppBar } from "../../components";
import Button from "@mui/material/Button";
import { API } from "aws-amplify";
import { createRecipe } from "../../graphql/mutations";
import { onCreateRecipe } from "../../graphql/subscriptions";

const TeamsPage = () => {
  useEffect(() => {
    const subscription = API.graphql({ query: onCreateRecipe }).subscribe({
      next: (recipeData) => {
        console.log("recipeData", recipeData);
      },
    });
    return () => subscription.unsubscribe();
  }, []);

  const createNewRecipe = async () => {
    const title = prompt("Enter a name for the recipe");
    const newRecipe = await API.graphql({
      query: createRecipe,
      variables: { input: { title } },
    });
  };
  return (
    <>
      <AppBar />
      <div className="teams">
        <h1>Teams</h1>
        <div>
          <Button variant="contained" onClick={createNewRecipe}>
            Create Team
          </Button>
          <Button variant="contained">Find Team</Button>
          <Button variant="contained">Join Team</Button>
        </div>
      </div>
    </>
  );
};

export default TeamsPage;
