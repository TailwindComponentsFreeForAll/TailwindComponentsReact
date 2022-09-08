import React from "react";
function IndexPage() {
    return (
        <>
            <div className=" px-6 2xl:px-0 bg-gray-200 w-full flex justify-center items-center py-10 md:py-16 lg:py-32">
                <div className="mx-auto container">
                    <div className>
                        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={131} height={32} viewBox="0 0 131 32" fill="none">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M129.527 22.1528C129.114 21.8624 128.796 21.8143 128.531 22.3783C123.975 32.2534 116.297 27.3256 117.059 27.7592C118.763 26.9796 123.242 23.3848 122.565 18.4211C122.154 15.3877 119.552 14.0421 116.79 14.5239C111.97 15.3649 110.196 20.5681 111.099 25.1745C111.257 25.9657 111.539 26.6181 111.821 27.2572C106.374 31.6903 104.21 23.2889 103.965 22.2849C103.964 22.2803 103.994 22.2502 104.051 22.1939C104.656 21.5926 108.272 17.9964 109.344 10.335C110.573 1.5526 107.773 -0.046521 104.91 0.0033715C99.6125 0.0957367 98.181 11.1721 100.104 20.4035C100.074 20.4115 100.022 20.4328 99.9502 20.4625C99.6428 20.5897 98.9653 20.8698 97.9889 20.9076C97.1222 18.1783 93.4186 15.786 92.4493 16.7079C90.0234 19.014 93.0377 23.5225 95.1585 23.8761C93.8845 31.7286 85.9167 29.7838 87.3999 19.9458C89.9945 15.1241 91.9679 7.95471 91.6158 3.62659C91.4911 2.09425 90.3589 0.0412387 87.7985 0.143071C82.8738 0.338035 82.3384 11.4175 82.9157 19.2811C82.9089 19.2347 82.888 19.2653 82.8324 19.3465C82.656 19.6044 82.13 20.3732 80.5949 20.8078C80.1176 18.1563 75.8513 15.4949 74.8469 16.7744C72.9669 19.1693 76.2251 23.4393 77.7684 23.7371C76.4943 31.5894 68.5268 29.6447 70.01 19.8066C72.6046 14.9852 74.5777 7.81578 74.2256 3.48766C74.1009 1.95507 72.969 -0.0979487 70.4083 0.00362736C65.4836 0.198848 64.9482 11.2783 65.5256 19.1419C65.5188 19.0955 65.498 19.126 65.4427 19.207C65.2635 19.4697 64.7213 20.2644 63.1158 20.6939C63.0455 17.2539 58.7635 15.6765 57.7349 16.7742C55.9017 18.7307 58.1548 22.7452 60.2391 23.7371C58.965 31.5894 50.9975 29.6447 52.4807 19.8066C55.0753 14.9852 57.0487 7.81578 56.6964 3.48766C56.5718 1.95507 55.4397 -0.0979487 52.879 0.00362736C47.9546 0.198848 47.5583 11.8353 48.1356 19.6986C46.5136 26.6532 41.074 35.338 41.7807 17.9404L41.7896 17.7881L41.7953 17.6929C41.8578 16.6545 41.8837 16.2243 41.3187 15.7996C40.9558 15.5168 40.2249 15.5676 39.6562 15.6071C39.5108 15.6172 39.376 15.6266 39.2607 15.6295C38.5724 15.6571 38.3998 16.0601 38.2477 16.6693C37.8933 18.2423 37.8296 19.7672 37.779 21.8479C37.7458 22.8211 37.6678 23.2753 37.2932 24.6024C36.9191 25.9293 34.785 28.3546 33.6165 27.9491C32.0725 27.4178 32.4816 23.2383 32.7864 20.1235L32.7865 20.1229C32.8017 19.9677 32.8166 19.815 32.831 19.6656C33.0842 17.1792 32.2737 16.0626 30.197 15.6566C29.7315 15.5595 29.336 15.5053 28.954 15.4529C28.3383 15.3686 27.7578 15.289 26.9765 15.0425C26.5656 14.9129 26.2638 14.561 25.9415 14.185C25.3245 13.4653 24.632 12.6576 22.9546 13.1538C22.0528 13.4207 22.1075 14.7497 22.1692 16.2488V16.2488C22.203 17.0718 22.239 17.9459 22.12 18.7238C20.4696 29.5213 17.0356 29.8179 15.4424 24.5728C22.6176 6.9873 17.518 0.0545433 14.5329 0.0545433C11.4239 0.0545433 7.86988 2.19762 9.37482 15.9096C9.25737 15.8753 9.15297 15.8436 9.05715 15.8144L9.05665 15.8143L9.05659 15.8143C8.55579 15.6619 8.28924 15.5808 7.61701 15.5808C3.08659 15.5808 0 19.2458 0 23.7668C0 28.2878 3.08684 31.953 7.61727 31.953C10.2917 31.953 12.1694 30.7359 13.5915 28.853C13.638 28.9196 13.6849 28.9873 13.7325 29.0559C14.6348 30.3573 15.7527 31.9695 17.7154 31.8929C23.2634 31.6767 25.267 21.3959 25.7643 18.844L25.7643 18.844L25.7644 18.8436C25.8191 18.563 25.8556 18.3759 25.8765 18.306C26.2266 18.36 26.5666 18.4396 26.8997 18.5176L26.8997 18.5176C27.193 18.5863 27.481 18.6537 27.7657 18.7013C28.7788 18.8535 28.8524 19.2547 28.8294 20.2743C28.5609 28.8722 30.1464 31.8827 33.7428 31.8827C35.7466 31.8827 37.5325 29.9125 38.7629 28.5038C39.6818 30.4017 41.1461 31.8246 43.1105 31.8824C47.0574 31.9806 48.9846 26.7776 49.4331 25.5667L49.4332 25.5667C49.5255 25.3172 49.5552 25.2372 49.5268 25.4079C49.3964 26.1918 51.0711 31.8397 55.9715 31.8601C62.0416 31.8857 63.17 25.2058 63.3045 24.0869L63.2999 24.1547C65.2269 23.796 66.2213 22.762 66.2213 22.762C66.2213 22.762 67.7687 31.964 73.5005 31.8604C79.4528 31.7524 80.5752 25.7141 80.7225 24.5367L80.7202 24.5712C83.0093 23.7379 83.6115 22.9015 83.6115 22.9015C83.6115 22.9015 84.8413 31.9205 90.8907 31.9993C96.2815 32.0699 98.2794 26.5457 98.2912 24.2335C99.2004 24.2432 100.882 23.6936 100.843 23.6624C100.843 23.6624 102.817 31.548 108.332 31.953C110.619 32.121 112.402 30.8539 113.55 30.038L113.55 30.0379L113.551 30.0369C113.702 29.9298 113.842 29.8306 113.97 29.7434C116.572 31.852 125.236 34.5451 130.706 25.2638C131.478 23.9318 129.818 22.3583 129.527 22.1528ZM39.6364 12.3636C41.0422 12.3636 42.1818 11.2239 42.1818 9.81818C42.1818 8.41222 41.0422 7.27273 39.6364 7.27273C38.2305 7.27273 37.0909 8.41222 37.0909 9.81818C37.0909 11.2239 38.2305 12.3636 39.6364 12.3636ZM2.90909 23.9999C2.90909 26.6412 4.57034 29.0909 7.16108 29.0909C9.40624 29.0909 11.1151 27.5297 11.6364 25.3199C11.5683 25.1593 11.5004 25.0011 11.433 24.844L11.4324 24.8427L11.4318 24.8412L11.4317 24.841C11.1377 24.1564 10.8525 23.4922 10.6054 22.7367C10.3783 22.0417 9.91171 20.5113 9.74706 19.8478C8.83913 19.0403 8.19056 18.9091 7.02476 18.9091C4.43401 18.9091 2.90909 21.3588 2.90909 23.9999ZM14.0585 19.6364L14.0584 19.6361C17.1799 12.5905 15.8852 3.63636 14.6671 3.63636C12.8693 3.63636 12.2595 8.05463 12.3778 11.824C12.4825 15.1561 13.3863 18.0898 13.8553 19.4041C13.9119 19.4825 13.9366 19.4994 13.9583 19.5143C13.9822 19.5307 14.0026 19.5447 14.0584 19.6361L14.0583 19.6364H14.0585ZM51.0609 15.2727C50.7324 13.0927 50.7152 3.37416 53.361 3.64179C54.8218 4.16362 52.4347 13.3342 51.0609 15.2727ZM68.5155 15.2727C68.1869 13.0927 68.1697 3.37416 70.8155 3.64179C72.2764 4.16362 69.8893 13.3342 68.5155 15.2727ZM85.9702 16C85.6413 13.8198 85.6244 4.10144 88.2701 4.36906C89.731 4.89088 87.3437 14.0616 85.9702 16ZM105.454 3.64031C107.723 3.4148 107.63 12.9128 103.076 18.9091C102.488 16.7417 101.588 4.38446 105.454 3.64005V3.64031ZM117.368 17.4709C115.468 17.7384 113.625 20.1774 114.339 23.8909H114.339C114.498 24.718 114.895 25.479 114.889 25.4539C119.14 22.5137 119.502 20.1963 119.186 18.634C118.994 17.805 118.032 17.3616 117.368 17.4709Z"
                                        fill="#718096"
                                    />
                                </svg>
                            </div>
                            <div className="pt-10 lg:pt-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={32} viewBox="0 0 30 32" fill="none">
                                    <path
                                        d="M14.2741 32C6.86841 32 0.612293 25.7119 0.612293 18.2703V18.1793C0.55863 14.5963 1.73642 12.1527 2.24481 11.269C3.22772 9.56129 4.4394 8.29402 4.81222 8.09512C5.35734 7.80245 5.75841 8.23719 5.93352 8.42188C6.27245 8.78558 6.10299 9.22885 6.03802 9.39649C5.39123 11.0985 4.89695 12.5647 4.95062 14.6133C5.0184 17.3837 6.0239 18.6879 6.45604 19.1198C6.72718 19.3955 6.95031 19.5233 7.12825 19.5858C7.1565 18.668 7.26383 16.8325 7.67619 14.7639C7.92192 13.5166 8.76642 10.2404 11.2293 6.75681C14.1413 2.63675 17.5645 0.920529 18.1181 0.752885C19.0982 0.457377 21.2419 0.087992 22.9931 0.00843214C24.8544 -0.0711277 25.3091 0.411914 25.8599 1.47461L25.9503 1.65077C27.2325 4.07735 29.5542 11.5105 28.56 19.0033C27.3709 26.9025 21.7645 32 14.2741 32Z"
                                        fill="#718096"
                                    />
                                </svg>
                            </div>
                            <div className="pt-10 lg:pt-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width={196} height={32} viewBox="0 0 196 32" fill="none">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.221039 15.9995C0.221039 7.16448 11.2412 0 24.8348 0C38.4294 0 49.4496 7.16448 49.4496 15.9995C49.4496 24.8355 38.4294 32 24.8348 32C11.2412 32 0.221039 24.8355 0.221039 15.9995ZM23.293 30.3715C20.7125 28.7583 18.8104 23.1916 18.8104 16.5761C18.8104 16.3343 18.8114 16.0955 18.8175 15.8578L18.8197 15.8581L18.8176 15.8551L18.8175 15.8578C11.6395 14.7319 6.45376 11.6482 6.32033 8.00026L6.2998 8.04327C4.54351 10.2218 3.54065 12.7404 3.54065 15.4239C3.54065 23.3207 12.2277 29.7907 23.2468 30.3633L23.293 30.3715ZM30.5204 11.8247C29.6931 6.2816 27.4605 2.30861 24.8358 2.30861C22.2122 2.30861 19.9796 6.2816 19.1522 11.8247L19.1492 11.8155C14.0435 11.0217 10.4693 9.19348 10.4693 7.06411C10.4693 4.20753 16.9022 1.8938 24.8358 1.8938C32.7704 1.8938 39.2033 4.20753 39.2033 7.06411C39.2033 9.19348 35.6292 11.0228 30.5225 11.8155L30.5204 11.8247ZM26.4248 30.3623C37.444 29.7897 46.132 23.3197 46.132 15.4228C46.132 12.7394 45.1281 10.2208 43.3729 8.04225L43.3513 7.99923C43.2189 11.647 38.0336 14.7306 30.8551 15.8566L30.855 15.854L30.852 15.8571L30.8551 15.8566C30.8602 16.0944 30.8622 16.3332 30.8622 16.5751C30.8622 23.1906 28.9591 28.7573 26.3796 30.3705L26.4248 30.3623ZM28.2477 12.0901C27.1131 12.1883 25.9747 12.2368 24.8358 12.2354C23.6976 12.2363 22.56 12.1878 21.426 12.0901C21.9712 8.53857 23.2921 6.03066 24.8368 6.03066C26.3815 6.03066 27.7035 8.53857 28.2477 12.0901ZM28.2477 12.0901L28.2488 12.09L28.2478 12.091L28.2477 12.0901ZM21.426 12.0901L21.4259 12.091L21.4249 12.09L21.426 12.0901ZM24.8358 25.3927C26.8113 25.3927 28.4235 21.2918 28.5095 16.1489L28.5198 16.148L28.5096 16.1449L28.5095 16.1489C26.0659 16.373 23.6068 16.373 21.1632 16.1489L21.1631 16.1449L21.1528 16.148L21.1632 16.1489C21.2491 21.2918 22.8604 25.3927 24.8358 25.3927ZM138.077 3.77121C131.31 3.77121 125.822 9.24674 125.822 15.9995C125.822 22.7543 131.31 28.2278 138.077 28.2278C144.847 28.2278 150.334 22.7543 150.334 15.9995C150.334 9.24674 144.848 3.77121 138.077 3.77121ZM138.077 23.7437C141.857 23.7437 144.922 20.2756 144.922 15.9985C144.922 11.7223 141.857 8.25426 138.077 8.25426C134.298 8.25426 131.235 11.7223 131.235 15.9985C131.235 20.2767 134.299 23.7437 138.077 23.7437ZM164.241 27.6726V8.86573H171.444V4.61415H151.873V8.86573H159.076V27.6726H164.241ZM177.691 22.4849L177.687 22.49L175.706 27.6737H169.673L179.208 4.61415H185.636L195.168 27.6737H189.138L187.157 22.49L187.151 22.4849H177.691ZM185.669 18.5928H182.422H179.173L182.399 10.1542H182.443L185.669 18.5928ZM185.669 18.5928H185.671L185.669 18.5939L185.669 18.5928ZM179.173 18.5928L179.173 18.5939L179.171 18.5928H179.173ZM69.0531 8.86573V27.6726H63.8889V8.86573H56.6852V4.61415H76.2569V8.86573H69.0531ZM89.835 3.77121C83.0655 3.77121 77.5779 9.24674 77.5779 15.9995C77.5779 22.7543 83.0655 28.2278 89.835 28.2278C96.6036 28.2278 102.091 22.7543 102.091 15.9995C102.091 9.24674 96.6036 3.77121 89.835 3.77121ZM89.835 23.7437C93.6135 23.7437 96.6785 20.2756 96.6785 15.9985C96.6785 11.7223 93.6135 8.25426 89.835 8.25426C86.0556 8.25426 82.9916 11.7223 82.9916 15.9985C82.9916 20.2767 86.0556 23.7437 89.835 23.7437ZM116.574 27.6726H113.955H111.338V18.9175L102.329 4.61415H108.36L113.955 14.3064L119.552 4.61415H125.583L116.574 18.9175V27.6726Z"
                                        fill="#718096"
                                    />
                                </svg>
                            </div>
                            <div className="pt-10 lg:pt-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.29357 3.1987C9.29227 1.43367 10.7207 0.00130453 12.4857 0C14.2521 0.00260905 15.6818 1.43498 15.6805 3.2V6.39739H12.4871C10.722 6.39609 9.29227 4.96372 9.29357 3.1987ZM3.97242 8.53159H12.4857C14.2508 8.5329 15.6805 9.96527 15.6792 11.7316C15.6805 13.4966 14.2508 14.929 12.4857 14.9303H3.97111C2.20609 14.9277 0.776329 13.4953 0.778938 11.7303C0.777633 9.96527 2.20739 8.5329 3.97242 8.53159Z" fill="#718096" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.1938 3.1987V11.7303C24.1951 13.4966 22.7654 14.929 21.0003 14.9303C19.2353 14.9277 17.8056 13.4953 17.8082 11.7303V3.1987C17.8069 1.43367 19.2366 0.00130453 21.0017 0C22.7667 0.00260905 24.1951 1.43498 24.1938 3.1987ZM29.515 8.53159C31.28 8.5329 32.7098 9.96527 32.7085 11.7303C32.7098 13.4966 31.28 14.929 29.515 14.9303H26.3215V11.7303C26.3202 9.96527 27.75 8.5329 29.515 8.53159Z" fill="#718096" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M29.515 23.4605H21.0004C19.2353 23.4592 17.8069 22.0268 17.8082 20.2605C17.8069 18.4954 19.2366 17.0631 21.0017 17.0618H29.5163C31.2813 17.0644 32.7111 18.4967 32.7085 20.2618C32.7098 22.0268 31.28 23.4592 29.515 23.4605ZM24.1938 28.7947C24.1951 30.5597 22.7654 31.9921 21.0004 31.9934C19.2353 31.9908 17.8056 30.5584 17.8069 28.7947V25.596H21.0004C22.7654 25.5973 24.1951 27.0296 24.1938 28.7947Z" fill="#718096" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.97241 23.4606C2.20739 23.4593 0.777628 22.027 0.778931 20.2619C0.777628 18.4969 2.20739 17.0645 3.97241 17.0632H7.16589V20.2619C7.16719 22.027 5.73743 23.4593 3.97241 23.4606ZM9.29357 28.7935V20.2619C9.29226 18.4969 10.7207 17.0645 12.487 17.0645C14.2521 17.0671 15.6818 18.4995 15.6792 20.2645V28.7948C15.6805 30.5598 14.2508 31.9922 12.4857 31.9935C10.7207 31.9909 9.29096 30.5585 9.29357 28.7935Z" fill="#718096" />
                                </svg>
                            </div>
                            <div className="pt-10 lg:pt-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width={174} height={32} viewBox="0 0 174 32" fill="none">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.1743 0C16.6416 0 17.9959 0.11399 19.2374 0.451447C20.4788 0.67717 21.4946 1.12862 22.3975 1.69293C23.3004 2.25723 23.9776 3.04727 24.429 4.06415C24.8805 5.07878 25.1062 6.32138 25.1062 7.67572C25.1062 9.25466 24.7676 10.6101 23.9776 11.6259C23.3004 12.6405 22.1718 13.5434 20.8174 14.2206C22.7361 14.7849 24.2033 15.7995 25.1062 17.155C26.0091 18.5093 26.5734 20.2022 26.5734 22.1209C26.5734 23.6998 26.2348 25.0553 25.6705 26.1839C25.1062 27.3125 24.2033 28.3283 23.1875 29.0055C22.1718 29.6838 20.9303 30.2481 19.576 30.5855C18.2216 30.923 16.8673 31.1498 15.5129 31.1498H0.389465V0H15.1743ZM14.2715 12.6405C15.5129 12.6405 16.5287 12.3019 17.3187 11.7376C18.1088 11.1733 18.4473 10.1576 18.4473 8.91608C18.4473 8.2389 18.3345 7.56173 18.1088 7.11029C17.883 6.65884 17.5444 6.32026 17.093 5.98167C16.6416 5.75595 16.1901 5.53022 15.6258 5.41736C15.0615 5.3045 14.4972 5.3045 13.82 5.3045H7.27403V12.6405H14.2715ZM16.5287 25.7336C15.9644 25.8453 15.2872 25.9582 14.61 25.9582H7.27403V17.2678H14.7229C16.1901 17.2678 17.4316 17.6053 18.3345 18.2825C19.2374 19.0736 19.6888 20.2022 19.6888 21.7823C19.6888 22.5712 19.4631 23.2495 19.2374 23.8138C18.8988 24.3781 18.5602 24.7167 18.1088 25.0553C17.6573 25.3939 17.093 25.6196 16.5287 25.7336ZM36.3924 25.8453C37.2952 26.7482 38.6496 27.1997 40.4554 27.1997C41.6969 27.1997 42.8255 26.8611 43.7284 26.2968C44.6313 25.6185 45.1956 24.9424 45.4213 24.2641H50.9515C50.0486 26.9728 48.6943 28.8926 46.8885 30.1329C45.0827 31.2616 42.9383 31.9399 40.3425 31.9399C38.5367 31.9399 36.9567 31.6002 35.4895 31.0358C34.0223 30.4715 32.8936 29.6826 31.8779 28.554C30.8621 27.5383 30.0721 26.2968 29.6206 24.8284C29.0563 23.3612 28.8306 21.7823 28.8306 19.9754C28.8306 18.2825 29.0563 16.7035 29.6206 15.2352C30.185 13.768 30.975 12.5276 31.9907 11.399C33.0065 10.3833 34.248 9.48038 35.6023 8.91608C37.0695 8.35177 38.5367 8.01318 40.3425 8.01318C42.2612 8.01318 43.9541 8.35177 45.4213 9.1418C46.8885 9.93183 48.0171 10.8347 48.92 12.1891C49.8229 13.4305 50.5001 14.8966 50.9515 16.4778C51.1772 18.0579 51.2901 19.6379 51.1772 21.4437H34.8123C34.8123 23.2495 35.4895 24.9424 36.3924 25.8453ZM40.0039 12.7534C41.4711 12.7534 42.7126 13.2048 43.5026 13.9949C44.2927 14.7849 44.857 15.9135 45.0827 17.6064H34.9251C34.9251 17.2319 35.0024 16.8589 35.0931 16.4216L35.0931 16.4213L35.0932 16.4208L35.0934 16.42L35.0938 16.4181L35.0938 16.418L35.0939 16.4175C35.1125 16.3277 35.1317 16.2351 35.1509 16.1392C35.2637 15.5749 35.4895 15.0117 35.9409 14.5592C36.3923 14.1066 36.8438 13.6563 37.521 13.3177C38.1981 12.978 38.9882 12.7534 40.0039 12.7534ZM59.9804 0V11.7376H60.0933C60.8833 10.3833 61.8991 9.48038 63.1406 8.91608C64.3821 8.35177 65.5107 8.01318 66.7522 8.01318C68.4451 8.01318 69.7994 8.23891 70.8152 8.69035C71.8309 9.1418 72.7338 9.81897 73.2981 10.609C73.8624 11.399 74.3139 12.4148 74.5396 13.5434C74.7653 14.672 74.8782 15.9146 74.8782 17.3807V31.2627H68.6708V18.5093C68.6708 16.5907 68.3322 15.2363 67.7679 14.3334C67.2036 13.4305 66.1878 12.9791 64.7206 12.9791C63.0277 12.9791 61.7862 13.5434 61.1091 14.4474C60.319 15.4621 59.9804 17.155 59.9804 19.4122V31.2627H53.7731V0H59.9804ZM81.8756 9.59212C80.8599 10.2704 80.0698 10.9476 79.3927 11.9633C78.8284 12.8662 78.3769 14.1077 78.3769 15.4621H84.5843C84.6972 14.3334 85.1486 13.4305 85.8258 12.8662C86.503 12.3019 87.4058 12.0762 88.6473 12.0762C89.2116 12.0762 89.7759 12.0762 90.2274 12.1902C90.6788 12.3019 91.1292 12.4148 91.4689 12.6405C91.8074 12.8662 92.146 13.2048 92.3718 13.5434C92.5975 13.882 92.7103 14.4463 92.7103 15.1235C92.7103 15.8006 92.5975 16.2521 92.146 16.5907C91.6946 16.9293 91.1303 17.155 90.4531 17.3807C89.7759 17.4936 88.9859 17.6064 88.083 17.7193L85.3743 18.0579C84.3667 18.1709 83.4702 18.394 82.5745 18.6168L82.5528 18.6222C81.6499 18.8479 80.747 19.3005 80.0698 19.7508C79.3927 20.3151 78.8284 20.9923 78.3769 21.7823C77.9255 22.5712 77.6997 23.6998 77.6997 24.9424C77.6997 26.1839 77.9255 27.0868 78.264 27.9908C78.7155 28.8926 79.2798 29.5698 79.957 30.1341C80.747 30.6984 81.537 31.151 82.4399 31.3767C83.4557 31.7141 84.3586 31.827 85.4872 31.827C86.8415 31.827 88.1959 31.7141 89.5502 31.2627C90.9046 30.8124 92.0332 30.1341 93.0489 29.1194C93.0489 29.458 93.0489 29.9084 93.1618 30.2481L93.1748 30.2879C93.1882 30.3292 93.2016 30.3719 93.2153 30.4154C93.3121 30.7227 93.4223 31.0727 93.6132 31.2627H99.9335C99.5938 30.8124 99.2575 30.0223 99.1435 29.1194C99.0306 28.2154 98.9177 27.1997 98.9177 26.1839V14.3334C98.9177 12.9791 98.5792 11.8505 98.016 11.0593C97.3377 10.2693 96.6605 9.59099 95.6448 9.14067C94.743 8.6881 93.6144 8.35064 92.4857 8.23778L92.1726 8.20919C91.0521 8.10662 90.019 8.01205 88.9859 8.01205C87.7433 8.01205 86.503 8.12492 85.2615 8.35064C84.02 8.57749 82.8914 9.02781 81.8756 9.59212ZM91.6935 20.7666C91.356 20.8794 90.9046 20.9923 90.452 21.1051C90.2098 21.1663 89.9677 21.1946 89.7081 21.225C89.4838 21.2513 89.2464 21.2791 88.9848 21.3309C88.7594 21.3874 88.5055 21.4156 88.2513 21.4438C87.9976 21.472 87.7436 21.5002 87.5176 21.5566L86.1632 21.8952C85.7118 22.008 85.2603 22.2338 85.0346 22.4595C84.696 22.6852 84.4703 23.0238 84.2446 23.3624C83.9071 23.8138 83.9071 24.2653 83.9071 24.8296C83.9071 25.3939 84.02 25.8453 84.2457 26.1839L84.2484 26.1879C84.4732 26.5252 84.6985 26.8631 85.0358 27.0868C85.3743 27.3125 85.8258 27.4265 86.2772 27.5383C86.7287 27.65 87.179 27.6511 87.7433 27.6511C88.9859 27.6511 89.8877 27.4265 90.5648 27.0868C91.2431 26.6365 91.6935 26.1839 92.0332 25.6196C92.3718 25.0553 92.5975 24.491 92.5975 23.9267C92.7104 23.3624 92.7104 22.9121 92.7104 22.5723V20.2022L92.7006 20.2088C92.3652 20.4323 92.0299 20.6559 91.6935 20.7666ZM108.286 11.7376V8.57749H102.191V31.3756H108.398V19.5251C108.398 17.2678 108.737 15.5749 109.527 14.5592C110.316 13.5434 111.558 12.8662 113.251 12.8662C114.831 12.8662 115.847 13.4305 116.411 14.3334C116.976 15.2363 117.315 16.5907 117.315 18.5093V31.2627H123.523V17.3807C123.523 15.9146 123.409 14.672 123.183 13.5434C122.844 12.4148 122.394 11.399 121.83 10.609C121.265 9.81897 120.474 9.1418 119.346 8.69035C118.33 8.2389 116.976 8.01318 115.283 8.01318C114.042 8.01318 112.688 8.35177 111.445 8.91608C110.205 9.48038 109.188 10.3833 108.399 11.7376H108.286ZM137.402 12.6405C136.388 12.6405 135.597 12.8662 134.921 13.3188C134.243 13.7691 133.679 14.3334 133.228 15.1246C132.776 15.8018 132.551 16.5918 132.324 17.4947C132.099 18.3987 132.099 19.1876 132.099 20.0916C132.099 20.8805 132.212 21.7846 132.324 22.5735C132.551 23.4775 132.775 24.1535 133.228 24.8307C133.679 25.509 134.131 26.0733 134.808 26.5236C135.485 26.9751 136.274 27.2019 137.29 27.2019C138.758 27.2019 139.887 26.7505 140.788 25.9593C141.579 25.1704 142.144 24.0418 142.257 22.5735H148.238C147.788 25.6207 146.659 27.878 144.738 29.4592C142.821 31.0381 140.338 31.8293 137.29 31.8293C135.597 31.8293 134.017 31.4907 132.662 30.9264C131.194 30.3621 130.065 29.572 129.051 28.5563C128.036 27.5405 127.244 26.299 126.679 24.9447C126.115 23.4775 125.891 22.0092 125.891 20.3162C125.891 18.5104 126.115 16.9304 126.679 15.4632C127.244 13.996 127.922 12.6416 128.937 11.513C129.952 10.3844 131.194 9.59437 132.549 8.9172C134.015 8.35289 135.596 8.01431 137.401 8.01431C138.757 8.01431 139.998 8.24003 141.239 8.57862C142.479 8.9172 143.609 9.48151 144.512 10.1576C145.527 10.8359 146.317 11.7376 146.882 12.8662C147.446 13.882 147.786 15.2363 147.897 16.7035H141.803C141.581 13.9949 140.112 12.6405 137.402 12.6405ZM46.2113 2.14437H33.5708V5.19164H46.2113V2.14437ZM157.606 25.8453C158.51 26.7482 159.976 27.1997 161.669 27.1997C162.911 27.1997 164.04 26.8611 164.942 26.2968C165.846 25.6185 166.41 24.9424 166.635 24.2641H172.053C171.149 26.9728 169.796 28.8926 167.989 30.1329C166.182 31.2616 164.039 31.9399 161.443 31.9399C159.637 31.9399 158.057 31.6002 156.589 31.0358C155.2 30.5179 153.96 29.6655 152.979 28.554C151.963 27.5383 151.173 26.2968 150.721 24.8284C150.157 23.3612 149.931 21.7823 149.931 19.9754C149.931 18.2825 150.157 16.7035 150.721 15.2352C151.265 13.8197 152.069 12.5186 153.091 11.399C154.107 10.3833 155.349 9.48038 156.703 8.91608C158.17 8.35177 159.75 8.01318 161.443 8.01318C163.361 8.01318 165.054 8.35177 166.409 9.1418C167.875 9.93183 169.004 10.8347 169.908 12.1891C170.811 13.4305 171.488 14.8966 171.939 16.4778C172.39 18.0567 172.504 19.7497 172.39 21.5566H156.025C156.025 23.2495 156.703 24.9424 157.606 25.8453ZM161.33 12.7534C162.796 12.7534 164.039 13.2048 164.829 13.9949C165.506 14.7849 166.07 15.9135 166.41 17.6064H156.253C156.253 17.2346 156.329 16.8642 156.418 16.4309C156.437 16.3369 156.457 16.2399 156.477 16.1392C156.589 15.5749 156.93 15.0117 157.267 14.5592C157.605 14.1066 158.169 13.6563 158.846 13.3177C159.523 12.978 160.315 12.7534 161.33 12.7534Z"
                                        fill="#718096"
                                    />
                                </svg>
                            </div>
                            <div className="pt-10 lg:pt-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.5988 2.52283L31.87 0V15.1706L14.5988 15.3077V2.52295V2.52283ZM13.026 2.75524L0 4.53063V4.53075L0.0118282 15.4048L13.0316 15.3306L13.026 2.75524ZM13.0297 29.3658L13.0198 16.7794H13.0197L0.00933809 16.695L0.0100851 27.5742L13.0297 29.3658ZM31.8699 32L31.874 16.8978L14.5745 16.8695L14.5987 29.5603L31.8699 32Z" fill="#718096" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 lg:mt-32 lg:flex justify-between items-start w-full">
                        <p className="xl:3/5 text-base md:text-lg lg:text-xl lg:leading-9 text-gray-700 font-normal xl:pr-8">Lorem Ipsum. Proin gravida nibh vel velit amet auctor aliquet. Aenean sollicitudin, lorem quis bibendum nisi elit consequat ipsum, nec ipsu sagittis sebh id elit. Duis sed odio sit amet nibh vulputatrsus a sit amet mauris morbi ipsum.</p>
                        <div className="sm:flex justify-center xl:justify-end w-full l pt-10 lg:pt-0">
                            <img src="https://cdn.tuk.dev/assets/components/111220/lc-4/map.png" alt />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
