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
  return toast.success(message, defaultOptions);
}

export function error(message) {
  return toast.error(message, defaultOptions);
}
