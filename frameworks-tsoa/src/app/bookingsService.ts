import { bookings } from "./fixtures";
import { Booking } from "./models/booking";

export class BookingsService {
  public list(page = 1, limit = 10): Booking[] {
    const start = (page - 1) * limit;
    return bookings.slice(start, start + limit);
  }

  public get(bookingId: string): Booking | undefined {
    return bookings.find((b) => b.id === bookingId);
  }

  public create(input: Omit<Booking, "id">): Booking {
    const id = crypto.randomUUID();
    const booking: Booking = { id, ...input };
    bookings.push(booking);
    return booking;
  }

  public delete(bookingId: string): boolean {
    const idx = bookings.findIndex((b) => b.id === bookingId);
    if (idx === -1) return false;
    bookings.splice(idx, 1);
    return true;
  }
}
