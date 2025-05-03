import './LoginInPage.css'

const LoginInPage = () => {
    return (
        <div className="login">
            <h2>Login</h2>
            <form action="">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="#">Sign up</a></p>
            <p>Forgot your password? <a href="#">Reset it</a></p>
        </div>

    );
}

export default LoginInPage;