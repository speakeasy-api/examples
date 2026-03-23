import { BookingPayment, PaymentStatus } from "./models/payment";

// Simple in-memory store for demonstration
const payments: BookingPayment[] = [];

export class PaymentsService {
  /**
   * Process a payment for a booking
   */
  public create(bookingId: string, payment: Omit<BookingPayment, "id" | "status">): BookingPayment {
    // In a real system, we'd validate the booking exists
    void bookingId;
    
    const id = crypto.randomUUID();
    
    // Mask sensitive data on the source
    let maskedSource = { ...payment.source };
    if (maskedSource.object === "card") {
      // Mask all but last 4 digits of card number
      const lastFour = maskedSource.number.slice(-4);
      maskedSource = {
        ...maskedSource,
        number: `************${lastFour}`,
        cvc: "***" // Never return CVC
      };
    } else if (maskedSource.object === "bank_account") {
      // Mask all but last 4 digits of account number
      const lastFour = maskedSource.number.slice(-4);
      maskedSource = {
        ...maskedSource,
        number: `*********${lastFour}`
      };
    }

    const newPayment: BookingPayment = {
      id,
      ...payment,
      source: maskedSource,
      status: PaymentStatus.SUCCEEDED // In a real system, this would be determined by the payment processor
    };
    
    payments.push(newPayment);
    return newPayment;
  }

  /**
   * Get a payment by booking ID
   */
  public getByBookingId(bookingId: string): BookingPayment | undefined {
    // In a real system, we'd filter by bookingId
    return payments.find(p => p.id === bookingId);
  }
}
