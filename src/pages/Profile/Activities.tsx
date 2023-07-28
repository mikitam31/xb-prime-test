import { useMemo } from 'react'
import { Timeline } from 'components'
import { Activity } from 'types'

export type ActivityProps = {
  activities: Activity[]
}

export const Activities = ({ activities }: ActivityProps) => {
  const timelines = useMemo(() => {
    return activities.map(activity => ({
      time: activity.datetime,
      title: activity.activity_test
    }));
  }, [ activities ])

  return (
    <div className="p-3">
      <Timeline items={timelines} />
    </div>
  )
}
