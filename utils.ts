type StrapiQuery = {
    key: string,
    value: string,
    index: string|string[]|null,
}

export default class StrapiQueryGenerator {
    private readonly base: string;
    private params: StrapiQuery[];

    constructor(base: string, params: StrapiQuery[] = []) {
        this.base = base;
        this.params = params;
    }

    private addParam(param: string, value: string, index: string|string[]|null) {
        return new StrapiQueryGenerator(this.base, [...this.params, {key: param, index: index, value: value}]);
    }

    private getIndex(key: string) {
        return this.params.filter((param) => param.key === key).length.toString();
    }

    public sortBy(sort: string, opt: "asc" | "desc" = "asc") {
        let index = this.getIndex("sort");
        return this.addParam("sort", sort+"%3A"+opt, index);
    }

    public paginate(currentPage: number, itemsPerPage: number) {
        return this.addParam("pagination", currentPage.toString(), "page").addParam("pagination", itemsPerPage.toString(), "pageSize");
    }

    public filter_fields(fields: string[]) {
        let n: StrapiQueryGenerator = this;
        for (let i = 0; i < fields.length; i++) {
            n = n.addParam("fields", fields[i], n.getIndex("fields"));
        }
        return n;
    }

    public populateAll() {
        return this.addParam("populate", "*", null);
    }

    public populate(field: string, indexes: string[]) {
        return this.addParam("populate", field, indexes);
    }

    public toString() {
        let url = this.base;
        for (let i = 0; i < this.params.length; i++) {
            let param = this.params[i];
            url += (i === 0 ? "?" : "&") + param.key + (param.index ? Array.isArray(param.index) ? param.index.map(v => "[" + v + "]").join("")+"=" : "[" + param.index + "]=" : "=") + param.value;
        }
        return url;
    }
}

export function formatDate(date: Date): string {
    // TODO split into files
    // YYYY-MM-DD HH:MM
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${year}-${month}-${day} ${hour}:${minute}`
  }