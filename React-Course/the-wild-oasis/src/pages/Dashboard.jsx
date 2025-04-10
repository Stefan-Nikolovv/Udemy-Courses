import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Row from "../ui/Row";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import { useRecentBookings } from "../features/dashboard/useRecentBookings";
import { useRecentStays } from "../features/dashboard/useRecentStays";
function Dashboard() {
  const { isLoading, bookings } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isStaysLoading } = useRecentStays();
  if (isLoading || isStaysLoading) return <Spinner />;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
