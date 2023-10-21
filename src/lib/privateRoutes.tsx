import { de } from "date-fns/locale"
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom";
import Switch from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom"

const PrivateRoutes = () => {
    const user = false
    return user ? <Outlet /> : <Navigate to="/login" />
}
export { Router, Route, Switch };
export default PrivateRoutes;
