import { css } from "@emotion/core"

const nprogressStyles = css`
/* Make clicks pass-through */
#nprogress {
    pointer-events: none;
}

#nprogress .bar {
    background: #29d;

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 5px;
}

/* Fancy blur effect */
#nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 5px #29d, 0 0 3px #29d;
    opacity: 1;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 25px;
}

#nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 3px transparent;
    border-top-color: #29d;
    border-left-color: #29d;
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
    overflow: hidden;
    position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
    position: absolute;
}

@-webkit-keyframes nprogress-spinner {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}
@keyframes nprogress-spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`

export const globalStyles = css`
* {
    box-sizing: border-box;
    flex-shrink: 0;
    flex-grow: 0;
}
html {
    overflow: hidden;
    height: 100%;
}
#__next {
    min-height: 100%;
}
body {
    height: 100%;
    overflow: auto;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}
main {
    -webkit-overflow-scrolling: touch;
}
${nprogressStyles}
`
