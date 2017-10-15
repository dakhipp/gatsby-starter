import gql from 'graphql-tag';

export const users = gql`
  query Users($page: Int!, $perPage: Int!) {
    users(page: $page, perPage: $perPage) {
      id
      name
      username
    }
  }
`;
