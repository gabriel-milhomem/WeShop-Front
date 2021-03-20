import { toast } from 'react-toastify';

const defaultOptions = {
  position: 'top-right',
  autoClose: 8000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
};

export function success(message) {
  return toast.warn(message, defaultOptions);
}

export function error(message) {
  return toast.info(message, defaultOptions);
}
