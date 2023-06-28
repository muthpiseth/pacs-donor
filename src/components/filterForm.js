import { Table } from "antd";
const columns = [
  {
    title: "Donor Name",
    dataIndex: "name",
  },
  {
    title: "Donor ID",
    dataIndex: "name",
  },
  {
    title: " Donor State",
    dataIndex: "name",
  },
  {
    title: "Donor Type",
    dataIndex: "name",
  },
  {
    title: "Donor Program",
    dataIndex: "name",
  },
  {
    title: "Register Date",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Action",
    dataIndex: "name",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
];
const onChange = () => {};
const FilterForm = () => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
    className="mt-4"
  />
);
export default FilterForm;
