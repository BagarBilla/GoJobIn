import React from 'react'

const CareerResources = () => {
  return (
    <footer className="bg-[#00385F]">

      <div className=" h-[380px] w-full flex justify-between items-center">

        <div className="h-[215px] w-[320px] ml-15">

          <div>
            <img src="./GoJobInLogo.png" alt="Logo" />
          </div>

          <div className="text-white/70 font-inter  text-sm mt-5">
            <p>Connecting people with opportunities that move them forward. Every skill deserves an opportunity.</p>
          </div>

          <div className="flex gap-4 mt-5">
            <a href="https://www.linkedin.com">
              <img className="w-10 h-10" src="./Linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://twitter.com">
              <img className="w-10 h-10" src="./X.png" alt="X" />
            </a>
            <a href="https://www.instagram.com">
              <img className="w-10 h-10" src="./Instagram.png" alt="Instagram" />
            </a> 
            <a href="https://www.facebook.com">
              <img className="w-10 h-10" src="./Facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.youtube.com">
              <img className="w-10 h-10" src="./Youtube.png" alt="YouTube" />
            </a>
          </div>

        </div>


        <div className="h-[216px] w-[770px] flex justify-between mr-15">

          <div>
            <div>
              <h3 className="text-[#D77C2D] font-poppins font-semibold text-4 ">For Job Seekers</h3>
            </div>
            <div className="text-white/70 font-inter text-sm space-y-4 mt-5 flex flex-col">
              <a href="#">Find Jobs</a>
              <a href="#">Saved Jobs</a>
              <a href="#">Applications</a>
              <a href="#">Career Resources</a>
              <a href="#">Resume</a>
            </div>
          </div>

          <div>
            <div>
              <h3 className="text-[#D77C2D] font-poppins font-semibold text-4 ">For Employers</h3>
            </div>
            <div className="text-white/70 font-inter text-sm space-y-4 mt-5 flex flex-col">
              <a href="#">Post a Job</a>
              <a href="#">Find Candidates</a>
              <a href="#">Hiring Solutions</a>
              <a href="#">Pricing</a>
            </div>
          </div>

          <div>
            <div>
              <h3 className="text-[#D77C2D] font-poppins font-semibold text-4 ">Explore</h3>
            </div>
            <div className="text-white/70 font-inter text-sm space-y-4 mt-5 flex flex-col">
              <a href="#">Freelance</a>
              <a href="#">Services</a>
              <a href="#">Companies</a>
              <a href="#">Blog</a>
            </div>
          </div>  

          <div>
            <div>
              <h3 className="text-[#D77C2D] font-poppins font-semibold text-4 ">Company</h3>
            </div>
            <div className="text-white/70 font-inter text-sm space-y-4 mt-5 flex flex-col">
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">Success Stories</a>
              <a href="#">FAQ</a>
            </div>
          </div>

          <div>
            <div>
              <h3 className="text-[#D77C2D] font-poppins font-semibold text-4 ">Legal</h3>
            </div>
            <div className="text-white/70 font-inter text-sm space-y-4 mt-5 flex flex-col">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
       
        </div>

      </div>


      <div className="border-t border-white/20 w-full h-[50px] text-white/70 font-inter text-sm flex justify-between items-center">
        <div className="ml-15">
          © 2026 GoJobin. All rights reserved.
        </div>

        <div className="mr-15">
          <p>Jamshedpur · India</p>
        </div>
      </div>
      
    </footer>
  )
}

export default CareerResources