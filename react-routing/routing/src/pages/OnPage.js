import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export const OnPage = () => {
	const {state: eachPost} = useLocation();
	console.log('eachPost', eachPost);

	return (
		<>
			{eachPost && (
				<>
					<h1>{eachPost.title}</h1>
					<p>{eachPost.body}</p>
				</>
			)}</>
	)
}
