import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useWaku } from "@waku/react";
import { createEncoder, createDecoder } from "@waku/sdk";
import protobuf from 'protobufjs';
import { useLightPush } from '@waku/react';

function Chat() {
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

    //   const sendMessage = async () => {
    //     if (!push || inputMessage.length === 0) return;

    //     // Create a new message object
    //     const timestamp = Date.now();
    //     const protoMessage = ChatMessage.create({
    //       timestamp: timestamp,
    //       sender: address,
    //       recipient: "lender address",
    //       message: inputMessage,
    //     });

    //     // Serialise the message and push to the network
    //     const payload = ChatMessage.encode(protoMessage).finish();
    //     const { recipients, errors } = await push({ payload, timestamp });

    //     // Check for errors
    //     if (errors.length === 0) {
    //       setInputMessage("");
    //       console.log("MESSAGE PUSHED");
    //     } else {
    //       console.log(errors);
    //     }
    //   };

    const sendMessage = async () => {
      if (!push || inputMessage.length === 0) return;

      const timestamp = Date.now();
      const protoMessage = ChatMessage.create({
        timestamp: timestamp,
        sender: address,
        recipient: "lender address",
        message: inputMessage,
      });

      const payload = ChatMessage.encode(protoMessage).finish();
      const { recipients, errors } = await push({ payload, timestamp });

      if (errors.length === 0) {
        setInputMessage("");

        // Update the messages state with the sent message
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            timestamp,
            sender: address,
            recipient: "lender address",
            message: inputMessage,
          },
        ]);

        console.log("MESSAGE PUSHED");
      } else {
        console.log(errors);
      }
    };


    return (
      <>
        <div className="chat-interface">
          <div className="chat-body">
            {messages.map((message, index) => (
              <div key={index} className="chat-message">
                <span>{new Date(message.timestamp).toUTCString()}</span>
                <div className="message-text">{message.message}</div>
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              id="message-input"
              value={inputMessage}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
            <button className="send-button" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </>
    );
}

export default Chat