export default function VersionRow({
  row,
}: {
  row: { id: string, version: string, product_id: string };
}) {
  return (
    <tr key={row.id}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {row.version}
      </td>
    </tr>
  );
}
