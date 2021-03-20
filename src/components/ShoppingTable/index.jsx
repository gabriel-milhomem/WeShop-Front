import { useContext } from 'react';

import AppContext from '../../contexts/AppContext';

import { BsEye, BsPencil, BsTrash } from 'react-icons/bs';

import { Table, Head, Body } from './styles';

export function ShoppingTable() {
  const { showOrders } = useContext(AppContext);

  if (!showOrders) return null;

  return (
    <section>
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
          <tr>
            <td> <BsEye/> </td>
            <td> 2 </td>
            <td> Gabriel </td>
            <td> R$ 45,00 </td>
            <td> 10/05/2000 </td>
            <td> <BsPencil /> </td>
            <td> <BsTrash /></td>
          </tr>

          <tr>
            <td> 2 </td>
            <td> Gabriel </td>
            <td> R$ 45,00 </td>
            <td> 10/05/2000 </td>
          </tr>
        </Body>
      </Table>
    </section>
  );
}
