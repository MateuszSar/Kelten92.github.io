(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fe43be5"],{"2cfd":function(t,n,e){"use strict";var a=e("e07e"),o=e.n(a);o.a},"73cf":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("form",{staticClass:"register-form"},[e("universal-input",{attrs:{type:"text",labelName:"Name"},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}}),e("universal-input",{attrs:{type:"email",labelName:"Email"},model:{value:t.email,callback:function(n){t.email=n},expression:"email"}}),e("universal-input",{attrs:{type:"password",labelName:"Password"},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}}),e("action-button",{attrs:{name:"Register",action:t.register}})],1)])},o=[],c=(e("7f7f"),e("b400")),r=e("a7c4"),i=(e("bc3a"),{name:"login-form",components:{UniversalInput:c["a"],ActionButton:r["a"]},data:function(){return{name:"ggg",password:"gggg",email:"",errors:""}},methods:{register:function(){var t=this,n=this.name,e=this.password,a=this.email;this.$store.dispatch("register",{name:n,email:a,password:e}).then(function(t){return alert(t.data.message+"please login")}).catch(function(t){return console.log(t)}).then(function(){return t.$router.push("/")})}}}),s=i,l=(e("2cfd"),e("2877")),u=Object(l["a"])(s,a,o,!1,null,null,null);n["default"]=u.exports},"7f7f":function(t,n,e){var a=e("86cc").f,o=Function.prototype,c=/^\s*function ([^ (]*)/,r="name";r in o||e("9e1e")&&a(o,r,{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(t){return""}}})},"855c":function(t,n,e){},a7c4:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"action-button",on:{click:function(n){return n.preventDefault(),t.action(n)}}},[t._v(t._s(t.name))])},o=[],c={name:"action-button",props:{action:Function,name:String}},r=c,i=(e("bf1d"),e("2877")),s=Object(i["a"])(r,a,o,!1,null,null,null);n["a"]=s.exports},b400:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"universal-input"},[e("label",{attrs:{for:"labelName"}},[t._v(t._s(t.labelName))]),"checkbox"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.content)?t._i(t.content,null)>-1:t.content},on:{input:t.handleInput,change:function(n){var e=t.content,a=n.target,o=!!a.checked;if(Array.isArray(e)){var c=null,r=t._i(e,c);a.checked?r<0&&(t.content=e.concat([c])):r>-1&&(t.content=e.slice(0,r).concat(e.slice(r+1)))}else t.content=o}}}):"radio"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"radio"},domProps:{checked:t._q(t.content,null)},on:{input:t.handleInput,change:function(n){t.content=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:t.type},domProps:{value:t.content},on:{input:[function(n){n.target.composing||(t.content=n.target.value)},t.handleInput]}})])},o=[],c={name:"universal-input",props:{labelName:String,type:String},data:function(){return{content:this.value}},methods:{handleInput:function(t){this.$emit("input",this.content)}}},r=c,i=(e("b94d"),e("2877")),s=Object(i["a"])(r,a,o,!1,null,null,null);n["a"]=s.exports},b94d:function(t,n,e){"use strict";var a=e("fde7"),o=e.n(a);o.a},bf1d:function(t,n,e){"use strict";var a=e("855c"),o=e.n(a);o.a},e07e:function(t,n,e){},fde7:function(t,n,e){}}]);
//# sourceMappingURL=chunk-2fe43be5.a3b696e8.js.map