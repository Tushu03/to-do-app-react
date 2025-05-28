import { useEffect, useState } from "react"

export function RountingDemo() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4040/appointements')
            .then(response => response.json())
            .then(data => setUsers(data))

    }
    )



    return (
        <div className="container-fluid">
            <h3>Users Data</h3>
            <table className="table table-hover">

                <thead>
                    <tr>
                        {
                            users.length > 0 && Object.keys(users[0]).map((colName, index) => (
                                <th key={index}>{colName}</th>

                            ))


                        }
                        <th>
                            Actions
                        </th>
                        {/* <th>UserID</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {

                        users.map(user => (
                                    <tr key={user.id}>
                                        {
                                            Object.keys(user).map((data, index) => (
                                                <td key={index}>{user[data]}</td>
                                            ))

                                        }
                                        <td>
                                            <button className="btn btn-warning bi bi-pen-fill"></button>
                                            <button className="btn btn-danger bi bi-trash-fill mx-2"></button>
                                        </td>



                                    </tr>
                                )                        

                        )



                    }











                </tbody>

            </table>

        </div>
    )

}