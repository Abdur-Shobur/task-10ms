'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageSwitch() {
	const params = useParams() as { lang: string };
	const pathname = usePathname();
	const router = useRouter();

	const currentLang = params?.lang || 'en';

	// Replace only the lang prefix in the URL
	const switchLanguage = (lang: string) => {
		if (lang === currentLang) return;

		// Remove current lang from pathname, then prepend the new lang
		const newPath = pathname.replace(`/${currentLang}`, `/${lang}`);
		router.push(newPath);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">{currentLang.toUpperCase()}</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-32">
				<DropdownMenuLabel>Language</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => switchLanguage('en')}>
					English
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => switchLanguage('bn')}>
					Bangla
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
