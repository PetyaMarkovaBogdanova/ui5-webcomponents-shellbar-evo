import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "factory";
const pathData = "M502 236q10 8 10 20v198q0 11-7.5 18.5T486 480H26q-11 0-18.5-7.5T0 454V58q0-11 7.5-18.5T26 32h108q11 0 18.5 7.5T160 58v166h44v-70q0-11 7.5-18.5T230 128q9 0 16 6l87 69v-49q0-11 7.5-18.5T358 128t16 6zM51 320h58v-44H51v44zm58-96v-45H51v45h58zM51 83v45h58V83H51zm0 346h58v-58H51v58zm410-161l-77-61v49q0 11-7.5 18.5T358 282q-8 0-16-6l-86-69v43q0 11-7.5 18.5T230 276h-70v44h6q11 0 18.5 7.5T192 346t-7.5 18-18.5 7h-6v58h301V268zm-173 52q13 0 22.5 9.5T320 352t-9.5 22.5T288 384t-22.5-9.5T256 352t9.5-22.5T288 320zm64 32q0-13 9.5-22.5T384 320t22.5 9.5T416 352t-9.5 22.5T384 384t-22.5-9.5T352 352z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/factory";
export { pathData, ltr, accData };