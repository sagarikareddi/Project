import React from "react";
import logo from "../img/sidebarlogo.png";
import Upload from "./Upload";
function Sidebar() {
  return (
    <>
      <div className="h-[100vh] bg-white text-black ">
        <div className="flex justify-between items-center">
          {/* side bar start */}
          <div className=" w-[20vw] bg-white shadow-2xl border-r-2 border-gray-200 md:h-full flex-col justify-between ml-0">
            <div className="h-[100vh]">
              <ul className="mt-12">
                <img
                  src={logo}
                  alt=""
                  className="w-16 -mt-12 rounded-full ml-6"
                />
                <li className="flex w-full justify-between text-gray-900 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center py-3 px-8">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-grid"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={4} y={4} width={6} height={6} rx={1} />
                      <rect x={14} y={4} width={6} height={6} rx={1} />
                      <rect x={4} y={14} width={6} height={6} rx={1} />
                      <rect x={14} y={14} width={6} height={6} rx={1} />
                    </svg>
                    <span className="text-xl  ml-2">Dashboard</span>
                  </div>
                </li>
                <li className="flex w-full justify-between text-gray-900 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-[15px]"
                    >
                      <path
                        fill="#282929"
                        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"
                      />
                    </svg>
                    <span className="text-xl  ml-2">Upload</span>
                  </div>
                </li>
                <li className="flex w-full justify-between text-gray-900 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-[15px]"
                    >
                      <path
                        fill="#373839"
                        d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"
                      />
                    </svg>
                    <span className="text-xl  ml-2">Calender</span>
                  </div>
                </li>
                <li className="flex w-full justify-between text-gray-900 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-[15px]"
                    >
                      <path
                        fill="#2a2b2c"
                        d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"
                      />
                    </svg>
                    <span className="text-xl  ml-2">Schedule</span>
                  </div>
                </li>
                <li className="flex w-full justify-between text-gray-900 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center  px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-puzzle"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                    </svg>
                    <span className="text-xl  ml-2">Invoices</span>
                  </div>
                </li>
                <li className="flex w-full justify-between text-gray-900 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-[15px]"
                    >
                      <path
                        fill="#373839"
                        d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
                      />
                    </svg>
                    <span className="text-xl  ml-2">Notification</span>
                  </div>
                </li>
                <li className="flex w-full justify-between text-gray-900 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-settings"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    <span className="text-xl  ml-2">Settings</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* side bar end */}

          {/* dashboard start */}
          <div className="w-[85vw] border-0 border-black h-[100vh] text-gray-700">
            {/* nav bar */}
            <div className="flow-right w-full flex justify-around items-center">
              <p className="text-black font-semibold mt-4 ml-5 text-2xl tracking-widest ">
                Upload CSV
              </p>
              <div className="h-12 w-12 mb-4 lg:mb-0 mr-4 ml-[50vw] mt-3 p-2">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_1.png"
                  alt=""
                  className="h-full w-full rounded-full overflow-hidden shadow"
                />
              </div>
            </div>
            <div className=" flex items-center justify-center my-[27vh] mx-auto border-2 h-[30vh] w-[30vw]">
              <Upload />
            </div>
          </div>
          {/* dashboard end */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
