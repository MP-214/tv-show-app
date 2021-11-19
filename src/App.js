import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/**
 * Redux integration
 */
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers";
/**
 * Page integration
 */
import "../src/App.css";
import Home from "./pages/Home";
import SeasonShowComponent from "./component/Season/seasonShowComponent";
import DramaShowComponent from "./component/Drama/dramaShowComponent";
/**
 * Create an instance using the default constructor
 * @param {state} reducer Component props
 * @param {method} loggerMiddleware store props
 */
const loggerMiddleware = createLogger();

/**
 * Create an custom store the default constructor
 * @param {thunkMiddleware} redux react-redux props
 * @param {method} store store props
 */
// const store = createStore(
// 	reducers,
// 	applyMiddleware(thunkMiddleware, loggerMiddleware)
// );

const App = () => {
	return (
		//<Provider store={store}>
		<Router>
			<Routes>
				<Route exact path="/" component={Home} />
				<Route path="/shows/:id" component={SeasonShowComponent} />
				<Route path="/:name" component={DramaShowComponent} />
			</Routes>
		</Router>
		//</Provider>
	);
};

export default App;
