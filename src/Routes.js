import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import Maine from "./pages/main/Main";
import Escalas from "./Pages/Escalas/Escalas";
import NotFound from "./Pages/Not_FOUND/Not_Found";

const baseUrl = () => `/${window.location.pathname.split('/')[1]}`;

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={
//       props => isAuthenticated() ?
//         (<Component {...props} />)
//         :
//         (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
//     }
//   />
// );

//<Dispensacao></Dispensacao>
const Rotas = () => (
    //basename={baseUrl()}
    <Router >
        <Routes>
            <Route exact path="/escalas" element={<Escalas />} />         
            {/* <PrivateRoute path="/local" component={Maine}/> */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
);

export default Rotas;