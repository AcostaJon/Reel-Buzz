(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4531:function(e,t,i){Promise.resolve().then(i.bind(i,6571))},6571:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return ev}});var a=i(7437),n=i(2265);let s=(0,n.createContext)();var o=i(6648),r={src:"/Reel-Buzz/_next/static/media/bell-regular.c2397a7a.svg",height:512,width:448,blurWidth:0,blurHeight:0},l=i(3860),c=i.n(l);function d(){return(0,a.jsxs)("div",{className:c().ListOfNotifications,children:[(0,a.jsx)("div",{className:c().header,children:(0,a.jsx)("p",{children:"Notifications"})}),(0,a.jsxs)("div",{className:c().body,children:[(0,a.jsx)(o.default,{src:r,alt:"notification icon of a bell"}),(0,a.jsx)("h4",{children:"Your notifications live Here"})]})]})}var u=i(579),v=i.n(u),h={src:"/Reel-Buzz/_next/static/media/reelBuzzLogo.cd0bbf9e.svg",height:3399,width:4719,blurWidth:0,blurHeight:0};function m(e){let t=(0,n.useContext)(s);return(0,a.jsxs)("div",{className:v().OffCanvasMenu,id:"offCanvasMenu",children:[(0,a.jsxs)("div",{className:v().Container,children:[(0,a.jsx)(o.default,{src:h,width:90,height:100,alt:"reel buzz logo"}),(0,a.jsx)("span",{onClick:e=>{t.closeMenu(e)},className:v().closeButton,children:"x"})]}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{onClick:t=>{e.showMyAccount(t)},children:"Account"}),(0,a.jsx)("li",{onClick:t=>{e.logout()},children:"Logout"})]})]})}var g=i(194),x=i.n(g);function p(){let e=(0,n.useContext)(s);return(0,a.jsxs)("div",{className:x().loginContainer,children:[(0,a.jsx)("h1",{children:"Get total access to movies, TV shows, and more"}),(0,a.jsx)("h2",{children:"create account by signing in ↓"}),(0,a.jsxs)("form",{onSubmit:t=>{e.logginUser(t)},children:[(0,a.jsx)("input",{id:"email",type:"email",placeholder:"email",required:!0}),(0,a.jsx)("button",{children:"Start watching"})]})]})}var _=i(4367),j=i.n(_);function w(e){let t=(0,n.useContext)(s);return(0,a.jsx)("header",{id:"header",className:j().header,children:(0,a.jsxs)("div",{className:j().headerContainer,children:[(0,a.jsxs)("div",{className:j().leftSide,children:[(0,a.jsx)(o.default,{src:e.profilePicture,title:"profile picture",width:"50",height:"50",alt:"user image",priority:"true"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:e.userName}),(0,a.jsx)("h1",{children:e.email})]})]}),(0,a.jsxs)("div",{className:j().rightSide,children:[(0,a.jsx)("svg",{id:"notificationIcon",title:"alerts",onClick:e=>{t.notificationIcon(e)},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,a.jsx)("path",{d:"M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"})}),e.components[0],(0,a.jsx)("button",{onClick:e=>{t.logout(e)},type:"button",children:"Logout"}),(0,a.jsx)("svg",{onClick:e=>{t.hamburgerIcon(e)},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,a.jsx)("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})}),e.components[1]]})]})})}var f=i(6230),C=i.n(f);function S(e){let t=(0,n.useContext)(s);return(0,a.jsx)("div",{className:C().movieDiv,onClick:i=>{t.openMovie(e.backgroundImg,e.title,e.name,e.releaseDate,e.firstAir,e.rating,e.description,e.adult,e.id)},style:{backgroundImage:'-webkit-linear-gradient(rgba(29, 29, 29, 0.5), rgba(0, 0, 0, 0.2)), url("https://image.tmdb.org/t/p/original/'.concat(e.backgroundImg,'")')}})}var b=i(5653),F=i.n(b);function y(e){let t=e.movies,i=e.isTvShow,n=0;return(0,a.jsxs)("div",{className:F().nowPlaying,children:[(0,a.jsx)("div",{className:F().title,children:(0,a.jsx)("h2",{children:i?"Currently Airing TV Shows":"Movies In Theaters"})}),(0,a.jsx)("ul",{children:t.slice(0,13).map(e=>(0,a.jsxs)("li",{children:[(0,a.jsx)(S,{backgroundImg:e.poster_path,id:e.id,title:e.title,name:e.name,releaseDate:e.release_date,firstAir:e.first_air_date,adult:e.adult,description:e.overview,rating:e.vote_average}),(0,a.jsx)("p",{children:e.title?e.title:e.name})]},n++))})]})}var N=i(4987),z=i.n(N);function k(e){let t=e.movies,i=e.isTvShow,n=0;return(0,a.jsxs)("div",{className:z().popular,children:[(0,a.jsx)("div",{className:z().title,children:(0,a.jsx)("h2",{children:i?"Popular TV Shows":"Popular Movies"})}),(0,a.jsx)("ul",{children:t.slice(0,15).map(e=>(0,a.jsxs)("li",{children:[(0,a.jsx)(S,{backgroundImg:e.poster_path,id:e.id,title:e.title,name:e.name,releaseDate:e.release_date,firstAir:e.first_air_date,adult:e.adult,description:e.overview,rating:e.vote_average}),(0,a.jsx)("p",{children:e.title?e.title:e.name})]},n++))})]})}var M=i(8174),D=i.n(M);function I(e){let t=e.movies,i=e.isTvShow,n=0;return(0,a.jsxs)("div",{className:D().topRated,children:[(0,a.jsx)("div",{className:D().title,children:(0,a.jsx)("h2",{children:i?"Top Rated TV Shows":"Top Rated Movies"})}),(0,a.jsx)("ul",{children:t.slice(0,15).map(e=>(0,a.jsxs)("li",{children:[(0,a.jsx)(S,{backgroundImg:e.poster_path,id:e.id,title:e.title,name:e.name,releaseDate:e.release_date,firstAir:e.first_air_date,adult:e.adult,description:e.overview,rating:e.vote_average}),(0,a.jsx)("p",{children:e.title?e.title:e.name})]},n++))})]})}var L=i(4734),B=i.n(L);function T(){let[e,t]=(0,n.useState)(""),[i,o]=(0,n.useState)(),r=(0,n.useContext)(s),l=r.nowPlayingMovies,c=r.popularMovies,d=r.popularTvShow,u=r.onTv,v=0,h=e=>{e.preventDefault()},m=i=>{t(i.target.value);let a=l.filter(function(t){return t.title.toLocaleLowerCase().includes(e)}),n=c.filter(function(t){return t.title.toLocaleLowerCase().includes(e)}),s=d.filter(function(t){return t.name.toLocaleLowerCase().includes(e)}),r=[...a,...u.filter(function(t){return t.name.toLocaleLowerCase().includes(e)}),...s,...n];o(r.filter((e,t)=>r.findIndex(t=>t.id===e.id)===t))};return i?(0,a.jsxs)("section",{className:B().searchSection,children:[(0,a.jsx)("form",{onSubmit:h,onChange:m,className:B().inputContainer,children:(0,a.jsx)("input",{type:"text",placeholder:"Live Search "})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:i.map(e=>(0,a.jsxs)("li",{children:[(0,a.jsx)(S,{backgroundImg:e.poster_path,id:e.id,title:e.title,name:e.name,releaseDate:e.release_date,firstAir:e.first_air_date,adult:e.adult,description:e.overview,rating:e.vote_average,likes:e.vote_count}),(0,a.jsx)("p",{children:e.title?e.title:e.name})]},v++))})})]}):(0,a.jsxs)("section",{className:B().searchSection,children:[(0,a.jsx)("form",{onSubmit:h,onChange:m,className:B().inputContainer,children:(0,a.jsx)("input",{type:"text",placeholder:"Search for any movie or show"})}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[l.map(e=>(0,a.jsxs)("li",{children:[(0,a.jsx)(S,{backgroundImg:e.poster_path,id:e.id,title:e.title,name:e.name,releaseDate:e.release_date,firstAir:e.first_air_date,adult:e.adult,description:e.overview,rating:e.vote_average,likes:e.vote_count}),(0,a.jsx)("p",{children:e.title?e.title:e.name})]},v++)),c.map(e=>(0,a.jsxs)("li",{children:[(0,a.jsx)(S,{backgroundImg:e.poster_path,id:e.id,title:e.title,name:e.name,releaseDate:e.release_date,firstAir:e.first_air_date,adult:e.adult,description:e.overview,rating:e.vote_average,likes:e.vote_count}),(0,a.jsx)("p",{children:e.title?e.title:e.name})]},v++)),d.map(e=>(0,a.jsxs)("li",{children:[(0,a.jsx)(S,{backgroundImg:e.poster_path,id:e.id,title:e.title,name:e.name,releaseDate:e.release_date,firstAir:e.first_air_date,adult:e.adult,description:e.overview,rating:e.vote_average,likes:e.vote_count}),(0,a.jsx)("p",{children:e.title?e.title:e.name})]},v++)),u.map(e=>(0,a.jsxs)("li",{children:[(0,a.jsx)(S,{backgroundImg:e.poster_path,id:e.id,title:e.title,name:e.name,releaseDate:e.release_date,firstAir:e.first_air_date,adult:e.adult,description:e.overview,rating:e.vote_average,likes:e.vote_count}),(0,a.jsx)("p",{children:e.title?e.title:e.name})]},v++))]})})]})}var R=i(3518),P=i.n(R);function O(e){let t=e.movies,i=0;return(0,a.jsxs)("div",{className:P().upComing,children:[(0,a.jsx)("div",{className:P().title,children:(0,a.jsx)("h2",{children:"New & Coming Soon"})}),(0,a.jsx)("ul",{children:t.slice(0,15).map(e=>(0,a.jsxs)("li",{children:[(0,a.jsx)(S,{backgroundImg:e.poster_path,id:e.id,title:e.title,name:e.name,releaseDate:e.release_date,firstAir:e.first_air_date,adult:e.adult,description:e.overview,rating:e.vote_average}),(0,a.jsx)("p",{children:e.title?e.title:e.name})]},i++))})]})}var A=i(3230),H=i.n(A);function V(e){let t=(0,n.useContext)(s),i=e.backgroundImg;return(0,a.jsx)("div",{className:H().SavedMovieDiv,style:{backgroundImage:i},children:(0,a.jsx)("div",{onClick:i=>{t.removeSavedWidget(i,e.title,e.name)},children:(0,a.jsx)("p",{children:"x"})})})}var E=i(9173),U=i.n(E);function W(){let e=(0,n.useContext)(s),t=0;return(0,a.jsxs)("section",{className:U().heartSection,children:[(0,a.jsx)("div",{className:U().headerContainer,children:(0,a.jsx)("h1",{children:"Favorites "})}),(0,a.jsx)("ul",{children:e.favs.map(e=>(0,a.jsxs)("li",{children:[(0,a.jsx)(V,{backgroundImg:e.movieBG,title:e.title,name:e.name}),(0,a.jsx)("p",{children:e.title?e.title:e.name})]},t++))})]})}var G=i(3910),q=i.n(G),J=i(2036),K=i.n(J);function X(){var e;let t,i;let[r,l]=(0,n.useState)({}),c=(0,n.useContext)(s);(0,n.useEffect)(()=>{c.movieFrontData.title&&d(c.movieFrontData.id,"/Reel-Buzz/api/movies/getMovieTrailer").then(e=>{l(e.results[0])}),c.movieFrontData.name&&d(c.movieFrontData.id,"/Reel-Buzz/api/tvShows/getTvTrailer").then(e=>{l(e.results[0])})},[]);let d=async(e,t)=>{await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};function u(e){return((e+.05)*10).toString().slice(0,2)}return(0,a.jsxs)("section",{className:K().MovieFrontSection,children:[(0,a.jsx)("div",{className:K().mediaContainer,children:r?(0,a.jsx)(q(),{width:"100%",height:"360px",url:"https://www.youtube.com/watch?v=".concat(r.key),controls:!0}):(0,a.jsx)("div",{className:K().mediaImage,style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(c.movieFrontData.backgroundImg,")")}})}),(0,a.jsxs)("div",{className:K().detailsContainer,children:[(0,a.jsxs)("div",{className:K().detailsTitleContainer,children:[(0,a.jsx)(o.default,{src:h,width:90,height:100,alt:"reel buzz logo"}),(0,a.jsx)("h1",{children:c.movieFrontData.title?c.movieFrontData.title:c.movieFrontData.name}),(0,a.jsxs)("div",{className:K().DateContainer,children:[(0,a.jsx)("p",{children:(i=(e=c.movieFrontData.releaseDate?c.movieFrontData.releaseDate:c.movieFrontData.firstAir).slice(5,7),t=e.slice(0,4),i+"-"+e.slice(8,10)+"-"+t)}),(0,a.jsx)("span",{children:c.movieFrontData.adult?"18+":"E"})]}),(0,a.jsxs)("h3",{className:K().hideOnMobileLabel,children:["Fan Rating ",(0,a.jsx)("span",{className:K().ratingPercentage,children:"".concat(u(c.movieFrontData.rating),"%")})," "]}),(0,a.jsx)("h3",{className:K().hideOnMobileLabel,children:"Overview"}),(0,a.jsx)("p",{className:K().hideOnMobileDescription,children:c.movieFrontData.description?c.movieFrontData.description:"Overview is not available"})]}),(0,a.jsxs)("div",{className:K().detailsMediaContainer,children:[r?(0,a.jsx)(q(),{width:"100%",height:"500px",url:"https://www.youtube.com/watch?v=".concat(r.key),className:K().detailsPlayer,controls:!0}):(0,a.jsx)("div",{className:K().detailsImage,style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(c.movieFrontData.backgroundImg,")")}}),(0,a.jsxs)("div",{className:K().detailsInfo,children:[(0,a.jsxs)("h3",{className:K().ratingLabel,children:["Fan Rating ",(0,a.jsx)("span",{className:K().ratingPercentage,children:"".concat(u(c.movieFrontData.rating),"%")})," "]}),(0,a.jsx)("h3",{className:K().overviewLabel,children:"Overview"}),(0,a.jsx)("p",{className:K().overviewDescription,children:c.movieFrontData.description?c.movieFrontData.description:"Overview is not available"})]})]})]})]})}var Y=i(6997),Q=i.n(Y);function Z(){let e=(0,n.useContext)(s);return(0,a.jsx)("section",{className:Q().userSection,children:(0,a.jsxs)("form",{onSubmit:e.updateUserCred,children:[(0,a.jsx)("div",{className:Q().nameEmailContainer}),(0,a.jsxs)("div",{className:Q().imageContainer,children:[(0,a.jsx)("label",{children:"Profile Picture"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.default,{src:e.preview,width:"35",height:"35",alt:"preview image"}),(0,a.jsx)("input",{type:"file",id:"file",name:"image",onChange:e.onChangeUserImage})]}),(0,a.jsx)("input",{className:Q().submitButton,type:"submit",value:"Update"})]}),(0,a.jsx)("div",{className:Q().paymentContainer,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Subscription"}),(0,a.jsx)("input",{type:"button",value:"Current Subscription: Free"})]})})]})})}var $=i(6757),ee=i.n($);function et(e){var t;let i,o;let r=(0,n.useContext)(s);return(0,a.jsx)("div",{className:ee().showCaseWidget,style:{backgroundImage:"linear-gradient(0deg, rgba(255, 255, 255, 0.0), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original/".concat(e.backgroundImg,")")},children:(0,a.jsxs)("div",{className:ee().ContentInfoBox,children:[(0,a.jsx)("h3",{children:"Flix"}),(0,a.jsxs)("div",{className:ee().DateandRating,children:[(0,a.jsx)("p",{children:(o=(t=e.releaseDate?e.releaseDate:e.firstAir).slice(5,7),i=t.slice(0,4),o+"-"+t.slice(8,10)+"-"+i)}),(0,a.jsx)("span",{children:e.adult?"18+":"E"})]}),(0,a.jsx)("h1",{children:e.title?e.title:e.name}),(0,a.jsxs)("p",{className:ee().overview,children:[e.overview?e.overview.slice(0,100)+"...":""," "]}),(0,a.jsx)("button",{onClick:function(){r.openMovie(e.backgroundImg,e.title,e.name,e.releaseDate,e.firstAir,e.rating,e.overview,e.adult,e.id)},children:" More info "})]})})}var ei=i(2467),ea=i.n(ei);function en(e){let t=[];return e.movies&&(t=e.movies.slice(0,5)),e.tvShows&&(t=e.tvShows.slice(1,6)),e.movies&&e.tvShows&&(t=e.movies.slice(3,5).concat(e.tvShows.slice(4,5)).concat(e.movies.slice(0,1)).concat(e.tvShows.slice(5,6))),(0,a.jsx)("div",{className:ea().showcaseContainer,children:(0,a.jsx)("ul",{className:ea().showcaseUl,children:t.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(et,{backgroundImg:e.poster_path,id:e.id,title:e.title,name:e.name,releaseDate:e.release_date,firstAir:e.first_air_date,adult:e.adult,overview:e.overview,rating:e.vote_average})},e.id))})})}function es(e){let t=e.playing[0],i=e.playing[1],n=e.playing[2],s=e.playing[3],o=e.playing[4],r=e.playing[5],l=e.playing[6];switch(!0){case e.navSelection[0]:return(0,a.jsx)("section",{children:(0,a.jsxs)("div",{children:[(0,a.jsx)(en,{movies:i,tvShows:o}),(0,a.jsx)(y,{isTvShow:!0,movies:o}),(0,a.jsx)(y,{movies:t}),(0,a.jsx)(k,{isTvShow:!0,movies:r}),(0,a.jsx)(k,{movies:i})]})});case e.navSelection[1]:return(0,a.jsx)("section",{children:(0,a.jsxs)("div",{children:[(0,a.jsx)(en,{movies:i}),(0,a.jsx)(y,{movies:t}),(0,a.jsx)(O,{movies:s}),(0,a.jsx)(k,{movies:i}),(0,a.jsx)(I,{movies:n})]})});case e.navSelection[2]:return(0,a.jsx)("section",{children:(0,a.jsxs)("div",{children:[(0,a.jsx)(en,{tvShows:r}),(0,a.jsx)(y,{isTvShow:!0,movies:o}),(0,a.jsx)(I,{isTvShow:!0,movies:l}),(0,a.jsx)(k,{isTvShow:!0,movies:r})]})});case e.navSelection[3]:return(0,a.jsx)(W,{});case e.navSelection[4]:return(0,a.jsx)(T,{});case e.navSelection[5]:return(0,a.jsx)(Z,{});case e.navSelection[6]:return(0,a.jsx)(X,{})}}var eo=i(644),er=i.n(eo);function el(){let[e,t]=(0,n.useState)("#FFFFFF"),[i,o]=(0,n.useState)("#808080"),[r,l]=(0,n.useState)("#808080"),[c,d]=(0,n.useState)("#808080"),[u,v]=(0,n.useState)("#808080"),[h,m]=(0,n.useState)("#808080"),g=(0,n.useContext)(s);return(0,a.jsx)("nav",{className:er().nav,children:(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{onClick:e=>{g.homeDash(e),t("#FFFFFF"),o("#808080"),l("#808080"),d("#808080"),v("#808080"),m("#808080")},children:[(0,a.jsx)("svg",{style:{fill:e},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,a.jsx)("path",{d:"M64 80c-8.8 0-16 7.2-16 16l0 320c0    8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64    80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7    64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 64c6.7 0 13 2.8 17.6 7.7l104    112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9   4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z"})}),(0,a.jsx)("p",{style:{color:e},children:"HOME"})]}),(0,a.jsxs)("li",{onClick:e=>{g.movies(e),o("#FFFFFF"),t("#808080"),l("#808080"),d("#808080"),v("#808080"),m("#808080")},children:[(0,a.jsx)("svg",{style:{fill:i},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,a.jsx)("path",{d:"M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3    0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16    7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0    8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8    0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16    16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16    16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7    0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0    32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"})}),(0,a.jsx)("p",{style:{color:i},children:"MOVIES"})]}),(0,a.jsxs)("li",{onClick:e=>{g.tvShows(e),l("#FFFFFF"),t("#808080"),o("#808080"),d("#808080"),v("#808080"),m("#808080")},children:[(0,a.jsx)("svg",{style:{fill:r},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640   512",children:(0,a.jsx)("path",{d:"M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3   0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"})}),(0,a.jsx)("p",{style:{color:r},children:"TV"})]}),(0,a.jsxs)("li",{onClick:e=>{g.myLikes(e),d("#FFFFFF"),t("#808080"),v("#808080"),m("#808080"),o("#808080"),l("#808080")},children:[(0,a.jsx)("svg",{id:"heart_icon",style:{fill:c},xmlns:"http://www.w3.org/2000/svg",viewBox:"0    0 512 512",children:(0,a.jsx)("path",{d:"M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3    47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244    84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"})}),(0,a.jsx)("p",{style:{color:c},children:"FAVS"})]}),(0,a.jsxs)("li",{onClick:e=>{g.search(e),v("#FFFFFF"),t("#808080"),o("#808080"),l("#808080"),m("#808080"),d("#808080")},children:[(0,a.jsx)("svg",{style:{fill:u},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,a.jsx)("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4    25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0    0 288z"})}),(0,a.jsx)("p",{style:{color:u},children:"SEARCH"})]}),(0,a.jsxs)("li",{className:er().userIcon,id:"userIcon",onClick:e=>{g.userAccount(e),m("#FFFFFF"),t("#808080"),v("#808080"),d("#808080"),o("#808080"),l("#808080")},children:[(0,a.jsx)("svg",{style:{fill:h},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,a.jsx)("path",{d:"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"})}),(0,a.jsx)("p",{style:{color:h},children:"ACCOUNT"})]})]})})})}function ec(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w,{userName:e.header.username,email:e.header.email,profilePicture:e.header.profilePicture,components:[e.header.showNotificationList,e.header.offCanvasMenu]}),(0,a.jsx)(es,{navSelection:[e.content.homeClicked,e.content.movieClicked,e.content.tvShowClicked,e.content.heartClicked,e.content.searchClicked,e.content.userClicked,e.content.openMovieClicked],playing:[e.content.nowPlayingMovies,e.content.popularMovies,e.content.topRatedMovies,e.content.upcomingMovies,e.content.onTv,e.content.popularTvShow,e.content.topRatedTvShow]}),(0,a.jsx)(el,{})]})}var ed=i(8518),eu=i.n(ed);function ev(){let[e,t]=(0,n.useState)([]),[i,r]=(0,n.useState)([]),[l,c]=(0,n.useState)([]),[u,v]=(0,n.useState)([]),[h,g]=(0,n.useState)([]),[x,_]=(0,n.useState)([]),[j,w]=(0,n.useState)([]),[f,C]=(0,n.useState)([]),[S,b]=(0,n.useState)(!0),[F,y]=(0,n.useState)(!1),[N,z]=(0,n.useState)(!1),[k,M]=(0,n.useState)(!1),[D,I]=(0,n.useState)(!1),[L,B]=(0,n.useState)(!1),[T,R]=(0,n.useState)(!1),[P,O]=(0,n.useState)(!1),[A,H]=(0,n.useState)(null),[V,E]=(0,n.useState)(null),[U,W]=(0,n.useState)("Guest"),[G,q]=(0,n.useState)(""),[J,K]=(0,n.useState)("reelBuzzLogo.svg"),[X,Y]=(0,n.useState)("user-regular.svg"),[Q,Z]=(0,n.useState)("worx"),[$,ee]=(0,n.useState)({});(0,n.useEffect)(()=>{ea("/Reel-Buzz/api/movies/getNowPlaying").then(e=>{t(e.results)}),ea("/Reel-Buzz/api/movies/getPopular").then(e=>{r(e.results)}),ea("/Reel-Buzz/api/movies/getTopRated").then(e=>{c(e.results)}),ea("/Reel-Buzz/api/movies/getUpcoming").then(e=>{v(e.results)}),ea("/Reel-Buzz/api/tvShows/getNowPlaying").then(e=>{g(e.results)}),ea("/Reel-Buzz/api/tvShows/getPopular").then(e=>{_(e.results)}),ea("/Reel-Buzz/api/tvShows/getTopRated").then(e=>{w(e.results)}),ea("/Reel-Buzz/api/db/getUsers").then(e=>{Z(e)})},[]);let et=async e=>{await fetch("/Reel-Buzz/api/db/postUsers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},ei=async e=>{await fetch("/Reel-Buzz/api/db/postUserFeedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},ea=async e=>(await fetch(e)).json(),en=async e=>{e.preventDefault();let t=e.target[0].value;Q.some(e=>e.email===t)||await et({email:t}),q(t),O(!0),er()},es=async()=>{if(Q.some(e=>e.email===G))O(!1),q(""),C([]);else{let e=prompt("Before you go, leave a review");await ei({email:G,review:e}),O(!1),q(""),C([]),window.location.reload()}},eo=e=>{el(),E(null)},er=e=>{b(!0),M(!1),B(!1),y(!1),z(!1),I(!1),window.scrollTo(0,0)},el=e=>{B(!0),b(!1),y(!1),z(!1),M(!1),I(!1),window.scrollTo(0,0)};return P?(0,a.jsx)("main",{className:eu().loggedInMain,style:{backgroundImage:'-webkit-linear-gradient(rgba(10, 10, 10, 0.9), rgba(5, 5, 5, 0.9)), url("/Reel-Buzz/homepageBG.jpg")',backgroundSize:"cover"},children:(0,a.jsx)(s.Provider,{value:{saveFavorites:(e,t,i)=>{e.stopPropagation();let a=document.getElementById("heart_icon"),n=e.target.parentElement.parentElement;"bounce"===a.getAttribute("class")&&a.classList.remove("bounce"),C([...f,{movieBG:n.style.backgroundImage.substr(n.style.backgroundImage.indexOf("url"),250),title:t,name:i}]),void 0!=t?alert(t+" | Saved to Favorites"):alert(i+" | Saved to Favorites"),a.style.fill="red",a.classList.add("bounce")},removeSavedWidget:(e,t,i)=>{let a=e.target.parentElement.parentElement,n=a.style.backgroundImage.substr(a.style.backgroundImage.indexOf("url"),250);C(e=>e.filter(e=>n!=e.movieBG)),void 0!=t?alert(t+" | Removed "):alert(i+" | Removed ")},openMovie:(e,t,i,a,n,s,o,r,l)=>{R(!0),B(!1),b(!1),y(!1),z(!1),M(!1),I(!1),ee({backgroundImg:e,title:t,name:i,releaseDate:a,firstAir:n,rating:s,description:o,adult:r,id:l}),window.scrollTo(0,0)},updateUserCred:e=>{e.preventDefault(),K(X),alert("user credentials updated"),Y("/user-regular.svg")},onChangeUserImage:e=>{let t=e.target.files[0],i=new FileReader;i.onload=e=>{Y(i.result)},i.readAsDataURL(t)},notificationIcon:e=>{H((0,a.jsx)(d,{})),null!==A&&H(null)},hamburgerIcon:e=>{E((0,a.jsx)(m,{showMyAccount:eo,logout:es}))},homeDash:er,movies:e=>{y(!0),b(!1),z(!1),M(!1),B(!1),I(!1),window.scrollTo(0,0)},tvShows:e=>{g(h),_(x),w(j),z(!0),b(!1),M(!1),B(!1),y(!1),I(!1),window.scrollTo(0,0)},myLikes:e=>{M(!0),b(!1),y(!1),z(!1),B(!1),I(!1),window.scrollTo(0,0)},userAccount:el,closeMenu:()=>{E(null)},search:e=>{I(!0),b(!1),y(!1),z(!1),M(!1),B(!1),window.scrollTo(0,0)},logout:es,favs:f,movieFrontData:$,preview:X,nowPlayingMovies:e,popularMovies:i,popularTvShow:x,onTv:h},children:(0,a.jsx)(ec,{header:{username:U,email:G,profilePicture:J,showNotificationList:A,offCanvasMenu:V},content:{homeClicked:S,movieClicked:F,tvShowClicked:N,heartClicked:k,searchClicked:D,userClicked:L,openMovieClicked:T,nowPlayingMovies:e,popularMovies:i,topRatedMovies:l,upcomingMovies:u,onTv:h,popularTvShow:x,topRatedTvShow:j}})})}):(0,a.jsx)("main",{className:eu().loggedOutMain,style:{backgroundImage:'-webkit-linear-gradient(rgba(0, 0, 0, 0.9), rgba(10, 10, 10, 0.3)), url("/Reel-Buzz/homepageBG.jpg")',backgroundSize:"cover"},children:(0,a.jsxs)(s.Provider,{value:{logginUser:en},children:[(0,a.jsx)("nav",{children:(0,a.jsx)("div",{children:(0,a.jsx)(o.default,{src:"/Reel-Buzz/reelBuzzLogo.svg",width:90,height:100,alt:"reel buzz logo"})})}),(0,a.jsx)(p,{})]})})}},6997:function(e){e.exports={userSection:"account_userSection__ur2WW",nameEmailContainer:"account_nameEmailContainer___AUqO",paymentContainer:"account_paymentContainer__T_L1w",submitButton:"account_submitButton___jq_r",imageContainer:"account_imageContainer__9wAkW"}},9173:function(e){e.exports={heartSection:"favs_heartSection___owO5",headerContainer:"favs_headerContainer__EbNey"}},2036:function(e){e.exports={MovieFrontSection:"movieFront_MovieFrontSection__hSl2m",mediaImage:"movieFront_mediaImage__eLqK4",detailsContainer:"movieFront_detailsContainer__kDXcV",logo:"movieFront_logo__oFGlP",detailsTitleContainer:"movieFront_detailsTitleContainer__Bbks7",DateContainer:"movieFront_DateContainer__qKF5b",detailsImage:"movieFront_detailsImage__9WxPm",detailsPlayer:"movieFront_detailsPlayer__1SNBr",overviewLabel:"movieFront_overviewLabel__ahsDA",overviewDescription:"movieFront_overviewDescription__ivAfm",ratingLabel:"movieFront_ratingLabel__VlDD9",hideOnMobileLabel:"movieFront_hideOnMobileLabel__2sEh_",hideOnMobileDescription:"movieFront_hideOnMobileDescription___C6KQ",ratingPercentage:"movieFront_ratingPercentage__SLgp8",mediaContainer:"movieFront_mediaContainer__25B8C",detailsMediaContainer:"movieFront_detailsMediaContainer__WhoyP"}},4734:function(e){e.exports={searchSection:"search_searchSection__Gn97D",inputContainer:"search_inputContainer__ayDcD"}},4367:function(e){e.exports={header:"header_header__2pZKc",headerContainer:"header_headerContainer__BehGg",leftSide:"header_leftSide__Xoj0w",rightSide:"header_rightSide__UKE0y"}},3860:function(e){e.exports={ListOfNotifications:"notificationList_ListOfNotifications__K5GR_",header:"notificationList_header__ncaU3",body:"notificationList_body__EAiDK"}},579:function(e){e.exports={OffCanvasMenu:"offCanvasMenu_OffCanvasMenu__oiohC",Container:"offCanvasMenu_Container__MiFlk",closeButton:"offCanvasMenu_closeButton__1Giwp"}},194:function(e){e.exports={loginContainer:"login_loginContainer__IMuPV"}},6230:function(e){e.exports={movieDiv:"movieWidget_movieDiv__P5EDw"}},5653:function(e){e.exports={nowPlaying:"nowplaying_nowPlaying__N93a1",title:"nowplaying_title__mM9PR"}},4987:function(e){e.exports={popular:"popular_popular__xNYqa",title:"popular_title__A2XDJ"}},8174:function(e){e.exports={topRated:"topRated_topRated__JkovU",title:"topRated_title__RPmLz"}},3518:function(e){e.exports={upComing:"upComing_upComing__xJ6Dt",title:"upComing_title__db1FN"}},644:function(e){e.exports={nav:"navigation_nav__78SVu"}},3230:function(e){e.exports={SavedMovieDiv:"savedMovieWidget_SavedMovieDiv__4J11h"}},2467:function(e){e.exports={showcaseContainer:"showCase_showcaseContainer__yUAq1",showcaseUl:"showCase_showcaseUl__9N4YZ"}},6757:function(e){e.exports={showCaseWidget:"showcaseWidget_showCaseWidget__T9mPp",ContentInfoBox:"showcaseWidget_ContentInfoBox__p_QfR",DateandRating:"showcaseWidget_DateandRating__OORD2",overview:"showcaseWidget_overview__1xjBV"}},8518:function(e){e.exports={loggedOutMain:"page_loggedOutMain__zfsjS",titleAndLogin:"page_titleAndLogin__EfJaK",getTotalAccess:"page_getTotalAccess__qNXU7",loggedInMain:"page_loggedInMain__m811d"}}},function(e){e.O(0,[114,983,971,23,744],function(){return e(e.s=4531)}),_N_E=e.O()}]);