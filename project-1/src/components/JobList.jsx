import { JobPosition } from './JobPosition';
import {useDispatch, useSelector} from "react-redux";
import { allPositions, filteredPositions } from "../store/position/positionSelectors";
import { addFilter } from "../store/filter/filterReducer";
import { allFilters } from "../store/filter/filterSelectors";

const JobList = () => {

  const dispatch = useDispatch();
  const filters = useSelector(allFilters);
  const data = useSelector(state => filteredPositions(state, filters));

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  }

  return (
    <div className='job-list'>
      {data.map(item => (
        <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
      ))}
    </div>
  )
}

export {JobList};