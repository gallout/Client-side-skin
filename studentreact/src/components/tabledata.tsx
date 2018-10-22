import * as React from 'react'
import { Student } from '../models/data/student';

import { ChangeStudent } from './changestudent';



interface IGetTableProps {
    data: Student[];
    listIsShow : boolean
    onDelete(id:number):void
    onUpdate(id:number):void
 
}

export class TableData extends React.Component <IGetTableProps,{ data: Student[],listIsShow:boolean, displayForm?: boolean}> {

    constructor(props:IGetTableProps) {
        super(props);
        this.state = {
            data: [],
            listIsShow: false,
            displayForm: false
        };    
    }
 
    render(){
        console.log('render');
        const data = this.props.data;
                if (!data) {
                    return null;
                }
                return data.map(student =>
                   (<tr key={`student-tr-${student.ID}-${student.LastName}`}> 
                  
                        <td >
                            <img src="http://www.myiconfinder.com/uploads/iconsets/256-256-6f12560c16af6eee4b4abf5f8c4331bc-note.png" 
                                        onClick={()=> this.onUpdatePageInvoke(student.ID) } 
                                        width="16px" height="16px" />
                        </td>
                        <td>
                            {student.ID}   
                        </td>
                        <td>
                            {student.LastName}
                        </td>
                        <td>
                            {student.FirstMidName}
                        </td>
                        <td>
                            {student.EnrollmentDate}
                        </td>
                        <td> 
                        <div>
                            <img src="https://image.flaticon.com/icons/svg/61/61391.svg" 
                                    onClick={()=> this.onDeleteUpdatePage(student.ID)}   
                                    width="16px" height="16px" /> 
                        </div>
                        <div>
                            {this.onUpdatePage()}
                        </div>
                        </td> 
                    </tr> 
                )
         ); 
    } 
    private onDeleteUpdatePage = async (id:number)=>{
        console.log('delete '+id);
        await this.props.onDelete(id)
    }

    private onUpdatePageInvoke = (id:number) => {
        this.setState({displayForm: true});
    }

    private onUpdatePage () {
        console.log('update');
        if (this.state.displayForm){
            return <ChangeStudent />;
        }
        return <div/>
        console.log('updated');
    }
}
