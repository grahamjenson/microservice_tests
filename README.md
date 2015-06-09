To run the tests first install modules:

```
npm install
```

then install pmux

```
npm install -g pmux
```

then set the versions you want to test with

```
export SERVICE_A_VERSION=v1
export SERVICE_B_VERSION=v1 
```

then start the pmux configuration:

```
pmux microservice_configuration.js
```

then execute the tests

```
mocha
```