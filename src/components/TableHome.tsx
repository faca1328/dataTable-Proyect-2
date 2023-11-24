import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import {  People, PeopleType } from '../data/people';
import type { } from '@mui/x-data-grid/themeAugmentation';
import { useEffect } from 'react';
import { Checkbox } from '@mui/material';
import { useAppDipatch, useAppSelector } from '../store';
import { addFavorite } from '../store/Favorites/slice';
import { loadPeople } from '../store/People/slice';




export const TableHome = () => {
  const dispatch = useAppDipatch();

  useEffect(() => {
    dispatch(loadPeople(People));
  }, []);

  const people = useAppSelector((state) => state.people);
  const favorites = useAppSelector((state) => state.favorites);





  //Como usamos varias veces esta funcion la declaramos a parte.
  const findPerson = (person: PeopleType) => !!favorites.find(p=> p.id === person.id)
  const filterPerson = (person: PeopleType) => favorites.filter(p=> p.id !== person.id)


  //Aca vemos si existe algun dato cargado de Params/People, si existe se filtra apra que no se cargue, sino, se carga.
  const handleChange=(person: PeopleType) => {
    const filteredPerson = findPerson(person)? filterPerson(person) : [...favorites, person];    
    dispatch(addFavorite(filteredPerson))

  };

  const columns = [
    {
      field: 'favAction',
      type: 'actions',
      sortable: false,
      headerName: '⭐',
      Width: 30,
      
      renderCell: (params: GridRenderCellParams) => <> {        
                                      //!! : convierte los valores a expresiones booleanas
        <Checkbox size='small' checked={findPerson(params.row)} onChange={()=>handleChange(params.row)} />
                                        //pasamos los params como dato.
        } </>
  
    },
    {
      //aca igualamos fiel al nombre del elemento QUE queramos mostarar que estemos llamando en 'row'
      field: 'name',
      headerName: 'Full Name',
      minWidth: 150,
      flex: 1,
      //Aca decimos COMO queremos que se renderice
      renderCell: (params: GridRenderCellParams) => <> {params.value} </>
      //definimos que params es lo que este en nuestro objeto 'people' (params.row)
    },
    {
      field: 'category',
      headerName: 'Category',
      minWidth: 100, 
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <> {params.value} </>
    },
    {
      field: 'company',
      headerName: 'Company',
      minWidth: 150, 
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <> {params.value} </>
    }
  ];
  



  return (

    <DataGrid
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },

      }}
      rows={people}
      columns={columns}
      
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      pageSizeOptions={[5,10,20]}
      //esta es la 'key' de la fila que seria el id del usuario
      getRowId={(row: any) => row.id}

    />
  )
}


export default TableHome; 