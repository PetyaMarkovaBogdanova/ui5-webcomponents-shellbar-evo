declare const _default: ":host(:not([hidden])){width:100%;height:100%;display:block;container-type:size}.ui5-page-root{height:inherit;overflow:hidden;position:relative;z-index:0;box-sizing:border-box;background-color:inherit}.ui5-page-header-root{z-index:1}.ui5-page-content-root{overflow:hidden auto;position:absolute;will-change:scroll-position;width:100%;top:2.75rem;bottom:0;box-sizing:border-box;font-size:var(--sapFontSize);color:var(--sapTextColor)}.ui5-page-footer-root{box-sizing:border-box;position:absolute;bottom:0;left:0;z-index:2;width:100%}:host(:not([fixed-footer])) .ui5-page-footer-root{opacity:1;bottom:.5rem}::slotted([ui5-bar][design=\"FloatingFooter\"]){margin:auto;padding:0}@container (max-width: 599px){:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 1rem}::slotted([ui5-bar][slot=\"header\"]),::slotted([ui5-bar][design=\"Footer\"]){box-sizing:border-box;padding:0 .25rem}::slotted([ui5-bar][design=\"FloatingFooter\"]){width:calc(100% - .5rem)}}@container (min-width: 600px) and (max-width: 1023px){:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 2rem}::slotted([ui5-bar][slot=\"header\"]),::slotted([ui5-bar][slot=\"footer\"]){box-sizing:border-box;padding:0 1.25rem}::slotted([ui5-bar][design=\"FloatingFooter\"]){width:calc(100% - 2.5rem)}}@container (min-width: 1024px) and (max-width: 1439px){:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 2rem}::slotted([ui5-bar][slot=\"header\"]),::slotted([ui5-bar][slot=\"footer\"]){box-sizing:border-box;padding:0 1.25rem}::slotted([ui5-bar][design=\"FloatingFooter\"]){width:calc(100% - 2.5rem)}}@container (min-width: 1440px){:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 3rem}::slotted([ui5-bar][slot=\"header\"]),::slotted([ui5-bar][slot=\"footer\"]){box-sizing:border-box;padding:0 2.25rem}::slotted([ui5-bar][design=\"FloatingFooter\"]){width:calc(100% - 4.5rem)}}:host([no-scrolling]) .ui5-page-content-root{overflow:hidden}:host([hide-footer][fixed-footer]) .ui5-page-footer-root{display:none}:host(:not([fixed-footer]):not([hide-footer])) .ui5-page-footer-root{animation:bounceShow var(--_ui5-v2-6-2-page-animation-duration) forwards ease-in-out}:host(:not([fixed-footer])[hide-footer]) .ui5-page-footer-root{animation:bounceHide var(--_ui5-v2-6-2-page-animation-duration) forwards ease-in-out}:host([background-design=\"Solid\"]){background-color:var(--sapBackgroundColor)}:host([background-design=\"Transparent\"]){background-color:var(--_ui5-v2-6-2_page_transparent_bg)}:host([background-design=\"List\"]){background-color:var(--_ui5-v2-6-2_page_list_bg)}@keyframes bounceShow{0%{transform:translateY(100%);opacity:0}to{opacity:1}}@keyframes bounceHide{0%{transform:translateY(-5%);opacity:1}to{transform:translateY(100%);opacity:0}}\n";
export default _default;