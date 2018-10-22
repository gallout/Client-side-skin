export class Student {
    public ID: number;
    public LastName?: string;
    public FirstMidName?: string;
    public EnrollmentDate?: Date;

    protected secret?: string;

    constructor(init?: Partial<Student>) {
        this.LastName = '';
        this.FirstMidName = '';
        // this.enrollmentDate = new Date();
        Object.assign(this, init);
    }
}