import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import DeleteModal from '../Modal/DeleteModal';

const ManageProduct = () => {
    const { data: tools, isLoading, refetch } = useQuery('toolsData', () =>
        fetch('https://quiet-shelf-73274.herokuapp.com/tools').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2>Manage All Tools:</h2>
            <div className="table-div">
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Tools Name</th>
                            <th>Available Quantity</th>
                            <th>Price Per Unit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <tr
                                key={tool._id}>
                                <td>{index + 1}</td>
                                <td>{tool.name}</td>
                                <td>{tool.availableQuantity}</td>
                                <td>{tool.pricePerUnit}</td>
                                <td><DeleteModal
                                    tool={tool}
                                    refetch={refetch}
                                ></DeleteModal></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageProduct;