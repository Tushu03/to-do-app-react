import { useState, useEffect } from "react";

//note that the session storage and local storage are is same just advantages are different
export function SessionDemo() {
    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
            setIsLoggedIn(true);
        }
    }, []);

    function handleUser(e) {
        setUsername(e.target.value);
    }

    function handleSignIn() {
        localStorage.setItem('username', username);
        setIsLoggedIn(true); // Update state instead of reloading
    }

    function handleSignOut() {
        localStorage.removeItem('username');
        setUsername('');
        setIsLoggedIn(false); // Update state instead of reloading
    }

    return (
        <div>
            <nav className="nav d-flex justify-content-between bg-dark text-white" style={{ boxShadow: "5px 5px 5px gray" }}>
                <h1 className="nav-brand ms-1">Youtube.com</h1>
                <div>
                    {isLoggedIn ? (
                        <div>
                            <div className="input-group mt-2">
                                <button className="btn btn-danger bi bi-person-fill" onClick={handleSignOut}>
                                    Sign out
                                </button>
                                <span className="mx-2">Hello, {username}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="input-group mt-2">
                            <input type="text" className="form-control" placeholder="Enter User Name" onChange={handleUser} />
                            <button className="btn btn-warning bi bi-person-fill" onClick={handleSignIn}>
                                Sign in
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}
