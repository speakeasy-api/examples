import { Station } from "./models/station";
import { Trip } from "./models/trip";

export const stations: Station[] = [
  {
    id: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
    name: "Berlin Hauptbahnhof",
    address: "Invalidenstraße 10557 Berlin, Germany",
    country_code: "DE",
    timezone: "Europe/Berlin",
  },
  {
    id: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
    name: "Paris Gare du Nord",
    address: "18 Rue de Dunkerque 75010 Paris, France",
    country_code: "FR",
    timezone: "Europe/Paris",
  },
];

export const trips: Trip[] = [
  {
    id: "ea399ba1-6d95-433f-92d1-83f67b775594",
    origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
    destination: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
    departure_time: "2024-02-01T10:00:00Z",
    arrival_time: "2024-02-01T16:00:00Z",
    price: 50,
    operator: "Deutsche Bahn",
    bicycles_allowed: true,
    dogs_allowed: true,
  },
  {
    id: "4d67459c-af07-40bb-bb12-178dbb88e09f",
    origin: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
    destination: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
    departure_time: "2024-02-01T12:00:00Z",
    arrival_time: "2024-02-01T18:00:00Z",
    price: 50,
    operator: "SNCF",
    bicycles_allowed: true,
    dogs_allowed: true,
  },
];

import { Booking } from "./models/booking";

export const bookings: Booking[] = [
  {
    id: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
    trip_id: "ea399ba1-6d95-433f-92d1-83f67b775594",
    passenger_name: "John Doe",
    has_bicycle: true,
    has_dog: true,
  },
  {
    id: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
    trip_id: "4d67459c-af07-40bb-bb12-178dbb88e09f",
    passenger_name: "Jane Smith",
    has_bicycle: false,
    has_dog: false,
  },
];