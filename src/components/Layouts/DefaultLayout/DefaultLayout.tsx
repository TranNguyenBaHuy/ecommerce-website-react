import { useState, type PropsWithChildren } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LoginForm from "../../Auth/LoginForm";
import ForgotPasswordForm from "../../Auth/ForgotPasswordForm";
import RegisterForm from "../../Auth/RegisterForm";

type AuthView = "login" | "forgot" | "register" | null;

const DefaultLayout = ({ children }: PropsWithChildren) => {
  const [authView, setAuthView] = useState<AuthView>(null);

  const closeAuth = () => setAuthView(null);

  return (
    <>
      <div>
        <Header onLoginClick={() => setAuthView("login")} />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </div>
      {authView === "login" && (
        <LoginForm
          onClose={closeAuth}
          onForgotPassword={() => setAuthView("forgot")}
          onRegister={() => setAuthView("register")}
        />
      )}
      {authView === "forgot" && (
        <ForgotPasswordForm
          onClose={closeAuth}
          onBackToLogin={() => setAuthView("login")}
        />
      )}
      {authView === "register" && (
        <RegisterForm
          onClose={closeAuth}
          onBackToLogin={() => setAuthView("login")}
        />
      )}
    </>
  );
};

export default DefaultLayout;
