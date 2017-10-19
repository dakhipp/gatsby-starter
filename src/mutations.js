import gql from 'graphql-tag'

export const registerMutation = gql`
  mutation Register(
    $name: String!
    $username: String!
    $phone_number: String!
    $email: String!
    $password: String!
    $password_conf: String!
  ) {
    register(
      name: $name
      username: $username
      phone_number: $phone_number
      email: $email
      password: $password
      password_conf: $password_conf
    ) {
      id
      token
      scope
    }
  }
`

export const loginMutation = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      token
      scope
    }
  }
`
