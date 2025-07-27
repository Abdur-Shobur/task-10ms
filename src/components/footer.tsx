import Image from 'next/image';

export function Footer() {
	return (
		<footer className="bg-gray-800 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
					<div>
						<Image
							src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
							alt="10 Minute School"
							className="h-10 mb-4 invert"
							width={100}
							height={100}
						/>
						<p className="text-gray-400">
							Bangladesh&apos;s largest online learning platform
						</p>
					</div>
					<div>
						<h4 className="font-bold mb-4">Courses</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									Skills
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									Academic
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									Admission
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									Professional
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold mb-4">Company</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									Careers
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									Blog
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold mb-4">Connect With Us</h4>
						<div className="flex space-x-4 mb-4">
							<a href="#" className="text-gray-400 hover:text-white">
								<i className="fab fa-facebook-f text-xl"></i>
							</a>
							<a href="#" className="text-gray-400 hover:text-white">
								<i className="fab fa-youtube text-xl"></i>
							</a>
							<a href="#" className="text-gray-400 hover:text-white">
								<i className="fab fa-instagram text-xl"></i>
							</a>
							<a href="#" className="text-gray-400 hover:text-white">
								<i className="fab fa-linkedin-in text-xl"></i>
							</a>
						</div>
						<p className="text-gray-400">Call: 16910</p>
						<p className="text-gray-400">Email: support@10minuteschool.com</p>
					</div>
				</div>
				<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
					<p>© 2025 10 Minute School. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
