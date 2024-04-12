import { users } from "../Dummy data/data.js";

const userResolver = {
    Query:{
        users: () => {
            return users;

        },
        user:(_,{userId}) => {
            // we pass userId as arg becoz thats what we are destucrtuing at apollo server (client)
         return users.find((user)=> user._id === userId)

        }
        
    },
    Mutation:{},
};
export default userResolver;