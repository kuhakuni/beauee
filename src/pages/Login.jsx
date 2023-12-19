import { Link } from "react-router-dom";
const Login = () => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="shadow-lg p-10">
				<h1 className="text-4xl mb-10 text-center font-bold">Masuk</h1>
				<div className="flex items-center flex-col gap-y-5 ">
					<form className="flex flex-col">
						<div className="flex flex-col gap-y-3 mb-5">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								id="email"
								className="border border-black px-3 py-2 w-96"
							/>
						</div>
						<div className="flex flex-col gap-y-3 mb-3">
							<label htmlFor="password">Kata Sandi</label>
							<input
								type="password"
								name="password"
								id="password"
								className="border border-black px-3 py-2 "
							/>
						</div>
						<p className="text-sm mb-10">Lupa kata sandi?</p>
						<Link
							to={"/dashboard"}
							className="bg-[#FD4E5D] text-white py-2 w-fit px-14 self-center font-semibold"
						>
							Masuk
						</Link>
						<div className="self-center flex flex-row gap-x-2 mt-5">
							<p>Belum punya akun?</p>
							<Link to="/register" className="underline text-gray-500">
								Daftar sekarang
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
