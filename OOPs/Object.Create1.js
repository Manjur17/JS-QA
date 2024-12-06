const animal = {
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  };
  
  const dog = Object.create(animal);
  dog.name = "Rex"; // dog = {name: "Rex"} ---prototype--> animal
  dog.speak(); // "Rex makes a noise." as call site is dog
  //