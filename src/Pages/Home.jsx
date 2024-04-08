import React from "react";
import Logo from "../Assets/Icons/icons8-nike-32.png";
import Search from "../Assets/Icons/icons8-search-30.png";
import Bag from "../Assets/Icons/icons8-bag-24.png";
import Hamburg from "../Assets/Icons/icons8-menu-32 (1).png";
import Shoe from "../Assets/Images/attack-court-green-and-hyper-grape-fz2097-101-release-date.jpg";
import Shoe2 from "../Assets/Images/women-s-air-force-1-07-lx-black-dz2708-002-release-date.jpg";
import Twitter from "../Assets/Icons/icons8-twitter-32.png";
import Fb from "../Assets/Icons/icons8-fb-32.png";
import Insta from "../Assets/Icons/icons8-insta-32.png";

function Home() {
  return (
    <div className="relative ">
      <div className="flex h-screen w-full">
        <div className="w-1/3 bg-red-500"></div>
        <div className="w-2/3 bg-white"></div>
      </div>
      <div className="absolute top-[350px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl w-[90%] z-10">
        <header className="w-full px-[50px] ">
          <nav className="flex w-full justify-between items-center p-4">
            <div className="w-1/3">
              <img
                className="w-[40px] h-[40px]  cursor-pointer"
                src={Logo}
                alt="Nike"
              />
            </div>
            <div className="flex justify-end w-2/3 cursor-pointer">
              <div className="flex justify-between font-semibold">
                <div className="mr-3 hover:text-red-500">Home</div>
                <div className="mr-3 hover:text-red-500">Shop</div>
                <div className="mr-3 hover:text-red-500">Sale</div>
                <div className="mr-7 hover:text-red-500">Contact</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <img
                    className="w-[20px] h-[20px] mr-3"
                    src={Search}
                    alt="Search"
                  />
                </div>
                <div>
                  <img className="w-[20px] h-[20px] mr-3" src={Bag} alt="Bag" />
                </div>
                <div>
                  <img
                    className="w-[20px] h-[20px] mr-3"
                    src={Hamburg}
                    alt="hamburg"
                  />
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className=" px-[50px]  py-[50px] w-full  flex justify-between">
          <div className=" w-1/2">
            <img
              className=" w-[300px] h-[250px] rounded-2xl "
              src={Shoe}
              alt=""
            />
            <div className=" cursor-pointer flex mt-[120px]">
              <div>
                <img className=" mr-5 w-[20px] h-[20px]" src={Insta} alt="" />
              </div>
              <div>
                <img className=" mr-5 w-[20px] h-[20px]" src={Fb} alt="" />
              </div>
              <div>
                <img className=" w-[20px] h-[20px]" src={Twitter} alt="" />
              </div>
            </div>
          </div>

          <div className=" w-1/2">
            <div className=" text-[36px] font-bold">
              <div className="text-[#EB5769]">Nike</div> Air Max{" "}
              <span className="text-[#EB5769]">2090</span>
            </div>
            <div className=" font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              numquam esse, nemo tenetur ullam, ut blanditiis dolores vitae
              incidunt magnam modi? Nobis, suscipit odio aperiam natus odit
              blanditiis ipsam deleniti? Voluptate quos, enim commodi eaque
              laudantium corrupti aliquid neque tenetur, autem eos, quam
              repellendus hic rem ea perspiciatis unde ducimus culpa. Laborum,
              id maiores alias voluptatem magni ab! Alias, hic?
            </div>
            <div className=" flex justify-end">
              <button className=" text-white  rounded-3xl text-center px-3 py-1 bg-[#EB586A]">
                Know more
              </button>
            </div>
            <div className=" ml-[150px] flex cursor-pointer justify-between  mt-5">
              <div className="px-3 shadow-md border py-2 rounded-lg">
                <img
                  className=" w-[100px]  bg-white  h-[100px]"
                  src={Shoe2}
                  alt="shoe"
                />
                <p className=" w-[100px] text-center">Jordan max 200</p>
              </div>
              <div className="px-3 shadow-md border py-2 rounded-lg">
                <img
                  className=" w-[100px]  bg-white   h-[100px]"
                  src={Shoe2}
                  alt="shoe"
                />
                <p className=" w-[100px] text-center">Nike Air Zoom super</p>
              </div>
              <div className="px-3 shadow-md border py-2 rounded-lg">
                <img
                  className=" w-[100px]  bg-white   h-[100px]"
                  src={Shoe2}
                  alt="shoe"
                />
                <p className=" w-[100px] text-center">Jordan max 200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
