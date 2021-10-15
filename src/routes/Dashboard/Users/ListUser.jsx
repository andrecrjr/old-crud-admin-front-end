import * as React from "react";
import {
	List,
	Datagrid,
	TextField,
	DateField,
	BooleanField,
} from "react-admin";

export const ListUser = (props) => {
	console.log(props);
	return (
		<List {...props}>
			<Datagrid>
				<TextField source='id' />
				<TextField source='email' />
				<TextField source='username' />
				<TextField source='name' />
				<TextField source='cpf' />
			</Datagrid>
		</List>
	);
};
