class UserAccount {
  public name: string
  protected age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

class CharAccount extends UserAccount {
  private nickname: string
  level: number
  // readonly level: number

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)

    this.nickname = nickname
    this.level = level
  }

  get getLevel() {
    console.log("------GET------");
    return this.level
  }

  set setLevel(level: number) {
    this.level = level
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} is ${this.age} has the char ${this.nickname} at level ${this.level}`)
  }
}

const edu = new UserAccount("Eduardo", 29)
console.log(edu)
edu.logDetails()

const john = new CharAccount("John", 45, "johnzinho", 80)
console.log(john)
john.logDetails()
john.logCharDetails()

john.setLevel = 499
console.log(john.getLevel)

