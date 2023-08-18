import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./layout/main";
import Cars from "./components/Cars/Cars";
import Car from "./components/Car/Car";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Cars />} />
				<Route path='/car/:carid' element={<Car />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
