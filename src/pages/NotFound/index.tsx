import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { setTitle } from '../../utils/generalFunctions';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const NotFound = (props: any) => {
  const [open, setOpen] = useState(true)
  setTitle(`Error ${props.code}`);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  
  let message, subMessage;
  if(props.code === '404') {
      message = "Page not found.";
      subMessage = "The page you're looking for may have been moved, deleted or has never existed.";
  } else if(props.code === '403') {
      message = "Forbidden.";
      subMessage = "You do not have access to this page.";
  }


  return (

<Transition show={open}>
      <Dialog className="relative z-10" onClose={setOpen}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      {/* <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" /> */}
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {props.code}
                      </DialogTitle>
                      <div className="mt-2">
                      <p className="text-sm text-gray-800">
                        {message || "Something went wrong"}
                      </p>
                        <p className="text-sm text-gray-500">
                          {subMessage || "An error has occured, maybe you did something wrong ?"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border-red-600  px-3 py-2 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-600 hover:text-white sm:ml-3 sm:w-auto"
                    onClick={goBack}
                    >
                      Go Back
                  </button>

                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>


  )
}

export default NotFound