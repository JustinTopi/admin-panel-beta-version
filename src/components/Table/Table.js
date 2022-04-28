import "./Table.scss";
import Table from 'react-bootstrap/Table'
import dataR from '../../assets/data.json'

const TableList = () => {
    let tb_data = dataR['ΣΥΝΟΛΟ 2016'].map(item => {
        return (
            <tr key={item['Α/Α']}>
                <td>{item['Α/Α']}</td>
                <td>{item['ΚΩΔ. ΠΕΛΑΤΗ']}</td>
                <td>{item['ΚΑΤΗΓΟΡΙΑ']}</td>
                <td>{item['ΕΤΟΣ']}</td>
                <td>{item['ΣΥΝΟΛΟ ΚΑΤΑΝΑΛΩΣΗΣ ΑΕΡΙΟΥ (kWh)']}</td>
                <td>{item['ΑΞΙΑ ΑΕΡΙΟΥ (€)']}</td>
                <td>
                    <button className="btn btn-danger">Remove</button>
                </td>
            </tr>
        )
    })
return (
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>ID</th>
            <th>Client Code</th>
            <th>Category</th>
            <th>Year</th>
            <th>Total Gas Consumption (kWh)</th>
            <th>Gas Value (€)</th>
            <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {tb_data}
        </tbody>
    </Table>
  );
};

export default TableList;