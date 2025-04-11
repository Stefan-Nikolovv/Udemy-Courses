import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import CheckBox from "../../ui/Checkbox";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBookingById } from "../bookings/useBookingById";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";
import Modal from "../../ui/Modal";
import { HiTrash } from "react-icons/hi2";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBookings } from "../bookings/useDeleteBooking";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState();
  const { checkin, isCheckingIn } = useCheckin();
  const { booking, isLoading } = useBookingById();
  const { settings, isLoading: isLoadingSettings } = useSettings();
  const { isDeleting, deleteBooking } = useDeleteBookings();
  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);
  const moveBack = useMoveBack();
  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const opitonalBreakfastPrice =
    settings.breakfastPrice * numGuests * numNights;

  function handleCheckin() {
    if (!confirmPaid) return;
    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: opitonalBreakfastPrice,
          totalPrice: totalPrice + opitonalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <Modal>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <CheckBox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((confirm) => !confirm);
              setConfirmPaid(false);
            }}
            disabled={addBreakfast}
            id="breakfast"
          >
            Want to add Breackfast for {formatCurrency(opitonalBreakfastPrice)}{" "}
            amount?
          </CheckBox>
        </Box>
      )}
      <Box>
        <CheckBox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isCheckingIn}
          id={bookingId}
        >
          I confirm that {guests.fullName} has paid the total amount:{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + opitonalBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                opitonalBreakfastPrice
              )})`}
        </CheckBox>
      </Box>
      <Menus>
        <ButtonGroup>
          <Button
            onClick={handleCheckin}
            disabled={!confirmPaid || isCheckingIn}
          >
            Check in booking #{bookingId}
          </Button>
          <Button variation="secondary" onClick={moveBack}>
            Back
          </Button>

          <Modal.Open opens="delete">
            <Button variation="danger" icon={<HiTrash />}>
              Delete booking
            </Button>
          </Modal.Open>
        </ButtonGroup>
      </Menus>
      <Modal.Window name="delete">
        <ConfirmDelete
          resourceName="bookings"
          disabled={isDeleting}
          onConfirm={() => deleteBooking(bookingId)}
        />
      </Modal.Window>
    </Modal>
  );
}

export default CheckinBooking;
