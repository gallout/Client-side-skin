import * as React from "react";

import { Student } from '../models/data/student'

import { AxiosPromise } from "axios";

import 'src/components/table.css';

import { TableData } from "./tabledata";


interface IGetListProps{
    getStudents(): AxiosPromise<any>;
    deleteStudents(id:number): any;

    
}

interface IGetListState {
    data: Student[];
    listIsShow : boolean
}

export class Table extends React.Component<IGetListProps, IGetListState> {
    state = {
        data: [],
        listIsShow:false,   
    };   
  
    public render() {
     
        return (
            <>
            <table className="table">              
            <thead>
                <tr className = "main-line">
                    <th />
                    <th>ID</th> 
                    <th>Имя  </th> 
                    <th>Фамилия </th> 
                    <th>Дата регистрации  </th> 
                    <th />
                </tr>                        
            </thead>
            <tbody className="body">   
                          
               <TableData data={this.state.data} listIsShow={this.state.listIsShow} onDelete={this.onDeleteUpdatePage} onUpdate={this.onUpdatePage} />
            </tbody>
            </table>
            </>

        )
    }
  
    private onDeleteUpdatePage= async (id:number)=>{
         console.log('delete '+id);
            await this.props.deleteStudents(id)
           
            this.setState({listIsShow:false})

            if(this.props.getStudents!= undefined) {
              this.props.getStudents()
                  .then(response => {
                      this.setState({ data: response.data});
                      console.log(response.data);
                  })
                  .catch((error) => {console.log(error);});
            }
      this.setState({listIsShow:true})
     }

     private onUpdatePage= async (id:number)=>{
        console.log('delete '+id);
        
          
           this.setState({listIsShow:false})

           if(this.props.getStudents!= undefined) {
             this.props.getStudents()
                 .then(response => {
                     this.setState({ data: response.data});
                     console.log(response.data);
                 })
                 .catch((error) => {console.log(error);});
           }
     this.setState({listIsShow:true})
    }

    
    public componentDidMount  ()  {
        
        this.setState({listIsShow:false})
              if(this.props.getStudents!= undefined) {
                this.props.getStudents()
                    .then(response => {
                        this.setState({ data: response.data});
                        console.log(response.data);
                    })
                    .catch((error) => {console.log(error);});
              }
        this.setState({listIsShow:true})
    }        
}
   
