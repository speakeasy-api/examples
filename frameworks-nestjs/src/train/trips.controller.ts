import { Controller, Get, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOAuth2, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TripsQueryDto } from './dto/trips-query.dto';
import { Trip } from './entities/trip.entity';
import { TrainService } from './train.service';

@ApiTags('Trips')
@ApiBearerAuth('BearerAuth')
@ApiOAuth2(['bookings:read', 'bookings:write'], 'OAuth2')
@Controller('trips')
export class TripsController {
  constructor(private readonly trainService: TrainService) {}

  @Get()
  @ApiOperation({ summary: 'Get available train trips' })
  @ApiOkResponse({ type: [Trip] })
  getTrips(@Query() query: TripsQueryDto): Trip[] {
    return this.trainService.getTrips(query);
  }
}
