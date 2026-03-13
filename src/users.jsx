import { use } from "react";
export default function Users({ fetchUsers }) {

    const users = use(fetchUsers);
    console.log(users);

    return (
        <div className="card">
            <h3>Users Component: {users.length}</h3>
            {
                users.map(user => <p key={user.id}>{user.title}</p>)
            }
        </div>
    )
}

