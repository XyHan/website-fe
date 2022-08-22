export interface ExperienceInterface {
    title: string;
    company: string;
    startDate: Date;
    endDate: Date | null;
    description: string;
}

export abstract class Experience implements ExperienceInterface {
    protected _title: string;
    protected _company: string;
    protected _startDate: Date;
    protected _endDate: Date | null;
    protected _description: string;

    constructor(title: string, company: string, startDate: Date, endDate: Date | null, description: string) {
        this._title = title;
        this._company = company;
        this._startDate = startDate;
        this._endDate = endDate;
        this._description = description;
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
}
