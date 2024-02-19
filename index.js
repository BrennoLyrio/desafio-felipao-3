class bioTipo{
	constructor(nomeHeroi, idadeHeroi, tipoHeroi,ataqueHeroi){
    this.nomeHeroi = nomeHeroi
    this.idadeHeroi = idadeHeroi
    this.tipoHeroi = tipoHeroi //(guerreiro, mago,ninja, monge)
   	this.ataqueHeroi = ataqueHeroi
    
 	}
    attack(){
    	console.log(`O ${this.tipoHeroi} atacou usando ${this.ataqueHeroi}!`)
    }
    bio(){
    	console.log("O seu nome é " + this.nomeHeroi + " e com apenas " + this.idadeHeroi + " anos, lutou bravamente!")
    }
}

let hero1 = new bioTipo("Peter", 20, "Guerreiro", "espada")
let hero2 = new bioTipo("Spider", 28, "Ninja", "shuriken")
let hero3 = new bioTipo("Luke", 40, "Mago", "magia")
let hero4 = new bioTipo("Vader", 55, "Monge", "artes marciais")

hero2.attack()
hero2.bio()