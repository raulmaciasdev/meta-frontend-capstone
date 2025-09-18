const Login = () => (
  <section className="login-section">
    <h1>Login</h1>
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit" className="action-button">Login</button>
    </form>
  </section>
);

export default Login;
