import { useContext, useState } from 'react';
import { BsEye, BsPencil, BsTrash } from 'react-icons/bs';
import Loader from 'react-loader-spinner';

import axios from 'axios';

import AppContext from '../../contexts/AppContext';
import { error, success } from '../../libs/notify';
import { Table, Head, Body, Container } from './styles';

export function ShoppingTable({ onOpenInfoModal, onOpenOrderModal }) {
  const { showOrders, orders, loading, setCurrentOrderView } = useContext(
    AppContext
  );
  const [disabled, setDisabled] = useState(false);

  if (!showOrders) return null;

  if (loading) {
    return (
      <Container>
        <Loader type="ThreeDots" height={120} width={120} color="#5429cc" />
      </Container>
    );
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:3000/api/orders/${id}`);
      success('Deletado, atualize a página');
    } catch (err) {
      console.error(err);
      setDisabled(false);
      error(err.response.data.message);
    }
  }

  return (
    <Container>
      <Table>
        <Head>
          <th> Visualizar </th>
          <th> Número do Pedido</th>
          <th> Cliente </th>
          <th> Valor Total </th>
          <th> Data </th>
          <th> Editar </th>
          <th> Excluir </th>
        </Head>
        <Body>
          {orders.map(order => {
            const { id, client, createdAt, total } = order;
            const date = new Date(createdAt);
            return (
              <tr key={id}>
                <td>
                  <BsEye
                    onClick={() => {
                      setCurrentOrderView(id);
                      onOpenInfoModal();
                    }}
                  />
                </td>
                <td> {id} </td>
                <td> {client.name} </td>
                <td> R$ {total.toString().replaceAll('.', ',')} </td>
                <td>{`${date.getDate()}/${date.getMonth() + 1}`}</td>
                <td>
                  <BsPencil onClick={() => onOpenOrderModal()} />
                </td>
                <td>
                  <BsTrash onClick={() => handleDelete(id)} />
                </td>
              </tr>
            );
          })}
        </Body>
      </Table>
    </Container>
  );
}
