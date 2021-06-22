import React from "react"
import Signup from "./components/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import Home from "./Home/Home"
import Search from "./SearchPage/SearchPage"
import Profile from "./Profile/AbstractProfile"
function App() {
  return (
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/search" component={Search} />
              <Route path="/profile" component={Profile} />
              <Redirect exact path="/"/>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  )
}

export default App
