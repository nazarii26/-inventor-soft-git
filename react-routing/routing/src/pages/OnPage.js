import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import '../App.css';

export const OnPage = () => {
	const { state: eachPost } = useLocation();
	const post = '<- posts';

	return (
		<>
			{eachPost && (
				<>
					<h1>{eachPost.title}</h1>
					<p>{eachPost.body}</p>
					<NavLink to="/posts" className="button-link"> {post} </NavLink>
				</>
			)}</>
	)
}
