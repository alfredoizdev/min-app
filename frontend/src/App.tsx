import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cars from "./components/Cars/Cars";
import Car from "./components/Car/Car";
import Login from "./components/auth/login";
import GuardRouter from "./Guard/GuardRouter";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route
						index
						element={
							<GuardRouter>
								<Cars />
							</GuardRouter>
						}
					/>
					<Route
						path='/car/:carid'
						element={
							<GuardRouter>
								<Car />
							</GuardRouter>
						}
					/>
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
