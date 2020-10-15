# How to use these yml files for Openshift

## Login to Openshift

Go to your project URL and login using username and password used for VPN.

You may also use [OC tools](https://github.com/openshift/origin/releases/tag/v3.11.0) to login. Select `Command Line Tools` or go here:

https://${HOSTNAME}.${DOMAINNAME}/console/command-line

where ${HOSTNAME} is the hostname and ${DOMAINNAME} is the domain name.

Follow login instructions, copy the `oc login` command then do `oc project $project` where project is your project name. 

## Import YML files
If creating a new image/container in Openshift, first set up the image stream. Either go to the `Application Console` then select `Add to Project > Import YAML/JSON` and select the `oc-imagestream-template.yml` or use OC tools:

`oc create imagestream mernstack-test`

Then create the build config entry in Openshift by importing the YML `oc-build-template` 

You may also import from a git repository directly, which will create the build/image/deploy/service configs for you:

`oc new-app https://github.com/melosaiyan/react_mernstack_local.git`

or import an image from dockerhub:

`oc new-app mongo:latest`

# Build and deploy

Check status of your project

`oc status`

Note the name of the app you imported, such as `bc/reactmernstacklocal`.

Start your build

`oc start-build reactmernstacklocal --follow`


