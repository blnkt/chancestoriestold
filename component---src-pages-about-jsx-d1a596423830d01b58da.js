(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),s=a.n(i),o=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).isEven=function(e){return e%2==0?"left":"right"},t}return s()(t,e),t.prototype.render=function(){var e=this;return console.log(this.props.events),r.a.createElement("ul",{className:"timeline"},this.props.events.map(function(t,a){return r.a.createElement("li",{className:e.isEven(a),key:a},r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,t.date),r.a.createElement("p",null,t.content)))}))},t}(r.a.Component),c=a(153),u=a(151),l=[{date:"2016",content:"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam..."},{date:"2015",content:"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam..."},{date:"2014",content:"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam..."},{date:"2013",content:"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam..."}];t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(u.a,{title:"About"}),r.a.createElement(o,{events:l}))}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(146),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(148),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Chance Stories Told",menuLinks:[{name:"home",link:"/"},{name:"about",link:"/about"},{name:"star wars",link:"/sw"},{name:"iss",link:"/iss"}]}}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(52),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},151:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=a(157),u=a.n(c),l=a(147);function m(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title;return i.a.createElement(l.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m;var d="1025518380"},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Chance Stories Told",description:"Explorations.",author:"Blake Mason"}}}}},153:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=a(147),u=(a(155),a(154),a(7)),l=a.n(u),m=a(156),d=a.n(m),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=function(){var e=a.state.hamburgerActive;a.setState({hamburgerActive:!e})},a.state={hamburgerActive:!1},a}return l()(t,e),t.prototype.render=function(){var e=d()({"hamburger-box":!0,"button-unstyled":!0,active:this.state.hamburgerActive}),t=d()({"main-nav":!0,active:this.state.hamburgerActive}),a=d()({"site-title":!0,active:this.state.hamburgerActive});return i.a.createElement("div",{className:"background-primary"},i.a.createElement("header",{className:"main-header"},i.a.createElement("h1",{className:a},i.a.createElement(c.Link,{to:"/"},i.a.createElement("span",{className:"desktop-only"},this.props.siteTitle),i.a.createElement("span",{className:"mobile-only"},"CST"))),i.a.createElement("nav",{className:t},this.props.menuLinks.map(function(e){return i.a.createElement(c.Link,{className:"nav-item",key:e.name,to:e.link},e.name)})),i.a.createElement("button",{className:e,onClick:this.onClick},i.a.createElement("div",{className:"hamburger-inner"}))))},t}(i.a.Component);p.propTypes={siteTitle:o.a.string,menuLinks:o.a.array,siteTitleMobile:o.a.string};var h=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"3436215879",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{siteTitle:"Chance Stories Told",siteTitleMobile:"CST",menuLinks:e.site.siteMetadata.menuLinks}),i.a.createElement("div",null,i.a.createElement("main",null,t),i.a.createElement("div",{className:"background-primary"},i.a.createElement("footer",{className:"main-footer"},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))))},data:n})};h.propTypes={children:o.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-about-jsx-d1a596423830d01b58da.js.map