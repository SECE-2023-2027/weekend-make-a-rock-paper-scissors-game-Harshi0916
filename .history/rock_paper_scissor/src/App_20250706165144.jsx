<svg className="background-shape" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ff6b6b" /> {/* Coral */}
      <stop offset="100%" stopColor="#ff8e53" /> {/* Orange */}
    </linearGradient>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#a78bfa" /> {/* Soft purple */}
      <stop offset="100%" stopColor="#c4b5fd" /> {/* Lighter purple */}
    </linearGradient>
    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#f472b6" /> {/* Pink */
      <stop offset="100%" stopColor="#f9a8d4" /> {/* Light pink */
    </linearGradient>
  </defs>

  {/* Blob */}
  <path
    fill="url(#grad1)"
    opacity="0.35"
    d="M408,15Q470,80,540,140Q610,200,608,292Q606,384,555,457Q504,530,408,569Q312,608,240,540Q168,472,107,392Q46,312,76,225Q106,138,185,94Q264,50,336,32Q408,15,408,15Z"
  >
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 400 400"
      to="360 400 400"
      dur="60s"
      repeatCount="indefinite"
    />
  </path>

  {/* Circle shape */}
  <circle cx="700" cy="100" r="120" fill="url(#grad2)" opacity="0.2">
    <animate attributeName="r" values="120;140;120" dur="8s" repeatCount="indefinite" />
  </circle>

  {/* Bottom abstract path */}
  <path
    fill="url(#grad3)"
    opacity="0.25"
    d="M200,600 Q150,520 280,500 Q420,480 390,620 Q360,740 240,720 Q180,690 200,600 Z"
  >
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 300 600"
      to="360 300 600"
      dur="100s"
      repeatCount="indefinite"
    />
  </path>
</svg>