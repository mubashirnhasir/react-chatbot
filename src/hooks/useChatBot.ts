import axios from "axios";
import { useState } from "react";

interface Message {
    text: string;
    sender: "user" | "bot";
}

const useChatBot = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const sendMessage = async (message: string) => {
        const newMessages: Message[] = [
            ...messages,
            { text: message, sender: "user" },
        ];
        setMessages(newMessages);

        try {
            const response = await axios.post(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY",
                {
                    contents: [
                        {
                            parts: [
                                {
                                    text: message,
                                },
                            ],
                        },
                    ],
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const botMessage = response.data.candidates[0]?.content?.parts[0]?.text || "I'm sorry, I couldn't generate a response.";
            setMessages([...newMessages, { text: botMessage, sender: "bot" }]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
            setMessages([...newMessages, { text: "An error occurred while fetching the response.", sender: "bot" }]);
        }
    };

    return { messages, sendMessage };
};

export default useChatBot;
