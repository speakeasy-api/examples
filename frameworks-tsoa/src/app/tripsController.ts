import { Controller, Get, Query, Route, Tags } from "tsoa";
import { GetTripsQuery } from "./models/queries";
import { Trip } from "./models/trip";
import { TripsService } from "./tripsService";

/**
 * Searches and retrieves available train trips.
 * Allows filtering by origin, destination, date, and passenger requirements.
 */
@Route("trips")
@Tags("Trips")
export class TripsController extends Controller {
  /**
   * Search for available train trips between stations.
   * Supply origin and destination station IDs, travel date, and optional filters for bicycles and dogs.
   */
  @Get()
  public async getTrips(
    @Query() origin: string,
    @Query() destination: string,
    @Query() date: string,
    @Query() page?: number,
    @Query() limit?: number,
    @Query() bicycles?: boolean,
    @Query() dogs?: boolean
  ): Promise<Trip[]> {
    const query: GetTripsQuery = {
      origin,
      destination,
      date,
      page,
      limit,
      bicycles,
      dogs,
    };
    return new TripsService().getTrips(query);
  }
}
