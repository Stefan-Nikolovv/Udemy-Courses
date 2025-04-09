import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams, useSearchParams } from "react-router-dom";

export function useBookingById() {
  const { bookingId } = useParams();
  console.log(bookingId);

  const { isLoading, data: booking } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  return { isLoading, booking };
}
