import React from 'react';
import { GridComponent , ColumnsDirective,ColumnDirective,Resize,Sort,
  Search,
  ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Toolbar,Inject,Selection}
from '@syncfusion/ej2-react-grids';
import { employeesData,employeesGrid } from '../data/dummy';
import { Header } from '../components';


const Complete = () => {
 
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Complete" category="Page" />
      <GridComponent
     
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective >
          {employeesGrid.map((item,index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,Edit,PdfExport,Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Complete