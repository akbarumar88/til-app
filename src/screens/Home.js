import axios from "axios"
import classNames from "classnames"
import moment from "moment"
import QueryString from "qs"
import React, { Fragment, useEffect, useState } from "react"
import ModalAdd from "../components/ModalAdd"

export default function Home() {
  const BASE_API = process.env.REACT_APP_BASE_API
  //   console.log(process.env)

  const [data, setData] = useState([])
  const [modalAddVisible, setModalAddVisible] = useState(false)
  const [refresh, setRefresh] = useState(1)
  useEffect(() => {
    let url = `${BASE_API}/all`

    axios
      .get(url)
      .then(({ data }) => {
        console.log("Berhasil", data)
        setData(data.data)
      })
      .catch((error) => {
        console.log(error.message, error.response)
      })

    // return () => {

    // }
  }, [refresh])

  return (
    <Fragment>
      <p className="text-lg">Today I Learned</p>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Kata / Frasa
              </th>
              <th scope="col" className="px-6 py-3">
                Arti
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ kata, arti, tgl }, i) => {
              return (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {kata}
                  </th>
                  <th className="px-6 py-4">{arti}</th>
                  <td className="px-6 py-4">
                    {moment(tgl).format("DD MMM YYYY")}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* <!-- Modal toggle --> */}
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-modal-toggle="defaultModal"
        onClick={() => {
          setModalAddVisible(true)
        }}
      >
        Tambah Data
      </button>

      <ModalAdd
        visible={modalAddVisible}
        onBtnClosePress={() => {
          setModalAddVisible(false)
        }}
        onSubmit={({ kata, arti }) => {
          axios
            .post(`${BASE_API}/add`, QueryString.stringify({ kata, arti }))
            .then(() => {
              setRefresh(refresh + 1)
              setModalAddVisible(false)
            })
            .catch((err) => {
              // setModalAddVisible(false)
              setRefresh(refresh + 1)
              console.log("error saat menambahkan", err.message, err.response)
            })
        }}
      />
    </Fragment>
  )
}
