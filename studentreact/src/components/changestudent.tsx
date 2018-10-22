import * as React from 'react';

import { Student } from '../models/data/student';

import { dateToInputString } from '../utils/datepicker';

import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button'
import { Dialog, DialogType, DialogFooter} from 'office-ui-fabric-react/lib/Dialog'

import { Service } from '../services';
import '../components/addstudent.css';

interface IFormState {
  value: Student;
  listIsShow: boolean;
  isOpen: boolean;
}

export class ChangeStudent extends React.Component<{}, IFormState> {

  private service: any;

  constructor(props:any) {
    super(props);
  this.state = {
      listIsShow: true,
      value: new Student(),
      isOpen: true,
    };


    this.service = new Service()
  }

 
  open = () => this.setState({isOpen: true})
  close = () => this.setState({isOpen: false})
 
  public render() {
    const { LastName, FirstMidName, EnrollmentDate} = this.state.value;
    return (
        
      <>
      
      <tr>
       <Fabric className="App">
      
        <Dialog
          isOpen={this.state.isOpen}
          type={DialogType.close}
          onDismiss={this.close.bind(this)}
          isBlocking={false}
          closeButtonAriaLabel='Close'
        >
      <form  onSubmit={()=>this.service.submitStudent(this.state.value)}>
           <div className = "anketa"><h1>Анкета</h1></div>
     
      <div>
        <label>  <div className = 'LastName'>
         Фамилия: <input name="LastName"  type="text" value={LastName} />
        </div> </label>  
        <br />
        <label> <div className = 'FirstMidName'>
         Имя: <input name="FirstMidName" type="text" value={FirstMidName}  />
        </div> </label>  
        <br />
        <label><div className = 'EnrollmentDate'>
         Дата регистрации: <input name="EnrollmentDate" type="date"  value= {dateToInputString(EnrollmentDate)}  />
         </div> </label>   
      </div>
      <div className = 'Submit'> <button type = "Submit"  > Изменить студента </button> </div>
      </form>
          <DialogFooter>
            <Button buttonType={ButtonType.primary} onClick={this.close} >OK</Button>
          </DialogFooter>
        </Dialog>
      </Fabric>  
      </tr>
      </>
     );
    } 
}