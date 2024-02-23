import React from "react";
import MobileFooter from "../MobileFooter/page";

const Footer = () => {
  return (
    <>
      <div className="flex w-full h-[fit-content] flex-col px-[8.6vw] bg-[#222222] cursor-pointer mt-[202px] md:hidden">
        <div className="mt-[23vh] mb-[10vh] w-full flex justify-center items-center">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="188"
              height="114"
              viewBox="0 0 188 114"
              fill="none"
            >
              <path
                d="M118.082 0.599187V0.296387H69.9215V13.9325H76.954L92.6063 37.7527L92.6945 37.889H94.2994V12.0829H91.5288V31.0508L78.521 11.2552L78.4327 11.119H72.6896V3.11243H115.311V28.7823H118.082V0.599187ZM117.779 49.3399H118.082V34.9241H100.28V11.7447H97.5091V37.7502H115.311V46.5087H72.6896V20.5411H69.9189V49.3374H117.779V49.3399ZM76.3863 26.7182H76.0835V38.7722H79.3285V26.7182H76.3838H76.3863Z"
                fill="white"
              />
              <path
                d="M19.823 66.395L19.8961 84.2224L1.80128 66.395H0.658203V92.8774H4.94787L4.83938 75.3049L22.9696 92.8774H24.0495V66.395H19.8204H19.823Z"
                fill="white"
              />
              <path
                d="M30.9209 66.395V92.8774H35.1777V66.395H30.9209Z"
                fill="white"
              />
              <path
                d="M71.9521 88.7997V81.5981H83.8118V77.5229H71.9521V70.4652H85.2678V66.395H67.6953V92.8774H85.7724V88.8022H71.9521V88.7972V88.7997Z"
                fill="white"
              />
              <path
                d="M108.841 88.7972V66.3875H104.584V92.8698H121.902V88.7946H108.841V88.7972Z"
                fill="white"
              />
              <path
                d="M127.064 66.395V92.8774H131.321V66.395H127.064Z"
                fill="white"
              />
              <path
                d="M156.774 66.395L156.847 84.2224L138.752 66.395H137.609V92.8774H141.902L141.793 75.3049L159.916 92.8774H161.001V66.395H156.772H156.774Z"
                fill="white"
              />
              <path
                d="M175.994 77.9624L186.946 66.3979H181.49L171.515 77.054L170.935 77.8892L171.044 76.5493V66.4005H166.754V92.8828H171.044V82.4766L172.896 80.6573L181.954 92.8828H187.342L175.987 77.9649H175.992L175.994 77.9624Z"
                fill="white"
              />
              <path
                d="M59.3226 86.3749C58.7549 86.9956 58.1013 87.523 57.362 87.9671C55.9817 88.8023 54.4526 89.2237 52.7746 89.2237C51.0966 89.2237 49.5245 88.7973 48.1039 87.9494C46.6883 87.0966 45.563 85.9611 44.7404 84.5328C43.9152 83.0996 43.5014 81.5276 43.5014 79.8041C43.5014 78.0807 43.9102 76.491 44.7227 75.035C45.5301 73.5791 46.6378 72.4309 48.0307 71.5806C49.4236 70.7277 50.9755 70.3063 52.6737 70.3063C54.3719 70.3063 55.8859 70.7277 57.2939 71.5806C58.0383 72.0348 58.7095 72.5697 59.2823 73.1955L62.2144 70.2634C61.3843 69.4282 60.4531 68.7065 59.4236 68.0933C57.3494 66.8544 55.0986 66.2336 52.6762 66.2336C50.2538 66.2336 47.9651 66.8519 45.8909 68.0933C43.8168 69.3272 42.1741 70.98 40.9629 73.0542C39.7466 75.1284 39.1436 77.3792 39.1436 79.8066C39.1436 82.2341 39.7466 84.5455 40.9629 86.6096C42.1741 88.6661 43.8168 90.2987 45.8909 91.4972C47.9651 92.6958 50.2261 93.2989 52.6762 93.2989C55.1264 93.2989 57.3545 92.6908 59.4388 91.4796C60.496 90.8664 61.4347 90.1447 62.2624 89.3146L59.3176 86.3698V86.3749H59.3226Z"
                fill="white"
              />
              <path
                d="M29.9722 104.129V108.023H25.3696V104.129H24.0322V113.218H25.3696V109.299H29.9722V113.218H31.3145V104.129H29.9722Z"
                fill="white"
              />
              <path
                d="M43.4745 106.907C43.2373 106.347 42.8942 105.852 42.4677 105.418C42.0337 104.984 41.5315 104.649 40.9739 104.396C40.4213 104.151 39.8207 104.028 39.1899 104.028C38.5591 104.028 37.9459 104.154 37.3857 104.396C36.8255 104.646 36.331 104.982 35.9096 105.418C35.4806 105.852 35.1525 106.347 34.9153 106.907C34.6781 107.467 34.5596 108.06 34.5596 108.686C34.5596 109.312 34.6781 109.945 34.9153 110.503C35.1525 111.068 35.4806 111.563 35.9096 111.984C36.331 112.405 36.8255 112.728 37.3857 112.965C37.9459 113.195 38.5439 113.314 39.1899 113.314C39.8359 113.314 40.4213 113.195 40.9814 112.958C41.5467 112.721 42.0412 112.385 42.4752 111.964C42.9042 111.535 43.2399 111.043 43.477 110.488C43.7218 109.927 43.8454 109.322 43.8454 108.683C43.8454 108.045 43.7193 107.465 43.477 106.904L43.4745 106.907ZM42.2179 109.988C42.0463 110.397 41.8167 110.753 41.5189 111.055C41.2237 111.358 40.8805 111.595 40.4843 111.767C40.0958 111.938 39.6744 112.024 39.2202 112.024C38.766 112.024 38.337 111.938 37.9433 111.767C37.5421 111.595 37.199 111.358 36.8962 111.055C36.5934 110.753 36.3637 110.397 36.1922 109.988C36.0206 109.587 35.9348 109.153 35.9348 108.683C35.9348 108.214 36.013 107.788 36.1795 107.379C36.3385 106.97 36.5757 106.614 36.8709 106.306C37.1737 105.996 37.5169 105.754 37.9106 105.582C38.2992 105.403 38.7331 105.32 39.2025 105.32C39.6718 105.32 40.073 105.406 40.4742 105.582C40.8704 105.754 41.2111 105.996 41.5088 106.306C41.8041 106.617 42.0413 106.973 42.2129 107.374C42.3844 107.783 42.4702 108.217 42.4702 108.686C42.4702 109.155 42.3844 109.589 42.2204 109.99L42.2179 109.988Z"
                fill="white"
              />
              <path
                d="M56.1539 103.834L51.5967 110.208L47.0925 103.834H47.085V113.218H48.3694V107.843L51.5639 112.277H51.5891L54.8568 107.654V113.218H56.1791V103.834H56.1539Z"
                fill="white"
              />
              <path
                d="M61.3296 111.929V109.302H65.4451V108.01H61.3296V105.421H65.9598V104.129H59.9922V113.218H66.1314V111.926H61.3296V111.929Z"
                fill="white"
              />
              <path
                d="M80.1055 105.421V104.129H74.6602V113.218H76.0026V109.426H79.5908V108.149H76.0026V105.424H80.1055V105.421Z"
                fill="white"
              />
              <path
                d="M88.7801 104.129V109.978C88.7801 110.359 88.6893 110.702 88.5026 111.013C88.3108 111.323 88.0559 111.573 87.7329 111.75C87.4024 111.934 87.034 112.027 86.6202 112.027C86.2063 112.027 85.8707 111.934 85.5528 111.75C85.2374 111.57 84.98 111.321 84.7882 111.013C84.5965 110.702 84.5056 110.362 84.5056 109.978V104.129H83.1758V110.011C83.1758 110.67 83.3272 111.25 83.63 111.742C83.9404 112.242 84.3542 112.625 84.874 112.9C85.4014 113.178 85.9818 113.314 86.6202 113.314C87.2586 113.314 87.8591 113.175 88.3789 112.9C88.9063 112.623 89.3277 112.242 89.6305 111.742C89.9409 111.247 90.0973 110.67 90.0973 110.011V104.129H88.7801Z"
                fill="white"
              />
              <path
                d="M98.0561 109.63L97.9501 109.466L96.363 109.499L96.6582 109.96L98.7525 113.221H100.299L98.0536 109.632L98.0561 109.63ZM99.2951 105.777C99.1361 105.421 98.9065 105.126 98.6238 104.881C98.3337 104.644 97.9855 104.452 97.5843 104.328C97.1831 104.197 96.7415 104.132 96.2671 104.132H93.7715V113.221H95.1139V109.968H96.4387C96.5169 109.968 96.59 109.968 96.6632 109.963C97.1502 109.943 97.5666 109.865 97.9022 109.713C97.9552 109.688 98.0132 109.668 98.0611 109.635C98.3841 109.476 98.6466 109.272 98.8586 109.029C99.1033 108.747 99.2723 108.431 99.3859 108.081C99.4919 107.732 99.5449 107.377 99.5449 107.013C99.5449 106.546 99.4667 106.138 99.3001 105.782L99.2951 105.777ZM98.0839 107.594C98.0309 107.778 97.94 107.957 97.8063 108.113C97.6801 108.277 97.496 108.416 97.2739 108.522C97.0443 108.633 96.7541 108.686 96.4109 108.686H95.1139V105.421H96.4891C96.8045 105.421 97.0695 105.474 97.2865 105.585C97.5035 105.691 97.6826 105.83 97.8063 105.994C97.9375 106.165 98.0309 106.337 98.0839 106.521C98.1369 106.705 98.1621 106.885 98.1621 107.049C98.1621 107.228 98.1369 107.404 98.0839 107.596V107.594Z"
                fill="white"
              />
              <path
                d="M109.972 104.129L109.997 110.49L103.681 104.129H103.338V113.218H104.688L104.647 106.968L110.951 113.218H111.294V104.129H109.972Z"
                fill="white"
              />
              <path
                d="M115.116 104.129V113.218H116.454V104.129H115.116Z"
                fill="white"
              />
              <path
                d="M125.368 109.637C125.237 109.342 125.066 109.097 124.841 108.893C124.616 108.696 124.374 108.524 124.104 108.386C123.834 108.247 123.557 108.128 123.287 108.03C122.956 107.904 122.648 107.773 122.358 107.629C122.068 107.49 121.823 107.318 121.646 107.129C121.462 106.937 121.369 106.715 121.369 106.458C121.369 106.089 121.508 105.799 121.778 105.587C122.055 105.37 122.429 105.264 122.898 105.264C123.234 105.264 123.589 105.325 123.958 105.443C124.326 105.562 124.669 105.701 124.985 105.865L125.5 104.843C125.151 104.634 124.75 104.454 124.293 104.303C123.847 104.152 123.319 104.078 122.706 104.078C122.174 104.099 121.699 104.217 121.291 104.427C120.882 104.636 120.566 104.921 120.337 105.282C120.107 105.645 119.994 106.067 119.994 106.554C119.994 106.963 120.067 107.303 120.223 107.588C120.375 107.866 120.579 108.103 120.829 108.287C121.079 108.479 121.349 108.636 121.646 108.769C121.937 108.9 122.227 109.027 122.509 109.133C122.8 109.244 123.07 109.37 123.327 109.509C123.584 109.652 123.789 109.819 123.94 110.016C124.099 110.213 124.17 110.45 124.17 110.74C124.17 111.071 124.084 111.338 123.907 111.542C123.736 111.747 123.511 111.898 123.249 111.989C122.979 112.087 122.709 112.135 122.431 112.135C122.181 112.135 121.916 112.103 121.641 112.024C121.359 111.951 121.089 111.845 120.831 111.722C120.574 111.59 120.344 111.452 120.148 111.313L119.542 112.352C119.804 112.524 120.095 112.688 120.413 112.832C120.736 112.978 121.079 113.094 121.44 113.18C121.803 113.266 122.176 113.311 122.56 113.311C123.198 113.311 123.738 113.2 124.18 112.968C124.629 112.738 124.97 112.428 125.207 112.032C125.444 111.643 125.563 111.202 125.563 110.722C125.563 110.293 125.497 109.933 125.371 109.635L125.368 109.637Z"
                fill="white"
              />
              <path
                d="M134.733 104.129V108.023H130.131V104.129H128.788V113.218H130.131V109.299H134.733V113.218H136.07V104.129H134.733Z"
                fill="white"
              />
              <path
                d="M139.883 104.129V113.218H141.22V104.129H139.883Z"
                fill="white"
              />
              <path
                d="M151.651 104.129L151.677 110.49L145.361 104.129H145.018V113.218H146.368L146.327 106.975L152.623 113.218H152.971V104.129H151.646H151.651Z"
                fill="white"
              />
              <path
                d="M160.867 108.711V109.996H162.618V111.648C162.421 111.759 162.176 111.84 161.894 111.898C161.611 111.956 161.321 111.984 161.031 111.984C160.523 111.984 160.057 111.911 159.64 111.754C159.226 111.603 158.863 111.378 158.565 111.096C158.263 110.805 158.025 110.462 157.861 110.069C157.697 109.673 157.612 109.231 157.612 108.757C157.612 108.237 157.69 107.762 157.856 107.346C158.02 106.925 158.252 106.569 158.555 106.279C158.85 105.988 159.214 105.764 159.635 105.607C160.057 105.456 160.539 105.378 161.071 105.378C161.283 105.378 161.525 105.403 161.783 105.456C162.04 105.501 162.29 105.575 162.54 105.66C162.784 105.746 162.989 105.84 163.158 105.93L163.592 104.707C163.261 104.502 162.86 104.343 162.401 104.22C161.939 104.093 161.432 104.028 160.892 104.028C160.274 104.028 159.686 104.134 159.12 104.351C158.56 104.56 158.061 104.871 157.632 105.287C157.203 105.701 156.862 106.208 156.612 106.809C156.362 107.409 156.236 108.1 156.236 108.87C156.236 109.509 156.347 110.094 156.567 110.629C156.791 111.169 157.107 111.636 157.528 112.039C157.942 112.441 158.444 112.751 159.03 112.981C159.61 113.205 160.274 113.316 161.005 113.316C161.263 113.316 161.54 113.291 161.828 113.238C162.126 113.18 162.408 113.112 162.691 113.029C162.969 112.95 163.218 112.849 163.443 112.746C163.673 112.635 163.844 112.529 163.97 112.415V108.714H160.869L160.867 108.711Z"
                fill="white"
              />
            </svg>
          </p>
        </div>

        <div className="flex mb-6 w-full justify-center items-center flex-wrap gap-9 hover:decoration-transparent">
          <p className="text-[#DFDFDF] text-base font-semibold">Home</p>
          <p className="text-[#DFDFDF] text-base font-semibold">About</p>
          <p className="text-[#DFDFDF] text-base font-semibold">Collections</p>
          <p className="text-[#DFDFDF] text-base font-semibold">Textiles</p>
          <p className="text-[#DFDFDF] text-base font-semibold">
            Design & Innovation
          </p>
          <p className="text-[#DFDFDF] text-base font-semibold">Contact</p>
        </div>

        <div className="flex mb-6 w-full justify-center items-center flex-wrap gap-9">
          <p className="text-[#DFDFDF] text-base font-semibold">Home</p>
          <p className="text-[#DFDFDF] text-base font-semibold">About</p>
          <p className="text-[#DFDFDF] text-base font-semibold">Collections</p>
          <p className="text-[#DFDFDF] text-base font-semibold">Textiles</p>
        </div>

        <div className="mt-9 flex justify-center items-center ">
          <p className="text-white text-xs font-semibold uppercase">
            Follow Us
          </p>
        </div>

        <div className="mt-5 flex justify-center items-center gap-9">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
            >
              <path
                d="M17.8686 23.5818H23.991V6.43918H6.84836V23.5818H15.4197V17.4595H12.9707V15.0105H15.4197V12.9852C15.4197 11.3481 15.5911 10.7542 15.9095 10.1555C16.2231 9.56304 16.7078 9.07877 17.3005 8.76568C17.7682 8.51467 18.3498 8.36406 19.3662 8.29916C19.769 8.27345 20.2906 8.30528 20.931 8.39712V10.7236H20.3176C19.1947 10.7236 18.7307 10.7763 18.4539 10.9244C18.2889 11.0094 18.1544 11.1438 18.0694 11.3089C17.9225 11.5856 17.8686 11.8599 17.8686 12.984V15.0105H20.9298L20.3176 17.4595H17.8686V23.5818ZM5.62389 3.99023H25.2155C25.5402 3.99023 25.8517 4.11924 26.0813 4.34887C26.3109 4.57851 26.4399 4.88996 26.4399 5.21471V24.8063C26.4399 25.131 26.3109 25.4425 26.0813 25.6721C25.8517 25.9018 25.5402 26.0308 25.2155 26.0308H5.62389C5.29914 26.0308 4.98769 25.9018 4.75805 25.6721C4.52842 25.4425 4.39941 25.131 4.39941 24.8063V5.21471C4.39941 4.88996 4.52842 4.57851 4.75805 4.34887C4.98769 4.11924 5.29914 3.99023 5.62389 3.99023Z"
                fill="white"
              />
            </svg>
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M18.482 15.0105V15.0096C18.482 14.1599 18.1874 13.3365 17.6483 12.6797C17.1093 12.0229 16.3591 11.5733 15.5258 11.4075C14.6924 11.2417 13.8273 11.37 13.078 11.7705C12.3286 12.171 11.7413 12.819 11.4161 13.604C11.0908 14.389 11.0479 15.2625 11.2945 16.0756C11.5411 16.8887 12.0619 17.5912 12.7684 18.0633C13.4748 18.5355 14.3231 18.7481 15.1687 18.6649C16.0144 18.5817 16.805 18.2079 17.4059 17.6072C17.7468 17.2776 18.0179 16.8826 18.2028 16.446C18.3877 16.0093 18.4826 15.5398 18.482 15.0656L18.4811 15.0077L18.482 15.0105ZM20.4653 15.0105C20.4609 16.3129 20.0053 17.5736 19.1761 18.5779C18.3469 19.5823 17.1952 20.2683 15.9172 20.5191C14.6391 20.77 13.3136 20.5702 12.1663 19.9539C11.0189 19.3375 10.1206 18.3426 9.62422 17.1384C9.12782 15.9343 9.064 14.5954 9.44364 13.3495C9.82327 12.1036 10.6229 11.0278 11.7064 10.305C12.79 9.58235 14.0905 9.25743 15.3866 9.38561C16.6827 9.51378 17.8943 10.0871 18.8153 11.0081C19.3383 11.5156 19.754 12.123 20.0376 12.7943C20.3212 13.4657 20.467 14.1872 20.4663 14.9159L20.4653 15.016V15.0114V15.0105ZM22.0143 9.1285V9.13033C22.0144 9.43624 21.9085 9.73271 21.7145 9.96924C21.5205 10.2058 21.2505 10.3677 20.9505 10.4275C20.6505 10.4873 20.339 10.4412 20.0692 10.297C19.7994 10.1529 19.5879 9.91968 19.4707 9.63709C19.3536 9.3545 19.338 9.04004 19.4268 8.74728C19.5155 8.45452 19.703 8.20159 19.9573 8.03157C20.2116 7.86155 20.517 7.78497 20.8214 7.81488C21.1259 7.8448 21.4105 7.97934 21.6269 8.1956C21.8619 8.42607 22.0079 8.74744 22.0079 9.10279V9.12941L22.0143 9.1285ZM14.8156 5.96988L13.7184 5.96253C13.0536 5.95764 12.5489 5.95764 12.2043 5.96253C11.8596 5.96743 11.3981 5.98182 10.8196 6.00569C10.2825 6.02405 9.77287 6.07731 9.27429 6.16178L9.34132 6.1526C8.95108 6.21688 8.60492 6.3087 8.27345 6.43082L8.31293 6.41796C7.84465 6.60621 7.41881 6.88632 7.06052 7.24177C6.70222 7.59722 6.41874 8.02082 6.22677 8.48759L6.21759 8.51238C6.09974 8.83496 6.01243 9.16789 5.95682 9.50679L5.95223 9.54077C5.87056 10.0232 5.82179 10.5107 5.80624 10.9998L5.80532 11.0191C5.78145 11.5982 5.76706 12.0597 5.76216 12.4037C5.75727 12.7477 5.75727 13.2524 5.76216 13.9178C5.76706 14.5832 5.76951 14.949 5.76951 15.0151C5.76951 15.0812 5.76706 15.447 5.76216 16.1123C5.75727 16.7777 5.75727 17.2824 5.76216 17.6265C5.76706 17.9705 5.78145 18.432 5.80532 19.0111C5.82368 19.5483 5.87694 20.0579 5.96141 20.5564L5.95223 20.4894C6.01651 20.8797 6.10833 21.2258 6.23045 21.5573L6.21759 21.5178C6.40584 21.9861 6.68594 22.4119 7.0414 22.7702C7.39685 23.1285 7.82045 23.412 8.28722 23.604L8.31201 23.6131C8.604 23.7224 8.95016 23.8142 9.30643 23.8739L9.3404 23.8785C9.77104 23.9538 10.2806 24.007 10.7985 24.0245L10.8178 24.0254C11.3969 24.0493 11.8584 24.0637 12.2024 24.0686C12.5465 24.0735 13.0512 24.0735 13.7166 24.0686L14.8074 24.0465L15.9046 24.0539C16.5694 24.0588 17.0741 24.0588 17.4187 24.0539C17.7634 24.049 18.2249 24.0346 18.8034 24.0107C19.3405 23.9924 19.8501 23.9391 20.3487 23.8546L20.2817 23.8638C20.6719 23.7995 21.0181 23.7077 21.3496 23.5856L21.3101 23.5984C21.7784 23.4102 22.2042 23.1301 22.5625 22.7746C22.9208 22.4192 23.2043 21.9956 23.3962 21.5288L23.4054 21.504C23.5147 21.212 23.6065 20.8659 23.6662 20.5096L23.6708 20.4756C23.7461 20.045 23.7993 19.5354 23.8168 19.0175L23.8177 18.9983C23.8416 18.4192 23.856 17.9576 23.8609 17.6136C23.8657 17.2696 23.8657 16.7649 23.8609 16.0995C23.856 15.4341 23.8535 15.0683 23.8535 15.0022C23.8535 14.9361 23.856 14.5704 23.8609 13.905C23.8657 13.2396 23.8657 12.7349 23.8609 12.3909C23.856 12.0468 23.8416 11.5853 23.8177 11.0062C23.7993 10.4691 23.7461 9.95947 23.6616 9.46088L23.6708 9.52791C23.6125 9.16385 23.5194 8.80624 23.3926 8.46004L23.4054 8.49953C23.2172 8.03125 22.9371 7.60541 22.5816 7.24711C22.2262 6.88882 21.8026 6.60533 21.3358 6.41337L21.311 6.40419C20.9884 6.28633 20.6555 6.19903 20.3166 6.14342L20.2826 6.13883C19.8004 6.0572 19.3133 6.00842 18.8245 5.99283L18.8052 5.99192C18.2261 5.96804 17.7646 5.95366 17.4206 5.94876C17.0766 5.94386 16.5719 5.94386 15.9065 5.94876L14.8156 5.96988ZM25.8276 15.0105C25.8276 17.2007 25.8032 18.7167 25.7542 19.5584C25.7976 20.4114 25.6613 21.2639 25.3541 22.0609C25.0469 22.8578 24.5758 23.5814 23.9711 24.1846C23.3664 24.7878 22.6417 25.2572 21.844 25.5624C21.0464 25.8677 20.1934 26.0019 19.3405 25.9564L19.3552 25.9573C18.5135 26.0063 16.9976 26.0308 14.8074 26.0308C12.6172 26.0308 11.1012 26.0063 10.2595 25.9573C9.40653 26.0007 8.55393 25.8644 7.75698 25.5572C6.96003 25.2501 6.23652 24.7789 5.63331 24.1742C5.03011 23.5695 4.56069 22.8449 4.25546 22.0472C3.95023 21.2495 3.816 20.3966 3.86148 19.5437L3.86057 19.5584C3.81159 18.7167 3.78711 17.2007 3.78711 15.0105C3.78711 12.8203 3.81159 11.3043 3.86057 10.4626C3.81716 9.60965 3.95347 8.75705 4.26064 7.96011C4.56781 7.16316 5.039 6.43964 5.64367 5.83644C6.24835 5.23324 6.97301 4.76381 7.77071 4.45858C8.5684 4.15335 9.42133 4.01913 10.2742 4.06461L10.2595 4.06369C11.1012 4.01472 12.6172 3.99023 14.8074 3.99023C16.9976 3.99023 18.5135 4.01472 19.3552 4.06369C20.2082 4.02029 21.0608 4.15659 21.8578 4.46376C22.6547 4.77094 23.3782 5.24213 23.9814 5.8468C24.5846 6.45147 25.0541 7.17614 25.3593 7.97383C25.6645 8.77152 25.7987 9.62445 25.7533 10.4773L25.7542 10.4626C25.8032 11.3037 25.8276 12.8197 25.8276 15.0105Z"
                fill="white"
              />
            </svg>
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M19.316 9.27092C18.8654 9.46683 18.3818 9.60153 17.8736 9.6603C18.3928 9.35418 18.7895 8.86929 18.9781 8.29256C18.4833 8.58088 17.9435 8.78373 17.3814 8.89256C17.1449 8.64469 16.8604 8.44759 16.5453 8.31328C16.2301 8.17897 15.8909 8.11026 15.5483 8.11134C14.161 8.11134 13.0369 9.21949 13.0369 10.5848C13.0369 10.7782 13.059 10.9668 13.1018 11.148C12.1067 11.1008 11.1324 10.8466 10.241 10.4018C9.34964 9.95693 8.56077 9.33116 7.92475 8.5644C7.70136 8.94043 7.58374 9.36985 7.58434 9.80724C7.58434 10.6644 8.02883 11.4235 8.70229 11.8656C8.30365 11.8531 7.91356 11.747 7.56353 11.5558V11.5864C7.56731 12.1612 7.77022 12.717 8.1377 13.1591C8.50519 13.6011 9.01453 13.9021 9.57901 14.0109C9.20843 14.1088 8.82068 14.1231 8.44392 14.0525C8.60816 14.547 8.9223 14.9781 9.34272 15.286C9.76314 15.5938 10.269 15.7632 10.79 15.7704C9.89611 16.4593 8.79858 16.8314 7.67006 16.8284C7.46802 16.8284 7.26843 16.8161 7.07129 16.7941C8.22287 17.523 9.55815 17.9091 10.921 17.9071C15.5422 17.9071 18.0683 14.1382 18.0683 10.8689L18.0597 10.548C18.5523 10.2019 18.978 9.76914 19.316 9.27092Z"
                fill="white"
              />
              <path
                d="M5.84712 3.21457C5.19761 3.21457 4.57471 3.47259 4.11545 3.93185C3.65618 4.39112 3.39817 5.01402 3.39817 5.66352V20.3572C3.39817 21.0067 3.65618 21.6296 4.11545 22.0889C4.57471 22.5481 5.19761 22.8062 5.84712 22.8062H20.5408C21.1903 22.8062 21.8132 22.5481 22.2725 22.0889C22.7317 21.6296 22.9898 21.0067 22.9898 20.3572V5.66352C22.9898 5.01402 22.7317 4.39112 22.2725 3.93185C21.8132 3.47259 21.1903 3.21457 20.5408 3.21457H5.84712ZM5.84712 0.765625H20.5408C21.8398 0.765625 23.0856 1.28165 24.0041 2.20019C24.9227 3.11872 25.4387 4.36452 25.4387 5.66352V20.3572C25.4387 21.6562 24.9227 22.902 24.0041 23.8205C23.0856 24.7391 21.8398 25.2551 20.5408 25.2551H5.84712C4.54811 25.2551 3.30231 24.7391 2.38378 23.8205C1.46525 22.902 0.949219 21.6562 0.949219 20.3572V5.66352C0.949219 4.36452 1.46525 3.11872 2.38378 2.20019C3.30231 1.28165 4.54811 0.765625 5.84712 0.765625Z"
                fill="white"
              />
            </svg>
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
            >
              <path
                d="M18.7037 14.3949V18.9218H16.0797V14.6973C16.0797 13.6369 15.7001 12.9133 14.7499 12.9133C14.025 12.9133 13.5928 13.4006 13.403 13.8733C13.3344 14.0422 13.316 14.2773 13.316 14.5124V18.9218H10.6908C10.6908 18.9218 10.7263 11.7684 10.6908 11.0276H13.316V12.1455L13.2989 12.1713H13.316V12.1455C13.665 11.6068 14.287 10.8415 15.6817 10.8415C17.4082 10.8415 18.7037 11.9704 18.7037 14.3949ZM7.94427 7.2207C7.04673 7.2207 6.45898 7.8109 6.45898 8.58477C6.45898 9.34394 7.02959 9.95006 7.90999 9.95006H7.92713C8.84304 9.95006 9.41242 9.34272 9.41242 8.58477C9.39527 7.8109 8.84304 7.2207 7.94427 7.2207ZM6.61449 18.9218H9.23977V11.0276H6.61449V18.9218Z"
                fill="white"
              />
              <path
                d="M5.23481 3.21457C4.58531 3.21457 3.96241 3.47259 3.50314 3.93185C3.04388 4.39112 2.78586 5.01402 2.78586 5.66352V20.3572C2.78586 21.0067 3.04388 21.6296 3.50314 22.0889C3.96241 22.5481 4.58531 22.8062 5.23481 22.8062H19.9285C20.578 22.8062 21.2009 22.5481 21.6602 22.0889C22.1194 21.6296 22.3774 21.0067 22.3774 20.3572V5.66352C22.3774 5.01402 22.1194 4.39112 21.6602 3.93185C21.2009 3.47259 20.578 3.21457 19.9285 3.21457H5.23481ZM5.23481 0.765625H19.9285C21.2275 0.765625 22.4733 1.28165 23.3918 2.20019C24.3104 3.11872 24.8264 4.36452 24.8264 5.66352V20.3572C24.8264 21.6562 24.3104 22.902 23.3918 23.8205C22.4733 24.7391 21.2275 25.2551 19.9285 25.2551H5.23481C3.93581 25.2551 2.69001 24.7391 1.77147 23.8205C0.852941 22.902 0.336914 21.6562 0.336914 20.3572V5.66352C0.336914 4.36452 0.852941 3.11872 1.77147 2.20019C2.69001 1.28165 3.93581 0.765625 5.23481 0.765625Z"
                fill="white"
              />
            </svg>
          </p>
        </div>

        <div className="mb-8 flex w-full justify-between mt-16">
          <div className="flex flex-col">
            <p className="text-[#E4E4E4] text-base font-semibold">
              Nice Link Store, 45 West, New York, USA
            </p>
            <p className="text-[#E4E4E4] text-base font-semibold mt-3">
              +01 647543757
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#E4E4E4] text-base font-semibold">
              Nice Link Store, 45 West, New York, USA
            </p>
            <p className="text-[#E4E4E4] text-base font-semibold mt-3 text-right">
              +01 647543757
            </p>
          </div>
        </div>

        <div className="mb-8 flex w-full justify-between mt-16">
          <p className="text-[#E4E4E4] text-base font-semibold">
            ©2019 Nice Link Home Furnishings
          </p>
          <p className="text-[#E4E4E4] text-base font-semibold">
            Privacy | T & C
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <MobileFooter />
      </div>
    </>
  );
};

export default Footer;