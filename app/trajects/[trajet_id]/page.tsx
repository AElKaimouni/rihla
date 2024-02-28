import Breadcrumps from "@/components/breadcumps";
import MainLayout from "@/components/layouts";
import FormLayout from "@/components/layouts/form";
import { trip } from "@/utils/data";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const HotelItem = ({ hotel }) => (
  <div className="bg-white shadow rounded-md p-4 mb-4">
    <h2 className="text-xl font-bold">{hotel.nom}</h2>
    <p className="text-gray-600 px-2">{hotel.adresse}</p>
    <p className="text-gray-600 px-2">Téléphone: {hotel.numero_telephone}</p>
  </div>
);

const RestaurantItem = ({ restaurant }) => (
  <div className="bg-white shadow-md rounded-md p-4 mb-4">
    <h2 className="text-xl font-bold">{restaurant.nom}</h2>
    <p className="text-gray-600">{restaurant.adresse}</p>
    <p className="text-gray-600">Téléphone: {restaurant.numero_telephone}</p>
  </div>
);

const GuideItem = ({ guide }) => (
  <div className="bg-white shadow-md rounded-md p-4 mb-4">
    <h2 className="text-xl font-bold">{guide.nom}</h2>
    <p className="text-gray-600">Type: {guide.type}</p>
    <p className="text-gray-600">Langues: {guide.langues.join(", ")}</p>
  </div>
);

const ActivityItem = ({ activity }) => (
  <li className="text-gray-700">
    {activity.nom} - {activity.prix}
  </li>
);

const DayItem = ({ day, idx }) => (
  <div className="bg-white shadow-md rounded-md p-4 mb-4">
    <h2 className="text-xl font-bold">Day {idx + 1}</h2>
    <ul>
      {day.activities.map((activity, index) => (
        <ActivityItem key={index} activity={activity} />
      ))}
    </ul>
    <p className="text-gray-600">Food: {day.food.join(", ")}</p>
    <p className="text-gray-600">Transportation: {day.transportation}</p>
  </div>
);

export default async function Page({ params }: { params: { trajet_id: string } }) {
  return (
    <FormLayout className="p-4">
        <Breadcrumps mode="form" title="Journey Details" />
        <div className="container mx-auto py-4 mt-12">
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Hotels</h2>
                {trip.hotels.map((hotel, index) => (
                    <HotelItem key={index} hotel={hotel} />
                ))}
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Restaurants</h2>
                {trip.restaurants.map((restaurant, index) => (
                    <RestaurantItem key={index} restaurant={restaurant} />
                ))}
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Activities</h2>
                {trip.activites.map((activity, index) => (
                    <ActivityItem key={index} activity={activity} />
                ))}
            </div>

            <div>
            <h2 className="text-2xl font-bold mb-4">Foods</h2>
                {trip.food.map((food, index) => (
                    <div key={index} className="bg-white shadow-md rounded-md p-4 mb-4">
                    <p className="text-gray-600">{food}</p>
                    </div>
                ))}
            </div>

            {/* 
                
            <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Guides</h2>
            {trip.guides.map((guide, index) => (
                <GuideItem key={index} guide={guide} />
            ))}
            </div>

            <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Recommended journey</h2>
            {Object.values(trip.journees[0]).map((day, index) => (
                <DayItem key={index} day={day} idx={index} />
            ))}
            </div> */}
        </div>
    </FormLayout>
  );
}
