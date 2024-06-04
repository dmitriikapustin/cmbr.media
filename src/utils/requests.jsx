'use server'

export default async function submitForm(values) {
	try {
		const token = process.env.TG_BOT_TOKEN
		const chatID = process.env.TG_BOT_CHAT_ID

		let messageField = `*Новая заявка*\n\n`

		messageField += `*Имя:* ${values.name}\n\n`
		messageField += `*Email:* ${values.email}\n\n`

		const req = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				chat_id: chatID,
				text: messageField,
				parse_mode: 'Markdown'
			})
		})

		const res = await req.json()
		return res.ok
	} catch (error) {
		return false
	}
}
