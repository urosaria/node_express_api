# node_express_api

## Prerequisites 
This code worked & tested on node version v15.6.0. <br />
Tested by Mac OS & Ubuntu-16.04.7.

## Getting Started
If you don't have node, please install it. 

In Ubuntu: <br />
<pre>
<code>
$ sudo apt-get update
$ sudo apt-get install -y build-essential 
$ sudo apt-get install -y nodejs 
</code>
</pre>

Then check version: <br />
<pre>
<code>
$ node -v <br />
</code>
</pre>


In order to clone the source from github, please install git.
In Ubuntu: <br />
<pre>
<code>
$ sudo apt install git
</code>
</pre>

Then clone the code: <br />
<pre>
<code>
$ git clone https://github.com/urosaria/node_express_api.git
</code>
</pre>

Then follow: <br />
<pre>
<code>
$ cd node_express_api <br />
$ npm install <br />
$ node bin/www <br />
</code>
</pre>

You can check API in your browser: http://{{host}}:3000/


## APIs (Call random list of users)
This API provides a random list of members from backend server. <br />

http://{{host}}:3000/


### GET Users
Default list:

<pre>
<code>
http://{{host}}/
</code>
</pre>


### GET UsersByDept
Users by dept:

<pre>
<code>
http://{{host}}/dept/:dept
</code>
</pre>

Example: http://127.0.0.1:3000/dept/IT <br />
':dept' could be IT, Marketing, HR, Sales. <br />


### Result
<pre>
<code>
{
    "users": [
        {
            "name": "Zachary Ouellet",
            "dept": "Sales",
            "position": "Manager",
            "email": "zachary.ouellet@example.com",
            "picture": "https://randomuser.me/api/portraits/men/63.jpg",
            "location": {
                "street": {
                    "number": 5836,
                    "name": "Oak St"
                },
                "city": "Armstrong",
                "state": "Newfoundland and Labrador",
                "country": "Canada",
                "postcode": "B9C 3S9",
                "coordinates": {
                    "latitude": "-60.9028",
                    "longitude": "-88.6122"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "desc": "Zachary Ouelletis a Manager of Sales department. The primary responsibility is to sell an organisation’s services and products."
        },
      ...
    ]
}
</code>
</pre>
