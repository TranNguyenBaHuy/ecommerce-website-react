import { useState, type FormEvent } from "react";

interface RegisterFormProps {
  onClose?: () => void;
  onBackToLogin: () => void;
}

const RegisterForm = ({ onClose, onBackToLogin }: RegisterFormProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName || !email || !phone || !password || !confirmPassword) {
      setError("Vui lòng điền đầy đủ thông tin");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }

    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }

    //Hook
    console.log("Register with", { fullName, email, phone, password });
    alert("Đăng ký thành công (demo)");
    onBackToLogin();
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/20 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white/90 backdrop-blur-xl w-full max-w-md rounded-2xl shadow-2xl border border-white/20 p-6 relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
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
          Tạo tài khoản
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Họ và tên"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00b14f]"
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00b14f]"
            />
          </div>
          <div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Số điện thoại"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00b14f]"
            />
          </div>
          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu"
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
          <div>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Xác nhận mật khẩu"
                className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#00b14f]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800"
                aria-label={showConfirmPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              >
                {showConfirmPassword ? "Ẩn" : "Hiện"}
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
            Đăng ký
          </button>

          <div className="text-center text-sm">
            <span className="text-gray-600">Đã có tài khoản? </span>
            <button
              type="button"
              onClick={onBackToLogin}
              className="text-[#00b14f] hover:underline font-semibold"
            >
              Đăng nhập ngay
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
            onClick={() => alert("Google Sign-Up demo")}
          >
            Đăng ký với Google
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

export default RegisterForm;
