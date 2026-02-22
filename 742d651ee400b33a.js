import{j as e}from"./f327d1a4c13b82e7.js";const x=({label:r,error:s,onChange:o,containerClassName:d="",className:a="",type:n="text",id:c,required:i,...l})=>{const t=c||(r?`input-${r.toLowerCase().replace(/\s+/g,"-")}`:void 0),m=`
    w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors
    ${s?"border-red-500 focus:ring-red-500 focus:border-red-500":"border-gray-300 focus:ring-primary-500 focus:border-primary-500"}
    ${a}
  `.trim();return e.jsxs("div",{className:`mb-4 ${d}`,children:[r&&e.jsxs("label",{htmlFor:t,className:"block text-sm font-medium text-gray-700 mb-1",children:[r,i&&e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx("input",{id:t,type:n,onChange:o,required:i,className:m,"aria-invalid":s?"true":"false","aria-describedby":s?`${t}-error`:void 0,...l}),s&&e.jsx("p",{id:`${t}-error`,className:"mt-1 text-sm text-red-600",role:"alert",children:s})]})};export{x as I};
