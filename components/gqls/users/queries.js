import {gql} from '@apollo/client';

export const GET_USER = gql`
  query {
    findManyUser(where: {name: {not: {equals: null}}}) {
      id
      name
      login
      group
    }
  }
`;
