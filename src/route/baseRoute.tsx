import LoginView from "../views/login/LoginView.tsx";
import AdminView from "../views/admin/AdminView.tsx";


//创建一个基础路由配置并导出
const baseRoute = [
    {
        path: "/",
        element: <LoginView />
    },
    {
        path: "/admin/*",
        element: <AdminView />,
        children: [
            {
                path: "dashboard",
                element: <div>Dashboard</div>
            }
        ]
    }
]

export default baseRoute;