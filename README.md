# Website Template

This project is a template for creating website using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Setup

First, you need to open an ssh connection to the openflexo machine.

```
$ ssh [user]@openflexo.org
```

From the openflexo machine, you need to make another connection to the jenkins build vm (of-runner-1-vm.enstb.org).

```
$ ssh [user]@of-runner-1-vm.enstb.org
```

Once the connection is established, you need to switch the user to "jenkins".

```
$ sudo su jenkins
```

Next you need to go to the websites directory.

```
$ cd /home/jenkins/jenkins-agent/docusaurus-sites
```

Now you can clone this repository, to do that run this command.

```
$ git clone git@github.com:openflexo-team/website-template.git [COMPONENT-NAME]
```

Now go to your website directory.

```
$ cd [COMPONENT-NAME]
```

Install the required packages:

```
$ npm install
```

Rename the config file from **example.docusaurus.config.js** to **docusaurus.config.js**

Then according to the project structure, create a documentation version for each branch (keeping in mind that the branch name is the component version), for example if you want to create a documentation version 1.1.0 run this command:

```
$ npm run docusaurus docs:version 1.1.0
```

### Configuration

Open ```src/data/javadoc.json```, then add the javadoc component names.

As you already created all the necessary version, you need to update the configuration file. To do that, open docusaurus.config.js in your favorite text editor then update the following properties:

Line 7
```
const baseUrl         = '/my-site/' // Use the component name as a base url.
```

Line 11
```
title: 'My Site', // Use the component name as a title.
tagline: 'Openflexo is cool', // Write a brief component description.
```

Uncomment line 32, 33 and 34:

```
docs: {
  includeCurrentVersion:false,
},
```

Then you can update the header logo and title here:
Line 45
```
navbar: {
    title: 'My Site',
    logo: {
        alt: 'My site Logo',
        src: 'img/logo.png', // You can upload a new logo file to static/img folder
    },
```

Once you are done with the configuration file you can save it and the new component website should be ready!
