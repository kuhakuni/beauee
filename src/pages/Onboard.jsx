import { Link } from "react-router-dom";

const Onboard = () => {
	const Button = ({ to, children }) => {
		return (
			<Link
				to={to}
				className="px-6 py-2 uppercase bg-gray-200 rounded-full font-semibold shadow-md"
			>
				{children}
			</Link>
		);
	};

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="shadow-lg p-10">
				<h1 className="text-4xl mb-10">Hello Georgeous!</h1>
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
