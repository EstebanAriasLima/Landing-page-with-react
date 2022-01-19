import React from "react";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
				<div className="container">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<div className="row">
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<a className="nav-link" href="#">
										Home{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										About
									</a>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="navbarDropdown"
										role="button"
										data-toggle="dropdown"
										aria-expanded="false">
										Service
									</a>
									<div
										className="dropdown-menu"
										aria-labelledby="navbarDropdown">
										<a className="dropdown-item" href="#">
											Contact
										</a>
										<a className="dropdown-item" href="#">
											Another action
										</a>
										<div className="dropdown-divider"></div>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</div>
								</li>
								<li className="nav-item">
									<a className="nav-link disabled">Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
