export function SectionTitle({ title }: { title?: string }) {
	if (!title) return null;
	return (
		<h2 className="text-xl xl:text-2xl font-bold text-stone-700 mb-4">
			{title || ''}
		</h2>
	);
}
