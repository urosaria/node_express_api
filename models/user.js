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
            desc ='The primary responsibility is to sell an organisation’s services and products, perpetually finding unique ways to engage and increase audience size and clients.';
        }else if (this.dept === 'IT') {
            desc ='The primary responsibility is to provide the infrastructure for automation. It implements the governance for the use of network and operating systems, and it assists the operational units by providing them the functionality they need.';
        }else if (this.dept === 'HR') {
            desc ='The primary responsibility is to manage the employee life cycle (i.e., recruiting, hiring, onboarding, training, and firing employees) and administering employee benefits.';
        }else if (this.dept === 'Marketing') {
            desc ='The primary responsibility is to provide the necessary research to identify your target customers and other audiences.';
        }
        return personal + ' ' + desc;
    }
}

module.exports = User;
