import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "cargo-train";
const pathData = "M416 105q29 14 46.5 42t17.5 63v111q0 22-10.5 39T440 385l-53 19 55 66q6 7 6 16 0 11-7.5 18.5T422 512t-19-9l-68-81-71 25q-3 1-9 1t-8-1l-70-25-68 81q-7 9-19 9-11 0-18.5-7.5T64 486q0-9 6-16l55-66-53-19q-19-8-29.5-25T32 321V210q0-35 17.5-63T96 105V58q0-24 17-41t40-17h206q23 0 40 17t17 41v47zm-51-47q0-7-6-7h-77v41h83V58zM147 92h83V51h-77q-6 0-6 7v34zm1 51q-27 0-46 19.5T83 210v59h346v-59q0-28-19-47.5T364 143H148zm44 177v53l38 14v-67h-38zm90 66l38-13v-53h-38v66zM83 320q0 13 9 18l49 17v-35H83zm337 18q9-5 9-18h-58v35zm-164-95q-14 0-23-9t-9-23 9-23 23-9 23 9 9 23-9 23-23 9z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/cargo-train";
export { pathData, ltr, accData };