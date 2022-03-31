import React, { useState } from 'react';
import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import {userRows} from '../../dummyData';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const UserList = (props) => {   
    const [data,setData] = useState(userRows);
    const handleDelete = (id) => {
      setData(data.filter(item => item.id !== id));
    }
    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'firstName', 
        headerName: 'First name', 
        width: 200,
        renderCell:(params) => {
          return(
            <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt="" />
              {params.row.firstName}
            </div>
          )
        } 
      },
      { field: 'lastName', headerName: 'Last name', width: 130 },
      {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
      },
      {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
          `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      },
      {
        field:'action',
        headerName:'Action',
        width:150,
        renderCell:(params) => {
          return (
            <>
              <Link to={'/user/'+params.row.id}>
                <button className="userListEdit">Edit</button>
              </Link>            
              <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
            </>
          )
        }
      }
    ];
    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
};

export default UserList;