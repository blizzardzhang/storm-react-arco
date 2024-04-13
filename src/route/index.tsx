import {useRoutes} from "react-router-dom";
import baseRoute from "./baseRoute.tsx";

function RouterView() {
    //创建路由
    const element = useRoutes(baseRoute)
    //返回创建好的元素
    return(
        <>
            {element}
        </>
    )
}

export default RouterView;