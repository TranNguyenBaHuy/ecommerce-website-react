import { useState, type FormEvent } from "react";

interface ForgotPasswordFormProps {
  onClose?: () => void;
  onBackToLogin: () => void;
}

const ForgotPasswordForm = ({ onClose, onBackToLogin }: ForgotPasswordFormProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError("Vui lòng nhập email hoặc số điện thoại");
      return;
    }

    //Hook
    console.log("Reset password for", email);
    setSuccess(true);
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
          Quên mật khẩu
        </h2>

        {success ? (
          <div className="text-center py-6">
            <div className="text-green-600 text-5xl mb-4">✓</div>
            <p className="text-gray-700 mb-4">
              Chúng tôi đã gửi link đặt lại mật khẩu đến email/số điện thoại của bạn.
            </p>
            <button
              onClick={onBackToLogin}
              className="w-full bg-[#00b14f] text-white font-semibold py-2 rounded-md hover:bg-[#02a347] transition-colors"
            >
              Quay lại đăng nhập
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <p className="text-sm text-gray-600 text-center mb-4">
              Nhập email hoặc số điện thoại của bạn để nhận link đặt lại mật khẩu
            </p>
            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email hoặc số điện thoại"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00b14f]"
              />
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
              Gửi link đặt lại mật khẩu
            </button>

            <button
              type="button"
              onClick={onBackToLogin}
              className="w-full text-[#00b14f] hover:underline text-sm"
            >
              ← Quay lại đăng nhập
            </button>
          </form>
        )}

        <p className="mt-3 text-[11px] text-gray-500 text-center leading-snug">
          Bằng việc tiếp tục, bạn đã đồng ý Điều khoản & Chính sách bảo mật của
          chúng tôi.
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
