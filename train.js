// D - Task

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  qoldiq() {
    let vaqt = new Date().toLocaleTimeString("uz-UZ", {
      hour: "2-digit",
      minute: "2-digit"
    });

    return `Hozir ${vaqt}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
  }

  sotish(mahsulot, soni) {
    let vaqt = new Date().toLocaleTimeString("uz-UZ", {
      hour: "2-digit",
      minute: "2-digit"
    });

    if (mahsulot === "non") {
      this.non -= soni;
    } else if (mahsulot === "lagmon") {
      this.lagmon -= soni;
    } else if (mahsulot === "cola") {
      this.cola -= soni;
    }

    console.log(`Sotish amalga oshdi. Vaqt: ${vaqt}`);
  }

  qabul(mahsulot, soni) {
    let vaqt = new Date().toLocaleTimeString("uz-UZ", {
      hour: "2-digit",
      minute: "2-digit"
    });

    if (mahsulot === "non") {
      this.non += soni;
    } else if (mahsulot === "lagmon") {
      this.lagmon += soni;
    } else if (mahsulot === "cola") {
      this.cola += soni;
    }

    console.log(`Qabul amalga oshdi. Vaqt: ${vaqt}`);
  }
}


const shop = new Shop(4, 5, 2);

console.log(shop.qoldiq());

shop.sotish("non", 3);
shop.qabul("cola", 4);

console.log(shop.qoldiq());