// THE WAR GAME.

class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
  }

// Viking

class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
    }

    battleCry() {
        return "Odin Owns You All!"
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
}



// Saxon

class Saxon extends Soldier {
    
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// This receiveDamage is a method applied to our Saxon. It is a function stored in an object Saxon. Exactly like before. 
// It is one pair key-value storing a function as value. 
// So when we want to call it we will apply it the object with a dot. Exactly like to retrieve a value from an objet.
   
// War
class War {

    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        

        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikingIndex];
        
        let totalDamage = randomSaxon.receiveDamage(randomViking.strength);

       if (randomSaxon.health <= 0) {
           this.saxonArmy.splice(randomSaxonIndex, 1);
        }

        
        return totalDamage;
    }

    saxonAttack() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    

    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];


    let totalDamage = randomViking.receiveDamage(randomSaxon.strength);

     if (randomViking.health <= 0) {
    this.vikingArmy.splice(randomVikingIndex, 1);
     }

    
    return totalDamage;
    }   


    // SUPER BONUS : Try to create a generic method.

// THINK ABOUT THIS AT HOME.





    showStatus() {

   

      if (this.saxonArmy.length === 0) {
          return "Vikings have won the war of the century!";
      } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survived another day..."
          } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
      };
    };



