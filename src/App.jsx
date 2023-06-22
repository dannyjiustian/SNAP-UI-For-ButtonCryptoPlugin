const App = () => {
  return (
    <>
      <div
        id="donate-snap"
        className="relative z-10 invisible opacity-0 transition-all duration-300 ease-in-out"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:w-[22rem] sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="flex items-center justify-center flex-col">
                  <div className="text-lg font-semibold leading-7 text-gray-900 mb-3">
                    Your Ethereum Wallet
                  </div>
                  <div className="text-white w-72 h-44 bg-gradient-to-tl from-[#89898d] from-20% to-[#3c3c3d] to-80% flex flex-col justify-between rounded-xl p-4 mb-3">
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex w-10 h-10 border-2 border-white rounded-full items-center justify-center">
                        <svg
                          className="w-6 h-6"
                          fill="#fff"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#fff">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path d="M15.927 23.959l-9.823-5.797 9.817 13.839 9.828-13.839-9.828 5.797zM16.073 0l-9.819 16.297 9.819 5.807 9.823-5.801z"></path>{" "}
                          </g>
                        </svg>
                      </div>
                      <div className="font-semibold">Ethereum Card</div>
                    </div>
                    <div className="font-light flex flex-row justify-end items-center">
                      <div className="w-10 h-10">
                        <svg
                          viewBox="0 0 1024 1024"
                          class="icon"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000000">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M106.666667 746.666667V277.333333c0-46.933333 38.4-85.333333 85.333333-85.333333h640c46.933333 0 85.333333 38.4 85.333333 85.333333v469.333334c0 46.933333-38.4 85.333333-85.333333 85.333333H192c-46.933333 0-85.333333-38.4-85.333333-85.333333z"
                              fill="#FF9800"></path>
                            <path
                              d="M917.333333 448v-42.666667H661.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666s19.2-42.666667 42.666666-42.666667h21.333334v-42.666667h-21.333334c-46.933333 0-85.333333 38.4-85.333333 85.333334s38.4 85.333333 85.333333 85.333333h64v128h-64c-59.733333 0-106.666667 46.933333-106.666666 106.666667s46.933333 106.666667 106.666666 106.666666h42.666667v-42.666666h-42.666667c-36.266667 0-64-27.733333-64-64s27.733333-64 64-64h256v-42.666667h-149.333333v-128h149.333333zM362.666667 576h-64v-128h64c46.933333 0 85.333333-38.4 85.333333-85.333333s-38.4-85.333333-85.333333-85.333334h-64v42.666667h64c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666H106.666667v42.666667h149.333333v128H106.666667v42.666667h256c36.266667 0 64 27.733333 64 64s-27.733333 64-64 64h-42.666667v42.666666h42.666667c59.733333 0 106.666667-46.933333 106.666666-106.666666s-46.933333-106.666667-106.666666-106.666667z"
                              fill="#FFD54F"></path>
                          </g>
                        </svg>
                      </div>
                      <div className="w-5 h-5">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#fff">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M15.1997 10.4919L13.2297 8.52188L10.0197 5.31188C9.33969 4.64188 8.17969 5.12188 8.17969 6.08188V12.3119V17.9219C8.17969 18.8819 9.33969 19.3619 10.0197 18.6819L15.1997 13.5019C16.0297 12.6819 16.0297 11.3219 15.1997 10.4919Z"
                              fill="#fff"></path>{" "}
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <div className="font-light flex flex-col">
                        <span className="text-xs">Address</span>
                        <span className="font-medium" id="address-crypto">
                          Not Connect
                        </span>
                      </div>
                      <button
                        id="connectWallet"
                        className="px-3.5 py-1.5 rounded-full bg-[#c99d66] text-sm visible">
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center mb-3">
                    <label
                      htmlFor="amount"
                      className="block text-sm font-medium leading-6 text-gray-900">
                      Amount
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">ETH</span>
                      </div>
                      <input
                        type="number"
                        name="amount"
                        id="amount"
                        className="block w-72 rounded-md border-0 py-1.5 pl-12 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="0.00001"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center mb-3">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium leading-6 text-gray-900">
                      Message (Optional)
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="message"
                        id="message"
                        className="block w-72 rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Thanks!"
                        maxLength="100"
                      />
                    </div>
                  </div>
                  <div className="text-xs text-red-600 w-72">
                    Note: If your transaction is successful,{" "}
                    <span className="font-extrabold">
                      you cannot cancel it!!
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  id="sendNow"
                  type="button"
                  disabled
                  className="inline-flex w-full justify-center rounded-md bg-[#3c3c3d] px-3 py-2 text-sm font-semibold text-white shadow-sm enabled:hover:bg-[#202020] sm:ml-3 sm:w-auto disabled:opacity-60">
                  Send Now!
                </button>
                <button
                  id="closeDonate"
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
