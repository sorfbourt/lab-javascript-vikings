// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
    }

  }





// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage){
        this.health -= damage
            if(this.health > 0){
                 return `${this.name} has received ${damage} points of damage`
            }
            else {
                return `${this.name} has died in act of combat`
            }
    }

    battleCry(){
        return `Odin Owns You All!`
    }

}


// Saxon
class Saxon extends Soldier {
    constructor (health, strength){
        super(health, strength)
    }

    receiveDamage(damage){
        this.health -= damage
        if(this.health !== 0){
            return `A Saxon has received ${damage} points of damage`
       }
       else {
           return `A Saxon has died in combat`
       }
    }

}

// War


class War {
        constructor(){
            this.vikingArmy = []
            this.saxonArmy = []
        }

        addViking(Viking){
            this.vikingArmy.push(Viking)
        }

        addSaxon(Saxon){
            this.saxonArmy.push(Saxon)
        }

        vikingAttack(){

            //select randomSaxon from saxonArmy
            let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

            //select randomViking from vikingArmy
            let randomViking = Math.floor(Math.random() * this.vikingArmy.length)

            //attack randomSaxon with the strength of randomViking
            let randomSaxonResult = this.saxonArmy[randomSaxon].receiveDamage(vikingArmy[randomViking].attack())

            //remove dead saxons
            if(saxonArmy[randomSaxon].health < 0){
                saxonArmy.splice(randomSaxon, 1)
            }

            return randomSaxonResult

        }

        saxonAttack(){
        //select randomSaxon from saxonArmy
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        //select randomViking from vikingArmy
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)

        //attack randomViking with the strength of randomSaxon
        let randomVikingResult = this.vikingArmy[randomViking].receiveDamage(saxonArmy[randomSaxon].attack())

        //remove dead vikings

            if(vikingArmy[randomViking].health <= 0){
                vikingArmy.splice(randomViking, 1)
            }
            
            return randomVikingResult
    }



    showStatus(){
        if(this.saxonArmy.length <= 0){
            return "Vikings have won the war of the century!" 
         } else if(this.vikingArmy.length <= 0){
            return "Saxons have fought for their lives and survived another day..."
        } else if(this.vikingArmy.length <= 1 && saxonArmy.length <= 1){
            return "Vikings and Saxons are still in the thick of battle."
        }
 

    }
    

    }
