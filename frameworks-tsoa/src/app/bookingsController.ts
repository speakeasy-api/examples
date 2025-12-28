import {
  Body,
  Controller,
  Delete,
  Example,
  Get,
  OperationId,
  Path,
  Post,
  Query,
  Res,
  Response,
  Route,
  SuccessResponse,
  Tags,
  TsoaResponse,
} from "tsoa";
import { Booking } from "./models/booking";
import { BookingsService } from "./bookingsService";

/**
 * Controller for managing train travel bookings.
 * Handles creation, retrieval, listing, and deletion of passenger bookings.
 */
@Route("bookings")
@Tags("Bookings")
export class BookingsController extends Controller {
  /**
   * Retrieves a paginated list of all bookings.
   */
  @Get()
  @OperationId("listBookings")
  @SuccessResponse("200", "Successfully retrieved bookings")
  @Example<Booking[]>([
    {
      id: "3f3e3e1-c824-4d63-b37a-d8d698862f1d",
      trip_id: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
      passenger_name: "John Doe",
      has_bicycle: true,
      has_dog: false,
    },
  ])
  public async listBookings(
    @Query("page") page?: number,
    @Query("limit") limit?: number
  ): Promise<Booking[]> {
    return new BookingsService().list(page ?? 1, limit ?? 10);
  }

  /**
   * Retrieves a specific booking by its unique identifier.
   */
  @Get("{bookingId}")
  @OperationId("getBooking")
  @SuccessResponse("200", "Booking found and returned")
  @Response(404, "Booking not found")
  @Example<Booking>({
    id: "3f3e3e1-c824-4d63-b37a-d8d698862f1d",
    trip_id: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
    passenger_name: "John Doe",
    has_bicycle: true,
    has_dog: false,
  })
  public async getBooking(
    @Path("bookingId") bookingId: string,
    @Res() notFound: TsoaResponse<404, { reason: string }>
  ): Promise<Booking> {
    const booking = new BookingsService().get(bookingId);
    if (!booking) return notFound(404, { reason: "Booking not found" });
    return booking;
  }

  /**
   * Creates a new booking for a train trip.
   */
  @Post()
  @OperationId("createBooking")
  @SuccessResponse("201", "Booking successfully created")
  @Response(400, "Invalid booking data")
  @Response(422, "Validation failed")
  @Example<Booking>({
    id: "3f3e3e1-c824-4d63-b37a-d8d698862f1d",
    trip_id: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
    passenger_name: "John Doe",
    has_bicycle: true,
    has_dog: false,
  })
  public async createBooking(
    @Body() requestBody: Omit<Booking, "id">
  ): Promise<Booking> {
    this.setStatus(201);
    return new BookingsService().create(requestBody);
  }

  /**
   * Deletes an existing booking.
   */
  @Delete("{bookingId}")
  @OperationId("deleteBooking")
  @SuccessResponse("204", "Booking successfully deleted")
  @Response(404, "Booking not found")
  public async deleteBooking(
    @Path("bookingId") bookingId: string,
    @Res() notFound: TsoaResponse<404, { reason: string }>
  ): Promise<void> {
    const ok = new BookingsService().delete(bookingId);
    if (!ok) return notFound(404, { reason: "Booking not found" });
    this.setStatus(204);
    return;
  }
}
