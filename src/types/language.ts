export interface iGetLanguage {
	[key: string]: {
		name: string;
		special_offer: string;
		set_retting: string;
		have_this_course: string;
	};
}

export type LanParamsProps = {
	params: {
		lang: string;
	};
};
