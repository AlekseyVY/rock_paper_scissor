import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, HoverShadow } from './select.element.style';
import { optionSelectAction } from '../../store/gameReducer';

type SelectElementProps = {
  element: string;
}

function SelectElement({ element }: SelectElementProps) {
  const dispatch = useDispatch();
  if (element === 'PAPER') {
    return (
      <Container onClick={() => dispatch(optionSelectAction('PAPER'))}>
        <svg width="204" height="209" viewBox="0 0 204 209" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
            <ellipse cx="102" cy="101.5" rx="99" ry="101.5" fill="#2A45C2" />
          </g>
          <ellipse cx="102" cy="97" rx="99" ry="97" fill="#4664F4" />
          <ellipse cx="102" cy="97" rx="99" ry="97" fill="url(#paint0_linear)" />
          <circle cx="102" cy="99" r="76" fill="#BABFD4" />
          <ellipse cx="102" cy="103" rx="76" ry="72" fill="url(#paint1_linear)" />
          <path
            d="M131.529 79.3231C130.969 79.1082 130.386 79.015 129.847 79.0526C129.07 79.107 128.442 79.4242 128.07
  79.9433C125.878 83.0268 124.083 88.8501 122.636 93.529C121.972 95.6928 121.08 98.5885 120.434 99.9628C119.761
  96.1125 120.521 82.008 120.817 76.5762L120.821 76.4885C121.026 72.7148 121.054 72.053 121.009 71.7624C120.684
  69.6923 119.858 68.3335 118.553 67.7253C117.234 67.1085 115.521 67.3814 113.675 68.4968C112.75 69.0588 112.494
  70.9878 111.7 79.7314L111.697 79.7699C111.26 84.5735 110.253 95.634 109.015 97.476C107.617 94.8989 105.695 80.2565
  104.865 73.9186C104.284 69.4799 103.946 66.9312 103.718 66.1616C103.24 64.549 101.219 63.1767 99.2178 63.1007C97.5523
   63.0177 96.1856 63.8687 95.5335 65.3473C94.3133 66.7112 94.7443 71.2343 96.0931 81.9469C96.7351 87.0452 98.0602
   97.5765 97.2262 98.7578C95.5634 98.5762 92.7086 91.9796 88.7403 79.1456C87.627 75.5514 87.2823 74.4703 86.9404
    73.9971C86.2663 72.3489 83.9753 71.0776 81.9213 71.2212C81.7459 71.2335 81.5754 71.2564 81.4069 71.2886C80.3317
    71.5031 77.8782 72.4972 78.4011 77.0847C79.85 83.4449 81.4237 88.1147 82.951 92.6472L82.9819 92.7379C83.8957 95.4527
     84.7596 98.0178 85.5623 100.865C87.4544 107.586 86.7187 111.756 86.7097 111.803C86.6468 112.232 86.5149 112.494
     86.3164 112.586C86.245 112.62 86.1535 112.64 86.0503 112.647C85.4507 112.689 84.5513 112.29 84.0878 112.03C83.029
     109.998 77.7575 100.311 72.9808 98.967L72.8092 98.9162L72.6355 98.9324C70.8835 99.0986 69.5953 99.7637 68.8081
     100.909C67.5605 102.72 68.0769 105.027 68.2022 105.489L68.2726 105.655C68.3116 105.725 72.1423 112.74 72.7351
     116.003C73.2464 118.8 75.8913 121.832 78.0179 124.268L78.1055 124.367C78.7992 125.164 79.3979 125.853 79.87
     126.491C86.0404 132.955 95.7987 138.393 95.8782 138.437C97.0957 139.339 97.7728 140.211 97.8443 140.962C97.8896
     141.453 97.6355 141.747 97.6266 141.757L97.4141 141.979L98.763 143.296L124.508 141.48L125.605 136.428C129 122.159
     128.291 109.994 128.28 109.912C128.292 109.465 129.244 105.136 130.009 101.639L130.031 101.55C131.556 94.5828 133.453
      85.9137 133.816 82.6166C133.974 81.2068 133.077 79.9116 131.529 79.3231Z"
            fill="#3B4262"
          />
          <defs>
            <filter id="filter0_d" x="0" y="0" width="204" height="209" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196706 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <linearGradient id="paint0_linear" x1="3" y1="0" x2="3" y2="194" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.0966455" />
              <stop offset="1" stopColor="white" stopOpacity="0.01" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="176.74" y1="175" x2="176.74" y2="33.3868" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F3F3F3" />
              <stop offset="1" stopColor="#DADADA" />
            </linearGradient>
          </defs>
        </svg>
        <HoverShadow>
          <svg width="252" height="248" viewBox="0 0 252 248" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse opacity="0.05" cx="126" cy="124" rx="126" ry="124" fill="white" />
          </svg>
        </HoverShadow>
      </Container>
    );
  } if (element === 'ROCK') {
    return (
      <Container onClick={() => dispatch(optionSelectAction('ROCK'))}>
        <svg width="204" height="209" viewBox="0 0 204 209" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
            <ellipse cx="102" cy="101.5" rx="99" ry="101.5" fill="#9D1634" />
          </g>
          <ellipse cx="102" cy="97" rx="99" ry="97" fill="#DB2E4D" />
          <ellipse cx="102" cy="97" rx="99" ry="97" fill="url(#paint0_linear)" />
          <circle cx="102" cy="99" r="76" fill="#BABFD4" />
          <ellipse cx="102" cy="103" rx="76" ry="72" fill="url(#paint1_linear)" />
          <path
            d="M131.441 88.0849C130.564 76.9814 118.149 78.1152 118.149 78.1152C112.909 68.8366 104.723 75.5573 104.723
  75.5573C98.4334 66.4636 90.548 74.8903 90.548 74.8903C76.9523 73.4176 77.4792 84.5827 77.4792 84.5827C77.1593 88.132
  79.3953 99.1125 79.3953 99.1125C77.3783 92.7837 73.0034 98.0372 73.0034 98.0372C67.6251 106.374 71.6736 110.937 71.6736
  110.937C78.9512 119.504 94.4608 129.787 94.4608 129.787C100.077 133.018 97.7013 135.9 97.7013 135.9L131.669 130.262L132.45
   123.792C137.614 108.105 131.441 88.0849 131.441 88.0849Z"
            fill="#3B4262"
          />
          <defs>
            <filter id="filter0_d" x="0" y="0" width="204" height="209" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196706 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <linearGradient id="paint0_linear" x1="3" y1="0" x2="3" y2="194" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.0966455" />
              <stop offset="1" stopColor="white" stopOpacity="0.01" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="176.74" y1="175" x2="176.74" y2="33.3868" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F3F3F3" />
              <stop offset="1" stopColor="#DADADA" />
            </linearGradient>
          </defs>
        </svg>
        <HoverShadow>
          <svg width="252" height="248" viewBox="0 0 252 248" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse opacity="0.05" cx="126" cy="124" rx="126" ry="124" fill="white" />
          </svg>
        </HoverShadow>
      </Container>
    );
  }
  return (
    <Container onClick={() => dispatch(optionSelectAction('SCISSORS'))}>
      <svg width="204" height="209" viewBox="0 0 204 209" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <ellipse cx="102" cy="101.5" rx="99" ry="101.5" fill="#C76C1B" />
        </g>
        <ellipse cx="102" cy="97" rx="99" ry="97" fill="#EB9F0E" />
        <ellipse cx="102" cy="97" rx="99" ry="97" fill="url(#paint0_linear)" />
        <circle cx="102" cy="99" r="76" fill="#BABFD4" />
        <ellipse cx="102" cy="103" rx="76" ry="72" fill="url(#paint1_linear)" />
        <path
          d="M82.1599 98.3494L90.3693 86.8064C86.957 86.2376 80.691 86.1115 75.5583 91.2442C67.4676 99.3349 64.1909
116.813 63.5079 121.044L84.0706 141.606C87.7722 141.289 104.162 139.101 119.954 123.309C120.121 122.968 123.968
 120.125 120.823 116.98C119.322 115.479 116.837 115.507 115.303 117.041C114.522 117.822 113.308 117.833 112.543
 117.069C111.779 116.304 111.79 115.09 112.571 114.309L118.151 108.728C120.987 105.892 118.314 101.108 114.356
 102.258L109.788 106.169C108.953 106.896 107.713 106.77 107.027 105.977C106.319 105.157 106.47 103.915 107.277
 103.215C123.235 89.2135 120.906 90.8998 131.173 81.2763C135.009 78.0824 130.183 72.4328 126.403 75.6675L101.566
 98.0027C100.843 98.6181 99.7357 98.6297 99.0246 97.9746C98.2041 97.266 98.1852 96.245 98.7216 95.4384L116.046
 68.5052C118.579 65.0757 113.595 61.2668 110.927 64.7242L85.3117 100.55C84.6939 101.443 83.4491 101.648 82.6006
 101.023C81.7496 100.452 81.5166 99.2119 82.1599 98.3494Z"
          fill="#3B4262"
        />
        <defs>
          <filter id="filter0_d" x="0" y="0" width="204" height="209" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196706 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <linearGradient id="paint0_linear" x1="3" y1="0" x2="3" y2="194" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.0966455" />
            <stop offset="1" stopColor="white" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="176.74" y1="175" x2="176.74" y2="33.3868" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F3F3F3" />
            <stop offset="1" stopColor="#DADADA" />
          </linearGradient>
        </defs>
      </svg>
      <HoverShadow>
        <svg width="252" height="248" viewBox="0 0 252 248" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse opacity="0.05" cx="126" cy="124" rx="126" ry="124" fill="white" />
        </svg>
      </HoverShadow>
    </Container>
  );
}

export default SelectElement;
