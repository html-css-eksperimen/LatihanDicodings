const { coffeeStock, isCoffeeMakerReady } = require('./statekopi');

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams && isCoffeeMakerReady) {
        console.log('Kopi berhasil dibuat!');
        console.log('Coffee maker siap', isCoffeeMakerReady);
    } else {
        console.log('Biji kopi habis!');
    }
};

makeCoffee('robusta', 80);
