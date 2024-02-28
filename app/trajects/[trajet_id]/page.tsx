import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

// const trip = {
//   hotels: [
//     {
//       nom: "OSCAR",
//       ville: "Rabat",
//       adresse: "01 Avenue Hassan II, Rabat",
//       numero_telephone: "212538E+11",
//     },
//     {
//       nom: "MAJESTIC",
//       ville: "Rabat",
//       adresse: "121, Av. Hassan II Centre Ville",
//       numero_telephone: "05.37/72.29.97/05.37703333",
//     },
//     {
//       nom: "ROYAL",
//       ville: "Rabat",
//       adresse: "1, Rue Amman BP 175 hassan",
//       numero_telephone: "05.3772-11-71/72",
//     },
//     {
//       nom: "GAULOIS",
//       ville: "Rabat",
//       adresse: "1, angle avenue Med V et Zankat Hims  Hassan",
//       numero_telephone: "05.37-72-30-22/0537730573",
//     },
//     {
//       nom: "CALECHE D OR",
//       ville: "Rabat",
//       adresse: "11, Av. Moulay Youssef, Hassan",
//       numero_telephone: "05-37-70-13-19/05-37/20-22-77",
//     },
//     {
//       nom: "ONOMO RABAT MEDINA",
//       ville: "Rabat",
//       adresse: "02, rue Ghandi Hassan",
//       numero_telephone: "0537703074",
//     },
//   ],
//   restaurants: [
//     {
//       nom: "ART PATIO",
//       type: "1 fourchette",
//       provenance: "Rabat-Salé-Kénitra",
//       region: "Rabat",
//       ville: "Rabat",
//       adresse: "Centre Commercial Prestige, Bd Ahmed Rifai, Souissi, Rabat",
//       numero_telephone: "0661-481489",
//     },
//     {
//       nom: "LA CANTINE DU MARCHE",
//       type: "1 fourchette",
//       provenance: "Rabat-Salé-Kénitra",
//       region: "Rabat",
//       ville: "Rabat",
//       adresse: "57, Rue Sebou et Baht, Agdal, Rabat",
//       numero_telephone: "0663-625550",
//     },
//     {
//       nom: "SA CALETA",
//       type: "1 fourchette",
//       provenance: "Rabat-Salé-Kénitra",
//       region: "Rabat",
//       ville: "Rabat",
//       adresse: "Centre Commercial Prestige, Bd Ahmed Rifai, Souissi, Rabat",
//       numero_telephone: "0614-406900 / 0537-650064",
//     },
//     {
//       nom: "LE RESTO 3.0",
//       type: "1 fourchette",
//       provenance: "Rabat-Salé-Kénitra",
//       region: "Rabat",
//       ville: "Rabat",
//       adresse: "40, Angle Rue Ahfir et Avenue Al Alaouiyine, Hassan, Rabat",
//       numero_telephone: "0537-303330 / 0613-130652",
//     },
//     {
//       nom: "CASA JUANITO",
//       type: "1 fourchette",
//       provenance: "Rabat-Salé-Kénitra",
//       region: "Rabat",
//       ville: "Rabat",
//       adresse: "Avenue Oqba, Agdal, Rabat",
//       numero_telephone: "Rabat",
//     },
//     {
//       nom: "EL GAUCHO",
//       type: "1 fourchette",
//       provenance: "Rabat-Salé-Kénitra",
//       region: "Rabat",
//       ville: "Rabat",
//       adresse: "Hay Riad, Bd Arryad, Rabat",
//       numero_telephone: "037 71 30",
//     },
//     {
//       nom: "CHEZ XAVIER",
//       type: "1 fourchette",
//       provenance: "Rabat-Salé-Kénitra",
//       region: "Rabat",
//       ville: "Rabat",
//       adresse: "Mega Mall, Av Mohamed VI, Rabat",
//       numero_telephone: "0537-651600 / 0661391711",
//     },
//     {
//       nom: "PIZZERIA REGGIO",
//       type: "1 fourchette",
//       provenance: "Rabat-Salé-Kénitra",
//       region: "Rabat",
//       ville: "Rabat",
//       adresse: "30, Av.Oqba - Agdal, Rabat",
//       numero_telephone: "037 77 69 99",
//     },
//     {
//       nom: "SOFIA PALACE",
//       type: "1 fourchette",
//       provenance: "Rabat-Salé-Kénitra",
//       region: "Rabat",
//       ville: "Rabat",
//       adresse: "2 , Av. Mehdi Ben Barka –Souissi, Rabat",
//       numero_telephone: "037 65 52 52",
//     },
//   ],
//   guides: [
//     {
//       nom: "Hamid B.Ahmed",
//       type: "Guide du Tourisme",
//       langues: ["FR"],
//       ville: "R'GUIBI",
//     },
//   ],
//   journees: [
//     {
//       day1: {
//         activities: [
//           { name: "Visit Kasbah of the Udayas", price: "Free" },
//           { name: "Explore Hassan Tower", price: "$3" },
//           { name: "Stroll through Chellah Necropolis", price: "$5" },
//         ],
//         food: ["Taste Moroccan Tagine", "Try Mint Tea", "Savor Moroccan Pastilla"],
//         transportation: "Local taxis or walking",
//       },
//       day2: {
//         activities: [
//           { name: "Visit Royal Palace of Rabat", price: "Free" },
//           { name: "Discover Andalusian Gardens", price: "Free" },
//           { name: "Explore Mohammed VI Museum of Modern and Contemporary Art", price: "$7" },
//         ],
//         food: ["Enjoy Seafood at the Marina", "Taste Harira Soup", "Try Moroccan Couscous"],
//         transportation: "Local buses or rental car",
//       },
//       day3: {
//         activities: [
//           { name: "Visit Rabat Archaeological Museum", price: "$4" },
//           { name: "Explore Oudaias Museum", price: "$6" },
//           { name: "Walk along Rabat Beach", price: "Free" },
//         ],
//         food: ["Savor Moroccan Pastries", "Taste Moroccan Grilled Meat", "Try Moroccan Salads"],
//         transportation: "Walking or local buses",
//       },
//       day4: {
//         activities: [
//           { name: "Explore Medina of Rabat", price: "Free" },
//           { name: "Visit Kasbah des Oudaias", price: "$3" },
//           { name: "Discover Villa des Arts", price: "$5" },
//         ],
//         food: ["Taste Moroccan Tajine", "Try Moroccan Sweets", "Enjoy Moroccan Tea"],
//         transportation: "Local taxis or walking",
//       },
//       day5: {
//         activities: [
//           { name: "Visit Chellah", price: "$4" },
//           { name: "Explore Dar Batha Museum", price: "$5" },
//           { name: "Stroll through Jardin d'Essais Botaniques", price: "Free" },
//         ],
//         food: ["Try Moroccan Couscous", "Savor Moroccan Pastries", "Taste Moroccan Soups"],
//         transportation: "Local buses or rental car",
//       },
//       day6: {
//         activities: [
//           { name: "Explore Rabat Zoo", price: "$3" },
//           { name: "Visit National Archaeological Museum", price: "$5" },
//           { name: "Relax at Plage de Rabat", price: "Free" },
//         ],
//         food: ["Enjoy Moroccan Seafood", "Taste Moroccan Grilled Fish", "Try Moroccan Salads"],
//         transportation: "Walking or local buses",
//       },
//       day7: {
//         activities: [
//           { name: "Visit Rabat Hassan Tower", price: "$3" },
//           { name: "Explore Kasbah des Oudaias", price: "$3" },
//           { name: "Walk along the Bouregreg River", price: "Free" },
//         ],
//         food: ["Savor Moroccan Tagine", "Try Moroccan Sweets", "Enjoy Moroccan Mint Tea"],
//         transportation: "Local taxis or walking",
//       },
//     },
//   ],
// };

