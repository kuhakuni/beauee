import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
	faInstagram,
	faTwitter,
	faYoutube,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
	const Title = ({ title }) => {
		return (
			<h1 className="font-bold text-3xl text-center uppercase mb-20">
				{title}
			</h1>
		);
	};
	const Navbar = () => {
		return (
			<>
				<div className="flex flex-row justify-between px-10 items-center">
					<img src="/assets/Logo.png" alt="Logo" className="w-[150px]" />
					<div className="sm:flex hidden">
						<input
							type="text"
							placeholder="Cari.."
							className="px-3 py-2 w-[200px] bg-gray-100 rounded-s-md"
						/>
						<button className="bg-[#FD4E5D] text-white py-2 px-3 rounded-e-md">
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
				</div>
				<div className="bg-[#FDCEDF] flex w-full md:flex-row flex-col justify-between md:px-20 md:py-7 px-14 py-5 gap-y-2 shadow-md">
					<p className="font-bold underline uppercase">Home</p>
					<p>Categories</p>
					<p>Product</p>
					<p>Articles</p>
					<p>Best Seller</p>
					<p>Contact Us</p>
				</div>
			</>
		);
	};
	const Hero = () => {
		return (
			<div className="bg-secondary md:m-10 py-10 md:px-14 px-5">
				<p className="md:text-5xl text-3xl font-bold md:text-right text-center mb-5 md:mb-0">
					Beauee
				</p>
				<div className="grid md:grid-cols-2 items-center gap-x-8 gap-y-5">
					<img src="/assets/pic-left.png" alt="Hero" className="w-full" />
					<div>
						<img src="/assets/pic-right.png" alt="Hero" className="w-full" />
					</div>
				</div>
			</div>
		);
	};
	const CardCategory = ({ image }) => {
		return (
			<div className="bg-primary w-64 flex flex-col items-center py-10 my-10 md:my-5">
				<img
					src={`/assets/${image}.png`}
					alt="Logo"
					className="w-[150px] -my-20"
				/>
				<div className="flex flex-col px-5 items-center gap-y-3 mt-24">
					<p className="font-bold text-2xl">{image}</p>
					<p className="text-xs text-center">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
						reiciendis sit quod asperiores maiores atque?
					</p>
					<button className="bg-[#807878] hover:bg-gray-400 w-full text-white py-2 px-3 rounded-md mt-3 font-semibold">
						Beli Sekarang!
					</button>
				</div>
			</div>
		);
	};
	const Categories = () => {
		return (
			<div className="my-5">
				<Title title={"Categories"} />
				<div className="flex md:flex-row flex-col gap-x-10 items-center justify-evenly">
					<CardCategory image={"Face"} />
					<CardCategory image={"Body"} />
					<CardCategory image={"Hair"} />
				</div>
			</div>
		);
	};
	const Product = () => {
		return (
			<>
				<Title title={"Our Product"} />
				<div className="grid md:grid-cols-2 px-14 gap-x-10 gap-y-5">
					<img src="/assets/product-pic.png" alt="Our Product" />
					<div className="flex items-center flex-col text-center justify-center gap-y-3">
						<p className="font-bold text-xl">
							Elevate Your Beauty Ritual with Beauee
						</p>
						<p className="italic">
							where beauty meets innovation. Our carefully curated collection of
							beauty products is designed to transform your everyday routine
							into a luxurious and rejuvenating experience. Explore a world of
							premium skincare, makeup, and wellness items crafted with a
							perfect blend of science and nature.
						</p>
					</div>
				</div>
			</>
		);
	};
	const ArticleCard = () => {
		return (
			<div className="grid md:grid-cols-9 gap-x-5 px-5 border border-black py-3">
				<img
					src="/assets/article-img.png"
					alt=""
					className="w-full col-span-5"
				/>
				<div className="col-span-4 my-3">
					<p className="font-bold text-3xl">Headline</p>
					<p className="my-3">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
						dolorum quibusdam beatae neque. Asperiores, nihil autem repellendus
						quaerat dolore mollitia.
					</p>
					<button className="my-5 rounded-full border border-black shadow-lg px-5 py-1 font-bold text-[#373737]">
						More Info &gt;&gt;
					</button>
				</div>
			</div>
		);
	};
	const Article = () => {
		return (
			<div className="my-20">
				<Title title={"Our Articles"} />
				<div className="grid md:grid-cols-2 px-14 gap-10">
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
				</div>
			</div>
		);
	};
	const Footer = () => {
		return (
			<div className="px-14 py-8">
				<div className="grid md:grid-cols-7 gap-7 text-base">
					<div className="md:col-span-3 pr-5">
						<p className="font-semibold text-3xl mb-8">Beauee</p>
						<p className="text-gray-400">
							Kelompok 9 DDAP -E Sistem Informasi Universitas Brawijaya
						</p>
					</div>
					<div className="flex flex-col md:gap-y-8 gap-y-3 font-medium">
						<p className="text-gray-400">Links</p>
						<a className="hover:underline cursor-pointer">Home</a>
						<a className="hover:underline cursor-pointer">Shop</a>
						<a className="hover:underline cursor-pointer">About</a>
						<a className="hover:underline cursor-pointer">Contact</a>
					</div>
					<div className="flex flex-col md:gap-y-8 gap-y-3 font-medium">
						<p className="text-gray-400">Help</p>
						<a className="hover:underline cursor-pointer">Payment Options</a>
						<a className="hover:underline cursor-pointer">Customer Care</a>
						<a className="hover:underline cursor-pointer">Privacy Policies</a>
					</div>

					<div className="font-medium md:col-span-2 md:px-3">
						<p className="text-gray-400">Social Media</p>
						<div className="flex items-center gap-x-3 mt-5">
							<FontAwesomeIcon
								className="text-4xl hover:text-pink duration-100 cursor-pointer"
								icon={faInstagram}
							/>
							<FontAwesomeIcon
								className="text-4xl hover:text-pink duration-100 cursor-pointer"
								icon={faFacebook}
							/>
							<FontAwesomeIcon
								className="text-4xl hover:text-pink duration-100 cursor-pointer"
								icon={faYoutube}
							/>
							<FontAwesomeIcon
								className="text-4xl hover:text-pink duration-100 cursor-pointer"
								icon={faTwitter}
							/>
						</div>
					</div>
				</div>
				<hr className="my-8" />
				<p>2023 Beauee All rights reverved</p>
			</div>
		);
	};
	return (
		<>
			<Navbar />
			<Hero />
			<Categories />
			<Product />
			<Article />
			<Footer />
		</>
	);
};

export default Home;
