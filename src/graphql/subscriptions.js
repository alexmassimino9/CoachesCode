/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onCreatePlayer(filter: $filter) {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onUpdatePlayer(filter: $filter) {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onDeletePlayer(filter: $filter) {
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
