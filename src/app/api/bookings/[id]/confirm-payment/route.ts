import { NextResponse } from "next/server"
import { getSupabaseServer } from "@/lib/supabase/server"

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
    const bookingId = id
    if (!bookingId) {
      return NextResponse.json({ error: "Missing booking id." }, { status: 400 })
    }

    const supabase = getSupabaseServer()

    // For now we "confirm" payment in the backend.
    // Later, this can be replaced by Stripe webhook/PaymentIntent flow.
    // Using a local random reference for now; replace with Stripe/payment provider reference later.
    const paymentReference = `demo_${crypto.randomUUID()}`

    const { error } = await supabase
      .from("bookings")
      .update({
        status: "paid",
        payment_reference: paymentReference,
        paid_at: new Date().toISOString(),
      })
      .eq("id", bookingId)

    if (error) {
      return NextResponse.json(
        { error: error.message ?? "Failed to confirm payment." },
        { status: 400 },
      )
    }

    return NextResponse.json({ ok: true, paymentReference })
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unexpected error." },
      { status: 500 },
    )
  }
}

