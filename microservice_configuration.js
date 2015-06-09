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
    "mkdir " + microservices_directory
  ],
  "windows": {
    "serviceA": {
      "commands": [
        "git clone " + serviceArepo + " -b " + serviceAversion,
        "cd microservice_A",
        "node service.js >> ../../log"
      ],
      "dir" : microservices_directory
    },
    "serviceB": {
      "commands": [
        "git clone " + serviceBrepo + " -b " + serviceBversion,
        "cd microservice_B",
        "node service.js >> ../../log"
      ],
      "dir" : microservices_directory
    }
  }
}


module.exports = configuration