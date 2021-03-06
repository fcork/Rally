import gql from 'graphql-tag';

const GET_ALL_USERS = gql`
  {
    getAllUsers{
      id
      name
      fullName
      phoneNumber
      email
      image
      elo
      tier
    }
  }
`;

const GET_ALL_COURTS = gql`
  {
    getAllCourts{
      id
      location
      name
      phoneNumber
      numberOfCourts
      indoor
      courtType
      latitude
      longitude
    }
  }
`;

const GET_USERS_BY_TIER = gql`
  query GetUsersByTier($tier: Int $email: String) {
    getUsersByTier(tier: $tier email: $email){
      id
      email
      name
      fullName
      phoneNumber
      image
      elo
      wins
      losses
      tier
    }
  }
`;

const MATCH = `
  {
    id
    location
    challenger
    challengerUserInfo {
      id
      email
      name
      fullName
      phoneNumber
      image
      elo
      wins
      losses
      tier
    }
    opponent
    opponentUserInfo {
      id
      email
      name
      fullName
      phoneNumber
      image
      elo
      wins
      losses
      tier
    }
    startTime
    winner
    score
    accepted
    completed
    court {
      location
      name
      phoneNumber
      numberOfCourts
      indoor
      courtType
      latitude
      longitude
    }
  }
`;

const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String!) {
    getUserByEmail(email: $email) {
      email
      name
      fullName
      phoneNumber
      wins
      losses
      elo
      tier
      completedMatches
        ${MATCH}
      pendingMatches
        ${MATCH}
      challengesSent
        ${MATCH}
      challengesReceived
        ${MATCH}
    }
  }
`;

const GET_CHALLENGES_BY_USER = gql`
  query GetUserByEmail($email: String!) {
    getUserByEmail(email: $email) {
      email
      name
      elo
      challengesReceived
        ${MATCH}
    }
  }
`;

const GET_SCHEDULED_BY_USER = gql`
  query GetUserByEmail($email: String!) {
    getUserByEmail(email: $email) {
      email
      name
      elo
      completedMatches
        ${MATCH}
      pendingMatches
        ${MATCH}
    }
  }
`;

const CHECK_EMAIL_IS_UNIQUE = gql`
  query CheckEmailIsUnique($email: String!) {
    checkEmailIsUnique(email: $email)
  }
`;

const GET_USER_PROFILE_DATA = gql`
  query GetUserByEmail($email: String!) {
    getUserByEmail(email: $email) {
      email
      name
      fullName
      phoneNumber
      wins
      losses
      elo
      tier
    }
  }
`;



module.exports = {
  GET_ALL_USERS,
  GET_ALL_COURTS,
  GET_USERS_BY_TIER,
  GET_USER_BY_EMAIL,
  GET_CHALLENGES_BY_USER,
  GET_SCHEDULED_BY_USER,
  CHECK_EMAIL_IS_UNIQUE,
  GET_USER_PROFILE_DATA
};
