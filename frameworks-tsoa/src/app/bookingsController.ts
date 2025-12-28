import { Body, Controller, Delete, Get, Path, Post, Query, Res, Route, Tags, TsoaResponse } from "tsoa";
import { Booking } from "./models/booking";
import { BookingsService } from "./bookingsService";

@Route("bookings")
@Tags("Bookings")
export class BookingsController extends Controller {
  @Get()
  public async listBookings(
    @Query() page?: number,
    @Query() limit?: number
  ): Promise<Booking[]> {
    return new BookingsService().list(page ?? 1, limit ?? 10);
  }

  @Get("{bookingId}")
  public async getBooking(
    @Path() bookingId: string,
    @Res() notFound: TsoaResponse<404, { reason: string }>
  ): Promise<Booking> {
    const booking = new BookingsService().get(bookingId);
    if (!booking) return notFound(404, { reason: "Booking not found" });
    return booking;
  }

  @Post()
  public async createBooking(
    @Body() requestBody: Omit<Booking, "id">
  ): Promise<Booking> {
    return new BookingsService().create(requestBody);
  }

  @Delete("{bookingId}")
  public async deleteBooking(
    @Path() bookingId: string,
    @Res() notFound: TsoaResponse<404, { reason: string }>
  ): Promise<void> {
    const ok = new BookingsService().delete(bookingId);
    if (!ok) return notFound(404, { reason: "Booking not found" });
    this.setStatus(204);
    return;
  }
}
