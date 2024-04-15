import {Button, Checkbox, Form, Input,notification} from 'antd';
import {LockOutlined, UserOutlined,CheckOutlined} from '@ant-design/icons';
import {login} from '../../api/login.ts'
import {LoginData} from "../../types.ts";

function LoginView() {
    const [form] = Form.useForm();
    //取消 清空表单
    const onReset =()=>{
        form.resetFields();
    }

    //表单成功提交方法
    const onFinish = async (values: LoginData) => {
        const res = await login(values);
        await processResponse(res);
    };
    const processResponse = async (res: any) => {
        if (res.code === 200) {
            // 登录成功
            localStorage.setItem('token', res.data.accessToken);
            notification.info({
                icon: <CheckOutlined/>,
                message: '登录成功',
                description: '欢迎回来'
            });
        }
    };


    return (
        <div className={"loginView"} >
            <div className={"loginBox"}>
                <h2 className={"primary"}>Code-Storm</h2>
                <Form
                    form={form}
                    name="normal_login"
                    className="login-form"
                    initialValues={{account: '18687316214',password: "code-storm",remember: true}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="account"
                        rules={[{required: true, message: '请输入账号'}]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="账号"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: '请输入密码'}]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住我</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            忘记密码？
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button-left">
                            登录
                        </Button>
                        <Button onClick={onReset} type="default"  className="login-form-button-right" >
                            取消
                        </Button>
                        或 <a href="">注册</a>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default LoginView;