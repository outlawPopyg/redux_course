import { useSelector } from "react-redux";

export const UserList = () => {
    const users = useSelector(state => state.users);

    return <code>Users: {users.length}</code>
}