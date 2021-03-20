import { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import Modal from 'react-modal';

import axios from 'axios';

import { error } from '../../libs/notify';
import { Title } from './styles';

export default function OrderModal({ isOpen, onRequestClose }) {
  const [clients, setClients] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get('http://localhost:3000/api/clients');
        setClients([...data]);
      } catch (err) {
        console.error(err);
        error(err.response.data.message);
      }
    })();

    (async function () {
      try {
        const { data } = await axios.get('http://localhost:3000/api/products');
        setProducts([...data]);
      } catch (err) {
        console.error(err);
        error(err.response.data.message);
      }
    })();

    setLoading(false);
  }, []);

  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      {loading ? (
        <Loader type="ThreeDots" height={100} width={100} color="#5429cc" />
      ) : (
        <Title> Fazer pedido </Title>
      )}
    </Modal>
  );
}
