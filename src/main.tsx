import React from 'react'
import ReactDOM from 'react-dom/client'
//项目的跟组件
import App from './App.tsx'
import './index.css'
import {ConfigProvider} from "@arco-design/web-react";
import enUS from '@arco-design/web-react/es/locale/en-US';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ConfigProvider locale={enUS}>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </ConfigProvider>

)


