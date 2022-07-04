import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import {useDispatch, useSelector} from "react-redux";
import {allFilters} from "../store/filter/filterSelectors";
import { removeFilter, removeAllFilters } from "../store/filter/filterReducer";


const FilterPanel = () => {
  const filters = useSelector(allFilters);
  const dispatch = useDispatch();
  if (filters.length === 0) return null;
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {
            filters.map(filter =>
                <Badge
                    onClear={() => dispatch(removeFilter(filter))}
                    key={filter} variant="clearable">{ filter }
                </Badge>)
          }
        </Stack>

        <button onClick={() => dispatch(removeAllFilters())} className='link'>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};