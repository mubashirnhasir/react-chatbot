import axios from "axios";
import { useState } from "react";

interface Message {
    text: string;
    sender: "user" | "bot";
}

const useChatBot = () => {
    const [messages, setMessages] = useState<Message[]>([])

    const sendMessage = async (message: string) => {
        const newMessages: Message[] = [
            ...messages,
            { text: message, sender: "user" },
        ]
        setMessages(newMessages)

        //kkkk
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-4",
                    message: [
                        {
                            role: "user",
                            content: message
                        }
                    ]
                },
                {
                    headers: {
                        Authorization: `Bearer ${"Your API KEY HERE"}`,
                        "Content-Type": "application/json"
                    },
                }
            )

            const botMessage = response.data.choices[0].message.content;
            setMessages([...newMessages, { text: botMessage, sender: "bot" }])
        } catch (error) {
            console.log("Error Fetching AI response :", error);
        }
    }
    return { messages, sendMessage }

}

export default useChatBot