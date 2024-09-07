import{n as e,j as t}from"./styled.BekHdnu_.js";import"./index.a3y3H-wG.js";import{C as n}from"./index.BYpVGFCg.js";import{T as o,M as a}from"./index.BoK8Qf6Y.js";import{T as r}from"./index.ClWpz5Hd.js";import{FadeIn as i}from"./FadeIn.B2yYYVf5.js";const s=e.section`
    background: ${o.primary};
    padding-top: 90px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin: -43px 0 90px;
    z-index: 1;
    position: relative;
`;e.div`
    max-width: 920px;
    margin: 0 auto;
`;e.h2`
    &,
    &:last-child {
        margin-bottom: 90px;
    }
`;const d=e(n)`
    ${a.min("xxxl")} {
        max-width: 920px;
    }
`,x=e.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin: 40px 0;

    ${a.max("lg")} {
        grid-template-columns: 1fr;
    }
`,y=()=>t.jsx(s,{children:t.jsxs(d,{children:[t.jsxs(x,{children:[t.jsx(i,{delay:.1,children:t.jsxs(r,{variant:"background-text",bgText:"Phone",boxAsLink:!0,href:"tel:+52 123 233 421",target:"_blank",children:[t.jsx("h3",{children:"+52 123 233 421"}),t.jsx("p",{children:"you can call me if you have any questions or just want to say hi"})]})}),t.jsx(i,{delay:.2,children:t.jsxs(r,{variant:"background-text",bgText:"Email",boxAsLink:!0,href:"mailto:youremail@gmail.com",target:"_blank",children:[t.jsx("h3",{children:"youremail@gmail.com"}),t.jsx("p",{children:"also you can write me an email if you have any questions"})]})})]}),t.jsx(i,{delay:.3,children:t.jsxs(r,{variant:"background-text",bgText:"Address",children:[t.jsx("h3",{children:"Address"}),t.jsx("p",{children:"Some street 123, 12345 City, Country"}),t.jsx("p",{children:"Office: Mystr street 321, 54321 City, Country"})]})})]})});export{y as Contact};
