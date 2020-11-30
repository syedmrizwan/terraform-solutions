(this.webpackJsonpaviatrix=this.webpackJsonpaviatrix||[]).push([[0],{159:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a(0),n=a.n(c),i=a(10),r=a.n(i),l=a(76),o=a(14),d=a(9);function u(e){var t=e.text,a=e.customClasses,c=void 0===a?"":a;return Object(s.jsx)("label",{className:"heading ".concat(c),children:t})}function j(e){var t=e.text,a=e.customClasses,c=void 0===a?"":a;return Object(s.jsx)("p",{className:"paragraph ".concat(c),children:t})}var b=a(23),m=a(187);function h(e){return Object(s.jsx)(m.a,Object(b.a)(Object(b.a)({},e),{},{className:"custom-button-style ".concat(e.customClasses),children:e.children}))}var p=a(194);function v(e){return Object(s.jsx)(p.a,Object(b.a)(Object(b.a)({},e),{},{className:"custom-input-style ".concat(e.customClasses)}))}a(196);var O=a(123),x=a(91),g=a(118),A=a.n(g),y=a(21),Z="/configuration",I={credentials_form:{initialValues:{access_key_id:"",secret_access_key:""},validations:y.a({access_key_id:y.b().required("Required"),secret_access_key:y.b().required("Required")})},launch_controller:{initialValues:{email_address:"",recovery_email_address:"",password:"",re_enter_password:""},validations:y.a({email_address:y.b().required("Required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Must be a valid email"),recovery_email_address:y.b().required("Required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Must be a valid email"),password:y.b().required("Required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),re_enter_password:y.b().required("Required")})},import_key_pair:{initialValues:{key_pair_name:""},validations:y.a({key_pair_name:y.b().required("Required")})},launch_transit_azure:{initialValues:{subscription_id:"",directory_id:"",application_id:"",application_key:""},validations:y.a({subscription_id:y.b().required("Required"),directory_id:y.b().required("Required"),application_id:y.b().required("Required"),application_key:y.b().required("Required")})}},C={get_status:{method:"GET",url:"/get-statestatus"},delete_config:{method:"DELETE",url:"/delete-resources"},add_credentials:{method:"POST",url:"/aws-config"},launch_controller:{method:"POST",url:"/launch-controller"},launch_transit_aws:{method:"POST",url:"/launch-transit-aws"},launch_ec2:{method:"POST",url:"/launch-ec2-spokevpc"},launch_spokevpc:{method:"POST",url:"/set-key-spokevpc"},launch_transit_azure:{method:"POST",url:"/launch-transit-azure"},skip_transit_azure:{method:"POST",url:"/skip-transit-azure"},built_transit:{method:"POST",url:"/peering"}},N=function(e){return Object.entries(e).map((function(e){var t=Object(x.a)(e,2),a=t[0],s=t[1];return Boolean(s)?a:void 0})).filter((function(e){return Boolean(e)})).join(" ")};function f(e){var t=e.urlName,a=e.data,s=e.headers,c=e.parameter,n=void 0===c?"":c,i=C[t],r=i.url,l=i.headers,o=i.data,d=i.method,u="/api/v1.0".concat(r);return A.a.request({method:d,url:u+n,headers:s||l,data:a||o})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Request successful";return{type:"SET_SUCCESS_RESPONSE_STATUS",payload:{responseMessage:e,responseStatus:"success"}}}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Request failed";return{type:"SET_FAILURE_RESPONSE_STATUS",payload:{responseMessage:e,responseStatus:"failure"}}}function k(){return function(e){f({urlName:"delete_config"}).then((function(t){var a=t.data.message;e(S(a)),e(w())})).catch((function(){e(_())}))}}function w(){return function(e){f({urlName:"get_status"}).then((function(t){var a,s,c,n=t.data.data;if(Object.keys(n).length){var i="success"===n.status&&n.state<8?n.state+1:n.state;e((a=0===i?1:i,s="in-progress"===n.status,c=n.controllerIP,{type:"SET_STEP_AND_ACTION_STATUS",payload:{isInProgress:s,step:a,controllerIP:c}})),"failed"===n.status&&e(_("Previous action is not completed"))}})).catch((function(t){var a,s,c,n;"No record found"!==(null===t||void 0===t||null===(a=t.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.message)&&e(_(null===t||void 0===t||null===(c=t.response)||void 0===c||null===(n=c.data)||void 0===n?void 0:n.message))}))}}function T(e){return function(t){f({urlName:"launch_transit_aws",data:e}).then((function(e){var a=e.data;t(S(null===a||void 0===a?void 0:a.message)),t(w())})).catch((function(){t(_())}))}}function Y(e){return function(t){f({urlName:"launch_ec2",data:e}).then((function(e){var a=e.data;t(S(null===a||void 0===a?void 0:a.message)),t(w())})).catch((function(){t(_())}))}}var G=Object(s.jsx)("svg",{height:"13px",viewBox:"0 -46 417.81333 417",width:"17px",fill:"#fff",children:Object(s.jsx)("path",{d:"m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0"})}),M=Object(s.jsx)("svg",{width:"14.155",height:"13.776",viewBox:"0 0 14.155 13.776",children:Object(s.jsx)("path",{fill:"#e24307",d:"M12.083 1.887A7.054 7.054 0 0 0 9.356.19v2.135a5.052 5.052 0 0 1 1.334.95 5.112 5.112 0 1 1-7.229 0c.005-.006.021-.016.028-.025l1.183 1.179L4.665.685.923.68 2.1 1.856a.118.118 0 0 1-.027.031 7.077 7.077 0 1 0 10.011 0z",transform:"translate(0 -.19)"})});function W(){var e=Object(d.b)(),t=Object(c.useCallback)((function(){e(k())}),[e]);return Object(s.jsxs)("header",{className:"app-header",children:[Object(s.jsx)("img",{className:"app-logo__logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPMAAAA2CAYAAAAS0684AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKZGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMTEtMTJUMTU6MDQ6MjUrMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTExLTEyVDE1OjA1OjE0KzA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTExLTEyVDE1OjA1OjE0KzA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmNhNWY2ZjEwLWY4NWMtNmE0NC1iZjhkLWY1ZjJiMWVhNmJiYyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZlMDU2YzA4LTUzOTItY2E0Mi04ODZkLTU5YjJmYzk5ZjU0NyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjYxY2IxNjJlLWNjMzUtYmY0My1hZTJkLTE2YzY5N2ZjYzE3ZCIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjQwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU0Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MWNiMTYyZS1jYzM1LWJmNDMtYWUyZC0xNmM2OTdmY2MxN2QiIHN0RXZ0OndoZW49IjIwMjAtMTEtMTJUMTU6MDQ6MjUrMDU6MDAiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9wbmcgdG8gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWNlN2FhMjctZDRiNC1lMTQzLWI1YmUtOWRhZTBmZGU5NGYwIiBzdEV2dDp3aGVuPSIyMDIwLTExLTEyVDE1OjA0OjI4KzA1OjAwIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiYjJkYWFhNS01ZTZmLTYxNDctOTg5NC1jMmE4NTk0NWY0MDMiIHN0RXZ0OndoZW49IjIwMjAtMTEtMTJUMTU6MDU6MTQrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Y2E1ZjZmMTAtZjg1Yy02YTQ0LWJmOGQtZjVmMmIxZWE2YmJjIiBzdEV2dDp3aGVuPSIyMDIwLTExLTEyVDE1OjA1OjE0KzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiMmRhYWE1LTVlNmYtNjE0Ny05ODk0LWMyYTg1OTQ1ZjQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE2MDgxZGNkLWMxZTMtNGQ0NC05MTBmLWE3N2MyZGYyMGQ5MCIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjYxY2IxNjJlLWNjMzUtYmY0My1hZTJkLTE2YzY5N2ZjYzE3ZCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0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",alt:"Aviatrix logo"}),Object(s.jsx)("div",{className:"app-logo__divider"}),Object(s.jsx)(u,{text:"KICKSTART",customClasses:"--title"}),Object(s.jsx)(h,{variant:"contained",customClasses:"--primary-inverse",onClick:t,startIcon:M,children:"Reset"})]})}function E(e){var t=e.value,a=e.disabled,c=e.isViewedStep,n=N({"outer-circle":!0,"--disabled":a,"--transparent":c});return Object(s.jsx)("div",{className:n,children:Object(s.jsx)("div",{className:"inner-circle",children:c?G:Object(s.jsx)(u,{text:t,customClasses:"--inverse"})})})}function R(e){var t=e.text,a=e.stepNo,c=e.disabled,n=e.isViewedStep,i=N({"--dark":!c,"--disabled":c});return Object(s.jsxs)("div",{className:"step-row",children:[Object(s.jsx)(u,{text:t,customClasses:i}),Object(s.jsx)(E,{value:a.toString(),disabled:c,isViewedStep:n})]})}var z=["Add AWS Credentials","Launch Controller","Launch Aviatrix Transit in AWS","Do you want to launch EC2 instances in the AWS Spoke VPCs?","Import Key Pair","Launch Aviatrix Transit in Azure","Built Transit Peering between AWS & Azure"];function L(e){var t=e.stepNo;return Object(s.jsx)("ul",{className:"steps-list",children:z.map((function(e,a){return Object(s.jsx)("li",{className:"step-item",children:Object(s.jsx)(R,{text:e,stepNo:a+1,disabled:t!==a+1,isViewedStep:t>a+1})},e)}))})}var V=a(193);function U(){return Object(s.jsx)("div",{className:"loading-screen",children:Object(s.jsx)("div",{className:"blank-wrapper",children:Object(s.jsxs)("div",{className:"text-wrapper",children:[Object(s.jsx)(V.a,{}),Object(s.jsx)(j,{text:"Processing",customClasses:"--dark"}),Object(s.jsx)(j,{text:"Please wait, this step might take several minutes..."})]})})})}var B=a(42);function J(){var e=Object(d.b)(),t=I.credentials_form,a=t.initialValues,n=t.validations,i=Object(c.useCallback)((function(t){var a;e((a={key_id:t.access_key_id,secret_key:t.secret_access_key},function(e){f({urlName:"add_credentials",data:a}).then((function(t){var a=t.data.message;e(S(a)),e(w())})).catch((function(){e(_())}))}))}),[e]);return Object(s.jsx)(B.a,{initialValues:a,onSubmit:i,validationSchema:n,children:function(e){var t=e.values,a=e.handleChange,c=e.handleSubmit,n=e.errors;return Object(s.jsxs)("form",{onSubmit:c,className:"credential-form-grid",children:[Object(s.jsxs)("div",{className:"text-block",children:[Object(s.jsx)(u,{customClasses:"--dark",text:"AWS Credentials"}),Object(s.jsx)(j,{customClasses:"--light",text:"These can be obtained from AWS Console under my security credentials"})]}),Object(s.jsx)(v,{error:Boolean(n.access_key_id),value:t.access_key_id,name:"access_key_id",label:"Access Key ID",variant:"outlined",customClasses:"--standard --blue",onChange:a,helperText:n.access_key_id}),Object(s.jsx)(v,{value:t.secret_access_key,name:"secret_access_key",label:"Secret Access Key",variant:"outlined",customClasses:"--standard --blue",onChange:a,error:Boolean(n.secret_access_key),helperText:n.secret_access_key}),Object(s.jsx)("span",{children:Object(s.jsx)(h,{type:"submit",variant:"contained",customClasses:"--blue",children:"Continue"})})]})}})}function P(){var e=Object(d.b)(),t=I.launch_controller,a=t.initialValues,n=t.validations,i=Object(c.useCallback)((function(t){var a;e((a={email:t.email_address,recovery_email:t.recovery_email_address,password:t.password,confirm_password:t.re_enter_password},function(e){f({urlName:"launch_controller",data:a}).then((function(t){var a=t.data;e(S(null===a||void 0===a?void 0:a.message)),e(w())})).catch((function(){e(_())}))}))}),[e]);return Object(s.jsx)(B.a,{initialValues:a,onSubmit:i,validationSchema:n,children:function(e){var t=e.values,a=e.handleChange,c=e.handleSubmit,n=e.errors;return Object(s.jsxs)("form",{onSubmit:c,className:"launch-controller-grid",children:[Object(s.jsxs)("div",{className:"text-block",children:[Object(s.jsx)(u,{customClasses:"--dark",text:"Launch Controller"}),Object(s.jsx)(j,{customClasses:"--light",text:Object(s.jsxs)("span",{children:[Object(s.jsx)("a",{target:"blank",href:"https://aws.amazon.com/marketplace/pp?sku=b03hn7ck7yp392plmk8bet56k",children:"Subscribe"})," ","the market place of Aviatrix on AWS Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"]})})]}),Object(s.jsx)(v,{value:t.email_address,name:"email_address",label:"Email Address",variant:"outlined",fullWidth:!1,customClasses:"--small --blue",onChange:a,error:Boolean(n.email_address),helperText:n.email_address}),Object(s.jsx)(v,{value:t.recovery_email_address,name:"recovery_email_address",label:"Recovery Email Address",variant:"outlined",fullWidth:!1,customClasses:"--small --blue",onChange:a,error:Boolean(n.recovery_email_address),helperText:n.recovery_email_address}),Object(s.jsx)(v,{type:"password",value:t.password,name:"password",label:"Password",variant:"outlined",fullWidth:!1,customClasses:"--small --blue",onChange:a,error:Boolean(n.password),helperText:n.password}),Object(s.jsx)(v,{type:"password",value:t.re_enter_password,name:"re_enter_password",label:"Re-enter Password",fullWidth:!1,variant:"outlined",customClasses:"--small --blue",onChange:a,error:t.password!==t.re_enter_password||Boolean(n.re_enter_password),helperText:t.password!==t.re_enter_password?"Password is not same":n.re_enter_password}),Object(s.jsx)("span",{children:Object(s.jsx)(h,{type:"submit",variant:"contained",customClasses:" --blue",children:"Continue"})})]})}})}function D(){var e=Object(d.b)(),t=Object(c.useCallback)((function(){e(T({command:!0}))}),[e]),a=Object(c.useCallback)((function(){e(T({command:!1}))}),[e]);return Object(s.jsxs)("div",{className:"launch-transit-aws-grid",children:[Object(s.jsxs)("div",{className:"text-block",children:[Object(s.jsx)(u,{customClasses:"--dark",text:"Launch Aviatrix Transit in AWS"}),Object(s.jsx)(j,{customClasses:"--light",text:"Built in US-EAST 2 region which is Ohio"})]}),Object(s.jsxs)("span",{children:[Object(s.jsx)(h,{variant:"contained",customClasses:"--blue",onClick:t,children:"Yes"}),Object(s.jsx)(h,{variant:"outlined",customClasses:"--blue",onClick:a,children:"No"})]})]})}function X(){var e=I.launch_transit_azure,t=e.initialValues,a=e.validations,n=Object(d.b)(),i=Object(c.useState)(),r=Object(x.a)(i,2),l=r[0],o=r[1],b=Object(c.useCallback)((function(){o(!0)}),[]),m=Object(c.useCallback)((function(){var e;o(!1),n((e={command:!0},function(t){f({urlName:"skip_transit_azure",data:e}).then((function(e){var a=e.data;t(S(null===a||void 0===a?void 0:a.message)),t(w())})).catch((function(){t(_())}))}))}),[]),p=Object(c.useCallback)((function(e){var t;n((t={azure_application_id:e.application_id,azure_application_key:e.application_key,azure_directory_id:e.directory_id,azure_subscription_id:e.subscription_id},function(e){f({urlName:"launch_transit_azure",data:t}).then((function(t){var a=t.data;e(S(null===a||void 0===a?void 0:a.message)),e(w())})).catch((function(){e(_())}))}))}),[n]);return Object(s.jsx)(B.a,{initialValues:t,onSubmit:p,validationSchema:a,children:function(e){var t=e.values,a=e.handleChange,c=e.handleSubmit,n=e.errors;return Object(s.jsxs)("form",{className:"launch-transit-azure-grid",onSubmit:c,children:[Object(s.jsxs)("div",{className:"text-block",children:[Object(s.jsx)(u,{customClasses:"--dark",text:"Launch Aviatrix Transit in Azure"}),void 0===l&&Object(s.jsx)(j,{customClasses:"--light",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]}),void 0===l&&Object(s.jsxs)("span",{className:"btn-group",children:[Object(s.jsx)(h,{variant:"contained",customClasses:"--blue",onClick:b,children:"Yes"}),Object(s.jsx)(h,{variant:"outlined",customClasses:"--blue",onClick:m,children:"No"})]}),l&&Object(s.jsxs)("div",{className:"form-fields",children:[Object(s.jsx)(v,{value:t.subscription_id,name:"subscription_id",label:"Subscription ID",variant:"outlined",customClasses:"--standard --blue",onChange:a,error:Boolean(n.subscription_id),helperText:n.subscription_id}),Object(s.jsx)(v,{value:t.directory_id,name:"directory_id",label:"Directory ID",variant:"outlined",customClasses:"--standard --blue",onChange:a,error:Boolean(n.directory_id),helperText:n.directory_id}),Object(s.jsx)(v,{value:t.application_id,name:"application_id",label:"Application ID",variant:"outlined",customClasses:"--standard --blue",onChange:a,error:Boolean(n.application_id),helperText:n.application_id}),Object(s.jsx)(v,{value:t.application_key,name:"application_key",label:"Application Key",variant:"outlined",customClasses:"--standard --blue",onChange:a,error:Boolean(n.application_key),helperText:n.application_key}),Object(s.jsx)("span",{className:"btn-submit",children:Object(s.jsx)(h,{type:"submit",variant:"contained",customClasses:" --blue",children:"Continue"})})]})]})}})}function Q(){var e=Object(d.b)(),t=Object(c.useCallback)((function(){e(Y({command:!0}))}),[e]),a=Object(c.useCallback)((function(){e(Y({command:!1}))}),[e]);return Object(s.jsxs)("div",{className:"launch-ec2-grid",children:[Object(s.jsxs)("div",{className:"text-block",children:[Object(s.jsx)(u,{customClasses:"--dark",text:"Do you want to launch EC2 instances in the AWS Spoke VPCs?"}),Object(s.jsx)(j,{customClasses:"--light",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]}),Object(s.jsxs)("span",{children:[Object(s.jsx)(h,{variant:"contained",customClasses:"--blue",onClick:t,children:"Continue"}),Object(s.jsx)(h,{variant:"outlined",customClasses:"--blue",onClick:a,children:"Next"})]})]})}function F(){var e=Object(d.b)(),t=Object(c.useCallback)((function(){var t;e((t={command:!0},function(e){f({urlName:"built_transit",data:t}).then((function(t){var a=t.data;e(S(null===a||void 0===a?void 0:a.message)),e(w())})).catch((function(){e(_())}))}))}),[e]);return Object(s.jsxs)("div",{className:"built-transit-grid",children:[Object(s.jsxs)("div",{className:"text-block",children:[Object(s.jsx)(u,{customClasses:"--dark",text:"Built Transit Peering between AWS & Azure"}),Object(s.jsx)(j,{customClasses:"--light",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]}),Object(s.jsxs)("span",{children:[Object(s.jsx)(h,{variant:"contained",customClasses:"--blue",onClick:t,children:"Yes"}),Object(s.jsx)(h,{variant:"outlined",customClasses:"--blue",children:"No"})]})]})}function H(){var e=I.import_key_pair,t=e.initialValues,a=e.validations,n=Object(d.b)(),i=Object(c.useCallback)((function(e){var t;n((t={keyname:e.key_pair_name},function(e){f({urlName:"launch_spokevpc",data:t}).then((function(t){var a=t.data;e(S(null===a||void 0===a?void 0:a.message)),e(w())})).catch((function(){e(_())}))}))}),[n]);return Object(s.jsx)(B.a,{initialValues:t,onSubmit:i,validationSchema:a,children:function(e){var t=e.values,a=e.handleChange,c=e.handleSubmit,n=e.errors;return Object(s.jsxs)("form",{onSubmit:c,className:"import-key-pair-grid",children:[Object(s.jsxs)("div",{className:"text-block",children:[Object(s.jsx)(u,{customClasses:"--dark",text:"Import Key Pair"}),Object(s.jsx)(j,{customClasses:"--light",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]}),Object(s.jsx)(v,{error:Boolean(n.key_pair_name),value:t.key_pair_name,name:"key_pair_name",label:"Name",variant:"outlined",fullWidth:!1,customClasses:"--small --blue",onChange:a,helperText:n.key_pair_name}),Object(s.jsx)("span",{children:Object(s.jsx)(h,{type:"submit",variant:"contained",customClasses:" --blue",children:"Continue"})})]})}})}function K(){var e,t=Object(d.c)((function(e){return e.configuration})).controllerIP,a=void 0===t?"":t;return Object(s.jsxs)("div",{className:"success-page",children:[Object(s.jsx)(u,{text:"Success!",customClasses:"--success-title"}),Object(s.jsx)(j,{customClasses:"--light-without-opacity ",text:"Kickstart is completed. Copy the IP address to and paste it into the web\nbrowser to access the Controller. Be sure you have it so you can use it later."}),Object(s.jsxs)("div",{className:"copy-to-clipborad-container",children:[Object(s.jsx)("label",{className:"controller-label",htmlFor:"controller-ip",children:"Controller IP"}),Object(s.jsx)(v,{disabled:!0,id:"controller-ip",value:a,variant:"filled",InputProps:{endAdornment:(e=function(){a&&function(e,t){var a=document.createElement("textarea");a.innerText=e;var s=document.getElementById(t);null===s||void 0===s||s.appendChild(a),a.select(),document.execCommand("copy"),null===s||void 0===s||s.removeChild(a)}("https://".concat(a),"root")},Object(s.jsxs)("svg",{width:"15%",version:"1.1",id:"Capa_1",x:"0px",y:"0px",fill:"#6d6d6d",viewBox:"0 0 469.333 469.333",onClick:e,children:[Object(s.jsx)("g",{children:Object(s.jsx)("g",{children:Object(s.jsxs)("g",{children:[Object(s.jsx)("path",{d:"M330.667,0h-256C51.093,0,32,19.093,32,42.667v298.667h42.667V42.667h256V0z"}),Object(s.jsx)("path",{d:"M394.667,85.333H160c-23.573,0-42.667,19.093-42.667,42.667v298.667c0,23.573,19.093,42.667,42.667,42.667h234.667     c23.573,0,42.667-19.093,42.667-42.667V128C437.333,104.427,418.24,85.333,394.667,85.333z M394.667,426.667H160V128h234.667     V426.667z"})]})})}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{})]}))}})]})]})}function q(){switch(Object(o.h)().stepNo){case"1":return Object(s.jsx)(J,{});case"2":return Object(s.jsx)(P,{});case"3":return Object(s.jsx)(D,{});case"4":return Object(s.jsx)(Q,{});case"5":return Object(s.jsx)(H,{});case"6":return Object(s.jsx)(X,{});case"7":return Object(s.jsx)(F,{});case"8":return Object(s.jsx)(K,{});default:return Object(s.jsx)(o.a,{to:Z})}}var $=a(195);function ee(e){return Object(s.jsx)($.a,Object(b.a)(Object(b.a)({},e),{},{className:"custom-alert-style ".concat(e.customClasses),children:e.children}))}var te=a.p+"static/media/cover.bd730836.svg";function ae(){var e=Object(o.i)().path,t=Object(o.g)(),a=t.location.pathname,n=Object(d.c)((function(e){return e.configuration})),i=n.step,r=n.responseMessage,l=n.responseStatus,u=Object(d.b)(),j=Number.parseInt(a.slice(-1)),b=Object(c.useCallback)((function(){u({type:"CLEAR_RESPONSE_STATUS",payload:{responseMessage:void 0,responseStatus:void 0}})}),[u]);return Object(c.useEffect)((function(){i!==j&&t.push(function(e){return{pathname:e,state:{fromApp:!0}}}("".concat(Z,"/").concat(i)))}),[i,j]),function(e,t,a){var s=Object(c.useRef)();Object(c.useEffect)((function(){s.current=e}),[e]),Object(c.useEffect)((function(){function e(){s.current()}if(null!==t){e();var a=setInterval(e,t);return function(){return clearInterval(a)}}}),[t].concat(Object(O.a)(a)))}((function(){u(w())}),15e3,[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("figure",{children:Object(s.jsx)("img",{src:te})}),Object(s.jsx)("section",{className:"configuration-section",children:Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("aside",{className:"left-nav",children:Object(s.jsx)(L,{stepNo:i})}),Object(s.jsxs)("section",{className:"right-section",children:[l&&Object(s.jsx)(ee,{icon:!1,onClose:b,severity:"success"===l?"success":"error",children:r}),Object(s.jsxs)(o.d,{children:[Object(s.jsx)(o.b,{exact:!0,path:e,children:Object(s.jsx)(o.a,{to:"".concat(e,"/1")})}),Object(s.jsx)(o.b,{path:"".concat(e,"/:stepNo"),component:q})]})]})]})})]})}var se=a(47),ce=a(122),ne={isInProgress:!1,step:1};var ie=Object(se.c)({configuration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MACHINE_STATE":return t.payload;case"SET_FAILURE_RESPONSE_STATUS":case"SET_SUCCESS_RESPONSE_STATUS":case"CLEAR_RESPONSE_STATUS":case"SET_STEP_AND_ACTION_STATUS":return Object(b.a)(Object(b.a)({},e),t.payload);default:return e}}}),re=Object(se.a)(ce.a),le=Object(se.d)(re);var oe,de=Object(se.e)(ie,oe,le);function ue(){var e=Object(d.c)((function(e){return e.configuration})).isInProgress;return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)(W,{}),e&&Object(s.jsx)(U,{}),Object(s.jsx)("main",{children:Object(s.jsx)(l.a,{children:Object(s.jsxs)(o.d,{children:[Object(s.jsx)(o.b,{path:Z,component:ae}),Object(s.jsx)(o.b,{path:"/",component:function(){return Object(s.jsx)(o.a,{to:Z})}}),Object(s.jsx)(o.b,{path:"*",component:function(){return Object(s.jsx)(o.a,{to:Z})}})]})})})]})}var je=function(){return Object(s.jsx)(d.a,{store:de,children:Object(s.jsx)(ue,{})})};a(159);r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(je,{})}),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.dfd42d06.chunk.js.map