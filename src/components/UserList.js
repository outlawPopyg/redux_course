import { useSelector } from "react-redux";

export const UserList = () => {
    const {list: users, status} = useSelector(state => state.users);

    if (status === "pending") {
        return (<div><code>Loading</code></div>);
    } else if (status === "rejected") {
        return <div><code>Error</code></div>
    }

    return <code>Users: {users.length}</code>
}