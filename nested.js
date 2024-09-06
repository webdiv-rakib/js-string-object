const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibosh'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
college.unique.result.merit = 'top top top'
console.log(college.name);
console.log(college.unique.color);
console.log(college.unique.result.merit);
college.events[1] = '16 December';
console.log(college.events[1]);

delete college.class;
console.log(college);