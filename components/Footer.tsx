import type { NextPage } from "next";
import { name } from "../pages/index";
import { FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import Link from "next/link";

const Footer: NextPage = () => {
	return (
		<div
			className={`flex justify-between items-center px-16 w-screen text-sm md:text-lg h-16 bg-gray-300`}>
			<div className={`w-1/2 flex justify-start`}>
				<h2>{name}</h2>
			</div>
			<div className={`flex justify-end w-1/2`}>
				<Link href="/">
					<a>
						<FiTwitter className={`h-6 w-6 mr-4 md:mr-12`} />
					</a>
				</Link>
				<Link href="/">
					<a>
						<FiInstagram className={`h-6 w-6 mr-4 md:mr-12`} />
					</a>
				</Link>
				<Link href="/">
					<a>
						<FiYoutube className={`h-6 w-6`} />
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
