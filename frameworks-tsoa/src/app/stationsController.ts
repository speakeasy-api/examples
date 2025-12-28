import { Controller, Get, Query, Route, Tags } from "tsoa";
import { GetStationsQuery } from "./models/queries";
import { Station } from "./models/station";
import { StationsService } from "./stationsService";

@Route("stations")
@Tags("Stations")
export class StationsController extends Controller {
  @Get()
  public async listStations(
    @Query() page?: number,
    @Query() limit?: number,
    @Query() coordinates?: string,
    @Query() search?: string,
    @Query() country?: string
  ): Promise<Station[]> {
    const query: GetStationsQuery = { page, limit, coordinates, search, country };
    return new StationsService().listStations(query);
  }
}
