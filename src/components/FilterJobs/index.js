import {BsSearch} from 'react-icons/bs'
// eslint-disable-next-line import/extensions
import ProfileItem from '../ProfileItem'

import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event)
  }

  const onEnterSearchInput = event => {
    const {getJobs} = props
    if (event.key === 'Enter') {
      getJobs()
    }
  }

  const renderSearchInput = () => {
    const {getJobs, searchInput} = props
    return (
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <button
          type="button"
          id="searchButton"
          className="search-button-container"
          onClick={getJobs}
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  const renderEmploymentType = () => {
    const {employmentTypesList} = props
    return (
      <div className="employment-type-container">
        <h1 className="employment-type-heading"> Type of Employment</h1>
        <ul className="employee-type-list-container">
          {employmentTypesList.map(eachEmploymentType => {
            const {changeEmploymentType} = props
            const onSelectEmploymentType = event => {
              changeEmploymentType(event.target.value)
            }
            return (
              <li
                className="employee-item"
                key={eachEmploymentType.employmentTypeId}
                onChange={onSelectEmploymentType}
              >
                <input
                  type="checkbox"
                  id={eachEmploymentType.employmentTypeId}
                  className="check-input"
                  value={eachEmploymentType.employmentTypeId}
                />
                <label
                  htmlFor={eachEmploymentType.employmentTypeId}
                  className="check-label"
                >
                  {eachEmploymentType.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    const {salaryRangesList} = props
    return (
      <div className="salary-range-container">
        <h1 className="salary-range-heading">Salary Range</h1>
        <ul className="salary-range-list-container">
          {salaryRangesList.map(eachSalaryRange => {
            const {changeSalaryRange} = props
            const onSelectSalaryRange = () => {
              changeSalaryRange(eachSalaryRange.salaryRangeId)
            }
            return (
              <li
                className="salary-item"
                key={eachSalaryRange.salaryRangeId}
                onClick={onSelectSalaryRange}
              >
                <input
                  type="radio"
                  id={eachSalaryRange.salaryRangeId}
                  name="salary"
                  className="check-input"
                />
                <label
                  htmlFor={eachSalaryRange.salaryRangeId}
                  className="check-label"
                >
                  {eachSalaryRange.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <ProfileItem />
      <hr className="horizontal-line" />
      {renderEmploymentType()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
    </div>
  )
}
export default FiltersGroup
