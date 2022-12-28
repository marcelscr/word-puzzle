import cx from 'classnames'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { BossComparison } from '~/data/types'
import { NumberCompareEnum } from '~/data/constants'

const enum PropertyStatus {
  CORRECT,
  WRONG,
  HIGHER,
  LOWER
}

type PropertyProps = {
  value: string
  status: PropertyStatus
}

const Property = ({ value, status }: PropertyProps) => {
  return (
    <div
      className={cx('flex items-center justify-center border rounded p-2', {
        'border-green-500 bg-green-100 text-black':
          status === PropertyStatus.CORRECT,
        'border-red-500 bg-red-100 text-black':
          status !== PropertyStatus.CORRECT
      })}>
      {value}
      {status === PropertyStatus.HIGHER && <ArrowUpIcon className="w-5 h-5" />}
      {status === PropertyStatus.LOWER && <ArrowDownIcon className="w-5 h-5" />}
    </div>
  )
}

type Props = {
  comparison: BossComparison
  className?: string
}

const Guess = ({ comparison, className }: Props) => {
  const { guessedBoss } = comparison
  const { name, imageUrl } = guessedBoss

  const isCorrect = (correct: boolean) =>
    correct ? PropertyStatus.CORRECT : PropertyStatus.WRONG

  const PositionToStatus = {
    [NumberCompareEnum.EQUAL]: PropertyStatus.CORRECT,
    [NumberCompareEnum.HIGHER]: PropertyStatus.HIGHER,
    [NumberCompareEnum.LOWER]: PropertyStatus.LOWER
  }
  return (
    <div className={cx('p-4 border rounded border-white', className)}>
      <div className="flex items-center justify-center">
        <img className="w-20 h-20" src={imageUrl} alt="boss-guess" />
        <p>{name}</p>
      </div>

      <div className="flex flex-col space-y-2 justify-center mt-2 lg:space-x-2 lg:flex-row lg:space-y-0">
        <Property
          value={guessedBoss.expansion}
          status={isCorrect(comparison.expansion)}
        />
        <Property
          value={guessedBoss.location}
          status={isCorrect(comparison.location)}
        />
        <Property
          value={guessedBoss.type}
          status={isCorrect(comparison.type)}
        />
        <Property
          value={guessedBoss.gender}
          status={isCorrect(comparison.gender)}
        />
        <Property
          value={`Raid position: ${guessedBoss.position.toString()}`}
          status={PositionToStatus[comparison.position]}
        />
      </div>
    </div>
  )
}

export default Guess
