"use strict";import{renderDeferred as m}from"./Render.js";const a=500,i=new Map,c=new Map,E=n=>{const s=n.host,l=n.propName,t=s[l];let o;if(t===void 0||t==="")o=void 0;else if(t instanceof HTMLElement)o=t;else{const d=s.getRootNode();o=d.getElementById&&d.getElementById(t)||void 0}const e=`${s._id}-${l}`,r=i.get(e);if(!o){if(r&&(n.onDisconnect&&n.onDisconnect(r),i.delete(e)),typeof t=="string"&&t&&!c.has(e)){const d=setInterval(()=>{const f=s.getRootNode();f.getElementById&&f.getElementById(t)&&(clearInterval(c.get(e)),c.delete(e),m(s))},a);c.set(e,d)}return}return c.has(e)&&(clearInterval(c.get(e)),c.delete(e)),r!==o&&(r&&n.onDisconnect&&n.onDisconnect(r),n.onConnect&&n.onConnect(o),i.set(e,o)),i.get(e)};export default E;
//# sourceMappingURL=connectToComponent.js.map