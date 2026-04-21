import { NextResponse } from "next/server"

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = typeof body.name === "string" ? body.name.trim() : ""
    const email = typeof body.email === "string" ? body.email.trim() : ""
    const message = typeof body.message === "string" ? body.message.trim() : ""

    if (!name || !email || !message || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid contact form payload" }, { status: 400 })
    }

    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN
    const telegramChatId = process.env.TELEGRAM_CHAT_ID

    if (!telegramBotToken || !telegramChatId) {
      console.error("Missing Telegram contact form environment variables")
      return NextResponse.json({ error: "Contact form is not configured" }, { status: 500 })
    }

    const telegramMessage = [
      "<b>New Portfolio Contact</b>",
      "",
      `<b>Name:</b> ${escapeHtml(name)}`,
      `<b>Email:</b> ${escapeHtml(email)}`,
      `<b>Message:</b> ${escapeHtml(message)}`,
    ].join("\n")

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: telegramMessage,
          parse_mode: "HTML",
        }),
      }
    )

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text()
      console.error("Telegram API request failed", errorText)
      return NextResponse.json({ error: "Failed to deliver message" }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Unhandled contact form error", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
