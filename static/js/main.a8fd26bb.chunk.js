(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{20:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),s=a(3),o=a.n(s),i=(a(20),a(4)),l=a(7);a(21);function u(e){var t=e.formSubmitHandler,a=Object(r.useState)(""),c=Object(i.a)(a,2),s=c[0],o=c[1],u=function(){o("")};return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===s.trim())return l.b.info("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u0432\u0435\u043b\u0438 \u0432 \u043f\u043e\u0438\u0441\u043a! :(");t(s),u()},className:"SearchForm",children:[Object(n.jsx)("input",{className:"SearchForm-input",type:"text",value:s,autoComplete:"off",autoFocus:!0,placeholder:"\u041f\u043e\u0438\u0441\u043a",onChange:function(e){o(e.currentTarget.value.toLowerCase())}}),Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})]})})}var j=a(9),d=a(10),m=a(11),h=a(14),b=a(13);var g={fetchImages:function(e,t){return fetch("".concat("https://pixabay.com/api/","?key=").concat("19044793-8d0b89c981ce143090a5b157d","&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12&q=").concat(e)).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"))}))}},f=a(2),p=a.n(f);function O(e){var t=e.webformatURL,a=e.largeImageURL,r=e.clickOnImageItem;return Object(n.jsx)("li",{onClick:function(){return r(a)},className:"ImageGalleryItem",children:Object(n.jsx)("img",{src:t,url:a,alt:"",className:"ImageGalleryItem-image"})})}var v=document.querySelector("#modal-root");function x(e){var t=e.onCloseModal,a=e.children;Object(r.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}));var c=function(e){"Escape"===e.code&&t()};return Object(s.createPortal)(Object(n.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&t()},children:Object(n.jsx)("div",{className:"Modal",children:a})}),v)}function y(e){var t=e.images,a=Object(r.useState)(!1),c=Object(i.a)(a,2),s=c[0],o=c[1],l=Object(r.useState)(""),u=Object(i.a)(l,2),j=u[0],d=u[1],m=function(e){o(!0),d(e)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(n.jsx)(O,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,clickOnImageItem:m},e.id)}))}),s&&Object(n.jsx)(x,{onCloseModal:function(){o(!1)},children:Object(n.jsx)("img",{style:{height:540},src:j,alt:""})})]})}function I(e){var t=e.loadMoreBtn;return Object(n.jsx)("div",{className:"BoxBtn",children:Object(n.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})})}O.propTypes={openModal:p.a.func,closeModal:p.a.func,contacts:p.a.arrayOf(p.a.shape({webformatURL:p.a.string.isRequired,largeImageURL:p.a.string.isRequired,id:p.a.string.isRequired})),showModal:p.a.bool,imageModal:p.a.string};var S=a(12),w=a.n(S);function k(){return Object(n.jsx)("div",{style:{textAlign:"center"},children:Object(n.jsx)(w.a,{type:"Circles",color:"#00BFFF",height:100,width:100,timeout:3e3})})}function C(e){var t=e.message;return Object(n.jsx)("div",{role:"alert",children:Object(n.jsxs)("p",{children:["\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. Error: ",t]})})}function N(){return Object(n.jsx)("div",{style:{textAlign:"center"},children:Object(n.jsx)("p",{children:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u043d\u0435\u0442"})})}var L=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],error:null,status:"idle",page:1},e.handleBtnChangePage=function(){var t=e.state.page+1;e.setState({page:e.state.page+1}),g.fetchImages(e.props.searchImage,t).then((function(t){return e.setState((function(e){var a=e.images;return{images:[].concat(Object(j.a)(a),Object(j.a)(t.hits))}}))})),e.handleScroll()},e.handleScroll=function(){setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight-160,behavior:"smooth"})}),1e3)},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.searchImage!==this.props.searchImage&&(this.setState({status:"pending",page:1}),g.fetchImages(this.props.searchImage,this.state.page).then((function(e){a.setState({images:e.hits,status:"resolved"})})).catch((function(e){a.setState({error:e,status:"rejected"})})))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error,r=e.status;return"idle"===r?Object(n.jsx)("div",{style:{textAlign:"center"},children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432 \u043f\u043e\u0438\u0441\u043a"}):"pending"===r?Object(n.jsx)(k,{}):"rejected"===r?Object(n.jsx)(C,{message:a.message}):"resolved"===r?t.length?Object(n.jsxs)("div",{style:{margin:"0 auto",padding:10},children:[Object(n.jsx)(y,{images:t}),Object(n.jsx)(I,{loadMoreBtn:this.handleBtnChangePage})]}):Object(n.jsx)(N,{}):void 0}}]),a}(r.Component);var R=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(u,{formSubmitHandler:function(e){c(e)}}),Object(n.jsx)(L,{searchImage:a}),Object(n.jsx)(l.a,{autoClose:2e3,position:"top-center"})]})};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a8fd26bb.chunk.js.map