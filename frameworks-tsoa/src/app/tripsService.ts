import { GetTripsQuery } from "./models/queries";
import { Trip } from "./models/trip";
import { trips } from "./fixtures";

export class TripsService {
  public getTrips(query: GetTripsQuery): Trip[] {
    let result = trips.filter(
      (t) => t.origin === query.origin && t.destination === query.destination
    );
    if (query.bicycles === true) {
      result = result.filter((t) => t.bicycles_allowed === true);
    }
    if (query.dogs === true) {
      result = result.filter((t) => t.dogs_allowed === true);
    }
    if (query.date) {
      const day = query.date.split("T")[0];
      result = result.filter((t) => t.departure_time.startsWith(day));
    }
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const start = (page - 1) * limit;
    return result.slice(start, start + limit);
  }
}
