import cx from 'classnames'

const EmptyProperty = () => {
  return (
    <div className="border border-gray-500 bg-gray-800 text-white p-2 rounded">
      ???
    </div>
  )
}

type Props = {
  className?: string
}

const Empty = ({ className }: Props) => {
  return (
    <div className={cx('p-4', className)}>
      <div className="flex items-center justify-center">
        <p>Make a guess</p>
      </div>

      <div className="flex flex-col space-y-2 justify-center mt-2 lg:space-x-2 lg:flex-row lg:space-y-0">
        <EmptyProperty />
        <EmptyProperty />
        <EmptyProperty />
        <EmptyProperty />
        <EmptyProperty />
      </div>
    </div>
  )
}

export default Empty
