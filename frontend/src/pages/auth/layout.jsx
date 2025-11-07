import {Outlet} from "react-router-dom"

function AuthLayout() {
	return (
		<main className="flex flex-row w-full min-h-screen">
			<aside className="relative w-3/6 border-r-3 border-blue-500 bg-blue-500 flex flex-col">
				<div className="absolute w-full h-full top-0 left-0">
					<img className="w-full h-full object-cover" src="https://img.redbull.com/images/c_fill,g_auto,w_1200,h_630/f_auto,q_auto/redbullcom/2016/04/26/1331791312865_2/lan-house-na-max5-tem-120-pcs-atualmente" alt="" />
					<div className="absolute w-full h-full top-0 left-0 bg-black/70" />
				</div>
			</aside>
			<Outlet />
		</main>
	)
}

export default AuthLayout;
