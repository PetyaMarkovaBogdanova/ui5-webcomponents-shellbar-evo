"use strict";import g from"./DragRegistry.js";function i(t,o,n,m,r={}){const a=g.getDraggedElement(),e={targetReference:null,placement:null};if(!a&&!r?.crossDnD)return e;const s=n.placements;return e.targetReference=t.target,s.some(l=>{const c=r.originalEvent?{originalEvent:t}:{};return o.fireDecoratorEvent("move-over",{...c,source:{element:a},destination:{element:m,placement:l}})?!1:(t.preventDefault(),e.targetReference=n.element,e.placement=l,!0)})||(e.targetReference=null),e}export default i;
//# sourceMappingURL=handleDragOver.js.map