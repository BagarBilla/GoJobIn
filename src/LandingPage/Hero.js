import React from "react";

const Hero = () => {
  const experience = ["0-2", "2-4", "4-6", "6-8", "8-10", "10-12"];
  return (
    <>
      <div className="h-screen w-full pt-12.5 md:pt-18 ">
        <div className="flex h-3/4 w-full">
          {/*section 1*/}
          <div className="w-180 pt-17 pl-30 h-full">
            <div className=" flex flex-col gap-3">
              <div className="flex py-2 px-4 bg-[#FFECD5] rounded-3xl text-[#D77C2D] text-sm gap-2 border-[#D77C2D] border-[0.62px] w-fit font-inter ">
                <span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                  >
                    <g clipPath="url(#clip0_1705_793)">
                      <path
                        d="M6.4235 1.64012C6.44848 1.50636 6.51946 1.38554 6.62415 1.2986C6.72883 1.21165 6.86063 1.16406 6.99671 1.16406C7.13279 1.16406 7.26458 1.21165 7.36927 1.2986C7.47395 1.38554 7.54494 1.50636 7.56992 1.64012L8.18279 4.88113C8.22631 5.11155 8.33829 5.3235 8.5041 5.48931C8.66992 5.65513 8.88187 5.7671 9.11229 5.81063L12.3533 6.4235C12.4871 6.44848 12.6079 6.51946 12.6948 6.62415C12.7818 6.72883 12.8294 6.86063 12.8294 6.99671C12.8294 7.13279 12.7818 7.26458 12.6948 7.36927C12.6079 7.47395 12.4871 7.54494 12.3533 7.56992L9.11229 8.18279C8.88187 8.22631 8.66992 8.33829 8.5041 8.5041C8.33829 8.66992 8.22631 8.88187 8.18279 9.11229L7.56992 12.3533C7.54494 12.4871 7.47395 12.6079 7.36927 12.6948C7.26458 12.7818 7.13279 12.8294 6.99671 12.8294C6.86063 12.8294 6.72883 12.7818 6.62415 12.6948C6.51946 12.6079 6.44848 12.4871 6.4235 12.3533L5.81063 9.11229C5.7671 8.88187 5.65513 8.66992 5.48931 8.5041C5.3235 8.33829 5.11155 8.22631 4.88113 8.18279L1.64012 7.56992C1.50636 7.54494 1.38554 7.47395 1.2986 7.36927C1.21165 7.26458 1.16406 7.13279 1.16406 6.99671C1.16406 6.86063 1.21165 6.72883 1.2986 6.62415C1.38554 6.51946 1.50636 6.44848 1.64012 6.4235L4.88113 5.81063C5.11155 5.7671 5.3235 5.65513 5.48931 5.48931C5.65513 5.3235 5.7671 5.11155 5.81063 4.88113L6.4235 1.64012Z"
                        stroke="#D77C2D"
                        strokeWidth="1.16625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M11.6621 1.16797V3.50047"
                        stroke="#D77C2D"
                        strokeWidth="1.16625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M12.8286 2.33203H10.4961"
                        stroke="#D77C2D"
                        strokeWidth="1.16625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M2.33227 12.8286C2.97637 12.8286 3.49852 12.3064 3.49852 11.6623C3.49852 11.0182 2.97637 10.4961 2.33227 10.4961C1.68816 10.4961 1.16602 11.0182 1.16602 11.6623C1.16602 12.3064 1.68816 12.8286 2.33227 12.8286Z"
                        stroke="#D77C2D"
                        strokeWidth="1.16625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>

                    <defs>
                      <clipPath id="clip0_1705_793">
                        <rect width="13.995" height="13.995" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Every skill deserves an opportunity
              </div>
              <h1 className="text-[#00385F] font-poppins font-bold text-6xl leading-17.5">
                Find the Right Opportunity. <br />
                <span className="text-[#D77C2D]">
                  Build the Right <br /> Future.
                </span>
              </h1>
            </div>
            <div className="mt-4">
              <h3 className="font-inter text-lg word-spacing-[5px] text-[#5E6A76]">
                Discover jobs, freelance opportunities and service-based work
                that match your skills, experience and goals.
              </h3>
            </div>
          </div>
          {/*section 2*/}
          <div className="h-full w-210 flex flex-col items-start">
            <img
              src="./heroImg.png"
              alt="hero image"
              className="w-190 h-full"
            />
          </div>
        </div>
        {/*section 3*/}
        <div className="h-1/4 w-full flex justify-center items-center">
          <div className="w-[90vw] h-1/2 border-[#0E5A8D26] border-2 rounded-full flex items-center gap-2">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-8"
            >
              <path
                d="M13.0972 23.0537C18.5971 23.0537 23.0556 18.5952 23.0556 13.0952C23.0556 7.59529 18.5971 3.13672 13.0972 3.13672C7.59724 3.13672 3.13867 7.59529 3.13867 13.0952C3.13867 18.5952 7.59724 23.0537 13.0972 23.0537Z"
                stroke="#717B9E"
                strokeWidth="1.86335"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M26.6772 26.6792L21.2441 21.2461"
                stroke="#717B9E"
                strokeWidth="1.86335"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Enter skills / designations / companies"
              className="border-r-2 border-[#5E6A7640] w-100 h-10 placeholder:text-center text-lg text-center placeholder:text-[#5E6A76]"
            />
            <select className="border-r-2 border-[#5E6A7640] w-80 h-10 text-lg text-center text-[#5E6A76] appearance-[#5E6A7640] pr-2">
              <option value="">Select experience</option>
              {experience.map((itm, index) => (
                <option key={index} value={itm}>
                  {itm}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Select Location"
              className="w-90 h-10 placeholder:text-center text-lg text-center placeholder:text-[#5E6A76]"
            />
            <button className="ml-4 py-2 px-10 border-[#D9E1E7] border rounded-4xl text-white bg-[linear-gradient(135deg,#D77C2D_0%,#D46F28_100%)] transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer text-lg font-bold font-inter shadow-[0px_3.03px_22.55px_-12.42px_rgba(200,111,37,0.55)]">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
