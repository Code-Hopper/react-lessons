import React from 'react'

let data = [
  { emoji: "☘️", name: "Shamrock", description: "symbol of Irish luck" },
  { emoji: "✨", name: "Sparkles", description: "shiny magical glowing effect" },
  { emoji: "💯", name: "Hundred Points", description: "perfect score achievement symbol" },
  { emoji: "💥", name: "Collision", description: "sudden explosive impact effect" },
  { emoji: "🔥", name: "Fire", description: "hot burning flame energy" },
  { emoji: "🌈", name: "Rainbow", description: "colorful arc after rain" },
  { emoji: "🌟", name: "Glowing Star", description: "bright shining night star" },
  { emoji: "🌙", name: "Crescent Moon", description: "curved moon night symbol" },
  { emoji: "☀️", name: "Sun", description: "bright daytime light source" },
  { emoji: "🌻", name: "Sunflower", description: "yellow blooming sunny flower" },
  { emoji: "🍀", name: "Four Leaf Clover", description: "rare plant brings goodluck" },
  { emoji: "🍎", name: "Red Apple", description: "fresh juicy healthy fruit" },
  { emoji: "🍕", name: "Pizza", description: "cheesy baked Italian dish" },
  { emoji: "🍩", name: "Doughnut", description: "sweet fried ring dessert" },
  { emoji: "🎉", name: "Party Popper", description: "celebration confetti popping moment" },
  { emoji: "🎈", name: "Balloon", description: "floating colorful party decoration" },
  { emoji: "🎁", name: "Wrapped Gift", description: "present wrapped for surprise" },
  { emoji: "🏆", name: "Trophy", description: "award for winning achievement" },
  { emoji: "⚽", name: "Soccer Ball", description: "round ball used football" },
  { emoji: "🚀", name: "Rocket", description: "space travel launching vehicle" },
  { emoji: "✈️", name: "Airplane", description: "flying vehicle for travel" },
  { emoji: "🚗", name: "Car", description: "road vehicle for transport" },
  { emoji: "📱", name: "Mobile Phone", description: "portable device for communication" },
  { emoji: "💻", name: "Laptop", description: "portable computer for work" },
  { emoji: "📷", name: "Camera", description: "device used capturing photos" },
  { emoji: "🎧", name: "Headphones", description: "audio device for listening" },
  { emoji: "🎮", name: "Video Game Controller", description: "device for playing games" },
  { emoji: "🧩", name: "Puzzle Piece", description: "small part solving puzzle" },
  { emoji: "🧠", name: "Brain", description: "organ controlling body functions" }
];

const DisplayEmojiCard = (props) => {
  return (
    <div key={props.index} className='emoji-item p-5 shadow border border-gray-300 inline-flex gap-3 items-center rounded-lg'>
      <div>
        <span className='text-3xl'>
          {props.item.emoji}
        </span>
      </div>
      <div className='flex flex-col gap-1 '>
        <span className='font-bold text-xs'>
          {props.item.name}
        </span>
        <span className='text-[.75rem]'>
          {props.item.description}
        </span>
      </div>
    </div>
  )
}

const DisplayGrid = () => {

  return (
    <div className='p-5 grid gap-2 grid-cols-6'>
      {
        data.map(DisplayEmojiCard)
      }
    </div>
  )
}

export default DisplayGrid