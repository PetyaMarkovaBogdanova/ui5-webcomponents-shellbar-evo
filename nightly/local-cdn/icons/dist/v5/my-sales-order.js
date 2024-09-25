import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "my-sales-order";
const pathData = "M450 339q26 0 44 19t18 46q0 20-11 39t-34 19v17q0 17-7 25t-18 8-18.5-7.5T416 486v-23h-26q-11 0-18.5-7t-7.5-18 7.5-18.5T390 412h60q4 0 7.5-3t3.5-8q0-4-3.5-7t-7.5-3h-24q-26 0-44-17.5T364 331q0-22 15-40t37-20v-27q0-11 7.5-18.5T442 218t18 7.5 7 18.5v26h19q11 0 18.5 6.5T512 294t-7.5 18.5T486 320h-60q-4 0-7.5 2t-3.5 8q0 5 3.5 7t7.5 2h24zM147 0q11 0 18 7.5t7 18.5-7 18L51 157v329q0 11-7 18.5T26 512t-18.5-7.5T0 486V147q0-9 7-18L129 7q7-7 18-7zm109 288q24 0 35.5 15t11.5 33-11.5 33-35.5 15-35.5-15-11.5-33 11.5-33 35.5-15zm96 193q0 15-7 23t-18 8H186q-11 0-18.5-8t-7.5-22q0-18 16-40 23-26 55-26h51q13 0 25.5 5t22.5 14 16 21 6 25zM155 192l-8 9v189q0 11-7 18.5t-18 7.5-18.5-7.5T96 390V192q0-10 6-17L245 9q6-9 19-9h190q11 0 18.5 7.5T480 26v109q0 11-7.5 18.5T454 161t-18-7.5-7-18.5V51H276l-20 23v67q0 21-15 36t-36 15h-50z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/my-sales-order";
export { pathData, ltr, accData };