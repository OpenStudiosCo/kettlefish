# A typical example of inheritance

class Animal
  constructor: (@name) ->

  speak: ->
    "#{@name} says #{this.sound()}"

class Cow extends Animal
  sound: -> "moo"

class Horse extends Animal
  sound: -> "neigh"

class Sheep extends Animal
  sound: -> "baaaaa"

s = new Horse "CJ"
console.log s.speak()
c = new Cow "Bessie"
console.log c.speak()
console.log new Sheep("Little Lamb").speak()