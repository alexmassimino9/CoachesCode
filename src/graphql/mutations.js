/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      firstName
      lastName
      teams {
        items {
          id
          name
          sport
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTeamsId
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      firstName
      lastName
      teams {
        items {
          id
          name
          sport
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTeamsId
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      firstName
      lastName
      teams {
        items {
          id
          name
          sport
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTeamsId
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      sport
      coach {
        id
        username
        email
        firstName
        lastName
        teams {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      players {
        items {
          id
          name
          number
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamPlayersId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userTeamsId
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      sport
      coach {
        id
        username
        email
        firstName
        lastName
        teams {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      players {
        items {
          id
          name
          number
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamPlayersId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userTeamsId
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      sport
      coach {
        id
        username
        email
        firstName
        lastName
        teams {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      players {
        items {
          id
          name
          number
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamPlayersId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userTeamsId
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      name
      number
      team {
        id
        name
        sport
        coach {
          id
          username
          email
          firstName
          lastName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        players {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userTeamsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamPlayersId
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      name
      number
      team {
        id
        name
        sport
        coach {
          id
          username
          email
          firstName
          lastName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        players {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userTeamsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamPlayersId
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      name
      number
      team {
        id
        name
        sport
        coach {
          id
          username
          email
          firstName
          lastName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        players {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userTeamsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamPlayersId
    }
  }
`;
