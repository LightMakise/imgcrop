(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(t,e,i){t.exports=i(54)},34:function(t,e,i){},35:function(t,e,i){},36:function(t,e,i){},37:function(t,e,i){},38:function(t,e,i){},39:function(t,e,i){},40:function(t,e,i){},41:function(t,e,i){},42:function(t,e,i){},43:function(t,e,i){},44:function(t,e,i){},45:function(t,e,i){},51:function(t,e,i){},52:function(t,e,i){},53:function(t,e,i){},54:function(t,e,i){"use strict";i.r(e);var a=i(0),n=i.n(a),s=i(16),o=i.n(s),c=i(1),r=i(2),l=i(5),u=i(3),h=i(4),m=(i(34),i(35),i(36),i(18)),p=(i(37),function(t){function e(t){var i;return Object(c.a)(this,e),(i=Object(l.a)(this,Object(u.a)(e).call(this,t))).cutMoving=!1,i.stretchMoving=!1,i.stratPosition={x:0,y:0},i.translate={x:0,y:0},i.style={width:50,height:50,left:0,top:0},i.canvasSource=document.createElement("canvas"),i.init(),i.state={style:i.style,cutImgUrl:""},document.addEventListener("mouseup",i.mouseupEvent.bind(Object(m.a)(i))),i}return Object(h.a)(e,t),Object(r.a)(e,[{key:"mouseupEvent",value:function(){this.cutMoving=!1,this.stretchMoving=!1,this.cutImg()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mouseup",this.mouseupEvent)}},{key:"init",value:function(){this.cutMoving=!1,this.stretchMoving=!1,this.style={width:50,height:50,left:0,top:0},this.stratPosition={x:0,y:0},this.translate={x:0,y:0},this.setState({style:this.style,cutImgUrl:""})}},{key:"getCutDomPosition",value:function(){var t=document.querySelector(".cut");if(!t)return null;var e=t.offsetWidth||this.style.width,i=t.offsetHeight||this.style.height,a=t.offsetLeft||this.style.left,n=t.offsetTop||this.style.top;return{width:e,height:i,left:a,top:n,right:a+e,bottom:n+i}}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(t){t.showCut&&""!==t.imgUrl&&this.cutImg(t.imgUrl)}},{key:"cutMouseDown",value:function(t,e){0===e.button&&(this.cutMoving=!0)}},{key:"cutMouseMove",value:function(t,e){this.cutMoving&&(this.translate={x:e.movementX,y:e.movementY},this.move())}},{key:"cutMouseUp",value:function(t,e){this.cutMoving=!1}},{key:"stretchMouseDown",value:function(t,e){var i=this;if(0===e.button){this.stretchMoving=!0,this.stratPosition={x:e.pageX,y:e.pageY};var a=function(t){i.stretchMouseMove(t)};document.addEventListener("mousemove",a,!0),document.addEventListener("mouseup",function(){document.removeEventListener("mousemove",a,!0)}),e.stopPropagation()}}},{key:"stretchMouseMove",value:function(t){this.stretchCutDom(t.movementX,t.movementY)}},{key:"stretchMouseUp",value:function(t,e){}},{key:"stretchCutDom",value:function(t,e){var i=this.getCutDomPosition();this.style.width+=t,this.style.height+=e,i.right>this.props.limit.width&&(this.style.width=this.props.limit.width-i.left),i.bottom>this.props.limit.height&&(this.style.height=this.props.limit.height-i.top),this.setState({style:this.style}),this.cutImg(this.props.imgUrl)}},{key:"move",value:function(){var t=this.getCutDomPosition();this.style.left+=this.translate.x,this.style.top+=this.translate.y,this.style.left<0&&(this.style.left=0),this.style.left+t.width>=this.props.limit.width&&(this.style.left=this.props.limit.width-t.width),this.style.top<0&&(this.style.top=0),this.style.top+t.height>=this.props.limit.height&&(this.style.top=this.props.limit.height-t.height),this.setState({style:this.style}),this.cutImg(this.props.imgUrl)}},{key:"cutImg",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.imgUrl,i=this.getCutDomPosition();if(i){var a=this.canvasSource,n=document.querySelector("#result");a.width=this.props.limit.width,a.height=this.props.limit.height,n.width=i.width,n.height=i.height;var s=a.getContext("2d"),o=n.getContext("2d"),c=new Image;c.src=e,c.width=a.width,c.height=a.height,c.onload=function(){s.drawImage(c,0,0,a.width,a.height);var e=s.getImageData(i.left,i.top,n.width,n.height);o.putImageData(e,0,0,0,0,n.width,n.height);var r=n.toDataURL("image/png");t.setState({cutImgUrl:r})}}}},{key:"cutImgMouseDown",value:function(t,e){e.preventDefault()}},{key:"cutImgMouseMove",value:function(t,e){e.preventDefault()}},{key:"cutImgMouseUp",value:function(t,e){e.preventDefault()}},{key:"render",value:function(t){return n.a.createElement("div",{className:"cut ".concat(this.props.showCut?"":"hide"),onMouseDown:this.cutMouseDown.bind(this,t),onMouseMove:this.cutMouseMove.bind(this,t),onMouseUp:this.cutMouseUp.bind(this,t),style:{width:this.state.style.width+"px",height:this.state.style.height+"px",left:this.state.style.left+"px",top:this.state.style.top+"px"}},n.a.createElement("div",{className:"size-text"}," ",this.state.style.width+" x "+this.state.style.height),""!==this.state.cutImgUrl?n.a.createElement("img",{src:this.state.cutImgUrl,id:"result_img",onMouseDown:this.cutImgMouseDown.bind(this,t),onMouseMove:this.cutImgMouseMove.bind(this,t),onMouseUp:this.cutImgMouseUp.bind(this,t)}):"",n.a.createElement("div",{className:"stretch l-t",onMouseDown:this.stretchMouseDown.bind(this,t),onMouseUp:this.stretchMouseUp.bind(this,t)}))}}]),e}(n.a.Component)),f=function(t){function e(t){var i;return Object(c.a)(this,e),(i=Object(l.a)(this,Object(u.a)(e).call(this,t))).imgsType=["image/jpeg","image/png"],i.imgsSize=10485760,i.imgReal={width:"auto",height:"auto"},i.state={imgReal:i.imgReal,limit:{},fileEnterArea:!1,imgUrl:"",showCut:!1},i}return Object(h.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){}},{key:"selectFile",value:function(){this.fileInput.click()}},{key:"clickFile",value:function(t){this.processFile(this.fileInput.files),this.fileInput.value=""}},{key:"delImg",value:function(){this.cut.init(),this.setState({imgReal:{width:"auto",height:"auto"},imgUrl:"",fileEnterArea:!1,showCut:!1})}},{key:"imgShow",value:function(t){var e=this;this.setState({imgUrl:t,showCut:!0});var i=document.querySelector(".droparea");setTimeout(function(){var t={left:i.offsetLeft,top:i.offsetTop,bottom:i.offsetTop+i.offsetHeight,right:i.offsetLeft+i.offsetWidth,width:i.offsetWidth,height:i.offsetHeight};e.setState({limit:t})}),this.props.loadingImgFinish()}},{key:"processFile",value:function(t){var e=this;if(0!==(t=this.getFile(t)).length){var i=new FileReader;i.readAsDataURL(t[0]),i.onload=function(){e.imgShow(i.result),e.getImgReal(i.result)}}}},{key:"getImgReal",value:function(t){var e=this,i=new Image;i.src=t,i.onload=function(){e.imgReal.width=i.width+"px",e.imgReal.height=i.height+"px",e.setState({imgReal:e.imgReal})}}},{key:"getFile",value:function(t){var e=this;return Array.from(t).filter(function(t){return e.checkFile(t)})}},{key:"checkFile",value:function(t){var e=t.type,i=t.size,a=!0;return this.imgsType.includes(e)||(a=!1,console.error("\u6587\u4ef6\u4e0d\u662f\u56fe\u7247\u7c7b\u578b ".concat(e))),i>=this.imgsSize&&(a=!1,console.error("\u6587\u4ef6\u8d85\u8fc7".concat(i))),a}},{key:"onDragOver",value:function(t){t.preventDefault()}},{key:"onDrop",value:function(t,e){e.preventDefault(),this.state.imgUrl||(this.setState({fileEnterArea:!1}),this.processFile(e.dataTransfer.files))}},{key:"onDragEnter",value:function(){this.state.imgUrl||this.setState({fileEnterArea:!0})}},{key:"onDragLeave",value:function(){this.state.imgUrl||this.setState({fileEnterArea:!1})}},{key:"save",value:function(){var t=document.querySelector("#result_img"),e=document.createElement("a");e.download="\u526a\u88c1\u6587\u4ef6",e.href=t.src,e.dataset.downloadUrl=[e.download,e.href].join(":"),document.body.appendChild(e),e.click(),document.body.removeChild(e)}},{key:"render",value:function(t){var e=this;return n.a.createElement("div",{className:"droparea ".concat(this.state.fileEnterArea?"file-hover":null," ").concat(this.state.showCut?"no-border":null),onDragOver:this.onDragOver.bind(this),onDragEnter:this.onDragEnter.bind(this),onDragLeave:this.onDragLeave.bind(this),onDrop:this.onDrop.bind(this,t),style:{width:this.state.imgReal.width,height:this.state.imgReal.height}},n.a.createElement("input",{className:"hide",type:"file",ref:function(t){return e.fileInput=t},onChange:this.clickFile.bind(this)}),this.state.imgUrl?n.a.createElement("img",{src:this.state.imgUrl,id:"source"}):null,n.a.createElement("div",{className:"layer"}),n.a.createElement(p,{limit:this.state.limit,showCut:this.state.showCut,imgUrl:this.state.imgUrl,ref:function(t){return e.cut=t}}))}}]),e}(n.a.Component),d=(i(38),function(t){function e(t){var i;return Object(c.a)(this,e),(i=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={showDel:!1},i}return Object(h.a)(e,t),Object(r.a)(e,[{key:"delImg",value:function(){this.props.delImg(),this.setState({showDel:!1})}},{key:"save",value:function(){this.props.save()}},{key:"loadingImgFinish",value:function(){this.setState({showDel:!0})}},{key:"selectFile",value:function(){this.props.selectFile()}},{key:"render",value:function(){return n.a.createElement("div",{className:"option"},this.state.showDel?null:n.a.createElement("div",{className:"button",onClick:this.selectFile.bind(this)},"\u9009\u62e9\u4e00\u5f20\u56fe\u7247(\u6216\u8005\u62d6\u62fd\u5230\u4e0a\u65b9)"),this.state.showDel?n.a.createElement("div",{className:"button save",onClick:this.save.bind(this)},"\u4fdd\u5b58"):null,this.state.showDel?n.a.createElement("div",{className:"button del",onClick:this.delImg.bind(this)},"\u6e05\u9664"):null)}}]),e}(n.a.Component)),v=function(t){function e(t){var i;return Object(c.a)(this,e),(i=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={},i}return Object(h.a)(e,t),Object(r.a)(e,[{key:"delImg",value:function(){this.droparea.delImg()}},{key:"save",value:function(){this.droparea.save()}},{key:"loadingImgFinish",value:function(){this.option.loadingImgFinish()}},{key:"selectFile",value:function(){this.droparea.selectFile()}},{key:"render",value:function(t){var e=this;return n.a.createElement("div",{className:"imgcrop"},n.a.createElement(f,{size:10485760,ref:function(t){e.droparea=t},loadingImgFinish:this.loadingImgFinish.bind(this)}),n.a.createElement(d,{selectFile:this.selectFile.bind(this),delImg:this.delImg.bind(this),save:this.save.bind(this),ref:function(t){e.option=t}}))}}]),e}(n.a.Component),g=function(t){function e(t){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this,t))}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"imgcrop-page"},n.a.createElement("canvas",{id:"result"},"\u6d4f\u89c8\u5668\u4e0d\u652f\u6301canvas"),n.a.createElement(v,null))}}]),e}(n.a.Component);i(39);function b(t,e){return Math.floor(Math.random()*(e-t+1))+t}var y=i(7),k=function(t){function e(t){var i;return Object(c.a)(this,e),(i=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={},i}return Object(h.a)(e,t),Object(r.a)(e,[{key:"push",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";Object(y.b)().push(t)}}]),e}(n.a.Component),w=function(t){function e(t){var i;return Object(c.a)(this,e),(i=Object(l.a)(this,Object(u.a)(e).call(this,t))).contentNode=null,i.imgLoadNum=0,i.imgRandom=["http://img2.imgtn.bdimg.com/it/u=1827962122,3613379018&fm=26&gp=0.jpg","http://img3.imgtn.bdimg.com/it/u=3139953554,3011511497&fm=26&gp=0.jpg","http://img4.imgtn.bdimg.com/it/u=1688026885,2773767715&fm=26&gp=0.jpg","http://img2.imgtn.bdimg.com/it/u=4064075977,3738371861&fm=26&gp=0.jpg","http://img0.imgtn.bdimg.com/it/u=2786741331,312930537&fm=26&gp=0.jpg","http://img2.imgtn.bdimg.com/it/u=15576430,1042561804&fm=26&gp=0.jpg","http://img3.imgtn.bdimg.com/it/u=702732967,177725924&fm=26&gp=0.jpg","http://img4.imgtn.bdimg.com/it/u=2170217910,293575024&fm=26&gp=0.jpg","http://img1.imgtn.bdimg.com/it/u=184317050,1666959161&fm=26&gp=0.jpg"],i.imgs=function(){for(var t=[],e=1;e<=30;e++){var a=b(0,8);t.push(i.imgRandom[a])}return t}(),i.resizeEvent=function(){i.resize()},i.scrollEvent=function(){i.scroll()},i.state={imgs:i.imgs,loaded:!1},i}return Object(h.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.contentNode.addEventListener("scroll",this.scrollEvent),window.addEventListener("resize",this.resizeEvent)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeEvent),window.removeEventListener("scroll",this.scrollEvent)}},{key:"scroll",value:function(){var t=document.querySelector(".img-wall");if(t.clientHeight+t.scrollTop===t.scrollHeight){for(var e=this.state.imgs,i=1;i<=4;i++){var a=b(0,8);e.push(this.imgRandom[a])}this.setState({imgs:e})}}},{key:"resize",value:function(){this.imgLoadNum>=this.imgs.length&&this.waterFlow()}},{key:"handleImageLoaded",value:function(){this.imgLoadNum+=1,this.imgLoadNum>=this.imgs.length&&(this.waterFlow(),this.setState({loaded:!0})),console.log("handleImageLoaded",this.imgLoadNum)}},{key:"waterFlow",value:function(){var t=document.querySelector(".img-wall");console.dir(t.scrollTop);for(var e=Array.from(document.querySelectorAll(".img-item")),i=Math.ceil(e.length/4),a=1;a<=i;a++)if(1!==a)for(var n=this.getRowTop(e,a-1,4),s=4*(a-1),o=0;s<=4*a-1&&s<e.length;s++,o++)e[s].style.top=n[o].top+"px",e[s].style.left=n[o].left-5+"px",e[s].style.position="absolute"}},{key:"getRowTop",value:function(t,e,i){for(var a=e*i-1,n=[],s=(e-1)*i;s<=a;s++){var o=t[s].offsetTop+t[s].offsetHeight,c=t[s].offsetLeft;n.push({top:o,left:c})}return n}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"img-wall",ref:function(e){return t.contentNode=e}},this.state.loaded?null:n.a.createElement("div",{className:"loading"}),this.state.imgs.map(function(e,i){return n.a.createElement("div",{className:"img-item",key:i},n.a.createElement("img",{src:e,onLoad:t.handleImageLoaded.bind(t)}))}))}}]),e}(k),E=function(t){function e(t){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this,t))}return Object(h.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"Imgwall-page"},n.a.createElement(w,null))}}]),e}(k),j=(i(40),i(41),function(t,e){var i={collides:!1,collidesPosition:""};return t.right>=e.right?(i.collides=!0,i.collidesPosition="right"):t.top<=e.top?(i.collides=!0,i.collidesPosition="top"):t.left<=e.left?(i.collides=!0,i.collidesPosition="left"):t.bottom>=e.bottom&&(i.collides=!0,i.collidesPosition="bottom"),i}),O=function(t){function e(t){var i;return Object(c.a)(this,e),(i=Object(l.a)(this,Object(u.a)(e).call(this,t))).interval=null,i.angle=80,i.ballDom=null,i.bricksDom=null,i.bricks=null,i.times=1,i.position={x:1,y:-1},i.state={x:250,y:330},i.angle=t.angle,i}return Object(h.a)(e,t),Object(r.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.bricks=t.bricks,t.start&&this.click()}},{key:"componentDidMount",value:function(){this.ballDom=document.querySelector(".ball"+this.props.num),this.bricksDom=document.querySelectorAll(".brick"),this.bricks=this.props.bricks}},{key:"sin",value:function(t){return Math.sin(2*Math.PI/360*t)}},{key:"cos",value:function(t){return Math.cos(2*Math.PI/360*t)}},{key:"transitionend",value:function(){console.log("transitionend")}},{key:"moveToBricks",value:function(){var t=this,e=this.state.x,i=this.state.y,a={left:e,right:e+Number(this.ballDom.offsetWidth),top:i,bottom:i+Number(this.ballDom.offsetHeight)};Array.from(this.bricksDom).map(function(e,i){var n={left:e.offsetLeft,right:e.offsetLeft+e.offsetWidth,top:e.offsetTop,bottom:e.offsetTop+e.offsetHeight};if(1===t.bricks[i].state){var s=function(t,e){var i={state:!0,direction:""};return e.right<t.left||e.left>t.right||e.bottom<t.top||e.top>t.bottom?i.state=!1:Math.abs(e.top-t.bottom)<=3&&(e.right>t.left||e.left<t.right)?i.direction="bottom":Math.abs(e.bottom-t.top)<=3&&(e.right>t.left||e.left<t.right)?i.direction="top":Math.abs(e.right-t.left)<=3&&(e.bottom>t.top||e.top<t.bottom)?i.direction="left":Math.abs(e.left-t.right)<=3&&(e.bottom>t.top||e.top<t.bottom)&&(i.direction="right"),i}(n,a);s.state&&(console.log("\u78b0\u649e\u4e86\u7b2c ".concat(i," \u7816 \u78b0\u649e ").concat(s.direction)),t.props.impact(i),t.position=function(t,e){var i=e;if(t.state)return"bottom"===t.direction?i.y=-i.y:"top"===t.direction?i.y=-i.y:"left"===t.direction?i.x=-i.x:"right"===t.direction?i.x=-i.x:"other"===t.direction&&(i.x=-i.x,i.y=-i.y),i}(s,t.position))}})}},{key:"moveToWall",value:function(){var t=this.state.x,e=this.state.y,i={left:t,right:t+5,top:e,bottom:e+5},a={left:0,top:0,right:505,bottom:500};if(j(i,a).collides)switch(j(i,a).collidesPosition){case"right":this.position.x=-this.position.x;break;case"top":this.position.y=-this.position.y;break;case"left":this.position.x=-this.position.x;break;case"bottom":this.position.y=-this.position.y}}},{key:"move",value:function(){var t=this.state.x,e=this.state.y;this.moveToWall(),this.moveToBricks(),t+=this.sin(this.angle)*this.position.x*this.times,e+=this.cos(this.angle)*this.position.y*this.times,this.setState({x:t,y:e})}},{key:"click",value:function(){var t=this;null===this.interval&&(this.interval=setInterval(function(){t.move()}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"ball ball".concat(this.props.num),style:{transform:"translate("+this.state.x+"px,"+this.state.y+"px)"},onClick:this.click.bind(this)})}}]),e}(k),M=(i(42),function(t){function e(t){var i;return Object(c.a)(this,e),(i=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={},i}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"brick ".concat(this.props.isHide?"brick-hide":"")})}}]),e}(k)),D=function(t){function e(t){var i;Object(c.a)(this,e),(i=Object(l.a)(this,Object(u.a)(e).call(this,t))).bricks=[{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1},{state:1}],i.balls=[{angle:30}];var a=i.bricks;return i.state={bricks:a,start:!1},i}return Object(h.a)(e,t),Object(r.a)(e,[{key:"impact",value:function(t){var e=this.bricks;e[t].state=0,this.setState({bricks:e}),console.log("\u7b2c ".concat(t," \u7816\u6d88\u5931"))}},{key:"start",value:function(){this.setState({start:!0})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"imgwall"},n.a.createElement("div",{className:"area"},this.bricks.map(function(t,e){return n.a.createElement(M,{key:e,isHide:0===t.state})}),this.balls.map(function(e,i){return n.a.createElement(O,{key:i,num:i,impact:t.impact.bind(t),bricks:t.state.bricks,angle:e.angle,start:t.state.start})})),n.a.createElement("div",{className:"button",onClick:this.start.bind(this)},"\u5f00\u59cb"))}}]),e}(k),I=(i(43),i(44),function(t){function e(t){var i;return Object(c.a)(this,e),(i=Object(l.a)(this,Object(u.a)(e).call(this,t))).AMap=null,i.state={mapData:[]},i}return Object(h.a)(e,t),Object(r.a)(e,[{key:"search",value:function(){this.seachVal.value&&this.props.search(this.seachVal.value)}},{key:"change",value:function(){this.autoComplete(this.seachVal.value)}},{key:"autoComplete",value:function(t){var e=this;console.log(this.AMap),this.AMap.service(["AMap.Autocomplete"],function(){new e.AMap.Autocomplete({city:"\u5929\u6d25",output:"#panel"}).search(t,function(t,i){e.assData({status:t,result:i})})})}},{key:"assData",value:function(t){var e=t.status,i=t.result;"complete"===e?(console.log("result",i),this.setState({mapData:i.tips})):this.setState({mapData:[]})}},{key:"clickItem",value:function(t){this.seachVal.value=t,this.search(),this.setState({mapData:[]})}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"map-search"},n.a.createElement("div",{className:"input"},n.a.createElement("input",{type:"text",placeholder:"\u8f93\u5165\u5173\u952e\u5b57",ref:function(e){return t.seachVal=e},onChange:this.change.bind(this)}),n.a.createElement("span",{className:"icon",onClick:this.search.bind(this)},n.a.createElement("i",{className:"iconfont iconsousuo"}))),n.a.createElement("div",{className:"panel",id:"panel"},this.state.mapData.map(function(e,i){return n.a.createElement("div",{className:"panel-item",onClick:t.clickItem.bind(t,e.name),key:i},n.a.createElement("span",{className:"address-name"},e.name),n.a.createElement("span",{className:"address-district"},e.district))})))}}]),e}(k)),N=function(t){function e(t){var i;return Object(c.a)(this,e),(i=Object(l.a)(this,Object(u.a)(e).call(this,t))).key="82c49231a3d2b7e5b4879b8bd82000bd",i.AMap=null,i.map=null,i.config={zoom:20,viewMode:"3D"},i.state={},console.log("constructor"),i.createMapLink(),i}return Object(h.a)(e,t),Object(r.a)(e,[{key:"createMapLink",value:function(){var t=this,e="https://webapi.amap.com/maps?v=1.4.15&key="+this.key,i=document.createElement("script");i.charset="utf-8",i.src=e,i.onload=function(){t.createMap()},document.head.appendChild(i)}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"createMap",value:function(){this.AMap=this.search.AMap=window.AMap,this.map=new this.AMap.Map("container",this.config)}},{key:"search",value:function(t){var e=this,i=this.map;this.AMap.service(["AMap.PlaceSearch"],function(){new e.AMap.PlaceSearch({pageSize:5,pageIndex:1,city:"022",citylimit:!0,map:i,autoFitView:!0}).search(t)})}},{key:"render",value:function(){var t=this;return n.a.createElement("div",null,n.a.createElement(I,{search:this.search.bind(this),ref:function(e){return t.search=e}}),n.a.createElement("div",{className:"map",id:"container"}),n.a.createElement("div",{id:"panel"}))}}]),e}(k),S=(i(45),i(13));var x={seat:{map:[[1,1,1,-1,-1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,1,-1,-1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,1,-1,-1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,1,0,0,0,1,1,1,1,1,1]]}},C=function(t){function e(t){var i;return Object(c.a)(this,e),(i=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={selected:[]},i}return Object(h.a)(e,t),Object(r.a)(e,[{key:"setSeat",value:function(t,e){var i=this.props.seat.map[t][e],a=t+"-"+e,n=this.state.selected;if(-1!==i){if(2===i){var s=n.findIndex(function(t){return t.position===a});n.splice(s,1),this.props.setSeat({position:a,status:1})}else 1===i&&(n.push({row:t,col:e,position:a}),this.props.setSeat({position:a,status:2}));this.setState({selected:n})}}},{key:"componentDidUpdate",value:function(t){}},{key:"render",value:function(){var t=this,e=this.props.seat;return n.a.createElement("div",{className:"selection"},n.a.createElement("div",{className:"screen"}),n.a.createElement("div",{className:"seats"},e.map.map(function(e,i){return n.a.createElement("div",{className:"seat-row",key:i},e.map(function(e,a){return n.a.createElement("span",{key:i+a,className:"seat ".concat(0===e?"none":"","  ").concat(-1===e?"disabled":""," ").concat(2===e?"selected":""),onClick:t.setSeat.bind(t,i,a)},n.a.createElement("i",{className:"iconfont icondingzuo-"}))}))})),n.a.createElement("div",{className:"info"},this.state.selected.map(function(t,e){return n.a.createElement("span",{className:"label",key:e},"\u7b2c",t.row+1,"\u6392 \u7b2c",t.col+1,"\u5ea7")})))}}]),e}(k),U=Object(S.b)(function(t){return{seat:t.seat}},function(t){return{setSeat:function(e){var i=e.position,a=e.status;return t(function(t){return{type:"SET_STATE",position:t.position,status:t.status}}({position:i,status:a}))}}})(C),A=i(12),L=i(28),F=[{path:"/imgcrop",component:g,name:"\u56fe\u7247\u526a\u88c1"},{path:"/imgwall",component:E,name:"\u4e0d\u89c4\u5219\u56fe\u7247\u5899"},{path:"/arkanoid",component:D,name:"\u6253\u7816\u5757"},{path:"/map",component:N,name:"\u9ad8\u5fb7\u5730\u56fe"},{path:"/selection",component:U,name:"\u9009\u5ea7\u4f4d"}],T=function(t){function e(t){var i;return Object(c.a)(this,e),i=Object(l.a)(this,Object(u.a)(e).call(this,t)),console.log(t),i}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return n.a.createElement(A.d,null,F.map(function(t,e){return n.a.createElement(A.b,{path:t.path,component:t.component,key:e})}),n.a.createElement(A.a,{from:"/",to:"/imgcrop"}))}}]),e}(n.a.Component),R=function(){return n.a.createElement(L.a,null,n.a.createElement(T,null))},P=(i(51),i(52),function(t){function e(t){var i;Object(c.a)(this,e),i=Object(l.a)(this,Object(u.a)(e).call(this,t));var a=window.location.hash.substring(1),n=F.findIndex(function(t){return t.path===a});return console.log(n),i.state={active:n},i}return Object(h.a)(e,t),Object(r.a)(e,[{key:"link",value:function(t,e){this.push(t),this.setState({active:e})}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"left-menu"},n.a.createElement("ul",null,F.map(function(e,i){return n.a.createElement("li",{onClick:t.link.bind(t,e.path,i),key:i,className:t.state.active===i?"active":""},e.name)})))}}]),e}(k)),z=function(t){function e(t){var i;return Object(c.a)(this,e),i=Object(l.a)(this,Object(u.a)(e).call(this,t)),console.log(i.props),i}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(P,null),n.a.createElement("div",{className:"main"},n.a.createElement(R,{props:this.props})))}}]),e}(n.a.Component);i(53),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=i(19),H=Object(W.b)(function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STATE":var e=t.position.split("-");return x.seat.map[e[0]][e[1]]=t.status,function t(e){var i=Array.isArray(e)?[]:{};for(var a in e)e.hasOwnProperty(a)&&("object"===typeof e[a]&&null!==e[a]?i[a]=t(e[a]):i[a]=e[a]);return i}(x);default:return x}});o.a.render(n.a.createElement(S.a,{store:H},n.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.18a4b9bb.chunk.js.map