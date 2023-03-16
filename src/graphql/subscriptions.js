/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onCreateRecipe(filter: $filter) {
      id
      title
      description
      ingredients {
        items {
          id
          name
          quantity
          recipeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          recipeIngredientsId
        }
        nextToken
        startedAt
      }
      instructions {
        items {
          id
          description
          recipeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          recipeInstructionsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onUpdateRecipe(filter: $filter) {
      id
      title
      description
      ingredients {
        items {
          id
          name
          quantity
          recipeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          recipeIngredientsId
        }
        nextToken
        startedAt
      }
      instructions {
        items {
          id
          description
          recipeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          recipeInstructionsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onDeleteRecipe(filter: $filter) {
      id
      title
      description
      ingredients {
        items {
          id
          name
          quantity
          recipeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          recipeIngredientsId
        }
        nextToken
        startedAt
      }
      instructions {
        items {
          id
          description
          recipeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          recipeInstructionsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient(
    $filter: ModelSubscriptionIngredientFilterInput
  ) {
    onCreateIngredient(filter: $filter) {
      id
      name
      quantity
      recipeID
      recipe {
        id
        title
        description
        ingredients {
          nextToken
          startedAt
        }
        instructions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      recipeIngredientsId
    }
  }
`;
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient(
    $filter: ModelSubscriptionIngredientFilterInput
  ) {
    onUpdateIngredient(filter: $filter) {
      id
      name
      quantity
      recipeID
      recipe {
        id
        title
        description
        ingredients {
          nextToken
          startedAt
        }
        instructions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      recipeIngredientsId
    }
  }
`;
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient(
    $filter: ModelSubscriptionIngredientFilterInput
  ) {
    onDeleteIngredient(filter: $filter) {
      id
      name
      quantity
      recipeID
      recipe {
        id
        title
        description
        ingredients {
          nextToken
          startedAt
        }
        instructions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      recipeIngredientsId
    }
  }
`;
export const onCreateInstruction = /* GraphQL */ `
  subscription OnCreateInstruction(
    $filter: ModelSubscriptionInstructionFilterInput
  ) {
    onCreateInstruction(filter: $filter) {
      id
      description
      recipeID
      recipe {
        id
        title
        description
        ingredients {
          nextToken
          startedAt
        }
        instructions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      recipeInstructionsId
    }
  }
`;
export const onUpdateInstruction = /* GraphQL */ `
  subscription OnUpdateInstruction(
    $filter: ModelSubscriptionInstructionFilterInput
  ) {
    onUpdateInstruction(filter: $filter) {
      id
      description
      recipeID
      recipe {
        id
        title
        description
        ingredients {
          nextToken
          startedAt
        }
        instructions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      recipeInstructionsId
    }
  }
`;
export const onDeleteInstruction = /* GraphQL */ `
  subscription OnDeleteInstruction(
    $filter: ModelSubscriptionInstructionFilterInput
  ) {
    onDeleteInstruction(filter: $filter) {
      id
      description
      recipeID
      recipe {
        id
        title
        description
        ingredients {
          nextToken
          startedAt
        }
        instructions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      recipeInstructionsId
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      email
      firstName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      email
      firstName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      email
      firstName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
