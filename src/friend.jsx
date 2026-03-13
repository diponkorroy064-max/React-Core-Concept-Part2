export default function Friend({ friend }) {
    const { name, email,id } = friend;

    return (
        <div className="card">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>ID: {id}</p>

        </div>
    )
}   



