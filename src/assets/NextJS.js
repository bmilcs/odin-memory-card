export default function NextJS() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 256"
    >
      <defs>
        <linearGradient
          id="svgIDc"
          x1="55.633%"
          x2="83.228%"
          y1="56.385%"
          y2="96.08%"
        >
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="svgIDd" x1="50%" x2="49.953%" y1="0%" y2="73.438%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
        </linearGradient>
        <circle id="svgIDa" cx="128" cy="128" r="128" />
      </defs>
      <mask id="svgIDb" fill="#fff">
        <use href="#svgIDa" />
      </mask>
      <g mask="url(#svgIDb)">
        <circle cx="128" cy="128" r="128" />
        <path
          fill="url(#svgIDc)"
          d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"
        />
        <path fill="url(#svgIDd)" d="M163.556 76.8h17.067v102.4h-17.067z" />
      </g>
    </svg>
  );
}
