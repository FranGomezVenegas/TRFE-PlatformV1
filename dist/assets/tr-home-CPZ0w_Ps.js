var Te=Object.defineProperty,Ce=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var he=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable;var fe=(a,e,t)=>e in a?Te(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,m=(a,e)=>{for(var t in e||(e={}))ke.call(e,t)&&fe(a,t,e[t]);if(he)for(var t of he(e))Ae.call(e,t)&&fe(a,t,e[t]);return a},x=(a,e)=>Ce(a,Ee(e));import{s as A,i as b,_ as r,n,l as j,a as g,x as h,o as N,A as d,D as Se,e as S,b as $e,c as ze,t as z,d as Ie,T as B,f as Fe,m as ce,g as ue,h as Le,j as Oe,k as Re}from"./index-D3UNHSMc.js";import{t as _,E as M,i as w,n as Ne,m as ge,a as be,s as Me}from"./list-item-BNcmRXHV.js";class De extends A{static get properties(){return{config:{type:Object},flag:{type:String},lang:{type:String},fieldErrMsg:{type:Object},desktop:{type:Boolean},userName:{type:String},headerInfo:{type:Object}}}constructor(){super(),this.config={},this.userName="",this.lang="en"}firstUpdated(){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{this.resizeElements()},500)},!0),this.updateComplete.then(()=>{this.resizeElements(),this.localToast=document.createElement("div"),this.localToast.style.position="fixed",this.localToast.style.bottom="10px",this.localToast.style.left="10px",this.localToast.style.padding="5px",this.localToast.style.backgroundColor="black",this.localToast.style.color="white",this.localToast.style.fontSize="12px",this.localToast.style.maxWidth="98vw",this.localToast.style.display="none",this.localToast.style.zIndex="999",this.shadowRoot.appendChild(this.localToast)}),this.addEventListener("success",t=>{this.showNotif(t)}),this.addEventListener("error",t=>{this.showNotif(t),this.localToast.style.backgroundColor="#a33"})}showNotifOld(e){this.localToast.textContent=e.detail.message||e.detail["message_"+this.lang],this.localToast.textContent&&(this.localToast.style.display="block",setTimeout(()=>this.localToast.style.display="none",4e3))}showNotif(e){if(e.detail.is_error===void 0)return;let t=e.detail["message_"+this.lang]!==void 0?e.detail["message_"+this.lang]:e.detail.message;if(this.localToast.textContent=t,this.localToast.textContent&&e.detail.is_error===!0){this.localToast.style.backgroundColor="#b22222",this.localToast.style.display="block",this.localToast.style.zIndex="999",setTimeout(()=>this.localToast.style.display="none",4e3);return}else{this.localToast.style.backgroundColor="#0085ff",this.localToast.style.display="block",this.localToast.style.zIndex="999",setTimeout(()=>this.localToast.style.display="none",4e3);return}}resizeElements(){document.documentElement.clientWidth>460?this.desktop=!0:this.desktop=!1}updated(e){e.has("config")&&JSON.stringify(this.config)!="{}"&&sessionStorage.getItem("userSession")&&this.authorized(),e.has("lang")&&(this.changeFlag(),this.dispatchEvent(new CustomEvent("change-lang",{detail:{lang:this.lang},bubbles:!0,composed:!0})))}authorized(){console.log(JSON.parse(sessionStorage.getItem("userSession"))),this.userName=JSON.parse(sessionStorage.getItem("userSession")).userName,this.headerInfo=JSON.parse(sessionStorage.getItem("userSession")).header_info}fetchApi(e,t=!0){let o=!0;return e.toString().toUpperCase().includes("QUERI")&&(o=!1),o=!0,console.log("fetchApi, log",o,"urlParams",e,e.toString().toUpperCase()),e+="&isForTesting="+this.config.isForTesting,this.dispatchEvent(new CustomEvent("set-activity",{bubbles:!0,composed:!0})),fetch(e).then(async i=>{if(i.status==200)return i.json();throw await i.json()}).then(i=>(this.refreshMasterData(i),t&&this.dispatchEvent(new CustomEvent("success",{detail:x(m({},i),{log:o}),bubbles:!0,composed:!0})),i)).catch(i=>{if(i.message=="Unexpected end of JSON input"){this.dispatchEvent(new CustomEvent("error",{detail:m({},i),bubbles:!0,composed:!0}));return}else return this.dispatchEvent(new CustomEvent("error",{detail:x(m({},i),{log:o}),bubbles:!0,composed:!0})),this.error(i),i})}refreshMasterData(e){if(this.procInstanceName===void 0||e===void 0||e.master_data===void 0)return;let t=JSON.parse(sessionStorage.getItem("userSession"));e.master_data!==void 0&&(t.procedures_list.procedures[this.procInstanceName].master_data=e.master_data,sessionStorage.setItem("userSession",JSON.stringify(t)))}fetchApiPost(e,t=!0,o){let i=!0;e.toString().toUpperCase().includes("QUERI")&&(i=!1),i=!0;const s=new FormData;return s.append("dbUserName",o[0]),s.append("dbUserPassword",o[1]),console.log("fetchApi, log",i,"urlParams",e,e.toString().toUpperCase()),e+="&isForTesting="+this.config.isForTesting,this.dispatchEvent(new CustomEvent("set-activity",{bubbles:!0,composed:!0})),fetch(e,{method:"POST",body:s}).then(async l=>{if(l.status==200)return l.json();throw await l.json()}).then(l=>(t&&this.dispatchEvent(new CustomEvent("success",{detail:x(m({},l),{log:i}),bubbles:!0,composed:!0})),l)).catch(l=>{if(l.message=="Unexpected end of JSON input"){this.dispatchEvent(new CustomEvent("error",{detail:m({},l),bubbles:!0,composed:!0}));return}else return this.dispatchEvent(new CustomEvent("error",{detail:x(m({},l),{log:i}),bubbles:!0,composed:!0})),this.error(l),l})}error(e){}showPwd(e){e.pointerId==-1&&(e.target.type=e.target.type=="password"?"text":"password")}changeLang(){return this.flag=="en"?(this.lang="en",this.flag="es"):(this.lang="es",this.flag="en"),this.flag}changeFlag(){this.lang=="en"?this.flag="es":this.flag="en"}}const Ve=b`
  :host {
    display: block;
  }
  :host([hidden]) {
    display: none;
  }
  .login-box {
    background: #ffffff;
    background: rgba(255, 255, 255, 1);
    border-radius: 67px;
    padding: 20px;
    filter: drop-shadow(0 0 8px rgba(120, 217, 255));
    box-shadow: 16px 14px 20px #0000008c;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    display: flex;
    flex-direction: column;
    align-items: center; /* Horizontal centering */
    justify-content: center; /* Vertical centering */
  }
  .login-box.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .appLoginLogoOnTop {
    height: 5.08vmax;
    width: 17vmax;
    padding-bottom: 15px;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: 0.1s;
  }
  .appLoginLogoOnTop.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  elevated-button {
    transition-delay: 0.6s;
    text-align: center;
    background: linear-gradient(179deg, #4668db, #9d70cd);
    border-radius: 35px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 19px;
    color: #ffffff;
    border-color: transparent !important;
  }
  mwc-icon-button#lang {
    color: rgba(36, 192, 235, 1);
    font-family: Montserrat;
    font-weight: bold;
    font-size: 19px;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: 0.8s;
  }
  mwc-icon-button#lang.visible {
    opacity: 1;
    transform: translateY(0);
  }



  @media (max-width: 460px) {
    :host {
      display: block;
      width: 300px;
    }
    .login-box {
      padding: 10px 0;
    }
    .content {
      width: 100%;
    }
    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .modal-content {
      background-color: white;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      max-width: 400px;
    }
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }
  .role-container {
    display: flex;
    flex-direction: column;
  }
  .role-chip {
    margin: 5px;
    padding: 5px;
    font-family: Montserrat;
    font-size: 18px;
    text-align: center;
    color: rgb(36, 192, 235);
    border: 1px solid rgb(36, 192, 235);
    border-radius: 10px;
    transition: all 0.2s;
    cursor: pointer;
    text-transform: capitalize;
    flex: 1;
  }
  .role-chip:hover {
    color: white;
    font-weight: bold;
    background-color: rgb(36, 192, 235);
    transform: scale(1.02);
  }
  #rolesSelector {
    position: absolute;
    top: 30%;
    left: 10%;
    z-index: 1000; /* Asegura que esté sobre otros elementos */
    transform: translate(-10%, -30%);
  }    
  .modal-title {
    margin: 8px 0 12px;
    font-family: Montserrat;
    color: rgb(36, 192, 235);
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }
  .modal-footer {
    display: none;
  }
  /* New Styles for Input Fields */
  mwc-textfield {
    --mdc-theme-primary: #6767ec; /* Primary color */
    --mdc-text-field-idle-line-color: #6767ec;
    --mdc-text-field-outlined-idle-border-color: #6767ec;
    --mdc-text-field-label-ink-color: #6767ec;
    --mdc-text-field-focused-label-color: #6767ec;
    --mdc-text-field-ink-color: #6767ec;
  }    
  md-filled-text-field {
    --md-filled-text-field-container-color: transparent;
    //background: linear-gradient(79deg, #4668db, #9d70cd);
    border-radius: 4px; /* Mantén el radio de borde consistente */
    padding: 4px; /* Añadir algo de padding para que el fondo se vea correctamente */
  }

  /* Ajusta la opacidad del relleno interno para asegurar que el texto sea legible */
  md-filled-text-field::part(container) {
    background: transparent; /* Hace que el fondo del container sea transparente */
  }

  /* Ajusta la opacidad del label para que se vea mejor sobre el gradiente */
  md-filled-text-field::part(label) {
    color: white; /* Cambiar el color del label */
  }
.input mwc-textfield,
  .input elevated-button {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .input mwc-textfield.visible,
  .input elevated-button.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .input mwc-textfield:nth-child(1) {
    transition-delay: 0.2s;
  }
  .input mwc-textfield:nth-child(2) {
    transition-delay: 0.4s;
  }   

  md-filled-text-field {
    --md-filled-text-field-container-color: transparent;
    --md-filled-text-field-focus-label-color: white; /* Color del label cuando está enfocado */
    --md-filled-text-field-ink-color: white; /* Color del texto escrito */
    /* --md-filled-text-field-hover-state-layer-color: transparent; */ /* Elimina el color de fondo al hacer hover */
    --md-filled-text-field-focus-state-layer-color: transparent; /* Elimina el color de fondo al enfocar */
    /* background: linear-gradient(79deg, #4668db, #9d70cd); */
    border-radius: 4px;
    padding: 4px;
  }

  md-filled-text-field::part(container) {
    background: transparent; /* Hace que el fondo del container sea transparente */
  }

  md-filled-text-field::part(label) {
    color: white; /* Cambiar el color del label */
  }

  md-filled-text-field::part(input-field) {
    background: transparent !important; /* Asegúrate de que el fondo del input sea transparente */
    color: white; /* Color del texto escrito */
  }

  md-filled-text-field::part(active-indicator) {
    background: transparent !important; /* Quita el color de fondo al hacer clic */
  }     
  /* Sobrescribir estilos para el autofill */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px rgba(70, 104, 219, 1) inset !important; /* Ajusta el color aquí */
    box-shadow: 0 0 0 30px rgba(70, 104, 219, 1) inset !important; /* Ajusta el color aquí */
    -webkit-text-fill-color: white !important;
    caret-color: white !important;
  }

  /* Sobrescribir estilos específicos para Firefox */
  input:-moz-autofill {
    background-color: rgba(70, 104, 219, 1) !important;
    color: white !important;
  }    

`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class f extends A{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){var o,i;const e=(o=this.count)!=null?o:-1,t=(i=this.max)!=null?i:-1;return e<0||t<=0?"":`${e} / ${t}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&e.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){var s,l,c,v;const e=this.renderLabel(!0),t=this.renderLabel(!1),o=(s=this.renderOutline)==null?void 0:s.call(this,e),i={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return h`
      <div class="field ${N(i)}">
        <div class="container-overflow">
          ${(l=this.renderBackground)==null?void 0:l.call(this)}
          <slot name="container"></slot>
          ${(c=this.renderStateLayer)==null?void 0:c.call(this)} ${(v=this.renderIndicator)==null?void 0:v.call(this)} ${o}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${t} ${o?d:e}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){const{supportingOrErrorText:e,counterText:t}=this;if(!e&&!t)return d;const o=h`<span>${e}</span>`,i=t?h`<span class="counter">${t}</span>`:d,l=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":d;return h`
      <div class="supporting-text" role=${l}>${o}${i}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const e of this.slottedAriaDescribedBy)Se(h`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return d;let t;e?t=this.focused||this.populated||this.isAnimating:t=!this.focused&&!this.populated&&!this.isAnimating;const o={hidden:!t,floating:e,resting:!e},i=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return h`
      <span class="label ${N(o)}" aria-hidden=${!t}
        >${i}</span
      >
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:t}){var s,l,c;if(!this.label)return;e!=null||(e=this.focused),t!=null||(t=this.populated);const o=e||t,i=this.focused||this.populated;o!==i&&(this.isAnimating=!0,(s=this.labelAnimation)==null||s.cancel(),this.labelAnimation=(l=this.floatingLabelEl)==null?void 0:l.animate(this.getLabelKeyframes(),{duration:150,easing:M.STANDARD}),(c=this.labelAnimation)==null||c.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:e,restingLabelEl:t}=this;if(!e||!t)return[];const{x:o,y:i,height:s}=e.getBoundingClientRect(),{x:l,y:c,height:v}=t.getBoundingClientRect(),E=e.scrollWidth,T=t.scrollWidth,C=T/E,I=l-o,F=c-i+Math.round((v-s*C)/2),D=`translateX(${I}px) translateY(${F}px) scale(${C})`,L="translateX(0) translateY(0) scale(1)",O=t.clientWidth,$=T>O?`${O/C}px`:"";return this.focused||this.populated?[{transform:D,width:$},{transform:L,width:$}]:[{transform:L,width:$},{transform:D,width:$}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}r([n({type:Boolean})],f.prototype,"disabled",void 0);r([n({type:Boolean})],f.prototype,"error",void 0);r([n({type:Boolean})],f.prototype,"focused",void 0);r([n()],f.prototype,"label",void 0);r([n({type:Boolean,attribute:"no-asterisk"})],f.prototype,"noAsterisk",void 0);r([n({type:Boolean})],f.prototype,"populated",void 0);r([n({type:Boolean})],f.prototype,"required",void 0);r([n({type:Boolean})],f.prototype,"resizable",void 0);r([n({attribute:"supporting-text"})],f.prototype,"supportingText",void 0);r([n({attribute:"error-text"})],f.prototype,"errorText",void 0);r([n({type:Number})],f.prototype,"count",void 0);r([n({type:Number})],f.prototype,"max",void 0);r([n({type:Boolean,attribute:"has-start"})],f.prototype,"hasStart",void 0);r([n({type:Boolean,attribute:"has-end"})],f.prototype,"hasEnd",void 0);r([j({slot:"aria-describedby"})],f.prototype,"slottedAriaDescribedBy",void 0);r([_()],f.prototype,"isAnimating",void 0);r([_()],f.prototype,"refreshErrorAlert",void 0);r([_()],f.prototype,"disableTransitions",void 0);r([g(".label.floating")],f.prototype,"floatingLabelEl",void 0);r([g(".label.resting")],f.prototype,"restingLabelEl",void 0);r([g(".container")],f.prototype,"containerEl",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Be extends f{renderBackground(){return h` <div class="background"></div> `}renderStateLayer(){return h` <div class="state-layer"></div> `}renderIndicator(){return h`<div class="active-indicator"></div>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const qe=b`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-filled-field-content-space, 16px);--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_with-leading-content-leading-space: var(--md-filled-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-filled-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ue=b`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Q=class extends Be{};Q.styles=[Ue,qe];Q=r([S("md-filled-field")],Q);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Pe=b`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_icon-input-space: var(--md-filled-text-field-icon-input-space, 16px);--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-filled-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-filled-text-field-with-trailing-icon-trailing-space, 12px);--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-space: var(--_icon-input-space);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space);--md-filled-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-filled-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=$e(class extends ze{constructor(a){if(super(a),a.type!==z.PROPERTY&&a.type!==z.ATTRIBUTE&&a.type!==z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ie(a))throw Error("`live` bindings can only contain a single expression")}render(a){return a}update(a,[e]){if(e===B||e===d)return e;const t=a.element,o=a.name;if(a.type===z.PROPERTY){if(e===t[o])return B}else if(a.type===z.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(o))return B}else if(a.type===z.ATTRIBUTE&&t.getAttribute(o)===e+"")return B;return Fe(a),e}});/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const He={fromAttribute(a){return a!=null?a:""},toAttribute(a){return a||null}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ye(a,e){e.bubbles&&(!a.shadowRoot||e.composed)&&e.stopPropagation();const t=Reflect.construct(e.constructor,[e.type,e]),o=a.dispatchEvent(t);return o||e.preventDefault(),o}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ee=Symbol("createValidator"),te=Symbol("getValidityAnchor"),G=Symbol("privateValidator"),k=Symbol("privateSyncValidity"),q=Symbol("privateCustomValidationMessage");function We(a){var e;class t extends a{constructor(){super(...arguments),this[e]=""}get validity(){return this[k](),this[w].validity}get validationMessage(){return this[k](),this[w].validationMessage}get willValidate(){return this[k](),this[w].willValidate}checkValidity(){return this[k](),this[w].checkValidity()}reportValidity(){return this[k](),this[w].reportValidity()}setCustomValidity(i){this[q]=i,this[k]()}requestUpdate(i,s,l){super.requestUpdate(i,s,l),this[k]()}firstUpdated(i){super.firstUpdated(i),this[k]()}[(e=q,k)](){var v;this[G]||(this[G]=this[ee]());const{validity:i,validationMessage:s}=this[G].getValidity(),l=!!this[q],c=this[q]||s;this[w].setValidity(x(m({},i),{customError:l}),c,(v=this[te]())!=null?v:void 0)}[ee](){throw new Error("Implement [createValidator]")}[te](){throw new Error("Implement [getValidityAnchor]")}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Y=Symbol("getFormValue"),me=Symbol("getFormState");function Ye(a){class e extends a{get form(){return this[w].form}get labels(){return this[w].labels}get name(){var o;return(o=this.getAttribute("name"))!=null?o:""}set name(o){this.setAttribute("name",o)}get disabled(){return this.hasAttribute("disabled")}set disabled(o){this.toggleAttribute("disabled",o)}attributeChangedCallback(o,i,s){if(o==="name"||o==="disabled"){const l=o==="disabled"?i!==null:i;this.requestUpdate(o,l);return}super.attributeChangedCallback(o,i,s)}requestUpdate(o,i,s){super.requestUpdate(o,i,s),this[w].setFormValue(this[Y](),this[me]())}[Y](){throw new Error("Implement [getFormValue]")}[me](){return this[Y]()}formDisabledCallback(o){this.disabled=o}}return e.formAssociated=!0,r([n({noAccessor:!0})],e.prototype,"name",null),r([n({type:Boolean,noAccessor:!0})],e.prototype,"disabled",null),e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const oe=Symbol("onReportValidity"),U=Symbol("privateCleanupFormListeners"),P=Symbol("privateDoNotReportInvalid"),H=Symbol("privateIsSelfReportingValidity"),W=Symbol("privateCallOnReportValidity");function je(a){var e,t,o;class i extends a{constructor(...l){super(...l),this[e]=new AbortController,this[t]=!1,this[o]=!1,this.addEventListener("invalid",c=>{this[P]||!c.isTrusted||this.addEventListener("invalid",()=>{this[W](c)},{once:!0})},{capture:!0})}checkValidity(){this[P]=!0;const l=super.checkValidity();return this[P]=!1,l}reportValidity(){this[H]=!0;const l=super.reportValidity();return l&&this[W](null),this[H]=!1,l}[(e=U,t=P,o=H,W)](l){const c=l==null?void 0:l.defaultPrevented;c||(this[oe](l),!(!c&&(l==null?void 0:l.defaultPrevented)))||(this[H]||Ke(this[w].form,this))&&this.focus()}[oe](l){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(l){super.formAssociatedCallback&&super.formAssociatedCallback(l),this[U].abort(),l&&(this[U]=new AbortController,Je(this,l,()=>{this[W](null)},this[U].signal))}}return i}function Je(a,e,t,o){const i=Ge(e);let s=!1,l,c=!1;i.addEventListener("before",()=>{c=!0,l=new AbortController,s=!1,a.addEventListener("invalid",()=>{s=!0},{signal:l.signal})},{signal:o}),i.addEventListener("after",()=>{c=!1,l==null||l.abort(),!s&&t()},{signal:o}),e.addEventListener("submit",()=>{c||t()},{signal:o})}const K=new WeakMap;function Ge(a){if(!K.has(a)){const e=new EventTarget;K.set(a,e);for(const t of["reportValidity","requestSubmit"]){const o=a[t];a[t]=function(){e.dispatchEvent(new Event("before"));const i=Reflect.apply(o,this,arguments);return e.dispatchEvent(new Event("after")),i}}}return K.get(a)}function Ke(a,e){if(!a)return!0;let t;for(const o of a.elements)if(o.matches(":invalid")){t=o;break}return t===e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Xe{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;const{validity:o,validationMessage:i}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:i,validity:{badInput:o.badInput,customError:o.customError,patternMismatch:o.patternMismatch,rangeOverflow:o.rangeOverflow,rangeUnderflow:o.rangeUnderflow,stepMismatch:o.stepMismatch,tooLong:o.tooLong,tooShort:o.tooShort,typeMismatch:o.typeMismatch,valueMissing:o.valueMissing}},this.currentValidity}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ze extends Xe{computeValidity({state:e,renderedControl:t}){var s,l;let o=t;R(e)&&!o?(o=this.inputControl||document.createElement("input"),this.inputControl=o):o||(o=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=o);const i=R(e)?o:null;if(i&&(i.type=e.type),o.value!==e.value&&(o.value=e.value),o.required=e.required,i){const c=e;c.pattern?i.pattern=c.pattern:i.removeAttribute("pattern"),c.min?i.min=c.min:i.removeAttribute("min"),c.max?i.max=c.max:i.removeAttribute("max"),c.step?i.step=c.step:i.removeAttribute("step")}return((s=e.minLength)!=null?s:-1)>-1?o.setAttribute("minlength",String(e.minLength)):o.removeAttribute("minlength"),((l=e.maxLength)!=null?l:-1)>-1?o.setAttribute("maxlength",String(e.maxLength)):o.removeAttribute("maxlength"),{validity:o.validity,validationMessage:o.validationMessage}}equals({state:e},{state:t}){const o=e.type===t.type&&e.value===t.value&&e.required===t.required&&e.minLength===t.minLength&&e.maxLength===t.maxLength;return!R(e)||!R(t)?o:o&&e.pattern===t.pattern&&e.min===t.min&&e.max===t.max&&e.step===t.step}copy({state:e}){return{state:R(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){const{type:t,pattern:o,min:i,max:s,step:l}=e;return x(m({},this.copySharedState(e)),{type:t,pattern:o,min:i,max:s,step:l})}copyTextArea(e){return x(m({},this.copySharedState(e)),{type:e.type})}copySharedState({value:e,required:t,minLength:o,maxLength:i}){return{value:e,required:t,minLength:o,maxLength:i}}}function R(a){return a.type!=="textarea"}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Qe=ce(je(We(Ye(ge(A)))));class p extends Qe{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){const e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){const t=this.getInput();t&&(t.valueAsNumber=e,this.value=t.value)}get valueAsDate(){const e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){const t=this.getInput();t&&(t.valueAsDate=e,this.value=t.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,t,o){this.getInputOrTextarea().setSelectionRange(e,t,o)}stepDown(e){const t=this.getInput();t&&(t.stepDown(e),this.value=t.value)}stepUp(e){const t=this.getInput();t&&(t.stepUp(e),this.value=t.value)}reset(){var e;this.dirty=!1,this.value=(e=this.getAttribute("value"))!=null?e:"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,t,o){e==="value"&&this.dirty||super.attributeChangedCallback(e,t,o)}render(){const e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea","no-spinner":this.noSpinner};return h`
      <span class="text-field ${N(e)}">
        ${this.renderField()}
      </span>
    `}updated(e){const t=this.getInputOrTextarea().value;this.value!==t&&(this.value=t)}renderField(){return Ne`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type==="textarea"}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
      <slot name="container" slot="container"></slot>
    </${this.fieldTag}>`}renderLeadingIcon(){return h`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return h`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){var E,T;const e={direction:this.textDirection},t=this.ariaLabel||this.label||d,o=this.autocomplete,i=((E=this.maxLength)!=null?E:-1)>-1,s=((T=this.minLength)!=null?T:-1)>-1;if(this.type==="textarea")return h`
        <textarea
          class="input"
          style=${ue(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${o||d}
          name=${this.name||d}
          ?disabled=${this.disabled}
          maxlength=${i?this.maxLength:d}
          minlength=${s?this.minLength:d}
          placeholder=${this.placeholder||d}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${ve(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const l=this.renderPrefix(),c=this.renderSuffix(),v=this.inputMode;return h`
      <div class="input-wrapper">
        ${l}
        <input
          class="input"
          style=${ue(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${o||d}
          name=${this.name||d}
          ?disabled=${this.disabled}
          inputmode=${v||d}
          max=${this.max||d}
          maxlength=${i?this.maxLength:d}
          min=${this.min||d}
          minlength=${s?this.minLength:d}
          pattern=${this.pattern||d}
          placeholder=${this.placeholder||d}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||d}
          type=${this.type}
          .value=${ve(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${c}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,t){return e?h`<span class="${N({suffix:t,prefix:!t})}">${e}</span>`:d}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){var e,t;this.focused=(t=(e=this.inputOrTextarea)==null?void 0:e.matches(":focus"))!=null?t:!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){ye(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[Y](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[ee](){return new Ze(()=>({state:this,renderedControl:this.inputOrTextarea}))}[te](){return this.inputOrTextarea}[oe](e){var o;e==null||e.preventDefault();const t=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,t===this.getErrorText()&&((o=this.field)==null||o.reannounceError())}}p.shadowRootOptions=x(m({},A.shadowRootOptions),{delegatesFocus:!0});r([n({type:Boolean,reflect:!0})],p.prototype,"error",void 0);r([n({attribute:"error-text"})],p.prototype,"errorText",void 0);r([n()],p.prototype,"label",void 0);r([n({type:Boolean,attribute:"no-asterisk"})],p.prototype,"noAsterisk",void 0);r([n({type:Boolean,reflect:!0})],p.prototype,"required",void 0);r([n()],p.prototype,"value",void 0);r([n({attribute:"prefix-text"})],p.prototype,"prefixText",void 0);r([n({attribute:"suffix-text"})],p.prototype,"suffixText",void 0);r([n({type:Boolean,attribute:"has-leading-icon"})],p.prototype,"hasLeadingIcon",void 0);r([n({type:Boolean,attribute:"has-trailing-icon"})],p.prototype,"hasTrailingIcon",void 0);r([n({attribute:"supporting-text"})],p.prototype,"supportingText",void 0);r([n({attribute:"text-direction"})],p.prototype,"textDirection",void 0);r([n({type:Number})],p.prototype,"rows",void 0);r([n({type:Number})],p.prototype,"cols",void 0);r([n({reflect:!0})],p.prototype,"inputMode",void 0);r([n()],p.prototype,"max",void 0);r([n({type:Number})],p.prototype,"maxLength",void 0);r([n()],p.prototype,"min",void 0);r([n({type:Number})],p.prototype,"minLength",void 0);r([n({type:Boolean,attribute:"no-spinner"})],p.prototype,"noSpinner",void 0);r([n()],p.prototype,"pattern",void 0);r([n({reflect:!0,converter:He})],p.prototype,"placeholder",void 0);r([n({type:Boolean,reflect:!0})],p.prototype,"readOnly",void 0);r([n({type:Boolean,reflect:!0})],p.prototype,"multiple",void 0);r([n()],p.prototype,"step",void 0);r([n({reflect:!0})],p.prototype,"type",void 0);r([n({reflect:!0})],p.prototype,"autocomplete",void 0);r([_()],p.prototype,"dirty",void 0);r([_()],p.prototype,"focused",void 0);r([_()],p.prototype,"nativeError",void 0);r([_()],p.prototype,"nativeErrorText",void 0);r([g(".input")],p.prototype,"inputOrTextarea",void 0);r([g(".field")],p.prototype,"field",void 0);r([j({slot:"leading-icon"})],p.prototype,"leadingIcons",void 0);r([j({slot:"trailing-icon"})],p.prototype,"trailingIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class et extends p{constructor(){super(...arguments),this.fieldTag=be`md-filled-field`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const tt=b`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let re=class extends et{constructor(){super(...arguments),this.fieldTag=be`md-filled-field`}};re.styles=[tt,Pe];re=r([S("md-filled-text-field")],re);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class J extends A{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}r([n({type:Boolean,reflect:!0})],J.prototype,"inset",void 0);r([n({type:Boolean,reflect:!0,attribute:"inset-start"})],J.prototype,"insetStart",void 0);r([n({type:Boolean,reflect:!0,attribute:"inset-end"})],J.prototype,"insetEnd",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ot=b`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ie=class extends J{};ie.styles=[ot];ie=r([S("md-divider")],ie);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const rt={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:M.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:M.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},it={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:M.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:M.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const at=ce(A);class u extends at{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>rt,this.getCloseAnimation=()=>it,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){var o;this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const e=this.dialog;if(e.open||!this.isOpening){this.isOpening=!1;return}if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1,this.isOpening=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(o=this.querySelector("[autofocus]"))==null||o.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected){this.open=!1;return}await this.updateComplete;const t=this.dialog;if(!t.open||this.isOpening){this.open=!1;return}const o=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=o;return}await this.animateDialog(this.getCloseAnimation()),t.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),t={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},o=this.open&&!this.noFocusTrap,i=h`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:s}=this;return h`
      <div class="scrim"></div>
      <dialog
        class=${N(t)}
        aria-label=${s||d}
        aria-labelledby=${this.hasHeadline?"headline":d}
        role=${this.type==="alert"?"alertdialog":d}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||d}>
        ${o?i:d}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||d}>
              <slot
                name="headline"
                @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions" @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
        ${o?i:d}
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const t of e)this.handleAnchorIntersection(t)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){var i;const t=e.target,{submitter:o}=e;t.method!=="dialog"||!o||this.close((i=o.getAttribute("value"))!=null?i:this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const t=!ye(this,e);e.preventDefault(),!t&&this.close()}handleClose(){var e;this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,(e=this.dialog)==null||e.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(e){e.key==="Escape"&&(this.escapePressedWithoutCancel=!0,setTimeout(()=>{this.escapePressedWithoutCancel=!1}))}async animateDialog(e){var O;if((O=this.cancelAnimations)==null||O.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:t,scrim:o,container:i,headline:s,content:l,actions:c}=this;if(!t||!o||!i||!s||!l||!c)return;const{container:v,dialog:E,scrim:T,headline:C,content:I,actions:F}=e,D=[[t,E!=null?E:[]],[o,T!=null?T:[]],[i,v!=null?v:[]],[s,C!=null?C:[]],[l,I!=null?I:[]],[c,F!=null?F:[]]],L=[];for(const[V,$]of D)for(const we of $){const pe=V.animate(...we);this.cancelAnimations.signal.addEventListener("abort",()=>{pe.cancel()}),L.push(pe)}await Promise.all(L.map(V=>V.finished.catch(()=>{})))}handleHeadlineChange(e){const t=e.target;this.hasHeadline=t.assignedElements().length>0}handleActionsChange(e){const t=e.target;this.hasActions=t.assignedElements().length>0}handleIconChange(e){const t=e.target;this.hasIcon=t.assignedElements().length>0}handleAnchorIntersection(e){const{target:t,isIntersecting:o}=e;t===this.topAnchor&&(this.isAtScrollTop=o),t===this.bottomAnchor&&(this.isAtScrollBottom=o)}getIsConnectedPromise(){return new Promise(e=>{this.isConnectedPromiseResolve=e})}handleFocusTrapFocus(e){var C;const[t,o]=this.getFirstAndLastFocusableChildren();if(!t||!o){(C=this.dialog)==null||C.focus();return}const i=e.target===this.firstFocusTrap,s=!i,l=e.relatedTarget===t,c=e.relatedTarget===o,v=!l&&!c;if(s&&c||i&&v){t.focus();return}if(i&&l||s&&v){o.focus();return}}getFirstAndLastFocusableChildren(){if(!this.treewalker)return[null,null];let e=null,t=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const o=this.treewalker.currentNode;lt(o)&&(e||(e=o),t=o)}return[e,t]}}r([n({type:Boolean})],u.prototype,"open",null);r([n({type:Boolean})],u.prototype,"quick",void 0);r([n({attribute:!1})],u.prototype,"returnValue",void 0);r([n()],u.prototype,"type",void 0);r([n({type:Boolean,attribute:"no-focus-trap"})],u.prototype,"noFocusTrap",void 0);r([g("dialog")],u.prototype,"dialog",void 0);r([g(".scrim")],u.prototype,"scrim",void 0);r([g(".container")],u.prototype,"container",void 0);r([g(".headline")],u.prototype,"headline",void 0);r([g(".content")],u.prototype,"content",void 0);r([g(".actions")],u.prototype,"actions",void 0);r([_()],u.prototype,"isAtScrollTop",void 0);r([_()],u.prototype,"isAtScrollBottom",void 0);r([g(".scroller")],u.prototype,"scroller",void 0);r([g(".top.anchor")],u.prototype,"topAnchor",void 0);r([g(".bottom.anchor")],u.prototype,"bottomAnchor",void 0);r([g(".focus-trap")],u.prototype,"firstFocusTrap",void 0);r([_()],u.prototype,"hasHeadline",void 0);r([_()],u.prototype,"hasActions",void 0);r([_()],u.prototype,"hasIcon",void 0);function lt(a){var s,l;const e=":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])",t=":not(:disabled,[disabled])";return a.matches(e+t+':not([tabindex^="-"])')?!0:!a.localName.includes("-")||!a.matches(t)?!1:(l=(s=a.shadowRoot)==null?void 0:s.delegatesFocus)!=null?l:!1}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const nt=b`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ae=class extends u{};ae.styles=[nt];ae=r([S("md-dialog")],ae);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class st extends A{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return h`<span class="shadow"></span>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const dt=b`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let le=class extends st{};le.styles=[dt];le=r([S("md-elevation")],le);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ct(a){const e=new MouseEvent("click",{bubbles:!0});return a.dispatchEvent(e),e}function pt(a){return a.currentTarget!==a.target||a.composedPath()[0]!==a.target||a.target.disabled?!1:!ht(a)}function ht(a){const e=ne;return e&&(a.preventDefault(),a.stopImmediatePropagation()),ft(),e}let ne=!1;async function ft(){ne=!0,await null,ne=!1}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ut=ce(ge(A));class y extends ut{get name(){var e;return(e=this.getAttribute("name"))!=null?e:""}set name(e){this.setAttribute("name",e)}get form(){return this[w].form}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.addEventListener("click",this.handleClick.bind(this))}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){var i;const e=!this.href&&(this.disabled||this.softDisabled),t=this.href?this.renderLink():this.renderButton(),o=this.href?"link":"button";return h`
      ${(i=this.renderElevationOrOutline)==null?void 0:i.call(this)}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${o}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${o}
        ?disabled="${e}"></md-ripple>
      ${t}
    `}renderButton(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:o}=this;return h`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled||d}
      aria-label="${e||d}"
      aria-haspopup="${t||d}"
      aria-expanded="${o||d}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:o}=this;return h`<a
      id="link"
      class="button"
      aria-label="${e||d}"
      aria-haspopup="${t||d}"
      aria-expanded="${o||d}"
      href=${this.href}
      target=${this.target||d}
      >${this.renderContent()}
    </a>`}renderContent(){const e=h`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return h`
      <span class="touch"></span>
      ${this.trailingIcon?d:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:d}
    `}handleClick(e){if(!this.href&&this.softDisabled){e.stopImmediatePropagation(),e.preventDefault();return}!pt(e)||!this.buttonElement||(this.focus(),ct(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}Me(y);y.formAssociated=!0;y.shadowRootOptions={mode:"open",delegatesFocus:!0};r([n({type:Boolean,reflect:!0})],y.prototype,"disabled",void 0);r([n({type:Boolean,attribute:"soft-disabled",reflect:!0})],y.prototype,"softDisabled",void 0);r([n()],y.prototype,"href",void 0);r([n()],y.prototype,"target",void 0);r([n({type:Boolean,attribute:"trailing-icon",reflect:!0})],y.prototype,"trailingIcon",void 0);r([n({type:Boolean,attribute:"has-icon",reflect:!0})],y.prototype,"hasIcon",void 0);r([n()],y.prototype,"type",void 0);r([n({reflect:!0})],y.prototype,"value",void 0);r([g(".button")],y.prototype,"buttonElement",void 0);r([j({slot:"icon",flatten:!0})],y.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class vt extends y{renderElevationOrOutline(){return h`<md-elevation part="elevation"></md-elevation>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const mt=b`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const xe=b`md-elevation{transition-duration:280ms}:host(:is([disabled],[soft-disabled])) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host(:is([disabled],[soft-disabled])) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const _e=b`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let se=class extends vt{};se.styles=[_e,xe,mt];se=r([S("md-filled-button")],se);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class gt extends y{renderElevationOrOutline(){return h`<md-elevation part="elevation"></md-elevation>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const bt=b`:host{--_container-color: var(--md-elevated-button-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_container-elevation: var(--md-elevated-button-container-elevation, 1);--_container-height: var(--md-elevated-button-container-height, 40px);--_container-shadow-color: var(--md-elevated-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-elevated-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-elevated-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-elevated-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-elevated-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-elevated-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-elevated-button-focus-container-elevation, 1);--_focus-label-text-color: var(--md-elevated-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-container-elevation: var(--md-elevated-button-hover-container-elevation, 2);--_hover-label-text-color: var(--md-elevated-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-elevated-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-elevated-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-elevated-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-elevated-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-elevated-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-elevated-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-elevated-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-elevated-button-pressed-container-elevation, 1);--_pressed-label-text-color: var(--md-elevated-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-elevated-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-elevated-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-elevated-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-elevated-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-elevated-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-elevated-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-elevated-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-elevated-button-icon-size, 18px);--_pressed-icon-color: var(--md-elevated-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-elevated-button-container-shape-start-start, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-elevated-button-container-shape-start-end, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-elevated-button-container-shape-end-end, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-elevated-button-container-shape-end-start, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-elevated-button-leading-space, 24px);--_trailing-space: var(--md-elevated-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-elevated-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-elevated-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-elevated-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-elevated-button-with-trailing-icon-trailing-space, 16px)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let de=class extends gt{};de.styles=[_e,xe,bt];de=r([S("md-elevated-button")],de);const X={title:{label_en:"Trace it !!!",label_es:"¡¡ TRÁZALO !!"},password:{label_en:"Password",label_es:"Contraseña"},user:{label_en:"User",label_es:"Usuario"},buttonAccess:{label_en:"Access",label_es:"Entrar"},role:{label_en:"Role",label_es:"Rol"}},Z={connectedSuccess_singleRole:{message_en:"Valid user, Starting session ... please wait",message_es:"Usuario válido, iniciando sesión ... por favor espere"},connectedSuccess:{message_en:"Valid user, please proceed selecting the role",message_es:"Usuario válido, por favor escoja rol"},connectedFails:{message_en:"I guess there is no user with those credentials",message_es:"Me temo que el usuario o la contraseña no son correctos."}},yt=b`
  md-filled-icon-button {
    --md-filled-icon-button-container-color: transparent;
    --md-filled-icon-button-icon-color: #148cfa;
    --md-filled-icon-button-focus-icon-color: #148cfa;
    --md-filled-icon-button-outline-color: transparent;
    --md-filled-icon-button-hover-outline-color: transparent;
    transition: background-color 0.3s ease, transform 0.1s ease; 
  }

  md-filled-icon-button::part(container) {
    background-color: transparent; /* Fondo transparente en estado normal */
  }

  md-filled-icon-button:hover::part(container) {
    background-color: rgba(20, 140, 250, 0.1); /* Fondo suave al hacer hover */
  }

  md-filled-icon-button:active::part(container) {
    background-color: rgba(20, 140, 250, 0.2); /* Fondo más oscuro al hacer clic */
    transform: scale(0.95); /* Efecto de pulsar */
  }

  md-filled-icon-button:hover md-icon,
  md-filled-icon-button:active md-icon {
    color: #c314fa; /* Mantener el color del icono constante */
  }
`;class xt extends De{static get styles(){return[Ve,b`
      ${yt}
        #rolesSelector {
          position: absolute;
          top: 150px;
          left: 50px;
          z-index: 1000; 
          width: 250px; 
          transform: translate(0, -50%);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `]}static get properties(){return{hidden:{type:Boolean,reflect:!0},auth:{type:Boolean},userRoles:{type:Array},role:{type:String}}}constructor(){super(),this.hidden=!0,this.auth=!1,this.userRoles=[],this.role=""}firstUpdated(){super.firstUpdated(),this.updateComplete.then(()=>{setTimeout(()=>{this.showElements(),this.user.focus()},200)})}updated(e){e.has("config")&&JSON.stringify(this.config)!=="{}"&&(this.hidden=!1),super.updated(e)}showElements(){this.shadowRoot.querySelectorAll(".login-box, .appLoginLogoOnTop, .input md-filled-text-field, .input elevated-button, md-outlined-icon-button#lang").forEach(t=>t.classList.add("visible"))}render(){return h`
      <div class="login-box layout vertical flex center">
        <img class="appLoginLogoOnTop" src="/images/trazit-removebg.png" />
        <div class="input layout vertical flex" style="gap: 10px; display: flex; flex-direction: column;">
          <md-filled-text-field
            id="user"
            label="${X.user["label_"+this.lang]}"
            @keypress=${e=>e.keyCode==13&&this.password.focus()}
          ></md-filled-text-field>
          <md-filled-text-field id="password" label="${X.password["label_"+this.lang]}"
            type="password" trailingIcon="visibility" @keypress=${this.checkLogin}
            @click=${this.showPwd} ></md-filled-text-field>
          <md-elevated-button id="access" style="background-color:rgb(157 112 205 / 25%);" size="xl" @click=${this.login}
            >${X.buttonAccess["label_"+this.lang]}</md-elevated-button>
        </div>
        <div>
          <md-outlined-icon-button
            id="lang" style="padding-top:10px;"
            @click=${this.changeLang}
            title="Language"
            >${this.lang}</md-outlined-icon-button
          >
          <md-dialog id="rolesSelector" @closed=${this.setRoleFromChip}>
            <div slot="headline">
            
              ${this.lang==="en"?h`<p class="modal-title">Select one role for this session</p>`:h`<p class="modal-title">Selecciona un perfil para esta sesión</p>`}
            </div>
              <form slot="content" id="form-id" method="dialog">              
                <div class="role-container">
                  ${this.userRoles&&this.userRoles.length>0?this.userRoles.map(e=>h`
                        <div
                          class="role-chip"
                          @click=${()=>this.setRoleFromChip(e)}
                          value="${e}"
                        >${e.replace(/_/g," ")}
                        </div>
                      `):h`<p>No roles available</p>`}
                </div>
              </form>
            </div>
          </md-dialog>
        </div>
      </div>
    `}get user(){return this.shadowRoot.querySelector("md-filled-text-field#user")}get password(){return this.shadowRoot.querySelector("md-filled-text-field#password")}checkLogin(e){e.which==13&&this.login()}async login(){try{if(this.config.fullscreen){let e=document.documentElement,t=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;if(t)t.call(e);else if(typeof window.ActiveXObject!="undefined"){let o=new ActiveXObject("WScript.Shell");o!==null&&o.SendKeys("{F11}")}}await this.reqPartialToken(),await this.reqUserRoles(),console.log("User Roles:",this.userRoles),this.userRoles.length==1?(this.role=this.userRoles[0],await this.reqFinalToken(),this.authorized()):this.shadowRoot.querySelector("#rolesSelector").show()}catch(e){this.clearSessionStorage()}}shouldUpdate(e){return e.has("userRoles")&&this.userRoles.length<=1?!1:super.shouldUpdate(e)}async setRoleFromChip(e){e?(this.role=e,this.shadowRoot.querySelector("#rolesSelector").close(),await this.updateComplete,await this.reqFinalToken(),this.authorized()):alert("No role selected")}authorized(){super.authorized(),this.auth=!0,this.hidden=!0,this.dispatchEvent(new CustomEvent("authorized",{bubbles:!0,composed:!0,detail:{auth:!0}}))}clearSessionStorage(){window.sessionStorage.clear()}reqPartialToken(){let e=this.config.backendUrl+this.config.appAuthenticateApiUrl+"?"+new URLSearchParams({dbUserName:this.user.value,dbUserPassword:this.password.value,dbName:this.config.dbName,actionName:"authenticate"});const t=[this.user.value,this.password.value];return this.fetchApiPost(e,!1,t).then(o=>{if(o&&!o.is_error)sessionStorage.setItem("partialToken",JSON.stringify(o));else throw document.fullscreenElement&&document.exitFullscreen(),this.dispatchEvent(new CustomEvent("error",{detail:x(m({},Z.connectedFails),{urlParams:e,log:!1,is_error:!0}),bubbles:!0,composed:!0})),{}})}reqUserRoles(){let e=JSON.parse(sessionStorage.getItem("partialToken")),t=this.config.backendUrl+this.config.appAuthenticateApiUrl+"?"+new URLSearchParams({myToken:e.myToken,dbName:this.config.dbName,actionName:"getuserrole"});return this.fetchApi(t,!1).then(async o=>{if(o&&!o.is_error)o.length>1&&this.dispatchEvent(new CustomEvent("success",{detail:x(m({},Z.connectedSuccess),{urlParams:t,log:!1}),bubbles:!0,composed:!0})),this.userRoles=o,await this.requestUpdate();else throw document.fullscreenElement&&document.exitFullscreen(),{}})}reqFinalToken(){let e=JSON.parse(sessionStorage.getItem("partialToken")),t=this.config.backendUrl+this.config.appAuthenticateApiUrl+"?"+new URLSearchParams({myToken:e.myToken,userRole:this.role,dbName:this.config.dbName,actionName:"finaltoken",sizeValue:window.screen.width,includeProcModelInfo:!this.config.local});return this.fetchApi(t,!1).then(o=>{if(o&&!o.is_error){o=m(m({},o),Z.connectedSuccess_singleRole),this.dispatchEvent(new CustomEvent("success",{detail:x(m({},o),{urlParams:t,log:!1,waiting:!0}),bubbles:!0,composed:!0}));let i=this.role==="proc_management";sessionStorage.setItem("userSession",JSON.stringify(x(m({},o),{userName:this.user.value,userRole:this.role,dbName:this.config.dbName,backendUrl:this.config.backendUrl,isProcManagement:i})))}else throw document.fullscreenElement&&document.exitFullscreen(),{}})}logout(){console.log("PlatformLogin::logout"),this.clearSessionStorage(),window.location.href="/"}}window.customElements.define("platform-login",xt);class _t extends Le(Re)(Oe(A)){static get styles(){return[b`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-image: url(/images/abstract.jpg);
        background-color: white;
        background-size: cover;
        background-repeat: no-repeat;
      }
      platform-login {
        opacity: 0.7;
      }
      @media (max-width: 460px) {
        :host {
          background-size: 110%;
          background-position: center;
        }
      }
    `]}firstUpdated(){this.setupConfig()}async setupConfig(){const e=this.pLogin;if(e)try{const o=await(await fetch("/config.json")).json();e.config=o}catch(t){console.error("Error fetching config:",t)}}render(){return h`
      <platform-login @authorized=${this.handleAuthorization}></platform-login>
      <div ?hidden="${!this.auth}">
        <h1>Welcome, you are authorized</h1>
      </div>
    `}handleAuthorization(e){this.auth=e.target.auth,console.log("authorized"),this.dispatchEvent(new CustomEvent("authorized",{bubbles:!0,composed:!0}))}handleAuthorization20240828(e){this.auth=e.target.auth}renderOld(){return this.pLogin===null&&console.log("pLogin not loaded"),console.log("tr-home"),h`
    s
      <platform-login .config=${this.config}></platform-login>
    `}get pLogin(){return this.shadowRoot.querySelector("platform-login")}static get properties(){return{config:{type:Object}}}constructor(){super(),this.config={}}stateChanged(e){JSON.stringify(this.config)!=JSON.stringify(e.app.config)&&(this.config=e.app.config),this.pLogin&&this.pLogin.lang!=e.app.lang&&(this.pLogin.lang=e.app.lang)}}customElements.define("tr-home",_t);export{_t as TrHome};
