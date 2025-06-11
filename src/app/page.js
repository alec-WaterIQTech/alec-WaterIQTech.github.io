import Hero from "../components/Hero";
import Image from 'next/image'
import * as FaIcons from 'react-icons/fa'
import * as LucideIcons from 'lucide-react'

export default function Home() {
  return (
    <main className="pt-24 bg-white text-sky-900">
      {/* Hero Section */}
      <Hero />

      {/* What We Do Section */}
      <section className="max-w-7xl mx-auto mt-15 px-6 py-20 text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold">A Smarter Way to Control Algae and Biofilm</h2>
        <p className="text-xl md:text-2xl text-black mt-10 mb-15 rounded-lg mx-auto p-3">
          Without the expense, hassle, and side effects of harmful chemicals–WaterIQ Technologies delivers sustainable, science-driven ultrasonic solutions that restore balance to water ecosystems. Our advanced technology controls algae and biofilm helping preserve water quality, infrastructure, and the environment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-4 font-semibold text-xl text-center text-black">
          <div className="flex flex-col items-center gap-4 p-2 ">
            <LucideIcons.LucideWifi className="w-15 h-15 -rotate-90 text-sky-50 p-2 rounded-4xl bg-sky-800" />
            <p>
              Next Generation Ultrasonic Technology that delivers high performance, high reliability, IoT and monitoring features, and cost effectiveness
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-2">
            <LucideIcons.LucideSpeech className="w-15 h-15 text-sky-50 p-2 rounded-4xl bg-sky-800" />
            <p>
              Consultative approach that starts with understanding each customer’s needs, sharing best practices, and prescribing the right solution
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-2">
            <LucideIcons.LucideBrain className="w-15 h-15 text-sky-50 p-2 rounded-4xl bg-sky-800" />
            <p>
              Solutions built on decades of experience with ultrasonic technology and adherence to best practices
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-2">
            <LucideIcons.LucideChartColumn className="w-15 h-15 text-sky-50 p-2 rounded-4xl bg-sky-800" />
            <p>
              Data-driven solutions that capture data in the field to optimize treatment and automate sustainability reporting
            </p>
          </div>
      </div>
      </section>
      {/* Applications Section */}
      <section className="bg-sky-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Applications We Serve
          </h2>

          <p className="text-xl md:text-2xl text-black mt-6 mb-6 p-2">
            WaterIQ Technologies’ Master Distributor, SonicSolutions Algae Control LLC, has deployed over 3,000 ultrasonic systems across a wide range of industries and water environments.
          </p>

          <p className="text-lg text-black mb-10 p-2">
            From drinking water reservoirs to irrigation systems and industrial cooling towers, our solutions are tailored to meet diverse environmental and operational needs.  
            This list highlights common applications, but we’re always ready to explore unique challenges and custom solutions.
          </p>
          <div className="grid grid-cols-2 gap-8 text-xl text-white font-semibold">
            <div className="bg-[url(/img/reservoir.jpg)] bg-cover bg-center h-40 rounded-lg relative">  
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                Water Reservoirs
              </div>
            </div>
            <div className="bg-[url(/img/WWT.jpg)] bg-cover bg-center h-40 rounded-lg relative">  
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                Wastewater Treatment Plants
              </div>
            </div>
            <div className="bg-[url(/img/golf-course.jpg)] bg-cover bg-center h-40 rounded-lg relative">  
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                Golf Courses             
              </div>
            </div>
            <div className="bg-[url(/img/irrigation-system.jpg)] bg-cover bg-center h-40 rounded-lg relative">  
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                Irrigation Systems
              </div>
            </div>
            <div className="bg-[url(/img/pond.jpg)] bg-cover bg-bottom h-40 rounded-lg relative">  
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                Ponds
              </div>
            </div>
            <div className="bg-[url(/img/lake.jpg)] bg-cover bg-center h-40 rounded-lg relative">  
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                Lakes
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Solution Preview */}
      <section className="w-7/8 mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore Our Solutions</h2>
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 gap-0 md:gap-12">
          {/* Image with fade on right side */}
          <div className="relative w-full md:w-3/4 h-auto md:h-90">
            <img
              src="img/Water_IQ-aaron_cress-Print-0052-cropped.jpg"
              alt="Ultrasonic AIQ system in action"
              className="h-full w-full object-cover object-right rounded-l-3xl mask-r-from-75%"
            />
          </div>

          {/* Text overlapping into image space */}
          <div className="md:-ml-40 z-10 bg-white/80 mask-l-from-93% mask-t-from-95% mask-b-from-95% rounded-xl p-6 md:p-10 max-w-xl">
            <h3 className="text-2xl md:text-3xl text-black font-bold mb-4">
              Ultrasound technology to control algae and biofilm without chemicals
            </h3>
            <p className="text-lg md:text-xl text-black">
              Ultrasonic treatment is an effective, eco-friendly, and sustainable way to control algae and restore bodies of water to their natural state.
              WaterIQ Technologies’ solutions are among the most advanced and reliable on the market—easy to use and backed by exceptional support.
            </p>
          </div>
        </div>

      <div className="text-center mt-10">
        <a
          href="/products"
          className="inline-block bg-gradient-to-r from-sky-700 to-sky-400 hover:from-sky-800 hover:to-sky-500 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          View More
        </a>
        </div>
        
      </section>
      
      <section className="bg-sky-50 py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Easy to order, easy to use, easy to own. Getting support as you need it is painless.</h2>
          <p className="text-xl md:text-2xl text-black mt-6 mb-6 p-2">Don’t waste time in getting your algae and biofilm challenges under control. You can depend on WaterIQ Technologies’ algae control solutions and staff of experts. We’re dedicated to clean water for everyone, so we’ll evaluate your situation and make sure that the right WaterIQ Technologies’ ultrasonic solution is picked for your application.</p>
          <div className="flex flex-row justify-evenly py-5">
            <div className="text-sky-50 p-2 rounded-2xl bg-sky-800">
              <LucideIcons.ShoppingCart className="w-25 h-25 text-sky-50 p-2 rounded-2xl bg-sky-800" />
              <p className="font-bold text-xl">How to Buy</p>
            </div>
            <div className="text-sky-50 p-2 rounded-2xl bg-sky-800">
              <LucideIcons.PhoneCall className="w-25 h-25 text-sky-50 p-2 rounded-2xl bg-sky-800" />
              <p className="font-bold text-xl">Contact Us</p>
            </div>
            <div className="text-sky-50 p-2 rounded-2xl bg-sky-800">
              <LucideIcons.LucideHeadset className="w-25 h-25 text-sky-50 p-2 rounded-2xl bg-sky-800" />
              <p className="font-bold text-xl">Support</p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
