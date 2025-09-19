// try2/package-a/index.ts
// import ping from "package-b"
const ping = require("package-c")

const helloFromPackageA = () => {
  ping.default()
  console.log("hello from package a")
  // console.log(this);
}

helloFromPackageA();

const constant = Math.PI;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


class Ball {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  volume() {
    return Math.PI * this.radius * this.radius * this.radius / 3;
  }
}

const ball = new Ball(2);

const ballVolume = ball?.volume();

// export default helloFromPackageA; 

module.exports = {
  "helloFromPackageA": helloFromPackageA,
  "constant": constant,
  "delay": delay,
  "ballVolume": ballVolume
}