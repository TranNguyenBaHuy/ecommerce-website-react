import { useState, type FormEvent } from "react";

interface LoginFormProps {
  onClose?: () => void;
  onForgotPassword: () => void;
  onRegister: () => void;
}

const LoginForm = ({ onClose, onForgotPassword, onRegister }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Vui lòng nhập email/số điện thoại và mật khẩu");
      return;
    }

    //Hook 
    console.log("Login with", { email, password });
    alert("Đăng nhập thành công (demo)");
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/20 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white/90 backdrop-blur-xl w-full max-w-md rounded-2xl shadow-2xl border border-white/20 p-6 relative" onClick={(e) => e.stopPropagation()}>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
            aria-label="Đóng"
          >
            ×
          </button>
        )}
        <h2 className="text-2xl font-bold text-center mb-4 text-[#00b14f] mt-2">
          Đăng nhập
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email hoặc số điện thoại"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00b14f]"
            />
          </div>
          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
                className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#00b14f]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800"
                aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              >
                {showPassword ? "Ẩn" : "Hiện"}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#00b14f] text-white font-semibold py-2 rounded-md hover:bg-[#02a347] transition-colors"
          >
            Tiếp tục
          </button>

          <div className="flex items-center justify-between text-sm">
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-[#00b14f] hover:underline"
            >
              Quên mật khẩu?
            </button>
            <button
              type="button"
              onClick={onRegister}
              className="text-[#00b14f] hover:underline"
            >
              Tạo tài khoản ngay
            </button>
          </div>

          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-gray-500">hoặc</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full border border-gray-300 bg-white text-gray-800 font-medium py-2 rounded-md hover:bg-gray-50 transition-colors"
            onClick={() => alert("Google Sign-In demo")}
          >
            Đăng nhập với Google
          </button>
        </form>
        <p className="mt-3 text-[11px] text-gray-500 text-center leading-snug">
          Bằng việc tiếp tục, bạn đã đồng ý Điều khoản & Chính sách bảo mật của
          chúng tôi.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
