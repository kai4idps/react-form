import React from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const withBasicNotify = Component => props => {
  const configuration = { autoClose: 5000 }
  const notify = {
    error: (errMessage, config) => {
      toast.error(
        <div className="ml-1">
          <i className="mdi mdi-bug"> </i>
          {errMessage}
        </div>,
        { ...configuration, ...config }
      )
    },
    warn: (warnMessage, config) => {
      toast.warn(
        <div className="ml-1">
          <i className="mdi mdi-exclamation"> </i>
          {warnMessage}
        </div>,
        { ...configuration, ...config }
      )
    },
    success: (succMessage, config) => {
      toast.success(
        <div className="ml-1">
          <i className="mdi mdi-emoticon-happy"> </i>
          {succMessage}
        </div>,
        { ...configuration, ...config }
      )
    }
  }

  return (
    <>
      <Component {...props} notify={notify} />
      <ToastContainer />
    </>
  )
}

export default withBasicNotify
