import React from 'react';
import { MapPin } from 'lucide-react';
import { ImageCarousel } from './ImageCarousel';

interface HomeCardProps {
  title: string;
  period: string;
  description: string;
  images: Array<{
    url: string;
    description: string;
  }>;
  mapUrl: string;
  address: string;
}

export function HomeCard({ title, period, description, images, mapUrl, address }: HomeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] mb-8">
      <div className="grid md:grid-cols-2 gap-4">
        <ImageCarousel images={images} />
        <div className="h-[400px] overflow-hidden">
          <iframe
            src={mapUrl}
            title={`Map of ${title}`}
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-gray-500">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{address}</span>
        </div>
      </div>
    </div>
  );
}