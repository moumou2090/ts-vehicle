// Implémenter la classe Car
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Le moteur de la voiture a démarré");
    };
    return Car;
}());
// Créer une instance de Car
var myCar = new Car("Toyota", "Corolla", 2022);
// Appeler la méthode start
myCar.start();
