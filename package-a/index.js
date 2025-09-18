import { ping } from "../package-b/index.cjs";
const helloFromPackageA = () => {
    ping();
    console.log("hello from package a");
};
helloFromPackageA();
export default helloFromPackageA;
