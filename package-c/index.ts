/* try2/package-c/index.ts */

const ping = () => {
  console.log("hi prom package c");

  return {
    "ping": () => console.log("pong"),
    "pong": () => console.log("ping")
  }
}

// export default ping; : this can be imported from a CJS module using: require("package-c").default()

module.exports = ping;