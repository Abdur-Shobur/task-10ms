export interface Media {
	name: string;
	resource_type: 'video' | 'image';
	resource_value: string;
	thumbnail_url?: string;
}

export interface Checklist {
	color: string;
	icon: string;
	id: string;
	list_page_visibility: boolean;
	text: string;
}

export interface Seo {
	defaultMeta: {
		content: string;
		type: string;
		value: string;
	}[];
	description: string;
	keywords: string[];
	schema: {
		meta_name: string;
		meta_value: string;
		type: string;
	}[];
	title: string;
}

export interface CtaText {
	name: string;
	value: string;
}

export interface ProductData {
	slug: string;
	id: number;
	title: string;
	description: string;
	media: Media[];
	checklist: Checklist[];
	seo: Seo;
	cta_text: CtaText;
	sections: Section[];
}

export interface iOfferType {
	background_color: string;
	background_img: string;
	checklist_text_color: string;
	end_at: string;
	id: string;
	start_at: string;
	template: string;
	text: string;
}
export interface iInstructorType {
	description: string;
	has_instructor_page: boolean;
	image: string;
	name: string;
	short_description: string;
	slug: string;
}

export interface iFeatureType {
	icon: string;
	id: string;
	subtitle: string;
	title: string;
}

export interface iGroupJoinType {
	background: {
		image: string;
		primary_color: string;
		secondary_color: string;
	};
	cta: {
		clicked_url: string;
		color: string;
		text: string;
	};
	description: string;
	description_color: string;
	id: string;
	thumbnail: string;
	title: string;
	title_color: string;
	top_left_icon_img: string;
}

export interface iPointerType {
	color: string;
	icon: string;
	id: string;
	text: string;
}

export interface iAboutType {
	description: string;
	icon: string;
	id: string;
	title: string;
}

export interface iFeatureExplanationType {
	checklist: string[];
	file_type: string;
	file_url: string;
	id: string;
	title: string;
	video_thumbnail: string;
}

export interface iTestimonialType {
	description: string;
	id: string;
	name: string;
	profile_image: string;
	testimonial: string;
	thumb?: string;
	video_type: string;
	video_url: string;
}

export interface iFaqType {
	answer: string;
	id: string;
	question: string;
}

interface BaseSection {
	id: number;
	title: string;
	description: string;
	order_idx: number;
	bg_color: number;
	name: string;
}

export interface OffersSection extends BaseSection {
	type: 'offers';
	values: iOfferType[];
}

export interface InstructorsSection extends BaseSection {
	type: 'instructors';
	values: iInstructorType[];
}

export interface FeaturesSection extends BaseSection {
	type: 'features';
	values: iFeatureType[];
}

export interface GroupJoinEngagementSection extends BaseSection {
	type: 'group_join_engagement';
	values: iGroupJoinType[];
}

export interface AboutSection extends BaseSection {
	type: 'about';
	values: iAboutType[];
}

export interface FeatureExplanationsSection extends BaseSection {
	type: 'feature_explanations';
	values: iFeatureExplanationType[];
}

export interface TestimonialsSection extends BaseSection {
	type: 'testimonials';
	values: iTestimonialType[];
}

export interface FaqSection extends BaseSection {
	type: 'faq';
	values: iFaqType[];
}

export interface PointersSection extends BaseSection {
	type: 'pointers';
	values: iPointerType[];
}

// Union type
export type Section =
	| OffersSection
	| InstructorsSection
	| FeaturesSection
	| GroupJoinEngagementSection
	| AboutSection
	| FeatureExplanationsSection
	| TestimonialsSection
	| FaqSection
	| PointersSection;

export type SectionTypeMap = {
	instructors: InstructorsSection;
	features: FeaturesSection;
	pointers: PointersSection;
	feature_explanations: FeatureExplanationsSection;
	about: AboutSection;
	faq: FaqSection;
};

export type Product = {
	title: string;
	id: string;
	slug: string;
	order_idx: number;
	modality: string;
	media: Media[];
	price_type: string;
	is_enrolled: boolean;
	price_details: {
		min_price: number;
		min_final_price: number;
		max_price: number;
		max_final_price: number;
		text: string;
		instructor_text: string;
	};
	checklist: string[];
};

export type Pagination = {
	total_items: number;
	item_count: number;
	items_per_page: number;
	total_page: number;
	current_page: number;
};

export type ProductResponse<T> = {
	code: number;
	data: {
		products: T;
		pagination_meta: Pagination;
	};
	error: unknown[];
	message: string;
	payload: unknown[];
	status_code: number;
};
