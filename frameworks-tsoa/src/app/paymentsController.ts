import {
  Body,
  Controller,
  Example,
  OperationId,
  Path,
  Post,
  Response,
  Route,
  SuccessResponse,
  Tags,
} from "tsoa";
import { BookingPayment, Currency, PaymentStatus } from "./models/payment";
import { PaymentsService } from "./paymentsService";

/**
 * Controller for processing booking payments.
 * Handles payment processing using cards or bank accounts.
 */
@Route("bookings")
@Tags("Payments")
export class PaymentsController extends Controller {
  /**
   * Process a payment for a booking.
   * A payment is an attempt to pay for the booking, which will confirm the booking
   * for the user and enable them to get their tickets.
   *
   * Note: Bookings usually expire within 1 hour, so payment must be made before
   * the expiry date.
   *
   * @summary Pay for a booking
   * @param bookingId The ID of the booking to pay for
   * @param requestBody Payment details including amount, currency, and payment source
   * @returns The processed payment details with masked sensitive information
   */
  @Post("{bookingId}/payment")
  @OperationId("createBookingPayment")
  @SuccessResponse("200", "Payment successful")
  @Response(400, "Invalid payment details")
  @Response(401, "Unauthorized - authentication required")
  @Response(403, "Forbidden - insufficient permissions")
  @Response(404, "Booking not found")
  @Response(429, "Too many requests")
  @Response(500, "Internal server error")
  @Example<BookingPayment>({
    id: "2e3b4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a",
    amount: 49.99,
    currency: Currency.GBP,
    source: {
      object: "card",
      name: "Francis Bourgeois",
      number: "************4242",
      cvc: "***",
      exp_month: 12,
      exp_year: 2025,
      address_country: "gb",
      address_post_code: "N12 9XX",
    },
    status: PaymentStatus.SUCCEEDED,
  })
  public async createPayment(
    @Path("bookingId") bookingId: string,
    @Body() requestBody: Omit<BookingPayment, "id" | "status">
  ): Promise<BookingPayment> {
    return new PaymentsService().create(bookingId, requestBody);
  }
}
