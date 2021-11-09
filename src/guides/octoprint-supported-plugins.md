# Supported OctoPrint Plugins
There are a few OctoPrint plugins which are supported natively within OctoFarm.

## Requesting Plugin Support
OctoFarm is trying it's hardest not to actually support individual plugins. This method is time-consuming for OctoFarms development and also keeping the plugins supported as their development is largely out of our control. We would much rather replicate a plugin where possible within OctoFarm's system itself. That been said it's not always possibly to do that and sometimes a plugin is a much better place to grab the information from. You are advised to drop a discussion in on the main repository if you'd like to request support, but this is not a promise. 

## [PrintTimeGenius](https://github.com/eyal0/OctoPrint-PrintTimeGenius)
Works as is, nothing is needed to make this work. OctoFarm will pick up the information when it does it's re-scan after uploading a file or on scanning the file list on printer add.

## [SlicerThumbnails](https://github.com/jneilliii/OctoPrint-PrusaSlicerThumbnails)
Works as is, nothing is needed to make this work. OctoFarm will pick up the information when it scans your files.

## [Cost Estimation](https://github.com/OllisGit/OctoPrint-CostEstimation)
OctoFarm will use the cost plugins settings it detects to base it's own calculations on for cost within History and other places. OctoFarm replicates the calculations made by the plugin so nothing else is required for setup. You can edit OctoFarm's values within your printers settings.

## OctoPrint's Power Control Plugins
These can all be setup in the Printer Settings plugin. You need to input your printer url and the api endpoint that the plugin has. Currently there are no pre-made settings to choose from but I have found all of the information on the corrosponding plugins github page.

Below are example settings for the OctoFarm power button. This will enable the button on the UI allowing power actions to be sent through OctoFarm to your printers power source.

OctoFarm's power button is not limited to these plugins, it just makes a POST request for each one if you supply a command to, and a GET request when no command object is supplied. It should suffice to support most setups / other power plugin's. 

### [PSU Control](https://github.com/kantlivelong/OctoPrint-PSUControl)
If the plugin is available on OctoFarms initial scan you will have your setting's from OctoPrint pre-filled. If you need to set this up manually then you can use the image below.
![PSU Control settings example](../images/smartplugs/power-psucontrol.png)

### [TP-Link Smartplug](https://github.com/jneilliii/OctoPrint-TPLinkSmartplug)
These settings are not pulled on an initial scan due to requiring the Smartplugs IP address. You will need to fill them in as below replacing the required fields inside the "< >" brackets.
![TPLink settings example](../images/smartplugs/power-tplink.png)

### [Tasmota](https://github.com/jneilliii/OctoPrint-Tasmota)
These settings are not grabbed on an initial scan due to requiring the Tasmota IP address and index stored inside OctoPrint. You will need to fill them in as below replacing the required fields inside the "< >" brackets.
![Tasmota settings example](../images/smartplugs/power-tasmota.png)

## Filament Manager Plugin
Setup:
This setup guide is based on adding the PostgreSQL to the OctoFarm machine in my case a seperate PC running Ubuntu but this could be a RPI

** if you have filament records loaded into filament manager already on one of your OctoPrint instances please export them to save you loosing them ** 

On the OctoFarm machine open the terminal and enter the following

Install the postgresql package:
$ sudo apt install postgresql

Switch to the postgres user:
$ sudo -u postgres -i

Create user octoprint:
[postgres]$ createuser --interactive -P

Enter name of role to add: octoprint
Enter password for new role:
Enter it again:
Shall the new role be a superuser? (y/n) n
Shall the new role be allowed to create databases? (y/n) n
Shall the new role be allowed to create more new roles? (y/n) n

Create database octoprint_filamentmanager:
[postgres]$ createdb -O octoprint octoprint_filamentmanager

Configure PostgreSQL for local network
Per default PostgreSQL only accepts connections from localhost. To make the database server available in your network you have to modify two config files.

In the /etc/postgresql/12/main/postgresql.conf change the line with listen_addresses to
listen_addresses = '*'

Then append the following line to /etc/postgresql/12/main/pg_hba.conf

host octoprint_filamentmanager octoprint 192.168.0.0/24 md5

Adapt the IP address to your network, e.g. if your server has the IP 192.168.0.25 use 192.168.0.0/24 instead. This allows all clients in your network to access the database. For more information see https://en.wikipedia.org/wiki/Subnetwork

The final step is to restart the PostgreSQL service:
$ sudo systemctl restart postgresql.service

Now open the terminal on your OctoPrint Pi in my case i SSH into them 

always good to do updating your RPI:
$ sudo apt-get update
**** curently cause of debian changes you need to run apt-get update --allow-releaseinfo-change ****
$ sudo apt-get upgrade

Now install :
$ ~/oprint/bin/pip3 install psycopg2
$ cd /oprint/bin/
$ sudo apt install libpq5
$ sudo apt install python3-psycopg2
$ sudo reboot
the RPI will now reboot once this is complete open OctoPrint

**** with some RPI i had to do the below to get it to work (its super flakey) ****
open settings
then plugin manager
uninstall filament manager and clean up data
click the reboot now
wait for the reload now
go to settings
plugin manager
reinstall filament manager
click the reboot now
wait for the reload now
go to settings
filament manager

**** all going well you should just have to run these setps on the RPI and your good to go ****
enter the database info
URL: postgresql://[your database IP]
database name: octoprint_filamentmanager
User: octoprint
password: one you set

hit test connection it should turn green
hit save
reboot octoprint

enjoy!

**** when deleting items from your filament database you must remove a spool before removing the vendor this is due to a key constraint within the join of the two tables ****
