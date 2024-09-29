const Airplane = {
    name: "",
    isFlying: false,
    initialize(name) {
      this.name = name
    },
    takeOff() {
      this.isFlying = true
      return `${this.name} is flying `
    },
    land() {
      this.isFlying = false
      return `${this.name} is not flying`
    },
  }
  
  Airplane.initialize("My Airplane")
  
  console.log(Airplane.land())