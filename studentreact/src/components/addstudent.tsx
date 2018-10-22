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

export class AddStudent extends React.Component<{}, IFormState> {

  private service: any;

  constructor(props:any) {
    super(props);
  this.state = {
      listIsShow: true,
      value: new Student(),
      isOpen: false,
      
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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
        <div style={{margin: '1em'}}>
          <Button onClick={this.open}>Добавить студента</Button>
        </div>
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
         Фамилия: <input name="LastName"  type="text" value={LastName} onChange={this.handleInputChange} />
        </div> </label>  
        <br />
        <label> <div className = 'FirstMidName'>
         Имя: <input name="FirstMidName" type="text" value={FirstMidName} onChange={this.handleInputChange} />
        </div> </label>  
        <br />
        <label><div className = 'EnrollmentDate'>
         Дата регистрации: <input name="EnrollmentDate" type="date"  value= {dateToInputString(EnrollmentDate)} onChange={this.handleInputChange} />
         </div> </label>   
      </div>
      <div className = 'Submit'> <button type = "Submit" onClick={this.listShow} > Добавить студента </button> </div>
      </form>
          <DialogFooter>
            <Button buttonType={ButtonType.primary} onClick={this.close}> OK </Button>
          </DialogFooter>
        </Dialog>
      </Fabric>  

      </tr>
      </>
  );
} 
  public handleInputChange(event: any) {
    const target = event.target;
    const updatedValue = this.state.value;
    const propertyName: string = target.name;
    let value: string | number | Date | boolean = '';
    
    switch(target.type) {
      case('checkbox'): value = target.checked;
      break;
      case('date'): value = new Date(target.value);
      break;
      case('number'): value = target.value;
      break;
      default: value = target.value;
      break;
    }
    // console.log(this.state.value);
    updatedValue[propertyName] = value;
      this.setState({
        value: updatedValue
      });
    // console.log(updatedValue);
  }


  // статус списка студентов
  private listShow = () => {
    this.setState({
         listIsShow: true
    }); 
  } 
}