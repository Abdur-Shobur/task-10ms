import React from 'react';

export function Header() {
	return (
		<header className="bg-white shadow-sm">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<div className="flex items-center">
					<img
						src="https://cdn.10minuteschool.com/images/logo.png"
						alt="10 Minute School"
						className="h-10"
					/>
				</div>
				<nav className="hidden md:flex space-x-8">
					<a href="#" className="text-gray-700 hover:text-blue-600">
						Home
					</a>
					<a href="#" className="text-gray-700 hover:text-blue-600">
						Courses
					</a>
					<a href="#" className="text-gray-700 hover:text-blue-600">
						About
					</a>
					<a href="#" className="text-gray-700 hover:text-blue-600">
						Contact
					</a>
				</nav>
				<div className="flex items-center space-x-4">
					<button className="md:hidden text-gray-700">
						<i className="fas fa-bars text-xl"></i>
					</button>
					<button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
						Login
					</button>
				</div>
			</div>
		</header>
	);
}
