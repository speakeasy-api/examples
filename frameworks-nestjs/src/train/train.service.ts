import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { TripsQueryDto } from './dto/trips-query.dto';
import { Booking } from './entities/booking.entity';
import { BookingPayment } from './entities/booking-payment.entity';
import { Station } from './entities/station.entity';
import { Trip } from './entities/trip.entity';

@Injectable()
export class TrainService {
  private readonly stations: Station[] = [
    {
      id: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
      name: 'Berlin Hauptbahnhof',
      address: 'Invalidenstraße 10557 Berlin, Germany',
      country_code: 'DE',
      timezone: 'Europe/Berlin',
    },
    {
      id: 'b2e783e1-c824-4d63-b37a-d8d698862f1d',
      name: 'Paris Gare du Nord',
      address: '18 Rue de Dunkerque 75010 Paris, France',
      country_code: 'FR',
      timezone: 'Europe/Paris',
    },
  ];

  private readonly trips: Trip[] = [
    {
      id: 'ea399ba1-6d95-433f-92d1-83f67b775594',
      origin: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
      destination: 'b2e783e1-c824-4d63-b37a-d8d698862f1d',
      departure_time: '2026-05-21T10:00:00Z',
      arrival_time: '2026-05-21T16:00:00Z',
      operator: 'Deutsche Bahn',
      price: 50,
      bicycles_allowed: true,
      dogs_allowed: true,
    },
  ];

  private readonly bookings: Booking[] = [
    {
      id: '1725ff48-ab45-4bb5-9d02-88745177dedb',
      trip_id: 'ea399ba1-6d95-433f-92d1-83f67b775594',
      passenger_name: 'John Doe',
      has_bicycle: true,
      has_dog: false,
    },
  ];

  getStations(search?: string, country?: string): Station[] {
    return this.stations.filter((station) => {
      const searchMatch = search
        ? station.name.toLowerCase().includes(search.toLowerCase()) ||
          station.address.toLowerCase().includes(search.toLowerCase())
        : true;
      const countryMatch = country ? station.country_code === country.toUpperCase() : true;
      return searchMatch && countryMatch;
    });
  }

  getTrips(query: TripsQueryDto): Trip[] {
    return this.trips.filter((trip) => {
      const routeMatch = trip.origin === query.origin && trip.destination === query.destination;
      const bikeMatch = query.bicycles ? trip.bicycles_allowed : true;
      const dogMatch = query.dogs ? trip.dogs_allowed : true;
      return routeMatch && bikeMatch && dogMatch;
    });
  }

  listBookings(): Booking[] {
    return this.bookings;
  }

  createBooking(payload: CreateBookingDto): Booking {
    const created: Booking = {
      id: crypto.randomUUID(),
      ...payload,
    };
    this.bookings.push(created);
    return created;
  }

  getBooking(bookingId: string): Booking {
    const booking = this.bookings.find((entry) => entry.id === bookingId);
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }
    return booking;
  }

  deleteBooking(bookingId: string): void {
    const index = this.bookings.findIndex((entry) => entry.id === bookingId);
    if (index < 0) {
      throw new NotFoundException('Booking not found');
    }
    this.bookings.splice(index, 1);
  }

  createPayment(bookingId: string): BookingPayment {
    this.getBooking(bookingId);

    return {
      id: crypto.randomUUID(),
      amount: 49.99,
      currency: 'eur',
      status: 'succeeded',
    };
  }
}
