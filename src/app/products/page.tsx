"use client";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";

export default function ProductPage() {
  return (
    <main className="pt-24 px-4 md:px-16 space-y-24 bg-white text-sky-950">
      {/* Intro */}
      <section className="text-center max-w-4xl mt-8 mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Advanced Ultrasound Solutions for Algae & Biofilm Control
        </h1>
        <p className="text-lg md:text-xl font-semibold text-sky-900">
          WaterIQ Technologies offers sustainable, chemical-free ultrasonic
          systems designed to protect your water bodies and infrastructure.
        </p>
      </section>

      {/* Products Grid */}
      <section className="grid gap-16 md:grid-cols-2">
        <ProductCard
          title="Sentinel AIQ"
          description="Autonomous, solar-powered flagship system equipped with Pulsar 4000 for large-scale algae defense."
<<<<<<< HEAD
          image="/img/AIQ-edit.png"
=======
          image="/img/featured/AIQ-edit.png"
>>>>>>> 7c11a7c (Initial commit)
          link="/products/sentinel-packages"
        />
        <ProductCard
          title="Pulsar Series"
          description="High-performance ultrasonic emitters for ponds, lakes, and treatment plants with IoT support."
<<<<<<< HEAD
          image="/img/Pulsar.png"
=======
          image="/img/featured/Pulsar.png"
>>>>>>> 7c11a7c (Initial commit)
          link="/products/pulsar"
        />
        <ProductCard
          title="BioPulse 1000"
          description="Purpose-built to prevent biofilm formation, helping defend against zebra mussels and biofouling."
<<<<<<< HEAD
          image="/img/Biopulse-bi-directional.png"
=======
          image="/img/featured/Biopulse-bi-directional.png"
>>>>>>> 7c11a7c (Initial commit)
          link="/products/biopulse"
        />
      </section>

      {/* Final CTA */}
      <section className="text-center py-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to protect your water systems?
        </h2>
        
        <div className="w-3/4 mx-auto mt-6 bg-sky-950 rounded-lg p-8">
          <h3 className="text-4xl text-white font-bold">We’ll work with you to deploy the ideal solution for your water</h3>
          <br/>
          <hr className="text-white"/>
          <br/>
          <p className="text-lg md:text-lg text-white font-semibold pt-2">
            The use of ultrasound has been proven to be very effective in the treatment of algae. The vast experience of SonicSolutions Algae Control LLC in treating algae over many years, combined with WaterIQ Technologies’ commitment to continuous innovation, make us the right choice. We believe that we build the most advanced systems both in performance and reliability in the industry. Our products are designed to be easy to buy, install, and maintain and require minimal manual intervention over their service life. In addition, WaterIQ Technologies is committed to continuous innovation through in-field data capture, remote monitoring, and data analysis.  Real-time data helps our customers to measure and constantly improve their water quality, and raise the bar on sustainability.
          </p>
        </div>
        <br/>
        
        <Link
          href="/contact"
          className="inline-block mt-4 rounded-full bg-gradient-to-r from-sky-700 to-sky-400 px-8 py-4 text-white text-lg font-semibold hover:from-sky-800 hover:to-sky-500 transition"
        >
          Contact WaterIQ
        </Link>
      </section>
    </main>
  );
}
