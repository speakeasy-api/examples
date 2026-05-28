import { Module } from '@nestjs/common';
import { BookingsController } from './bookings.controller';
import { StationsController } from './stations.controller';
import { TripsController } from './trips.controller';
import { TrainService } from './train.service';

@Module({
  controllers: [StationsController, TripsController, BookingsController],
  providers: [TrainService],
})
export class TrainModule {}
