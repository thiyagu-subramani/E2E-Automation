## Prerequisites

Before we run E2E testing we need to ensure following mandatory software and configuration to be done.

* Should installed JRE 1.8
* Node 6.9.2 and above version.
All configured browsers should be installed in local machine.
For Windows 10 User should installed the Microsoft Edge driver based on your OS build version. Refer Microsoft Edge Configuration Section.
Local machine screen scaling should be 100%. Don’t set any other size otherwise test comparison we be gets failed.

## Running Application 

Run the below command in command prompt.

Step 1 :  npm install

Step 2 :  gulp build


Step 3: To Running Server, Open selenium server  folder then Run Command prompt in that folder then run the below command.

run `java -jar selenium-server-standalone-3.8.1.jar' 


Step 4:  Run below command for e2e

gulp e2e-ci-test
