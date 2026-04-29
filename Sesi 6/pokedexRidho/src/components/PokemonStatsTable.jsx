import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { STAT_CLASSNAMES, STAT_ROWS } from './pokemonTheme';

export default function PokemonStatsTable({ stats, findStat }) {
  if (stats.length === 0) {
    return null;
  }

  return (
    <Card.Footer className="p-0 border-0 bg-transparent">
      <Table size="sm" bordered className="mb-0 text-center pokemon-stats-table">
        <tbody>
          {STAT_ROWS.map((row) => (
            <tr key={row[0].key}>
              {row.map((cell) => (
                <td key={cell.key} className={STAT_CLASSNAMES[cell.key]}>
                  <strong>{cell.label}: {findStat(cell.key)}</strong>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Card.Footer>
  );
}
