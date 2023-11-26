import { ColorType } from "../types";

interface LogoType {
  selectedRadio: ColorType;
}

const colorThemes = {
  green: "bg-green fill-white",
  black: "bg-black fill-white",
  blue: "bg-blue fill-white",
  white: "bg-white fill-green",
  beige: "bg-beige fill-green",
};

const Logo = ({ selectedRadio }: LogoType) => {
  const theme = colorThemes[selectedRadio];

  return (
    <svg
      width="41"
      height="46"
      viewBox="0 0 41 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${theme} transition-colors duration-300`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.4362 0.296997C11.529 0.296997 4.30835 7.51767 4.30835 16.4248C4.30835 25.332 11.529 32.5526 20.4362 32.5526C29.3433 32.5526 36.564 25.332 36.564 16.4248C36.564 7.51767 29.3433 0.296997 20.4362 0.296997ZM21.3822 27.199C14.7589 27.647 9.66663 15.3899 12.056 13.009C14.2358 10.837 15.1011 11.6134 15.5105 13.4321C15.7391 14.4477 15.5694 15.6938 15.4165 16.8168C15.2836 17.7927 15.1634 18.6756 15.3283 19.2334C15.6828 20.4331 16.2914 21.3839 16.992 21.3164C17.6926 21.2489 18.7789 19.3642 16.4411 12.1573C14.7184 6.84704 19.3417 5.01134 19.7652 6.11656C19.9564 6.6155 19.6942 7.43242 19.3862 8.39211C19.0119 9.55832 18.57 10.9354 18.7917 12.2088C18.9732 13.251 19.1463 13.8299 19.3009 14.3469C19.4906 14.9814 19.6525 15.5226 19.7677 16.7129C19.8164 17.2168 19.793 17.8618 19.7681 18.5473C19.7051 20.2787 19.6328 22.2693 20.6904 22.9027C22.1667 23.7869 22.8142 19.4874 21.3926 11.7192C20.1161 4.74359 24.6974 6.89465 24.8183 9.00927C24.9392 11.1239 24.8051 14.3007 23.9506 18.7428C23.0961 23.185 23.7176 23.5508 24.8183 22.4336C25.919 21.3164 25.9805 20.5267 25.3428 16.1227C24.9082 13.1211 29.6065 11.5922 29.0999 15.5363C28.59 19.5063 26.2816 26.8676 21.3822 27.199Z"
      />
      <path d="M2.67439 45.7014C2.03844 45.7014 1.53148 45.5824 1.15351 45.3442C0.775534 45.1121 0.586548 44.7945 0.586548 44.3915C0.586548 43.9518 0.82953 43.5915 1.31549 43.3105C1.05151 43.1456 0.919523 42.9288 0.919523 42.6601C0.919523 42.5197 0.958521 42.3945 1.03651 42.2845C1.12051 42.1746 1.2315 42.0861 1.36949 42.0189C1.14151 41.854 0.96752 41.6433 0.847529 41.3868C0.733537 41.1303 0.676541 40.8494 0.676541 40.544C0.676541 40.2082 0.748536 39.9028 0.892525 39.628C1.03651 39.3471 1.2465 39.1272 1.52248 38.9684C1.79846 38.8035 2.12544 38.7211 2.50341 38.7211C2.89938 38.7211 3.24135 38.8188 3.52933 39.0142C3.63132 38.9593 3.76631 38.9135 3.9343 38.8768C4.10829 38.8341 4.29428 38.8127 4.49226 38.8127H4.70825L4.66331 39.2586C4.64795 39.4111 4.51958 39.5272 4.36631 39.5272H4.30328C4.20128 39.5272 4.11729 39.5303 4.05129 39.5364C4.23128 39.8173 4.32127 40.1532 4.32127 40.544C4.32127 40.8799 4.24928 41.1883 4.10529 41.4693C3.9673 41.7441 3.76032 41.9639 3.48434 42.1288C3.20836 42.2876 2.88138 42.367 2.50341 42.367C2.36542 42.367 2.20643 42.3456 2.02644 42.3029C1.96045 42.3334 1.92745 42.3823 1.92745 42.4494C1.92745 42.5288 1.97245 42.593 2.06244 42.6418C2.15843 42.6846 2.31742 42.7212 2.5394 42.7517L3.31335 42.8525C4.34527 42.993 4.86123 43.4357 4.86123 44.1808C4.86123 44.6449 4.66625 45.0144 4.27628 45.2892C3.89231 45.564 3.35834 45.7014 2.67439 45.7014ZM2.50341 41.5242C2.76139 41.5242 2.95937 41.4387 3.09736 41.2677C3.24135 41.0906 3.31335 40.8494 3.31335 40.544C3.31335 40.2387 3.24135 40.0005 3.09736 39.8295C2.95937 39.6524 2.76139 39.5639 2.50341 39.5639C2.23943 39.5639 2.03544 39.6524 1.89145 39.8295C1.75346 40.0005 1.68447 40.2387 1.68447 40.544C1.68447 40.8494 1.75346 41.0906 1.89145 41.2677C2.03544 41.4387 2.23943 41.5242 2.50341 41.5242ZM2.71939 44.8403C3.48734 44.8403 3.87131 44.648 3.87131 44.2632C3.87131 44.0922 3.80531 43.964 3.67332 43.8785C3.54133 43.7991 3.32235 43.735 3.01637 43.6861L2.02644 43.5395C1.68447 43.68 1.51348 43.8938 1.51348 44.1808C1.51348 44.4006 1.61847 44.5655 1.82846 44.6755C2.03844 44.7854 2.33542 44.8403 2.71939 44.8403Z" />
      <path d="M5.131 38.8127H6.17493L6.20193 39.2982C6.33392 39.1455 6.5019 39.0112 6.70589 38.8951C6.91587 38.7791 7.13486 38.7211 7.36284 38.7211C7.43483 38.7211 7.50083 38.7272 7.56083 38.7394L7.47983 39.857C7.36584 39.8265 7.23685 39.8112 7.09286 39.8112C6.90687 39.8112 6.73589 39.857 6.5799 39.9486C6.42391 40.0341 6.31292 40.141 6.24692 40.2692V43.393H5.131V38.8127Z" />
      <path d="M9.91036 43.4846C9.3884 43.4846 8.94143 43.3777 8.56946 43.164C8.20348 42.9441 7.9275 42.654 7.74152 42.2937C7.56153 41.9273 7.47153 41.5212 7.47153 41.0754C7.47153 40.6479 7.55853 40.257 7.73252 39.9028C7.9065 39.5486 8.15848 39.2677 8.48846 39.06C8.81844 38.8463 9.21141 38.7394 9.66737 38.7394C10.0873 38.7394 10.4413 38.828 10.7293 39.0051C11.0233 39.1822 11.2423 39.4203 11.3862 39.7196C11.5362 40.0188 11.6112 40.3547 11.6112 40.7273C11.6112 40.9105 11.5872 41.1181 11.5392 41.3502H8.63245C8.69245 41.7532 8.84844 42.0555 9.10042 42.2571C9.3524 42.4525 9.65538 42.5502 10.0093 42.5502C10.4953 42.5502 10.9453 42.425 11.3593 42.1746L11.4132 43.1365C11.2213 43.2403 10.9963 43.3258 10.7383 43.393C10.4863 43.454 10.2103 43.4846 9.91036 43.4846ZM10.4773 40.5807C10.4773 40.3425 10.4113 40.1318 10.2793 39.9486C10.1473 39.7654 9.94335 39.6738 9.66737 39.6738C9.39139 39.6738 9.16941 39.7562 9.00142 39.9211C8.83344 40.086 8.71944 40.3059 8.65945 40.5807H10.4773Z" />
      <path d="M14.3619 43.4846C13.8399 43.4846 13.3929 43.3777 13.021 43.164C12.655 42.9441 12.379 42.654 12.193 42.2937C12.013 41.9273 11.923 41.5212 11.923 41.0754C11.923 40.6479 12.01 40.257 12.184 39.9028C12.358 39.5486 12.61 39.2677 12.94 39.06C13.2699 38.8463 13.6629 38.7394 14.1189 38.7394C14.5389 38.7394 14.8928 38.828 15.1808 39.0051C15.4748 39.1822 15.6938 39.4203 15.8378 39.7196C15.9877 40.0188 16.0627 40.3547 16.0627 40.7273C16.0627 40.9105 16.0387 41.1181 15.9907 41.3502H13.084C13.144 41.7532 13.2999 42.0555 13.5519 42.2571C13.8039 42.4525 14.1069 42.5502 14.4609 42.5502C14.9468 42.5502 15.3968 42.425 15.8108 42.1746L15.8648 43.1365C15.6728 43.2403 15.4478 43.3258 15.1898 43.393C14.9378 43.454 14.6618 43.4846 14.3619 43.4846ZM14.9288 40.5807C14.9288 40.3425 14.8628 40.1318 14.7308 39.9486C14.5988 39.7654 14.3949 39.6738 14.1189 39.6738C13.8429 39.6738 13.6209 39.7562 13.4529 39.9211C13.2849 40.086 13.171 40.3059 13.111 40.5807H14.9288Z" />
      <path d="M18.7324 38.7394C19.2903 38.7394 19.7133 38.9287 20.0013 39.3074C20.2893 39.686 20.4333 40.1959 20.4333 40.8372V43.393H19.3173V40.9288C19.3173 40.5013 19.2453 40.1868 19.1014 39.9852C18.9634 39.7776 18.7384 39.6738 18.4264 39.6738C18.0844 39.6738 17.8025 39.8051 17.5805 40.0677V43.393H16.4645V38.8127H17.5085L17.5265 39.1333C17.9044 38.8707 18.3064 38.7394 18.7324 38.7394Z" />
      <path d="M22.3479 43.4846C22.06 43.4846 21.796 43.4571 21.556 43.4021C21.322 43.3472 21.079 43.2617 20.827 43.1456L20.926 42.1746C21.178 42.3273 21.412 42.4433 21.628 42.5227C21.85 42.596 22.078 42.6327 22.3119 42.6327C22.7679 42.6327 22.9959 42.48 22.9959 42.1746C22.9959 42.0097 22.9359 41.8845 22.8159 41.799C22.6959 41.7074 22.4799 41.6006 22.1679 41.4784C21.724 41.3135 21.397 41.1273 21.187 40.9196C20.977 40.7059 20.872 40.4188 20.872 40.0585C20.872 39.6616 21.022 39.341 21.322 39.0967C21.622 38.8463 22.027 38.7211 22.5369 38.7211C23.0469 38.7211 23.5119 38.8402 23.9318 39.0784L23.8328 40.0494C23.6048 39.8906 23.3889 39.7684 23.1849 39.6829C22.9869 39.5974 22.7769 39.5547 22.5549 39.5547C22.3629 39.5547 22.2129 39.5944 22.105 39.6738C22.003 39.7532 21.952 39.8662 21.952 40.0127C21.952 40.1288 21.982 40.2234 22.042 40.2967C22.108 40.37 22.1979 40.4372 22.3119 40.4982C22.4259 40.5532 22.6149 40.6326 22.8789 40.7364C23.3169 40.9074 23.6318 41.0967 23.8238 41.3044C24.0158 41.5059 24.1118 41.7777 24.1118 42.1197C24.1118 42.5533 23.9588 42.8891 23.6528 43.1273C23.3469 43.3655 22.9119 43.4846 22.3479 43.4846Z" />
      <path d="M26.8643 38.7394C27.2902 38.7394 27.6562 38.8463 27.9622 39.06C28.2682 39.2738 28.4992 39.5608 28.6551 39.9211C28.8111 40.2814 28.8891 40.6784 28.8891 41.112C28.8891 41.5456 28.8111 41.9426 28.6551 42.3029C28.4992 42.6632 28.2682 42.9502 27.9622 43.164C27.6562 43.3777 27.2902 43.4846 26.8643 43.4846C26.5943 43.4846 26.3633 43.454 26.1713 43.393C25.9853 43.338 25.8053 43.2464 25.6314 43.1182V45.2118V45.703H25.2617C24.8496 45.703 24.5154 45.3689 24.5154 44.9567V38.8127H25.4154L25.5324 39.2341C25.7244 39.0692 25.9253 38.947 26.1353 38.8677C26.3453 38.7822 26.5883 38.7394 26.8643 38.7394ZM26.6933 42.5502C27.0233 42.5502 27.2812 42.4189 27.4672 42.1563C27.6532 41.8937 27.7462 41.5456 27.7462 41.112C27.7462 40.6784 27.6532 40.3303 27.4672 40.0677C27.2812 39.8051 27.0233 39.6738 26.6933 39.6738C26.3213 39.6738 26.0423 39.802 25.8563 40.0585C25.6704 40.315 25.5774 40.6662 25.5774 41.112C25.5774 41.5578 25.6704 41.909 25.8563 42.1655C26.0423 42.422 26.3213 42.5502 26.6933 42.5502Z" />
      <path d="M30.4574 43.4846C30.0854 43.4846 29.7734 43.3624 29.5215 43.1182C29.2755 42.8678 29.1525 42.5319 29.1525 42.1105C29.1525 41.7135 29.2935 41.396 29.5755 41.1578C29.8574 40.9135 30.1904 40.7425 30.5744 40.6448C30.9584 40.541 31.3273 40.483 31.6813 40.4708C31.6693 40.202 31.6003 40.0097 31.4743 39.8936C31.3543 39.7776 31.1533 39.7196 30.8714 39.7196C30.6734 39.7196 30.4784 39.7471 30.2864 39.802C30.1004 39.857 29.8844 39.9456 29.6385 40.0677L29.5395 39.1425C30.0854 38.8738 30.6314 38.7394 31.1773 38.7394C31.7053 38.7394 32.1073 38.886 32.3833 39.1791C32.6652 39.4723 32.8062 39.9394 32.8062 40.5807V41.8174C32.8062 42.0494 32.8152 42.2174 32.8332 42.3212C32.8572 42.4189 32.8932 42.483 32.9412 42.5136C32.9952 42.538 33.0822 42.5502 33.2022 42.5502H33.3462L33.2472 43.4846H32.8422C32.5962 43.4846 32.3893 43.4388 32.2213 43.3472C32.0533 43.2495 31.9243 43.1182 31.8343 42.9533C31.6903 43.1182 31.4923 43.2495 31.2403 43.3472C30.9944 43.4388 30.7334 43.4846 30.4574 43.4846ZM30.9254 42.6143C31.0394 42.6143 31.1683 42.5868 31.3123 42.5319C31.4563 42.4708 31.5823 42.3884 31.6903 42.2845V41.2402C31.3303 41.2586 31.0124 41.338 30.7364 41.4784C30.4604 41.6189 30.3224 41.8143 30.3224 42.0647C30.3224 42.254 30.3704 42.3945 30.4664 42.4861C30.5624 42.5716 30.7154 42.6143 30.9254 42.6143Z" />
      <path d="M33.6976 38.8127H34.7415L34.7685 39.2982C34.9005 39.1455 35.0685 39.0112 35.2725 38.8951C35.4824 38.7791 35.7014 38.7211 35.9294 38.7211C36.0014 38.7211 36.0674 38.7272 36.1274 38.7394L36.0464 39.857C35.9324 39.8265 35.8034 39.8112 35.6594 39.8112C35.4734 39.8112 35.3025 39.857 35.1465 39.9486C34.9905 40.0341 34.8795 40.141 34.8135 40.2692V43.393H33.6976V38.8127Z" />
      <path d="M36.4791 36.5226H37.595V40.6906L38.9899 38.8127H40.2498L38.6119 41.0112L40.2858 43.393H39.0259L37.595 41.3593V43.393H36.4791V36.5226Z" />
    </svg>
  );
};

export default Logo;
