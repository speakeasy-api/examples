import type {
  Booking,
  BookingPayment,
  BookingPaymentRequest,
  CreateBookingRequest,
  Station,
  Trip,
} from './schemas';

const stations: Station[] = [
  {
    id: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
    name: 'Berlin Hauptbahnhof',
    address: 'Invalidenstrasse 10557 Berlin, Germany',
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

const trips: Trip[] = [
  {
    id: 'ea399ba1-6d95-433f-92d1-83f67b775594',
    origin: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
    destination: 'b2e783e1-c824-4d63-b37a-d8d698862f1d',
    departure_time: '2024-02-01T10:00:00Z',
    arrival_time: '2024-02-01T16:00:00Z',
    price: 50,
    operator: 'Deutsche Bahn',
    bicycles_allowed: true,
    dogs_allowed: true,
  },
  {
    id: '4d67459c-af07-40bb-bb12-178dbb88e09f',
    origin: 'b2e783e1-c824-4d63-b37a-d8d698862f1d',
    destination: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
    departure_time: '2024-02-01T12:00:00Z',
    arrival_time: '2024-02-01T18:00:00Z',
    price: 50,
    operator: 'SNCF',
    bicycles_allowed: true,
    dogs_allowed: true,
  },
];

const bookings: Booking[] = [
  {
    id: '1725ff48-ab45-4bb5-9d02-88745177dedb',
    trip_id: 'ea399ba1-6d95-433f-92d1-83f67b775594',
    passenger_name: 'John Doe',
    has_bicycle: true,
    has_dog: false,
  },
];

const payments: BookingPayment[] = [];

export function listStations(filters: { search?: string; country?: string }): Station[] {
  const search = filters.search?.trim().toLowerCase();
  const country = filters.country?.trim().toUpperCase();

  return stations.filter((station) => {
    if (country && station.country_code !== country) {
      return false;
    }

    if (!search) {
      return true;
    }

    return (
      station.name.toLowerCase().includes(search) ||
      station.address.toLowerCase().includes(search)
    );
  });
}

export function listTrips(filters: {
  origin: string;
  destination: string;
  bicycles?: boolean;
  dogs?: boolean;
}): Trip[] {
  return trips.filter((trip) => {
    if (trip.origin !== filters.origin || trip.destination !== filters.destination) {
      return false;
    }

    if (filters.bicycles && !trip.bicycles_allowed) {
      return false;
    }

    if (filters.dogs && !trip.dogs_allowed) {
      return false;
    }

    return true;
  });
}

export function listBookings(): Booking[] {
  return bookings;
}

export function findBooking(bookingId: string): Booking | undefined {
  return bookings.find((booking) => booking.id === bookingId);
}

export function createBooking(input: CreateBookingRequest): Booking {
  const booking: Booking = {
    id: crypto.randomUUID(),
    trip_id: input.trip_id,
    passenger_name: input.passenger_name,
    has_bicycle: input.has_bicycle ?? false,
    has_dog: input.has_dog ?? false,
  };

  bookings.push(booking);

  return booking;
}

export function deleteBooking(bookingId: string): boolean {
  const index = bookings.findIndex((booking) => booking.id === bookingId);

  if (index === -1) {
    return false;
  }

  bookings.splice(index, 1);
  return true;
}

export function createBookingPayment(
  bookingId: string,
  input: BookingPaymentRequest,
): BookingPayment {
  const payment: BookingPayment = {
    id: crypto.randomUUID(),
    amount: input.amount,
    currency: input.currency,
    source: input.source,
    status: 'succeeded',
  };

  payments.push(payment);

  return payment;
}

export function hasTrip(tripId: string): boolean {
  return trips.some((trip) => trip.id === tripId);
}
