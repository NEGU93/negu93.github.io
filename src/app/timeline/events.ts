export interface IEvent {
    eventName: string;  // Education, work, competition, etc.
    startDate?: Date;
    department?: string;
    endDate: any;   // string or Date
    logoUrl: string; //can be deduced from enterprise
    description: string;
    enterprise: string;
    role: string;
    location: string;
    certificate?: string;
    tags?: string;
}