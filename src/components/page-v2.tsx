import React from 'react';

export default function Page2() {
	return (
		<>
			{/* <!-- Course Hero Section --> */}
			<section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
				<div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
					<div className="md:w-2/3">
						<h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
							IELTS Course by Munzereen Shahid
						</h1>
						<div className="prose max-w-none mb-6">
							<p>
								Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন
								নিন একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার
								কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন আমাদের IELTS
								Course-এ।
							</p>
						</div>

						<div className="flex flex-wrap gap-4 mb-6">
							<div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
								<img
									src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png"
									className="w-6 h-6 mr-2"
								/>
								<span>কোর্সটি করছেন ৩৩০০৭ জন</span>
							</div>
							<div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
								<img
									src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png"
									className="w-6 h-6 mr-2"
								/>
								<span>৫৪টি ভিডিও</span>
							</div>
							<div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
								<img
									src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png"
									className="w-6 h-6 mr-2"
								/>
								<span>কোর্সের মেয়াদ আজীবন</span>
							</div>
						</div>

						<div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6">
							<div className="flex items-center">
								<i className="fas fa-exclamation-circle text-red-500 mr-2"></i>
								<p className="font-semibold text-red-700">
									স্পেশাল অফার শেষ হতে আর বাকি
								</p>
							</div>
						</div>

						<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300">
							কোর্সটি কিনুন
						</button>
					</div>

					<div className="md:w-1/3">
						<div className="bg-white rounded-xl shadow-lg overflow-hidden">
							<img
								src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
								alt="IELTS Course"
								className="w-full"
							/>
							<div className="p-4">
								<div className="flex items-center mb-2">
									<i className="fas fa-video text-gray-500 mr-2"></i>
									<span>Recorded Course</span>
								</div>
								<div className="flex items-center mb-4">
									<i className="fas fa-globe text-gray-500 mr-2"></i>
									<span>Bangla</span>
								</div>
								<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
									Enroll Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Course Preview --> */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-8 text-center">
						কন্টেন্ট প্রিভিউ
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="rounded-lg overflow-hidden shadow-md">
							<div className="relative pt-[56.25%]">
								<iframe
									className="absolute top-0 left-0 w-full h-full"
									src="https://www.youtube.com/embed/zrlYnaZftEQ"
									frameBorder="0"
									allowFullScreen
								></iframe>
							</div>
							<div className="p-4">
								<h3 className="font-semibold">Course Preview</h3>
							</div>
						</div>
						<div className="rounded-lg overflow-hidden shadow-md">
							<div className="relative pt-[56.25%]">
								<iframe
									className="absolute top-0 left-0 w-full h-full"
									src="https://www.youtube.com/embed/30y-wlDtIIQ"
									frameBorder="0"
									allowFullScreen
								></iframe>
							</div>
							<div className="p-4">
								<h3 className="font-semibold">Introduction</h3>
							</div>
						</div>
						<div className="rounded-lg overflow-hidden shadow-md">
							<div className="relative pt-[56.25%]">
								<iframe
									className="absolute top-0 left-0 w-full h-full"
									src="https://www.youtube.com/embed/QBz8FX4GE_w"
									frameBorder="0"
									allowFullScreen
								></iframe>
							</div>
							<div className="p-4">
								<h3 className="font-semibold">Lesson Preview</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Instructor Section --> */}
			<section className="py-12 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-8">কোর্স ইন্সট্রাক্টর</h2>
					<div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-xl shadow-sm">
						<img
							src="https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"
							alt="Munzereen Shahid"
							className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
						/>
						<div>
							<h3 className="text-xl font-bold">Munzereen Shahid</h3>
							<p className="text-gray-600 mb-2">Course Instructor</p>
							<div className="prose max-w-none mb-4">
								<p>
									MSc (English), University of Oxford (UK);BA, MA (English),
									University of Dhaka; IELTS: 8.5
								</p>
							</div>
							<a
								href="#"
								className="text-blue-600 font-semibold hover:underline"
							>
								View Profile
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Course Features --> */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-8">
						কোর্সটি যেভাবে সাজানো হয়েছে
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-gray-50 p-6 rounded-xl">
							<img
								src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png"
								className="w-12 h-12 mb-4"
							/>
							<h3 className="font-bold mb-2">৫০+ ভিডিও লেকচার</h3>
							<p className="text-gray-600">
								IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের
								ধরন নিয়ে in-depth আলোচনা
							</p>
						</div>
						<div className="bg-gray-50 p-6 rounded-xl">
							<img
								src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_1684919669537.png"
								className="w-12 h-12 mb-4"
							/>
							<h3 className="font-bold mb-2">৩৮টি লেকচার শিট</h3>
							<p className="text-gray-600">
								Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর
								করার স্ট্র্যাটেজি এবং 600+ Vocabulary
							</p>
						</div>
						<div className="bg-gray-50 p-6 rounded-xl">
							<img
								src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604652_1684919731714.png"
								className="w-12 h-12 mb-4"
							/>
							<h3 className="font-bold mb-2">রিডিং এন্ড লিসিনিং মক টেস্ট</h3>
							<p className="text-gray-600">
								10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই
							</p>
						</div>
						<div className="bg-gray-50 p-6 rounded-xl">
							<img
								src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_%281%29_1684919813933.png"
								className="w-12 h-12 mb-4"
							/>
							<h3 className="font-bold mb-2">ডাউট সল্ভিং লাইভ ক্লাস</h3>
							<p className="text-gray-600">
								সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর
								সুযোগ
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Free Resource --> */}
			<section className="py-12 bg-blue-50">
				<div className="container mx-auto px-4">
					<div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
						<div className="md:w-1/3">
							<img
								src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Thumbnail_for_IELTS_Course_by_MS_1732621023962.jpg"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="md:w-2/3 p-6">
							<div className="flex items-center mb-4">
								<img
									src="https://cdn.10minuteschool.com/images/catalog/product/pointer/467478234_1276985680016189_8175110495169425888_n_1732621150265.png"
									className="w-10 h-10 mr-2"
								/>
								<h3 className="text-xl font-bold">
									IELTS Confirm 7+ Score (Guideline)
								</h3>
							</div>
							<p className="text-gray-700 mb-6">
								IELTS ভালো score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে ।
							</p>
							<a
								href="#"
								className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
							>
								ফ্রি PDF Download করুন
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- What You'll Learn --> */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-8">কোর্সটি করে যা শিখবেন</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="flex items-start">
							<div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
								<i className="fas fa-check text-blue-600"></i>
							</div>
							<p>
								IELTS পরীক্ষার প্রত্যেক সেকশনের প্রশ্ন ও উত্তরের ধরন, টাইম
								ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ টিপস, ট্রিকস ও স্ট্র্যাটেজি
							</p>
						</div>
						<div className="flex items-start">
							<div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
								<i className="fas fa-check text-blue-600"></i>
							</div>
							<p>
								IELTS Writing Task 1 ও IELTS Writing Task 2 এর ক্ষেত্রে ভালো
								স্কোর পেতে সহায়ক Structure ও Essay type
							</p>
						</div>
						<div className="flex items-start">
							<div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
								<i className="fas fa-check text-blue-600"></i>
							</div>
							<p>
								IELTS Speaking test-এ Advanced/ Power Words ব্যবহার করে যেকোনো
								টপিকে নির্ভুলভাবে কথা বলার পদ্ধতি
							</p>
						</div>
						<div className="flex items-start">
							<div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
								<i className="fas fa-check text-blue-600"></i>
							</div>
							<p>
								সেরা IELTS প্রস্তুতি নিতে প্রতিটি মডিউলের নিয়ম-কানুনসহ খুঁটিনাটি
								বিষয়াদি নিয়ে বিস্তারিত ধারণা
							</p>
						</div>
						<div className="flex items-start">
							<div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
								<i className="fas fa-check text-blue-600"></i>
							</div>
							<p>
								IELTS পরীক্ষা চলাকালে নির্ধারিত সময়ের সঠিক ব্যবহারের মাধ্যমে
								ভালো স্কোর অর্জনের কৌশল
							</p>
						</div>
						<div className="flex items-start">
							<div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
								<i className="fas fa-check text-blue-600"></i>
							</div>
							<p>
								IELTS Reading এবং IELTS Listening Mock Test এর মাধ্যমে IELTS
								পরীক্ষার রিয়েল এক্সপেরিয়েন্স ও Band Score সম্বন্ধে পরিপূর্ণ
								ধারণা
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Course Details --> */}
			<section className="py-12 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-8">কোর্স সম্পর্কে বিস্তারিত</h2>

					<div className="bg-white p-6 rounded-xl shadow-sm mb-8">
						<h3 className="text-xl font-bold mb-4">
							IELTS Course-টি যাদের জন্য
						</h3>
						<ul className="list-disc pl-5 space-y-2 text-gray-700">
							<li>
								যারা উচ্চশিক্ষা, মাইগ্রেশন বা চাকরির জন্য বিদেশে যেতে চান।
							</li>
							<li>
								যারা উচ্চশিক্ষা শেষে বা দেশে বসবাসরত অবস্থায় বিদেশে স্থায়ীভাবে
								বসবাসের জন্য আবেদন করতে চান।
							</li>
							<li>
								IELTS পরীক্ষা যাদের জন্য ভীতিকর, কিংবা যারা IELTS প্রস্তুতি কোথা
								থেকে শুরু করবেন তা জানেন না।
							</li>
							<li>
								যারা আগে পরীক্ষা দিয়েছেন কিন্তু নিজের IELTS Band Score বাড়াতে
								চান।
							</li>
							<li>
								যারা চাকরি বা ব্যবসার কাজে কিংবা ব্যক্তিগত আগ্রহে নিজেদের
								reading, writing, listening এবং speaking দক্ষতা বাড়াতে চান।
							</li>
							<li>
								স্টুডেন্ট কিংবা চাকরিজীবীদের মধ্যে যারা ব্যস্ততার কারনে ঘরে বসেই
								IELTS এর জন্য সেরা প্রস্তুতি নিতে চান।
							</li>
						</ul>
					</div>

					<div className="bg-white p-6 rounded-xl shadow-sm mb-8">
						<h3 className="text-xl font-bold mb-4">
							IELTS Course-টি কোর্স সম্পর্কে
						</h3>
						<div className="prose max-w-none text-gray-700">
							<p>
								যুক্তরাষ্ট্রের ৩,৪০০ প্রতিষ্ঠানসহ পৃথিবীর ১১ হাজারেরও বেশি
								প্রতিষ্ঠানে IELTS exam score এর গ্রহণযোগ্যতা রয়েছে। এই পরীক্ষায়
								অত্যন্ত সুনিপুণভাবে পরীক্ষার্থীর ইংরেজি বলা, পড়া, শোনা ও লেখার
								ক্ষমতাকে যাচাই করা হয়।
							</p>
							<p className="my-4">
								বিদেশি ভাষা হওয়ায় অনেকেই ইংরেজি গ্রামার নিয়ে ভয়ে থাকেন। তবে
								আনন্দের কথা হলো, IELTS পরীক্ষাটি ব্যাকরণভিত্তিক নয়। এটি মূলত
								একটি ভাষাভিত্তিক নিরীক্ষা পদ্ধতি। কাঙ্ক্ষিত স্কোর অর্জনের জন্য
								ইংরেজি ভাষার চারটি দক্ষতা আপনার প্রয়োজন: পড়তে পারা, লিখতে পারা,
								শুনে বুঝতে পারা, ও বলতে পারা। এই চারটি ক্ষেত্রে যিনি যত দক্ষ
								হবেন, IELTS পরীক্ষায় তিনি তত ভালো স্কোর পাবেন।
							</p>
							<p className="my-4">
								ইংরেজি ভাষার এই চারটি অত্যাবশ্যক দক্ষতা বাড়াতে টেন মিনিট স্কুল
								নিয়ে এসেছে IELTS পরীক্ষার্থীদের জন্য বিশেষভাবে সাজানো এই IELTS
								Course-টি কোর্সটির শিক্ষক মুনজেরিন শহীদ (IELTS ব্যান্ড স্কোর
								8.5/9) ইংল্যান্ডের বিশ্বখ্যাত অক্সফোর্ড বিশ্ববিদ্যালয়ের
								Department of Education হতে Applied Linguistics and Second
								Language Acquisition বিষয়ে স্নাতকোত্তর ডিগ্রী গ্রহণ করেছেন।
							</p>
							<p className="my-4">
								আমাদের এই কোর্সটিতে এনরোল করলেই পাবেন মুনজেরিন শহীদের "ঘরে বসে
								IELTS প্রস্তুতি" বইটি সম্পূর্ণ ফ্রিতে! কোর্সের ভিডিও লেকচারের
								পাশাপাশি বই থেকে স্ট্র্যাটেজি শিখে ও প্র্যাকটিস করে সম্পূর্ণ
								প্রস্তুতি নিতে পারবেন। এই কোর্সটিতে আরও থাকছে IELTS Reading ও
								Listening Mock Test, যা আপনাকে দিবে IELTS পরীক্ষার রিয়েল
								এক্সপেরিয়েন্স এবং ব্যান্ড স্কোর সম্বন্ধে ধারণা। এছাড়াও
								প্র্যাক্টিসের সময় যেকোনো প্রবলেমের সমাধানের জন্য রয়েছে Expert
								Instructor-দের Problem Solving Live class। সুতরাং এবার এক IELTS
								Course-এ থাকছে Complete IELTS Preparation!
							</p>
							<p className="my-4">
								আপনার IELTS পরীক্ষাকে আরো সহজ, উপভোগ্য ও ফলপ্রসূ করতে এবং
								কাঙ্ক্ষিত ব্যান্ড স্কোরটি পেতে আজই এনরোল করুন "IELTS Course by
								Munzereen Shahid"-এ, আর নিজেকে এগিয়ে নিয়ে যান আপনার স্বপ্নপূরণের
								দ্বারপ্রান্তে।
							</p>
						</div>
					</div>

					<div className="bg-white p-6 rounded-xl shadow-sm">
						<h3 className="text-xl font-bold mb-4">
							এই IELTS Course-টি আপনাকে যেভাবে সাহায্য করবে
						</h3>
						<ul className="list-disc pl-5 space-y-2 text-gray-700">
							<li>
								"Academic IELTS" ও "General Training IELTS" - উভয় মডিউলের জন্যই
								কার্যকরভাবে ঘরে বসে প্রস্তুতি নিতে পারবেন। এই IELTS Course টিতে
								দুটো মডিউলের জন্যই আলাদা দুটো সেকশন রয়েছে।
							</li>
							<li>
								IELTS speaking, reading, listening ও writing test-এর প্রশ্নের
								ধরন অনুযায়ী টিপস, হ্যাকস ও টেকনিক শিখতে পারবেন।
							</li>
							<li>
								IELTS এর সব ধরনের প্রশ্ন সঠিকভাবে সমাধান করে হাতে কলমে প্রস্তুতি
								নিতে পারবেন।
							</li>
							<li>
								ভিডিও দেখার পাশাপাশি IELTS Course-এ থাকা লেকচার শিট, "ঘরে বসে
								IELTS প্রস্তুতি" বই এবং Doubt Solving Live Class-এর মাধ্যমে নিতে
								পারবেন কমপ্লিট প্রিপারাশন।
							</li>
							<li>
								কোর্স শেষ করার পর IELTS Reading and Listening mock test প্রশ্ন
								সল্‌ভ করার মাধ্যমে নিজের IELTS প্রস্তুতি ঝালিয়ে নিতে পারবেন।
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* <!-- Exclusive Features --> */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-8">কোর্স এক্সক্লুসিভ ফিচার</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-gray-50 p-6 rounded-xl">
							<h3 className="text-xl font-bold mb-4">ভিডিও লেকচার</h3>
							<img
								src="https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_sqr.png"
								className="w-full rounded-lg mb-4"
							/>
							<ul className="list-disc pl-5 space-y-2 text-gray-700">
								<li>IELTS Academic ও General Training নিয়ে আলোচনা</li>
								<li>
									Reading, Writing, Listening ও Speaking এর Overview & Format
								</li>
								<li>প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি</li>
								<li>ভিডিওর সাথে প্র্যাকটিসের সুযোগ</li>
							</ul>
						</div>
						<div className="bg-gray-50 p-6 rounded-xl">
							<h3 className="text-xl font-bold mb-4">
								Reading ও Listening Mock Tests
							</h3>
							<img
								src="https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_book_sqr.png"
								className="w-full rounded-lg mb-4"
							/>
							<ul className="list-disc pl-5 space-y-2 text-gray-700">
								<li>10 Reading & 10 Listening Mock Tests</li>
								<li>Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স</li>
								<li>উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট</li>
								<li>যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Testimonials --> */}
			<section className="py-12 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-8 text-center">
						শিক্ষার্থীরা যা বলছে
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* <!-- Testimonial 1 --> */}
						<div className="bg-white p-6 rounded-xl shadow-sm">
							<div className="flex items-center mb-4">
								<img
									src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_39_1746355488882.png"
									className="w-12 h-12 rounded-full mr-4"
								/>
								<div>
									<h4 className="font-bold">Junaed Bin Samad</h4>
									<p className="text-gray-600 text-sm">IELTS Score: 8.5</p>
								</div>
							</div>
							<div className="relative pt-[56.25%] mb-4 rounded-lg overflow-hidden">
								<iframe
									className="absolute top-0 left-0 w-full h-full"
									src="https://www.youtube.com/embed/AvB2ibYd1z4"
									frameBorder="0"
									allowFullScreen
								></iframe>
							</div>
						</div>

						{/* <!-- Testimonial 2 --> */}
						<div className="bg-white p-6 rounded-xl shadow-sm">
							<div className="flex items-center mb-4">
								<img
									src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_45_1746359412430.png"
									className="w-12 h-12 rounded-full mr-4"
								/>
								<div>
									<h4 className="font-bold">Shah Mohammad Rafi</h4>
									<p className="text-gray-600 text-sm">IELTS Score: 8</p>
								</div>
							</div>
							<div className="relative pt-[56.25%] mb-4 rounded-lg overflow-hidden">
								<iframe
									className="absolute top-0 left-0 w-full h-full"
									src="https://www.youtube.com/embed/KcwncFcSIOY"
									frameBorder="0"
									allowFullScreen
								></iframe>
							</div>
						</div>

						{/* <!-- Testimonial 3 --> */}
						<div className="bg-white p-6 rounded-xl shadow-sm">
							<div className="flex items-center mb-4">
								<img
									src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_37_1746355194606.png"
									className="w-12 h-12 rounded-full mr-4"
								/>
								<div>
									<h4 className="font-bold">Tisha Farhana</h4>
									<p className="text-gray-600 text-sm">IELTS Score: 8</p>
								</div>
							</div>
							<p className="text-gray-700">
								প্রথম ভিডিওটা দেখেই বুঝেছিলাম যে কোর্সটা বেশ গোছানো এবং অন্যান্য
								কোর্সগুলোর মতন Advanced English-এ না পড়িয়ে মুনজেরিন আপু বাংলায়
								সবকিছু সুন্দর করে বুঝিয়েছেন। রিডিং পার্ট-এ প্র্যাক্টিসে-এর সময়
								৪-৫-এর বেশি স্কোর তুলতে পারতাম না এবং এই কোর্সের রিডিং পার্টটা
								করে আমি আমার IELTS-এ স্কোর ৮ পেয়েছি। নিজের মত করে প্রিপারেশন
								নিতে কোর্সটি অনেক হেল্প করেছে।
							</p>
						</div>

						{/* <!-- Testimonial 4 --> */}
						<div className="bg-white p-6 rounded-xl shadow-sm">
							<div className="flex items-center mb-4">
								<img
									src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/332732673_768753970891698_6484033119477691068_n_1746353997409.jpg"
									className="w-12 h-12 rounded-full mr-4"
								/>
								<div>
									<h4 className="font-bold">Yeamin Farabi Chowdhury</h4>
									<p className="text-gray-600 text-sm">IELTS Score: 7</p>
								</div>
							</div>
							<div className="relative pt-[56.25%] mb-4 rounded-lg overflow-hidden">
								<iframe
									className="absolute top-0 left-0 w-full h-full"
									src="https://www.youtube.com/embed/uAQ-WjhZnl0"
									frameBorder="0"
									allowFullScreen
								></iframe>
							</div>
						</div>

						{/* <!-- Testimonial 5 --> */}
						<div className="bg-white p-6 rounded-xl shadow-sm">
							<div className="flex items-center mb-4">
								<img
									src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_40_1746357384466.png"
									className="w-12 h-12 rounded-full mr-4"
								/>
								<div>
									<h4 className="font-bold">Tanzirul Islam</h4>
									<p className="text-gray-600 text-sm">IELTS Score: 7</p>
								</div>
							</div>
							<p className="text-gray-700">
								Tremendous, It's really helped me a lot.
							</p>
						</div>

						{/* <!-- Testimonial 6 --> */}
						<div className="bg-white p-6 rounded-xl shadow-sm">
							<div className="flex items-center mb-4">
								<img
									src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_42_1746357475839.png"
									className="w-12 h-12 rounded-full mr-4"
								/>
								<div>
									<h4 className="font-bold">Rahidul Haque</h4>
									<p className="text-gray-600 text-sm">IELTS Score: 7</p>
								</div>
							</div>
							<div className="relative pt-[56.25%] mb-4 rounded-lg overflow-hidden">
								<iframe
									className="absolute top-0 left-0 w-full h-full"
									src="https://www.youtube.com/embed/TJ7-Q7PLXBg"
									frameBorder="0"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- FAQ --> */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-8 text-center">
						সচরাচর জিজ্ঞাসা
					</h2>
					<div className="max-w-3xl mx-auto space-y-4">
						{/* <!-- FAQ Item 1 --> */}
						<div className="border border-gray-200 rounded-lg overflow-hidden">
							<button className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100">
								<span className="font-semibold text-left">
									কোর্সটি কিনে কিভাবে শুরু করবো?
								</span>
								<i className="fas fa-chevron-down"></i>
							</button>
							<div className="p-4 bg-white hidden">
								<div className="prose max-w-none text-gray-700">
									<p>১) 'কোর্সটি কিনুন' বাটনে ক্লিক করুন</p>
									<p>২) 'শুরু করুন' বাটনে ক্লিক করুন</p>
									<p>৩) আপনার ফোন নম্বর বা ইমেইল দিয়ে লগ-ইন করুন</p>
									<p>৪) লগ-ইন করা হয়ে গেলে 'এগিয়ে যান' বাটনে ক্লিক করুন</p>
									<p>
										৫) আপনার পছন্দের পেমেন্ট মাধ্যমটি বেছে নিন এবং 'পেমেন্ট
										করুন' বাটনে ক্লিক করুন
									</p>
									<p>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;বিকাশে
										পেমেন্ট-এর ক্ষেত্রে:&nbsp;
									</p>
									<p>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- পেমেন্ট মাধ্যম
										থেকে 'বিকাশ' বেছে নিন। ভবিষ্যৎ ব্যবহারের জন্য আপনি চাইলে
										বিকশ নম্বরটি সেইভ করে রাখতে পারবেন।
									</p>
									<p>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 'পেমেন্ট করুন'
										বাটনে ক্লিক করুন। আপনাকে বিকাশ পেমেন্ট গেটওয়েতে নিয়ে যাওয়া
										হবে
									</p>
									<p>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- আপনার বিকাশ নম্বর এবং
										পিন নম্বর দিয়ে কনফার্ম করুন, আপনার পেমেন্ট সম্পূর্ণ নিরাপদ
									</p>
									<p>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- বিকাশ পেমেন্ট সম্পর্কে
										আরও জানতে ভিডিওটি দেখতে পারেন:{' '}
										<a
											href="https://youtu.be/5wfn60rmWX4"
											target="_blank"
											className="text-blue-600"
										>
											https://youtu.be/5wfn60rmWX4
										</a>
										&nbsp;
									</p>
									<p>
										৬) পেমেন্ট সম্পন্ন করার পর 'কোর্স শুরু করুন' বাটনে ক্লিক
										করলে সরাসরি আপনি কোর্সটি শুরু করতে পারবেন
									</p>
									<p>
										৭) আপনার কেনা কোর্সটি আপনার প্রোফাইলের 'আমার কোর্সসমূহ'
										সেকশনে দেখতে পাবেন
									</p>
									<p>
										৮) আপনার এনরোল করা সকল কোর্স এখানে পেয়ে যাবেন, সেক্ষেত্রে
										অবশ্যই আপনাকে লগইন করা থাকতে হবে
									</p>
									<p>
										আরো জানতে ভিডিওটি দেখুন:{' '}
										<a
											href="https://youtu.be/eDrXWrl-SOU"
											target="_blank"
											className="text-blue-600"
										>
											https://youtu.be/eDrXWrl-SOU
										</a>
									</p>
								</div>
							</div>
						</div>

						{/* <!-- FAQ Item 2 --> */}
						<div className="border border-gray-200 rounded-lg overflow-hidden">
							<button className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100">
								<span className="font-semibold text-left">
									যেকোনো টেকনিকাল সমস্যায় (পাসওয়ার্ড ভুলে যাওয়া, পাসওয়ার্ড
									পরিবর্তন, কোর্স রিফান্ড ইত্যাদি) কোথায় যোগাযোগ করবো?
								</span>
								<i className="fas fa-chevron-down"></i>
							</button>
							<div className="p-4 bg-white hidden">
								<div className="prose max-w-none text-gray-700">
									<p>১) পাসওয়ার্ড ভুলে গেলে/ পাসওয়ার্ড পরিবর্তন</p>
									<p>
										- লগ-ইন করার সময় নিচে "Forget Password/পাসওয়ার্ড ভুলে
										গেছেন?" অপশনটিতে ক্লিক করুন
									</p>
									<p>
										- আপনার ফোন নম্বর বা ইমেইলে পাওয়া 4 সংখ্যার OTP কোডটি লিখুন
										এবং 'সাবমিট' বাটন এ ক্লিক করুন
									</p>
									<p>
										- এবার আপনার নতুন পাসওয়ার্ডটি দিয়ে 'সাবমিট' বাটন এ ক্লিক
										করুন।
									</p>
									<p>
										- ভবিষ্যতে পাসওয়ার্ড পরিবর্তন করতে চাইলে আপনার প্রোফাইলের
										'পাসওয়ার্ড পরিবর্তন করুন' অপশন থেকে পুনরায় নতুন পাসওয়ার্ড
										সেট করতে পারবেন।
									</p>
									<p>২) আপনি কোর্স কেনার পর রিফান্ড চাইলে</p>
									<p>
										- কোর্সটি কেনার পর 48 ঘণ্টার মধ্যে 16910 নম্বরে কল করে
										রিফান্ড চাওয়ার কারণ সহ অ্যাপ্লাই করুন
									</p>
									<p>
										- রিফান্ডের কারণের উপর ভিত্তি করে ৭ থেকে ১৪ কার্যদিবসের
										মধ্যে রিফান্ড করা হবে
									</p>
									<p>
										বিঃ দ্রঃ কোর্স কেনার পরে কোর্স ভালো লাগেনি কিংবা
										ম্যাটেরিয়ালস পছন্দ হয়নি - এরকম কারণে রিফান্ড করা হয় না।
									</p>
									<p>এছাড়া, যেকোনো সমস্যার ক্ষেত্রে,</p>
									<p>কল করুনঃ 16910</p>
									<p>ইমেইল করুনঃ support@10minuteschool.com</p>
									<p>
										অথবা এই ফর্মটি পূরণ করুনঃ{' '}
										<a
											href="https://forms.gle/buwAfFXP8V6c7gbY7"
											target="_blank"
											className="text-blue-600"
										>
											https://forms.gle/buwAfFXP8V6c7gbY7
										</a>
										&nbsp;
									</p>
								</div>
							</div>
						</div>

						{/* <!-- FAQ Item 3 --> */}
						<div className="border border-gray-200 rounded-lg overflow-hidden">
							<button className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100">
								<span className="font-semibold text-left">
									আপনাদের এই কোর্স কি একাডেমিক নাকি জেনারেল IELTS করার জন্য তৈরি
									করা?
								</span>
								<i className="fas fa-chevron-down"></i>
							</button>
							<div className="p-4 bg-white hidden">
								<p className="text-gray-700">
									Academic কিংবা General; আপনি যেটির জন্যই Preparation নেন না
									কেন আপনার প্রয়োজন অনুযায়ী প্রস্তুতি নেওয়ার সকল গাইডলাইন থাকবে
									এই কোর্সে।
								</p>
							</div>
						</div>

						{/* <!-- FAQ Item 4 --> */}
						<div className="border border-gray-200 rounded-lg overflow-hidden">
							<button className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100">
								<span className="font-semibold text-left">
									বাইরে অফলাইনে কোথাও ভর্তি না হয়ে আপনাদের এখানে অনলাইনে পড়লে
									কি সুবিধা পাবো?
								</span>
								<i className="fas fa-chevron-down"></i>
							</button>
							<div className="p-4 bg-white hidden">
								<div className="prose max-w-none text-gray-700">
									<p>এই কোর্সে ভর্তি হলে আপনি যে সুবিধাগুলো পাচ্ছেন-</p>
									<p>
										১) আপনার সুবিধামত সময়ে কোর্স ভিডিওগুলো দেখে বার বার
										প্রাক্টিস করতে পারবেন।
									</p>
									<p>
										২) ১০টি Reading এবং Listening মক টেস্ট দিয়ে নিজেকে যাচাই
										করার সুযোগ রয়েছে।&nbsp;
									</p>
									<p>
										৩) "ঘরে বসে IELTS প্রস্তুতি" বইটি পাচ্ছেন, যার মাধ্যমে আপনার
										Preparation হবে আরও বেশি মজবুত।
									</p>
									<p>
										৪) আপনাদের জন্য থাকবে একটি "ফেসবুক সাপোর্ট গ্রুপ" যেখানে
										প্রতি সপ্তাহে Zoom ক্লাসে এক্সপার্ট টিচারের সাথে প্রবলেম
										সলভিং-এর সুযোগ থাকবে।
									</p>
								</div>
							</div>
						</div>

						{/* <!-- FAQ Item 5 --> */}
						<div className="border border-gray-200 rounded-lg overflow-hidden">
							<button className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100">
								<span className="font-semibold text-left">
									লাইভ ক্লাসের সুযোগ আছে?
								</span>
								<i className="fas fa-chevron-down"></i>
							</button>
							<div className="p-4 bg-white hidden">
								<p className="text-gray-700">
									আপনাদের জন্য থাকবে একটি "ফেসবুক সাপোর্ট গ্রুপ" যেখানে প্রতি
									সপ্তাহে Zoom ক্লাসে এক্সপার্ট টিচারের সাথে প্রবলেম সলভিং-এর
									সুযোগ রয়েছে।
								</p>
							</div>
						</div>

						{/* <!-- FAQ Item 6 --> */}
						<div className="border border-gray-200 rounded-lg overflow-hidden">
							<button className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100">
								<span className="font-semibold text-left">
									কোর্সের মেয়াদ কতদিন থাকবে?
								</span>
								<i className="fas fa-chevron-down"></i>
							</button>
							<div className="p-4 bg-white hidden">
								<p className="text-gray-700">
									টেন মিনিট স্কুল Skills-এর যেকোনো Free এবং Paid কোর্সের মেয়াদ
									আজীবন।&nbsp;
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- CTA Section --> */}
			<section className="py-12 bg-blue-600 text-white">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-2xl font-bold mb-4">
						আজই এনরোল করুন IELTS Course-এ
					</h2>
					<p className="text-xl mb-8">
						আপনার IELTS পরীক্ষাকে আরো সহজ, উপভোগ্য ও ফলপ্রসূ করতে এবং কাঙ্ক্ষিত
						ব্যান্ড স্কোরটি পেতে
					</p>
					<button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300">
						কোর্সটি কিনুন
					</button>
				</div>
			</section>
		</>
	);
}
