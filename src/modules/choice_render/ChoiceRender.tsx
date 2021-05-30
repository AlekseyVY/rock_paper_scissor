import React from 'react';
import { Container } from './choice.render.style';

type IChoice = {
  choice: string | null
}

function ChoiceRender({ choice }: IChoice) {
  if (choice === 'SCISSORS') {
    return (
      <Container>
        <svg width="299" height="306" viewBox="0 0 299 306" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
            <ellipse cx="149.305" cy="150" rx="146.305" ry="150" fill="#C76C1B" />
          </g>
          <ellipse cx="149.305" cy="143.35" rx="146.305" ry="143.35" fill="#EB9F0E" />
          <ellipse cx="149.305" cy="143.35" rx="146.305" ry="143.35" fill="url(#paint0_linear)" />
          <circle cx="149.305" cy="146.305" r="112.315" fill="#BABFD4" />
          <ellipse cx="149.305" cy="152.217" rx="112.315" ry="106.404" fill="url(#paint1_linear)" />
          <path
            d="M119.985 145.344L132.117 128.285C127.075 127.445 117.814 127.258 110.229 134.844C98.2725 146.8
          93.4301 172.63 92.4206 178.882L122.809 209.271C128.279 208.802 152.5 205.568 175.838 182.23C176.086 181.726
           181.771 177.525 177.123 172.877C174.905 170.659 171.232 170.7 168.966 172.967C167.812 174.121 166.017
           174.138 164.887 173.008C163.757 171.878 163.774 170.083 164.928 168.929L173.175 160.682C177.366 156.491
           173.415 149.421 167.566 151.12L160.814 156.9C159.581 157.974 157.749 157.788 156.735 156.617C155.688 155.404
           155.912 153.568 157.104 152.535C180.688 131.843 177.245 134.335 192.418 120.113C198.087 115.393 190.956
           107.044 185.369 111.824L148.664 144.832C147.596 145.741 145.959 145.758 144.908 144.79C143.696 143.743
           143.668 142.234 144.461 141.042L170.064 101.239C173.806 96.171 166.441 90.5421 162.499 95.6515L124.643
            148.596C123.73 149.916 121.89 150.219 120.636 149.295C119.379 148.451 119.035 146.619 119.985 145.344Z"
            fill="#3B4262"
          />
          <defs>
            <filter id="filter0_d" x="0" y="0" width="298.611" height="306" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196706 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <linearGradient id="paint0_linear" x1="3" y1="0" x2="3" y2="286.699" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.0966455" />
              <stop offset="1" stopColor="white" stopOpacity="0.01" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="259.759" y1="258.621" x2="259.759" y2="49.3401" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F3F3F3" />
              <stop offset="1" stopColor="#DADADA" />
            </linearGradient>
          </defs>
        </svg>
      </Container>
    );
  } if (choice === 'PAPER') {
    return (
      <Container>
        <svg width="293" height="300" viewBox="0 0 293 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
            <ellipse cx="146.305" cy="150" rx="146.305" ry="150" fill="#2A45C2" />
          </g>
          <ellipse cx="146.305" cy="143.35" rx="146.305" ry="143.35" fill="#4664F4" />
          <ellipse cx="146.305" cy="143.35" rx="146.305" ry="143.35" fill="url(#paint0_linear)" />
          <circle cx="146.305" cy="146.306" r="112.315" fill="#BABFD4" />
          <ellipse cx="146.305" cy="152.217" rx="112.315" ry="106.404" fill="url(#paint1_linear)" />
          <path
            d="M189.944 117.226C189.116 116.908 188.255 116.771 187.459 116.826C186.31 116.907 185.382 117.376
          184.832 118.143C181.593 122.7 178.941 131.305 176.802 138.22C175.82 141.418 174.502 145.697 173.548
          147.728C172.553 142.038 173.677 121.194 174.113 113.167L174.12 113.037C174.423 107.46 174.463 106.482
          174.397 106.053C173.917 102.993 172.696 100.985 170.768 100.087C168.819 99.175 166.287 99.5783 163.56
          101.227C162.192 102.057 161.814 104.908 160.641 117.83L160.636 117.886C159.99 124.985 158.503 141.331
           156.672 144.053C154.607 140.245 151.766 118.606 150.539 109.239C149.681 102.679 149.181 98.913 148.845
           97.7756C148.138 95.3924 145.151 93.3645 142.194 93.2521C139.733 93.1295 137.713 94.3871 136.749
           96.5722C134.946 98.5879 135.583 105.272 137.576 121.104C138.525 128.638 140.483 144.202 139.251
           145.947C136.793 145.679 132.574 135.93 126.71 116.964C125.065 111.652 124.555 110.055 124.05 109.355C123.054
            106.919 119.668 105.041 116.633 105.253C116.373 105.271 116.121 105.305 115.872 105.353C114.283 105.67
            110.657 107.139 111.43 113.918C113.572 123.317 115.897 130.219 118.154 136.917L118.2 137.051C119.55 141.063
             120.827 144.854 122.013 149.061C124.81 158.994 123.722 165.157 123.709 165.226C123.616 165.86 123.421
             166.248 123.128 166.383C123.022 166.433 122.887 166.462 122.734 166.473C121.848 166.535 120.519 165.946
             119.834 165.562C118.27 162.558 110.479 148.242 103.42 146.257L103.166 146.181L102.91 146.205C100.321
             146.451 98.4169 147.434 97.2534 149.126C95.4097 151.803 96.1729 155.212 96.358 155.896L96.4621
              156.141C96.5197 156.244 102.181 166.61 103.057 171.432C103.812 175.566 107.721 180.047 110.864
               183.647L110.993 183.794C112.019 184.972 112.903 185.99 113.601 186.932C122.72 196.486 137.141 204.521
                137.259 204.586C139.058 205.92 140.058 207.208 140.164 208.318C140.231 209.044 139.856 209.478 139.842
                 209.493L139.528 209.822L141.522 211.768L179.568 209.083L181.19 201.617C186.206 180.531 185.159 162.552
                  185.143 162.432C185.161 161.771 186.567 155.374 187.697 150.205L187.731 150.074C189.984 139.777 192.787
                  126.966 193.325 122.093C193.558 120.01 192.231 118.096 189.944 117.226Z"
            fill="#3B4262"
          />
          <defs>
            <filter id="filter0_d" x="-3" y="0" width="298.611" height="306" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196706 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="286.699" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.0966455" />
              <stop offset="1" stopColor="white" stopOpacity="0.01" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="256.759" y1="258.621" x2="256.759" y2="49.3403" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F3F3F3" />
              <stop offset="1" stopColor="#DADADA" />
            </linearGradient>
          </defs>
        </svg>
      </Container>
    );
  }
  return (
    <Container>
      <svg width="293" height="300" viewBox="0 0 293 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <ellipse cx="146.305" cy="150" rx="146.305" ry="150" fill="#9D1634" />
        </g>
        <ellipse cx="146.305" cy="143.35" rx="146.305" ry="143.35" fill="#DB2E4D" />
        <ellipse cx="146.305" cy="143.35" rx="146.305" ry="143.35" fill="url(#paint0_linear)" />
        <circle cx="146.306" cy="146.305" r="112.315" fill="#BABFD4" />
        <ellipse cx="146.306" cy="152.217" rx="112.315" ry="106.404" fill="url(#paint1_linear)" />
        <path
          d="M189.814 130.175C188.519 113.766 170.171 115.441 170.171 115.441C162.427 101.729 150.329 111.661
        150.329 111.661C141.035 98.222 129.381 110.675 129.381 110.675C109.289 108.499 110.068 124.999 110.068
        124.999C109.595 130.244 112.9 146.472 112.9 146.472C109.919 137.119 103.453 144.883 103.453 144.883C95.5052
        157.202 101.488 163.946 101.488 163.946C112.243 176.608 135.164 191.803 135.164 191.803C143.463 196.579 139.953
        200.837 139.953 200.837L190.152 192.506L191.306 182.944C198.937 159.761 189.814 130.175 189.814 130.175Z"
          fill="#3B4262"
        />
        <defs>
          <filter id="filter0_d" x="-3" y="0" width="298.611" height="306" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196706 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="286.699" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.0966455" />
            <stop offset="1" stopColor="white" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="256.759" y1="258.621" x2="256.759" y2="49.3401" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F3F3F3" />
            <stop offset="1" stopColor="#DADADA" />
          </linearGradient>
        </defs>
      </svg>

    </Container>
  );
}

export default ChoiceRender;
