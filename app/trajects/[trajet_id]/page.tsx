"use client";

import guidesAPI, { Guide } from "@/APis/guidesAPI";
import trajectsAPi from "@/APis/trajectsAPi";

import GuideComp from "@/components/Guide";
import Loader from "@/components/Loader";
import Breadcrumps from "@/components/breadcumps";
import FormLayout from "@/components/layouts/form";
import { useLoader } from "@/utils";
import { trip } from "@/utils/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const HotelItem = ({ hotel }) => (
  <div className="bg-white shadow rounded-md p-4 mb-4">
    <h2 className="text-lg font-bold">{hotel.nom}</h2>
    <p className="text-gray-600 px-2">{hotel.adresse}</p>
    <p className="text-gray-600 px-2">Téléphone: {hotel.numero_telephone}</p>
  </div>
);

const RestaurantItem = ({ restaurant }) => (
  <div className="bg-white shadow-md rounded-md p-4 mb-4">
    <h2 className="text-lg font-bold">{restaurant.nom}</h2>
    <p className="text-gray-600">{restaurant.adresse}</p>
    <p className="text-gray-600">Téléphone: {restaurant.numero_telephone}</p>
  </div>
);

const GuideItem = ({ guide }) => (
  <div className="bg-white shadow-md rounded-md p-4 mb-4">
    <h2 className="text-lg font-bold">{guide.nom}</h2>
    <p className="text-gray-600">Type: {guide.type}</p>
    <p className="text-gray-600">Langues: {guide.langues.join(", ")}</p>
  </div>
);

const ActivityItem = ({ activity }) => (
  <div className="bg-white shadow-md rounded-md p-4 mb-4">
    <h2 className="text-md font-semibold">{activity.nom}</h2>
    <p className="text-gray-600">{activity.prix}</p>
  </div>
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

const items = [
  {
    title: "Hotels",
    icon: "/images/items/hotel.png",
    scale: 1
  },
  {
    title: "Activties",
    icon: "/images/items/extracurricular-activities.png"
  },  
  {
      title: "Rusturants",
      icon: "/images/items/restaurant.png"
  },
  {
    title: "Food",
    icon: "/images/items/dining.png"
  },
  {
      title: "Tour Guides",
      icon: "/images/items/delivery.png"
  },
  {
      title: "Planification",
      icon: "/images/items/planning.png"
  }
]

export default function TrajectsPage({ params }) {
  const [traject, setTraject] = useState<typeof trip>();
  const [guides, setGuides] = useState<Guide[]>();
  const [loading, loader] = useLoader(true);
  const [panel, setPanel] = useState<number>(-1);
  const title = useMemo(() => {
    if(panel === -1) return "Journey Details";

    return items[panel].title;
  }, [panel]);
  const router = useRouter();
  const back = () => {
    if(panel === -1) router.back();
    else setPanel(-1);
  }

  useEffect(() => {
    loader.process(async () => {
      const res = await trajectsAPi.traject(params.trajet_id);
      const g = await guidesAPI.getGuides();
      
      setGuides(g);
      setTraject(res);
    });
  }, [])

  return (
    <FormLayout className="p-4">
        <Breadcrumps onBack={back} mode="form" title={title} />
        {!loading && <>
          {panel === -1 && <div className="mt-12">
            <h1 className="text-center text-2xl p-4 px-8 text-gray-700">Our Propositions For Your Trip</h1>
            <ul className="flex flex-wrap">
                {items.map((obj, index) => (
                    <li onClick={() => setPanel(index)} className="p-4 basis-1/2 cursor-pointer" key={index}>
                        <div className={`p-4 bg-white flex flex-col items-center rounded-full  hover:bg-primary hover:text-gray-100`}>
                            <Image className="relative" src={obj.icon} alt={obj.title} width={75} height={75} style={{ transform: `scale(${obj.scale || 1})` }} />
                            <h2 className="mt-2 text-lg">{obj.title}</h2>
                        </div>
                    </li>
                ))}
            </ul>
          </div>}

          {panel === 0 && (
            <div className="container mx-auto py-4 mt-12">
              <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Hotels</h2>
                  {traject.hotels.map((hotel, index) => (
                      <HotelItem key={index} hotel={hotel} />
                  ))}
              </div>
            </div>
          )} 

          {panel === 1 && (
            <div className="container mx-auto py-4 mt-12">
              <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Activities</h2>
                  {traject.activites.map((activity, index) => (
                      <ActivityItem key={index} activity={activity} />
                  ))}
              </div>
            </div>
          )} 

          {panel === 2 && (
            <div className="container mx-auto py-4 mt-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Foods</h2>
                  {traject.food.map((food, index) => (
                      <div key={index} className="bg-white shadow-md rounded-md p-4 mb-4">
                        <p className="text-gray-600 font-semibold">{food}</p>
                      </div>
                  ))}
              </div>
            </div>
          )} 
        </>}

        {panel === 4 && (
          <div className="container mx-auto py-4 mt-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Tour Guides</h2>
              {guides.map((guide, index) => <GuideComp guide={guide as any} key={index} />)}
            </div>
          </div>
        )}

        {panel === 5 && (
          <div className="container mx-auto py-4 mt-12">
            <div>
              {Object.keys(traject.plan).map((day, index) => (<>
                <h2 key={index} className="text-2xl font-bold mb-4">Day {index + 1}</h2>
                {traject.plan[day].activities.map((activity, index) => (
                  <div className="bg-white shadow-md rounded-md p-4 mb-4">
                    <h2 className="text-md font-semibold">{activity.name}</h2>
                    <span className="text-primary">{activity.price}</span>
                    <p className="text-gray-700 text-sm">{activity.description}</p>
                  </div>
                ))}

              </>))}
              
              
            </div>
          </div>
        )}
        {loading && <Loader />}
    </FormLayout>
  );
}
