import { Button, Checkbox, Form, Input } from "antd";
import { KeyOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import KopraIcons from "../../assets/images/KopraIcon.png";
import Digicert from "../../assets/images/digicert.png";

function LoginForm() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <div className="Login-form">
        <img alt="kopraicons" src={KopraIcons} />
        <Form
          name="normal_login"
          className="login-form"
          style={{ width: 350, height: 300 }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="companyid"
            rules={[
              {
                required: true,
                message: "Please input your Company Id!",
              },
            ]}
          >
            <Input
              type="companyid"
              placeholder="Company ID"
              style={{
                borderRadius: 5,
                width: 300,
                height: 45,
                borderColor: "#a3c3e7",
                borderWidth: 1.5,
              }}
            />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              placeholder="Username"
              style={{
                borderRadius: 5,
                marginTop: 5,
                width: 300,
                height: 45,
                borderColor: "#a3c3e7",
                borderWidth: 1.5,
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              type="password"
              placeholder="Password"
              style={{
                borderRadius: 5,
                width: 300,
                height: 45,
                borderColor: "#a3c3e7",
                borderWidth: 1.5,
              }}
            />
          </Form.Item>
          <Form.Item>
            <Link to="/Mainpages">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{
                  width: 300,
                  borderRadius: 20,
                  background: "#fcb700",
                  fontWeight: "bolder",
                  color: "#0057e7",
                  height: 40,
                }}
              >
                <KeyOutlined style={{ fontSize: 20 }} rotate={180} />
                Login
              </Button>
            </Link>
          </Form.Item>
        </Form>
        <img
          alt="digicert"
          src={Digicert}
          style={{ marginLeft: -250, marginTop: -40, width: 60, height: 35 }}
        />
      </div>
    </>
  );
}

export default LoginForm;
