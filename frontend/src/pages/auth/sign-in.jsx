import { useState } from "react";
import Form from "../../components/Form";
import { FaExclamation, FaCheck } from "react-icons/fa"

function SignInPage() {

	const [signInData, setSignInData] = useState({
		email: "",
		password: "",
	})


	const [loading, setLoading] = useState(false)


	const handleLogin = async (e) => {
		e.preventDefault();

		if (!signInData.email || !signInData.password) {
			console.log("error", "Por favor, preencha todos os campos!", FaExclamation);
			return;
        }

		try {
			setLoading(true)
			console.log("success", "Logado com sucesso!", FaCheck)


		} catch(err) {
			console.error(err)


		} finally {
			setLoading(false)
			setSignInData({
				email: "",
				password: ""
			})
		}

	};


	return (
		<main className="w-full h-auto flex items-center justify-center">
			<Form.FormRoot className={"w-72 space-y-4 flex flex-col justify-center"} onSubmit={handleLogin}>
				<Form.FormHeader>
					<Form.FormTitle className="text-center text-2xl" title="Entrar" />
				</Form.FormHeader>
				<Form.FormLabel >
					<Form.FormInput
						className="w-full"
						name="email"
						value={signInData.email}
						onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
						placeholder="example@email.com"
						type="email"
						required
					/>
				</Form.FormLabel>
				<Form.FormLabel>
					<Form.FormInput
						className="w-full"
						name="password"
						value={signInData.password}
						onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
						placeholder="********"
						type="password"
						required
					/>
				</Form.FormLabel>
				<Form.FormButton
					type="submit"
					className={loading ? "bg-blue-600" : "bg-blue-500"}
					label={loading ? "Entrando..." : "Entrar"}
					disabled={loading}
        		/>
			</Form.FormRoot>
		</main>
	)
}

export default SignInPage;
