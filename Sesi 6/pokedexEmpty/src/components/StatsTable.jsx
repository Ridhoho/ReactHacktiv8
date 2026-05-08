import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { STAT_ROWS } from "../utils/theme";
import { STAT_CLASSNAMES } from "../utils/theme";

export default function StatsTable() {

  

  return (
    <Card.Footer className="p-0 border-0 bg-transparent">
      <Table
        size="sm"
        bordered
        className="mb-0 text-center pokemon-stats-table"
      >
        <tbody>
          {
          
          }
        </tbody>
      </Table>
    </Card.Footer>
  );
}
