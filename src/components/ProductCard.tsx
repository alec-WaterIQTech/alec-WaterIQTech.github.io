'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function ProductCard({ title, description, image, link }: ProductCardProps) {
  return (
    <div className="bg-sky-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
      <Image
        src={image}
        alt={title}
        width={800}
        height={400}
        className="w-full h-64 object-contain"
      />
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-black group-hover:text-sky-700">{title}</h3>
        <p className="text-black text-base">{description}</p>
        <Link
          href={link}
          className="inline-block mt-2 text-sky-700 font-medium hover:text-sky-500 transition"
        >
          Learn more →
        </Link>
      </div>
    </div>
  )
}
