import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const [setting, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const sesstion = await auth();
  return (
    <div className="grid grid-cols-2 border-primary-800 min-h-[400px] mb-10 text-accent-400">
      <DateSelector setting={setting} bookedDates={bookedDates} cabin={cabin} />
      {sesstion?.user ? (
        <ReservationForm cabin={cabin} user={sesstion.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
