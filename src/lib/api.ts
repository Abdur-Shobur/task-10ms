import { env } from './env';

export async function getApiData<T>(url: string): Promise<T | null> {
	try {
		const res = await fetch(env.baseAPI + url, {
			headers: {
				'Content-Type': 'application/json',
				'X-TENMS-SOURCE-PLATFORM': 'web',
			},
			next: {
				revalidate: 3600,
			},
		});

		if (!res.ok) {
			throw new Error(`API Error ${res.status}: ${res.statusText}`);
		}

		const data = await res.json();
		return data;
	} catch (error) {
		throw error;
	}
}
