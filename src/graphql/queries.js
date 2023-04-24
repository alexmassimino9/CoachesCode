/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTeams = /* GraphQL */ `
  query SyncTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        number
        team {
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
  }
`;
export const syncPlayers = /* GraphQL */ `
  query SyncPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlayers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        number
        team {
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
  }
`;
