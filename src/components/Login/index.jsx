import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
//import Captcha from "./Captcha";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const [captc, setCap]= useState("1234");

	
	
				   const characters ='ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrst0123456789';
				   function generateString(length) 
				   {
					   let result = '';
					   const charactersLength = characters.length;
					   for ( let i = 0; i < length; i++ ) {
						   result += characters.charAt(Math.floor(Math.random() * charactersLength));
					   }
					   result=result.toString();
					  return result;
					}

		const captcha =generateString(6);
		

				   function validcap(){
					const stg1 = document.getElementById('capt').value;
					const stg2 = document.getElementById('textinput').value;
					if(stg1===stg2){
					  return true;
					}else{
					  return false;
					}
				   }
			

	const handleChange = ({ currentTarget: input }) => {
		setCap("5678");
		setData({ ...data, [input.name]: input.value });
	};



	const handleSubmit = async (e) => {
		e.preventDefault();
		const v=validcap();
		if(v===true)
		{
		try {
			const url = "http://localhost:5000/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	}
	else{
		alert("captcha invalid");
	}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login As Admin</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						
				
						<label>Enter Captcha:</label>
							
							<div className={styles.input}>
							<input  class="form-control" readonly id="capt" value={captcha}/>
							</div>
							<div className={styles.input}>
							<input type="text" class="form-control" id="textinput"/>
							</div>


						<button type="submit" className={styles.green_btn}>
							Login
						</button>
					</form>


					
				</div>
				
				
			</div>
			
		</div>
		
	);
};

export default Login;