import Cabin from "@/app/_componets/Cabin";
import Reservation from "@/app/_componets/Reservation";
import Spinner from "@/app/_componets/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const currentCabinId = await params;
  const { name } = await getCabin(currentCabinId?.cabinId);
  return {
    title: `Cabin ${name}`,
  };
}
//Providing this info give Next Js again Static route instead of Dynamic!!!!!!
export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  return ids;
}

export default async function Page({ params }) {
  const currentCabinId = await params;
  const cabin = await getCabin(currentCabinId?.cabinId);
  //  const [cabin, setting, bookedDates] = await Promise.all([
  //   getCabin(currentCabinId?.cabinId),
  //   getSettings(),
  //   getBookedDatesByCabinId(currentCabinId?.cabinId),
  // ]);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        {/* Suspense to can use Spinner component */}
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