const HotelItem = ({ hotel }) => (
  <div className="bg-white shadow-md rounded-md p-4 mb-4">
    <h2 className="text-xl font-bold">{hotel.nom}</h2>
    <p className="text-gray-600">{hotel.adresse}</p>
    <p className="text-gray-600">Téléphone: {hotel.numero_telephone}</p>
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

async function getData({ params }) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoxNzA5MTE5NjkxLCJpYXQiOjE3MDkxMTYwOTF9.32uhdk8XZ7F6rcKbPmpJii6q6raqfPi3bER-m8xLvfE"
  );
  myHeaders.append(
    "Cookie",
    "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoxNzA5MTIyMTYwLCJpYXQiOjE3MDkxMTg1NjB9.KuyR3OMdl0cPPRtoXRnHlrFX-A--3Hbl-RHUrW9ZoEo"
  );

  const raw = JSON.stringify({
    budget: 10000,
    city: "Tanger",
    time: "7 days",
    number: 3,
    objectif: "Cultural",
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const res = await fetch("http://localhost:8000/api/Traject/", requestOptions);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { trajet_id: string } }) {
  const trip = await getData({ params });
  return (
    <main className="px-2 py-4">
      <div className="flex items-center justify-between">
        <Link href="/trajects">
          <IoIosArrowRoundBack size={40} />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Journey Details</h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        {/* <pre>{JSON.stringify(trip, null, 2)}</pre> */}
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
    </main>
  );
}
