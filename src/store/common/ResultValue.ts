import {ResultStatus} from "@/store/common/ResultStatus";

export interface ResultValue<T> extends ResultStatus{
    value: T;
}

