import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const paramRes = await params;
  const cabinId = paramRes?.cabinId;

  try {
    const [cabin, bookDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookDates });
  } catch (error) {
    return Response.json({ message: "Cabin not found" });
  }
}

// export async function POST () {

// }
