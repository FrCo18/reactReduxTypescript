import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypeSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (error) {
        return <h1>{error}</h1>
    }

    console.log(error)

    return (
        <div>
            {loading ?
                <h1> Идёт загрузка... </h1>
                :
                <div>
                    {users.map(user =>
                        <div key={user.id}>{user.name}</div>
                    )}
                </div>
            }

        </div>
    );
};

export default UserList;