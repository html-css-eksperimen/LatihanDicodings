class Car {
    constructor(manufaktur, warna) {
        this.manufaktur = manufaktur;
        this._warna = warna;
    }

    get color() {
        return `Warna mobil ini adalah ${this._warna}`;
    }

    set color(value) {
        console.log(`Warna mobil diubah dari ${this._warna} menjadi ${value}`);
        this._warna = value;
    }
}

const kucingCar = new Car('Honda', 'Hitam');
console.log(kucingCar.color);
kucingCar.color = 'Merah';
console.log(kucingCar.color);
