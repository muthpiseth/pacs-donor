import { Checkbox, Select } from "antd";
import ListSearch from "../../containers/listSearch/listSearch";
const SearchType = () => (
  <Select
  showSearch
    style={{
      width: "100%",
    }}
    allowClear={true}
    placeholder="Search to Select"
    optionFilterProp="children"
    options={[
      {
        value: "1",
        label:(<ListSearch/>)
      },
      {
        value: "1",
        label:(<ListSearch/> ),
      }
    ]}
  />
  
  
);
export default SearchType;
