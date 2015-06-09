var microservices_directory = "services_dir"
var serviceArepo = "git@github.com:grahamjenson/microservice_A.git"
var serviceBrepo = "git@github.com:grahamjenson/microservice_B.git"

var serviceAversion = process.env.SERVICE_A_VERSION
var serviceBversion = process.env.SERVICE_B_VERSION

var configuration = {
  "name": "microservices",
  "pre_commands": [
    "touch log",
    "rm -rf " + microservices_directory,
    "mkdir " + microservices_directory,
    "cd " + microservices_directory + ";git clone " + serviceArepo + " -b " + serviceAversion + " ",
    "cd " + microservices_directory + ";git clone " + serviceBrepo + " -b " + serviceBversion + " "
  ],
  "windows": {
    "serviceA": {
      "commands": [
        "node service.js >> ../../log"
      ],
      "dir" : microservices_directory + "/microservice_A"
    },
    "serviceB": {
      "commands": [
        "node service.js >> ../../log"
      ],
      "dir" : microservices_directory + "/microservice_B"
    }
  }
}


module.exports = configuration