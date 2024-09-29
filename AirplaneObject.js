const Airplane = {
    isFlying: false,
    takeOff() {
      this.isFlying = true
      return this.isFlying
    },
    land() {
      this.isFlying = false
      return this.isFlying
    },
  }
  
  console.log(Airplane.land())