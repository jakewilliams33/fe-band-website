import React, { useRef } from "react";
import "../Styles/NavbarStyles.css";

export const DvdBanner = () => {
  const section = useRef();
  const dvdlogo = useRef();
  const FPS = 40;

  let xPosition = Math.floor(Math.random() * (250 - -50 + 1) + -50);
  let yPosition = 5;

  let xSpeed = Math.random() < 0.5 ? -2.5 : 2.5;
  let ySpeed = 0.16;

  // let xSpeed = Math.random() < 0.5 ? 0.2 : -0.2;
  // let ySpeed = 0.02;

  function update() {
    if (dvdlogo.current) {
      dvdlogo.current.style.left = xPosition + "px";
      dvdlogo.current.style.top = yPosition + "px";
    }
  }

  setInterval(() => {
    if (dvdlogo.current) {
      if (
        xPosition + 267 >= window.visualViewport.width + 120 ||
        xPosition <= -56
      ) {
        xSpeed = -xSpeed;
        dvdlogo.current.style.fill = changeColor();
      }
      if (yPosition >= 11 || yPosition <= -1) {
        ySpeed = -ySpeed;
        dvdlogo.current.style.fill = changeColor();
      }
    }

    xPosition += xSpeed;
    yPosition += ySpeed;
    update();
  }, 1000 / FPS);

  function changeColor() {
    let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    return color;
  }

  const initialColor = "hsl(" + Math.random() * 360 + ", 100%, 75%)";

  return (
    <>
      <section
        className="bannerSection"
        ref={section}
        style={{
          height: "30px",
          overflow: "hidden",
          zIndex: 100,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
        <svg
          ref={dvdlogo}
          className="dvdlogo"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 910.000000 187.000000"
          style={{ left: 100, fill: initialColor }}
        >
          <g transform="translate(0.000000,187.000000) scale(0.100000,-0.100000)">
            <path
              d="M1610 1676 c0 -3 -291 -814 -306 -850 -7 -18 7 -18 437 -13 280 3
464 10 498 17 173 37 247 131 353 450 39 120 51 170 52 220 1 112 -34 150
-155 169 -58 10 -879 16 -879 7z m927 -89 c59 -31 54 -98 -24 -321 -76 -219
-124 -295 -214 -341 -75 -38 -152 -45 -536 -45 l-362 0 54 153 c29 83 81 229
115 322 34 94 69 189 77 213 l15 43 422 -3 c379 -3 424 -5 453 -21z"
            />
            <path
              d="M1742 1497 c-32 -33 -152 -380 -152 -437 0 -81 -4 -80 311 -80 151 0
290 4 309 10 37 11 113 79 136 123 35 67 74 210 74 274 0 61 -2 67 -34 99
l-34 34 -294 0 c-293 0 -295 0 -316 -23z m600 -67 c23 -29 20 -54 -23 -187
-35 -108 -61 -149 -109 -177 -32 -19 -54 -21 -297 -24 -167 -3 -263 0 -263 6
0 8 115 343 135 395 7 17 25 18 272 15 l265 -3 20 -25z"
            />
            <path
              d="M2716 1383 c-109 -335 -125 -407 -105 -467 29 -83 96 -103 373 -112
226 -7 448 6 516 31 102 36 170 108 216 228 16 40 65 194 110 342 l81 270
-125 3 c-69 1 -129 -1 -133 -5 -4 -4 -39 -112 -77 -240 -77 -253 -112 -336
-155 -368 -27 -19 -43 -20 -252 -20 -209 0 -224 1 -245 20 -31 28 -25 57 70
353 44 137 80 252 80 256 0 3 -58 6 -128 6 l-128 0 -98 -297z m262 225 c-3 -7
-26 -80 -52 -163 -26 -82 -54 -168 -63 -190 -8 -22 -18 -78 -20 -125 -5 -84
-5 -85 24 -113 21 -20 46 -30 89 -37 75 -12 329 -13 413 0 58 8 69 14 112 56
53 52 69 88 123 264 19 63 49 161 66 218 l32 102 57 0 58 0 -48 -162 c-62
-205 -123 -388 -145 -430 -65 -129 -162 -158 -529 -158 -388 0 -441 19 -414
149 9 48 174 573 186 594 2 4 29 7 60 7 40 0 54 -3 51 -12z"
            />
            <path
              d="M3890 1259 c-69 -232 -126 -428 -128 -435 -3 -12 71 -14 442 -14
l445 0 17 58 c9 31 22 79 30 106 8 27 14 53 14 58 0 4 -135 8 -300 8 -165 0
-300 3 -300 6 0 5 124 438 176 617 5 16 -6 17 -133 17 l-138 0 -125 -421z
m310 358 c0 -2 -34 -119 -75 -262 -77 -267 -87 -325 -58 -357 15 -17 37 -18
285 -18 147 0 268 -3 268 -6 0 -3 -5 -25 -11 -50 l-11 -44 -374 0 c-294 0
-372 3 -369 13 3 6 50 165 105 352 55 187 103 348 106 358 4 14 17 17 70 17
35 0 64 -1 64 -3z"
            />
            <path
              d="M4703 1573 l-30 -108 189 -3 c174 -2 189 -4 184 -20 -15 -51 -166
-619 -166 -625 0 -4 61 -7 135 -7 131 0 136 1 144 23 4 12 43 158 87 325 l78
302 188 0 187 0 10 38 c29 109 41 161 41 171 0 8 -144 11 -508 11 l-509 0 -30
-107z m953 0 l-12 -48 -176 -3 c-158 -2 -177 -4 -193 -22 -10 -11 -47 -135
-90 -299 -40 -154 -76 -289 -80 -300 -6 -18 -15 -21 -71 -21 -46 0 -64 4 -64
13 0 8 13 60 29 118 16 57 47 174 70 259 67 255 70 250 -150 250 l-157 0 9 38
c6 20 12 43 14 50 3 9 101 12 444 12 l439 0 -12 -47z"
            />
            <path
              d="M703 1603 c-32 -38 -60 -70 -63 -73 -3 -3 -140 -159 -304 -347 -163
-189 -302 -345 -307 -348 -29 -19 5 -25 134 -25 l142 0 60 73 61 72 269 0 270
0 9 -72 9 -73 143 0 c118 0 144 3 144 14 0 8 -14 106 -30 218 -17 112 -32 219
-35 238 -14 107 -37 264 -46 323 l-11 67 -193 0 -193 0 -59 -67z m391 -25 c5
-28 71 -481 95 -655 l8 -53 -77 0 -77 0 -7 57 c-11 98 5 93 -336 93 l-297 0
-72 -75 c-70 -74 -71 -75 -122 -75 l-51 0 44 52 c23 29 81 96 128 149 47 53
137 156 200 229 63 73 150 173 193 221 l78 89 144 0 143 0 6 -32z"
            />
            <path
              d="M816 1518 c-13 -13 -62 -66 -108 -119 -169 -196 -168 -195 -168 -237
0 -69 9 -72 232 -72 193 0 195 0 217 24 26 28 26 47 -5 271 -17 128 -35 155
-104 155 -26 0 -47 -7 -64 -22z m107 -185 c10 -76 17 -148 17 -160 0 -23 0
-23 -171 -23 -107 0 -169 4 -167 10 2 5 59 77 128 159 100 120 130 150 151
150 25 1 26 0 42 -136z"
            />
            <path
              d="M5831 1579 c-12 -50 -21 -95 -21 -100 0 -5 109 -9 263 -9 282 0 329
-6 398 -53 18 -12 44 -38 57 -57 20 -30 23 -44 20 -95 -11 -172 -155 -273
-415 -291 -84 -6 -93 -5 -93 10 0 10 20 105 45 213 25 107 45 196 45 199 0 2
-76 4 -169 4 -153 0 -170 -2 -175 -17 -12 -38 -136 -585 -136 -599 0 -12 36
-14 218 -14 383 0 528 22 697 104 217 105 332 240 343 401 4 65 -5 137 -24
190 -5 14 -4 17 4 10 6 -5 79 -208 162 -450 84 -242 155 -443 159 -447 3 -4
181 195 395 443 l389 449 262 0 c280 0 327 -6 396 -53 55 -37 79 -81 79 -146
-1 -130 -99 -232 -265 -276 -62 -16 -216 -30 -238 -22 -12 4 -5 42 34 209 27
111 48 206 49 211 0 4 -76 7 -169 7 -153 0 -170 -2 -175 -17 -12 -40 -136
-586 -136 -600 0 -25 567 -12 695 15 256 55 452 187 532 358 23 49 28 72 28
139 -1 67 -5 88 -27 131 -50 96 -165 177 -313 220 -52 15 -118 18 -506 21
l-446 4 -135 -163 c-143 -173 -296 -371 -305 -394 -9 -25 -20 -15 -27 26 -3
21 -42 150 -86 285 l-81 245 -654 0 -653 0 -21 -91z"
            />
            <path
              d="M6635 549 c-82 -4 -244 -18 -360 -29 -827 -83 -969 -250 -305 -359
303 -50 598 -71 1090 -78 560 -8 1006 16 1375 72 337 52 495 119 450 190 -57
91 -494 172 -1110 205 -218 11 -917 11 -1140 -1z m778 -174 c131 -27 161 -61
85 -94 -72 -32 -192 -44 -391 -38 -175 5 -249 16 -305 46 -69 37 36 85 233
105 73 7 309 -4 378 -19z"
            />
          </g>
        </svg>
      </section>
    </>
  );
};
