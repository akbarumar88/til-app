import React, { Fragment, useEffect, useRef, useState } from "react"
import classNames from "classnames"
import moment from "moment"

export default function ModalAdd(props) {
  const [kata, setKata] = useState("")
  const [arti, setArti] = useState("")

  const iKata = useRef(null)
  const iArti = useRef(null)

  const resetForm = () => {
    setKata("")
    setArti("")
  }

  useEffect(() => {
    // Component Did Update, ketika props visible berubah.
    if (!props.visible) {
      // console.log('props updated ', props.visible)
      // Form modal ditutup, clear all teks
      resetForm()
    } else {
      // Form modal dibuka, fokus ke elemen input
      iKata.current.focus()
    }
  }, [props.visible])

  return (
    <Fragment>
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        tabindex="-1"
        className={classNames(
          "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex",
          { hidden: !props.visible }
        )}
        aria-modal="true"
        role="dialog"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Tambahkan Kata / Frasa
              </h3>
              <button
                onClick={(_) => {
                  props.onBtnClosePress?.()
                }}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <div className="mb-6">
                <label
                  htmlFor="kata"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Kata / Frasa
                </label>
                <input
                  ref={iKata}
                  onChange={(e) => {
                    let val = e.target.value
                    setKata(val)
                  }}
                  type="text"
                  id="kata"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nine Tailed Fox"
                  required=""
                  value={kata}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="arti"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Arti
                </label>
                <input
                  ref={iArti}
                  onChange={(e) => {
                    let val = e.target.value
                    setArti(val)
                  }}
                  type="text"
                  id="arti"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Rubah Berekor Sembilan"
                  required=""
                  value={arti}
                />
              </div>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                onClick={() => {
                  props.onSubmit?.({
                    kata,
                    arti,
                  })
                }}
                data-modal-toggle="defaultModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Tambah
              </button>
              <button
                onClick={(_) => {
                  props.onBtnClosePress?.()
                }}
                data-modal-toggle="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Batalkan
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
