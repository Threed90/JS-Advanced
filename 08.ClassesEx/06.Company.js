class Company {
    departments;

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {

        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error("Invalid input!");
        }
        if (!this.departments[department]) {
            this.departments[department] = {
                employees: [],
                total: 0,
                avg: 0
            };
        }

        this.departments[department].employees.push({ name, salary, position });
        this.departments[department].total += salary;
        this.departments[department].avg = this.departments[department].total / this.departments[department].employees.length;

        return `New employee is hired. Name: ${name}. Position: ${position}`;

    }

    bestDepartment() {
        let resultObj = {};
        let department = '';
        let maxSalary = Number.NEGATIVE_INFINITY;
        for (const key in this.departments) {
            if (this.departments[key].avg > maxSalary) {
                maxSalary = this.departments[key].avg;
                resultObj = this.departments[key];
                department = key;
            }
        }

        let result = `Best Department is: ${department}\n`;
        result += `Average salary: ${resultObj.avg.toFixed(2)}\n`;
        result += resultObj.employees.sort((a, b) => {
            if ((a.salary - b.salary) === 0) {
                return a.name.localeCompare(b.name);
            } else {
                return b.salary - a.salary;
            }
        }).map(e => `${e.name} ${e.salary} ${e.position}`).join('\n');
        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());