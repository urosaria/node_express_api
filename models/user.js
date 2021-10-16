class User {
    constructor(name, dept, email, picture, location, position) {
        this.name = name;
        this.dept = dept;
        this.position = position;
        this.email = email;
        this.picture = picture;
        this.location = location;
        this.desc = this.introduce();
    }

    //Sample data
    introduce() {
        let personal = this.name + 'is a ' + this.position + ' of ' + this.dept + ' department.';
        let desc="";

        if (this.dept === 'Sales') {
            desc ='The primary responsibility is to sell an organisation’s services and products.';
        }else if (this.dept === 'IT') {
            desc ='The primary responsibility is to provide the infrastructure for automation. ';
        }else if (this.dept === 'HR') {
            desc ='The primary responsibility is to manage the employee life cycle and administering employee benefits.';
        }else if (this.dept === 'Marketing') {
            desc ='The primary responsibility is to provide the necessary research.';
        }
        return personal + ' ' + desc;
    }
}

module.exports = User;
