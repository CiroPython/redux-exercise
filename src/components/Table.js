import { useSelector } from "react-redux";
import { Table } from 'antd';
import Column from "antd/lib/table/Column";
const TableView = () => {
    const users = useSelector(state => state.users);

    // Component for display always First Row with Summary Interface
    const FirstRow = () =>{
        return(
        <Table.Summary  fixed={"top"}>
            <h2>First Row</h2>
            <Table.Summary.Row >
                <Table.Summary.Cell index={0}>{users.users[0]?.name}</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>{users.users[0]?.email}</Table.Summary.Cell>
                <Table.Summary.Cell index={2}>{users.users[0]?.address.map((tag,index) => (<div key={index}>{tag.city}</div>))}</Table.Summary.Cell>
            </Table.Summary.Row>
        </Table.Summary>)
    }

    return(
    <Table summary={() => FirstRow()} dataSource={users.users} rowKey={obj => obj.id}>
        <Column title="First Name" sorter={(a, b) => a.name.localeCompare(b.name)}  dataIndex="name" key="name" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column
        title="City"
        dataIndex="address"
        key="address"
        filters={users.cityArr}
        render={address =>(
            <>
            {address.map((tag,index) => (
                <div key={index}>{tag.city}</div> 
            ))}
            </>
        )}
        onFilter={(value,record)=>record.address[0].city.includes(value)} 
        />
   </Table>
  
    )
}

export default TableView;