import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";
import ReserveTable from "../sections/reservePages/ReserveTable";
import ImagesReserve from "../sections/reservePages/ImagesReserve";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
    <div className="reserve-top">
      <ReserveTable />
    </div>
    <div>
      <ImagesReserve />
    </div>
    </>
    
  );
}
