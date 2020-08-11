import ActionProvider from "./ActionProvider";

const { useEffect } = require("react");

class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
      }
  
      if (lowerCaseMessage.includes("javascript")) {
        this.actionProvider.handleJavascriptList();
      }
    }
  }
  
  export default MessageParser;
  
 /*function MessageParser(actionProvider){
   console.log(ActionProvider);
   actionProvider=ActionProvider;

  

    const parse=(message)=>{
    const lowerCaseMessage = message.toLowerCase();
  
    if (lowerCaseMessage.includes("hello")) {
      ActionProvider.greet();
    }

    if (lowerCaseMessage.includes("sad")) {
      ActionProvider.handleSadList();
    }
    if (lowerCaseMessage.includes("anxious")) {
      ActionProvider.handleAnxiousList();
    }
    if (lowerCaseMessage.includes("uncertain")) {
      ActionProvider.handleUncertainList();
    }
    if (lowerCaseMessage.includes("scared")) {
      ActionProvider.handleScaredList();
    }

   }
 

  }
 export default MessageParser;
 */