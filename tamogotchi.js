const tamogochi = {
    name: "egg",
    meal: 1,
    energy: 2,
    mood: 4,
  
    gitStatus: function () {
        let footN
        let energyN
        let moodN

if (this.meal < 0|| this.energy < 0 || this.mood < 0) {
    return 'wasted('
}
else {

        if (this.meal < 333) {
            footN ='Я хочу кушац'
        }
        else {
            footN = 'Я не хочу кушац'
        }


        if (this.energyN < 3) {
            energyN ='Я хочу спатб' 
        }
        else {
        energyN ='Я не хочу спатб'

        }



        if (this.moodN < 3) {
            moodN ='DeadIndide'
        }
        else{
            moodN ='Веселый s***bit**'} 
        }
            


       

    return `Имя:${this.name}  Едa: ${footN} ${this.meal} Энергия ${energyN} ${this.energy} Настроение ${moodN} ${this.mood}`;
    },
    setName: function (newName) {
      return tamogochi.name = newName
      
    },
eat: function () {
    ++this.meal
    --this.mood

},
sleep: function () {
++this.energy
--this.meal
},
game: function () {
    ++this.mood
    --this.energy
},
  };
  
  console.log(tamogochi.gitStatus())