import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Inter', sans-serif;
        font-weight: lighter;
        
        
    }

    body {
        background-color: var(--background);

    }

    button {
        cursor: pointer;
        border: none;
    }

    a {
        text-decoration: none;
        color: initial;
    }

    ul, li {
        list-style: none
    }

    .error {
        color: firebrick;
        font-size: 12px;
    }

    :root {
        --primary-one: #005ED9;
        --primary-two: #0085BA;
        --primary-three: #00AAB9;
        --secondary-one: #00CBA2;
        --secondary-two: #8FE682;
        --secondary-three: #F9F871;

        --gray-one: #a8a8a8;
        --gray-two: #848484;
        --gray-three: #616161;
        --gray-four: #232323;

        --background: #1F287B;

        --button: #005E9E;
    }


::-webkit-scrollbar {
  width: 13px;
  height: 13px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #fff;
  border: 3px solid #1F287B;
  border-radius: 100px;
}
::-webkit-scrollbar-thumb:hover {
  background: #fff;
  border: 3px solid #1F287B;
  border-radius: 100px;
}
::-webkit-scrollbar-thumb:active {
  background: #005ED9;
}
::-webkit-scrollbar-track {
  background: #1F287B;
  border: 0px none #ffffff;
  /* border-radius: 36px; */
}
::-webkit-scrollbar-track:hover {
  background: #1F287B;
}
::-webkit-scrollbar-track:active {

}
::-webkit-scrollbar-corner {
  background: transparent;
}
`;
