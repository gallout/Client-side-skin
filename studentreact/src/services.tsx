import axios, { AxiosPromise } from 'axios';

export class Service{

     // получение списка студентов
     public getStudents (): AxiosPromise<any> {
        return axios
                .get("http://localhost:60171/api/Student/Get")            
            }  

        // добавление студента
    public submitStudent (value:any): AxiosPromise<any> {   
        return axios
                .post('http://localhost:60171/api/Student/PostStudent',  value )
            }
    
        // удаление студента по ID
    public deleteStudentbyID (id: number): AxiosPromise<any> {        
        return axios
                .delete(`http://localhost:60171/api/Student/DeleteStudent/${id}`) 
            }         
    public changeStudent (value:any, id: number) : AxiosPromise<any> {
        return axios
                .put (`http://localhost:60171/api/Student/PutStudent/${id}`, value)
    }
}