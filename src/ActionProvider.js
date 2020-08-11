
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  

    handleSadList = () =>{
    const message = this.createChatBotMessage(
      "Would you like to:",
      {
        widget: "SadLinks",
      }
    );

    this.updateChatbotState(message);
  }

  handleAnxiousList = () =>{
    const message = this.createChatBotMessage(
      "Would you like to:",
      {
        widget: "AnxiousLinks",
      }
    );

    this.updateChatbotState(message);
  }

  handleUncertainList = () =>{
    const message = this.createChatBotMessage(
      "Would you like to:",
      {
        widget: "UncertainLinks",
      }
    );

    this.updateChatbotState(message);
  }

  handleScaredList = () =>{
    const message = this.createChatBotMessage(
      "Would you like to:",
      {
        widget: "ScaredLinks",
      }
    );

    this.updateChatbotState(message);
  }

  handleLoneliness = () =>{
    const message = this.createChatBotMessage(
      "Reach out because loneliness is painful and can confuse you into thinking that you are a loser, an outcast. You might react by withdrawing into yourself, your thoughts, and your lonely feelings and this is not helpful",
      {
        widget: "cuteSong",
      }
    );

    this.updateChatbotState(message);
  }
  handleRage = () =>{
    const message = this.createChatBotMessage(
      "You might think that venting your anger is healthy,  that your anger is justified, but the truth is that anger is much more likely to have a negative impact on the way people see you, impair your judgment, and get in the way of success.",
      {
        widget: "cuteSong",
      }
    );

    this.updateChatbotState(message);
  }
  handleComfort = () =>{
    const message = this.createChatBotMessage(
      "I'm here to listen",
      {
        widget: "cuteSong",
      }
    );

    this.updateChatbotState(message);
  }
  handleTalk = () =>{
    const message = this.createChatBotMessage(
      
        "Or do you want to Talk?",
        {
          widget: "Talk",
        }
      
    );

    this.updateChatbotState(message);
  }
  
    updateChatbotState(message) {
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  
 /*
 function ActionProvider(createChatBotMessage, setStateFunc){
   

  const handleSadList = () =>{
    const message = createChatBotMessage(
      "Would you like to:",
      {
        widget: "SadLinks",
      }
    );

    updateChatbotState(message);
  }

  const handleAnxiousList = () =>{
    const message = createChatBotMessage(
      "Would you like to:",
      {
        widget: "AnxiousLinks",
      }
    );

    updateChatbotState(message);
  }

  const handleUncertainList = () =>{
    const message = createChatBotMessage(
      "Would you like to:",
      {
        widget: "UncertainLinks",
      }
    );

    updateChatbotState(message);
  }

  const handleScaredList = () =>{
    const message = createChatBotMessage(
      "Would you like to:",
      {
        widget: "ScaredLinks",
      }
    );

    updateChatbotState(message);
  }
  
  const updateChatbotState = (message) => {
    

    setStateFunc((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
 }
 export default ActionProvider;
 */