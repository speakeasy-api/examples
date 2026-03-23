import { GetStationsQuery } from "./models/queries";
import { Station } from "./models/station";
import { stations } from "./fixtures";

export class StationsService {
  public listStations(query: GetStationsQuery = {}): Station[] {
    let result = stations.slice();
    if (query.search) {
      const term = query.search.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(term) ||
          s.address.toLowerCase().includes(term)
      );
    }
    if (query.country) {
      result = result.filter((s) => s.country_code === query.country);
    }
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const start = (page - 1) * limit;
    return result.slice(start, start + limit);
  }
}
