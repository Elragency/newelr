import{n,c,j as e}from"./styled.BekHdnu_.js";import"./index.a3y3H-wG.js";import{T as o,M as i}from"./index.BoK8Qf6Y.js";const a=n.div`
    padding: 30px;
    border-radius: 10px;
    background: ${o.primary};
    box-shadow: 0 0 10px rgb(123 123 123 / 30%);
    display: block;
    height: 100%;
    color: ${o.secondary};
    border-radius: 15px;

    ${t=>t.$variant==="background-text"&&g};
`,h=a.withComponent("a"),l=n.span`
    position: absolute;
    top: 0;
    right: 0;
    text-transform: uppercase;

    font-size: 90px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: -7px;
    z-index: 1;
    color: ${o.primary};
    opacity: 0.5;

    ${i.max("xxl")} {
        font-size: 80px;
    }

    ${i.max("xl")} {
        font-size: 60px;
        letter-spacing: -3px;
    }
`,m=n.div`
    position: relative;
    z-index: 2;

    ${i.max("md")} {
        max-width: 80%;
    }
`,g=c`
    position: relative;
    overflow: hidden;
    padding: 20px;

    h2,
    h3,
    h4 {
        margin-bottom: 10px;
        font-size: 20px;
        line-height: 1.2;

        &:after {
            content: none;
        }
    }

    h4,
    p {
        position: relative;
        z-index: 2;
    }

    p {
        line-height: 1.2;
    }
`,b=({children:t,variant:r,bgText:x,boxAsLink:s,...p})=>{const d=s?h:a;return e.jsxs(d,{$variant:r,...p,children:[r==="background-text"&&x&&e.jsx(l,{children:x}),e.jsx(m,{children:t})]})};export{b as T};
