(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{156:function(e,t,a){"use strict";a.r(t);var i=a(7),r=a.n(i),n=a(0),o=a.n(n),s=a(202),l=a(157),c=a(163),d=a(159),p=(a(210),a(33)),m=a.n(p),h=a(215),u="\nprecision highp float;\n\nattribute vec4 ringInstPos;\n\nvarying vec3 worldPos;\n\nvoid main()\n{\n    worldPos = position;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(ringInstPos.xyz + ringInstPos.a * position, 1.0);\n}\n",g="\nprecision highp float;\n\nuniform float fogNear;\nuniform float fogFar;\nuniform vec3 fogColor;\nuniform vec3 color;\n\nvarying vec3 worldPos;\n\nvoid main()\n{\n    float lambertian = dot(normalize(worldPos), normalize(cameraPosition));\n    gl_FragColor = vec4(color * lambertian * 0.175 + color * 0.825, 1.0);\n\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep(fogNear, fogFar, depth);\n\n    gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);\n}\n",f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={x:0,y:0,isScrolled:!1},a.resize=a.resize.bind(m()(a)),a.start=a.start.bind(m()(a)),a.stop=a.stop.bind(m()(a)),a.update=a.update.bind(m()(a)),a.scrollHandler=a.scrollHandler.bind(m()(a)),a}r()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=document.body.clientWidth,t=window.innerHeight,i=new h.k,r=new h.j(65,e/t,.03,1e3),n=new h.p({antialias:!0});n.setClearColor("#000000"),n.setSize(e,t),this.scene=i,this.camera=r,this.renderer=n;var o=(new h.c).load([a(216),a(217),a(218),a(219),a(220),a(221)]);i.background=o,i.fog=new h.e(new h.b("#000304"),100,1e3);var s=new h.a(16777215,.8),l=new h.d(16777215,.2);l.position.set(0,0,1),i.add(s),i.add(l),this.ambientLight=s,this.dirLight=l;var c=(new h.n).load(a(222)),d=new h.h(new h.m(1,100,100),new h.i({color:"#ffef8c",shininess:0,normalMap:c}));d.rotation.z-=Math.PI/12;d.scale.set(50,50,50),i.add(d);for(var p=new h.l({uniforms:{fogColor:{type:"c",value:i.fog.color},fogNear:{type:"f",value:i.fog.near},fogFar:{type:"f",value:i.fog.far},color:{type:"c",value:new h.b("#d1e8ff")}},vertexShader:u,fragmentShader:g,transparent:!1}),m=new h.l({uniforms:{fogColor:{type:"c",value:i.fog.color},fogNear:{type:"f",value:i.fog.near},fogFar:{type:"f",value:i.fog.far},color:{type:"c",value:new h.b("#ffef8c")}},vertexShader:u,fragmentShader:g,transparent:!1}),f=[],b=0;b<8;b++){for(var v=100*(b+1)+15,y=[],w=7168*Math.cos(.675*b/8*Math.PI/2),E=0;E<w;E++){var T=2*Math.random()*Math.PI,j=Math.cos(T),S=Math.sin(T),k=24*(Math.random()>.5?1:-1)*Math.pow(Math.random(),.425),L=v+k,C=2*Math.random()*Math.PI,P=Math.random()*Math.PI,M=k*Math.sin(P)*Math.cos(C),x=k*Math.sin(P)*Math.sin(C),N=k*Math.cos(P);y.push(j*L+M),y.push(S*L+x),y.push(N),y.push(1.75*(1-.65*Math.pow(Math.abs(k)/24,2.25)))}var I=5;switch(b){case 2<=b&&b<4:I=4;break;case 4<=b&&b<8:I=3;break;default:I=5}var D=new h.m(1,I,I-1),A=new h.g;A.copy(D);var G=new h.h(A,b%2==0?p:m);i.add(G),f.push(G),A.addAttribute("ringInstPos",new h.f(new Float32Array(y),4)),b%2!=0&&G.rotateOnAxis(new h.o(1,0,0),Math.PI/2)}this.sphereCenter=d,this.rings=f,this.radius=r.position.z=175,this.loopingPi=0,this.ringCount=8,this.container.appendChild(this.renderer.domElement),this.start(),window.addEventListener("resize",this.resize.bind(this)),window.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("scroll",this.scrollHandler)},i.componentWillUnmount=function(){this.stop(),this.container.removeChild(this.renderer.domElement),window.removeEventListener("resize",this.resize),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("scroll",this.scrollHandler)},i.start=function(){this.frameId||(this.frameId=requestAnimationFrame(this.update))},i.stop=function(){cancelAnimationFrame(this.frameId)},i.update=function(){this.loopingPi+=.016666666666*Math.PI/2,this.loopingPi=this.loopingPi%(2*Math.PI),this.sphereCenter.rotateOnAxis(new h.o(0,1,0),-.01);for(var e=this.rings.length,t=new h.o(0,0,1),a=0;a<e;a++){var i=.001*(a%2==0?-1:1)*1/(a+1)*(a%4==0||a%4==1?1:-1);this.rings[a].rotateOnAxis(t,i)}this.state.isScrolled||this.renderer.render(this.scene,this.camera),this.frameId=window.requestAnimationFrame(this.update)},i.resize=function(){var e=document.body.clientWidth,t=window.innerHeight,a=this.camera,i=this.renderer;a.aspect=e/t,a.updateProjectionMatrix(),i.setSize(e,t)},i.onMouseMove=function(e){var t=document.body.clientWidth,a=window.innerHeight,i=(e.x/t-.5)*t/a*Math.PI/5,r=e.y/a*Math.PI/2+Math.PI/4,n=this.radius,o=n*Math.sin(r)*Math.sin(i),s=n*Math.cos(r),l=n*Math.sin(r)*Math.cos(i);this.camera.position.set(o,s,l),this.dirLight.position.set(o,s,l),this.camera.lookAt(0,0,0)},i.scrollHandler=function(e){var t=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop);this.setState({isScrolled:t>window.innerHeight})},i.render=function(){var e=this;return o.a.createElement("div",{ref:function(t){return e.container=t}})},t}(o.a.Component),b=a(243),v=a(244),y=a(245),w=a(223),E=a(152),T=a.n(E),j=(a(145),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){for(var e=[],t=0;t<w.length;t++){for(var i="ssc"===w[t].shortTitle?o.a.createElement("div",{className:T.a.ssc},o.a.createElement("img",{src:w[t].img,alt:""})):o.a.createElement("img",{src:a(224)("./"+w[t].img),alt:""}),r=o.a.createElement(b.a,{xs:12,md:4},o.a.createElement("div",{className:T.a.img},i)),n=[],s=0;s<w[t].descList.length;s++)n.push(o.a.createElement("li",{key:s},w[t].descList[s]));for(var l=[],c=0;c<w[t].skills.length;c++)l.push(o.a.createElement("li",{key:c,className:w[t].skills[c].shortTitle},w[t].skills[c].title));var d=o.a.createElement(b.a,{xs:12,md:8},o.a.createElement("div",{className:T.a.title},w[t].title),o.a.createElement("div",{className:T.a.subtitle},o.a.createElement(v.a,null,o.a.createElement(b.a,{xs:12,sm:6},w[t].company),o.a.createElement(b.a,{xs:12,sm:6,className:T.a.date},w[t].dateStart," - ",w[t].dateEnd))),o.a.createElement("div",{className:T.a.description},w[t].description,o.a.createElement("ul",null,n)),o.a.createElement("div",{className:"skills"},o.a.createElement("ul",null,l)));e.push(o.a.createElement(v.a,{key:t,className:T.a.job},r,d))}return o.a.createElement("div",{id:"work",className:T.a.work},o.a.createElement("div",{className:T.a.heading},"Work Experience"),o.a.createElement(y.a,{fluid:!0},e))},t}(o.a.Component)),S=a(165),k=a(229),L=a(153),C=a.n(L),P=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){for(var e=this.props.projectData,t=[],i=0;i<e.descList.length;i++)t.push(o.a.createElement("li",{key:i},e.descList[i]));for(var r=[],n=0;n<e.skills.length;n++)r.push(o.a.createElement("li",{key:n,className:e.skills[n].shortTitle},e.skills[n].title));return o.a.createElement("div",{className:C.a.contentInfo},o.a.createElement("div",{className:C.a.title},e.title),o.a.createElement("div",{className:C.a.subtitle},o.a.createElement(v.a,null,o.a.createElement(b.a,{xs:12,sm:6},e.projectType),o.a.createElement(b.a,{xs:12,sm:6,className:C.a.date},e.dateStart," - ",e.dateEnd))),o.a.createElement("div",{className:C.a.description},e.description," ","liveSite"===e.footage.type?o.a.createElement("a",{href:e.footage.src,className:C.a.liveSite,target:"_blank",rel:"noopener noreferrer"},"Live site"):null," ","paper"===e.footage.type?o.a.createElement("a",{href:a(230),className:C.a.liveSite,target:"_blank",rel:"noopener noreferrer"},"Research paper"):null," ",""!==e.src?o.a.createElement("a",{href:e.src,className:C.a.src,target:"_blank",rel:"noopener noreferrer"},"Source code"):null,o.a.createElement("ul",null,t)),o.a.createElement("div",{className:"skills"},o.a.createElement("ul",null,r)))},t}(o.a.Component),M=function(e){function t(t){var a;a=e.call(this,t)||this;for(var i=[],r=0;r<9;r++)i.push(!1);return a.state={visibleRow:[!1,!1,!1],visibleProject:i,projectToShow:[k[0],k[0],k[0]]},a}r()(t,e);var i=t.prototype;return i.handleClick=function(e,t,a){return function(i){i.preventDefault();var r=e.state;r.visibleProject[3*t+a]?(r.visibleProject[3*t]=!1,r.visibleProject[3*t+1]=!1,r.visibleProject[3*t+2]=!1):(r.visibleProject[3*t]=!1,r.visibleProject[3*t+1]=!1,r.visibleProject[3*t+2]=!1,r.visibleProject[3*t+a]=!0,r.projectToShow[t]=k[3*t+a]),r.visibleRow[t]=r.visibleProject[3*t]||r.visibleProject[3*t+1]||r.visibleProject[3*t+2],e.setState(r)}},i.render=function(){for(var e=[],t=0;t<3;t++){for(var i=[],r=0;r<3;r++){var n={backgroundImage:'url("'+a(188)("./"+k[3*t+r].img)+'")'},s=[C.a.box,this.state.visibleProject[3*t+r]?C.a.boxSelected:"",C.a.img].join(" "),l=o.a.createElement("div",{key:3*t+r,className:s,style:n,onClick:this.handleClick(this,t,r)},o.a.createElement("div",{className:C.a.info},o.a.createElement("div",{className:C.a.title},k[3*t+r].title),o.a.createElement("div",{className:C.a.subtitle},k[3*t+r].projectType),this.state.visibleProject[3*t+r]?o.a.createElement(S.a,{icon:"angle-up",size:"lg"}):o.a.createElement(S.a,{icon:"angle-down",size:"lg"})));i.push(l)}var c=o.a.createElement("div",{key:2*t,className:C.a.grid},i),d=[C.a.dropdown,this.state.visibleRow[t]?C.a.dropdownActive:""].join(" "),p=this.state.projectToShow[t].footage,m=o.a.createElement("div",{key:2*t+1,className:d},o.a.createElement(y.a,null,o.a.createElement(v.a,{className:C.a.project},o.a.createElement(b.a,{xs:12,md:6},o.a.createElement("div",{className:C.a.img},"embeddedYoutube"===p.type?o.a.createElement("iframe",{title:"YouTube",src:p.src,frameBorder:0,allowFullScreen:"allowfullscreen"}):o.a.createElement("img",{src:a(188)("./"+this.state.projectToShow[t].img),alt:""}))),o.a.createElement(b.a,{xs:12,md:6,className:C.a.content},o.a.createElement(P,{key:0,projectData:this.state.projectToShow[t]})))));e.push(c),e.push(m)}for(var h=[],u=9;u<k.length;u++)h.push(o.a.createElement(P,{key:u,projectData:k[u]}));return o.a.createElement("div",{className:C.a.projects},o.a.createElement("div",{className:C.a.main},o.a.createElement("div",{className:C.a.heading},"Projects"),o.a.createElement("div",{className:C.a.headingDesc},"A collection of projects that I have worked on from college to now.")),o.a.createElement("div",{id:"projects"}),e,o.a.createElement("div",{className:C.a.other},o.a.createElement("div",{className:C.a.otherHeading},"Other Projects"),o.a.createElement(y.a,{fluid:!0},o.a.createElement(v.a,null,o.a.createElement(b.a,{xs:12,className:C.a.otherProject},h)))))},t}(o.a.Component),x=a(154),N=a.n(x),I=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:t.height},a}r()(t,e);var i=t.prototype;return i.componentDidMount=function(){this.setState({height:window.innerHeight})},i.componentDidUpdate=function(){window.scrollTo(0,0)},i.render=function(){var e=this.state.height<600?null:o.a.createElement("img",{src:a(242),alt:""});return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"LandingBuffer",className:N.a.landingBuffer},o.a.createElement(f,null),o.a.createElement("div",{id:"Landing",className:N.a.landing},o.a.createElement("div",{className:N.a.content},o.a.createElement("div",{className:N.a.image},e),o.a.createElement("div",{className:N.a.paragraph},"Welcome! I am a software engineer who loves all things software, games and computer graphics!"),o.a.createElement("div",{className:N.a.links},o.a.createElement("ul",null,o.a.createElement("li",{key:0},o.a.createElement(s.Link,{href:"",to:"projects",rel:"noopener noreferrer",smooth:!0,duration:350,offset:-100},"Projects")),o.a.createElement("li",{key:1,className:N.a.liSpacer}),o.a.createElement("li",{key:2},o.a.createElement(s.Link,{href:"",to:"work",rel:"noopener noreferrer",smooth:!0,duration:350,offset:-100},"Work Experience")),o.a.createElement("li",{key:3,className:N.a.liSpacer}),o.a.createElement("li",{key:4},o.a.createElement(l.a,{to:"/blog",rel:"noopener noreferrer"},"Blog"))))))),o.a.createElement("div",{className:N.a.bodyContent},o.a.createElement(M,null),o.a.createElement(j,null)))},t}(o.a.Component);t.default=function(){return o.a.createElement(c.a,null,o.a.createElement(d.a,{title:"Home",keywords:["portfolio","react","graphics","games"]}),o.a.createElement(I,null))}},157:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var i=a(0),r=a.n(i),n=a(4),o=a.n(n),s=a(32),l=a.n(s);a.d(t,"a",function(){return l.a});a(158);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},158:function(e,t,a){var i;e.exports=(i=a(161))&&i.default||i},159:function(e,t,a){"use strict";var i=a(160),r=a(0),n=a.n(r),o=a(4),s=a.n(o),l=a(166),c=a.n(l),d=a(157);function p(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return n.a.createElement(d.b,{query:m,render:function(e){var i=t||e.site.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"Home"!==s?"%s - "+e.site.siteMetadata.title:""+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:s},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:i}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:i})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=p;var m="4017075492"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Brandon Ly",description:"Portfolio",author:"Brandon Ly"}}}}},161:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),o=a.n(n),s=a(54),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Brandon Ly"}}}}},163:function(e,t,a){"use strict";var i=a(162),r=a(0),n=a.n(r),o=a(4),s=a.n(o),l=a(157),c=a(164),d=a(167),p=a(168),m=(a(169),a(33)),h=a.n(m),u=a(7),g=a.n(u),f=a(143),b=a.n(f),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isScrolled:!1},a.scrollHandler=a.scrollHandler.bind(h()(a)),a}g()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.scrollHandler)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandler)},a.scrollHandler=function(e){Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)>0?this.setState({isScrolled:!0}):this.setState({isScrolled:!1})},a.render=function(){var e=[b.a.headerContainer,this.state.isScrolled?b.a.headerScrolled:""].join(" ");return n.a.createElement("div",{className:e},n.a.createElement("div",{className:b.a.header},n.a.createElement("div",{className:b.a.logo},n.a.createElement("a",{href:"/"},n.a.createElement("div",{className:b.a.title},n.a.createElement("div",{className:b.a.main},"Brandon Ly"),n.a.createElement("div",{className:b.a.sub},"Software and Graphics Engineer")))),n.a.createElement("div",{className:b.a.menu},n.a.createElement("div",{className:b.a.elem},n.a.createElement(l.a,{to:"/"},"Home")),n.a.createElement("div",{className:b.a.elem},n.a.createElement(l.a,{to:"/blog/"},"Blog")),n.a.createElement("div",{className:b.a.elem},n.a.createElement(l.a,{to:"/about/"},"About")))))},t}(n.a.Component),y=a(165),w=a(144),E=a.n(w),T=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){return n.a.createElement("div",{className:"footer-container"},n.a.createElement("div",{className:E.a.footer},n.a.createElement("div",{className:E.a.copyright},n.a.createElement(y.a,{icon:"copyright"})," 2019 Brandon Ly"),n.a.createElement("div",{className:E.a.contact},n.a.createElement("a",{href:"mailto:brandonly@live.com",target:"_blank",rel:"noopener noreferrer",className:E.a.contactIcon},n.a.createElement(y.a,{icon:"envelope"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/brandon-ly-1a412b73",target:"_blank",rel:"noopener noreferrer",className:E.a.contactIcon},n.a.createElement(y.a,{icon:["fab","linkedin"]})),n.a.createElement("a",{href:"https://www.github.com/brandonly101",target:"_blank",rel:"noopener noreferrer",className:E.a.contactIcon},n.a.createElement(y.a,{icon:["fab","github"]})))))},t}(n.a.Component);c.b.add(d.b),c.b.add(d.a),c.b.add(d.c),c.b.add(d.d),c.b.add(p.b),c.b.add(p.a);var j=function(e){var t=e.children;return n.a.createElement(l.b,{query:"2924840780",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("main",null,t),n.a.createElement(T,null))},data:i})};j.propTypes={children:s.a.node.isRequired};t.a=j},188:function(e,t,a){var i={"./BladeQuest.jpg":231,"./CCLEDocs.jpg":232,"./Conquoria.jpg":233,"./DeathOfHen.jpg":234,"./Fisticuffs.jpg":235,"./FoodByte.jpg":236,"./OtherFishInSea.jpg":237,"./Rune.jpg":238,"./pbr.jpg":239,"./pbrOld.jpg":240,"./portfolioScreen.jpg":241};function r(e){var t=n(e);return a(t)}function n(e){var t=i[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(i)},r.resolve=n,e.exports=r,r.id=188},216:function(e,t,a){e.exports=a.p+"static/px-5c24b8b8dc0962c2e69b10713dcc627a.jpg"},217:function(e,t,a){e.exports=a.p+"static/nx-78048db9eaea9cf53a5f077325fab752.jpg"},218:function(e,t,a){e.exports=a.p+"static/py-7f69dcba54b34fed5f3ea62c9467c42c.jpg"},219:function(e,t,a){e.exports=a.p+"static/ny-33679d72b7c2f7a2fc8232eca01cc33b.jpg"},220:function(e,t,a){e.exports=a.p+"static/pz-6884a08dd62f18b1454922e4a55efc81.jpg"},221:function(e,t,a){e.exports=a.p+"static/nz-f3a830c40da340824fac415e10d29fd0.jpg"},222:function(e,t,a){e.exports=a.p+"static/flakes_n-c582e607cc65fd8b966cd1c81ef089a6.png"},223:function(e){e.exports=[{shortTitle:"bsg",title:"Associate Software Engineer",company:"Blind Squirrel Entertainment, Inc.",dateStart:"April 2017",dateEnd:"Jan 2019",description:"I worked as an associate software engineer, doing all kinds of gameplay, engine, and graphics programming.",descList:['Video Game - "Star Wars: Jedi Challenges" (C#, Unity 3D, AR/VR, iOS/Android) - Worked closely with game designers to flesh out and implement core gameplay mechanics. Worked with artists to implement various graphical effects through graphics and shader work (e.g. maintaining “hologram” effect shader, particle effects, UI elements). Optimized the game for high performance on mobile devices (e.g. implementing use of GPU instancing).','Video Game - "Borderlands: Game of the Year Edition" (Remaster) (C/C++, Unreal Engine 3, PS4/Xbox One/PC, DXGI, D3D11, HLSL) - Worked with artists to improve and resolve various miscellaneous graphical effects and issues through graphics engineering and shader work (e.g. tweaking shadow rendering, fixing depth-of-field effect issues). Implemented miscellaneous features and fixes (e.g. changing game systems from using a fixed FOV to a variable FOV, fixing fullscreen/windowed mode/resolution issues on PC via DXGI API, fixing VOIP issues).',"Video Game - Unreleased AAA First-Person Shooter Remaster (C/C++, Proprietary Engine, Ogg Vorbis) - Performed research and documentation for viable audio formats and VOIP APIs (i.e. implemented and tested them in the original codebase) that were of potential use for the remastered game. Profiled and benchmarked the game on a low-end PC to gauge playability on min. spec. PC hardware.",'Video Game - "Forklift Simulator 2019" (C#, Unity 3D, PC) - Added a graphical motion sickness reduction effect and new gameplay features (e.g. new forklifts to drive).'],descListLinks:["https://www.lenovo.com/us/en/jedichallenges",null,"https://store.steampowered.com/app/939450/Forklift_Simulator_2019/"],skills:[{shortTitle:"cplusplus",title:"C/C++"},{shortTitle:"csharp",title:"C#"},{shortTitle:"ue4",title:"Unreal Engine 3/4"},{shortTitle:"unity3d",title:"Unity 3D Game Engine"},{shortTitle:"ar",title:"Augmented Reality Game Development"},{shortTitle:"graphics",title:"3D Computer Graphics"},{shortTitle:"directx",title:"DirectX/Direct3D11 API"},{shortTitle:"glsl",title:"OpenGL Shading Language (GLSL)"},{shortTitle:"glsl",title:"High Level Shading Language (GLSL)"}],img:"blindsquirrelLogo.jpg"},{shortTitle:"workday",title:"Associate Software Engineering Intern, UI/UX",company:"Workday, Inc.",dateStart:"June 2016",dateEnd:"Sept 2016",description:"I interned at Workday where I designed and implemented a 3D data visualization in the main Workday web application.",descList:["3D data visualization maps company office data to their physical location on an interactive 3D globe.","Experimental feature with plans by the UI/UX team to refine for production for enterprise Workday users.","Interacted with senior developers and designers and participated in an Agile workflow to accomplish my work."],skills:[{shortTitle:"java",title:"Java"},{shortTitle:"gwt",title:"GWT"},{shortTitle:"parallax3d",title:"Parallax 3D"},{shortTitle:"javascript",title:"JavaScript"},{shortTitle:"webgl",title:"WebGL"},{shortTitle:"threejs",title:"Three.js"},{shortTitle:"glsl",title:"OpenGL Shading Language (GLSL)"}],img:"workdayLogo.png"},{shortTitle:"ssc",title:"Instructional Programmer",company:"UCLA Social Sciences Computing",dateStart:"June 2014",dateEnd:"March 2017",description:"I implemented features requested by professors and fixed bugs for UCLA's Common Collaborative Learning Environment (CCLE).",descList:["CCLE is a course management system web appplication used by all UCLA students and instructors to share course material, post in forums, take quizzes, and more."],skills:[{shortTitle:"php",title:"PHP"},{shortTitle:"mysql",title:"MySQL"},{shortTitle:"javascript",title:"JavaScript"},{shortTitle:"htmlcss",title:"HTML & CSS"},{shortTitle:"moodle",title:"Moodle Framework"}],img:"https://computing.sscnet.ucla.edu/wp-content/uploads/2013/04/ssc-logo-all-white-1.png"}]},224:function(e,t,a){var i={"./blindsquirrelLogo.jpg":225,"./workdayLogo.png":226};function r(e){var t=n(e);return a(t)}function n(e){var t=i[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(i)},r.resolve=n,e.exports=r,r.id=224},225:function(e,t,a){e.exports=a.p+"static/blindsquirrelLogo-6e59b13feea0282510769a4da3dbbd47.jpg"},226:function(e,t,a){e.exports=a.p+"static/workdayLogo-68d4be8fa4c87ac057a66d3ba5482b9e.png"},229:function(e){e.exports=[{shortTitle:"pbr",title:"WebGL Physically-based Renderer",projectType:"3D Computer Graphics Project",src:"https://github.com/brandonly101/webgl-physically-based-rendering",dateStart:"August 2015",dateEnd:"February 2019",description:"A 3D model physically-based renderer with adjustable material parameters for color, roughness, and metalness.",descList:["Features fully physically-based shading based on microfacet theory.","Also features specular image-based lighting and diffuse irradiance.","Implemented a 3D matrix math library, OBJ 3D model reader, a mini-material system, and normal mapping."],skills:[{shortTitle:"graphics",title:"3D Computer Graphics"},{shortTitle:"javascript",title:"JavaScript"},{shortTitle:"webgl",title:"WebGL"},{shortTitle:"glsl",title:"OpenGL Shading Language (GLSL)"}],img:"pbr.jpg",footage:{type:"liveSite",src:"https://brandonly101.github.io/webgl-physically-based-rendering/"}},{shortTitle:"conquoria",title:"Conquoria",projectType:"Augmented Reality Video Game",dateStart:"January 2016",dateEnd:"March 2016",description:"A village build-and-battle mobile game with elements of augmented reality that I developed with a team. Players gather resources, build villages, and face off against other villages.",descList:["Created and architected basic gameplay mechanics.","Integrated augmented reality gameplay features using the Vuforia API for the Unity 3D engine."],skills:[{shortTitle:"csharp",title:"C#"},{shortTitle:"unity3d",title:"Unity 3D Game Engine"},{shortTitle:"3dfiles",title:"3D Model Files"},{shortTitle:"graphics",title:"3D Computer Graphics"},{shortTitle:"ar",title:"Augmented Reality Game Development"},{shortTitle:"vuforia",title:"Vuforia"}],img:"Conquoria.jpg",footage:{type:"embeddedYoutube",src:"https://www.youtube.com/embed/CpitG-_7ZvI"},src:"https://github.com/brandonly101/conquoria"},{shortTitle:"rune",title:"Rune",projectType:"Web Application",dateStart:"April 2016",dateEnd:"June 2016",description:"An intuitive and student-focused Kanban project management tool. Developed as a part of a team for my university's senior capstone project.",descList:["Designed and develop the front-end framework using Sass, Bootstrap 3, and jQuery.","Implemented back-end features building on Express, a Node.js web application framework.","To use, log in as 'brandonly@live.com' and use the password 'test'."],skills:[{shortTitle:"htmlcss",title:"HTML & CSS"},{shortTitle:"javascript",title:"JavaScript"},{shortTitle:"jquery",title:"jQuery"},{shortTitle:"sass",title:"Sass"},{shortTitle:"jade",title:"Jade"},{shortTitle:"nodejs",title:"Node.js"},{shortTitle:"express",title:"Express"},{shortTitle:"mongodb",title:"MongoDB"}],img:"Rune.jpg",footage:{type:"liveSite",src:"https://rune130.herokuapp.com/"},src:"https://github.com/rzeng95/Rune"},{shortTitle:"fisticuffs",title:"Fisticuffs",projectType:"Virtual Reality Video Game",dateStart:"April 2015",dateEnd:"June 2015",description:"A first-person fistfighting game with elements of virtual reality that I developed with a partner. Players engage in 1v1 fights inside a lively tavern, facing opponents until their discombobulation gets too high.",descList:["Designed and developed the game mechanics and AI crowd behavior.","Integrated the Oculus DK2 and conformed the gameplay mechanics to best practices for virtual reality game development.","Designed the tavern level and lighting."],skills:[{shortTitle:"cplusplus",title:"C/C++"},{shortTitle:"ue4",title:"Unreal Engine 4"},{shortTitle:"ue4bp",title:"UE4 Blueprint Scripting"},{shortTitle:"VR",title:"Virtual Reality Game Development"},{shortTitle:"oculus",title:"Oculus Rift DK2"}],img:"Fisticuffs.jpg",footage:{type:"embeddedYoutube",src:"https://www.youtube.com/embed/Cu2_ynG56tM"},src:"https://github.com/brandonly101/ue4-fisticuffs"},{shortTitle:"bladequest",title:"Blade Quest",projectType:"3D Computer Graphics Project / Video Game",dateStart:"June 2015",dateEnd:"Sept 2015",description:"A small first-person sword-fighting video game and research project that experiments with realistic, comic book-like, and Pixar film-like visual styles.",descList:["Implemented various post-processing graphical effects to emulate the visual styles.","Effects include lighting and shading posterization, color posterization, screenspace edge detection, and resolution scaling.","Independent research done under the guidance of a professor."],skills:[{shortTitle:"cplusplus",title:"C/C++"},{shortTitle:"ue4",title:"Unreal Engine 4"},{shortTitle:"ue4bp",title:"UE4 Blueprint Scripting"},{shortTitle:"glsl",title:"OpenGL Shading Language (GLSL)"}],img:"BladeQuest.jpg",footage:{type:"paper",src:"/assets/ResearchPaperVideoGameVisualStyles.pdf"},src:"https://github.com/brandonly101/ue4-shaders-blade-quest"},{shortTitle:"deathOfHen",title:"The Little Hen and the Little Rooster",projectType:"3D Real-time Animation",dateStart:"January 2015",dateEnd:"March 2015",description:"A 3D Real-Time Animation that I created based on the Grimm Fairy Tale Death of the Little Hen.",descList:["Designed and scripted scenes to occur in the game engine based off of storyboards that I also created."],skills:[{shortTitle:"csharp",title:"C#"},{shortTitle:"unity3d",title:"Unity 3D Game Engine"},{shortTitle:"3dfiles",title:"3D Model Files"},{shortTitle:"graphics",title:"3D Computer Graphics"}],img:"DeathOfHen.jpg",footage:{type:"embeddedYoutube",src:"https://www.youtube.com/embed/rnnW0XOBviI"},src:"https://github.com/brandonly101/3DRTA-Death-of-Hen"},{shortTitle:"foodbyte",title:"FoodByte",projectType:"Hackathon Web Application",src:"https://github.com/michellekli/foodie",dateStart:"April 2016",dateEnd:"April 2016",description:"A fun, team-developed web application. Where Tinder meets Yelp, users say Yes to a dish, and FoodByte gives restaurant information for it, or No to it, and FoodByte cycles through other dishes.",descList:["Front-end design and development with HTML & CSS, JavaScript, and jQuery.","Interfaced with the Google Maps API with JavaScript."],skills:[{shortTitle:"htmlcss",title:"HTML & CSS"},{shortTitle:"javascript",title:"JavaScript"},{shortTitle:"jquery",title:"jQuery"},{shortTitle:"gmaps",title:"Google Maps API"}],img:"FoodByte.jpg",footage:{type:"liveSite",src:"http://michellekli.github.io/foodie/"}},{shortTitle:"ccledocs",title:"CCLEDocs Update",projectType:"SSC Project",src:"",dateStart:"July 2014",dateEnd:"August 2014",description:"A theme revamp of UCLA CCLE's documentation website that I worked on while working at UCLA Social Sciences Computing.",descList:["Front-end design and development with HTML & CSS, JavaScript, and jQuery.","Interfaced with the Google Maps API with JavaScript."],skills:[{shortTitle:"htmlcss",title:"HTML & CSS"},{shortTitle:"xml",title:"XML"},{shortTitle:"bootstrap3",title:"Bootstrap 3"},{shortTitle:"php",title:"PHP"},{shortTitle:"mediawiki",title:"MediaWiki"}],img:"CCLEDocs.jpg",footage:{type:"liveSite",src:"https://docs.ccle.ucla.edu/"}},{shortTitle:"cs174a",title:"Other Fish in the Sea",projectType:"3D Graphics Project",dateStart:"November 2014",dateEnd:"December 2014",description:"A small game that my group and I developed in WebGL and JavaScript for the term project for our 3D computer graphics class.",descList:["Structured the skeleton for the rendering of basic 3D shapes (i.e. spheres and cubes).","Implemented alpha blending."],skills:[{shortTitle:"htmlcss",title:"HTML & CSS"},{shortTitle:"javascript",title:"JavaScript"},{shortTitle:"webgl",title:"WebGL"},{shortTitle:"graphics",title:"3D Computer Graphics"}],img:"OtherFishInSea.jpg",footage:{type:"liveSite",src:"https://autekroy.github.io/The-Other-Fish-in-the-Sea/game.html"},src:"https://github.com/autekroy/The-Other-Fish-in-the-Sea"},{shortTitle:"portfolio",title:"Portfolio Website",projectType:"Web Page",dateStart:"August 2015",dateEnd:"Present",description:"My portfolio site, which is a project in and of itself. The portfolio lets me experiment not just in this website's development, but also its design.",descList:["Latest iteration uses Gatsby and React.js, since I wanted to learn how to use React.js."],skills:[{shortTitle:"htmlcss",title:"HTML & CSS"},{shortTitle:"javascript",title:"JavaScript"},{shortTitle:"reactjs",title:"React.js"},{shortTitle:"webgl",title:"WebGL"},{shortTitle:"threejs",title:"Three.js"}],img:"portfolioScreen.jpg",footage:{type:"liveSite",src:"https://brandonly101.github.io/"},src:"https://github.com/brandonly101/brandonly101.github.io"}]},230:function(e,t,a){e.exports=a.p+"static/ResearchPaperVideoGameVisualStyles-94530b9e0578ddfcc6c29caae98db3c3.pdf"},231:function(e,t,a){e.exports=a.p+"static/BladeQuest-d84926b5bcf2ba55a56b74cc9572be95.jpg"},232:function(e,t,a){e.exports=a.p+"static/CCLEDocs-397a79f16573acc6b6709dc5e8582d83.jpg"},233:function(e,t,a){e.exports=a.p+"static/Conquoria-cc1ede6f99c932f7fc444cbec85b25ee.jpg"},234:function(e,t,a){e.exports=a.p+"static/DeathOfHen-7f5c764af99a2de8a9d67d2646142b0a.jpg"},235:function(e,t,a){e.exports=a.p+"static/Fisticuffs-e65e6d85538b2800f7acd40be3acf16e.jpg"},236:function(e,t,a){e.exports=a.p+"static/FoodByte-d6bd660a12b471235e5dc553bf6c718f.jpg"},237:function(e,t,a){e.exports=a.p+"static/OtherFishInSea-a3acd8e1d923720071701116ad1932ab.jpg"},238:function(e,t,a){e.exports=a.p+"static/Rune-19289b964c86389e89680e02446c871e.jpg"},239:function(e,t,a){e.exports=a.p+"static/pbr-013997efb395cc392fb0973af7663fe2.jpg"},240:function(e,t,a){e.exports=a.p+"static/pbrOld-842385176b55204c27e872ca4fb0a8bd.jpg"},241:function(e,t,a){e.exports=a.p+"static/portfolioScreen-0577397647b480a9dbb11b91400ab938.jpg"},242:function(e,t,a){e.exports=a.p+"static/selfportraitcircle-ad52860898d4b1102f4fac0b9ac5b040.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-99ac92901555f3b925b2.js.map