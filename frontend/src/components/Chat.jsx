import { useState, useEffect, useRef } from "react";
import { useAccount } from "wagmi";
import { useWaku } from "@waku/react";
import { createEncoder, createDecoder } from "@waku/sdk";
import protobuf from "protobufjs";
import { useLightPush } from "@waku/react";

function Chat({ setShowChat }) {
  const { address, isConnected } = useAccount();
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Update the inputMessage state as the user input changes
  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  // Create and start a Light Node
  const { node, error, isLoading } = useWaku();

  // Create a message encoder and decoder
  const contentTopic = "/waku-react-guide/1/chat/proto";
  const encoder = createEncoder({ contentTopic });
  const decoder = createDecoder(contentTopic);

  const { push } = useLightPush({ node, encoder });

  const ChatMessage = new protobuf.Type("ChatMessage")
    .add(new protobuf.Field("timestamp", 1, "uint64"))
    .add(new protobuf.Field("sender", 2, "string"))
    .add(new protobuf.Field("recipient", 3, "string"))
    .add(new protobuf.Field("message", 4, "string"));

 const sendMessage = async () => {
   if (!push || inputMessage.length === 0) return;

   const timestamp = Date.now();
   const protoMessage = ChatMessage.create({
     timestamp,
     sender: address,
     recipient: "0x9D082e34b64532ADb8AF5594D61E9A6b1D7e55eF",
     message: inputMessage,
   });

    if (errors.length === 0) {
      setInputMessage("");

   if (errors.length === 0) {
     setInputMessage("");
     setMessages((prevMessages) => [
       ...prevMessages,
       {
         timestamp,
         sender: address,
         recipient: "0x9D082e34b64532ADb8AF5594D61E9A6b1D7e55eF",
         message: inputMessage,
       },
     ]);
     console.log("MESSAGE PUSHED");
   } else {
     console.log(errors);
   }
 }
}

  const formatHour = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHour = `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}`;
    return formattedHour;
  };

    const chatModalRef = useRef();

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          chatModalRef.current &&
          !chatModalRef.current.contains(event.target)
        ) {
          setShowChat(false);
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);

  return (
    <div ref={chatModalRef}>
      <div className="flex flex-col h-[100vh] bg-black/60 fixed w-[50vw] top-0 right-0">
        <div className="chat-body">
          {messages.map((message, index) => (
            <div key={index} className="flex justify-between">
              <div className="text-white">{message.message}</div>
              <span className="text-white">
                {formatHour(message.timestamp)}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center px-4">
          <input
            type="text"
            id="message-input"
            value={inputMessage}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="outline-none"
          />
          <button className="text-white px-2" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
          }
        

export default Chat;
