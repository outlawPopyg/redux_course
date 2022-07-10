import {useEffect} from "react";
import {loadAll} from "../store/users/userActions";
import {useDispatch} from "react-redux";
import {UserList} from "./UserList";

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAll());
    }, []);

    return (
        <>
            <UserList/>
        </>
    )
}