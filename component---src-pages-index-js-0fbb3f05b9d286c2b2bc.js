(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{156:function(e,t,a){"use strict";a.r(t);var i=a(7),r=a.n(i),n=a(0),s=a.n(n),o=a(200),l=a(157),c=a(163),d=a(159),p=a(33),m=a.n(p),h=a(208),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={x:0,y:0},a.resize=a.resize.bind(m()(a)),a.start=a.start.bind(m()(a)),a.stop=a.stop.bind(m()(a)),a.update=a.update.bind(m()(a)),a}r()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=document.body.clientWidth,t=window.innerHeight,i=new h.j,r=new h.i(65,e/t,.03,1e3),n=new h.p({antialias:!0});n.setClearColor("#000000"),n.setSize(e,t),this.scene=i,this.camera=r,this.renderer=n;var s=(new h.c).load([a(209),a(210),a(211),a(212),a(213),a(214)]);i.background=s,i.fog=new h.e(new h.b("#000304"),100,1e3);var o=new h.a(16777215,.8),l=new h.d(16777215,.2);l.position.set(0,0,1),i.add(o),i.add(l),this.ambientLight=o,this.dirLight=l;var c=(new h.m).load(a(215)),d=new h.g(new h.k(1,100,100),new h.h({color:"#ffef8c",shininess:0,normalMap:c}));d.rotation.z-=Math.PI/12;d.scale.set(50,50,50),i.add(d);for(var p=[],m=0;m<8;m++)for(var u=100*(m+1),g=0;g<1250;g++){var f=2*Math.random()*Math.PI,b=Math.cos(f),v=Math.sin(f),y=15*(Math.random()>.5?1:-1)*Math.pow(Math.random(),.85),w=u+y,E=2*Math.random()*Math.PI,j=2*Math.random()*Math.PI,T=y*Math.sin(j)*Math.cos(E),S=y*Math.sin(j)*Math.sin(E),k=y*Math.cos(j);p.push(new h.o(b*w+T,v*w+S,k,1.5*(1-Math.pow(y/15,2))))}for(var L=new h.h({color:"#d1e8ff",shininess:0}),C=new h.h({color:"#ffef8c",shininess:0}),M=new h.l,x=[],N=0;N<8;N++){for(var D=new h.f,P=1250*N;P<1250*(N+1);P++){var I=p[P],A=new h.g(M,N%2==0?L:C);A.scale.set(I.w,I.w,I.w),A.rotation.set(I.x,I.y,I.z),A.position.set(I.x,I.y,I.z),D.add(A)}N%2!=0&&D.rotateOnAxis(new h.n(1,0,0),Math.PI/2),i.add(D),x.push(D)}this.sphereCenter=d,this.rings=x,this.radius=r.position.z=175,this.loopingPi=0,this.ringCount=8,this.container.appendChild(this.renderer.domElement),this.start(),window.addEventListener("resize",this.resize.bind(this)),window.addEventListener("mousemove",this.onMouseMove.bind(this))},i.componentWillUnmount=function(){this.stop(),this.container.removeChild(this.renderer.domElement),window.removeEventListener("resize",this.resize),window.removeEventListener("mousemove",this.onMouseMove)},i.start=function(){this.frameId||(this.frameId=requestAnimationFrame(this.update))},i.stop=function(){cancelAnimationFrame(this.frameId)},i.update=function(){this.loopingPi+=.016666666666*Math.PI/2,this.loopingPi=this.loopingPi%(2*Math.PI),this.sphereCenter.rotateOnAxis(new h.n(0,1,0),-.01);for(var e=this.ringCount,t=0;t<e;t++)this.rings[t].rotateOnAxis(new h.n(0,0,1),.001*(t%2==0?-1:1)*(e-t)/e);this.renderer.render(this.scene,this.camera),this.frameId=window.requestAnimationFrame(this.update)},i.resize=function(){var e=document.body.clientWidth,t=window.innerHeight,a=this.camera,i=this.renderer;a.aspect=e/t,a.updateProjectionMatrix(),i.setSize(e,t)},i.onMouseMove=function(e){var t=document.body.clientWidth,a=window.innerHeight,i=(e.x/t-.5)*t/a*Math.PI/5,r=e.y/a*Math.PI/2+Math.PI/4,n=this.radius,s=n*Math.sin(r)*Math.sin(i),o=n*Math.cos(r),l=n*Math.sin(r)*Math.cos(i);this.camera.position.set(s,o,l),this.dirLight.position.set(s,o,l),this.camera.lookAt(0,0,0)},i.render=function(){var e=this;return s.a.createElement("div",{ref:function(t){return e.container=t}})},t}(s.a.Component),g=a(235),f=a(234),b=a(233),v=a(216),y=a(152),w=a.n(y),E=(a(145),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){for(var e=[],t=0;t<v.length;t++){for(var i="ssc"===v[t].shortTitle?s.a.createElement("div",{className:w.a.ssc},s.a.createElement("img",{src:v[t].img,alt:""})):s.a.createElement("img",{src:a(217)("./"+v[t].img),alt:""}),r=s.a.createElement(g.a,{xs:12,md:4},s.a.createElement("div",{className:w.a.img},i)),n=[],o=0;o<v[t].descList.length;o++)n.push(s.a.createElement("li",{key:o},v[t].descList[o]));for(var l=[],c=0;c<v[t].skills.length;c++)l.push(s.a.createElement("li",{key:c,className:v[t].skills[c].shortTitle},v[t].skills[c].title));var d=s.a.createElement(g.a,{xs:12,md:8},s.a.createElement("div",{className:w.a.title},v[t].title),s.a.createElement("div",{className:w.a.subtitle},v[t].company," ",s.a.createElement("span",null,v[t].dateStart," - ",v[t].dateEnd)),s.a.createElement("div",{className:w.a.description},v[t].description,s.a.createElement("ul",null,n)),s.a.createElement("div",{className:"skills"},s.a.createElement("ul",null,l)));e.push(s.a.createElement(f.a,{key:t,className:w.a.job},r,d))}return s.a.createElement("div",{id:"work",className:w.a.work},s.a.createElement(b.a,null,s.a.createElement(f.a,null,s.a.createElement("div",{className:w.a.heading},"Work Experience")),e))},t}(s.a.Component)),j=a(166),T=a(220),S=a(153),k=a.n(S),L=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){for(var e=this.props.projectData,t=[],a=0;a<e.descList.length;a++)t.push(s.a.createElement("li",{key:a},e.descList[a]));for(var i=[],r=0;r<e.skills.length;r++)i.push(s.a.createElement("li",{key:r,className:e.skills[r].shortTitle},e.skills[r].title));return s.a.createElement("div",{className:k.a.contentInfo+" "+k.a.otherProject},s.a.createElement("div",{className:k.a.title},e.title),s.a.createElement("div",{className:k.a.subtitle},e.projectType,s.a.createElement("span",null,e.dateStart," - ",e.dateEnd)),s.a.createElement("div",{className:k.a.description},e.description," ","liveSite"===e.footage.type?s.a.createElement("a",{href:e.footage.src,className:k.a.liveSite,target:"_blank",rel:"noopener noreferrer"},"Live site"):null," ","paper"===e.footage.type?s.a.createElement("a",{href:e.footage.src,className:k.a.liveSite,target:"_blank",rel:"noopener noreferrer"},"Research paper"):null," ",""!==e.src?s.a.createElement("a",{href:e.src,className:k.a.src,target:"_blank",rel:"noopener noreferrer"},"Source code"):null,s.a.createElement("ul",null,t)),s.a.createElement("div",{className:"skills"},s.a.createElement("ul",null,i)))},t}(s.a.Component),C=function(e){function t(t){var a;a=e.call(this,t)||this;for(var i=[],r=0;r<9;r++)i.push(!1);return a.state={visibleRow:[!1,!1,!1],visibleProject:i,projectToShow:[T[0],T[0],T[0]]},a}r()(t,e);var i=t.prototype;return i.handleClick=function(e,t,a){return function(i){i.preventDefault();var r=e.state;r.visibleProject[3*t+a]?(r.visibleProject[3*t]=!1,r.visibleProject[3*t+1]=!1,r.visibleProject[3*t+2]=!1):(r.visibleProject[3*t]=!1,r.visibleProject[3*t+1]=!1,r.visibleProject[3*t+2]=!1,r.visibleProject[3*t+a]=!0,r.projectToShow[t]=T[3*t+a]),r.visibleRow[t]=r.visibleProject[3*t]||r.visibleProject[3*t+1]||r.visibleProject[3*t+2],e.setState(r)}},i.render=function(){for(var e=[],t=0;t<3;t++){for(var i=[],r=0;r<3;r++){var n={backgroundImage:'url("'+a(185)("./"+T[3*t+r].img)+'")'},o=[k.a.box,this.state.visibleProject[3*t+r]?k.a.boxSelected:"",k.a.img].join(" "),l=s.a.createElement("div",{key:3*t+r,className:o,style:n,onClick:this.handleClick(this,t,r)},s.a.createElement("div",{className:k.a.info},s.a.createElement("div",{className:k.a.title},T[3*t+r].title),s.a.createElement("div",{className:k.a.subtitle},T[3*t+r].projectType),this.state.visibleProject[3*t+r]?s.a.createElement(j.a,{icon:"angle-up",size:"lg"}):s.a.createElement(j.a,{icon:"angle-down",size:"lg"})));i.push(l)}var c=s.a.createElement("div",{key:2*t,className:k.a.grid},i),d=[k.a.dropdown,this.state.visibleRow[t]?k.a.dropdownActive:""].join(" "),p=this.state.projectToShow[t].footage,m=s.a.createElement("div",{key:2*t+1,className:d},s.a.createElement(b.a,null,s.a.createElement(f.a,{className:k.a.project},s.a.createElement(g.a,{xs:12,md:6},s.a.createElement("div",{className:k.a.img},"embeddedYoutube"===p.type?s.a.createElement("iframe",{title:"YouTube",src:p.src,frameBorder:0,allowFullScreen:"allowfullscreen"}):s.a.createElement("img",{src:a(185)("./"+this.state.projectToShow[t].img),alt:""}))),s.a.createElement(g.a,{xs:12,md:6,className:k.a.content},s.a.createElement(L,{key:0,projectData:this.state.projectToShow[t]})))));e.push(c),e.push(m)}for(var h=[],u=9;u<T.length;u++)h.push(s.a.createElement(L,{key:u,className:k.a.otherProject,projectData:T[u]}));return s.a.createElement("div",{className:k.a.projects},s.a.createElement("div",{className:k.a.main},s.a.createElement(b.a,{fluid:!0},s.a.createElement("div",{className:k.a.heading},"Projects"),s.a.createElement("div",{className:k.a.headingDesc},"A collection of projects that I have worked on from college to now."))),s.a.createElement("div",{id:"projects"}),e,s.a.createElement("div",{className:k.a.other},s.a.createElement(b.a,{fluid:!0},s.a.createElement("div",{className:k.a.heading},"Other Projects"),h)))},t}(s.a.Component),M=a(154),x=a.n(M),N=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var i=t.prototype;return i.componentDidUpdate=function(){window.scrollTo(0,0)},i.render=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"LandingBuffer",className:x.a.landingBuffer},s.a.createElement(u,null),s.a.createElement("div",{id:"Landing",className:x.a.landing},s.a.createElement("div",{className:x.a.content},s.a.createElement("div",{className:x.a.image},s.a.createElement("img",{src:a(232),alt:""})),s.a.createElement("div",{className:x.a.paragraph},"Welcome! I am a software engineer who loves all things software development, game development and computer graphics!"),s.a.createElement("div",{className:x.a.links},s.a.createElement("ul",null,s.a.createElement("li",{key:0},s.a.createElement(o.Link,{href:"",to:"projects",rel:"noopener noreferrer",smooth:!0,duration:350,offset:-100},"Projects")),s.a.createElement("li",{key:1},s.a.createElement(o.Link,{href:"",to:"work",rel:"noopener noreferrer",smooth:!0,duration:350,offset:-100},"Work Experience")),s.a.createElement("li",{key:2},s.a.createElement(l.a,{to:"/blog",rel:"noopener noreferrer"},"Blog"))))))),s.a.createElement("div",{className:x.a.bodyContent},s.a.createElement(C,null),s.a.createElement(E,null)))},t}(s.a.Component);t.default=function(){return s.a.createElement(c.a,null,s.a.createElement(d.a,{title:"Home",keywords:["portfolio","react","graphics","games"]}),s.a.createElement(N,null))}},157:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(32),l=a.n(o);a.d(t,"a",function(){return l.a});a(158);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},158:function(e,t,a){var i;e.exports=(i=a(161))&&i.default||i},159:function(e,t,a){"use strict";var i=a(160),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(167),c=a.n(l),d=a(157);function p(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title;return n.a.createElement(d.b,{query:m,render:function(e){var i=t||e.site.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"Home"!==o?"%s - "+e.site.siteMetadata.title:""+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:i})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=p;var m="4017075492"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Brandon Ly",description:"Portfolio",author:"Brandon Ly"}}}}},161:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(54),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Brandon Ly"}}}}},163:function(e,t,a){"use strict";var i=a(162),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(157),c=a(165),d=a(168),p=a(169),m=(a(170),a(33)),h=a.n(m),u=a(7),g=a.n(u),f=a(233),b=a(234),v=a(235),y=a(143),w=a.n(y),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isScrolled:!1},a.scrollHandler=a.scrollHandler.bind(h()(a)),a}g()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.scrollHandler)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandler)},a.scrollHandler=function(e){document.documentElement.scrollTop>0?this.setState({isScrolled:!0}):this.setState({isScrolled:!1})},a.render=function(){var e=[w.a.header,this.state.isScrolled?w.a.headerScrolled:""].join(" ");return n.a.createElement("div",{className:w.a.headerContainer},n.a.createElement("div",{className:e},n.a.createElement(f.a,null,n.a.createElement(b.a,null,n.a.createElement(v.a,{xs:12,md:5,className:w.a.logo},n.a.createElement("a",{href:"/"},n.a.createElement("div",{className:w.a.title},n.a.createElement("div",{className:w.a.main},"Brandon Ly"),n.a.createElement("div",{className:w.a.sub},"Game Developer and Software Engineer")))),n.a.createElement(v.a,{xs:12,md:7,className:w.a.menu},n.a.createElement("div",{className:w.a.elem},n.a.createElement(l.a,{to:"/"},"Home")),n.a.createElement("div",{className:w.a.elem},n.a.createElement(l.a,{to:"/blog/"},"Blog")),n.a.createElement("div",{className:w.a.elem},n.a.createElement(l.a,{to:"/about/"},"About")))))))},t}(n.a.Component),j=a(166),T=a(144),S=a.n(T),k=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){return n.a.createElement("div",{className:"footer-container"},n.a.createElement("div",{className:S.a.footer},n.a.createElement("div",{className:S.a.copyright},n.a.createElement(j.a,{icon:"copyright"})," 2019 Brandon Ly"),n.a.createElement("div",{className:S.a.contact},n.a.createElement("a",{href:"mailto:brandonly@live.com",target:"_blank",rel:"noopener noreferrer",className:S.a.contactIcon},n.a.createElement(j.a,{icon:"envelope"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/brandon-ly-1a412b73",target:"_blank",rel:"noopener noreferrer",className:S.a.contactIcon},n.a.createElement(j.a,{icon:["fab","linkedin"]})),n.a.createElement("a",{href:"https://www.github.com/brandonly101",target:"_blank",rel:"noopener noreferrer",className:S.a.contactIcon},n.a.createElement(j.a,{icon:["fab","github"]})))))},t}(n.a.Component);c.b.add(d.b),c.b.add(d.a),c.b.add(d.c),c.b.add(d.d),c.b.add(p.b),c.b.add(p.a);var L=function(e){var t=e.children;return n.a.createElement(l.b,{query:"2924840780",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("main",null,t),n.a.createElement(k,null))},data:i})};L.propTypes={children:o.a.node.isRequired};t.a=L},185:function(e,t,a){var i={"./BladeQuest.jpg":221,"./CCLEDocs.jpg":222,"./Conquoria.jpg":223,"./DeathOfHen.jpg":224,"./Fisticuffs.jpg":225,"./FoodByte.jpg":226,"./OtherFishInSea.jpg":227,"./Rune.jpg":228,"./pbr.jpg":229,"./pbrOld.jpg":230,"./portfolioScreen.jpg":231};function r(e){var t=n(e);return a(t)}function n(e){var t=i[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(i)},r.resolve=n,e.exports=r,r.id=185},209:function(e,t,a){e.exports=a.p+"static/px-5c24b8b8dc0962c2e69b10713dcc627a.jpg"},210:function(e,t,a){e.exports=a.p+"static/nx-78048db9eaea9cf53a5f077325fab752.jpg"},211:function(e,t,a){e.exports=a.p+"static/py-7f69dcba54b34fed5f3ea62c9467c42c.jpg"},212:function(e,t,a){e.exports=a.p+"static/ny-33679d72b7c2f7a2fc8232eca01cc33b.jpg"},213:function(e,t,a){e.exports=a.p+"static/pz-6884a08dd62f18b1454922e4a55efc81.jpg"},214:function(e,t,a){e.exports=a.p+"static/nz-f3a830c40da340824fac415e10d29fd0.jpg"},215:function(e,t,a){e.exports=a.p+"static/flakes_n-c582e607cc65fd8b966cd1c81ef089a6.png"},216:function(e){e.exports=[{shortTitle:"bsg",title:"Associate Software Engineer",company:"Blind Squirrel Entertainment, Inc.",dateStart:"April 2017",dateEnd:"Jan 2019",description:"I worked as an associate software engineer, doing all kinds of game development programming.",descList:["Star Wars: Jedi Challenges (C#, Unity 3D game, AR/VR, iOS/Android) - Worked closely with game designers to flesh out and implement core gameplay mechanics. Worked with artists to implement various graphical effects through graphics and shader work (e.g. maintaining “hologram” effect shader, particle effects, UI elements). Optimized the game for high performance on mobile devices (e.g. implementing use of GPU instancing).","Unannounced First-Person Shooter Remaster (C/C++, Unreal Engine 3, PS4/Xbox One/PC) - Worked with artists to improve and resolve various miscellaneous graphical effects and issues through graphics engineering and shader work (e.g. tweaking shadow rendering, fixing depth-of-field effect issues). Implemented miscellaneous features and fixes (e.g. modifying game systems from using a fixed FOV to a variable FOV, fix fullscreen/windowed mode and resolution issues on PC with the DXGI API).","Forklift Simulator 2019 (C#, Unity 3D game, PC) - Added a graphical motion sickness reduction effect and new gameplay features (e.g. new forklifts to drive)."],descListLinks:["https://www.lenovo.com/us/en/jedichallenges",null,"https://store.steampowered.com/app/939450/Forklift_Simulator_2019/"],skills:[{shortTitle:"cplusplus",title:"C/C++"},{shortTitle:"csharp",title:"C#"},{shortTitle:"ue4",title:"Unreal Engine 3/4"},{shortTitle:"unity3d",title:"Unity 3D Game Engine"},{shortTitle:"ar",title:"Augmented Reality Game Development"},{shortTitle:"graphics",title:"3D Computer Graphics"},{shortTitle:"directx",title:"DirectX/Direct3D11 API"},{shortTitle:"glsl",title:"OpenGL Shading Language (GLSL)"},{shortTitle:"glsl",title:"High Level Shading Language (GLSL)"}],img:"blindsquirrelLogo.jpg"},{shortTitle:"workday",title:"Associate Software Engineering Intern, UI/UX",company:"Workday, Inc.",dateStart:"June 2016",dateEnd:"Sept 2016",description:"I interned at Workday where I designed and implemented a 3D data visualization in the main Workday web application.",descList:["3D data visualization maps company office data to their physical location on an interactive 3D globe.","Experimental feature with plans by the UI/UX team to refine for production for enterprise Workday users.","Interacted with senior developers and designers and participated in an Agile workflow to accomplish my work."],skills:[{shortTitle:"java",title:"Java"},{shortTitle:"gwt",title:"GWT"},{shortTitle:"parallax3d",title:"Parallax 3D"},{shortTitle:"javascript",title:"JavaScript"},{shortTitle:"webgl",title:"WebGL"},{shortTitle:"threejs",title:"Three.js"},{shortTitle:"glsl",title:"OpenGL Shading Language (GLSL)"}],img:"workdayLogo.png"},{shortTitle:"ssc",title:"Instructional Programmer",company:"UCLA Social Sciences Computing",dateStart:"June 2014",dateEnd:"March 2017",description:"I implemented features requested by professors and fixed bugs for UCLA's Common Collaborative Learning Environment (CCLE).",descList:["CCLE is a course management system web appplication used by all UCLA students and instructors to share course material, post in forums, take quizzes, and more."],skills:[{shortTitle:"php",title:"PHP"},{shortTitle:"mysql",title:"MySQL"},{shortTitle:"javascript",title:"JavaScript"},{shortTitle:"htmlcss",title:"HTML & CSS"},{shortTitle:"moodle",title:"Moodle Framework"}],img:"https://computing.sscnet.ucla.edu/wp-content/uploads/2013/04/ssc-logo-all-white-1.png"}]},217:function(e,t,a){var i={"./blindsquirrelLogo.jpg":218,"./workdayLogo.png":219};function r(e){var t=n(e);return a(t)}function n(e){var t=i[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(i)},r.resolve=n,e.exports=r,r.id=217},218:function(e,t,a){e.exports=a.p+"static/blindsquirrelLogo-6e59b13feea0282510769a4da3dbbd47.jpg"},219:function(e,t,a){e.exports=a.p+"static/workdayLogo-68d4be8fa4c87ac057a66d3ba5482b9e.png"},220:function(e){e.exports=[{shortTitle:"pbr",title:"WebGL Physically-based Renderer",projectType:"3D Computer Graphics Project",src:"https://github.com/brandonly101/webgl-physically-based-rendering",dateStart:"August 2015",dateEnd:"February 2019",description:"A 3D model physically-based renderer with adjustable material parameters for color, roughness, and metalness.",descList:["Features fully physically-based shading based on microfacet theory.","Also features specular image-based lighting and diffuse irradiance.","Implemented a 3D matrix math library, OBJ 3D model reader, a mini-material system, and normal mapping."],skills:[{shortTitle:"graphics",title:"3D Computer Graphics"},{shortTitle:"javascript",title:"JavaScript"},{shortTitle:"webgl",title:"WebGL"},{shortTitle:"glsl",title:"OpenGL Shading Language (GLSL)"}],img:"pbr.jpg",footage:{type:"liveSite",src:"https://brandonly101.github.io/webgl-physically-based-rendering/"}},{shortTitle:"conquoria",title:"Conquoria",projectType:"Augmented Reality Video Game",dateStart:"January 2016",dateEnd:"March 2016",description:"A village build-and-battle mobile game with elements of augmented reality that I developed with a team. Players gather resources, build villages, and face off against other villages.",descList:["Created and architected basic gameplay mechanics.","Integrated augmented reality gameplay features using the Vuforia API for the Unity 3D engine."],skills:[{shortTitle:"csharp",title:"C#"},{shortTitle:"unity3d",title:"Unity 3D Game Engine"},{shortTitle:"3dfiles",title:"3D Model Files"},{shortTitle:"graphics",title:"3D Computer Graphics"},{shortTitle:"ar",title:"Augmented Reality Game Development"},{shortTitle:"vuforia",title:"Vuforia"}],img:"Conquoria.jpg",footage:{type:"embeddedYoutube",src:"https://www.youtube.com/embed/CpitG-_7ZvI"},src:"https://github.com/brandonly101/conquoria"},{shortTitle:"rune",title:"Rune",projectType:"Web Application",dateStart:"April 2016",dateEnd:"June 2016",description:"An intuitive and student-focused Kanban project management tool. Developed as a part of a team for my university's senior capstone project.",descList:["Designed and develop the front-end framework using Sass, Bootstrap 3, and jQuery.","Implemented back-end features building on Express, a Node.js web application framework.","To use, log in as 'brandonly@live.com' and use the password 'test'."],skills:[{shortTitle:"htmlcss",title:"HTML & CSS"},{shortTitle:"javascript",title:"JavaScript"},{shortTitle:"jquery",title:"jQuery"},{shortTitle:"sass",title:"Sass"},{shortTitle:"jade",title:"Jade"},{shortTitle:"nodejs",title:"Node.js"},{shortTitle:"express",title:"Express"},{shortTitle:"mongodb",title:"MongoDB"}],img:"Rune.jpg",footage:{type:"liveSite",src:"https://rune130.herokuapp.com/"},src:"https://github.com/rzeng95/Rune"},{shortTitle:"fisticuffs",title:"Fisticuffs",projectType:"Virtual Reality Video Game",dateStart:"April 2015",dateEnd:"June 2015",description:"A first-person fistfighting game with elements of virtual reality that I developed with a partner. Players engage in 1v1 fights inside a lively tavern, facing opponents until their discombobulation gets too high.",descList:["Designed and developed the game mechanics and AI crowd behavior.","Integrated the Oculus DK2 and conformed the gameplay mechanics to best practices for virtual reality game development.","Designed the tavern level and lighting."],skills:[{shortTitle:"cplusplus",title:"C/C++"},{shortTitle:"ue4",title:"Unreal Engine 4"},{shortTitle:"ue4bp",title:"UE4 Blueprint Scripting"},{shortTitle:"VR",title:"Virtual Reality Game Development"},{shortTitle:"oculus",title:"Oculus Rift DK2"}],img:"Fisticuffs.jpg",footage:{type:"embeddedYoutube",src:"https://www.youtube.com/embed/Cu2_ynG56tM"},src:"https://github.com/brandonly101/ue4-fisticuffs"},{shortTitle:"bladequest",title:"Blade Quest",projectType:"3D Computer Graphics Project / Video Game",dateStart:"June 2015",dateEnd:"Sept 2015",description:"A small first-person sword-fighting video game and research project that experiments with realistic, comic book-like, and Pixar film-like visual styles.",descList:["Implemented various post-processing graphical effects to emulate the visual styles.","Effects include lighting and shading posterization, color posterization, screenspace edge detection, and resolution scaling.","Independent research done under the guidance of a professor."],skills:[{shortTitle:"cplusplus",title:"C/C++"},{shortTitle:"ue4",title:"Unreal Engine 4"},{shortTitle:"ue4bp",title:"UE4 Blueprint Scripting"},{shortTitle:"glsl",title:"OpenGL Shading Language (GLSL)"}],img:"BladeQuest.jpg",footage:{type:"paper",src:"/assets/paper.pdf"},src:"https://github.com/brandonly101/ue4-shaders-blade-quest"},{shortTitle:"deathOfHen",title:"The Little Hen and the Little Rooster",projectType:"3D Real-time Animation",dateStart:"January 2015",dateEnd:"March 2015",description:"A 3D Real-Time Animation that I created based on the Grimm Fairy Tale Death of the Little Hen.",descList:["Designed and scripted scenes to occur in the game engine based off of storyboards that I also created."],skills:[{shortTitle:"csharp",title:"C#"},{shortTitle:"unity3d",title:"Unity 3D Game Engine"},{shortTitle:"3dfiles",title:"3D Model Files"},{shortTitle:"graphics",title:"3D Computer Graphics"}],img:"DeathOfHen.jpg",footage:{type:"embeddedYoutube",src:"https://www.youtube.com/embed/rnnW0XOBviI"},src:"https://github.com/brandonly101/3DRTA-Death-of-Hen"},{shortTitle:"foodbyte",title:"FoodByte",projectType:"Hackathon Web Application",src:"https://github.com/michellekli/foodie",dateStart:"April 2016",dateEnd:"April 2016",description:"A fun, team-developed web application. Where Tinder meets Yelp, users say Yes to a dish, and FoodByte gives restaurant information for it, or No to it, and FoodByte cycles through other dishes.",descList:["Front-end design and development with HTML & CSS, JavaScript, and jQuery.","Interfaced with the Google Maps API with JavaScript."],skills:[{shortTitle:"htmlcss",title:"HTML & CSS"},{shortTitle:"javascript",title:"JavaScript"},{shortTitle:"jquery",title:"jQuery"},{shortTitle:"gmaps",title:"Google Maps API"}],img:"FoodByte.jpg",footage:{type:"liveSite",src:"http://michellekli.github.io/foodie/"}},{shortTitle:"ccledocs",title:"CCLEDocs Update",projectType:"SSC Project",src:"",dateStart:"July 2014",dateEnd:"August 2014",description:"A theme revamp of UCLA CCLE's documentation website that I worked on while working at UCLA Social Sciences Computing.",descList:["Front-end design and development with HTML & CSS, JavaScript, and jQuery.","Interfaced with the Google Maps API with JavaScript."],skills:[{shortTitle:"htmlcss",title:"HTML & CSS"},{shortTitle:"xml",title:"XML"},{shortTitle:"bootstrap3",title:"Bootstrap 3"},{shortTitle:"php",title:"PHP"},{shortTitle:"mediawiki",title:"MediaWiki"}],img:"CCLEDocs.jpg",footage:{type:"liveSite",src:"https://docs.ccle.ucla.edu/"}},{shortTitle:"cs174a",title:"Other Fish in the Sea",projectType:"3D Graphics Project",dateStart:"November 2014",dateEnd:"December 2014",description:"A small game that my group and I developed in WebGL and JavaScript for the term project for our 3D computer graphics class.",descList:["Structured the skeleton for the rendering of basic 3D shapes (i.e. spheres and cubes).","Implemented alpha blending."],skills:[{shortTitle:"htmlcss",title:"HTML & CSS"},{shortTitle:"javascript",title:"JavaScript"},{shortTitle:"webgl",title:"WebGL"},{shortTitle:"graphics",title:"3D Computer Graphics"}],img:"OtherFishInSea.jpg",footage:{type:"liveSite",src:"https://autekroy.github.io/The-Other-Fish-in-the-Sea/game.html"},src:"https://github.com/autekroy/The-Other-Fish-in-the-Sea"},{shortTitle:"portfolio",title:"Portfolio Website",projectType:"Web Page",dateStart:"August 2015",dateEnd:"Present",description:"My portfolio site, which is a project in and of itself. The portfolio lets me experiment not just in this website's development, but also its design.",descList:["Latest iteration uses Gatsby and React.js, since I wanted to learn how to use React.js."],skills:[{shortTitle:"htmlcss",title:"HTML & CSS"},{shortTitle:"javascript",title:"JavaScript"},{shortTitle:"reactjs",title:"React.js"},{shortTitle:"webgl",title:"WebGL"},{shortTitle:"threejs",title:"Three.js"}],img:"portfolioScreen.jpg",footage:{type:"liveSite",src:"https://brandonly101.github.io/"},src:"https://github.com/brandonly101/brandonly101.github.io"}]},221:function(e,t,a){e.exports=a.p+"static/BladeQuest-d84926b5bcf2ba55a56b74cc9572be95.jpg"},222:function(e,t,a){e.exports=a.p+"static/CCLEDocs-397a79f16573acc6b6709dc5e8582d83.jpg"},223:function(e,t,a){e.exports=a.p+"static/Conquoria-cc1ede6f99c932f7fc444cbec85b25ee.jpg"},224:function(e,t,a){e.exports=a.p+"static/DeathOfHen-7f5c764af99a2de8a9d67d2646142b0a.jpg"},225:function(e,t,a){e.exports=a.p+"static/Fisticuffs-e65e6d85538b2800f7acd40be3acf16e.jpg"},226:function(e,t,a){e.exports=a.p+"static/FoodByte-d6bd660a12b471235e5dc553bf6c718f.jpg"},227:function(e,t,a){e.exports=a.p+"static/OtherFishInSea-a3acd8e1d923720071701116ad1932ab.jpg"},228:function(e,t,a){e.exports=a.p+"static/Rune-19289b964c86389e89680e02446c871e.jpg"},229:function(e,t,a){e.exports=a.p+"static/pbr-013997efb395cc392fb0973af7663fe2.jpg"},230:function(e,t,a){e.exports=a.p+"static/pbrOld-842385176b55204c27e872ca4fb0a8bd.jpg"},231:function(e,t,a){e.exports=a.p+"static/portfolioScreen-0577397647b480a9dbb11b91400ab938.jpg"},232:function(e,t,a){e.exports=a.p+"static/selfportraitcircle-ad52860898d4b1102f4fac0b9ac5b040.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-0fbb3f05b9d286c2b2bc.js.map