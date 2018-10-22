import * as React from 'react';
import { Service } from './services';
import { Table } from './components/table';
import { AddStudent } from './components/addstudent';



export class Container extends React.Component<{}>{
  private service = new Service();

  public render() {
    return (      
    <div>
       <AddStudent />
       <Table getStudents = {this.service.getStudents} deleteStudents = {this.service.deleteStudentbyID}  />
     
     </div>
    );
  }
}
