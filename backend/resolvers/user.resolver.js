import { users } from "../Dummy data/data.js";

const userResolver = {
    Query:{
        users: () => {
            return users;

        }
    },
    Mutation:{},
};
export default userResolver;