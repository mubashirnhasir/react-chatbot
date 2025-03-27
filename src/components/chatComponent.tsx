import * as React from "react";
import { LuBot, LuSendHorizontal } from "react-icons/lu";
import useChatBot from "../hooks/useChatBot";


const ChatComponent: React.FunctionComponent = () => {
    const [input, setInput] = React.useState("")
    const {messages, sendMessage} = useChatBot()

    const handleSend = () => {
        if (input.trim()) {
            sendMessage(input)
            setInput("")
        }
    }

    return (
        <>
            <div className="flex flex-col h-[80vh] bg-white">
                <h2 className="p-4 font-semibold text-lg text-center bg-blue-100 text-blue-800 justify-center items-center gap-2">
                    React + OpenAi ChatBot <LuBot size={24} />
                </h2>
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    {
                        messages.map((msg, index) => (
                            <div key={index} className={`p-3 rounded-lg max-w-sm ${msg.sender === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-gray-800"} `}>
                                    {msg.text}
                            </div>
                        ))
                    }
                </div>
                <div className="flex items-center gap-2 p-4 bg-gray-50" >
                    <input type="text"
                        className="flex-1 p-2 border rounded-lg focus:outline-none"
                        placeholder="Your Message here"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        onClick={handleSend}
                    >
                        <LuSendHorizontal size={24} />
                    </button>
                </div>
            </div>
        </>
    )
}




export default ChatComponent;