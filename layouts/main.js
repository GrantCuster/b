let fs = 14;
let lh = 1.5;
let rlh = fs * lh;
export default ({ children }) => (
  <div>
    {children}
    <style global jsx>{`
      @font-face {
        font-family: 'customono';
        src: url('/IBMPlexMono-Regular.woff2') format('woff2'),
          url('/IBMPlexMono-Regular.woff') format('woff');
      }
      * {
        box-sizing: border-box;
      }
      html {
        font-family: 'customono', monospace;
        font-size: ${fs}px;
        background: #efefef;
        line-height: ${lh};
      }
      body {
        margin: 0;
        padding: 0;
      }
      canvas {
        display: block;
      }
      img,
      video {
        display: block;
        max-width: 100%;
      }
      a {
        color: inherit;
      }
      textarea,
      input,
      button {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        padding: 0;
        border: none;
        margin: 0;
        text-align: left;
        background: transparent;
        color: black;
      }
      input,
      button {
        text-decoration: underline;
        cursor: pointer;
      }
      textarea {
        background: white;
        width: 100%;
        padding-left: 1ch;
        padding-right: 1ch;
        padding-top: ${rlh / 2}px;
        padding-bottom: ${rlh / 2}px;
      }
      .wrap {
        max-width: 64ch;
        margin: 0 auto;
        padding-left: 2ch;
        padding-right: 2ch;
      }
      .image-wrap {
        max-width: 134ch;
        margin: 0 auto;
        padding-left: 2ch;
        padding-right: 2ch;
      }

      .hide-outline button:focus {
        outline: none;
      }
      label {
        user-select: none;
        cursor: pointer;
        display: flex;
        align-items: center;
      }
      label input {
        margin-right: 1ch;
      }
    `}</style>
  </div>
);
