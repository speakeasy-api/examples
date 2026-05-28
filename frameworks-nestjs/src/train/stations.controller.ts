import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOAuth2,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Station } from './entities/station.entity';
import { TrainService } from './train.service';

@ApiTags('Stations')
@ApiBearerAuth('BearerAuth')
@ApiOAuth2(['bookings:read', 'bookings:write'], 'OAuth2')
@Controller('stations')
export class StationsController {
  constructor(private readonly trainService: TrainService) {}

  @Get()
  @ApiOperation({ summary: 'Get a list of train stations' })
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiQuery({ name: 'country', required: false, type: String })
  @ApiOkResponse({ type: [Station] })
  getStations(
    @Query('search') search?: string,
    @Query('country') country?: string,
  ): Station[] {
    return this.trainService.getStations(search, country);
  }
}
