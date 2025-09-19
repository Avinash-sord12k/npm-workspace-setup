/* try2/package-b/index.ts */

const ping = () => {
  console.log("hi prom package b");

  return {
    "ping": () => console.log("pong"),
    "pong": () => console.log("ping")
  }
}

export default ping;