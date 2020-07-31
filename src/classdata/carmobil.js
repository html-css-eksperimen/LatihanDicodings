import { Vehicle } from './vehicle';

class CarMobil extends Vehicle {
    constructor(licencePlate = '', manufaktur = '', wheels = '') {
        super(licencePlate, manufaktur);
        this.wheels = wheels;
    }

    droveOff() {
        console.log(`Kendaraan ${this.licensePlate} melaju!`);
    }

    openDoor() {
        console.log(`Membuka pintu!`);
    }

    info() {
        super.info();
        console.log(`Jumlah roda adalah ${this.wheels}`);
    }
}

const carMobil = new CarMobil('ABC111', 'Toyota', '10');
carMobil.startEngines();
carMobil.info();
