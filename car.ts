// Définir l'interface Vehicle
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implémenter la classe Car
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Le moteur de la voiture a démarré");
  }
}

// Créer une instance de Car
const myCar = new Car("Toyota", "Corolla", 2022);

// Appeler la méthode start
myCar.start();
