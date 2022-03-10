//Generic classes
//Generic provides "flexibility" of any type, combined with
// "Strong safety" (fixed to that type)

//For this you don't care about the data it stores (e.g. string, number, etc)
// Then, turn it into a Generic class

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
//textStorage.addItem(10);//error no number
textStorage.addItem("Gino");
textStorage.addItem("Gustavo");
textStorage.removeItem("Gino");
console.log(textStorage.getItems());

//Provide flexible and strong type support.

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);

const objStorage = new DataStorage<object>();
objStorage.addItem({ name: "Gino" });
objStorage.addItem({ name: "Gustavo" });
//...
objStorage.removeItem({ name: "Gino" }); // Wont work bc Objects are reference types.
console.log(objStorage.getItems());

//the method removeItem(), when work with non-primitive values it does not work.
// e.g. objects, arrays. When I send removeItem, it is passing a new object

//We have to pass the exact same object

const obj1 = { name: "XXX" };
objStorage.addItem(obj1);

objStorage.removeItem(obj1);
console.log(objStorage.getItems());

// We can make sure this interface work with primitive values
class DataStorage2<T extends string | number | boolean> {}
//-> Then for objects, you would need an specialized DataStorage, which probably only
// works with objects and not with prmitive values

// Also you can have more than one generic typ
// methods can introduce also new generic types, if needed.
