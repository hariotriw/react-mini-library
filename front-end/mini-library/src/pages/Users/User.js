import React from 'react';
import { Outlet } from 'react-router-dom';

const User = () => {

    return (
        <section className="content" id="available-apps" style={{ minHeight: "800px" }}>
			<div className="container py-5" >
				<Outlet/>

			</div>
		</section>
    )
}

export default User