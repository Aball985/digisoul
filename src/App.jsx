import Homepage from "./pages/Homepage/Homepage.component";
import styles from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar.component";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}
