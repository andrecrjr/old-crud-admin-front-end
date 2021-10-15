import React from "react";
import { Admin, Resource, ListGuesser, CreateView } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { fetchHelper } from "../../services";
import CreateUser from "./Users/Create";
import { ListUser } from "./Users/ListUser";

const dataProvider = {
	getList: async () => {
		const data = await fetchHelper("http://localhost:8000/users", "get");

		return { data: data, total: data.length };
	},
	create: async (resource, params) => {
		const userData = await fetchHelper(
			"http://localhost:8000/users",
			"post",
			params.data
		);
		console.log(userData);
		return { data: userData };
	},
};

const Dashboard = () => {
	return (
		<Admin dataProvider={dataProvider}>
			<Resource name='users' list={ListUser} create={CreateUser} />
		</Admin>
	);
};

export default Dashboard;
