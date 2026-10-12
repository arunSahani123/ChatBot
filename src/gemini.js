
import Groq from "groq-sdk";

const apiKey = import.meta.env.VITE_GROQ_API_KEY;

const groq = new Groq({
  apiKey,
  dangerouslyAllowBrowser: true,
});

async function run(prompt) {
  try {
    if (!prompt?.trim()) {
      throw new Error("Please enter a message.");
    }

    const completion = await groq.chat.completions.create({
  model: "openai/gpt-oss-20b",
  messages: [
   
{
  role: "system",
  content: `
You are a helpful AI assistant.

Rules:
1. Give short, clear, and well-defined answers.
2. Use simple English that is easy to understand.
3. Do not use #, ##, **, or unnecessary Markdown symbols.
4. Use simple headings without hash symbols.
5. Use numbered lists or bullet points when needed.
6. Avoid unnecessary explanations and repetition.
7. For coding questions, provide correct code with a brief explanation.
8. Answer directly and professionally.
9. Give detailed answers only when explicitly requested.
10. Keep the response clean, readable, and properly formatted.
  `
},

    {
      role: "user",
      content: prompt,
    },
  ],
});

const response =
      completion.choices[0]?.message?.content ?? "";

    // console.log("AI Response:", response);

    return response;
  } catch (error) {
    console.error("Groq API Error:", error);
    throw error;
  }
}

export default run;
