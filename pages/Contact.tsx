import Layout from "../components/Layout";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Contact: NextPage = () => {
	const [disabled, setDisabled] = useState(false);

	const check = (e: any) => {
		setDisabled(e.target.value);
	};

	const registerUser = async (e: any) => {
		e.preventDefault();

		const res = await fetch("/api/send", {
			body: JSON.stringify({
				name: e.target.name.value,
				incorporated: e.target.incorporated.value,
				email: e.target.email.value,
				message: e.target.message.value,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		const result = await res.json();
	};
	return (
		<Layout title="お問い合わせ">
			<div className={`w-screen`}>
				<div className={`h-2/3 w-80 mx-auto pt-32 pb-32`}>
					<h1 className={`text-2xl text-center mb-10 text-gray-500`}>
						お問い合わせ
					</h1>
					<form onSubmit={registerUser}>
						<div className={`flex justify-between`}>
							<label htmlFor="name" className={`text-gray-500`}>
								お名前
							</label>
							<input
								id="name"
								name="name"
								type="name"
								className={`w-48 rounded-2xl pl-2 border-2 border-gray-500`}
								placeholder="お名前"
								required
							/>
						</div>
						<div className={`flex justify-between mt-3`}>
							<label htmlFor="incorporated" className={`text-gray-500`}>
								御社名
							</label>
							<input
								id="incorporated"
								name="incorporated"
								type="incorporated"
								className={`w-48 rounded-2xl pl-2 border-2 border-gray-500`}
								placeholder="御社名"
								required
							/>
						</div>
						<div className={`flex justify-between mt-3`}>
							<label htmlFor="email" className={`text-gray-500`}>
								メールアドレス
							</label>
							<input
								id="email"
								name="email"
								type="email"
								className={`w-48 rounded-2xl pl-2 border-2 border-gray-500`}
								placeholder="name@example.com"
								required
							/>
						</div>
						<div className={`flex justify-between mt-3`}>
							<label htmlFor="message" className={`text-gray-500`}>
								お問合せ内容
							</label>
							<textarea
								id="message"
								name="message"
								className={`w-48 h-48 rounded-2xl pl-2 border-2 border-gray-500`}
								rows={3}></textarea>
						</div>
						<div className={`flex justify-center mt-5`}>
							<Link href="/">
								<a
									className={`ml-2 cursor-pointer hover:text-indigo-500 hover:border-indigo-500 text-gray-500 border-b-2`}>
									個人情報保護方針
								</a>
							</Link>
							<label>
								<p className={`text-gray-500`}>に同意する</p>
							</label>
							<input type="checkbox" className={`h-6 ml-2`} onChange={check} />
						</div>
						<div className={`text-center mt-5`}>
							<button
								disabled={!disabled}
								type="submit"
								className={`text-center h-11 w-32 bg-indigo-500 text-white rounded-3xl`}>
								送信
							</button>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
