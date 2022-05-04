export const movingScrollRandom = [
    {
        gone: `0% {
        transform : translate(0,0);
        }
        100%{
            transform : translate(-110%,0);
        }`,
        come: `0% {
        transform : translate(100%,-100%);
        }
        100%{
            transform : translate(0,-100%);
        }`,
    },
    {
        gone: ` 0% {
          transform : translate(0,0);
        }
        100%{
            transform : translate(110%,0);
        }`,
        come: ` 0% {
          transform : translate(-100%,-100%);
        }
        100%{
            transform : translate(0,-100%);
        }`,
    },
    {
        gone: ` 0% {
          transform : translate(0,0);
        }
        100%{
            transform : translate(0,100%);
        }`,
        come: ` 0% {
          transform : translate(0,-200%);
        }
        100%{
            transform : translate(0,-100%);
        }`,
    },
    {
        gone: `0% {
          transform : translate(0,0);
        }
        100%{
            transform : translate(0,-100%);
        }`,
        come: `0% {
          transform : translate(0,0);
        }
        100%{
            transform : translate(0,-100%);
        }`,
    },
];