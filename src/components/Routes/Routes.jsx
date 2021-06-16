import { Route } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage.component";
export default function Routes() {
  return (
    <Route path="/">
      <Homepage />
    </Route>
  );
}
