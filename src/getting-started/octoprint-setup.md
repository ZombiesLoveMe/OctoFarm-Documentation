# OctoPrint Setup
There are a few pre-requisits for OctoPrint to allow OctoFarm to establish a reliable connection to OctoPrint. Please setup the below on each instance you want to add to your farm. 

::: warning
Currently OctoFarm (to save time on larger farms) attempts to guess which user to use. If you have multiple admin users in OctoPrint, OctoFarm, could incorrectly guess which one you use. For now it is best to just have 1 user on your OctoPrint instances until we look into allowing OctoFarm users to select their preferred OctoPrint user.
:::

## Setup the correct API Key
There are 3 different types of API keys in OctoPrint. 
- User API Key (useful). The user API key works only if the user has the groups **Admins** and **Operator**. This is the first user you make, so make sure to add the roles yourself for it to work for another user (if you must).
- Application Key (useful). The same as a User key but targeted for specific applications: like OctoFarm. 
Make sure your user has the groups **ADMINS** AND **OPERATOR** for your user - this is default for only the 1st user!
- Global API Key. We've had trouble using the Global API Key and it's **will not fully work + should not be used => dont use it**.

Quoting OctoPrint's Application Key page:
> The global API key should best not be used anymore. It's one single key that gives full admin access to your whole OctoPrint instance. **Instead of using it you should create individual Application Keys for your third party clients.** That way they get permissions matching the user account used for key creation and you can also revoke access to one app without having to change the keys for all other apps. It's also recommended to create a user account without admin access and use that for third party clients where possible.

TL;DR create an Application Key for the first OctoPrint account you made ❤️ 
This the way to get there:
- Settings wrench icon 
![image](https://user-images.githubusercontent.com/6005355/108238363-2effcf00-7149-11eb-9bed-213cd2f29a52.png)
- Application Key (side navigation within OctoPrint Settings)
![image](https://user-images.githubusercontent.com/6005355/108238623-69696c00-7149-11eb-9b44-21b1362c1d23.png)
- Copy the generated key in the `Registered application keys` field which will appear after you click `Generate`
![image](https://user-images.githubusercontent.com/6005355/108240349-109ad300-714b-11eb-819b-7737fefeeff2.png)

::: tip
- (Optional) you can do this also in the User Settings, where the same Application Key are managed but only for the user itself, as well as also a user-specific API Key can be generated. Pretty confusing, yeah. Just use Application Key.
:::


## Make sure your user has Administrator Privileges
::: tip
- (Optional) make sure the user has Operator and Admins groups (which is default for the first user). 
:::

> OctoPrint Settings (wrench icon) > Access Control > Edit the user you want (crayon icon)

![image](https://user-images.githubusercontent.com/6005355/108240729-67a0a800-714b-11eb-9fa0-f551da95e749.png)

## Turning on CORS
![OctoPrint CORS Settings](../images/octoprint/octoprint-cors.png)
Enable CORS in the OctoPrint settings and restart your OctoPrint instance.

### What happens If CORS is disabled?
> The OctoFarm website (a.k.a. the client) cannot call OctoPrint. The OctoFarm server can still do it, but that's not how its currently all setup.

::: danger
The CORS setting being checked off results in the website of OctoFarm not being able to OctoPrint directly. Thus stuff wil fail.
TL;DR enable CORS please ❤️ 
:::
