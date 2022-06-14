import type { NextPage } from "next";
import { name } from "../pages/index";
import { FiTwitter, FiInstagram } from "react-icons/fi";

const Footer: NextPage = () => {
	return (
		<div className={`absolute w-screen text-md bottom-0 h-16 bg-gray-300`}>
			<h2 className={`absolute top-5 left-8 md:left-16`}>{name}</h2>
			<div className={`absolute top-5 right-8 md:right-16`}>
				<FiTwitter className={`h-6 w-6 absolute right-4 md:right-8`} />
				<FiInstagram className={`h-6 w-6 absolute right-16 md:right-24`} />
			</div>
		</div>
	);
};

export default Footer;
