import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import './../App.css';

export const Layout = () => {
	return (
		<>
			<div className="container">
				<header>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/posts">Posts</NavLink>
				</header>
				<Outlet />
				<footer> <p className="footer-name">Nazarii Pirih</p></footer>
			</div>
		</>

	);
};
