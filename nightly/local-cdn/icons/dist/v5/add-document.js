import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "add-document";
const pathData = "M454 374q11 0 18.5 7.5T480 400t-7.5 18.5T454 426h-60v60q0 11-7.5 18.5T368 512t-18.5-7.5T342 486v-60h-60q-11 0-18.5-7.5T256 400t7.5-18.5T282 374h60v-60q0-11 7.5-18.5T368 288t18.5 7.5T394 314v60h60zM83 201v260h83q11 0 18.5 7t7.5 18-7.5 18.5T166 512H58q-11 0-18.5-7.5T32 486V192q0-10 6-17L181 9q6-9 19-9h190q11 0 18.5 7.5T416 26v172q0 11-7.5 18.5T390 224t-18-7.5-7-18.5V51H212l-20 24v66q0 21-15 36t-36 15H91z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/add-document";
export { pathData, ltr, accData };