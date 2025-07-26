import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	CheckCircle,
	Clock,
	Users,
	Video,
	BookOpen,
	Award,
	MessageCircle,
	Timer,
} from 'lucide-react';
import Image from 'next/image';

export function Page1() {
	const courseData = {
		title: 'IELTS Course by Munzereen Shahid',
		description:
			'Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন নিন একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন আমাদের IELTS Course-এ।',
		instructor: {
			name: 'Munzereen Shahid',
			credentials:
				'MSc (English), University of Oxford (UK); BA, MA (English), University of Dhaka; IELTS: 8.5',
			image: 'https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg',
		},
		stats: [
			{ icon: Users, text: 'কোর্সটি করছেন ৩৩০০৭ জন', highlight: true },
			{ icon: Clock, text: 'সময় লাগবে ৫০ ঘন্টা' },
			{ icon: Video, text: '৫৪টি ভিডিও', highlight: true },
			{ icon: BookOpen, text: '১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট' },
			{ icon: Award, text: '৩৮টি লেকচার শিট' },
			{ icon: MessageCircle, text: 'ফেসবুক সাপোর্ট গ্রুপ' },
		],
	};

	const features = [
		{
			title: '৫০+ ভিডিও লেকচার',
			subtitle:
				'IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা',
			icon: 'https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png',
		},
		{
			title: '৩৮টি লেকচার শিট',
			subtitle:
				'Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary',
			icon: 'https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_1684919669537.png',
		},
		{
			title: 'রিডিং এন্ড লিসিনিং মক টেস্ট',
			subtitle:
				'10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই',
			icon: 'https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604652_1684919731714.png',
		},
		{
			title: 'ডাউত সল্ভিং লাইভ ক্লাস',
			subtitle:
				'সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ',
			icon: 'https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_%281%29_1684919813933.png',
		},
	];

	const learningPoints = [
		'IELTS পরীক্ষার প্রত্যেক সেকশনের প্রশ্ন ও উত্তরের ধরন, টাইম ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ টিপস, ট্রিকস ও স্ট্র্যাটেজি',
		'IELTS Writing Task 1 ও IELTS Writing Task 2 এর ক্ষেত্রে ভালো স্কোর পেতে সহায়ক Structure ও Essay type',
		'IELTS Speaking test-এ Advanced/ Power Words ব্যবহার করে যেকোনো টপিকে নির্ভুলভাবে কথা বলার পদ্ধতি',
		'সেরা IELTS প্রস্তুতি নিতে প্রতিটি মডিউলের নিয়ম-কানুনসহ খুঁটিনাটি বিষয়াদি নিয়ে বিস্তারিত ধারণা',
		'IELTS পরীক্ষা চলাকালে নির্ধারিত সময়ের সঠিক ব্যবহারের মাধ্যমে ভালো স্কোর অর্জনের কৌশল',
		'IELTS Reading এবং IELTS Listening Mock Test এর মাধ্যমে IELTS পরীক্ষার রিয়েল এক্সপেরিয়েন্স ও Band Score সম্বন্ধে পরিপূর্ণ ধারণা',
	];

	const testimonials = [
		{
			name: 'Junaed Bin Samad',
			score: '8.5',
			image:
				'https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_39_1746355488882.png',
		},
		{
			name: 'Shah Mohammad Rafi',
			score: '8',
			image:
				'https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_45_1746359412430.png',
		},
		{
			name: 'Tisha Farhana',
			score: '8',
			image:
				'https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_37_1746355194606.png',
			testimonial:
				'প্রথম ভিডিওটা দেখেই বুঝেছিলাম যে কোর্সটা বেশ গোছানো এবং অন্যান্য কোর্সগুলোর মতন Advanced English-এ না পড়িয়ে মুনজেরিন আপু বাংলায় সবকিছু সুন্দর করে বুঝিয়েছেন।',
		},
		{
			name: 'Yeamin Farabi Chowdhury',
			score: '7',
			image:
				'https://cdn.10minuteschool.com/images/catalog/product/testimonial/332732673_768753970891698_6484033119477691068_n_1746353997409.jpg',
		},
		{
			name: 'Asim Nabil',
			score: '8',
			image:
				'https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_15_1746957495847.png',
			testimonial:
				'আমি অনেক রিসোর্স দেখেছিলাম, কিন্তু এই কোর্সটাই ছিল সবচেয়ে organized! 8.0 স্কোর করতে পেরেছি কারণ এখানে প্রতিটি টপিক ছিল logically arranged আর super easy to understand!',
		},
		{
			name: 'Moinul Islam Mahin',
			score: '7.5',
			image:
				'https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_44_1746359283855.png',
			testimonial:
				'আমি পুরো IELTS প্রিপারেশনটা নিয়েছি এই কোর্স থেকে—আর ফলাফল 7.5 স্কোর! Live classes, mock tests, আর Easy to understand লেসন–সবকিছুই বুঝতে সহজ ছিল।',
		},
	];

	const faqs = [
		{
			question: 'কোর্সটি কিনে কিভাবে শুরু করবো?',
			answer:
				"'কোর্সটি কিনুন' বাটনে ক্লিক করুন, 'শুরু করুন' বাটনে ক্লিক করুন, আপনার ফোন নম্বর বা ইমেইল দিয়ে লগ-ইন করুন, লগ-ইন করা হয়ে গেলে 'এগিয়ে যান' বাটনে ক্লিক করুন, আপনার পছন্দের পেমেন্ট মাধ্যমটি বেছে নিন এবং 'পেমেন্ট করুন' বাটনে ক্লিক করুন।",
		},
		{
			question:
				'আপনাদের এই কোর্স কি একাডেমিক নাকি জেনারেল IELTS করার জন্য তৈরি করা?',
			answer:
				'Academic কিংবা General; আপনি যেটির জন্যই Preparation নেন না কেন আপনার প্রয়োজন অনুযায়ী প্রস্তুতি নেওয়ার সকল গাইডলাইন থাকবে এই কোর্সে।',
		},
		{
			question: 'লাইভ ক্লাসের সুযোগ আছে?',
			answer:
				"আপনাদের জন্য থাকবে একটি 'ফেসবুক সাপোর্ট গ্রুপ' যেখানে প্রতি সপ্তাহে Zoom ক্লাসে এক্সপার্ট টিচারের সাথে প্রবলেম সলভিং-এর সুযোগ রয়েছে।",
		},
		{
			question: 'কোর্সের মেয়াদ কতদিন থাকবে?',
			answer:
				'টেন মিনিট স্কুল Skills-এর যেকোনো Free এবং Paid কোর্সের মেয়াদ আজীবন।',
		},
	];

	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
				<div className="container mx-auto max-w-6xl">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<Badge
								variant="secondary"
								className="bg-red-100 text-red-700 hover:bg-red-200"
							>
								<Timer className="w-4 h-4 mr-2" />
								স্পেশাল অফার চলছে
							</Badge>

							<h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
								{courseData.title}
							</h1>

							<p className="text-lg text-gray-600 leading-relaxed">
								{courseData.description}
							</p>

							<div className="flex flex-wrap gap-4">
								<Button
									size="lg"
									className="bg-green-600 hover:bg-green-700 text-white px-8"
								>
									কোর্সটি কিনুন
								</Button>
								<Button size="lg" variant="outline">
									ফ্রি PDF ডাউনলোড
								</Button>
							</div>
						</div>

						<div className="relative">
							<div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
								<Image
									src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
									alt="IELTS Course Preview"
									width={600}
									height={400}
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Course Stats */}
			<section className="py-12 px-4 bg-white border-b">
				<div className="container mx-auto max-w-6xl">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
						{courseData.stats.map((stat, index) => (
							<div
								key={index}
								className={`text-center p-4 rounded-lg ${
									stat.highlight ? 'bg-blue-50' : 'bg-gray-50'
								}`}
							>
								<stat.icon
									className={`w-8 h-8 mx-auto mb-2 ${
										stat.highlight ? 'text-blue-600' : 'text-gray-600'
									}`}
								/>
								<p className="text-sm font-medium text-gray-900">{stat.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Instructor Section */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="container mx-auto max-w-6xl">
					<h2 className="text-3xl font-bold text-center mb-12">
						কোর্স ইন্সট্রাক্টর
					</h2>

					<Card className="max-w-2xl mx-auto">
						<CardContent className="p-8">
							<div className="flex flex-col md:flex-row items-center gap-6">
								<Avatar className="w-24 h-24">
									<AvatarImage
										src={courseData.instructor.image || '/placeholder.svg'}
										alt={courseData.instructor.name}
									/>
									<AvatarFallback>MS</AvatarFallback>
								</Avatar>

								<div className="text-center md:text-left">
									<h3 className="text-2xl font-bold mb-2">
										{courseData.instructor.name}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										{courseData.instructor.credentials}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Course Features */}
			<section className="py-16 px-4">
				<div className="container mx-auto max-w-6xl">
					<h2 className="text-3xl font-bold text-center mb-12">
						কোর্সটি যেভাবে সাজানো হয়েছে
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						{features.map((feature, index) => (
							<Card key={index} className="hover:shadow-lg transition-shadow">
								<CardContent className="p-6">
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
											<Image
												src={feature.icon || '/placeholder.svg'}
												alt=""
												width={24}
												height={24}
												className="w-6 h-6"
											/>
										</div>
										<div>
											<h3 className="text-xl font-semibold mb-2">
												{feature.title}
											</h3>
											<p className="text-gray-600">{feature.subtitle}</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Learning Points */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="container mx-auto max-w-6xl">
					<h2 className="text-3xl font-bold text-center mb-12">
						কোর্সটি করে যা শিখবেন
					</h2>

					<div className="grid md:grid-cols-2 gap-6">
						{learningPoints.map((point, index) => (
							<div key={index} className="flex items-start gap-3">
								<CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
								<p className="text-gray-700">{point}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-16 px-4">
				<div className="container mx-auto max-w-6xl">
					<h2 className="text-3xl font-bold text-center mb-12">
						শিক্ষার্থীরা যা বলছে
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{testimonials.map((testimonial, index) => (
							<Card key={index} className="hover:shadow-lg transition-shadow">
								<CardContent className="p-6">
									<div className="flex items-center gap-4 mb-4">
										<Avatar>
											<AvatarImage
												src={testimonial.image || '/placeholder.svg'}
												alt={testimonial.name}
											/>
											<AvatarFallback>
												{testimonial.name.charAt(0)}
											</AvatarFallback>
										</Avatar>
										<div>
											<h4 className="font-semibold">{testimonial.name}</h4>
											<Badge
												variant="secondary"
												className="bg-green-100 text-green-700"
											>
												IELTS Score: {testimonial.score}
											</Badge>
										</div>
									</div>
									{testimonial.testimonial && (
										<p className="text-gray-600 text-sm leading-relaxed">
											{testimonial.testimonial}
										</p>
									)}
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="container mx-auto max-w-4xl">
					<h2 className="text-3xl font-bold text-center mb-12">
						সচরাচর জিজ্ঞাসা
					</h2>

					<Accordion type="single" collapsible className="space-y-4">
						{faqs.map((faq, index) => (
							<AccordionItem
								key={index}
								value={`item-${index}`}
								className="bg-white rounded-lg px-6"
							>
								<AccordionTrigger className="text-left font-semibold">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-gray-600 leading-relaxed">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
				<div className="container mx-auto max-w-4xl text-center">
					<h2 className="text-3xl font-bold mb-4">
						আজই শুরু করুন আপনার IELTS যাত্রা
					</h2>
					<p className="text-xl mb-8 opacity-90">
						দেশসেরা ইন্সট্রাক্টরের গাইডলাইনে আপনার কাঙ্ক্ষিত ব্যান্ড স্কোর অর্জন
						করুন
					</p>
					<Button
						size="lg"
						className="bg-white text-blue-600 hover:bg-gray-100 px-8"
					>
						কোর্সটি কিনুন
					</Button>
				</div>
			</section>
		</div>
	);
}
