(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[96],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"site",(function(){return N})),n.d(t,"page",(function(){return x})),n.d(t,"SiteMembersApiSymbol",(function(){return P.b})),n.d(t,"BIEvents",(function(){return k})),n.d(t,"PrivacyStatus",(function(){return S.d})),n.d(t,"INTERACTIONS",(function(){return S.b})),n.d(t,"AUTH_RESULT_REASON",(function(){return S.a})),n.d(t,"memberDetailsFromDTO",(function(){return j.f})),n.d(t,"isLoginAcceptableError",(function(){return j.d})),n.d(t,"isSignupAcceptableError",(function(){return j.e}));var o=n(27),i=n(0),r=n(356),s=n(357),a=n(117),c=n(365),u=n(375),l=n(376),d=n(354),b=n(366),m=n(355),g=n(226),h=n(23),p=n(4),f=n(36),v=n(182),O=n(372),w=n(7),S=n(53),C=n(228),P=n(186),D=function(){function e(e,t,n){this.propsStore=e,this.structureApi=t,this.siteScrollBlocker=n}return e.prototype.displayDialog=function(e,t,n,o){return void 0===o&&(o={}),Object(i.b)(this,void 0,Promise,(function(){var r,s,a,c=this;return Object(i.d)(this,(function(u){switch(u.label){case 0:return r=function(){return Object(i.b)(c,void 0,void 0,(function(){var o,r;return Object(i.d)(this,(function(s){switch(s.label){case 0:return o=Object(w.uniqueId)(P.a),this.propsStore.update(((r={})[o]=Object(i.a)(Object(i.a)({},t),n),r)),Object(C.b)(),[4,this.structureApi.addComponentToDynamicStructure(o,{componentType:e,components:[]})];case 1:return s.sent(),this.currentCompId&&(this.structureApi.removeComponentFromDynamicStructure(this.currentCompId),this.siteScrollBlocker.setSiteScrollingBlocked(!1,this.currentCompId)),this.siteScrollBlocker.setSiteScrollingBlocked(!0,o),this.currentCompId=o,[2]}}))}))},s=o.shouldWaitForAppDidMount,a=o.registerToAppDidMount,s&&a?(a(r),[3,3]):[3,1];case 1:return[4,r()];case 2:u.sent(),u.label=3;case 3:return[2]}}))}))},e.prototype.hideDialog=function(){this.currentCompId&&(this.structureApi.removeComponentFromDynamicStructure(this.currentCompId),this.siteScrollBlocker.setSiteScrollingBlocked(!1,this.currentCompId),Object(C.a)()),this.currentCompId=void 0},e}(),j=n(194),k=function(e){var t=e.sessionManager,n=e.businessLogger,o=e.wixBiSession,r=e.viewMode,s=e.language,a=function(e,n){return{biToken:o.msId,context:e,ts:T(o),viewmode:r,visitor_id:t.getVisitorId(),site_member_id:t.getSiteMemberId(),vsi:o.viewerSessionId,site_settings_lng:s.siteLanguage,browser_lng:s.userLanguage,lng_mismatch:s.siteLanguage!==s.userLanguage,layout:n}};return{loginOrSignUpDialogLoaded:function(e,t){void 0===t&&(t="fullscreen"),n.logger.log(Object(i.a)({src:5,evid:658},a(e,t)),{endpoint:"site-members"})},closingDialog:function(e,t){void 0===t&&(t="fullscreen"),n.logger.log(Object(i.a)({src:5,evid:602,form_type:"default"},a(e,t)),{endpoint:"site-members"})},emailAuthSubmitClicked:function(e,t){n.logger.log(Object(i.a)({src:5,evid:603,form_type:"default"},a(e,t)),{endpoint:"site-members"})},siteMembersFeatureLoaded:function(){n.logger.log(Object(i.a)({src:5,evid:698},a()),{endpoint:"site-members"})},siteMembersSdkFeatureLoaded:function(){n.logger.log(Object(i.a)({src:5,evid:699},a()),{endpoint:"site-members"})}}},T=function(e){var t=e.initialTimestamp||0;return Date.now()-t},L=function(){function e(e){this.shouldRunCustomPopupCloseCallback=!0,this.popups=e}return e.prototype.openPopupPage=function(e,t,n){var o;return Object(i.b)(this,void 0,void 0,(function(){var r,s=this;return Object(i.d)(this,(function(i){switch(i.label){case 0:return r=this.shouldRunCustomPopupCloseCallback,this.shouldRunCustomPopupCloseCallback=!1,this.assignRequestAuthenticationRejection(t),[4,null===(o=this.popups)||void 0===o?void 0:o.openPopupPage(e,(function(){s.shouldRunCustomPopupCloseCallback&&(s.rejectAuthenticationRequest(),n&&n())}))];case 1:return i.sent(),this.shouldRunCustomPopupCloseCallback=r,[2]}}))}))},e.prototype.preventCustomPopupCloseCallback=function(){this.shouldRunCustomPopupCloseCallback=!1},e.prototype.allowCustomPopupCloseCallback=function(){this.shouldRunCustomPopupCloseCallback=!0},e.prototype.assignRequestAuthenticationRejection=function(e){this.requestAuthenticationRejection=this.requestAuthenticationRejection||e},e.prototype.rejectAuthenticationRequest=function(){this.requestAuthenticationRejection&&(this.requestAuthenticationRejection(S.a.CANCELED),this.requestAuthenticationRejection=void 0)},e}(),y=function(e,t,n){document.cookie=e+"=;max-age=0",document.cookie=e+"=;max-age=0;path="+t,document.cookie=e+"=;domain="+n+";max-age=0",document.cookie=e+"=;domain="+n+";max-age=0;path="+t},E=Object(o.h)([Object(o.f)(r.e,P.c),Object(o.f)(r.c,P.c),Object(o.f)(r.b,P.c),s.a,a.g,a.q,h.a,c.b,c.d,a.f,a.c,p.e,f.a,u.a,p.i,l.a,d.b,Object(o.g)(v.c),Object(o.g)(O.a),b.a,m.a],(function(e,t,n,o,r,s,a,c,u,l,d,b,m,h,p,f,v,O,C,P,T){var E,A;void 0===C&&(C={trackEvent:function(){return 0}});var I=e.collectionExposure,R=e.smcollectionId,_=e.svSession,M=e.smSessionCookie,U=e.protectedHomepage,N=e.isCommunityInstalled,x=e.memberInfoAppId,q=e.sm_efCookie,F="WixInternal"===I,W=a.getAppInstanceByAppDefId("22bef345-3c5b-4c18-b782-74d4085112ff"),B=null!==(E=a.getVisitorId())&&void 0!==E?E:"00000000-0000-0000-0000-000000000000",G=t.smSettings,V=t.tpaApplicationIds,z=t.policyLinks,H=x&&V[x],K=s.site,Y=K.siteRevision,J=K.metaSiteId,X=K.siteId,$=K.externalBaseUrl,Q=s.requestUrl,Z=s.viewMode,ee=-1!==S.f.findIndex((function(e){var t,n;return null===(n=null===(t=null==d?void 0:d.navigator)||void 0===t?void 0:t.userAgent)||void 0===n?void 0:n.includes(e)})),te=!(T["specs.thunderbolt.sm_socialAuthMessageInInAppBrowser"]&&ee),ne="/_api/wix-sm-webapp/tokens/verify/"+J+"/"+X,oe=$.replace(/\/$/,"")+"/api/wix-sm/v1/authorize/"+X+"/pages",ie="/_api/wix-sm-webapp/tokens/logout/"+J,re="/_api/wix-sm-webapp/member/changePasswordWithMailToken?metaSiteId="+J+"&collectionId="+R,se="/_api/wix-sm-webapp/social/token/handle?metaSiteId="+J+"&collectionId="+R,ae=$.replace(/\/$/,"")+"/_api/dynamicmodel",ce=G.smFirstDialogLogin?"login":"signup",ue=G.socialLoginFacebookEnabled,le=G.socialLoginGoogleEnabled,de=G.termsOfUse,be=G.privacyPolicy,me=G.codeOfConduct,ge=G.customSignUpPageId,he=G.customSignInPageId,pe=null===(A=G.joinCommunityCheckedByDefault)||void 0===A||A,fe=e.smToken,ve={},Oe=M,we=null,Se=!1,Ce=function(e){we=e},Pe=function(){var e=!P.getCurrentRouteInfo();return{registerToAppDidMount:Ce,shouldWaitForAppDidMount:!Se&&e}},De={},je={},ke=k({sessionManager:a,businessLogger:f,wixBiSession:v,viewMode:null==Z?void 0:Z.toUpperCase(),language:l});ke.siteMembersFeatureLoaded();var Te={},Le=Object(j.b)(o,{credentials:"same-origin",headers:{accept:"application/json","x-wix-site-revision":""+Y,"x-wix-client-artifact-id":"thunderbolt"}},s.requestUrl),ye=function(e,t,n){return new D(e,t,n)}(c,u,m),Ee=T["specs.thunderbolt.sm_googleAuthViaSDK"],Ae=new L(O),Ie={appDidMount:function(){we&&we(),Se=!0},login:function(e,t,n,o){return void 0===o&&(o=!1),Object(i.b)(this,void 0,Promise,(function(){var r,s,a;return Object(i.d)(this,(function(i){switch(i.label){case 0:C.trackEvent({eventName:"CustomEvent",params:{eventCategory:"Site members",eventAction:"Log in Submit",eventLabel:"Wix"}}),i.label=1;case 1:return i.trys.push([1,4,,5]),[4,Ie.performLogin(e,t,n)];case 2:return r=i.sent(),[4,Ie.handleLoginResponse(r,o)];case 3:return s=i.sent(),C.trackEvent({eventName:"CustomEvent",params:{eventCategory:"Site members",eventAction:"Log in Success",eventLabel:"Wix"}}),[2,s];case 4:throw a=i.sent(),C.trackEvent({eventName:"CustomEvent",params:{eventCategory:"Site members",eventAction:"Log in Failure",eventLabel:"Wix"}}),a;case 5:return[2]}}))}))},performLogin:function(e,t,n){var o;return Object(i.b)(this,void 0,Promise,(function(){var r,s,a,c,u,l,d,b,m;return Object(i.d)(this,(function(i){switch(i.label){case 0:return T["specs.thunderbolt.sm_platformizedLogin"]?[4,Le("/_api/wix-sm-webapp/v1/auth/login",{method:"POST",headers:{"Content-Type":"application/json",authorization:W||""},body:JSON.stringify({email:e,password:t,recaptchaToken:null==n?void 0:n.recaptchaToken})})]:[3,2];case 1:return[2,{member:(r=i.sent()).member,token:null===(o=null==r?void 0:r.session)||void 0===o?void 0:o.token}];case 2:return s=encodeURIComponent(e),a=encodeURIComponent(t),c="email="+s+"&password="+a+"&collectionId="+R+"&metaSiteId="+J+"&appUrl="+Q+"&svSession="+_,(null==n?void 0:n.recaptchaToken)&&(c=c+"&recaptchaToken="+n.recaptchaToken),[4,Le("/_api/wix-sm-webapp/member/login",{method:"POST",body:c})];case 3:if(u=i.sent(),l=u.errorCode,d=u.payload,l)throw l;return b=d.sessionToken,m=d.siteMemberDto,[2,{member:Object(j.f)(m),token:b}]}}))}))},handleOauthToken:function(e,t,n,o,s){return void 0===s&&(s=!1),Object(i.b)(this,void 0,Promise,(function(){var c,u,d,b,m,g,h,p;return Object(i.d)(this,(function(i){switch(i.label){case 0:return c=a.getVisitorId(),r.interactionStarted(S.b.SOCIAL_APP_LOGIN),C.trackEvent({eventName:"CustomEvent",params:{eventCategory:"Site members",eventAction:"Log in Submit",eventLabel:t}}),[4,Le(se,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({svSession:_,visitorId:c,token:e,provider:t,mode:n,lang:l.userLanguage,privacyStatus:o})})];case 1:if(u=i.sent(),d=u.errorCode,b=u.payload,d)throw C.trackEvent({eventName:"CustomEvent",params:{eventCategory:"Site members",eventAction:"Log in Failure",eventLabel:t}}),d;return r.interactionEnded(S.b.SOCIAL_APP_LOGIN),b.smSession&&(g=b.smSession.siteMemberDto,m=b.smSession.sessionToken),g=b.siteMemberDto,h=Object(j.f)(g),[4,Ie.handleLoginResponse({member:h,token:m},s)];case 2:return p=i.sent(),C.trackEvent({eventName:"CustomEvent",params:{eventCategory:"Site members",eventAction:"Log in Success",eventLabel:t}}),[2,p]}}))}))},handleSocialLoginResponse:function(e,t,n){return void 0===n&&(n=!1),Object(i.b)(this,void 0,Promise,(function(){var o,s,a,c;return Object(i.d)(this,(function(i){switch(i.label){case 0:return r.interactionStarted(S.b.SOCIAL_APP_LOGIN),r.interactionEnded(S.b.SOCIAL_APP_LOGIN),C.trackEvent({eventName:"CustomEvent",params:{eventCategory:"Site members",eventAction:"Log in Submit",eventLabel:t}}),e.smSession&&(s=e.smSession.siteMemberDto,o=e.smSession.sessionToken),s=e.siteMemberDto,a=Object(j.f)(s),[4,Ie.handleLoginResponse({member:a,token:o},n)];case 1:return c=i.sent(),C.trackEvent({eventName:"CustomEvent",params:{eventCategory:"Site members",eventAction:"Log in Success",eventLabel:t}}),[2,c]}}))}))},handleLoginResponse:function(e,t){var n=e.token,o=e.member;return void 0===t&&(t=!1),Object(i.b)(this,void 0,Promise,(function(){var e,r,s;return Object(i.d)(this,(function(a){switch(a.label){case 0:return e=o.emailVerified,n||e||"ACTIVE"!==o.status?[3,2]:[4,Ie.showConfirmationEmailDialog(o.id)];case 1:return a.sent(),[2,Object(j.c)()];case 2:return n?[3,5]:[4,h()];case 3:return r=a.sent(),[4,Ie.showNotificationDialog("",(r("siteMembersTranslations","SMApply_Success1","Success! Your member signup request has been sent and is awaiting approval.")+" "+r("siteMembersTranslations","SMApply_Success2","The site administrator will notify you via email ({0}) once your request has been approved.")).replace("{0}",o.loginEmail),r("siteMembersTranslations","SMContainer_OK","OK"))];case 4:return a.sent(),[2,Object(j.c)()];case 5:return[4,Ie.applySessionToken(n,o,t)];case 6:return s=a.sent(),[2,Object(i.a)({sessionToken:n,member:o},t?{pages:s}:{})]}}))}))},promptLogin:function(e,t,n){void 0===e&&(e={}),void 0===t&&(t=!0),void 0===n&&(n=!1);var o=e.mode,i=e.modal,r=null!=o?o:ce,s=i&&T["specs.thunderbolt.sm_displayLoginAsAPopup"]?"popup":"fullscreen";return"login"===r?Ie.showLoginDialog(t,s,n):Ie.showSignUpDialog(t,s,n)},promptForgotPassword:function(e){return void 0===e&&(e=!0),new Promise((function(t,n){Ae.assignRequestAuthenticationRejection(n);var o={isCloseable:e},r={onCloseDialogCallback:function(){ke.closingDialog("RequestResetPassword"),ye.hideDialog(),Ae.rejectAuthenticationRequest()},onSubmitCallback:function(e){var n=this;return Ie.sendForgotPasswordMail(e).then((function(){return Object(i.b)(n,void 0,void 0,(function(){var e;return Object(i.d)(this,(function(n){switch(n.label){case 0:return[4,h()];case 1:return e=n.sent(),Ie.showNotificationDialog(e("siteMembersTranslations","siteMembersTranslations_RESET_PASSWORD_CHECKEMAIL_TITLE","Please Check Your Email"),e("siteMembersTranslations","siteMembersTranslations_RESET_PASSWORD_CHECKEMAIL_TEXT","We\u2019ve emailed you a link to reset your password."),e("siteMembersTranslations","siteMembersTranslations_Reset_Password_OK","Got It")),t(),[2]}}))}))}))}};ye.displayDialog("RequestPasswordResetDialog",o,r)}))},requestAuthentication:function(e){return void 0===e&&(e={}),Object(i.b)(this,void 0,Promise,(function(){var t;return Object(i.d)(this,(function(n){switch(n.label){case 0:if(Oe)return[2,{success:!0,token:Oe,reason:S.a.ALREADY_LOGGED_IN}];n.label=1;case 1:return n.trys.push([1,3,,4]),t=!U,[4,Ie.promptLogin(e,t)];case 2:return[2,{success:!0,token:n.sent().sessionToken,reason:S.a.SUCCESS}];case 3:return[2,{success:!1,reason:n.sent()}];case 4:return[2]}}))}))},requestAuthorizedPages:function(e){return void 0===e&&(e={}),Object(i.b)(this,void 0,Promise,(function(){var t,n;return Object(i.d)(this,(function(o){switch(o.label){case 0:return fe?(n={success:!0},[4,Ie.authorizeMemberPagesBySignedInstance(fe)]):[3,2];case 1:return[2,(n.pages=o.sent(),n)];case 2:return o.trys.push([2,4,,5]),t=!U,[4,Ie.promptLogin(e,t,!0)];case 3:return[2,{success:!0,pages:o.sent().pages}];case 4:return[2,{success:!1,reason:o.sent()}];case 5:return[2]}}))}))},applySessionToken:function(e,t,n){return void 0===n&&(n=!1),Object(i.b)(this,void 0,Promise,(function(){var o,s,c,u;return Object(i.d)(this,(function(l){switch(l.label){case 0:return r.interactionStarted(S.b.VERIFY_TOKEN),[4,Le(ne,{method:"POST",body:"token="+e})];case 1:if(o=l.sent(),s=o.payload,c=o.errorCode)throw c;return r.interactionEnded(S.b.VERIFY_TOKEN),[4,a.loadNewSession({reason:"memberLogin"})];case 2:return l.sent(),[4,Ie.getSmToken()];case 3:return fe=l.sent(),Oe=e,null==t?[3,4]:(u=t,[3,6]);case 4:return[4,Ie.getMemberDetails()];case 5:u=l.sent(),l.label=6;case 6:return ve=u,[4,Promise.all(Object.values(De).map((function(e){return Object(i.b)(void 0,void 0,void 0,(function(){var t;return Object(i.d)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,e()];case 1:return n.sent(),[3,3];case 2:return t=n.sent(),r.captureError(t,{tags:{feature:"site-members"}}),[3,3];case 3:return[2]}}))}))})))];case 7:return l.sent(),n?[2,s.pages]:[2]}}))}))},getSmToken:function(){return Object(i.b)(this,void 0,Promise,(function(){var e;return Object(i.d)(this,(function(t){switch(t.label){case 0:return[4,o.envFetch(ae).then((function(e){return e.json()}))];case 1:return e=t.sent().clientSpecMap,[2,Object.values(e).find((function(e){return"sitemembers"===e.type})).smtoken]}}))}))},authorizeMemberPagesByCookie:function(){return Object(i.b)(this,void 0,Promise,(function(){var e,t,n,o;return Object(i.d)(this,(function(i){switch(i.label){case 0:return e=Object(g.e)(d)?{headers:{cookie:"smSession="+M}}:void 0,[4,Le(oe,e)];case 1:if(t=i.sent(),n=t.authorizedPages,o=t.errorCode)throw o;return[2,n]}}))}))},authorizeMemberPagesByToken:function(e){return Object(i.b)(this,void 0,Promise,(function(){var t,n,o;return Object(i.d)(this,(function(i){switch(i.label){case 0:return e===M?[2,this.authorizeMemberPagesByCookie()]:[4,Le(ne,{method:"POST",body:"token="+e})];case 1:if(t=i.sent(),n=t.payload,o=t.errorCode)throw o;return[2,n.pages]}}))}))},authorizeMemberPagesBySignedInstance:function(e){return Object(i.b)(this,void 0,Promise,(function(){var t,n,o;return Object(i.d)(this,(function(i){switch(i.label){case 0:return[4,Le(oe,{headers:{authorization:e}})];case 1:if(t=i.sent(),n=t.authorizedPages,o=t.errorCode)throw o;return[2,n]}}))}))},getMemberDetails:function(e){return void 0===e&&(e=!1),Object(i.b)(this,void 0,Promise,(function(){var t,n,o;return Object(i.d)(this,(function(s){switch(s.label){case 0:return!ve.id||e?[3,1]:[2,ve];case 1:return fe?[4,Le("/_api/wix-sm-webapp/member/"+fe+"?collectionId="+R+"&metaSiteId="+J)]:[3,5];case 2:if(t=s.sent(),n=t.payload,o=t.errorCode)throw o;return ve=Object(j.f)(n),e?[4,Promise.all(Object.values(Te).map((function(e){return Object(i.b)(void 0,void 0,void 0,(function(){var t;return Object(i.d)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,e()];case 1:return n.sent(),[3,3];case 2:return t=n.sent(),r.captureError(t,{tags:{feature:"site-members"}}),[3,3];case 3:return[2]}}))}))})))]:[3,4];case 3:s.sent(),s.label=4;case 4:return[2,ve];case 5:return[2,null]}}))}))},register:function(e,t,n,o,s,a,c){return Object(i.b)(this,void 0,Promise,(function(){var u,l,d,b,m,g,p,f,v,O,w;return Object(i.d)(this,(function(P){switch(P.label){case 0:a=null!=a&&a,P.label=1;case 1:return P.trys.push([1,10,,11]),r.interactionStarted(S.b.CODE_SIGNUP),C.trackEvent({eventName:"CustomEvent",params:{eventCategory:"Site members",eventAction:"Sign up Submit",eventLabel:"Wix"}}),u={email:e,password:t,profilePrivacyStatus:o,contactInfo:n,defaultFlow:s,recaptchaToken:c},[4,Le("/_api/wix-sm-webapp/v1/auth/signup",{method:"POST",headers:{"Content-Type":"application/json",authorization:W||""},body:JSON.stringify(u)})];case 2:return l=P.sent(),d=l.member,b=l.approvalToken,m=l.session,g=d.emailVerified,p=null==m?void 0:m.token,f="ACTIVE"===(null==d?void 0:d.status)?"ACTIVE":"PENDING",p||g||"ACTIVE"!==d.status?[3,4]:[4,Ie.showConfirmationEmailDialog(d.id)];case 3:return P.sent(),r.interactionEnded(S.b.CODE_SIGNUP),[2,{member:d,status:f}];case 4:return s&&"APPLICANT"===(null==d?void 0:d.status)||!p?[4,h()]:[3,7];case 5:return v=P.sent(),[4,Ie.showNotificationDialog("",(v("siteMembersTranslations","SMApply_Success1","Success! Your member login request has been sent and is awaiting approval.")+" "+v("siteMembersTranslations","SMApply_Success2","The site administrator will notify you via email ({0}) once your request has been approved.")).replace("{0}",e),v("siteMembersTranslations","SMContainer_OK","OK"))];case 6:return P.sent(),r.interactionEnded(S.b.CODE_SIGNUP),[2,{member:d,status:f,approvalToken:b}];case 7:return[4,Ie.applySessionToken(p,d,a)];case 8:return O=P.sent(),r.interactionEnded(S.b.CODE_SIGNUP),C.trackEvent({eventName:"CustomEvent",params:{eventCategory:"Site members",eventAction:"Sign up Success",eventLabel:"Wix"}}),[2,Object(i.a)({member:d,status:f,sessionToken:p},a&&O?{pages:O}:{})];case 9:return[3,11];case 10:throw w=P.sent(),C.trackEvent({eventName:"CustomEvent",params:{eventCategory:"Site members",eventAction:"Sign up Failure",eventLabel:"Wix"}}),Object(j.e)(w)&&r.interactionEnded(S.b.CODE_SIGNUP),w;case 11:return[2]}}))}))},sendForgotPasswordMail:function(e){return Object(i.b)(this,void 0,void 0,(function(){var t,n,o,s;return Object(i.d)(this,(function(i){switch(i.label){case 0:return r.interactionStarted(S.b.RESET_PASSWORD),t=l.userLanguage,n=encodeURIComponent(Q),o=encodeURIComponent(e),[4,Le("/_api/wix-sm-webapp/member/sendForgotPasswordMail",{method:"POST",body:"returnUrl="+n+"&collectionId="+R+"&metaSiteId="+J+"&lang="+t+"&email="+o})];case 1:if(s=i.sent().errorCode)throw s;return r.interactionEnded(S.b.RESET_PASSWORD),[2]}}))}))},changePassword:function(e,t){return Object(i.b)(this,void 0,void 0,(function(){var n,o;return Object(i.d)(this,(function(i){switch(i.label){case 0:return n=encodeURIComponent(e),[4,Le(re,{method:"POST",body:"newPassword="+n+"&forgotPasswordToken="+t})];case 1:if(o=i.sent().errorCode)throw o;return[2]}}))}))},resendEmailVerification:function(e){return Object(i.b)(this,void 0,void 0,(function(){var t;return Object(i.d)(this,(function(n){switch(n.label){case 0:return[4,Le("/_api/wix-sm-webapp/tokens/email/resend/"+e)];case 1:if(t=n.sent().errorCode)throw t;return[2]}}))}))},logout:function(e){return Object(i.b)(this,void 0,void 0,(function(){var t;return Object(i.d)(this,(function(n){switch(n.label){case 0:return fe?[4,Le(ie,{method:"POST"})]:[2];case 1:return n.sent(),[4,Promise.all(Object.values(je).map((function(e){return Object(i.b)(void 0,void 0,void 0,(function(){var t;return Object(i.d)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,e()];case 1:return n.sent(),[3,3];case 2:return t=n.sent(),r.captureError(t,{tags:{feature:"site-members"}}),[3,3];case 3:return[2]}}))}))})))];case 2:return n.sent(),e?(t="./"+e.replace(/^\//,""),[4,b.navigate(t)]):[3,4];case 3:n.sent(),n.label=4;case 4:return Object(g.e)(d)||d.document.location.reload(),[2]}}))}))},registerToUserLogin:function(e){var t=Object(w.uniqueId)("callback");return De[t]=e,t},unRegisterToUserLogin:function(e){delete De[e]},registerToMemberLogout:function(e){var t=Object(w.uniqueId)("logout_callback");return je[t]=e,t},unRegisterToMemberLogout:function(e){delete je[e]},registerToMemberDetailsRefresh:function(e){var t=Object(w.uniqueId)("mdrcb");return Te[t]=e,t},unRegisterToMemberDetailsRefresh:function(e){delete Te[e]},showWelcomeDialog:function(e){return void 0===e&&(e=!0),Object(i.b)(this,void 0,void 0,(function(){var t,n,o;return Object(i.d)(this,(function(i){return t={isCloseable:e},n=p.getParsedUrl(),o={onCloseDialogCallback:function(){ke.closingDialog("WelcomeDialog");var e=new URL(s.requestUrl).hostname,t=0===e.indexOf("www")?e.substr(3):e;y("sm_ef","/",t),q="",ye.hideDialog(),b.navigate(n.href)},onSubmitCallback:function(){var e=new URL(s.requestUrl).hostname,t=0===e.indexOf("www")?e.substr(3):e;y("sm_ef","/",t),q="",ye.hideDialog(),H&&b.navigate("./account/my-account"),b.navigate(n.href)}},ye.displayDialog("WelcomeDialog",t,o),[2]}))}))},showNoPermissionsToPageDialog:function(e){return Object(i.b)(this,void 0,void 0,(function(){var t;return Object(i.d)(this,(function(n){return t={onCloseDialogCallback:function(){ye.hideDialog(),e&&e()},onSwitchAccountLinkClick:function(){Ie.logout()}},ye.displayDialog("NoPermissionsToPageDialog",{},t),[2]}))}))},showResetPasswordDialog:function(e){return Object(i.b)(this,void 0,void 0,(function(){var t,n;return Object(i.d)(this,(function(o){return t={isCloseable:!0},n={onCloseDialogCallback:function(){ke.closingDialog("ResetPasswordDialog");var e=p.getParsedUrl();e.searchParams.delete("forgotPasswordToken"),e.searchParams.delete("forgotPasswordLang"),p.pushUrlState(e),ye.hideDialog(),b.navigate(e.href)},onSubmitCallback:function(n){return Object(i.b)(this,void 0,void 0,(function(){var o,r,a,c=this;return Object(i.d)(this,(function(u){switch(u.label){case 0:return[4,h()];case 1:o=u.sent(),u.label=2;case 2:return u.trys.push([2,4,,5]),[4,Ie.changePassword(n,e)];case 3:return u.sent(),Ie.showNotificationDialog(o("siteMembersTranslations","siteMembersTranslations_Reset_Password_Sucess_Title","Your password has been changed."),"",o("siteMembersTranslations","SMContainer_OK","OK"),(function(){return Object(i.b)(c,void 0,void 0,(function(){var e;return Object(i.d)(this,(function(t){switch(t.label){case 0:return(e=p.getParsedUrl()).searchParams.delete("forgotPasswordToken"),e.searchParams.delete("forgotPasswordLang"),p.pushUrlState(e),[4,Ie.showLoginDialog()];case 1:return t.sent(),b.navigate(e.href),[2]}}))}))})),[3,5];case 4:if(r=u.sent(),a=s.experiments["specs.thunderbolt.sm_redirectToResetPasswordLinkOnTokenExpired"],-19972!==r||!a)throw r;return-19972===r&&a&&Ie.showNotificationDialog(o("siteMembersTranslations","siteMembersTranslations_PASSWORD_HAS_EXPIRED_TITLE","Your link to create a new password has expired"),o("siteMembersTranslations","siteMembersTranslations_PASSWORD_HAS_EXPIRED_TEXT","To continue, resend a new link to your email."),o("siteMembersTranslations","siteMembersTranslations_PASSWORD_HAS_EXPIRED_OK","Resend Link"),(function(){return Ie.promptForgotPassword(t.isCloseable).then((function(){var e=p.getParsedUrl();b.navigate(e.href)}))})),[3,5];case 5:return[2]}}))}))}},ye.displayDialog("ResetPasswordDialog",t,n),[2]}))}))},showLoginDialog:function(e,t,n){return void 0===e&&(e=!0),void 0===t&&(t="fullscreen"),void 0===n&&(n=!1),Object(i.b)(this,void 0,Promise,(function(){var o=this;return Object(i.d)(this,(function(s){return he&&(null==O?void 0:O.isPopupPage(he))?[2,Ie.showCustomAuthenticationDialog(he,n)]:[2,new Promise((function(s,a){return Object(i.b)(o,void 0,void 0,(function(){var o,c;return Object(i.d)(this,(function(i){switch(i.label){case 0:return Ae.assignRequestAuthenticationRejection(a),o={displayMode:t,language:l.userLanguage,isCloseable:e,smCollectionId:R,svSession:_,biVisitorId:B,metaSiteId:J,isSocialLoginGoogleEnabled:le,isSocialLoginFacebookEnabled:!F&&ue,isEmailLoginEnabled:!F,isSocialAuthSupported:te,useGoogleSdk:Ee},c={onCloseDialogCallback:function(){ye.hideDialog(),ke.closingDialog("MemberLoginDialog",t),Ae.rejectAuthenticationRequest()},submit:function(e,o,i){return r.interactionStarted(S.b.DEFAULT_LOGIN),ke.emailAuthSubmitClicked("MemberLoginDialog",t),Ie.login(e,o,i,n).then((function(e){r.interactionEnded(S.b.DEFAULT_LOGIN),ye.hideDialog(),s(e)})).catch((function(e){throw Object(j.d)(e)&&r.interactionEnded(S.b.DEFAULT_LOGIN),e}))},onForgetYourPasswordClick:function(){Ie.promptForgotPassword(e)},onSwitchDialogLinkClick:function(){Ie.showSignUpDialog(e,t).then(s,(function(){Ae.rejectAuthenticationRequest()}))},onTokenMessage:function(e,t,o){void 0===o&&(o=!1);var i=o?"PUBLIC":"PRIVATE";return Ie.handleOauthToken(e,t,"memberLoginDialog",i,n).then((function(e){ye.hideDialog(),s(e)}))},onBackendSocialLogin:function(e,t){return Ie.handleSocialLoginResponse(e,t,n).then((function(e){ye.hideDialog(),s(e)}))},getHostReadyPayload:function(){return{visitorId:B,svSession:_}}},ke.loginOrSignUpDialogLoaded("MemberLoginDialog",t),[4,ye.displayDialog("MemberLoginDialog",o,c,Pe())];case 1:return i.sent(),Ie.closeCustomAuthenticationDialogs(!0),[2]}}))}))}))]}))}))},showSignUpDialog:function(e,t,n){return void 0===e&&(e=!0),void 0===t&&(t="fullscreen"),void 0===n&&(n=!1),Object(i.b)(this,void 0,Promise,(function(){var o=this;return Object(i.d)(this,(function(s){return ge&&(null==O?void 0:O.isPopupPage(ge))?[2,Ie.showCustomAuthenticationDialog(ge,n)]:[2,new Promise((function(s,a){return Object(i.b)(o,void 0,void 0,(function(){var o,c;return Object(i.d)(this,(function(u){switch(u.label){case 0:return Ae.assignRequestAuthenticationRejection(a),o={displayMode:t,language:l.userLanguage,isCloseable:e,smCollectionId:R,biVisitorId:B,svSession:_,metaSiteId:J,isSocialLoginGoogleEnabled:le,isSocialLoginFacebookEnabled:!F&&ue,isSocialAuthSupported:te,isEmailLoginEnabled:!F,isCommunityInstalled:N,joinCommunityCheckedByDefault:pe,isTermsOfUseNeeded:!(!(null==de?void 0:de.enabled)||!z.termsOfUse),isPrivacyPolicyNeeded:!(!(null==be?void 0:be.enabled)||!z.privacyPolicy),isCodeOfConductNeeded:!(!(null==me?void 0:me.enabled)||!z.codeOfConduct),termsOfUseLink:z.termsOfUse,privacyPolicyLink:z.privacyPolicy,codeOfConductLink:z.codeOfConduct,useGoogleSdk:Ee},c={onCloseDialogCallback:function(){ye.hideDialog(),ke.closingDialog("SignUpDialog",t),Ae.rejectAuthenticationRequest()},submit:function(e,o,a){var c="boolean"==typeof a?a:a.isCommunityChecked,u="boolean"==typeof a||null==a?void 0:a.recaptchaToken;r.interactionStarted(S.b.DEFAULT_SIGNUP),ke.emailAuthSubmitClicked("SignUpDialog",t);var l=c?S.d.PUBLIC:S.d.PRIVATE;return Ie.register(e,o,void 0,l,void 0,n,u).then((function(e){r.interactionEnded(S.b.DEFAULT_SIGNUP);var t=e.member,o=e.sessionToken,a=e.pages;o&&(ye.hideDialog(),s(Object(i.a)({member:t,sessionToken:o},n?{pages:a}:{})))})).catch((function(e){throw Object(j.e)(e)&&r.interactionEnded(S.b.DEFAULT_SIGNUP),e}))},onSwitchDialogLinkClick:function(){Ie.showLoginDialog(e,t,n).then(s,(function(){Ae.rejectAuthenticationRequest()}))},onTokenMessage:function(e,t,o){void 0===o&&(o=!1);var i=o?"PUBLIC":"PRIVATE";return Ie.handleOauthToken(e,t,"memberLoginDialog",i,n).then((function(e){ye.hideDialog(),s(e)}))},onBackendSocialLogin:function(e,t){return Ie.handleSocialLoginResponse(e,t,n).then((function(e){ye.hideDialog(),s(e)}))},getHostReadyPayload:function(){return{visitorId:B,svSession:_}}},ke.loginOrSignUpDialogLoaded("SignUpDialog",t),[4,ye.displayDialog("SignUpDialog",o,c,Pe())];case 1:return u.sent(),Ie.closeCustomAuthenticationDialogs(!0),[2]}}))}))}))]}))}))},showNotificationDialog:function(e,t,n,o,r){return void 0===o&&(o=function(){return 0}),void 0===r&&(r=function(){return 0}),Object(i.b)(this,void 0,void 0,(function(){var s,a;return Object(i.d)(this,(function(i){switch(i.label){case 0:return s={isCloseable:!0,title:e,description:t,okButtonText:n},a={onCloseDialogCallback:function(){ke.closingDialog("NotificationDialog"),ye.hideDialog(),r()},onOkButtonClick:function(){ye.hideDialog(),o()}},[4,ye.displayDialog("NotificationDialog",s,a)];case 1:return i.sent(),[2]}}))}))},showConfirmationEmailDialog:function(e,t){return void 0===t&&(t=!0),Object(i.b)(this,void 0,void 0,(function(){var n,o;return Object(i.d)(this,(function(r){switch(r.label){case 0:return n={isCloseable:!0,isSignUp:t},o={onCloseDialogCallback:function(){ke.closingDialog("ConfirmationEmailDialog"),ye.hideDialog()},onResendConfirmationEmail:function(){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(t){switch(t.label){case 0:return[4,Ie.resendEmailVerification(e)];case 1:return t.sent(),[4,Ie.showConfirmationEmailDialog(e,!1)];case 2:return t.sent(),[2]}}))}))}},[4,ye.displayDialog("ConfirmationEmailDialog",n,o)];case 1:return r.sent(),[2]}}))}))},showCustomAuthenticationDialog:function(e,t){return void 0===t&&(t=!1),Object(i.b)(this,void 0,Promise,(function(){var n=this;return Object(i.d)(this,(function(o){if(!O)throw new Error("popup unavailable");return[2,new Promise((function(o,r){return Object(i.b)(n,void 0,void 0,(function(){var n,s=this;return Object(i.d)(this,(function(a){switch(a.label){case 0:return n=Ie.registerToUserLogin((function(){return Object(i.b)(s,void 0,void 0,(function(){var r,s,a,c;return Object(i.d)(this,(function(u){switch(u.label){case 0:return r=o,s=[{member:ve,sessionToken:Oe}],t?(c={},[4,Ie.authorizeMemberPagesBySignedInstance(fe)]):[3,2];case 1:return c.pages=u.sent(),a=c,[3,3];case 2:a={},u.label=3;case 3:return r.apply(void 0,[i.a.apply(void 0,s.concat([a]))]),Ie.unRegisterToUserLogin(n),O.getCurrentPopupId()===e&&O.closePopupPage(),[2]}}))}))})),[4,Ae.openPopupPage(e,r,(function(){Ie.unRegisterToUserLogin(n)}))];case 1:return a.sent(),ye.hideDialog(),[2]}}))}))}))]}))}))},closeCustomAuthenticationDialogs:function(e){return void 0===e&&(e=!1),Object(i.b)(this,void 0,void 0,(function(){var t;return Object(i.d)(this,(function(n){switch(n.label){case 0:return(t=null==O?void 0:O.getCurrentPopupId())&&[ge,he].includes(t)?(e&&Ae.preventCustomPopupCloseCallback(),[4,O.closePopupPage()]):[3,2];case 1:n.sent(),Ae.allowCustomPopupCloseCallback(),n.label=2;case 2:return[2]}}))}))},getForgotPasswordToken:function(){return new URL(Object(g.e)(d)?s.requestUrl:location.href).searchParams.get("forgotPasswordToken")},shouldDisplayWelcomeDialog:function(){return q&&H},appWillMount:function(){switch(new URL(s.requestUrl).searchParams.get("showDialog")){case"MemberLoginDialog":Ie.showLoginDialog();break;case"SignUpDialog":Ie.showSignUpDialog();break;case"RequestPasswordResetDialog":Ie.promptForgotPassword();break;case"ResetPasswordDialog":Ie.showResetPasswordDialog("faketoken");break;case"WelcomeDialog":Ie.showWelcomeDialog();break;case"NoPermissionsToPageDialog":Ie.showNoPermissionsToPageDialog();break;case"NotificationDialog":Ie.showNotificationDialog("title","description","ok");break;case"ConfirmationEmailDialog":Ie.showConfirmationEmailDialog("fakemember")}},pageWillUnmount:function(e){var t=e.pageId;[ge,he].includes(t)||ye.hideDialog()},getSocialAuthComponentProps:function(){return Object(j.a)({config:e,viewerModel:s,sessionManager:a,handleOauthToken:Ie.handleOauthToken,handleSocialLoginResponse:Ie.handleSocialLoginResponse})}};return n.update((function(){return{shouldShowRenderingBlockingDialogs:function(){return!(!Ie.getForgotPasswordToken()&&!Ie.shouldDisplayWelcomeDialog())},showRenderingBlockingDialogs:function(){var e=Ie.getForgotPasswordToken();return e?Ie.showResetPasswordDialog(e):Ie.shouldDisplayWelcomeDialog()?Ie.showWelcomeDialog():void 0}}})),Ie})),A=n(364),I=n(377),R=n(378),_=Object(o.h)([P.b],(function(e){return{getTpaHandlers:function(){var t=this,n=function(n,o,r){return Object(i.b)(t,void 0,Promise,(function(){var t,n,o,s;return Object(i.d)(this,(function(i){switch(i.label){case 0:return[4,e.getMemberDetails()];case 1:return(t=i.sent())?(null===(n=r.appClientSpecMapData)||void 0===n?void 0:n.isWixTPA)?[2,{attributes:{firstName:null!==(o=t.firstName)&&void 0!==o?o:"",lastName:null!==(s=t.lastName)&&void 0!==s?s:"",privacyStatus:t.profilePrivacyStatus},name:t.memberName,email:t.loginEmail,id:t.id,owner:t.owner,status:t.status}]:[2,{id:t.id,owner:t.owner,status:t.status}]:[2,null]}}))}))},o=function(n,o){return void 0===o&&(o={}),Object(i.b)(t,void 0,Promise,(function(){var t,n,r;return Object(i.d)(this,(function(i){switch(i.label){case 0:return[4,e.promptLogin({mode:o.mode,modal:o.modal})];case 1:return t=i.sent().member,[2,{attributes:{firstName:null!==(n=t.firstName)&&void 0!==n?n:"",lastName:null!==(r=t.lastName)&&void 0!==r?r:"",privacyStatus:t.profilePrivacyStatus},name:t.memberName,email:t.loginEmail,id:t.id,owner:t.owner,status:t.status}]}}))}))};return{currentMember:n,smCurrentMember:n,logOutCurrentMember:Object(R.a)(["site"],(function(t,n){e.logout(null==n?void 0:n.url)})),requestLogin:Object(R.a)(["site"],o),smRequestLogin:Object(R.a)(["site"],o)}}}})),M=Object(o.h)([P.b,Object(o.f)(r.d,P.c),c.b],(function(e,t,n){var o=t.componentIds;return{pageWillMount:function(){return Object(i.b)(this,void 0,void 0,(function(){var t;return Object(i.d)(this,(function(r){return t=o.reduce((function(t,n){var o,r=e.getSocialAuthComponentProps();return Object(i.a)(Object(i.a)({},t),((o={})[n]=r,o))}),{}),n.update(t),[2]}))}))}}})),U=Object(o.h)([Object(o.f)(r.b,P.c)],(function(e){return{handle:function(t){return Object(i.b)(void 0,void 0,void 0,(function(){var n,o,r;return Object(i.d)(this,(function(i){return n=e.get(),o=n.shouldShowRenderingBlockingDialogs,r=n.showRenderingBlockingDialogs,o()?(r(),[2,null]):[2,t]}))}))}}})),N=function(e){e(P.b,A.a.AppWillMountHandler,A.a.AppDidMountHandler).to(E),e(p.g.BlockingDialogs).to(U)},x=function(e){e(I.a).to(_),e(A.a.PageWillMountHandler).to(M),e(A.a.PageWillUnmountHandler).to(Object(o.h)([P.b],(function(e){return{pageWillUnmount:function(t){return e.pageWillUnmount(t)}}})))}}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/siteMembers.9e1a6cad.chunk.min.js.map