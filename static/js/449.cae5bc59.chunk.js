"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[449],{6075:(e,t,a)=>{a.d(t,{A:()=>n});a(5043);var o=a(4005),l=a(579);const n=e=>{let{variant:t="info",message:a,show:n=!0,className:s=""}=e;return n?(0,l.jsx)(o.A,{variant:t,className:s,children:a}):null}},6313:(e,t,a)=>{a.d(t,{A:()=>s});a(5043);var o=a(4104),l=a(4282),n=a(579);const s=e=>{let{show:t,onHide:a,title:s,children:i,footerButtons:r}=e;return(0,n.jsxs)(o.A,{show:t,onHide:a,size:"lg",centered:!0,children:[(0,n.jsx)(o.A.Header,{closeButton:!0,children:(0,n.jsx)(o.A.Title,{children:s||"Modal Title"})}),(0,n.jsx)(o.A.Body,{children:i}),(0,n.jsx)(o.A.Footer,{children:r?r.map(((e,t)=>(0,n.jsx)(l.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,n.jsx)(l.A,{variant:"secondary",onClick:a,children:"Close"})})]})}},3353:(e,t,a)=>{a.d(t,{A:()=>c});var o=a(5043),l=a(6313),n=a(7348),s=a(6075),i=a(579);const r=e=>{let{errors:t}=e;const a=(0,o.useMemo)((()=>{const e=t.reduce(((e,t)=>{const a=t.match(/Row (\d+):/),o=t.match(/"([^"]*)" (?:is required|value)/),l=t.split(": ").slice(1).join(": "),n=a?a[1]:"N/A",s=o?o[1]:t.includes("Collaborative Space","Quantity")?"Collaborative Space":"N/A";return e[n]||(e[n]={rowNumber:n,columns:[],errors:[]}),e[n].columns.push(s),e[n].errors.push(l||t),e}),{});return Object.values(e).sort(((e,t)=>Number(e.rowNumber)-Number(t.rowNumber)))}),[t]),l=new n.jS({fixedWidth:!0,defaultHeight:50}),r=e=>{let{key:t,index:o,style:s,parent:r}=e;const c=a[o];return(0,i.jsx)(n.dl,{cache:l,columnIndex:0,rowIndex:o,parent:r,children:(0,i.jsxs)("div",{style:s,className:"table-row",children:[(0,i.jsx)("div",{className:"table-cell",style:{width:"15%"},children:c.rowNumber}),(0,i.jsx)("div",{className:"table-cell",style:{width:"25%"},children:c.columns.map(((e,t)=>(0,i.jsx)("div",{children:e},t)))}),(0,i.jsx)("div",{className:"table-cell",style:{width:"60%"},children:(0,i.jsx)("ul",{className:"error-list",children:c.errors.map(((e,t)=>(0,i.jsx)("li",{children:e},t)))})})]})},t)};return(0,i.jsxs)("div",{className:"error-popup-container",children:[(0,i.jsx)(s.A,{variant:"danger",message:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:"\u26a0\ufe0f Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve these issues, update the spreadsheet and re-import. (",a.length," errors found)"]}),className:"custom-alert"}),(0,i.jsxs)("div",{className:"table-wrapper",children:[(0,i.jsxs)("div",{className:"static-header",children:[(0,i.jsx)("div",{className:"header-cell",style:{width:"15%"},children:"Row Number"}),(0,i.jsx)("div",{className:"header-cell",style:{width:"25%"},children:"Column Name"}),(0,i.jsx)("div",{className:"header-cell",style:{width:"60%"},children:"Error Description"})]}),(0,i.jsx)("div",{className:"table-container",children:(0,i.jsx)(n.t$,{children:e=>{let{height:t,width:o}=e;return(0,i.jsx)(n.B8,{width:o,height:t,rowCount:a.length,rowHeight:l.rowHeight,deferredMeasurementCache:l,rowRenderer:r})}})})]})]})},c=e=>{let{show:t,onHide:a,errors:o}=e;return console.log("[ContentErrorsModal.jsx] errors:",o),(0,i.jsx)(l.A,{show:t,onHide:a,title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:a}],children:(0,i.jsx)(r,{errors:o})})}},5362:(e,t,a)=>{a.d(t,{A:()=>c});var o=a(5043),l=a(8931),n=a(7111),s=a(3277),i=a(2725),r=a(579);const c=(0,o.forwardRef)(((e,t)=>{let{data:a,columns:c,addedItem:d,CAName:u,state:m}=e;const{showWarningToast:g}=(0,i.A)(),[p,h]=(0,o.useState)({});(0,o.useEffect)((()=>{h({})}),[a]);const f=()=>{const e=A.getSelectedRowModel().rows.map((e=>e.original["Available Plant"]));0!==e.length?(d(e),h({})):g(s.e1)};(0,o.useImperativeHandle)(t,(()=>({addPlant:f})));const v=(0,o.useMemo)((()=>[{id:"select",cell:e=>{let{row:t}=e;return(0,r.jsx)("input",{type:"checkbox",className:"form-check-input",checked:t.getIsSelected(),onChange:t.getToggleSelectedHandler()})}},...c]),[c]),A=(0,l.N4)({data:a,columns:v,state:{rowSelection:p},enableRowSelection:!0,onRowSelectionChange:h,getCoreRowModel:(0,n.HT)()});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{type:"button",className:"btn btn-outline-primary me-3",onClick:()=>{A.getRowModel().rows.forEach((e=>e.toggleSelected(!0)))},children:"Select All"}),(0,r.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:()=>{A.getRowModel().rows.forEach((e=>e.toggleSelected(!1)))},children:"Deselect All"})]}),A.getRowModel().rows.length>0?(0,r.jsx)("div",{className:"overflow-auto",style:{maxHeight:"60vh"},children:A.getRowModel().rows.map((e=>(0,r.jsxs)("div",{className:"p-3 border-bottom d-flex align-items-center",style:{backgroundColor:e.getIsSelected()?"#d5e8f2":"inherit"},children:[(0,r.jsx)("div",{className:"me-3",children:(0,l.Kv)(e.getVisibleCells()[0].column.columnDef.cell,e.getVisibleCells()[0].getContext())}),(0,r.jsx)("div",{children:e.original[c[0].accessorKey]})]},e.id)))}):(0,r.jsx)("p",{className:"text-muted p-3",children:"No data available"})]})}))},1984:(e,t,a)=>{a.r(t),a.d(t,{default:()=>X});var o=a(5043),l=a(4391),n=(a(2342),a(9555),a(3003)),s=a(2670),i=a(2115),r=(a(8421),a(4050),a(9959),a(174)),c=a(2725),d=a(3277),u=a(6713),m=a(7419),g=a(579);const p=()=>{const{handleDrop:e}=(0,m.A)(),{showSuccessToast:t,showErrorToast:a}=(0,c.A)(),[l,n]=(0,o.useState)(!1);console.log("---[WidgetLifecycle]--- starts");return(0,o.useEffect)((()=>{if(!window.widget)return;console.trace("[WidgetLifecycle] \ud83d\udd04 `onRefresh` was called from:"),window.widget.addEvent("onRefresh",(async()=>{var o,l;const i=(new Error).stack.split("\n"),c=sessionStorage.getItem("userClickedRefresh");if((e=>e.some((e=>e.includes("UWA_Frame_Alone.js")||e.includes("bundle-min.js"))))(i)&&!c)return void console.warn("[WidgetLifecycle] \u26d4 Auto-refresh detected. Ignoring unwanted `onRefresh`.");sessionStorage.removeItem("userClickedRefresh"),n(!0);const u=s.A.getState().droppedObject.droppedObjectData.initialDraggedData;if(null===u||void 0===u||null===(o=u.data)||void 0===o||null===(l=o.items)||void 0===l||!l.length)return console.error("[WidgetLifecycle] \u26a0\ufe0f `initialDraggedData` is missing or invalid:",u),void n(!1);try{await(0,r.M)(u.data.items,e)}catch(m){console.error("[WidgetLifecycle] \u274c Error during refresh:",m),a(d.H6)}finally{n(!1),t(d._l)}}))}),[]),l?(0,g.jsx)(u.A,{}):null};var h=a(45),f=a(9379),v=(a(4816),a(4282)),A=a(2691),C=a(3637),y=a(768),w=a(759),b=a(5645),P=a(184),x=a(3825);const j=e=>{let{plants:t=[],itemId:a,isRemoveMode:o,handleRemovePlant:l}=e;return console.log("PlantRenderer received plants:",t),null!==t&&void 0!==t&&t.length?(0,g.jsx)(g.Fragment,{children:t.map((e=>(0,g.jsxs)("span",{style:{marginRight:"8px",display:"inline-flex",alignItems:"center",color:e.color||"black",fontWeight:"bold"},children:[e.PlantName,o&&"Pending"===e.PlantERPStatus&&(0,g.jsx)(x.zhF,{size:16,style:{cursor:"pointer",color:"red",marginLeft:"4px"},onClick:()=>l(a,e.PlantID)})]},e.PlantID)))}):"N/A"},I=(e,t)=>e?e.map((e=>"Change Action"===t?{ItemName:(null===e||void 0===e?void 0:e.ItemTitle)||"N/A",Plant:(null===e||void 0===e?void 0:e.ItemPlants)||[],ItemId:(null===e||void 0===e?void 0:e.ItemId)||"N/A"}:{Plant:(null===e||void 0===e?void 0:e.title)||"N/A",Seq:(null===e||void 0===e?void 0:e.Seq)||"1",Status:"Current","MFG Change":(null===e||void 0===e?void 0:e.MFGChange)||"N/A","MFG Status":(null===e||void 0===e?void 0:e.MFGStatus)||"N/A",Change:(null===e||void 0===e?void 0:e.Change)||"N/A","Change Status":(null===e||void 0===e?void 0:e.ChangeStatus)||"N/A","Oracle Template":e.OracleTemplate||"N/A","ERP Status":"Active","ERP Export":"Yes","Lead Plant":!1,MBom:e.MBOM?"Make":"Buy","Sort Value":""})):[],N=[{accessorKey:"Available Plant",header:"Available Plant"}];var S=a(3127),M=a(5362),D=a(6313);a(3728);const O=e=>{let{onAddPlant:t,addedPlant:a,onSave:l,onRemove:n,uniquedata:s,uniqueColumn:i,CAName:r,state:u,type:m,isMFGCA:p}=e;const{showWarningToast:h}=(0,c.A)(),[f,v]=(0,o.useState)(!1);console.log("addPlantPopup",f,v);const A=(0,o.useRef)();console.log("[Unique Table Data]:",s);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"d-flex cta-absolute",children:[!p&&(0,g.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{v(!0)},children:"Add Plant"}),p&&(0,g.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{v(!0)},children:"Add/Update Plants"}),(0,g.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{l&&("Change Action"===m||r)?l():h("RELEASED"===u?d.EZ:d.nX)},children:"Save"}),(0,g.jsx)("button",{className:"btn btn-outline-danger btn-lg m-2",onClick:()=>{n&&n()},children:"Remove"})]}),(0,g.jsx)(D.A,{show:f,onHide:()=>v(!1),title:"Available Plant",footerButtons:[{label:"Add",variant:"primary",onClick:()=>{var e;null===(e=A.current)||void 0===e||e.addPlant(),v(!1)}},{label:"Close",variant:"danger",onClick:()=>v(!1)}],children:(0,g.jsx)("div",{className:"modal-body",children:(0,g.jsx)(M.A,{ref:A,data:s,columns:i,CAName:r,addedItem:e=>{if(console.log(e),"Change Action"===m)e.length>0&&(t(e),a(e));else if(e.length>0){const o=e.map((e=>({title:e,Seq:"1",Status:"Current","MFG Change":"N/A","MFG Status":"N/A",Change:"N/A","Change Status":"N/A","Oracle Template":"N/A","ERP Status":"Active","ERP Export":"Yes","Lead Plant":"false",MBom:"Buy","Sort Value":""})));t(o),a(e)}},state:u})})})]})};a(4119);var R=a(1397),T=a(4675);const E=()=>{const{handleDrop:e}=(0,m.A)(),{performSearch:t}=(0,T.A)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"droppable-container mt-4",children:[(0,g.jsx)(C.A,{style:{width:"90px",height:"90px"},src:"https://thewhitechamaleon.github.io/testrapp/images/drag.png",alt:"Data Collect",className:"search-icon"}),(0,g.jsx)("span",{className:"drag-and-drop-text",children:"Drag and Drop"}),(0,g.jsxs)("div",{className:"divider-container",children:[(0,g.jsx)("hr",{className:"divider"}),(0,g.jsx)("span",{className:"divider-text",children:"or"}),(0,g.jsx)("hr",{className:"divider"})]}),(0,g.jsx)(R.A,{onSearch:a=>{t(a,{title:"Search",role:"",mode:"furtive",default_with_precond:!0,precond:'flattenedtaxonomies:"types/VPMReference" OR flattenedtaxonomies:"types/Raw_Material" OR flattenedtaxonomies:"types/Document"',show_precond:!1,multiSel:!1,idcard_activated:!1,select_result_max_idcard:!1,itemViewClickHandler:"",search_delegation:"3dsearch"},(t=>{console.log("Selected objects:",t),console.log("objectId: selectedObjects[0].id",t[0].id),t&&t.length>0&&t[0].id?e([{objectId:t[0].id,objectType:t[0]["ds6w:type_value"]}]):console.warn("No objectId found in selected objects")}))}})]})})};var F=a(3353),B=a(9332),k=a(2268),L=a(1238),_=a(9722);const q=async e=>{const t=await async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";console.log("Fetching URL:",e),console.log("Method is:"),console.log("Request Body:",JSON.stringify(t,null,2));try{const o=await(0,_.A)({url:e,method:a,headers:{"Content-Type":"application/json"},data:t});return console.log("Response received:",o.data),o.data}catch(o){throw console.error("Request failed:",o),o}}("https://emr-product-datahub-server-sap-stage.azurewebsites.net/flowDownCA/createMFGCA",e,"POST");return console.log("Manufacturing CA Response:",JSON.stringify(t)),t},V=async(e,t,a)=>{try{const a=await(0,k.I)(),o=(0,f.A)({"Content-Type":"application/json"},a);let l=window.widget.getValue("Credentials");console.log("credentials createMFGCA",l);const n=l.split(".");console.log("credentialsParts",n);const s=n[1];console.log("Company Name:",s);const i=n[2];console.log("Collab Space:",i);const r=await(0,B.g)([i],o,"");console.log("Fetched allPlantsData:",r);const c=await(async(e,t,a,o)=>{const l=[],n=new Set;for(let i=1;i<e.length;i++){const t=e[i];if(t.length>=2&&t[0]&&t[1]){const e=t[0].toString().trim(),a=t[1].toString().includes(",")?t[1].toString().split(",").map((e=>e.trim())):[t[1].toString().trim()];l.push({name:e,plants:a}),a.forEach((e=>n.add(e)))}}const s=[];return n.forEach((e=>{const a=t.find((t=>t.title.replace(/^Plant\s+/,"")===e||t.title===e));a&&s.push({PlantName:a.title.replace(/^Plant\s+/,""),PlantID:a.id})})),{CATitle:"FromAutomation",CAOrganization:a,CACollabSpace:o,CAOwner:"e1331143",Items:l,ParentPlants:s}})(e,r,s,i);console.log("[processManufacturingCA] Manufacturing CA Body (JSON):",JSON.stringify(c,null,2));const d=await q(c);console.log("[processManufacturingCA] Manufacturing CA API Response:",d);const u=null===d||void 0===d?void 0:d.CAName;t("Manufacturing CA created successfully! Name: ".concat(u))}catch(o){console.error("Error in processManufacturingCA:",o),a("Failed to create Manufacturing CA. Please try again.")}};var G=a(3910),z=a(7929);a(6047);const K=["title"],U=["color"],W=()=>{const{showSuccessToastWithProgress:e,showErrorToastWithProgress:t}=(0,c._)(),[a,l]=(0,o.useState)(null),[s,i]=(0,o.useState)(!1),[r,p]=(0,o.useState)([]),{initializeDroppableArea:x,loading:M}=(0,m.A)(),[D,R]=(0,o.useState)(0),[T,B]=(0,o.useState)([]),[k,_]=(0,o.useState)([]),[q,U]=(0,o.useState)(null),[W,Y]=(0,o.useState)([]),[X,Q]=(0,o.useState)([]),[Z,$]=(0,o.useState)(!1),[ee,te]=(0,o.useState)(!0),[ae,oe]=(0,o.useState)(!1),[le,ne]=(0,o.useState)(!1),[se,ie]=(0,o.useState)(!1),[re,ce]=(0,o.useState)(!1),de=(0,n.wA)(),{showSuccessToast:ue,showErrorToast:me}=(0,c.A)();let ge=window.widget.getValue("Credentials");console.log("Security context is: ",ge);const pe=(0,o.useRef)(null),he=(0,o.useCallback)(((e,t)=>{Q((a=>a.map((a=>a.ItemId===e?(0,f.A)((0,f.A)({},a),{},{ItemPlants:a.ItemPlants.filter((e=>e.PlantID!==t))}):a))))}),[Q]),fe=e=>{const t=e.map((e=>({itemName:e.ItemName,plantName:e.Plant})));return console.log("Extracted Plant Data:",t),t};console.log("Table Data after Adding:",T);const ve=(0,n.d4)((e=>e.droppedObject.selectedTableRows)),Ae=(0,n.d4)((e=>e.droppedObject.droppedObjectData));console.log("droppedObjectData",Ae);const Ce=(0,n.d4)((e=>e.droppedObject.CAItemObjectDetails.CAItemDetails));console.log("The CA Item Details are:",Ce);const ye=(0,n.d4)((e=>e.droppedObject.CAItemObjectDetails.CAallPlants));console.log("For CA all Plants are: ",ye);const we=(0,n.d4)((e=>e.droppedObject.CAItemObjectDetails.CAheaders));console.log("caheaders plant assign",we);const be=(0,n.d4)((e=>e.droppedObject.CAItemObjectDetails.CAisMFGCA));console.log("isMFGCA value is:",be);const Pe=(0,n.d4)((e=>e.droppedObject.loadingParentDetails));console.log("Parents Loading State:",Pe);const xe=(0,n.d4)((e=>e.droppedObject.plantObjectData.proposedChanges));console.log("Proposed Changes are:",xe);const je=(0,n.d4)((e=>e.droppedObject.isDropped)),Ie=(0,n.d4)((e=>e.droppedObject.plantObjectData.allPlants));console.log("[PlantAssignment] plant object data: ",Ie);const Ne=(0,n.d4)((e=>e.droppedObject.plantObjectData.uniquePlants));console.log("[Plant Assignment] Unique Plants:",Ne);const Se=(0,n.d4)((e=>e.droppedObject.plantObjectData.initialAssignedPlants));console.log("The Assigned Plants are:",Se);const Me=(0,n.d4)((e=>e.droppedObject.plantObjectData.productChildren));console.log("[Plant Assignment] Product Children:",Me);const De=(0,n.d4)((e=>e.droppedObject.plantObjectData.CAName));console.log("[plant Assignment] CAName:",De);const Oe=(0,n.d4)((e=>e.droppedObject.plantObjectData.headers));console.log("[Plant Assignment] Headers are: ",Oe);const Re=(0,o.useCallback)((()=>{let e=ye.map((e=>e.title.replace(/^Plant /,"")));const t=0===ve.length?T:ve;let a=[...new Set(t.flatMap((e=>{var t;return(null===(t=e.Plant)||void 0===t?void 0:t.map((e=>e.PlantName)))||[]})))],o=e.filter((e=>!a.includes(e))).map((e=>({title:e})));return console.log("Unique table plants are :",o),e.map((e=>({title:e})))}),[ye,T,ve,be]),Te=e=>{B(e)};if(console.log("Tanble Data is:",T),(0,o.useEffect)((()=>{T.length>=0&&R((e=>e+1))}),[T]),Ae.cardData&&Ae.initialDraggedData)var Ee,Fe,Be=Ae.cardData["Maturity State"],ke=null===(Ee=Ae.initialDraggedData)||void 0===Ee||null===(Fe=Ee.data)||void 0===Fe?void 0:Fe.items[0].objectType;const[Le,_e]=(0,o.useState)(Se);console.log("Duplicate Initial Assigned Classes are:",Le),(0,o.useEffect)((()=>{_e(Se),"Change Action"===ke?Q(Ce):_(Se)}),[Se,ke,Ce]),(0,o.useEffect)((()=>{"Change Action"===ke&&Y(Re())}),[Re,ke]),(0,o.useEffect)((()=>{"Change Action"!==ke&&Y(Ne)}),[Ne,ke]);const qe=async e=>{var t,a;let o={};const l=[];console.log("Table Data",e),console.log("Before DupInitialAssignedClasses:",Le);let n=[],s=Le.map((t=>{let a=(0,f.A)({},t);return e.forEach((e=>{var t;let l={};const s=e.Plant.replace("Plant","").replace(/\s+/g,""),i=null===(t=Ie.find((t=>t.title===e.Plant)))||void 0===t?void 0:t.id;if(a.title===e.Plant){(a.MBOM?"Make":"Buy")!==e.MBom&&(/^\d/.test(s)?(o["MBOM".concat(s)]="Make"===e.MBom,l.MBOMName="MBOM".concat(s),l.MBOMValue="Make"===e.MBom):(o["".concat(s,"MBOM")]="Make"===e.MBom,l.MBOMName="".concat(s,"MBOM"),l.MBOMValue="Make"===e.MBom),a.MBOM="Make"===e.MBom,l=(0,f.A)((0,f.A)({},l),{},{id:i,title:e.Plant,Type:"Update"}),n.push(l))}})),a}));e.forEach((e=>{if(!Le.find((t=>t.title===e.Plant))){var t;const a=e.Plant.replace("Plant","").replace(/\s+/g,""),i=null===(t=Ie.find((t=>t.title===e.Plant)))||void 0===t?void 0:t.id;if(i){let t={id:i,title:e.Plant},r={};l.push(i),"Make"===e.MBom?(/^\d/.test(a)?(o["MBOM".concat(a)]=!0,r.MBOMName="MBOM".concat(a)):(o["".concat(a,"MBOM")]=!0,r.MBOMName="".concat(a,"MBOM")),t.MBOM=!0,r.MBOMValue=!0):(t.MBOM=!1,r.MBOMValue=!1),s.push(t),r=(0,f.A)((0,f.A)({},r),{},{id:i,title:e.Plant,Type:"New"}),n.push(r)}}}));let i=[];Le.forEach((t=>{if(!e.some((e=>e.Plant===t.title))){var a;const e=null===(a=Ie.find((e=>e.title===t.title)))||void 0===a?void 0:a.id;e&&i.push(e)}})),s=s.filter((e=>!i.includes(e.id))),console.log("Rows getting deleted rowstoDelete:",i),console.log("After DupInitialAssignedClasses:",s),console.log("Classes to be Classified:",l),console.log("Updated Items:",o),console.log();const r=await(0,S.iu)(o,l,s,Oe,null===(t=Ae.initialDraggedData)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.items[0].objectId,Ie,Me,ke,i,n,xe);if(r.success){ne(!1),console.log("Save result:",r),""===r.Finalmessage||null==r.Finalmessage?ue(d.KF):me((e=>{if(!e)return"An error occurred.";const t=e.split("\n").filter((e=>""!==e.trim()));return(0,g.jsxs)("div",{style:{userSelect:"text",cursor:"text",position:"relative",paddingRight:"40px"},children:[(0,g.jsx)("strong",{children:"Errors:"}),(0,g.jsx)("button",{onClick:()=>{const e=t.map((e=>"- ".concat(e))).join("\n");navigator.clipboard.writeText(e)},style:{position:"absolute",right:"10px",top:"-12px",background:"none",border:"none",cursor:"pointer",fontSize:"16px",color:"grey"},children:(0,g.jsx)(P.zU_,{size:12})}),(0,g.jsx)("ol",{children:t.map(((e,t)=>(0,g.jsx)("li",{children:e},t)))})]})})(r.Finalmessage),{autoClose:!1,closeOnClick:!1});let e=[];if(r.ErrorObj&&Object.keys(r.ErrorObj).length>0){let t=function(e,t,a,o){return console.log("Assigned Plants are:",t),console.log("unique Plants are:",o),e.forEach((e=>{"New"===e.type?(a=a.filter((t=>t.title!==e.title)),o.some((t=>t.title===e.title))||o.push(e)):"Update"===e.type&&(a=a.map((t=>t.title===e.title?(0,f.A)((0,f.A)({},t),{},{MBOM:"false"}):t)))})),{updatedAssignedClasses:a,uniquePlant:o}}(r.ErrorObj,k,s,Ne);console.log("response is ",t),t&&(Y(t.uniquePlant),e=t.updatedAssignedClasses)}else e=s;e&&(_(e),_e(e))}else ne(!1),me(d.fm)};(0,o.useEffect)((()=>{je||x()}),[je,x]),(0,o.useEffect)((()=>{oe(Pe)}),[Pe]);const Ve=(0,o.useMemo)((()=>I("Change Action"===ke?X:k,ke)),[X,k,ke]),Ge=(0,o.useMemo)((()=>(e=>e?e.map((e=>({"Available Plant":(null===e||void 0===e?void 0:e.title)||"N/A"}))):[])(W)),[W]);console.log("[Plant Assignment] Unique Table Data:",Ge),(0,o.useEffect)((()=>{Ve.length>=0&&(console.log("New Table Data:",Ve),B(Ve),R((e=>e+1)))}),[Ve]);const ze=(0,o.useMemo)((()=>(e=>{if(!e||!e.cardData)return null;const t=e.cardData;let a={title:t.Title||"N/A",type:t.Type||"N/A","Maturity State":t["Maturity State"]||"N/A",owner:t.Owner||"N/A","Collaborative Space Title":t["Collaborative Space Title"]||"N/A",Description:t.Description||"N/A","Dropped Revision":t["Dropped Revision"]||"N/A","Latest Released Revision":t["Latest Released Revision"]||"N/A","CAD Format":t["CAD Format"]||"N/A",imageURL:t.imageURL||"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/snresources/images/icons/large/I_VPMNavProduct108x144.png"};return"Document"!==t.Type&&(a.EIN=t.EIN||"N/A",a["CAD Format"]=t["CAD Format"]||"N/A"),a})(Ae)),[Ae]);console.log(ze),(0,o.useEffect)((()=>{ie(!!ze)}),[ze]);const Ke=(0,o.useMemo)((()=>((e,t,a,o)=>(console.log("type here is: ",t),"Change Action"===t?[{accessorKey:"ItemName",header:"Item Name"},{accessorKey:"Plant",header:"Plant",cell:e=>{let{row:t}=e;return(0,g.jsx)(j,{plants:t.original.Plant,itemId:t.original.ItemId,isRemoveMode:a,handleRemovePlant:o})}}]:[{accessorKey:"Plant",header:"Plant"},{accessorKey:"Seq",header:"Seq"},{accessorKey:"MBom",header:"MBom",cell:t=>{let{row:a,getValue:o,table:l}=t;return(0,g.jsxs)("select",{value:o(),onChange:t=>{var o;if(!e)return;const n=t.target.value,s=l.getRowModel().rows.map((e=>e.id===a.id?(0,f.A)((0,f.A)({},e.original),{},{MBom:n}):e.original));null===(o=l.options.meta)||void 0===o||o.updateTableData(s)},disabled:!e,className:"appearance-none bg-transparent border-none cursor-pointer focus:outline-none",style:(0,f.A)((0,f.A)({},!1===e&&{appearance:"none"}),{},{width:"70%",padding:"5px",fontSize:"14px",color:"#333",background:"none",border:"none",textAlign:"left"}),onMouseOver:t=>{e&&(t.target.style.border="1px solid #ccc")},onMouseOut:t=>{e&&(t.target.style.border="none")},children:[(0,g.jsx)("option",{value:"Make",children:"Make"}),(0,g.jsx)("option",{value:"Buy",children:"Buy"})]})}},{accessorKey:"Status",header:"Status"},{accessorKey:"MFG Change",header:"MFG Change"},{accessorKey:"MFG Status",header:"MFG Status"},{accessorKey:"Change",header:"Change"},{accessorKey:"Change Status",header:"Change Status"},{accessorKey:"Oracle Template",header:"Oracle Template"},{accessorKey:"ERP Status",header:"ERP Status"},{accessorKey:"ERP Export",header:"ERP Export"},{accessorKey:"Lead Plant",header:"Lead Plant"},{accessorKey:"Sort Value",header:"Sort Value"}]))(De,ke,re,he)),[De,ke,re,he]),Ue=(0,o.useMemo)((()=>N),[]);(0,o.useEffect)((()=>{console.log("[PlantAssignment] State Changes:",{loading:M,loadingParentDetails:Pe,isDropped:je})}),[M,Pe,je]);return(0,g.jsxs)(g.Fragment,{children:[le&&(0,g.jsx)(u.A,{}),!je&&!M&&!ae&&(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative"},children:[(0,g.jsx)(E,{}),(0,g.jsxs)("div",{style:{padding:"0px 0px 10px 0px",position:"absolute",bottom:"10px",left:"50%",transform:"translateX(-50%)",zIndex:10,display:"flex",gap:"10px",alignItems:"center"},children:[(0,g.jsx)(v.A,{variant:"outline-primary",onClick:()=>{const e=document.createElement("a");e.href="https://github.com/aayush825/EMR_PLANT_WIDGET/raw/main/plant_assignment_template.xlsx",e.download="plant_assignment_template.xlsx",e.click()},children:"Download Template"}),(0,g.jsx)(A.A.Group,{controlId:"formFileMultiple",children:(0,g.jsx)(A.A.Control,{type:"file",multiple:!0,onChange:e=>{(async(e,t,a,o,l,n,s,i)=>{console.log("[handleFileChange] Function triggered");const r=e.target.files,c=["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];if(Array.from(r).filter((e=>!c.includes(e.type)&&!e.name.toLowerCase().endsWith(".xls")&&!e.name.toLowerCase().endsWith(".xlsx"))).length>0)return o("Only Excel files (.xls, .xlsx) can be uploaded"),e.target.value="",void i(!0);const d=r[0],u=new FileReader;u.onload=async e=>{const r=new Uint8Array(e.target.result),c=L.LF(r,{type:"array"}),u=c.SheetNames[0],m=c.Sheets[u],g=L.Wp.sheet_to_json(m,{header:1});if(console.log("Parsed Excel Data:",g),0===g.length)return o("File is empty"),void i(!0);const p=g[0].map((e=>null===e||void 0===e?void 0:e.toString().trim().toLowerCase()));if(console.log("Normalized Headers:",p),"item"!==p[0]||"plants"!==p[1])return o("File headers are incorrect. Expected headers: 'Item' and 'Plants'"),void i(!0);if(1===g.length)return void o("No data present in the file. Only headers are present.");const h=[];for(let t=1;t<g.length;t++){const e=g[t],a=e[0],o=e[1];!a&&o&&h.push({rowNumber:t+1,columnName:"Item",errorDescription:"Items can't be empty"}),a&&!o&&h.push({rowNumber:t+1,columnName:"Plants",errorDescription:"Plants value is missing"})}if(console.log("Validation Errors:",h),h.length>0){const e=h.map((e=>"Row ".concat(e.rowNumber,': "').concat(e.columnName,'" value ').concat(e.errorDescription)));console.log("[createMFGCA.js] Formatted Errors:",e),t(e),a(!0),i(!0)}else l("File uploaded successfully with no errors"),n(g),s(d),i(!1)},u.onerror=()=>{o("Failed to read the file. Please try again."),i(!0)},u.readAsArrayBuffer(d)})(e,p,i,me,ue,l,U,te).finally((()=>{ne(!1)})),$(!0)},disabled:Z,ref:pe})}),(0,g.jsx)(v.A,{variant:"outline-danger",onClick:()=>{l(null),U(null),p([]),i(!1),$(!1),pe.current&&(pe.current.value=""),te(!0),ue("File upload has been reset.")},children:(0,g.jsx)(G.g,{icon:z.ub2})}),(0,g.jsx)("div",{style:{display:"inline-block",cursor:ee?"not-allowed":"pointer"},children:(0,g.jsx)(v.A,{variant:"outline-primary",onClick:async()=>{if(a){ne(!0);try{await V(a,e,t)}catch(o){console.error("Error in handleSubmit:",o)}finally{ne(!1)}te(!0)}else me("Please upload and validate a file before proceeding.")},disabled:ee,children:"Create Manufacturing CA"})})]})]}),je&&(0,g.jsxs)(g.Fragment,{children:[M&&(0,g.jsx)(u.A,{}),(0,g.jsx)("div",{className:"content-wrapper py-3 border-bottom",children:(0,g.jsxs)("div",{className:"d-flex ",children:[(0,g.jsx)("div",{className:" p-0 pt-4",children:(0,g.jsx)(C.A,{src:"https://thewhitechamaleon.github.io/testrapp/images/home.png",alt:"home-icon",className:"home-icon",onClick:()=>{x(),de((0,b.Rr)(!1)),de((0,b.um)({cardData:{},parentDetails:[],versions:[],initialDraggedData:[]})),de((0,b.Lq)({allPlants:[],initialAssignedPlants:[],uniquePlants:[],productChildren:[],CAName:!1,headers:{},proposedChanges:[]})),de((0,b.OL)({CAItemDetails:[],CAallPlants:[],CAisMFGCA:!1,CAheaders:{}})),B([]),ie(!1)}})}),ze&&(0,g.jsx)(w.A,{data:ze,widgetType:"PlantAssignment"})]})}),ae?(0,g.jsx)("div",{className:"loading-indicator mt-5",children:(0,g.jsx)(u.A,{})}):(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"wrapper-cta",children:[(0,g.jsx)(O,{uniquedata:Ge,uniqueColumn:Ue,CAName:De,onAddPlant:async e=>{var t,a;(console.log("Data Received",e),console.log("[Plant Assignment] Table data",T),console.log("Added Data from Toolbar",e),console.log("CA Table data is",Ce),R((e=>e+1)),"Change Action"===ke)?(console.log("Change Action Plant is Added"),Q((t=>t.map((t=>{if(!(0===ve.length||ve.some((e=>e.ItemId===t.ItemId))))return t;const a=Ce.find((e=>e.ItemId===t.ItemId)),o=(null===a||void 0===a?void 0:a.ItemPlants)||[],l=t.ItemPlants||[],n=l.map((t=>be&&e.includes(t.PlantName.trim())&&o.some((e=>e.PlantName.trim()===t.PlantName.trim()))?(0,f.A)((0,f.A)({},t),{},{color:"red"}):t)),s=[];return e.forEach((e=>{const t=ye.find((t=>t.title.replace(/^Plant\s+/,"").trim()===e.trim()));if(!t)return;const a=o.some((t=>t.PlantName.trim()===e.trim()));l.some((t=>t.PlantName.trim()===e.trim()))||s.push((0,f.A)({PlantName:e,PlantID:t.id,PlantERPStatus:"Pending"},a?{color:"red"}:{color:"green"}))})),(0,f.A)((0,f.A)({},t),{},{ItemPlants:[...n,...s]})}))))):(B((t=>[...e.map((e=>{let{title:t}=e,a=(0,h.A)(e,K);return(0,f.A)({Plant:t},a)})),...t])),await(0,S.Eo)(e,Ie,null===(t=Ae.initialDraggedData)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.items[0].objectId,ke,xe,Me))},addedPlant:e=>{console.log("The data received from Child is:",e);const t=Ge.filter((t=>!e.find((e=>e===t["Available Plant"]))));if(console.log("Updated Table Data after unique:",t),t){const e=t.map((e=>({title:e["Available Plant"]})));console.log(e),Y(e)}},onSave:async()=>{if(console.log("OnSave is Called with the TableData",T),fe(T),ne(!0),"Change Action"===ke)if(!0===be){console.log("Manufacturing CA Save Called");const e=await H(T,Ae,Ce);if(console.log("response from Save Api is :",e),e){const e=T.map((e=>{const t=Ce.find((t=>t.ItemId===e.ItemId));return{ItemId:e.ItemId,ItemType:null===t||void 0===t?void 0:t.ItemType,ItemState:null===t||void 0===t?void 0:t.ItemState,ItemTitle:e.ItemName,ItemPlants:e.Plant.map((e=>{let{PlantName:t,PlantID:a}=e;return{PlantName:t,PlantID:a}}))}}));de((0,b.OL)(e)),ne(!1)}else console.warn("Save API returned false"),ne(!1)}else{console.log("Engineering CA Save Called");const e=await J(T,Ae,Ce);if(console.log("response from Save Api is :",e),e){const e=T.map((e=>{const t=Ce.find((t=>t.ItemId===e.ItemId));return{ItemId:e.ItemId,ItemType:null===t||void 0===t?void 0:t.ItemType,ItemState:null===t||void 0===t?void 0:t.ItemState,ItemTitle:e.ItemName,ItemPlants:e.Plant.map((e=>{let{PlantName:t,PlantID:a}=e;return{PlantName:t,PlantID:a}}))}}));de((0,b.OL)(e)),ne(!1)}else console.warn("Save API returned false"),ne(!1)}else await qe(T)},onRemove:async()=>{if("Change Action"===ke)console.log("Remove is clicked for Chnage Action"),ce((e=>!e));else if(console.log("Selected Table Rows:",ve),console.log("handleRemove is Called with the TableData",T),ve.length>0){var e,t;const a=ve.map((e=>e.Plant));console.log("Selected Titles:",a);const o=a.map((e=>({title:e})));console.log("Removed Titles:",o);const l=T.filter((e=>!a.includes(e.Plant)));console.log("updateTableData",Te),Te&&(B(l),R((e=>e+1))),Y((e=>[...e,...o])),await(0,S.Bx)(Ie,o,null===(e=Ae.initialDraggedData)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.items[0].objectId,ke)}else alert("Please select at least one row to remove.")},state:Be,type:ke,isMFGCA:be}),(0,g.jsx)(y.A,{data:T,columns:Ke,meta:{updateTableData:Te},widgetType:"Plant_Assignment_Widget"},D)]})})]}),(0,g.jsx)(F.A,{show:s,onHide:()=>i(!1),errors:r})]})},H=async(e,t,a)=>{var o,l,n;const s=(null===(o=t.initialDraggedData)||void 0===o||null===(l=o.data)||void 0===l||null===(n=l.items)||void 0===n?void 0:n[0])||{},i=t.cardData||{},r={CATitle:i.Title,CAId:s.objectId,CAOrganization:i.organization,CACollabSpace:i["Collaborative Space"],CAOwner:"e1331143",Items:e.map((e=>{const t=a.find((t=>t.ItemId===e.ItemId));return{ItemId:e.ItemId,ItemType:(null===t||void 0===t?void 0:t.ItemType)||"VPMReference",ItemState:(null===t||void 0===t?void 0:t.ItemState)||"IN_WORK",ItemTitle:e.ItemName,ItemPlants:e.Plant.filter((e=>e.color)).map((e=>{const{color:t}=e,a=(0,h.A)(e,U);return(0,f.A)((0,f.A)({},a),{},{PlantType:"green"===t?"New":"old"})}))}}))};console.log("Payload for the Save is :",r);try{return!0}catch(c){throw console.error("Failed to send CA save data:",c),c}},J=async(e,t,a)=>{var o,l,n;const s=(null===(o=t.initialDraggedData)||void 0===o||null===(l=o.data)||void 0===l||null===(n=l.items)||void 0===n?void 0:n[0])||{},i=t.cardData||{},r={CATitle:i.Title,CAId:s.objectId,CAOrganization:i.organization,CACollabSpace:i["Collaborative Space"],CAOwner:"e1331143",Items:e.map((e=>{const t=a.find((t=>t.ItemId===e.ItemId));return{ItemId:e.ItemId,ItemType:(null===t||void 0===t?void 0:t.ItemType)||"VPMReference",ItemState:(null===t||void 0===t?void 0:t.ItemState)||"IN_WORK",ItemTitle:e.ItemName,ItemPlants:e.Plant.map((e=>({PlantName:e.PlantName,PlantID:e.PlantID,PlantType:"New"})))}}))};console.log("Payload for Engineering CA Save is:",r);try{return!0}catch(c){throw console.error("Failed to send CA save data:",c),c}};let Y=null;function X(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let a=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");a||(a=document.createElement("div"),a.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(a):document.body.appendChild(a)),Y||(Y=l.createRoot(a)),Y.render((0,g.jsxs)(n.Kq,{store:s.A,children:[(0,g.jsx)(p,{}),(0,g.jsx)(W,{}),(0,g.jsx)(i.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}!function(){if(window.parent&&window.parent.document){let e=window.parent.document.createElement("script");e.textContent='\n    function listenForRefreshClicks() {\n      // console.log("\ud83c\udf0d [Parent] Listening for manual refresh clicks...");\n\n      document.body.addEventListener("click", function (event) {\n        let refreshButton = event.target.closest("#refresh"); // Check if refresh was clicked\n\n        if (refreshButton) {\n          // console.log("\u2705 [Parent] User clicked Refresh!");\n          sessionStorage.setItem("userClickedRefresh", "true"); // Store flag\n          // console.log("Stored Flag:", sessionStorage.getItem("userClickedRefresh"));\n        }\n      }, true);\n    }\n\n    // \u2705 Ensure event listener is added even if DOM is already loaded\n    if (document.readyState === "loading") {\n      document.addEventListener("DOMContentLoaded", listenForRefreshClicks);\n    } else {\n      listenForRefreshClicks();\n    }\n  ',window.parent.document.body.appendChild(e)}else console.warn("\u26a0\ufe0f [index.js] Unable to inject script\u2014parent window not accessible.")}()},3127:(e,t,a)=>{a.d(t,{Bx:()=>i,Eo:()=>r,iu:()=>c});var o=a(9379),l=a(9722),n=a(6047);const s=(e,t)=>{console.log("Data Received for ID Extraction:",e),console.log("[PlantAssignment] All Plants Data:",t);const a=e.map((e=>{const a=e.title.replace(/\s+/g,"").replace(/plant/i,""),o=t.find((e=>e.title.replace(/\s+/g,"").replace(/plant/i,"").toLowerCase()===a.toLowerCase()));return o?o.id:null})).filter((e=>null!==e));return console.log("Extracted IDs (newClasses):",a),a},i=async(e,t,a,o)=>{console.log("allPlants",e),console.log("removedTitles",t);const l=s(t,e);if(l.length>0){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/declassifyProductToClass",t={id:a,type:o,classes:l};const s=await(0,n.Fd)(e,t,"POST");console.log("declassifyResponse:",JSON.stringify(s))}},r=async(e,t,a,o,l,i)=>{console.log("Data Received for handleAddData:",e);const r=s(e,t);console.log("newClasses ",r),console.log("productChilds",i);let c=i.filter((e=>{if(console.log("Processing prodChild:",e),"released"===e.state.toLowerCase()){console.log("Released prodChild:",e);const t=l.find((t=>t.identifier===e.id&&"modify"===t.action.toLowerCase()));return console.log("Matching change for prodChild:",t),!t}return console.log("prodChild state is not 'released':",e.state),!1}));if(console.log("NotPropagableChilds ARE :",c),console.log("data",e),console.log("allPlants",t),r.length>0){const e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/classifyProductToClass",t={id:a,type:o,classes:r,mode:"classifyParent"};console.log("Classify API Body:",t);try{const a=await(0,n.Fd)(e,t,"POST");console.log("Classify Response:",JSON.stringify(a))}catch(d){console.error("Error in Classify API Call:",d)}}},c=async(e,t,a,s,i,r,c,d,u,m,g)=>{try{const e="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";console.log("[Save Data] Starting data saving process..."),console.log("Type in Save Table Data:",d),console.log("Final aRRAY IS inside Save:",m),console.log("Proposed Changes in Save",g);const t=await(0,n.fV)(),a=async(e,a,l)=>(console.log("Fetching URL:",e),console.log("Request Body:",JSON.stringify(a,null,2)),new Promise(((n,i)=>{t.authenticatedRequest(e,{method:l,headers:(0,o.A)((0,o.A)({},s),{},{"Content-Type":"application/json"}),data:JSON.stringify(a),type:"json",onComplete:e=>{console.log("Response received:",e),n(e)},onFailure:e=>{console.error("Request failed:",e),i(e)}})}))),r=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";console.log("Fetching URL:",e),console.log("Method is:"),console.log("Request Body:",JSON.stringify(t,null,2));try{const n=await(0,l.A)({url:e,method:a,headers:(0,o.A)((0,o.A)({},s),{},{"Content-Type":"application/json"}),data:t});return console.log("Response received:",n.data),n.data}catch(n){throw console.error("Request failed:",n),n}};let h=c.filter((e=>{if(console.log("Processing prodChild:",e),"released"===e.state.toLowerCase()){console.log("Released prodChild:",e);const t=g.find((t=>t.identifier===e.id&&"modify"===t.action.toLowerCase()));return console.log("Matching change for prodChild:",t),!t}return console.log("prodChild state is not 'released':",e.state),!1}));console.log("NotPropagableChilds ARE :",h);let f=[];m.forEach((e=>{if(e.MBOMValue){let t=[];h.forEach((a=>{a.classes.includes(e.id)||t.push({childId:a.id,childName:a.name})})),t.length>0&&f.push({id:e.id,title:e.title,childs:t,type:e.Type})}}));let v="";console.log("ErrorObj IS",f),f.forEach((e=>{let t="";if(Array.isArray(e.childs)&&e.childs.every((e=>e.childName))){const a=e.childs.map((e=>e.childName)).join(", ");console.log("Chilld Titles are",a),t="new"!==e.type.toLowerCase()?"".concat(e.title," MBOM can't be Make due to unclassified child items: ").concat(a):"Unable to classify product ".concat(e.title," due to unclassified child items: ").concat(a),console.log("Message is:",t)}else t="Invalid child data for ".concat(e.title,".");v+="".concat(t,"\n")})),console.log(f),console.log("Concatenated Messages:\n",v);let A=m.filter((e=>"new"===e.Type.toLowerCase()&&!f.some((t=>t.id===e.id)))).map((e=>e.id));console.log("New Classes are:",A);let C={};m.forEach((e=>{!f.some((t=>t.id===e.id))&&("update"===e.Type.toLowerCase()||"new"===e.Type.toLowerCase()&&e.MBOMValue)&&(C[e.MBOMName]=e.MBOMValue)})),console.log("Update body is:",C);let y=m.filter((e=>e.MBOMValue&&!f.some((t=>t.id===e.id)))).map((e=>e.id));if(console.log("Propogateable classes are",y),A.length>0){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/classifyProductToClass",t={id:i,type:d,classes:A,mode:"classifyParent"};const a=await r(e,t,"POST");console.log("classifyResponse:",JSON.stringify(a))}if(Object.keys(C).length>0){var p;const t="".concat(e,"/resources/v1/modeler/dslib/dslib:ClassifiedItem/").concat(i),o=await a(t,"","GET");console.log("CStamp Response:",o);let l=(null===(p=o.member[0])||void 0===p?void 0:p.cestamp)||"";C.cestamp=l;const n="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/updateClassificationAttribute?id=".concat(i);await r(n,C,"PATCH"),console.log("Updated database successfully.")}if(y.length>0&&c.length>0&&"VPMReference"===d){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/classifyProductToClass",t={id:i,type:d,classes:y,childs:c,mode:"classifychilds"};const a=await r(e,t,"POST");console.log("child classifyResponse:",JSON.stringify(a))}if(u.length>0){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/declassifyProductToClass",t={id:i,type:d,classes:u};const a=await r(e,t,"POST");console.log("declassifyResponse:",JSON.stringify(a))}return console.log("All classification API calls completed successfully."),{success:!0,message:"Data saved successfully",ErrorObj:f,Finalmessage:v}}catch(h){return console.error("Error occurred:",h),{success:!1,message:"Failed to save data",error:h}}}}}]);
//# sourceMappingURL=449.cae5bc59.chunk.js.map