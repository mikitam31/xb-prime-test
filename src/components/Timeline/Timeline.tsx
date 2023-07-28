export type TimelineItem = {
  time: string
  title: string
  detail?: string
}

export type TimelineProps = {
  items: any[]
}

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <ol className="relative border-l border-secondary/50">
      { items.map(item => (
        <li className="mb-10 ml-4" key={item.time}>
          <div className="absolute w-3 h-3 bg-secondary/50 rounded-full mt-1.5 -left-1.5 border border-secondary"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            { item.time }
          </time>
          <h3 className="text-md font-semibold text-primary">
            {item.title}
          </h3>
          { item.detail && (
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {item.detail}
            </p>
          )}
        </li>
      ))}
  </ol>
  )
}
