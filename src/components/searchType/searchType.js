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
      },
      {
        value: "3",
        label:(  <div className="d-flex justify-content-end">
          <BackgroundButton
            width="6rem"
            height="2rem"
            tittle="Add"
          />
        </div> )
      }
    ]}
  />
  
  
);
export default SearchType;
