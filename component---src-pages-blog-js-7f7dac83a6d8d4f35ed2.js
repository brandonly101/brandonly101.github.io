(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u}),a.d(t,"pageQuery",function(){return p});var n=a(7),r=a.n(n),o=a(0),c=a.n(o),i=a(157),l=a(159),s=a(163),d=a(146),m=a.n(d),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){for(var e=this.props.data.allMarkdownRemark.edges,t=[],a=0;a<e.length;a++){var n=e[a].node,r=c.a.createElement("div",{key:a,className:m.a.blogDescription},c.a.createElement(i.a,{to:n.frontmatter.path},c.a.createElement("div",{className:m.a.title},n.frontmatter.title),c.a.createElement("div",{className:m.a.date},n.frontmatter.date),c.a.createElement("div",{className:m.a.content,dangerouslySetInnerHTML:{__html:"<p>"+n.excerpt+"</p>"}})),c.a.createElement("div",{className:m.a.blogDivider}));t.push(r)}return c.a.createElement(s.a,null,c.a.createElement(l.a,{title:"Blog",keywords:["portfolio","react","graphics","games"]}),c.a.createElement("div",{className:m.a.blogMiniLanding}),t,c.a.createElement("div",{className:m.a.blogSpacer}))},t}(c.a.Component),p="796907091"},157:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=a(32),l=a.n(i);a.d(t,"a",function(){return l.a});a(158);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},158:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},159:function(e,t,a){"use strict";var n=a(160),r=a(0),o=a.n(r),c=a(4),i=a.n(c),l=a(166),s=a.n(l),d=a(157);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,i=e.title;return o.a.createElement(d.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"Home"!==i?"%s - "+e.site.siteMetadata.title:""+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=m;var u="4017075492"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Brandon Ly",description:"Portfolio",author:"Brandon Ly"}}}}},161:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=a(54),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Brandon Ly"}}}}},163:function(e,t,a){"use strict";var n=a(162),r=a(0),o=a.n(r),c=a(4),i=a.n(c),l=a(157),s=a(164),d=a(167),m=a(168),u=(a(169),a(33)),p=a.n(u),f=a(7),E=a.n(f),v=a(143),h=a.n(v),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isScrolled:!1},a.scrollHandler=a.scrollHandler.bind(p()(a)),a}E()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.scrollHandler)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandler)},a.scrollHandler=function(e){Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)>0?this.setState({isScrolled:!0}):this.setState({isScrolled:!1})},a.render=function(){var e=[h.a.headerContainer,this.state.isScrolled?h.a.headerScrolled:""].join(" ");return o.a.createElement("div",{className:e},o.a.createElement("div",{className:h.a.header},o.a.createElement("div",{className:h.a.logo},o.a.createElement("a",{href:"/"},o.a.createElement("div",{className:h.a.title},o.a.createElement("div",{className:h.a.main},"Brandon Ly"),o.a.createElement("div",{className:h.a.sub},"Game Developer and Software Engineer")))),o.a.createElement("div",{className:h.a.menu},o.a.createElement("div",{className:h.a.elem},o.a.createElement(l.a,{to:"/"},"Home")),o.a.createElement("div",{className:h.a.elem},o.a.createElement(l.a,{to:"/blog/"},"Blog")),o.a.createElement("div",{className:h.a.elem},o.a.createElement(l.a,{to:"/about/"},"About")))))},t}(o.a.Component),y=a(165),b=a(144),w=a.n(b),N=function(e){function t(){return e.apply(this,arguments)||this}return E()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"footer-container"},o.a.createElement("div",{className:w.a.footer},o.a.createElement("div",{className:w.a.copyright},o.a.createElement(y.a,{icon:"copyright"})," 2019 Brandon Ly"),o.a.createElement("div",{className:w.a.contact},o.a.createElement("a",{href:"mailto:brandonly@live.com",target:"_blank",rel:"noopener noreferrer",className:w.a.contactIcon},o.a.createElement(y.a,{icon:"envelope"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/brandon-ly-1a412b73",target:"_blank",rel:"noopener noreferrer",className:w.a.contactIcon},o.a.createElement(y.a,{icon:["fab","linkedin"]})),o.a.createElement("a",{href:"https://www.github.com/brandonly101",target:"_blank",rel:"noopener noreferrer",className:w.a.contactIcon},o.a.createElement(y.a,{icon:["fab","github"]})))))},t}(o.a.Component);s.b.add(d.b),s.b.add(d.a),s.b.add(d.c),s.b.add(d.d),s.b.add(m.b),s.b.add(m.a);var k=function(e){var t=e.children;return o.a.createElement(l.b,{query:"2924840780",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("main",null,t),o.a.createElement(N,null))},data:n})};k.propTypes={children:i.a.node.isRequired};t.a=k}}]);
//# sourceMappingURL=component---src-pages-blog-js-7f7dac83a6d8d4f35ed2.js.map