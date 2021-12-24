import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Register from "./pages/Register"
import Home from "./pages/Home";
import { BrowserRouter, Switch , Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
            <div className="App">
                <BrowserRouter>
                    <Nav />
                    <main>
                            <Switch>
                                <ProtectedRoute exact  path={["/", "/home"]} component={Home}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/register" component={Register}/>
                            </Switch>

                    </main>
                </BrowserRouter>
            </div>
      );
}

export default App;
