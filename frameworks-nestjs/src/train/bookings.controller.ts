import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiExtension,
  ApiOAuth2,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './entities/booking.entity';
import { BookingPayment } from './entities/booking-payment.entity';
import { TrainService } from './train.service';

@ApiTags('Bookings')
@ApiBearerAuth('BearerAuth')
@ApiOAuth2(['bookings:read', 'bookings:write'], 'OAuth2')
@Controller('bookings')
export class BookingsController {
  constructor(private readonly trainService: TrainService) {}

  @Get()
  @ApiOperation({ summary: 'List existing bookings' })
  @ApiOkResponse({ type: [Booking] })
  listBookings(): Booking[] {
    return this.trainService.listBookings();
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a booking' })
  @ApiBody({ type: CreateBookingDto })
  @ApiCreatedResponse({ type: Booking })
  @ApiExtension('x-speakeasy-retries', {
    strategy: 'backoff',
    backoff: {
      initialInterval: 1000,
      maxInterval: 80000,
      maxElapsedTime: 3600000,
      exponent: 1.5,
    },
    statusCodes: ['5XX'],
    retryConnectionErrors: true,
  })
  createBooking(@Body() payload: CreateBookingDto): Booking {
    return this.trainService.createBooking(payload);
  }

  @Get(':bookingId')
  @ApiOperation({ summary: 'Get a booking' })
  @ApiParam({ name: 'bookingId', type: String })
  @ApiOkResponse({ type: Booking })
  getBooking(@Param('bookingId') bookingId: string): Booking {
    return this.trainService.getBooking(bookingId);
  }

  @Delete(':bookingId')
  @ApiOperation({ summary: 'Delete a booking' })
  @ApiParam({ name: 'bookingId', type: String })
  @HttpCode(204)
  deleteBooking(@Param('bookingId') bookingId: string): void {
    this.trainService.deleteBooking(bookingId);
  }

  @Post(':bookingId/payment')
  @ApiOperation({ summary: 'Pay for a booking' })
  @ApiParam({ name: 'bookingId', type: String })
  @ApiOkResponse({ type: BookingPayment })
  createPayment(@Param('bookingId') bookingId: string): BookingPayment {
    return this.trainService.createPayment(bookingId);
  }
}
