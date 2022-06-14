import Layout from "../components/Layout";
import type { NextPage } from "next";
import { FiMail } from "react-icons/fi";

const Contact: NextPage = () => {
	return (
		<Layout title="お問い合わせ">
			<div className={`w-screen h-screen absolute top-32`}>
				<div>
					<h1 className={`text-xl text-center`}>お問い合わせ</h1>
				</div>
				<div className={`flex ml-8 mt-5`}>
					<small>御社名</small>
					<input
						className={`border-b-2 border-indeigo-500 outline-none ml-12`}
					/>
				</div>
				<div className={`flex ml-8 mt-5`}>
					<small>お名前</small>
					<input
						className={`border-b-2 border-indeigo-500 outline-none ml-12`}
					/>
				</div>
				<div className={`flex ml-8 mt-5`}>
					<small className={`flex`}>メール</small>
					<input
						className={`border-b-2 border-indeigo-500 outline-none ml-12`}
					/>
				</div>
				<div className={`flex flex-col ml-8 mt-8`}>
					<small>お問い合わせ内容</small>
					<textarea
						className={`border-2 border-indeigo-500 outline-none h-16 w-64`}
					/>
				</div>
				<div className={`text-center mt-2`}>
					<input type="radio" />
				</div>
				<div className={`text-center mt-2`}>
					<button className={`bg-indigo-500 text-white py-2 px-4`}>送信</button>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
