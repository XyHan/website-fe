export interface ExperienceInterface {
    title: string;
    company: string;
    startDate: Date;
    endDate: Date | null;
    description: string;
    city: string;
}

export abstract class Experience implements ExperienceInterface {
    protected _title: string;
    protected _company: string;
    protected _startDate: Date;
    protected _endDate: Date | null;
    protected _description: string;
    protected _city: string;

    constructor(title: string, company: string, startDate: Date, endDate: Date | null, description: string, city: string) {
        this._title = title;
        this._company = company;
        this._startDate = startDate;
        this._endDate = endDate;
        this._description = description;
        this._city = city;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get company(): string {
        return this._company;
    }

    set company(value: string) {
        this._company = value;
    }

    get startDate(): Date {
        return this._startDate;
    }

    set startDate(value: Date) {
        this._startDate = value;
    }

    get endDate(): Date | null {
        return this._endDate;
    }

    set endDate(value: Date | null) {
        this._endDate = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get city(): string {
        return this._city;
    }
    
    set city(value: string) {
        this._city = value;
    }
}
