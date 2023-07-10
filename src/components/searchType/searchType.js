import { Checkbox, Select } from "antd";
import ListSearch from "../../containers/listSearch/listSearch";
import BackgroundButton from "../buttons/backgroundButton";
const SearchType = () => (
  <Select
  showSearch
    style={{
      width: "100%",
    }}
    allowClear={true}
    placeholder="Search Donor ID / Donor Name...."
    optionFilterProp="children"
    options={[
      {
        value: "1",
        label:(<ListSearch/>)
      },
      {
        value: "2",
        label:(<ListSearch/>)
      }
    ]}
  />
  
  
);
export default SearchType;
