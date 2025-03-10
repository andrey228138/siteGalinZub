document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector(".select");
  const selectOptions = document.querySelector(".select-options");
  const line = document.querySelector(".line");

  let activeItem = null;
  const grid = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33337 1.99999C1.33337 1.63181 1.63185 1.33333 2.00004 1.33333H6.66671C7.0349 1.33333 7.33337 1.63181 7.33337 1.99999V6.66666C7.33337 7.03485 7.0349 7.33333 6.66671 7.33333H2.00004C1.63185 7.33333 1.33337 7.03485 1.33337 6.66666V1.99999ZM2.66671 2.66666V6H6.00004V2.66666H2.66671Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66663 1.99999C8.66663 1.63181 8.9651 1.33333 9.33329 1.33333H14C14.3681 1.33333 14.6666 1.63181 14.6666 1.99999V6.66666C14.6666 7.03485 14.3681 7.33333 14 7.33333H9.33329C8.9651 7.33333 8.66663 7.03485 8.66663 6.66666V1.99999ZM9.99996 2.66666V6H13.3333V2.66666H9.99996Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66663 9.33334C8.66663 8.96515 8.9651 8.66667 9.33329 8.66667H14C14.3681 8.66667 14.6666 8.96515 14.6666 9.33334V14C14.6666 14.3682 14.3681 14.6667 14 14.6667H9.33329C8.9651 14.6667 8.66663 14.3682 8.66663 14V9.33334ZM9.99996 10V13.3333H13.3333V10H9.99996Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33337 9.33334C1.33337 8.96515 1.63185 8.66667 2.00004 8.66667H6.66671C7.0349 8.66667 7.33337 8.96515 7.33337 9.33334V14C7.33337 14.3682 7.0349 14.6667 6.66671 14.6667H2.00004C1.63185 14.6667 1.33337 14.3682 1.33337 14V9.33334ZM2.66671 10V13.3333H6.00004V10H2.66671Z" fill="#808A98"/>
  </svg>`;
  const sliders = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66667 8.66666C3.03486 8.66666 3.33333 8.96514 3.33333 9.33333V14C3.33333 14.3682 3.03486 14.6667 2.66667 14.6667C2.29848 14.6667 2 14.3682 2 14V9.33333C2 8.96514 2.29848 8.66666 2.66667 8.66666Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66667 1.33333C3.03486 1.33333 3.33333 1.63181 3.33333 1.99999V6.66666C3.33333 7.03485 3.03486 7.33333 2.66667 7.33333C2.29848 7.33333 2 7.03485 2 6.66666V1.99999C2 1.63181 2.29848 1.33333 2.66667 1.33333Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 7.33333C8.36819 7.33333 8.66667 7.63181 8.66667 8V14C8.66667 14.3682 8.36819 14.6667 8 14.6667C7.63181 14.6667 7.33333 14.3682 7.33333 14V8C7.33333 7.63181 7.63181 7.33333 8 7.33333Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.33333C8.36819 1.33333 8.66667 1.63181 8.66667 1.99999V5.33333C8.66667 5.70152 8.36819 6 8 6C7.63181 6 7.33333 5.70152 7.33333 5.33333V1.99999C7.33333 1.63181 7.63181 1.33333 8 1.33333Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 10C13.7015 10 14 10.2985 14 10.6667V14C14 14.3682 13.7015 14.6667 13.3333 14.6667C12.9651 14.6667 12.6667 14.3682 12.6667 14V10.6667C12.6667 10.2985 12.9651 10 13.3333 10Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 1.33333C13.7015 1.33333 14 1.63181 14 1.99999V8C14 8.36819 13.7015 8.66666 13.3333 8.66666C12.9651 8.66666 12.6667 8.36819 12.6667 8V1.99999C12.6667 1.63181 12.9651 1.33333 13.3333 1.33333Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9.33333C0 8.96514 0.298477 8.66666 0.666667 8.66666H4.66667C5.03486 8.66666 5.33333 8.96514 5.33333 9.33333C5.33333 9.70152 5.03486 10 4.66667 10H0.666667C0.298477 10 0 9.70152 0 9.33333Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 5.33333C5.33333 4.96514 5.63181 4.66666 6 4.66666H10C10.3682 4.66666 10.6667 4.96514 10.6667 5.33333C10.6667 5.70152 10.3682 6 10 6H6C5.63181 6 5.33333 5.70152 5.33333 5.33333Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 10.6667C10.6667 10.2985 10.9651 10 11.3333 10H15.3333C15.7015 10 16 10.2985 16 10.6667C16 11.0349 15.7015 11.3333 15.3333 11.3333H11.3333C10.9651 11.3333 10.6667 11.0349 10.6667 10.6667Z" fill="#808A98"/>
  </svg>`;
  const truck = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.99999C0 1.63181 0.298477 1.33333 0.666667 1.33333H10.6667C11.0349 1.33333 11.3333 1.63181 11.3333 1.99999V10.6667C11.3333 11.0349 11.0349 11.3333 10.6667 11.3333H0.666667C0.298477 11.3333 0 11.0349 0 10.6667V1.99999ZM1.33333 2.66666V10H10V2.66666H1.33333Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5.33333C10 4.96514 10.2985 4.66666 10.6667 4.66666H13.3333C13.5101 4.66666 13.6797 4.7369 13.8047 4.86192L15.8047 6.86192C15.9298 6.98695 16 7.15652 16 7.33333V10.6667C16 11.0349 15.7015 11.3333 15.3333 11.3333H10.6667C10.2985 11.3333 10 11.0349 10 10.6667V5.33333ZM11.3333 6V10H14.6667V7.60947L13.0572 6H11.3333Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.66667 11.3333C3.11438 11.3333 2.66667 11.781 2.66667 12.3333C2.66667 12.8856 3.11438 13.3333 3.66667 13.3333C4.21895 13.3333 4.66667 12.8856 4.66667 12.3333C4.66667 11.781 4.21895 11.3333 3.66667 11.3333ZM1.33333 12.3333C1.33333 11.0447 2.378 10 3.66667 10C4.95533 10 6 11.0447 6 12.3333C6 13.622 4.95533 14.6667 3.66667 14.6667C2.378 14.6667 1.33333 13.622 1.33333 12.3333Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3333 11.3333C11.781 11.3333 11.3333 11.781 11.3333 12.3333C11.3333 12.8856 11.781 13.3333 12.3333 13.3333C12.8856 13.3333 13.3333 12.8856 13.3333 12.3333C13.3333 11.781 12.8856 11.3333 12.3333 11.3333ZM10 12.3333C10 11.0447 11.0447 10 12.3333 10C13.622 10 14.6667 11.0447 14.6667 12.3333C14.6667 13.622 13.622 14.6667 12.3333 14.6667C11.0447 14.6667 10 13.622 10 12.3333Z" fill="#808A98"/>
  </svg>`;
  const send = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"class="svg">
  <g clip-path="url(#clip0_105_179)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.138 0.861922C15.3984 1.12227 15.3984 1.54438 15.138 1.80473L7.8047 9.13806C7.54435 9.39841 7.12224 9.39841 6.86189 9.13806C6.60154 8.87771 6.60154 8.4556 6.86189 8.19525L14.1952 0.861922C14.4556 0.601572 14.8777 0.601572 15.138 0.861922Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.138 0.861922C15.3191 1.04301 15.3805 1.31184 15.2959 1.55356L10.6292 14.8869C10.5389 15.1449 10.3003 15.3216 10.0271 15.3328C9.75402 15.3439 9.50177 15.1872 9.39075 14.9374L6.82823 9.17173L1.06254 6.6092C0.81275 6.49818 0.656041 6.24594 0.667183 5.97282C0.678326 5.6997 0.855062 5.46105 1.11306 5.37075L14.4464 0.704088C14.6881 0.619484 14.9569 0.68083 15.138 0.861922ZM3.14068 6.07373L7.60405 8.05745C7.75488 8.12448 7.87547 8.24508 7.9425 8.3959L9.92623 12.8593L13.58 2.41997L3.14068 6.07373Z" fill="#808A98"/>
  </g>
  <defs>
  <clipPath id="clip0_105_179">
  <rect width="16" height="16" fill="white"/>
  </clipPath>
  </defs>
  </svg>`;
  const users = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.976311 10.3096C1.60143 9.68452 2.44928 9.33333 3.33333 9.33333H8.66667C9.55072 9.33333 10.3986 9.68452 11.0237 10.3096C11.6488 10.9348 12 11.7826 12 12.6667V14C12 14.3682 11.7015 14.6667 11.3333 14.6667C10.9651 14.6667 10.6667 14.3682 10.6667 14V12.6667C10.6667 12.1362 10.456 11.6275 10.0809 11.2524C9.70581 10.8774 9.1971 10.6667 8.66667 10.6667H3.33333C2.8029 10.6667 2.29419 10.8774 1.91912 11.2524C1.54405 11.6275 1.33333 12.1362 1.33333 12.6667V14C1.33333 14.3682 1.03486 14.6667 0.666667 14.6667C0.298477 14.6667 0 14.3682 0 14V12.6667C0 11.7826 0.35119 10.9348 0.976311 10.3096Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00008 2.66666C4.89551 2.66666 4.00008 3.56209 4.00008 4.66666C4.00008 5.77123 4.89551 6.66666 6.00008 6.66666C7.10465 6.66666 8.00008 5.77123 8.00008 4.66666C8.00008 3.56209 7.10465 2.66666 6.00008 2.66666ZM2.66675 4.66666C2.66675 2.82571 4.15913 1.33333 6.00008 1.33333C7.84103 1.33333 9.33341 2.82571 9.33341 4.66666C9.33341 6.50761 7.84103 7.99999 6.00008 7.99999C4.15913 7.99999 2.66675 6.50761 2.66675 4.66666Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6878 9.92001C12.7799 9.56351 13.1435 9.34913 13.5 9.44118C14.2151 9.62582 14.8486 10.0427 15.3011 10.6264C15.7536 11.2102 15.9994 11.9276 16 12.6662L16 14C16 14.3682 15.7015 14.6667 15.3333 14.6667C14.9651 14.6667 14.6667 14.3682 14.6667 14L14.6667 12.6672C14.6667 12.6671 14.6667 12.6672 14.6667 12.6672C14.6663 12.2241 14.5188 11.7935 14.2473 11.4433C13.9759 11.0931 13.5957 10.843 13.1667 10.7322C12.8102 10.6401 12.5958 10.2765 12.6878 9.92001Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0207 1.92131C10.1121 1.56463 10.4753 1.34951 10.8319 1.44084C11.549 1.62442 12.1845 2.04142 12.6383 2.6261C13.0921 3.21077 13.3385 3.92986 13.3385 4.67001C13.3385 5.41015 13.0921 6.12924 12.6383 6.71391C12.1845 7.29859 11.549 7.71559 10.8319 7.89917C10.4753 7.9905 10.1121 7.77538 10.0207 7.4187C9.92942 7.06201 10.1445 6.69883 10.5012 6.60751C10.9314 6.49736 11.3127 6.24716 11.585 5.89635C11.8573 5.54555 12.0051 5.11409 12.0051 4.67001C12.0051 4.22592 11.8573 3.79447 11.585 3.44366C11.3127 3.09286 10.9314 2.84266 10.5012 2.73251C10.1445 2.64118 9.92942 2.278 10.0207 1.92131Z" fill="#808A98"/>
  </svg>`;
  const setings = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="svg">
  <g clip-path="url(#clip0_105_216)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.66667C7.26362 6.66667 6.66667 7.26362 6.66667 8C6.66667 8.73638 7.26362 9.33333 8 9.33333C8.73638 9.33333 9.33333 8.73638 9.33333 8C9.33333 7.26362 8.73638 6.66667 8 6.66667ZM5.33333 8C5.33333 6.52724 6.52724 5.33333 8 5.33333C9.47276 5.33333 10.6667 6.52724 10.6667 8C10.6667 9.47276 9.47276 10.6667 8 10.6667C6.52724 10.6667 5.33333 9.47276 5.33333 8Z" fill="#808A98"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.33333C7.82319 1.33333 7.65362 1.40357 7.5286 1.5286C7.40357 1.65362 7.33333 1.82319 7.33333 2V2.11599C7.33196 2.46053 7.22986 2.79715 7.03963 3.08441C6.84939 3.37167 6.5793 3.59703 6.26262 3.73276C6.20625 3.75692 6.14695 3.77313 6.08641 3.78104C5.79865 3.88181 5.48888 3.90665 5.18733 3.85197C4.84 3.789 4.5195 3.62341 4.26716 3.37658L4.2619 3.37143L4.22193 3.3314C4.16001 3.26942 4.08623 3.21999 4.00529 3.18644C3.92436 3.15289 3.83761 3.13562 3.75 3.13562C3.66239 3.13562 3.57564 3.15289 3.49471 3.18644C3.41377 3.21999 3.34025 3.26916 3.27833 3.33114L3.27781 3.33167C3.21582 3.39358 3.16665 3.46711 3.1331 3.54804C3.09955 3.62897 3.08228 3.71572 3.08228 3.80333C3.08228 3.89094 3.09955 3.97769 3.1331 4.05863C3.16665 4.13956 3.21582 4.21308 3.27781 4.275L3.32327 4.32046C3.57011 4.57281 3.73566 4.89334 3.79864 5.24067C3.86037 5.58109 3.82075 5.93198 3.68497 6.24985C3.56126 6.57422 3.34465 6.85511 3.06203 7.05725C2.7737 7.26348 2.42999 7.3782 2.07559 7.38648L2.06 7.38667H2C1.82319 7.38667 1.65362 7.4569 1.5286 7.58193C1.40357 7.70695 1.33333 7.87652 1.33333 8.05333C1.33333 8.23014 1.40357 8.39971 1.5286 8.52474C1.65362 8.64976 1.82319 8.72 2 8.72H2.11599C2.46053 8.72137 2.79715 8.82347 3.08441 9.01371C3.37067 9.20329 3.59547 9.47215 3.73134 9.78741C3.87272 10.1095 3.91474 10.4665 3.85197 10.8127C3.789 11.16 3.62341 11.4805 3.37658 11.7328L3.37143 11.7381L3.3314 11.7781C3.26942 11.84 3.21999 11.9138 3.18644 11.9947C3.15289 12.0756 3.13562 12.1624 3.13562 12.25C3.13562 12.3376 3.15289 12.4244 3.18644 12.5053C3.21999 12.5862 3.26916 12.6598 3.33114 12.7217L3.33167 12.7222C3.39358 12.7842 3.46711 12.8333 3.54804 12.8669C3.62897 12.9004 3.71572 12.9177 3.80333 12.9177C3.89094 12.9177 3.97769 12.9004 4.05863 12.8669C4.13956 12.8333 4.21309 12.7842 4.275 12.7222L4.32046 12.6767C4.57281 12.4299 4.89334 12.2643 5.24067 12.2014C5.58108 12.1396 5.93197 12.1792 6.24985 12.315C6.57422 12.4387 6.85511 12.6553 7.05725 12.938C7.26348 13.2263 7.3782 13.57 7.38648 13.9244L7.38667 13.94V14C7.38667 14.1768 7.4569 14.3464 7.58193 14.4714C7.70695 14.5964 7.87652 14.6667 8.05333 14.6667C8.23014 14.6667 8.39971 14.5964 8.52474 14.4714C8.64976 14.3464 8.72 14.1768 8.72 14V13.8867L8.72001 13.884C8.72138 13.5395 8.82347 13.2029 9.01371 12.9156C9.2033 12.6293 9.4722 12.4045 9.78749 12.2686C10.1096 12.1273 10.4665 12.0853 10.8127 12.148C11.16 12.211 11.4805 12.3766 11.7328 12.6234L11.7381 12.6286L11.7781 12.6686C11.84 12.7306 11.9138 12.78 11.9947 12.8136C12.0756 12.8471 12.1624 12.8644 12.25 12.8644C12.3376 12.8644 12.4244 12.8471 12.5053 12.8136C12.5862 12.78 12.6598 12.7308 12.7217 12.6689L12.7222 12.6683C12.7842 12.6064 12.8333 12.5329 12.8669 12.452C12.9004 12.371 12.9177 12.2843 12.9177 12.1967C12.9177 12.1091 12.9004 12.0223 12.8669 11.9414C12.8333 11.8604 12.7842 11.7869 12.7222 11.725L12.6767 11.6795C12.4299 11.4272 12.2643 11.1067 12.2014 10.7593C12.1386 10.4132 12.1806 10.0562 12.322 9.73416C12.4578 9.41886 12.6826 9.14997 12.9689 8.96038C13.2562 8.77014 13.5928 8.66805 13.9373 8.66667L13.94 8.66666L14 8.66667C14.1768 8.66667 14.3464 8.59643 14.4714 8.4714C14.5964 8.34638 14.6667 8.17681 14.6667 8C14.6667 7.82319 14.5964 7.65362 14.4714 7.5286C14.3464 7.40357 14.1768 7.33333 14 7.33333H13.8867L13.884 7.33333C13.5395 7.33195 13.2029 7.22986 12.9156 7.03963C12.6283 6.84939 12.403 6.5793 12.2672 6.26262C12.2431 6.20625 12.2269 6.14695 12.219 6.08641C12.1182 5.79865 12.0933 5.48888 12.148 5.18733C12.211 4.84 12.3766 4.5195 12.6234 4.26716L12.6286 4.2619L12.6686 4.22193C12.7306 4.16001 12.78 4.08622 12.8136 4.00529C12.8471 3.92436 12.8644 3.83761 12.8644 3.75C12.8644 3.66239 12.8471 3.57564 12.8136 3.49471C12.78 3.41378 12.7308 3.34025 12.6689 3.27833L12.6683 3.27781C12.6064 3.21582 12.5329 3.16665 12.452 3.1331C12.371 3.09955 12.2843 3.08228 12.1967 3.08228C12.1091 3.08228 12.0223 3.09955 11.9414 3.1331C11.8604 3.16665 11.7869 3.21583 11.725 3.27781L11.6795 3.32327C11.4272 3.57011 11.1067 3.73566 10.7593 3.79864C10.4132 3.86141 10.0562 3.81939 9.73408 3.67801C9.41882 3.54213 9.14995 3.31734 8.96038 3.03108C8.77014 2.74382 8.66805 2.4072 8.66667 2.06266L8.66667 2.06V2C8.66667 1.82319 8.59643 1.65362 8.4714 1.5286C8.34638 1.40357 8.17681 1.33333 8 1.33333ZM12.9333 10L13.5432 10.2692C13.5083 10.3484 13.4979 10.4363 13.5133 10.5215C13.5286 10.6057 13.5685 10.6835 13.6279 10.7451L13.6645 10.7817C13.6644 10.7816 13.6646 10.7818 13.6645 10.7817C13.8503 10.9674 13.998 11.1881 14.0986 11.4308C14.1992 11.6736 14.251 11.9338 14.251 12.1967C14.251 12.4595 14.1992 12.7198 14.0986 12.9625C13.9979 13.2053 13.8504 13.4259 13.6645 13.6117L13.1933 13.14L13.665 13.6111C13.4793 13.7971 13.2587 13.9446 13.0159 14.0453C12.7731 14.1459 12.5128 14.1977 12.25 14.1977C11.9872 14.1977 11.7269 14.1459 11.4841 14.0453C11.2414 13.9447 11.021 13.7972 10.8353 13.6114C10.8353 13.6115 10.8352 13.6113 10.8353 13.6114L10.7984 13.5746C10.7369 13.5151 10.659 13.4752 10.5748 13.46C10.4896 13.4445 10.4017 13.4549 10.3225 13.4899L10.316 13.4928C10.2383 13.5261 10.172 13.5813 10.1254 13.6518C10.0789 13.722 10.0539 13.8042 10.0533 13.8883V14C10.0533 14.5304 9.84262 15.0391 9.46755 15.4142C9.09247 15.7893 8.58377 16 8.05333 16C7.5229 16 7.01419 15.7893 6.63912 15.4142C6.26405 15.0391 6.05333 14.5304 6.05333 14V13.9496C6.05017 13.8648 6.02218 13.7827 5.97276 13.7136C5.92218 13.6429 5.85149 13.589 5.76988 13.559C5.7567 13.5542 5.74367 13.5489 5.73082 13.5432C5.65161 13.5083 5.56374 13.4979 5.47855 13.5133C5.39428 13.5286 5.31645 13.5685 5.25487 13.6279L5.21833 13.6645C5.21842 13.6644 5.21825 13.6646 5.21833 13.6645C5.03264 13.8503 4.8119 13.998 4.56921 14.0986C4.32642 14.1992 4.06617 14.251 3.80333 14.251C3.5405 14.251 3.28025 14.1992 3.03745 14.0986C2.79489 13.998 2.5745 13.8507 2.38886 13.665C2.2029 13.4793 2.05539 13.2587 1.95474 13.0159C1.85409 12.7731 1.80228 12.5128 1.80228 12.25C1.80228 11.9872 1.85409 11.7269 1.95474 11.4841C2.05539 11.2413 2.2029 11.0207 2.38886 10.835L2.42541 10.7985C2.48486 10.7369 2.52475 10.659 2.54003 10.5748C2.55548 10.4896 2.54505 10.4017 2.51009 10.3225L2.5072 10.316C2.47391 10.2383 2.41867 10.172 2.34821 10.1254C2.27803 10.0789 2.19583 10.0539 2.11167 10.0533H2C1.46957 10.0533 0.960859 9.84262 0.585786 9.46755C0.210714 9.09247 0 8.58377 0 8.05333C0 7.5229 0.210714 7.01419 0.585786 6.63912C0.960859 6.26405 1.46957 6.05333 2 6.05333H2.05043C2.13522 6.05017 2.21728 6.02218 2.28637 5.97276C2.35709 5.92218 2.41096 5.85149 2.44098 5.76988C2.44582 5.7567 2.45109 5.74367 2.45676 5.73082C2.49172 5.65161 2.50215 5.56374 2.4867 5.47855C2.47142 5.39428 2.43152 5.31645 2.37206 5.25487L2.33552 5.21833C2.14957 5.03259 2.00205 4.81201 1.90141 4.56921C1.80076 4.32642 1.74895 4.06616 1.74895 3.80333C1.74895 3.5405 1.80076 3.28025 1.90141 3.03745C2.00201 2.79477 2.14943 2.57429 2.33526 2.3886C2.52095 2.20277 2.74144 2.05534 2.98412 1.95474C3.22692 1.85409 3.48717 1.80228 3.75 1.80228C4.01283 1.80228 4.27308 1.85409 4.51588 1.95474C4.75868 2.05539 4.97925 2.2029 5.165 2.38886L5.20154 2.4254C5.26312 2.48485 5.34095 2.52475 5.42521 2.54003C5.51041 2.55548 5.59828 2.54505 5.67749 2.51009C5.72018 2.49125 5.76462 2.47699 5.81005 2.46748C5.85653 2.43593 5.89665 2.39549 5.92796 2.34821C5.97444 2.27803 5.99947 2.19583 6 2.11167V2C6 1.46957 6.21071 0.960859 6.58579 0.585786C6.96086 0.210714 7.46957 0 8 0C8.53043 0 9.03914 0.210714 9.41421 0.585786C9.78929 0.960859 10 1.46957 10 2V2.05833C10.0005 2.1425 10.0256 2.22469 10.072 2.29488C10.1187 2.36534 10.1849 2.42062 10.2626 2.45391L10.2692 2.45672C10.3484 2.49168 10.4363 2.50215 10.5215 2.4867C10.6057 2.47142 10.6835 2.43152 10.7451 2.37207L10.7817 2.33552C10.9674 2.14957 11.188 2.00205 11.4308 1.90141C11.6736 1.80076 11.9338 1.74895 12.1967 1.74895C12.4595 1.74895 12.7198 1.80076 12.9625 1.90141C13.2053 2.00205 13.4259 2.14957 13.6117 2.33552C13.7974 2.52116 13.9447 2.74155 14.0453 2.98412C14.1459 3.22691 14.1977 3.48717 14.1977 3.75C14.1977 4.01283 14.1459 4.27309 14.0453 4.51588C13.9447 4.75856 13.7972 4.97905 13.6114 5.16474C13.6115 5.16465 13.6113 5.16482 13.6114 5.16474L13.5746 5.20154C13.5151 5.26312 13.4752 5.34095 13.46 5.42521C13.4445 5.51041 13.4549 5.59828 13.4899 5.67749C13.5088 5.72018 13.523 5.76462 13.5325 5.81004C13.5641 5.85653 13.6045 5.89665 13.6518 5.92796C13.722 5.97444 13.8042 5.99947 13.8883 6H14C14.5304 6 15.0391 6.21071 15.4142 6.58579C15.7893 6.96086 16 7.46957 16 8C16 8.53043 15.7893 9.03914 15.4142 9.41421C15.0391 9.78929 14.5304 10 14 10H13.9417C13.8575 10.0005 13.7753 10.0256 13.7051 10.072C13.6347 10.1187 13.5794 10.1849 13.5461 10.2626L12.9333 10Z" fill="#808A98"/>
  </g>
  <defs>
  <clipPath id="clip0_105_216">
  <rect width="16" height="16" fill="white"/>
  </clipPath>
  </defs>
  </svg>`;
  const tabs = [
    {
      id: 0,
      icon: grid,
      title: "Dashboard",
      counter: null,
      titleContent: "Dashboard",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur est minus sapiente minima amet tempora necessitatibus maxime a, repudiandae culpa delectus, impedit nulla unde? Cumque mollitia tempora architecto molestiae unde nobis harum, sunt vel. Labore accusamus fuga mollitia hic aperiam repudiandae unde rerum sunt exercitationem dolorem expedita tenetur animi accusantium laborum necessitatibus corrupti sed quod laudantium, sit porro? Libero enim rerum assumenda facilis modi nemo, rem excepturi eligendi alias quaerat, earum, debitis quis consectetur magnam inventore! Voluptatibus perspiciatis deserunt quo numquam dolore nihil repudiandae beatae fuga ducimus, labore asperiores necessitatibus deleniti. Minus totam dolor sit molestias quas ad! Laudantium laboriosam nesciunt quia quo. Laudantium, harum praesentium sed ut libero nemo voluptate ad quo, eius quae incidunt id. Reprehenderit accusamus sed dignissimos, illo, asperiores possimus in voluptas debitis molestias esse assumenda laborum facilis. Distinctio, et? Explicabo enim sit quam iure natus! Blanditiis quas illo, quam ipsam minus maxime iste labore voluptas maiores odio praesentium, sint odit a accusamus expedita nihil dolorum id laborum delectus fugit quasi, nisi nemo dicta ab. Voluptatem vitae ab nam explicabo voluptatibus deleniti repellendus, consequatur assumenda facilis illo voluptates, fugiat rem quo dicta obcaecati illum? Illo dicta expedita quasi debitis, recusandae placeat harum omnis nesciunt labore, officiis ea modi sed laudantium. Rem modi quibusdam cupiditate magnam, dolorum distinctio quasi sapiente, voluptas aperiam cum illo officia dicta harum sequi explicabo deserunt itaque, delectus sint. Maiores, iste aperiam reiciendis accusamus eaque rem eius architecto aut, itaque ipsam sequi nostrum voluptas! Alias distinctio repudiandae est adipisci, explicabo modi iste, consectetur sit consequatur facilis eaque odit mollitia asperiores voluptas, deserunt laboriosam inventore? Distinctio eligendi sunt rem quo, quae, dolor eos eveniet mollitia saepe voluptatem asperiores officia excepturi, nihil fugiat? Ab quod neque in tempore incidunt reprehenderit tenetur quo officiis nam? Necessitatibus quod obcaecati dolorem minima cumque earum sunt praesentium aliquid quaerat!",
    },
    {
      id: 1,
      icon: sliders,
      title: "Admin",
      counter: null,
      titleContent: "Admin",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur est minus sapiente minima amet tempora necessitatibus maxime a, repudiandae culpa delectus, impedit nulla unde? Cumque mollitia tempora architecto molestiae unde nobis harum, sunt vel. Labore accusamus fuga mollitia hic aperiam repudiandae unde rerum sunt exercitationem dolorem expedita tenetur animi accusantium laborum necessitatibus corrupti sed quod laudantium, sit porro? Libero enim rerum assumenda facilis modi nemo, rem excepturi eligendi alias quaerat, earum, debitis quis consectetur magnam inventore! Voluptatibus perspiciatis deserunt quo numquam dolore nihil repudiandae beatae fuga ducimus, labore asperiores necessitatibus deleniti. Minus totam dolor sit molestias quas ad! Laudantium laboriosam nesciunt quia quo. Laudantium, harum praesentium sed ut libero nemo voluptate ad quo, eius quae incidunt id. Reprehenderit accusamus sed dignissimos, illo, asperiores possimus in voluptas debitis molestias esse assumenda laborum facilis. Distinctio, et? Explicabo enim sit quam iure natus! Blanditiis quas illo, quam ipsam minus maxime iste labore voluptas maiores odio praesentium, sint odit a accusamus expedita nihil dolorum id laborum delectus fugit quasi, nisi nemo dicta ab. Voluptatem vitae ab nam explicabo voluptatibus deleniti repellendus, consequatur assumenda facilis illo voluptates, fugiat rem quo dicta obcaecati illum? Illo dicta expedita quasi debitis, recusandae placeat harum omnis nesciunt labore, officiis ea modi sed laudantium. Rem modi quibusdam cupiditate magnam, dolorum distinctio quasi sapiente, voluptas aperiam cum illo officia dicta harum sequi explicabo deserunt itaque, delectus sint. Maiores, iste aperiam reiciendis accusamus eaque rem eius architecto aut, itaque ipsam sequi nostrum voluptas! Alias distinctio repudiandae est adipisci, explicabo modi iste, consectetur sit consequatur facilis eaque odit mollitia asperiores voluptas, deserunt laboriosam inventore? Distinctio eligendi sunt rem quo, quae, dolor eos eveniet mollitia saepe voluptatem asperiores officia excepturi, nihil fugiat? Ab quod neque in tempore incidunt reprehenderit tenetur quo officiis nam? Necessitatibus quod obcaecati dolorem minima cumque earum sunt praesentium aliquid quaerat!",
    },
    {
      id: 2,
      icon: truck,
      title: "Providers",
      counter: null,
      titleContent: "Providers",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur est minus sapiente minima amet tempora necessitatibus maxime a, repudiandae culpa delectus, impedit nulla unde? Cumque mollitia tempora architecto molestiae unde nobis harum, sunt vel. Labore accusamus fuga mollitia hic aperiam repudiandae unde rerum sunt exercitationem dolorem expedita tenetur animi accusantium laborum necessitatibus corrupti sed quod laudantium, sit porro? Libero enim rerum assumenda facilis modi nemo, rem excepturi eligendi alias quaerat, earum, debitis quis consectetur magnam inventore! Voluptatibus perspiciatis deserunt quo numquam dolore nihil repudiandae beatae fuga ducimus, labore asperiores necessitatibus deleniti. Minus totam dolor sit molestias quas ad! Laudantium laboriosam nesciunt quia quo. Laudantium, harum praesentium sed ut libero nemo voluptate ad quo, eius quae incidunt id. Reprehenderit accusamus sed dignissimos, illo, asperiores possimus in voluptas debitis molestias esse assumenda laborum facilis. Distinctio, et? Explicabo enim sit quam iure natus! Blanditiis quas illo, quam ipsam minus maxime iste labore voluptas maiores odio praesentium, sint odit a accusamus expedita nihil dolorum id laborum delectus fugit quasi, nisi nemo dicta ab. Voluptatem vitae ab nam explicabo voluptatibus deleniti repellendus, consequatur assumenda facilis illo voluptates, fugiat rem quo dicta obcaecati illum? Illo dicta expedita quasi debitis, recusandae placeat harum omnis nesciunt labore, officiis ea modi sed laudantium. Rem modi quibusdam cupiditate magnam, dolorum distinctio quasi sapiente, voluptas aperiam cum illo officia dicta harum sequi explicabo deserunt itaque, delectus sint. Maiores, iste aperiam reiciendis accusamus eaque rem eius architecto aut, itaque ipsam sequi nostrum voluptas! Alias distinctio repudiandae est adipisci, explicabo modi iste, consectetur sit consequatur facilis eaque odit mollitia asperiores voluptas, deserunt laboriosam inventore? Distinctio eligendi sunt rem quo, quae, dolor eos eveniet mollitia saepe voluptatem asperiores officia excepturi, nihil fugiat? Ab quod neque in tempore incidunt reprehenderit tenetur quo officiis nam? Necessitatibus quod obcaecati dolorem minima cumque earum sunt praesentium aliquid quaerat!",
    },
    {
      id: 3,
      icon: send,
      title: "Payout",
      counter: null,
      titleContent: "Payout",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur est minus sapiente minima amet tempora necessitatibus maxime a, repudiandae culpa delectus, impedit nulla unde? Cumque mollitia tempora architecto molestiae unde nobis harum, sunt vel. Labore accusamus fuga mollitia hic aperiam repudiandae unde rerum sunt exercitationem dolorem expedita tenetur animi accusantium laborum necessitatibus corrupti sed quod laudantium, sit porro? Libero enim rerum assumenda facilis modi nemo, rem excepturi eligendi alias quaerat, earum, debitis quis consectetur magnam inventore! Voluptatibus perspiciatis deserunt quo numquam dolore nihil repudiandae beatae fuga ducimus, labore asperiores necessitatibus deleniti. Minus totam dolor sit molestias quas ad! Laudantium laboriosam nesciunt quia quo. Laudantium, harum praesentium sed ut libero nemo voluptate ad quo, eius quae incidunt id. Reprehenderit accusamus sed dignissimos, illo, asperiores possimus in voluptas debitis molestias esse assumenda laborum facilis. Distinctio, et? Explicabo enim sit quam iure natus! Blanditiis quas illo, quam ipsam minus maxime iste labore voluptas maiores odio praesentium, sint odit a accusamus expedita nihil dolorum id laborum delectus fugit quasi, nisi nemo dicta ab. Voluptatem vitae ab nam explicabo voluptatibus deleniti repellendus, consequatur assumenda facilis illo voluptates, fugiat rem quo dicta obcaecati illum? Illo dicta expedita quasi debitis, recusandae placeat harum omnis nesciunt labore, officiis ea modi sed laudantium. Rem modi quibusdam cupiditate magnam, dolorum distinctio quasi sapiente, voluptas aperiam cum illo officia dicta harum sequi explicabo deserunt itaque, delectus sint. Maiores, iste aperiam reiciendis accusamus eaque rem eius architecto aut, itaque ipsam sequi nostrum voluptas! Alias distinctio repudiandae est adipisci, explicabo modi iste, consectetur sit consequatur facilis eaque odit mollitia asperiores voluptas, deserunt laboriosam inventore? Distinctio eligendi sunt rem quo, quae, dolor eos eveniet mollitia saepe voluptatem asperiores officia excepturi, nihil fugiat? Ab quod neque in tempore incidunt reprehenderit tenetur quo officiis nam? Necessitatibus quod obcaecati dolorem minima cumque earum sunt praesentium aliquid quaerat!",
    },
    {
      id: 4,
      icon: users,
      title: "Consumers",
      counter: null,
      titleContent: "Consumers",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur est minus sapiente minima amet tempora necessitatibus maxime a, repudiandae culpa delectus, impedit nulla unde? Cumque mollitia tempora architecto molestiae unde nobis harum, sunt vel. Labore accusamus fuga mollitia hic aperiam repudiandae unde rerum sunt exercitationem dolorem expedita tenetur animi accusantium laborum necessitatibus corrupti sed quod laudantium, sit porro? Libero enim rerum assumenda facilis modi nemo, rem excepturi eligendi alias quaerat, earum, debitis quis consectetur magnam inventore! Voluptatibus perspiciatis deserunt quo numquam dolore nihil repudiandae beatae fuga ducimus, labore asperiores necessitatibus deleniti. Minus totam dolor sit molestias quas ad! Laudantium laboriosam nesciunt quia quo. Laudantium, harum praesentium sed ut libero nemo voluptate ad quo, eius quae incidunt id. Reprehenderit accusamus sed dignissimos, illo, asperiores possimus in voluptas debitis molestias esse assumenda laborum facilis. Distinctio, et? Explicabo enim sit quam iure natus! Blanditiis quas illo, quam ipsam minus maxime iste labore voluptas maiores odio praesentium, sint odit a accusamus expedita nihil dolorum id laborum delectus fugit quasi, nisi nemo dicta ab. Voluptatem vitae ab nam explicabo voluptatibus deleniti repellendus, consequatur assumenda facilis illo voluptates, fugiat rem quo dicta obcaecati illum? Illo dicta expedita quasi debitis, recusandae placeat harum omnis nesciunt labore, officiis ea modi sed laudantium. Rem modi quibusdam cupiditate magnam, dolorum distinctio quasi sapiente, voluptas aperiam cum illo officia dicta harum sequi explicabo deserunt itaque, delectus sint. Maiores, iste aperiam reiciendis accusamus eaque rem eius architecto aut, itaque ipsam sequi nostrum voluptas! Alias distinctio repudiandae est adipisci, explicabo modi iste, consectetur sit consequatur facilis eaque odit mollitia asperiores voluptas, deserunt laboriosam inventore? Distinctio eligendi sunt rem quo, quae, dolor eos eveniet mollitia saepe voluptatem asperiores officia excepturi, nihil fugiat? Ab quod neque in tempore incidunt reprehenderit tenetur quo officiis nam? Necessitatibus quod obcaecati dolorem minima cumque earum sunt praesentium aliquid quaerat!",
    },
    {
      id: 5,
      icon: setings,
      title: "Settings",
      counter: null,
      titleContent: "Settings",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur est minus sapiente minima amet tempora necessitatibus maxime a, repudiandae culpa delectus, impedit nulla unde? Cumque mollitia tempora architecto molestiae unde nobis harum, sunt vel. Labore accusamus fuga mollitia hic aperiam repudiandae unde rerum sunt exercitationem dolorem expedita tenetur animi accusantium laborum necessitatibus corrupti sed quod laudantium, sit porro? Libero enim rerum assumenda facilis modi nemo, rem excepturi eligendi alias quaerat, earum, debitis quis consectetur magnam inventore! Voluptatibus perspiciatis deserunt quo numquam dolore nihil repudiandae beatae fuga ducimus, labore asperiores necessitatibus deleniti. Minus totam dolor sit molestias quas ad! Laudantium laboriosam nesciunt quia quo. Laudantium, harum praesentium sed ut libero nemo voluptate ad quo, eius quae incidunt id. Reprehenderit accusamus sed dignissimos, illo, asperiores possimus in voluptas debitis molestias esse assumenda laborum facilis. Distinctio, et? Explicabo enim sit quam iure natus! Blanditiis quas illo, quam ipsam minus maxime iste labore voluptas maiores odio praesentium, sint odit a accusamus expedita nihil dolorum id laborum delectus fugit quasi, nisi nemo dicta ab. Voluptatem vitae ab nam explicabo voluptatibus deleniti repellendus, consequatur assumenda facilis illo voluptates, fugiat rem quo dicta obcaecati illum? Illo dicta expedita quasi debitis, recusandae placeat harum omnis nesciunt labore, officiis ea modi sed laudantium. Rem modi quibusdam cupiditate magnam, dolorum distinctio quasi sapiente, voluptas aperiam cum illo officia dicta harum sequi explicabo deserunt itaque, delectus sint. Maiores, iste aperiam reiciendis accusamus eaque rem eius architecto aut, itaque ipsam sequi nostrum voluptas! Alias distinctio repudiandae est adipisci, explicabo modi iste, consectetur sit consequatur facilis eaque odit mollitia asperiores voluptas, deserunt laboriosam inventore? Distinctio eligendi sunt rem quo, quae, dolor eos eveniet mollitia saepe voluptatem asperiores officia excepturi, nihil fugiat? Ab quod neque in tempore incidunt reprehenderit tenetur quo officiis nam? Necessitatibus quod obcaecati dolorem minima cumque earum sunt praesentium aliquid quaerat!",
    },
  ];

  const selectContent = select.appendChild(document.createElement("div"));
  selectContent.classList.add("content");
  const titleContentHtml = selectContent.appendChild(
    document.createElement("h2")
  );
  const contentHtml = selectContent.appendChild(document.createElement("p"));

  // Устанавливаем первый элемент как активный по умолчанию
  const firstTab = tabs[0];
  titleContentHtml.textContent = firstTab.titleContent;
  contentHtml.textContent = firstTab.content;

  tabs.forEach((tab, index) => {
    const isMobile = window.innerWidth <= 1024;
    const selectItem = document.createElement("li");
    selectItem.textContent = tab.title;
    selectItem.value = tab.id;
    selectItem.classList.add("button");
    selectOptions.appendChild(selectItem);

    const svg = document.createElement("span");
    svg.classList.add("img");
    svg.innerHTML = tab.icon;
    selectItem.prepend(svg);

    const counterSelect = selectItem.appendChild(document.createElement("div"));
    counterSelect.classList.add("counter");
    counterSelect.textContent = tab.counter;

    selectItem.addEventListener("click", function () {
      if (activeItem) {
        activeItem.classList.remove("active");
      }

      selectItem.classList.add("active");
      activeItem = selectItem;

      titleContentHtml.textContent = tab.titleContent;
      contentHtml.textContent = tab.content;

      updateLinePosition(selectItem, isMobile);
    });

    // Устанавливаем первый элемент как активный по умолчанию
    if (index === 0) {
      selectItem.classList.add("active");
      activeItem = selectItem;

      // Используем ResizeObserver для отслеживания изменений размеров
      const resizeObserver = new ResizeObserver(() => {
        updateLinePosition(selectItem, isMobile);
      });
      resizeObserver.observe(selectItem);

      // Используем MutationObserver для отслеживания изменений в DOM
      const mutationObserver = new MutationObserver(() => {
        updateLinePosition(selectItem, isMobile);
      });
      mutationObserver.observe(selectOptions, {
        childList: true,
        subtree: true,
      });

      // Первоначальное обновление позиции линии
      updateLinePosition(selectItem, isMobile);
    }
  });

  // Функция для обновления позиции линии
  function updateLinePosition(item, isMobile) {
    if (isMobile) {
      // Мобильная версия (линия вертикальная)
      line.style.height = `${item.clientHeight}px`;
      line.style.top = `${item.offsetTop}px`;
    } else {
      // Десктопная версия (линия горизонтальная)
      line.style.top = `${item.offsetTop + item.clientHeight}px`;
      line.style.left = `${item.offsetLeft}px`;
      line.style.width = `${item.clientWidth}px`;
    }
  }
});
