package server

import (
	"context"
	"fmt"
	"slices"
	"sync"

	speakeasyv1 "github.com/speakeasy-api/speakeasy-grpc-gateway-example/proto/speakeasy/v1"
)

type Backend struct {
	mu       sync.Mutex
	Stations []*speakeasyv1.Station
	Trips    []*speakeasyv1.Trip
	Bookings []*speakeasyv1.Booking
}

func New() *Backend {
	return &Backend{
		Stations: slices.Clone(stations),
		Trips:    slices.Clone(trips),
		Bookings: slices.Clone(bookings),
	}
}

var (
	stations = []*speakeasyv1.Station{
		{
			Id:          "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
			Name:        "Berlin Hauptbahnhof",
			Address:     "Invalidenstrasse 10557 Berlin, Germany",
			CountryCode: "DE",
			Timezone:    "Europe/Berlin",
		},
		{
			Id:          "b2e783e1-c824-4d63-b37a-d8d698862f1d",
			Name:        "Paris Gare du Nord",
			Address:     "18 Rue de Dunkerque 75010 Paris, France",
			CountryCode: "FR",
			Timezone:    "Europe/Paris",
		},
	}

	trips = []*speakeasyv1.Trip{
		{
			Id:              "ea399ba1-6d95-433f-92d1-83f67b775594",
			Origin:          "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
			Destination:     "b2e783e1-c824-4d63-b37a-d8d698862f1d",
			DepartureTime:   "2024-02-01T10:00:00Z",
			ArrivalTime:     "2024-02-01T16:00:00Z",
			Price:           50,
			Operator:        "Deutsche Bahn",
			BicyclesAllowed: true,
			DogsAllowed:     true,
		},
		{
			Id:              "4d67459c-af07-40bb-bb12-178dbb88e09f",
			Origin:          "b2e783e1-c824-4d63-b37a-d8d698862f1d",
			Destination:     "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
			DepartureTime:   "2024-02-01T12:00:00Z",
			ArrivalTime:     "2024-02-01T18:00:00Z",
			Price:           50,
			Operator:        "SNCF",
			BicyclesAllowed: true,
			DogsAllowed:     true,
		},
	}

	bookings = []*speakeasyv1.Booking{
		{
			Id:            "1725ff48-ab45-4bb5-9d02-88745177dedb",
			TripId:        "ea399ba1-6d95-433f-92d1-83f67b775594",
			PassengerName: "John Doe",
			HasBicycle:    true,
			HasDog:        true,
		},
	}
)

func (b *Backend) ListStations(ctx context.Context, in *speakeasyv1.ListStationsRequest) (*speakeasyv1.ListStationsResponse, error) {
	b.mu.Lock()
	defer b.mu.Unlock()

	return &speakeasyv1.ListStationsResponse{Stations: slices.Clone(b.Stations)}, nil
}

func (b *Backend) GetTrips(ctx context.Context, in *speakeasyv1.GetTripsRequest) (*speakeasyv1.GetTripsResponse, error) {
	b.mu.Lock()
	defer b.mu.Unlock()

	filtered := make([]*speakeasyv1.Trip, 0)
	for _, trip := range b.Trips {
		if trip.Origin != in.Origin || trip.Destination != in.Destination {
			continue
		}
		if in.Bicycles && !trip.BicyclesAllowed {
			continue
		}
		if in.Dogs && !trip.DogsAllowed {
			continue
		}
		filtered = append(filtered, trip)
	}

	return &speakeasyv1.GetTripsResponse{Trips: filtered}, nil
}

func (b *Backend) ListBookings(ctx context.Context, in *speakeasyv1.ListBookingsRequest) (*speakeasyv1.ListBookingsResponse, error) {
	b.mu.Lock()
	defer b.mu.Unlock()

	return &speakeasyv1.ListBookingsResponse{Bookings: slices.Clone(b.Bookings)}, nil
}

func (b *Backend) CreateBooking(ctx context.Context, in *speakeasyv1.CreateBookingRequest) (*speakeasyv1.Booking, error) {
	b.mu.Lock()
	defer b.mu.Unlock()

	if in.Booking == nil {
		return nil, fmt.Errorf("booking payload is required")
	}

	newBooking := &speakeasyv1.Booking{
		Id:            fmt.Sprintf("booking-%d", len(b.Bookings)+1),
		TripId:        in.Booking.TripId,
		PassengerName: in.Booking.PassengerName,
		HasBicycle:    in.Booking.HasBicycle,
		HasDog:        in.Booking.HasDog,
	}

	b.Bookings = append(b.Bookings, newBooking)
	return newBooking, nil
}

func (b *Backend) GetBooking(ctx context.Context, in *speakeasyv1.GetBookingRequest) (*speakeasyv1.Booking, error) {
	b.mu.Lock()
	defer b.mu.Unlock()

	for _, booking := range b.Bookings {
		if booking.Id == in.BookingId {
			return booking, nil
		}
	}

	return nil, fmt.Errorf("booking %s not found", in.BookingId)
}

func (b *Backend) DeleteBooking(ctx context.Context, in *speakeasyv1.DeleteBookingRequest) (*speakeasyv1.DeleteBookingResponse, error) {
	b.mu.Lock()
	defer b.mu.Unlock()

	for i, booking := range b.Bookings {
		if booking.Id == in.BookingId {
			b.Bookings = append(b.Bookings[:i], b.Bookings[i+1:]...)
			return &speakeasyv1.DeleteBookingResponse{}, nil
		}
	}

	return nil, fmt.Errorf("booking %s not found", in.BookingId)
}
