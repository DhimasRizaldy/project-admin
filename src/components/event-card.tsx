import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  price: number;
  originalPrice: number;
}

export function EventCard({
  title,
  description,
  date,
  time,
  location,
  imageUrl,
  price,
  originalPrice,
}: EventCardProps) {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="absolute right-2 top-2 rounded-full bg-blue-600 px-2 py-1 text-xs font-bold text-white">
          {discount}% OFF
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-blue-600">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2 text-sm">
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4 text-blue-500" />
            {date}
          </div>
          <div className="flex items-center">
            <ClockIcon className="mr-2 h-4 w-4 text-blue-500" />
            {time}
          </div>
          <div className="flex items-center">
            <MapPinIcon className="mr-2 h-4 w-4 text-blue-500" />
            {location}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <div className="mb-4">
          <span className="text-lg font-bold text-blue-600">
            Rp {price.toLocaleString()}
          </span>
          <span className="ml-2 text-sm line-through">
            Rp {originalPrice.toLocaleString()}
          </span>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 w-full">
          Daftar Sekarang
        </Button>
      </CardFooter>
    </Card>
  );
}
