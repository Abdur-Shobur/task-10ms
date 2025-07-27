'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

interface NextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children: React.ReactNode;
}

export default function NextLink({ href, children, ...props }: NextLinkProps) {
	const params = useParams() as { lang?: string };
	const lang = params?.lang || 'en';
	const pathName = usePathname();

	const isExternal = href.startsWith('http');
	const isAlreadyPrefixed = href.startsWith(`/${lang}/`) || href === `/${lang}`;

	const prefixedHref =
		isExternal || isAlreadyPrefixed || href.startsWith(`/${lang}?`)
			? href
			: `/${lang}${href.startsWith('/') ? href : `/${href}`}`;

	const isActive = pathName === `/${lang}${href}`;

	return (
		<Link
			href={prefixedHref}
			{...props}
			className={cn(isActive ? 'text-blue-500 font-bold' : '', props.className)}
		>
			{children}
		</Link>
	);
}
