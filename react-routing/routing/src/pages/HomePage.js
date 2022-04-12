import React from 'react'


export const HomePage = ({logout}) => {
  return (
	 <>
   <h1 className="center-text">Hi, you are logged in</h1>
   <button onClick={logout}>Log out</button>
   </>
  )
}

