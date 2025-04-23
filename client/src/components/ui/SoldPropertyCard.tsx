import Image from "next/image";
import Link from "next/link";

interface SoldPropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
}

export default function SoldPropertyCard({
  id,
  title,
  location,
  price,
  imageUrl,
}: SoldPropertyCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{location}</p>
        <p className="text-blue-600 font-bold mt-2">
          ${price.toLocaleString()}
        </p>
        <Link 
          href={`/soldproperties/${id}`}
          className="mt-3 inline-block text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}