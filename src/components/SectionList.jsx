import Table from "react-bootstrap/Table";

function SectionList({ item }) {
  return (
    <div style={{ width: "1000px", margin: "0 auto", marginTop: "30px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.lastName}</td>
            <td>@{item.age}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default SectionList;
