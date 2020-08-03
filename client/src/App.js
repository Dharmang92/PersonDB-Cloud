import React, { useState } from "react";

function App() {
    const [users, setUsers] = useState([]);

    const fetchData = () => {
        fetch("http://localhost:3877/api/data")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUsers(data);
            });
    };

    // const fetchData = async () => {
    //     const result = await fetch("http://localhost:3877/api/data");
    //     const data = await result.json();
    //     setUsers(data);
    //     console.log(data[0].name);
    // };

    return (
        <div>
            <div>Loading...</div>
            <button onClick={fetchData}>Fetch</button>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>

        // <button onClick={fetchData}>Fetch</button>
    );
}

export default App;
