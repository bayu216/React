import Top from "../component/Top/Top";
import "./index.css";
import BannerItem from "../component/BannerItem/BannerItem";
import LoginForm from "../component/LoginForm/LoginForm";

function LoginPages() {
  return (
    <>
      {/* Header */}
      <div className="Top-style">
        <Top />
      </div>
      {/* Main Item */}
      <div className="Body-item">
        <div className="Banner-style">
          <BannerItem />
        </div>
        <div className="Login">
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default LoginPages;
