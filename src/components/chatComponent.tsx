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


    const handleKeyDown =(e: React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === "Enter"){
            e.preventDefault()
            handleSend()
        }
    }
    return (
        <>
            <div className="flex flex-col h-screen bg-white">
                <h2 className="p-4 font-semibold text-lg text-center shadow-lg bg-gray-200 text-gray-900 flex justify-center items-center gap-2">
                    React JS + Gemini <LuBot size={24} />
                </h2>
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    {
                        messages.map((msg, index) => (
                            <div key={index} className={`p-3 rounded-lg max-w-xl ${msg.sender === "user" ? "bg-gray-100   text-black text-lg font-regular italic ml-auto" : "bg-gray-800 text-white shadow-lg outline"} `}>
                                    {msg.text}
                            </div>
                        ))
                    }
                </div>
                <div  className="flex items-center gap-2 p-4 bg-gray-50" >
                    <input type="text"
                        className="flex-1 p-2 border border-none rounded-lg focus:outline-none"
                        placeholder="Your Message here"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
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