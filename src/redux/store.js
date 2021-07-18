import {createStore} from 'redux'

const conversationsAll = [
    {
      "id": 1,
      "name": "TEST",
      "messages": [
        {
          "id": 1,
          "user_id": "1",
          "conversation_id": "1",
          "content": "HELLO WORLD!!",
          "created_at": "2021-07-18T04:24:05.241Z"
        },
        {
          "id": 43,
          "user_id": "24",
          "conversation_id": "1",
          "content": "These days, there are angry ghosts all around us. Dead from wars, sickness, starvation, and nobody cares. So - you say you're under a curse. So what, so's the whole damn world.",
          "created_at": "2021-07-18T04:24:05.651Z"
        }
      ]
    },
    {
      "id": 2,
      "name": "Erebor",
      "messages": [
        {
          "id": 39,
          "user_id": "5",
          "conversation_id": "2",
          "content": "I'm a pig. I don't fight for honor. I fight for a paycheck.",
          "created_at": "2021-07-18T04:24:05.633Z"
        }
      ]
    },
    {
      "id": 3,
      "name": "The Misty Mountains",
      "messages": [
        {
          "id": 34,
          "user_id": "7",
          "conversation_id": "3",
          "content": "Take her back to Civilisation.",
          "created_at": "2021-07-18T04:24:05.616Z"
        },
        {
          "id": 47,
          "user_id": "2",
          "conversation_id": "3",
          "content": "We each need to find our own inspiration, Kiki. Sometimes it’s not easy.",
          "created_at": "2021-07-18T04:24:05.665Z"
        }
      ]
    },
    {
      "id": 4,
      "name": "Grey Mountains",
      "messages": [
        {
          "id": 13,
          "user_id": "26",
          "conversation_id": "4",
          "content": "I'm a pig. I don't fight for honor. I fight for a paycheck.",
          "created_at": "2021-07-18T04:24:05.542Z"
        },
        {
          "id": 29,
          "user_id": "16",
          "conversation_id": "4",
          "content": "Look, everyone! This is what hatred looks like! This is what it does when it catches hold of you! It's eating me alive, and very soon now it will kill me! Fear and anger only make it grow faster!",
          "created_at": "2021-07-18T04:24:05.592Z"
        },
        {
          "id": 36,
          "user_id": "1",
          "conversation_id": "4",
          "content": "A girl just fell from the sky, boss!",
          "created_at": "2021-07-18T04:24:05.624Z"
        },
        {
          "id": 45,
          "user_id": "13",
          "conversation_id": "4",
          "content": "A girl just fell from the sky, boss!",
          "created_at": "2021-07-18T04:24:05.658Z"
        }
      ]
    },
    {
      "id": 5,
      "name": "The Shire",
      "messages": [
        {
          "id": 3,
          "user_id": "7",
          "conversation_id": "5",
          "content": "That tree's gettin' away with our treasure!",
          "created_at": "2021-07-18T04:24:05.509Z"
        },
        {
          "id": 24,
          "user_id": "12",
          "conversation_id": "5",
          "content": "Why does everything that's good for you have to taste so bad?",
          "created_at": "2021-07-18T04:24:05.577Z"
        },
        {
          "id": 41,
          "user_id": "21",
          "conversation_id": "5",
          "content": "We each need to find our own inspiration, Kiki. Sometimes it’s not easy.",
          "created_at": "2021-07-18T04:24:05.644Z"
        }
      ]
    },
    {
      "id": 6,
      "name": "Forest River",
      "messages": [
        
      ]
    },
    {
      "id": 7,
      "name": "Gondolin",
      "messages": [
        {
          "id": 5,
          "user_id": "2",
          "conversation_id": "7",
          "content": "We each need to find our own inspiration, Kiki. Sometimes it’s not easy.",
          "created_at": "2021-07-18T04:24:05.516Z"
        },
        {
          "id": 15,
          "user_id": "5",
          "conversation_id": "7",
          "content": "We each need to find our own inspiration, Kiki. Sometimes it’s not easy.",
          "created_at": "2021-07-18T04:24:05.549Z"
        },
        {
          "id": 16,
          "user_id": "9",
          "conversation_id": "7",
          "content": "Life is suffering. It is hard. The world is cursed. But still you find reasons to keep living.",
          "created_at": "2021-07-18T04:24:05.552Z"
        },
        {
          "id": 19,
          "user_id": "5",
          "conversation_id": "7",
          "content": "I'm a pig. I don't fight for honor. I fight for a paycheck.",
          "created_at": "2021-07-18T04:24:05.561Z"
        },
        {
          "id": 20,
          "user_id": "2",
          "conversation_id": "7",
          "content": "A pig that doesn't fly is just a pig.",
          "created_at": "2021-07-18T04:24:05.564Z"
        },
        {
          "id": 22,
          "user_id": "21",
          "conversation_id": "7",
          "content": "Look, everyone! This is what hatred looks like! This is what it does when it catches hold of you! It's eating me alive, and very soon now it will kill me! Fear and anger only make it grow faster!",
          "created_at": "2021-07-18T04:24:05.571Z"
        },
        {
          "id": 25,
          "user_id": "17",
          "conversation_id": "7",
          "content": "These days, there are angry ghosts all around us. Dead from wars, sickness, starvation, and nobody cares. So - you say you're under a curse. So what, so's the whole damn world.",
          "created_at": "2021-07-18T04:24:05.580Z"
        },
        {
          "id": 26,
          "user_id": "2",
          "conversation_id": "7",
          "content": "Take her back to Civilisation.",
          "created_at": "2021-07-18T04:24:05.583Z"
        },
        {
          "id": 32,
          "user_id": "6",
          "conversation_id": "7",
          "content": "It’s not really important what color your dress is. What matters is the heart inside.",
          "created_at": "2021-07-18T04:24:05.609Z"
        }
      ]
    },
    {
      "id": 8,
      "name": "Carrock",
      "messages": [
        {
          "id": 11,
          "user_id": "16",
          "conversation_id": "8",
          "content": "I give up. I see no point in living if I can’t be beautiful.",
          "created_at": "2021-07-18T04:24:05.533Z"
        },
        {
          "id": 37,
          "user_id": "24",
          "conversation_id": "8",
          "content": "A pig that doesn't fly is just a pig.",
          "created_at": "2021-07-18T04:24:05.627Z"
        },
        {
          "id": 38,
          "user_id": "8",
          "conversation_id": "8",
          "content": "Once you do something, you never forget. Even if you can't remember.",
          "created_at": "2021-07-18T04:24:05.630Z"
        },
        {
          "id": 42,
          "user_id": "11",
          "conversation_id": "8",
          "content": "A pig's gotta fly.",
          "created_at": "2021-07-18T04:24:05.648Z"
        }
      ]
    },
    {
      "id": 9,
      "name": "Goblin Gate",
      "messages": [
        {
          "id": 7,
          "user_id": "18",
          "conversation_id": "9",
          "content": "Maybe I can stay and find some other nice people who will like me and accept me for who I am.",
          "created_at": "2021-07-18T04:24:05.521Z"
        },
        {
          "id": 14,
          "user_id": "5",
          "conversation_id": "9",
          "content": "I'm a pig. I don't fight for honor. I fight for a paycheck.",
          "created_at": "2021-07-18T04:24:05.545Z"
        },
        {
          "id": 28,
          "user_id": "1",
          "conversation_id": "9",
          "content": "I'm a pig. I don't fight for honor. I fight for a paycheck.",
          "created_at": "2021-07-18T04:24:05.589Z"
        }
      ]
    },
    {
      "id": 10,
      "name": "High Pass",
      "messages": [
        {
          "id": 23,
          "user_id": "24",
          "conversation_id": "10",
          "content": "We each need to find our own inspiration, Kiki. Sometimes it’s not easy.",
          "created_at": "2021-07-18T04:24:05.574Z"
        },
        {
          "id": 44,
          "user_id": "26",
          "conversation_id": "10",
          "content": "I'm going up to my room now, where I may die.",
          "created_at": "2021-07-18T04:24:05.655Z"
        }
      ]
    },
    {
      "id": 11,
      "name": "Dorwinion",
      "messages": [
        {
          "id": 2,
          "user_id": "25",
          "conversation_id": "11",
          "content": "A pig that doesn't fly is just a pig.",
          "created_at": "2021-07-18T04:24:05.506Z"
        },
        {
          "id": 10,
          "user_id": "9",
          "conversation_id": "11",
          "content": "Maybe I can stay and find some other nice people who will like me and accept me for who I am.",
          "created_at": "2021-07-18T04:24:05.530Z"
        }
      ]
    },
    {
      "id": 12,
      "name": "The Great Mill",
      "messages": [
        {
          "id": 9,
          "user_id": "23",
          "conversation_id": "12",
          "content": "I give up. I see no point in living if I can’t be beautiful.",
          "created_at": "2021-07-18T04:24:05.527Z"
        },
        {
          "id": 27,
          "user_id": "2",
          "conversation_id": "12",
          "content": "Once you do something, you never forget. Even if you can't remember.",
          "created_at": "2021-07-18T04:24:05.586Z"
        },
        {
          "id": 40,
          "user_id": "4",
          "conversation_id": "12",
          "content": "A girl just fell from the sky, boss!",
          "created_at": "2021-07-18T04:24:05.641Z"
        }
      ]
    },
    {
      "id": 13,
      "name": "Long Marshes",
      "messages": [
        
      ]
    },
    {
      "id": 14,
      "name": "Goblin Gate",
      "messages": [
        {
          "id": 6,
          "user_id": "1",
          "conversation_id": "14",
          "content": "The tree! We protected it, so it protects us!",
          "created_at": "2021-07-18T04:24:05.519Z"
        },
        {
          "id": 33,
          "user_id": "14",
          "conversation_id": "14",
          "content": "Maybe I can stay and find some other nice people who will like me and accept me for who I am.",
          "created_at": "2021-07-18T04:24:05.613Z"
        }
      ]
    },
    {
      "id": 15,
      "name": "Mount Gram",
      "messages": [
        {
          "id": 21,
          "user_id": "18",
          "conversation_id": "15",
          "content": "Aren't you even going to knock? You're the most patheic little girl I've ever seen!",
          "created_at": "2021-07-18T04:24:05.567Z"
        }
      ]
    },
    {
      "id": 16,
      "name": "Last Desert",
      "messages": [
        {
          "id": 4,
          "user_id": "27",
          "conversation_id": "16",
          "content": "A girl just fell from the sky, boss!",
          "created_at": "2021-07-18T04:24:05.513Z"
        },
        {
          "id": 30,
          "user_id": "1",
          "conversation_id": "16",
          "content": "It's not really important what color your dress is. What matters is the heart inside. I think something's wrong with me. I make friends, then suddenly I can't bear to be with any of them. Seems like that other me, the cheerful and honest one, went away somewhere.",
          "created_at": "2021-07-18T04:24:05.595Z"
        }
      ]
    },
    {
      "id": 17,
      "name": "Iron Hills",
      "messages": [
        {
          "id": 17,
          "user_id": "15",
          "conversation_id": "17",
          "content": "Why does everything that's good for you have to taste so bad?",
          "created_at": "2021-07-18T04:24:05.555Z"
        },
        {
          "id": 18,
          "user_id": "26",
          "conversation_id": "17",
          "content": "He said Mom was ugly, now go get him!",
          "created_at": "2021-07-18T04:24:05.558Z"
        },
        {
          "id": 31,
          "user_id": "28",
          "conversation_id": "17",
          "content": "He said Mom was ugly, now go get him!",
          "created_at": "2021-07-18T04:24:05.598Z"
        },
        {
          "id": 35,
          "user_id": "6",
          "conversation_id": "17",
          "content": "Aren't you even going to knock? You're the most patheic little girl I've ever seen!",
          "created_at": "2021-07-18T04:24:05.619Z"
        },
        {
          "id": 46,
          "user_id": "12",
          "conversation_id": "17",
          "content": "The earth speaks to all of us, and if we listen, we can understand.",
          "created_at": "2021-07-18T04:24:05.662Z"
        }
      ]
    },
    {
      "id": 18,
      "name": "Lake Town",
      "messages": [
        
      ]
    },
    {
      "id": 19,
      "name": "River Running",
      "messages": [
        {
          "id": 8,
          "user_id": "10",
          "conversation_id": "19",
          "content": "He said Mom was ugly, now go get him!",
          "created_at": "2021-07-18T04:24:05.524Z"
        },
        {
          "id": 12,
          "user_id": "2",
          "conversation_id": "19",
          "content": "The earth speaks to all of us, and if we listen, we can understand.",
          "created_at": "2021-07-18T04:24:05.539Z"
        }
      ]
    },
    {
      "id": 20,
      "name": "River Running",
      "messages": [
        
      ]
    },
    {
      "id": 21,
      "name": "Mirkwood",
      "messages": [
        
      ]
    }
  ]

function rootReducer(state = conversationsAll, action){
    switch(action.type){

        case "GET_MESSAGES":
            return [...action.payload]

        case "GET_CONVERSATIONS":
            return [...action.payload]

        default: return state
    }
}

let store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store