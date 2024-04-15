//权限组件
import {Navigate, useLocation} from "react-router-dom";
import {ReactNode,FC} from "react";


interface PermissionProps {
    children?: ReactNode
}
//定义一个函数private是FC类型，指定泛型为PrivateProps，props来自父组件的传参，children是嵌套类型
const Permission:FC<PermissionProps>=(props) => {
    const token = localStorage.getItem('token');
    const location = useLocation()
    if (token) {
        return <>{props.children}</>
    } else {
        //return <Navigate to={{path: "/", search: "?redirect=" + location.pathname}}></Navigate>
        //return <Navigate to={{pathname: "/login", search: "?redirect=" + location.pathname}}></Navigate>
        //跳转到首页，添加redirect查询参数
        return <Navigate to={'/?redirect=' + location.pathname}></Navigate>
    }
}

export default Permission;