import type { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import {
	FiHome,
	FiBookOpen,
	FiTrendingUp,
	FiMail,
	FiTwitter,
	FiInstagram,
	FiYoutube,
} from "react-icons/fi";

const Nav: NextPage = () => {
	const [active, setActive] = useState(false);

	const open = () => {
		setActive(!active);
	};
	return (
		<div>
			<nav
				className={`absolute block top-0 bottom-0 bg-white duration-700 opacity-0 z-10 w-2/3 -left-80 ${
					active ? "left-0 opacity-100" : ""
				}`}>
				<div className={`p-6 ${!active ? "hidden" : ""}`}>
					<ul className={`list-none text-lg`}>
						<li>
							<Link href="/">
								<a
									className={`flex text-gray-500 p-4 duration-300 hover:bg-indigo-300 hover:text-white`}>
									<FiHome
										className={`h-6 w-6 mr-3 hover:bg-indigo-300 hover:text-white`}
									/>
									Home
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a
									className={`flex text-gray-500 p-4 duration-300 hover:bg-indigo-300 hover:text-white`}>
									<FiBookOpen
										className={`h-6 w-6 mr-3 hover:bg-indigo-300 hover:text-white`}
									/>
									できること
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a
									className={`flex text-gray-500 p-4 duration-300 hover:bg-indigo-300 hover:text-white`}>
									<FiTrendingUp
										className={`h-6 w-6 mr-3 hover:bg-indigo-300 hover:text-white`}
									/>
									会社概要
								</a>
							</Link>
						</li>
						<div className={`flex`}>
							<li>
								<Link href="/Contact/">
									<a
										className={`flex text-gray-500 p-4 duration-300 hover:bg-indigo-300 hover:text-white`}>
										<FiMail
											className={`h-5 w-5 hover:bg-indigo-300 hover:text-white`}
										/>
									</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a
										className={`flex text-gray-500 p-4 duration-300 hover:bg-indigo-300 hover:text-white`}>
										<FiInstagram
											className={`h-5 w-5 hover:bg-indigo-300 hover:text-white`}
										/>
									</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a
										className={`flex text-gray-500 p-4 duration-300 hover:bg-indigo-300 hover:text-white`}>
										<FiTwitter
											className={`h-5 w-5 hover:bg-indigo-300 hover:text-white`}
										/>
									</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a
										className={`flex text-gray-500 p-4 duration-300 hover:bg-indigo-300 hover:text-white`}>
										<FiYoutube
											className={`h-5 w-5 hover:bg-indigo-300 hover:text-white`}
										/>
									</a>
								</Link>
							</li>
						</div>
					</ul>
				</div>
			</nav>
			<div className={`h-16 w-full bg-indigo-500 hidden lg:flex justify-end`}>
				<nav className={`w-1/2 text-white`}>
					<ul className={`flex justify-between h-16 items-center text-md mr-16`}>
						<li>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>できること</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>会社概要</a>
							</Link>
						</li>
						<li>
							<Link href="/Contact/">
								<a>
									<FiMail className={`h-6 w-6`} />
								</a>
							</Link>
						</li>
						{/* <li>
							<Link href="/">
								<a>
									<FiInstagram className={`h-6 w-6`} />
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>
									<FiTwitter className={`h-6 w-6`} />
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>
									<FiYoutube className={`h-6 w-6`} />
								</a>
							</Link>
						</li> */}
					</ul>
				</nav>
			</div>
			<div className={`h-16 w-full bg-indigo-500 block lg:hidden`}>
				<div
					className={`absolute top-3 right-8 h-8 w-8 z-10 cursor-pointer`}
					onClick={open}>
					<span
						className={`absolute block left-0 w-8 h-1 bg-white duration-500 rounded top-1 ${
							active ? "translate-y-2.5 rotate-45" : ""
						}`}></span>
					<span
						className={`absolute block left-0 w-8 h-1 bg-white duration-500 rounded top-3.5 ${
							active ? "opacity-0" : ""
						}`}></span>
					<span
						className={`absolute block left-0 w-8 h-1 bg-white duration-500 rounded top-6 ${
							active ? "-translate-y-2.5 -rotate-45" : ""
						}`}></span>
				</div>
			</div>
			<div
				className={`${
					active
						? "bg-indigo-300 opacity-10 h-screen w-full block top-0 left-0 fixed cursor-pointer"
						: "duration-500"
				}`}
				onClick={open}></div>
		</div>
	);
};

export default Nav;
