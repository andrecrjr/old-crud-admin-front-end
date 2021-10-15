import React from "react";
import {
	Create,
	SimpleForm,
	TextInput,
	PasswordInput,
	CheckboxGroupInput,
	ChoicesInputProps,
	SelectInput,
} from "react-admin";

function CreateUser(props) {
	return (
		<Create {...props}>
			<SimpleForm>
				<TextInput source='username' placeholder={"Login do usuário"} />
				<PasswordInput source='password' placeholder={"******"} />
				<TextInput source='name' placeholder={"Nome do usuario"} />
				<TextInput source='cpf' placeholder={"CPF do usuário"} />
				<TextInput
					label={"E-mail"}
					source='email'
					placeholder={"Email do usuario"}
				/>
				<SelectInput
					label='Is admin'
					source='isAdmin'
					choices={[{ id: true, name: "isAdmin" }]}
				/>
			</SimpleForm>
		</Create>
	);
}

export default CreateUser;
