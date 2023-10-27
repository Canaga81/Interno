import { myRoutes } from "../MyRoutes";
import { Routes } from "react-router";
import { Route } from "react-router";

const Routing = () => {
    return (
        <div>
            <Routes>
                {
                    myRoutes.map( ( {id, path, element} ) => {
                        return (
                            <Route key={id} path={path} element={element} />
                        )
                    })
                }
            </Routes>
        </div>
    );
};

export default Routing;