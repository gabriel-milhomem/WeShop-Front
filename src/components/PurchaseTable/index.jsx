import { Table, Head, Body } from './styles';

export function PurchaseTable() {
  return (
    <Table>
      <Head>
        <tr>
          <th> Número do Pedido</th>
          <th> Cliente </th>
          <th> Valor Total </th>
          <th> Data </th>
        </tr>
      </Head>
      <Body>
        <tr>
          <td> 2 </td>
          <td> Gabriel </td>
          <td> R$ 45,00 </td>
          <td> 10/05/2000 </td>
        </tr>

        <tr>
          <td> 2 </td>
          <td> Gabriel </td>
          <td> R$ 45,00 </td>
          <td> 10/05/2000 </td>
        </tr>
      </Body>
    </Table>
  );
}
