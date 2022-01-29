function filterEmployees(data, criteria){
    let employees = JSON.parse(data);

    if(criteria !== 'all'){
        let criteriaTokens = criteria.split('-');
        employees = employees.filter(e => e[criteriaTokens[0]] === criteriaTokens[1]);
    }
    
    function printResult(employeeData){
        return employeeData.map((ed, i) => `${i}. ${ed.first_name} ${ed.last_name} - ${ed.email}`).join('\n');
    }

    return printResult(employees);
}


console.log(filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
));