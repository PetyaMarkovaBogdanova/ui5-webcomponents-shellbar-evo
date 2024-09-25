import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "hello-world";
const pathData = "M256 0q53 0 99.5 20T437 74.5t55 81 20 98.5q0 53-20.5 100T436 436t-81.5 55.5T256 512H26q-11 0-18.5-7.5T0 486q0-8 4-13l42-70Q0 339 0 257q0-53 20-100t55-82 81.5-55T256 0zM92 379q7 8 9 13t2 10-4 13l-28 46h153v-55q-26-8-40-28.5T167 331L56 212q-5 23-5 44 0 36 11 68t30 55zm310 21q29-29 44-66t15-78q0-34-10.5-65t-29-56.5T377 90t-57-29v41q0 11-7.5 18.5T294 128h-70v38q0 11-7.5 18.5T198 192h-41l53 64h84q11 0 18.5 7.5T320 282v70h6q26 0 45.5 13.5T402 400z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/hello-world";
export { pathData, ltr, accData };