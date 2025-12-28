import { Controller, Get, Query, Route, Tags } from "tsoa";
import { GetTripsQuery } from "./models/queries";
import { Trip } from "./models/trip";
import { TripsService } from "./tripsService";

@Route("trips")
@Tags("Trips")
export class TripsController extends Controller {
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
