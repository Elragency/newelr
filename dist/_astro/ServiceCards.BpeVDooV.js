import{n as o,j as r}from"./styled.BekHdnu_.js";import"./index.a3y3H-wG.js";import{T as n,M as a}from"./index.BoK8Qf6Y.js";import{T as l}from"./index.ClWpz5Hd.js";import{C as m}from"./index.BYpVGFCg.js";import{FadeIn as p}from"./FadeIn.B2yYYVf5.js";const h=o.section`
    background: ${n.primary};
    padding-top: 90px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin: -43px 0 50px;
    z-index: 1;
    position: relative;
`,c=o.div`
    color: ${n.secondary};

    margin-bottom: 40px;
    max-width: 550px;

    p {
        color: ${n.tertiary};
    }

    h2 {
        font-size: 60px;
        line-height: 1.2;
        margin-bottom: 10px;

        ${a.max("lg")} {
            font-size: 40px;
            line-height: 1.2;
        }
    }
`,g=o.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    ${a.max("lg")} {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    h3 {
        font-size: 20px;
        line-height: 1.2;
        margin-bottom: 5px;
    }

    p {
        margin: 0;
        font-size: 16px;
        line-height: 1.2;
        letter-spacing: -0.5px;
        opacity: 0.8;
    }
`,C=({cards:e,description:i,title:t})=>{if(!e||!e.length)return null;const x=e.map((s,d)=>r.jsx(p,{children:r.jsxs(l,{children:[r.jsx("h3",{children:s.title}),r.jsx("p",{children:s.description})]})},d));return r.jsx(h,{children:r.jsxs(m,{children:[t&&i&&r.jsx(p,{children:r.jsxs(c,{children:[i&&r.jsx("p",{children:i}),t&&r.jsx("h2",{children:t})]})}),r.jsx(g,{children:x})]})})};export{C as ServiceCards};
