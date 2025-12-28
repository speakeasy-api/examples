import { Controller, Get, Query, Route, Tags } from "tsoa";
import { GetStationsQuery } from "./models/queries";
import { Station } from "./models/station";
import { StationsService } from "./stationsService";

/**
 * Manages train station information.
 * Provides search and listing functionality for railway stations.
 */
@Route("stations")
@Tags("Stations")
export class StationsController extends Controller {
  /**
   * Retrieves a list of train stations with optional filtering.
   * Supply search terms, country codes, or geographic coordinates to filter results.
   */
  @Get()
  public async listStations(
    @Query() page?: number,
    @Query() limit?: number,
    @Query() coordinates?: string,
    @Query() search?: string,
    @Query() country?: string
  ): Promise<Station[]> {
    const query: GetStationsQuery = {
      page,
      limit,
      coordinates,
      search,
      country,
    };
    return new StationsService().listStations(query);
  }
}
