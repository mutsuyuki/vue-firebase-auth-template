export default class DeepCloner {

    public static copyJson<T>(source: T): T {
        return JSON.parse(JSON.stringify(source));
    }

}
