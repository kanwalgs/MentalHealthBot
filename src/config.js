import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';

import Options from "./components/Options/Options"
import LinkList from "./components/LinkList/LinkList";
import Talk from "./components/Talk/Talk";
const config = { 
  botName: "Mental Health guide",
  initialMessages: [createChatBotMessage("Hi, I'm here to help. How are you feeling?", {
    widget: "Options",
        }),
    ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#4bdbcd",
    },
    chatButton: {
      backgroundColor: "#4bdbcd",
    },
  },
  widgets: [
    {
        widgetName: "Options",
       widgetFunc: (props) => <Options {...props} />,
        },
        {
          widgetName: "Talk",
         widgetFunc: (props) => <Talk {...props} />,
          },
    {
        widgetName: "SadLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        },

    {
            widgetName: "SadLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
              options: [
                {
                  text: "Listen to music",
                  url:
                    "https://www.youtube.com/watch?v=rZ-31aw6FOo",
                  id: 1,
                },
                {
                  text: "Meditate",
                  url:
                    "https://www.youtube.com/watch?v=W8a3T8pI9Ns",
                  id: 2,
                },
                {
                  text: "Watch funny videos",
                  url: "https://www.youtube.com/watch?v=gU_edP8yDoc",
                  id: 3,
                },
              ],
            },
          },
          {
            widgetName: "AnxiousLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            },
    
        {
                widgetName: "AnxiousLinks",
                widgetFunc: (props) => <LinkList {...props} />,
                props: {
                  options: [
                    {
                      text: "Do a breathing excercise",
                      url:
                        "https://www.youtube.com/watch?v=acUZdGd_3Dg",
                      id: 1,
                    },
                    {
                      text: "Distract yourself",
                      url:
                        "https://www.youtube.com/watch?v=ScpDOm08wx8",
                      id: 2,
                    },
                    {
                      text: "Listen to therapeutic music",
                      url: "https://www.youtube.com/watch?v=sztFHij0_W0",
                      id: 3,
                    },
                    
                  ],
                },
              },
              {
                widgetName: "UncertainLinks",
                widgetFunc: (props) => <LinkList {...props} />,
                },
        
            {
                    widgetName: "UncertainLinks",
                    widgetFunc: (props) => <LinkList {...props} />,
                    props: {
                      options: [
                        {
                          text: "Listen to motivational speakers",
                          url:
                            "https://www.youtube.com/watch?v=Sd-YsMs3OzA",
                          id: 1,
                        },
                        {
                          text: "Read lifechanging stories",
                          url:
                            "https://www.marcandangel.com/2013/05/21/4-short-stories-change-the-way-you-think/",
                          id: 2,
                        },
                        {
                          text: "Watch inspiring tedTalks",
                          url: "https://www.youtube.com/watch?v=7sxpKhIbr0E",
                          id: 3,
                        },
                        
                      ],
                    },
                  },
                  {
                    widgetName: "ScaredLinks",
                    widgetFunc: (props) => <LinkList {...props} />,
                    },
            
                {
                        widgetName: "ScaredLinks",
                        widgetFunc: (props) => <LinkList {...props} />,
                        props: {
                          options: [
                            {
                              text: "Listen to therapeutic music",
                              url: "https://www.youtube.com/watch?v=sztFHij0_W0",
                              id: 1,
                            },
                            {
                              text: "Read lifechanging stories",
                              url:
                                "https://www.marcandangel.com/2013/05/21/4-short-stories-change-the-way-you-think/",
                              id: 2,
                            },
                            {
                              text: "Watch inspiring tedTalks",
                              url: "https://www.youtube.com/watch?v=7sxpKhIbr0E",
                              id: 3,
                            },
                            
                          ],
                        },
                      }, 
                     
                
        ],
      };

export default config