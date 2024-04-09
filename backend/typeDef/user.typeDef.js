//[] means array of transaction or users and ! means required 
//this is the mutation where we will send the input and send the user as the response back --- : LogoutResponse means this is the response we are getting back 
// crete these input then and what response we want from that inputs
const userTypeDef = `#graphql
  type User {
    _id: ID!
    username: String!
    name: String!
    password: String!
    profilePicture: String
    gender: String!
    transactions: [Transaction!]
    
  }

  type Query {
    users:[User!]
    authUser: User
    user(userId:ID!): User
  }

  type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): User
    logout: LogoutResponse
  }
 
  input SignUpInput {
    username: String!
    name: String!
    password: String!
    gender: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }

  type LogoutResponse {
    message: String!
  }
`
export default userTypeDef
