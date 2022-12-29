import cx from 'classnames'
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
      className={cx(
        'flex items-center justify-center border rounded p-2 text-sm',
        {
          'border-green-500 bg-green-100 text-black':
            status === PropertyStatus.CORRECT,
          'border-red-500 bg-red-100 text-black':
            status !== PropertyStatus.CORRECT
        }
      )}>
      {value}
    </div>
  )
}

type Props = {
  comparison: BossComparison
  index: number
  className?: string
}

const Guess = ({ comparison, index, className }: Props) => {
  const { guessedBoss } = comparison
  const { name, imageUrl } = guessedBoss

  const isCorrect = (correct: boolean) =>
    correct ? PropertyStatus.CORRECT : PropertyStatus.WRONG

  const PositionToStatus = {
    [NumberCompareEnum.EQUAL]: PropertyStatus.CORRECT,
    [NumberCompareEnum.HIGHER]: PropertyStatus.HIGHER,
    [NumberCompareEnum.LOWER]: PropertyStatus.LOWER
  }

  const PositionToSymbol = {
    [NumberCompareEnum.EQUAL]: '',
    [NumberCompareEnum.HIGHER]: '+',
    [NumberCompareEnum.LOWER]: '-'
  }

  return (
    <div className={cx('p-4 ml-[-90px]', className)}>
      <div className="flex items-center justify-center">
        <img className="w-20 h-20" src={imageUrl} alt="boss-guess" />

        <div className="ml-2">
          <p>
            {index + 1}. {name}
          </p>
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
              value={`${guessedBoss.position}${nth(guessedBoss.position)} boss${
                PositionToSymbol[comparison.position]
              }`}
              status={PositionToStatus[comparison.position]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const nth = (n: number) =>
  ['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'

export default Guess
