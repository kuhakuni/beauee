import { Link } from "react-router-dom";

const Onboard = () => {
	const Button = ({ to, children }) => {
		return (
			<Link
				to={to}
				className="px-6 py-2 uppercase bg-gray-200 rounded-full font-semibold shadow-md text-[#1E3D16] hover:bg-gray-300 transition-all"
			>
				{children}
			</Link>
		);
	};

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="shadow-lg p-10">
				<h1 className="text-4xl font-bold text-[#20303C]">Hello Georgeous!</h1>
				<img src="/assets/Logo.png" alt="Logo" className="w-[300px] my-2" />
				<div className="flex items-center flex-col gap-y-5 ">
					<Button to="/login">Log in</Button>
					<p>Or</p>
					<Button to="/register">sign up</Button>
				</div>
			</div>
		</div>
	);
};

export default Onboard;
