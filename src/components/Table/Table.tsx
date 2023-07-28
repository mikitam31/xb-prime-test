import { ReactNode } from 'react'
import { createSolutionBuilder } from 'typescript';
import { classNames } from 'utils'

export type ColumnProp = {
  title: string
  key: string
  render?: (value: any) => ReactNode
}

export type TableProps = {
  className?: string
  columns: ColumnProp[]
  data: Record<string, number | string>[]
}

export const Table = ({ className, columns, data }: TableProps) => {
  return (
    <table className={classNames('border-collapse table-auto w-full', className)}>
      <thead>
        <tr>
          { columns.map(column => (
            <th
              className="border-b border-secondary/30 font-medium p-2 text-primary text-left bg-white/20"
              key={ column.key }
            >
              { column.title }
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        { data.map(item => (
          <tr key={ item.id}>
            { columns.map((column, index) => (
              <td
                key={ `${item.id}-${column.key}-${index}` }
                className="border-b border-secondary/30 p-2 text-primary bg-white/20"
              >
                { column.render ? column.render(item[column.key]) : item[column.key] }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
