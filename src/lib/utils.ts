import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export function handleScroll(e: Event, offset: number = 85): void {
	const target = e.currentTarget as HTMLElement | null;
	if (!target) return;
	const href = target.getAttribute('href');
	if (!href || !href.startsWith('#')) return;
	const targetId = href.slice(1);
	const targetElement = document.getElementById(targetId);
	if (targetElement) {
		e.preventDefault();
		const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
		const scrollTo = elementPosition - offset;
		window.scrollTo({ top: scrollTo, behavior: 'smooth' });
	}
}
