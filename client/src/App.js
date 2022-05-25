import logo from './logo.svg';
import './App.css';

function App() {
  const handleSignup = async () => {
    let form = new FormData(document.querySelector('#signup-form'))
    let req = await fetch('/signup', {
      method: 'POST',
      body: form
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault
    let form = new FormData(document.querySelector('#login-form'))
    let req = await fetch('/login', {
      method: 'POST',
      body: form
    })
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form id="signup-form" onSubmit={(e) => {
        e.preventDefault()
        handleSignup()
      }}>
        <input type="text" name="user[username]" placeholder="Username"/>
        <input type="text" name="user[first_name]" placeholder="First Name"/>
        <input type="text" name="user[last_name]" placeholder="Last Name"/>
        <input type="email" name="user[email]" placeholder="eMail"/>
        <input type="password" name="user[password]" placeholder="Create password" minlength="8"/>
        <input type="submit"/>
      </form>
      <hr />
      <h2>Login</h2>
      <form action="/login" method="POST" id="login-form" onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="eMail"></input>
        <input type="text" name="password" placeholder="Enter password"></input>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
