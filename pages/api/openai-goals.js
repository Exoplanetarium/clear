import { OpenAI, OpenAIApi } from "openai";

export default async function goalsHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { prompt } = req.body;

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    try {
        const result = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                'role': 'user',
                'content': prompt,
            }],
            temperature: 0.7,
            max_tokens: 3098,
        });
        const messageContent = result.choices[0].message.content;
        res.status(200).json({ message: messageContent });
    } catch (error) {
        if (error instanceof OpenAI.APIError) {
            console.error(error.status);  // e.g. 401
            console.error(error.message); // e.g. The authentication token you passed was invalid...
            console.error(error.code);  // e.g. 'invalid_api_key'
            console.error(error.type);  // e.g. 'invalid_request_error'
        } else {
            // Non-API error
            console.log(error);
        }
    }
}
