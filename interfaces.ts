interface Game {
  title: string
  description: string
  readonly genre: string
  platform?: string[]
  getSimilars?: (title: string) => void
}

const tlou : Game = {
  title: "The Last of Us",
  description: "The best gane in the world",
  genre: "Action",
  platform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: uncharted, A Plague Tale, Metro`)
  }
}

console.log(tlou.title)

if(tlou.getSimilars) {
  tlou.getSimilars(tlou.title)
}

interface DLC extends Game {
  originalGame: Game
  newContent: string[]
}

const leftBehind: DLC = {
  title: "The Last of Us - Left Behind",
  description: "You play as Ellie before original game",
  genre: "Action",
  platform: ["PS4"],
  originalGame: tlou,
  newContent : ["3 hours story", "new characters"],
}

class CreateGame implements Game{
  title: string
  description: string
  genre: string

  constructor(title: string, description: string, genre: string) {
    this.title = title 
    this.description = description
    this.genre = genre
  }

}