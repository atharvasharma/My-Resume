(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(7),s=t.n(l),r=(t(14),t(1)),o=t(2),c=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),i.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.roleDescription),i.a.createElement("hr",null),i.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url,target:"_blank"},i.a.createElement("i",{className:e.className})))})))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#resume"},i.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"resume"},i.a.createElement("div",{className:"row education"},i.a.createElement("div",{className:"twelve columns  text-center"},i.a.createElement("h1",null,i.a.createElement("span",null,"Education"))),e.education&&e.education.map(function(e){return i.a.createElement(i.a.Fragment,{key:e},i.a.createElement("div",{className:"three columns"},i.a.createElement("img",{src:e.ImageUrl,alt:"LNMIIT logo",className:"companyImage"})),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.UniversityName),i.a.createElement("p",{className:"info"},i.a.createElement("h5",null,e.specialization,"  ",i.a.createElement("em",{className:"date"},"(",e.MonthOfPassing," ",e.YearOfPassing,")"))),i.a.createElement("span",null,"CGPA: ",e.CGPA,i.a.createElement("br",null),"Societies : ",e.Societies)))))})),i.a.createElement("div",{className:"row work"},i.a.createElement("div",{className:"twelve columns  text-center"},i.a.createElement("h1",null,i.a.createElement("span",null,"Work Experience"))),e.work&&e.work.map(function(e){return i.a.createElement(i.a.Fragment,{key:e},i.a.createElement("div",{className:"three columns givePadding"},i.a.createElement("img",{src:e.ImageUrl,alt:"Company logo",className:"companyImage"})),i.a.createElement("div",{className:"nine columns main-col givePadding"},i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.CompanyName),i.a.createElement("p",{className:"info"},i.a.createElement("h5",null,e.specialization,"  ",i.a.createElement("em",{className:"date"},"(",e.MonthOfLeaving," ",e.YearOfLeaving,")"))),i.a.createElement("span",null,e.Achievements)))))})),i.a.createElement("div",{className:"row education"},i.a.createElement("div",{className:"twelve columns  text-center"},i.a.createElement("h1",null,i.a.createElement("span",null,"Position of Responsibility"))),e.positions&&e.positions.map(function(e){return i.a.createElement(i.a.Fragment,{key:e},i.a.createElement("div",{className:"three columns givePadding"},i.a.createElement("img",{src:e.imageUrl,className:"positionsImage companyImage"})),i.a.createElement("div",{className:"nine columns main-col givePadding"},i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.organization),i.a.createElement("p",{className:"info"},i.a.createElement("h5",null,e.designation)),i.a.createElement("span",null,e.role)))))})),i.a.createElement("div",{className:"row skills"},i.a.createElement("div",{className:"twelve columns  text-center"},i.a.createElement("h1",null,i.a.createElement("span",null,"Skills"))),e.skills&&e.skills.map(function(e){return i.a.createElement(i.a.Fragment,{key:e},i.a.createElement("div",{className:"two columns"},i.a.createElement("button",null,e)))})))}}]),a}(n.Component),d=t(8),g=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns collapsed"},i.a.createElement("h2",null,"Check Out Some of My Works.")),e.portfolio&&e.portfolio.map(function(e){return i.a.createElement(d.a,{trigger:i.a.createElement("div",{className:"six columns"},i.a.createElement("button",null,i.a.createElement("img",{src:e.imgurl,alt:"project-image"}),i.a.createElement("h1",null,e.name))),modal:!0,closeOnDocumentClick:!0},function(a){return i.a.createElement("div",{className:"modal"},i.a.createElement("a",{onClick:a,className:"closeButton"},"\xd7"),i.a.createElement("div",{className:"twelve columns collapsed"},i.a.createElement("h2",{className:"header"},e.name)),i.a.createElement("div",{className:"seven columns collapsed modalContent"},e.description1,i.a.createElement("br",null),i.a.createElement("br",null),e.description2),i.a.createElement("div",{className:"five columns collapsed modalContent"},i.a.createElement("img",{src:e.diagram,alt:"project-image",className:"modalImage"}),i.a.createElement("a",{href:e.link,target:"_blank"},"Source Code")))})}),i.a.createElement("div",{className:"twelve columns collapsed viewMore"},i.a.createElement("a",{href:"https://github.com/atharvasharma?tab=repositories",target:"_blank"},"View More"))))}}]),a}(n.Component),v=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"contact"},i.a.createElement("div",{className:"row section-head"},i.a.createElement("div",{className:"ten columns"},i.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),i.a.createElement("div",{className:"row"},i.a.createElement("aside",{className:"eigth columns footer-widgets"},i.a.createElement("div",{className:"widget"},i.a.createElement("h4",null,"LinkedIn :\xa0",i.a.createElement("a",{href:"https://www.linkedin.com/in/atharva-sharma/"},e.linkedinId))))))}}]),a}(n.Component),f=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("footer",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",null,i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}))),i.a.createElement("div",{id:"go-top"},i.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},i.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),E={imagebaseurl:"",name:"Atharva Sharma",role:"Full Stack Developer",linkedinId:"https://www.linkedin.com/in/atharva-sharma/",skypeid:"Your skypeid",roleDescription:"A full stack developer who specializes in JavaScript Technologies across the stack (Node.js, Express, MongoDB, React). Experienced in building complete web applications with back-end API systems. ",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/atharva-sharma/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/atharvasharma",className:"fa fa-github"}],aboutme:"",address:"India",website:"https://rbhatia46.github.io",education:[{UniversityName:"The LNM Insitute of Information Technology",specialization:"Communication and Computer Engineering",MonthOfPassing:"May",YearOfPassing:"2021",CGPA:"7.97",Societies:"Training & Placement Cell, Computer Society of India, Music Club",ImageUrl:"images/Logo-LNMIIT.svg"}],work:[{CompanyName:"Crio.Do",specialization:"Student Developer Intern",MonthOfLeaving:"April",YearOfLeaving:"2020",Achievements:"Worked on a secure file sharing service, which is a customized version of popularly available VSFTPD server. Also developed tools to automatically analyze performance and functionality issues in different versions of the software.",ImageUrl:"images/crio-logo.svg"},{CompanyName:"Coding Ninjas",specialization:"Online Teaching Assistant",MonthOfLeaving:"December",YearOfLeaving:"2019",Achievements:"Helped students persuing DSA course to solve their problems by debugging codes and solving their doubts",ImageUrl:"images/CN-logo.svg"},{CompanyName:"Zubi Infotech Private Ltd.",specialization:"Full Stack Developer",MonthOfLeaving:"Mar",YearOfLeaving:"2019",Achievements:"Developed websites for firms from scratch. Also learnt about integration of technologies like Machine Learning with Web Development",ImageUrl:"images/zubi-logo.svg"}],skillsDescription:"Your skills here",skills:["Node.js","Express.js","MongoDB","React","Redux","HTML5","CSS","Bootstrap","Javascript","JQuery","C++","MySQL"],portfolio:[{name:"Visitor Management Application",description1:"An application, which captures the Name, Email address, Phone no of the visitor and same information is captured for the host on the front end.At the back end, once the user enters the information in the form, the backend stores all of the information with time stamp of the entry. This triggers an email and an SMS to the host informing him of the details of the visitor.",description2:"There is also a provision of the checkout time which the guest can provide once he leaves. This triggers an email to the guest with the complete form",imgurl:"images/portfolio/visitor-management.png",diagram:"images/portfolio/diagrams/visitor.png",link:"https://github.com/atharvasharma/Entry-Management-Application"},{name:"Restaurant React-Redux Application",description1:"An application built for a restaurant. It lists all the dishes along with description and comment on a particular dish. Along with this it also contains description of leaders and promotions, details of which are fetched from a backend server.",description2:"On the backend is a REST API that stores and retrieves data from a JSON file which is built using Node.js",imgurl:"images/portfolio/restaurant.png",link:"https://github.com/atharvasharma/Restaurant-React-App",diagram:"images/portfolio/diagrams/restaurant.png"},{name:"File Transfer Application using FTP",description1:"It is a secure file-sharing service, a customized version of the popularly available VSFTPD server.",description2:"During the course of this project I created pre-install scripts to run system checks, installed and configured the application. I also developed tools to automatically analyze performance and functionality issues in different versions of the application.",imgurl:"images/portfolio/file-transfer.png",diagram:"images/portfolio/diagrams/qbox.png",link:"https://github.com/atharvasharma/File-transfer-application"},{name:"Restful Application for tourist places",description1:"A website based on REST API server made on node.js. The front end is made using HTML, CSS, JS",description2:"Users can post a tourist place, update and delete it. The tourist places listed can be viewed by other users on the website. The website takes care of proper authentication and authorization.",imgurl:"images/portfolio/tourist.png",link:"https://github.com/atharvasharma/YelpCamp",diagram:"images/portfolio/diagrams/blog.png"}],positions:[{designation:"Technical Lead",organization:"Training & Placement Cell, LNMIIT",role:"Leading a team of 6 members, maintaining all the statistics of student placements. Also have the task of building, maintaining college's placement website.",imageUrl:"images/tpc-logo.png"}]},b=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,{resumeData:E}),i.a.createElement(h,{resumeData:E}),i.a.createElement(g,{resumeData:E}),i.a.createElement(v,{resumeData:E}),i.a.createElement(f,{resumeData:E}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.b01dca81.chunk.js.map