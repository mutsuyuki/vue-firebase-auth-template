import {ResultStatus} from "./ResultStatus";

export interface ResultValue<T> extends ResultStatus{
    value: T;
}

