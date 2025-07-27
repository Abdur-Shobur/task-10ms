import Image from 'next/image';
import { LanguageSwitch } from './language-switch';
import NextLink from './link';

export function Header() {
	return (
		<header className="bg-white shadow-sm">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<div className="flex items-center">
					<NextLink href="/product">
						<Image
							src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
							alt="10 Minute School"
							className="h-10"
							width={100}
							height={100}
						/>
					</NextLink>
				</div>
				<nav className="hidden md:flex space-x-8">
					<NextLink href="/product">All Courses</NextLink>
					<NextLink href="/product/ielts-course">Ielts Courses</NextLink>
					<NextLink href="/product/spoken-and-grammar-bundle-course">
						Spoken English
					</NextLink>
					<NextLink href="/product/kids-english-programme">
						Kids English
					</NextLink>
					<NextLink href="/product/class-10-bangla-english-ict-math-for-ssc-2026">
						Class 10
					</NextLink>
				</nav>
				<div className="flex items-center space-x-4">
					<LanguageSwitch />
				</div>
			</div>
		</header>
	);
}
