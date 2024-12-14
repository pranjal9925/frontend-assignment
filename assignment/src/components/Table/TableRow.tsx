import { DataInterface } from "../../interface";

interface Props {
  item: DataInterface;
}

function TableRow({ item }: Props) {
  return (
    <tr>
      <td>{item["s.no"]}</td>
      <td>{item["percentage.funded"]}%</td>
      <td style={{ textAlign: "right" }}>
        {item.currency.toLocaleUpperCase() + " " + item["amt.pledged"]}
      </td>
    </tr>
  );
}

export default TableRow;
