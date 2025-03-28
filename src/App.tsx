import * as React from "react";
import ChatComponent from "./components/chatComponent";


const App: React.FunctionComponent= ()=>{
  return (
    <>
        <div className="w-[80%] m-2 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <ChatComponent/>
            </div>
        </div>
    </>
  )
}




export default App;