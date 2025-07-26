import { iGetLanguage } from '@/types/language';

const language: iGetLanguage = {
	en: {
		name: 'English',
		special_offer: 'Our special offer is running now!',
		set_retting: '82.6% of students in the course have given 5 rating',
		have_this_course: 'Included in this course',
	},
	bn: {
		name: 'বাংলা',
		special_offer: 'স্পেশাল অফার চলছে',
		set_retting: '82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন',
		have_this_course: 'এই কোর্সে যা থাকছে',
	},
};

export const getLanguage = (lang: string) => {
	if (!lang || !Object.keys(language).includes(lang)) {
		return language.en;
	}
	return language[lang] || language.en;
};
