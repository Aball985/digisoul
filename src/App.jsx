import Homepage from "./pages/Homepage/Homepage.component";
import styles from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar.component";
import { Switch, Route } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

const renderThumb = () => {
  const thumbStyle = {
    borderRadius: 6,
    width: "0.45rem",
    backgroundColor: "#fff",
  };
  return <div style={{ ...thumbStyle }} />;
};

export default function App() {
  return (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      thumbSize={200}
      autoHide
      autoHideTimeout={1000}
      style={{ height: "100vh" }}
      universal
    >
      <div className={styles.App}>
        <Navbar />
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Scrollbars>
  );
}
