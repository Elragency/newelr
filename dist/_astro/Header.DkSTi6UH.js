import{n as i,j as e,F as h,c as a}from"./styled.BekHdnu_.js";import{T as o,M as r}from"./index.BoK8Qf6Y.js";import{I as m}from"./index.ByczX7Xd.js";import{r as s}from"./index.a3y3H-wG.js";const f=i.div`
    position: relative;
    z-index: 3;

    a {
        font-size: 35px;
        line-height: 30px;
        font-weight: 700;
        display: inline-flex;
        position: relative;

        span {
            &:after {
                content: "";
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 25%;
                height: 3px;
                background-color: ${o.primary};
                z-index: 1;
                transition: width 0.2s linear;
            }
        }

        &:hover span:after {
            width: 100%;
        }

        img {
            height: 50px;
            width: 63px;
            object-fit: contain;
        }
    }
`,u=()=>e.jsx(f,{children:e.jsx("a",{href:"/",children:e.jsx(m,{srcLocal:"logo",alt:"logo"})})}),y=i.header`
    width: 100%;

    padding: 20px 0;

    display: flex;

    justify-content: space-between;
    align-items: center;

    gap: 40px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    animation: ${h} 1s;
    animation-delay: 0.4s;
    transition: background 0.5s;

    &.scrolled {
        background: rgba(0, 0, 0, 0.8);
    }
`,j=i.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 40px;

    ${r.max("lg")} {
        padding: 0 20px;
    }
`,b=i.div`
    display: flex;
    gap: 50px;

    ${r.max("xl")} {
        gap: 20px;
    }
`,w=i.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    ${r.max("lg")} {
        position: fixed;
        top: 0;
        right: -100%;

        background: ${o.secondary};
        height: 100dvh;
        z-index: 2;
        transform: translateX(100%);
        transition: transform 0.3s linear, right 0.7s;
        padding-top: 85px;

        width: clamp(300px, 80%, 300px);

        ${({$isOpen:t})=>t&&a`
                right: 0;
                transform: translateX(0);
            `};
    }
`,v=i.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;

    ${r.min("lg")} {
        gap: 20px;
        align-items: center;
        justify-content: center;
    }

    ${r.max("lg")} {
        gap: 10px;
        padding: 20px 10px 53px;
        overflow: auto;
        width: 100%;
        height: 100%;

        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    > li a {
        text-decoration: none;
        color: ${o.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        line-height: 25px;
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 1px;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
        padding: 10px;
        border-radius: 5px;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;

        ${r.max("lg")} {
            padding: 10px 20px;
        }

        &:hover {
            background-color: ${o.primary};
            color: ${o.secondary};

            text-shadow: none;
        }

        img {
            margin: 0 15px 0 0;

            max-width: 30px;
            max-height: 30px;

            ${r.max("xl")} {
                margin: 0 10px 0 0;
            }
        }
    }
`,$=i.button`
    position: relative;
    z-index: 3;

    background: ${o.primary};
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s, border-color 0.3s, color 0.3s;
    width: 45px;
    height: 45px;
    border-color: transparent;

    ${r.min("lg")} {
        display: none;
    }
`,p=i.span`
    background: ${o.secondary};
    position: absolute;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    transition: transform 0.3s, background 0.3s, top 0.3s;
    pointer-events: none;

    width: 50%;
    height: 3px;

    ${r.max("lg")} {
        height: 2px;
    }

    ${({$open:t})=>t?a`
                  transform: translate(-50%, -50%) rotate(45deg);
                  top: 50%;
              `:a`
                  top: calc(50% - 4px);
              `}

    &:not(:first-of-type) {
        ${({$open:t})=>t?a`
                      transform: translate(-49%, -50%) rotate(-45deg);
                      top: 50%;
                  `:a`
                      top: calc(50% + 4px);
                  `}
    }
`,k=({state:t})=>{const{open:n,setOpen:l}=t,x=()=>{l(!n)},d=g=>{const c=g.target;!c.closest("nav")&&n&&c.tagName!=="BUTTON"&&l(!1)};return s.useEffect(()=>{if(n)return document.addEventListener("click",d),()=>{document.removeEventListener("click",d)}},[n]),e.jsxs($,{$open:n,onClick:x,"aria-label":"Menu","aria-expanded":n,role:"button",tabIndex:0,children:[e.jsx(p,{$open:n}),e.jsx(p,{$open:n})]})},L=()=>{const[t,n]=s.useState(!1);return e.jsxs(b,{children:[e.jsx(w,{$isOpen:t,children:e.jsxs(v,{children:[e.jsx("li",{children:e.jsx("a",{href:"/",children:"Acceuil"})}),e.jsx("li",{children:e.jsx("a",{href:"/design",children:"Design"})}),e.jsx("li",{children:e.jsx("a",{href:"/marketing",children:"Marketing"})}),e.jsx("li",{children:e.jsx("a",{href:"/blog",children:"Blog"})}),e.jsx("li",{children:e.jsx("a",{href:"/contact",children:"Contact"})})]})}),e.jsx(k,{state:{open:t,setOpen:n}})]})},O=()=>(s.useEffect(()=>{const t=document.querySelector("header"),n=()=>{window.scrollY>0?t?.classList.add("scrolled"):t?.classList.remove("scrolled")};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),e.jsx(y,{children:e.jsxs(j,{children:[e.jsx(u,{}),e.jsx(L,{})]})}));export{O as Header};
