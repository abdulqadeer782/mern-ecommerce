import React from "react";
import { Form, Input, Button, Layout, Card, Typography } from "antd";
import axios from "axios";

const Login = () => {
    const onFinish = (values) => {
        axios.post('http://localhost:8077/api/login', values).then((res) => {
            console.log('from here', res.data)
        }).catch((err) => {
            console.log(err.response)
        })
    };

    return (
        <Layout style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card
                title={<div style={{ textAlign: 'center' }}>
                    <Typography.Title level={2} style={{ margin: "10px 0" }}>Sign In</Typography.Title>
                </div>}
                style={{ width: '50%' }}
            >
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    size="large"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!",
                            },
                            {
                                type: "email",
                                message: "The input type is email!",
                            },
                        ]}
                    >
                        <Input placeholder="Please input your email!" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password placeholder="Please input your password!" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Layout>
    );
};

export default Login;
