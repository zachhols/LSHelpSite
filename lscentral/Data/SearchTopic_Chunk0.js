define({"0":{y:0,u:"../Content/Installation-Guide-LS-Central/Installation-Guide-LS-Central-Home.htm",l:-1,t:"Installation Guide -  LS Central Help",i:9.04932784189755E-05,a:"Installation of LS Central This release can be used for localizations and demonstrations. The following products are available from the  LS Retail Portal  for download: DD Web Monitor LS Commerce Kitchen Display System LS Data Director Note: In these instructions references to software versions are ..."},"1":{y:0,u:"../Content/Installation-Guide-LS-Central/System-Requirements.htm",l:-1,t:"System Requirements",i:4.27263014956771E-05,a:"System Requirements LS Central has the same system requirements as standard Business Central:  https://docs.microsoft.com/en-us/dynamics365/business-central/dev-itpro/deployment/system-requirements-business-central-v18    "},"2":{y:0,u:"../Content/LS-Retail/LS-Data-Director/LS-Data-Director-System-Requirements.htm",l:-1,t:"LS Data Director System Requirements",i:4.27263014956771E-05,a:"The Data Director requires the following hardware and software resources in order to run properly: Hardware At least 1 GB of available RAM. The base processes use around 100-200 MB of RAM for normal operation. The amount of RAM required depends on the size of database queries that DD needs to ..."},"3":{y:0,u:"../Content/Installation-Guide-LS-Central/LS-KDS-System-Requirements.htm",l:-1,t:"LS KDS System Requirements",i:4.27263014956771E-05,a:"LS KDS System Requirements The LS KDS system has the following components:    "},"4":{y:0,u:"../Content/Installation-Guide-LS-Central/Installation.htm",l:-1,t:"LS Central Installation",i:4.27263014956771E-05,a:"LS Central is distributed in a single executable file, W1_LS_Central_xx.x1.exe. Before you start the actual installation, you should run this application. This will uncompress the installation files and store them in an installation directory on your hard drive.  The default path for these files is ..."},"5":{y:0,u:"../Content/Installation-Guide-LS-Central/Prerequisites.htm",l:-1,t:"Prerequisites",i:4.27263014956771E-05,a:"Before installing the LS Central extension make sure: You have administrator privileges and necessary permissions and licenses to install Business Central, to add the LS Central extension, and to create users. Microsoft Dynamics 365 Business Central is installed.  Microsoft PowerShell is installed. ..."},"6":{y:0,u:"../Content/Installation-Guide-LS-Central/Adding-The-LS-Central-Extension.htm",l:-1,t:"Adding the LS Central Extensions to an Existing Database",i:4.27263014956771E-05,a:"Follow these steps to add the LS Central System App and LS Central extensions to Business Central: Install the server toolbox  Install the Data Director To publish the extensions to the database, run this in  PowerShell: Publish-NAVApp -ServerInstance \"BC180\" -Path \u0027C:\\LS ..."},"7":{y:0,u:"../Content/Installation-Guide-LS-Central/Restoring-LS-Central-Demo.htm",l:-1,t:"Restoring the LS Central Demo Database Backup",i:4.27263014956771E-05,a:"Start the Microsoft SQL Server Management Studio, and connect to the database server. Restore the ls-central-release.bak backup file, found in the Application folder in the installation directory. Install the toolbox by running the  LS Central Service Components.exe, found in the Setup folder in the ..."},"8":{y:0,u:"../Content/Installation-Guide-LS-Central/Uninstalling-LS-Central.htm",l:-1,t:"Uninstalling the LS Central Extension",i:4.27263014956771E-05,a:"Follow these steps to uninstall the LS Central and LS Central System extensions from Business Central: Open the Setup \u0026 Extensions page. Select Uninstall for the LS Central extension. Select Uninstall for the LS Central System App extension. To unpublish the extension from the database, run this ..."},"9":{y:0,u:"../Content/Installation-Guide-LS-Central/LS-Central-Help-installation.htm",l:-1,t:"LS Central Help Installation",i:4.27263014956771E-05,a:"Remote setup LS Retail hosts the online help on a public server at  https://help.lscentral.lsretail.com .  To add the LS Central help website to the Help \u0026 Support page in Business Central, set the BaseHelpUrl in navsettings.json to https://help.lscentral.lsretail.com as described in  ..."},"10":{y:0,u:"../Content/LS-Retail/LS-Data-Director/LS-Data-Director-Installation.htm",l:-1,t:"LS Data Director Installation",i:4.27263014956771E-05,a:"Prerequisites There are a few things, as listed below, that you need to keep in mind before setting up the Data Director on Business Central with LS Central. You should have a solid understanding of the TCP/IP networking protocol. You should know how IP addresses can be assigned and be able to use ..."},"11":{y:0,u:"../Content/LS-Retail/LS-Data-Director/Supported-Systems.htm",l:-1,t:"Supported Systems",i:4.27263014956771E-05,a:"Operating systems The following operating systems are supported and tested: MS Windows Server 2016, 2019 MS Windows 10 Both IPv4 and IPv6 are supported for all operating systems The following operation systems are supported but not tested: MS Windows 8 MS Windows Server 2008, 2012, 2014 Database ..."},"12":{y:0,u:"../Content/LS-Retail/LS-eCommerce/LS-eCommerce-APIs/Installation/IIS-Setup.htm",l:-1,t:"Install and Configure IIS",i:7.30495562526475E-05,a:"Follow these steps to turn on IIS 8 on Windows 8. The procedure is similar on other versions of Windows.  Tip: A quick Google search will give you multiple results on how to install IIS on your machine.  http://www.iis.net/learn/install/installing-iis-7/installing-iis-on-windows-vista-and-windows-7 ..."},"13":{y:0,u:"../Content/LS-Retail/LS-Data-Director/Install-Options.htm",l:-1,t:"Install Options",i:7.90440031637224E-05,a:"LS Data Director Install can be executed with parameters to make use of a scripted installation. You can find details of what options are available here: http://unattended.sourceforge.net/InnoSetup_Switches_ExitCodes.html The available tasks are: srvfiles: DD Service [Default] clitools: Client tools ..."},"14":{y:0,u:"../Content/LS-Retail/LS-eCommerce/LS-eCommerce-APIs/Installation/Introduction.htm",l:-1,t:"LS Commerce Installation",i:0.000178369720479487,a:"The topics in this section provide full instructions on how to install a local instance of the LS Commerce Service and how to connect the LS Commerce Mobile Apps to the service, if apps will be used.  Note: The instructions assume that LS Central has been installed with LS Central Web Services up ..."},"15":{y:0,u:"../Content/LS-Retail/LS-eCommerce/LS-eCommerce-APIs/Installation/Before-Installation.htm",l:-1,t:"Before Installation",i:0.0001040960013711,a:"Before installing the LS Commerce Service make sure you have the following: LS Central has been set up and is running. The LS Commerce Service setup needs access to LS Central head office data that can either be running in a SaaS setup or on-premises. Windows user name and password used for the ..."},"16":{y:0,u:"../Content/LS-Retail/LS-eCommerce/LS-eCommerce-APIs/Installation/Install-LS-Omni-Server.htm",l:-1,t:"Install LS Commerce Service",i:7.30495562526475E-05,a:"The installation process requires the following information: SQL Server instance (for example, mySqlServer or mySqlServer\\MSSQLSERVER) used to create the LS Commerce database. Default collation used is: COLLATE Latin1_General_CI_AS. If another collation is to be used, create a new LS Commerce ..."},"17":{y:0,u:"../Content/LS-Retail/LS-eCommerce/LS-eCommerce-APIs/Installation/After-Installation.htm",l:-1,t:"After Installation",i:7.30495562526475E-05,a:"Single-tenant After a successful installation, the next step is to validate the data entered during the installation. Configuration for Single-tenant is stored in the Appsettings.config file, located where LS Commerce Service is installed. Multi-tenant After a successful installation, the next step ..."},"18":{y:0,u:"../Content/LS-Retail/LS-eCommerce/LS-eCommerce-APIs/Installation/LS-Omni-Service-Running-On-IIS.htm",l:-1,t:"LS Commerce Service Running on IIS",i:5.82495240549032E-05,a:"You can \"ping\" the LS Commerce Web Service to see if the WCF web service is working properly. First, ping them from a browser on a laptop (Chrome or Firefox recommended), and later from a browser on your mobile phone.  The ping checks the connection to LS Commerce Service and LS Central SQL Server ..."},"19":{y:0,u:"../Content/LS-Retail/LS-eCommerce/LS-eCommerce-APIs/Installation/SQL-Server-Database.htm",l:-1,t:"SQL Server Database",i:5.82495240549032E-05,a:"A new LS Commerce SQL Database is created during the LS Commerce Service Setup. The setup creates the SQL Server login LSCommerceUser with password LSCommerceUser, and grants this user data reader and data writer privileges in the LSCommerce database.  If you have a problem logging in with this ..."},"20":{y:0,u:"../Content/LS-Retail/LS-eCommerce/LS-eCommerce-APIs/Installation/Setup-Command-Lines.htm",l:-1,t:"Setup Command Lines",i:7.30495562526475E-05,a:"These command line parameters can be used with the setup to run it in Silent mode. Samples: LSCommerce.Service.Central.Setup.4.4.0.exe /VERYSILENT /SUPPRESSMSGBOXES -Cmd true -SqlSrv localhost -SqlUsr LSCommerceUser -SqlPwd LSCommerceUser -NavSrv localhost -NavDb BC170 -NavComp \"CRONUS - LS Central\" ..."},"21":{y:0,u:"../Content/Installation-Guide-LS-Central/Hardware-Station-Installation.htm",l:-1,t:"LS Hardware Station Installation",i:4.27263014956771E-05,a:"LS Hardware Station Installation Run the LS Hardware Station.exe, found in the Setup folder in the installation directory. See  How to: Set Up LS Hardware Station  and  Video Tutorial: Setup  in the  LS Central Help  for more information.    "},"22":{y:0,u:"../Content/LS-Hospitality/Kitchen-Display-System/KDS-Installation.htm",l:-1,t:"LS KDS Installation",i:0.000121306476033321,a:"The Kitchen Display Service works with LS Hospitality and LS First Hospitality systems. System requirements KDS licenses System setup LS Central KDS Web Service setup Troubleshooting This topic focuses on the installation and configuration for the LS  Hospitality system. Note: The KDS does not work ..."},"23":{y:0,u:"../Content/LS-Hospitality/Kitchen-Display-System/KDS-Utility.htm",l:-1,t:"LS KDS Utility",i:0.000116967528989343,a:"The LS KDS Utility is a stand-alone program to manage the configuration of the Kitchen Service for various data providers. It is installed with the Kitchen Service setup. LS Central version 13.04 and later use only a KDS Web Service to supply information to the Kitchen Service. The configuration ..."},"24":{y:0,u:"../Content/LS-Hospitality/Kitchen-Display-System/Display-Station-Utility.htm",l:-1,t:"LS Display Station Utility",i:0.000124011084144077,a:"The LS Display Station Utility is a stand-alone utility program to manage the configuration of the Kitchen Display Stations. It makes it simple to add or remove Display Stations and it creates a shortcut to start up all the defined Display Stations on the computer.  Note:  The utility only manages ..."},"25":{y:0,u:"../Content/Installation-Guide-LS-Central/Service-Toolbox-Installation.htm",l:-1,t:"Service Toolbox Installation",i:4.27263014956771E-05,a:"Service Toolbox Installation Run the  LS Central Service Components.exe, found in the Setup folder in the installation directory. The service toolbox adds a folder containing dlls to the Business Central Add-ins folder.     "},"26":{y:0,u:"../Content/Release-Notes-General.htm",l:-1,t:"Release Notes",i:4.27263014956771E-05,a:"Release Notes This section contains release notes for LS Central and additional  modules. See also LS Central - Release Notes LS Data Director - Release Notes LS Insight - Release Notes LS Commerce and Apps - Release Notes    "},"27":{y:0,u:"../Content/Release-Notes-LS-Central/Release-Notes-LS-Central.htm",l:-1,t:"Release Notes - LS Central Help",i:9.95727038359868E-05,a:"LS Central Release Notes Release notes are published with each new release of LS Central. In addition to the online version, the release notes are also included as PDFs in the  installation package .  Latest release LS Central 18.4 Release Notes See also Release Notes LS Central 18.4, printable ..."},"28":{y:0,u:"../Content/Release-Notes-LS-Central/LS-Central-18-4-Release-Notes.htm",l:-1,t:"LS Central 18.4 Release Notes",i:5.96538499787337E-05,a:"About This Release Released - October 14, 2021 This version is built on Microsoft Dynamics 365 Business Central 2021, release wave 1, cumulative update 5, build 18.5.29545.0.  LS Central 18.4 LS Central is now delivered as two apps. Some code has been moved from the LS Central app to a new app named ..."},"29":{y:0,u:"../Content/Release-Notes-LS-Central/LS-Central-18-3-Release-Notes.htm",l:-1,t:"LS Central 18.3 Release Notes",i:5.96538499787337E-05,a:"About This Release Released - September 16, 2021 This version is built on Microsoft Dynamics 365 Business Central 2021, release wave 1, cumulative update 4, build 18.4.28601.29139.  LS Central 18.3 LS Central is now delivered as two apps. Some code has been moved from the LS Central app to a new app ..."},"30":{y:0,u:"../Content/Release-Notes-LS-Central/LS-Central-18-2-Release-Notes.htm",l:-1,t:"LS Central 18.2 Release Notes",i:5.96538499787337E-05,a:"About This Release Released - August 26, 2021 This version is built on Microsoft Dynamics 365 Business Central 2021, release wave 1, cumulative update 3, build 18.3.27240.27480.  LS Central 18.2 LS Central is now delivered as two apps. Some code has been moved from the LS Central app to a new app ..."},"31":{y:0,u:"../Content/Release-Notes-LS-Central/LS-Central-18-1-Release-Notes.htm",l:-1,t:"LS Central 18.1 Release Notes",i:5.96538499787337E-05,a:"About This Release Released - July 8, 2021 This version is built on Microsoft Dynamics 365 Business Central 2021, release wave 1, cumulative update 2, build 18.2.26217.26490.  LS Central 18.1 LS Central is now delivered as two apps. Some code has been moved from the LS Central app to a new app named ..."},"32":{y:0,u:"../Content/Release-Notes-LS-Central/LS-Central-18-0-Release-Notes.htm",l:-1,t:"LS Central 18.0 Release Notes",i:5.96538499787337E-05,a:"About This Release Released - May 31, 2021 This version is built on Microsoft Dynamics 365 Business Central 2021 release wave 1, build 18.0.23013.23795.  LS Central 18.0 LS Central is now delivered as two apps. Some code has been moved from the LS Central app to a new app named  LS Central System ..."},"33":{y:0,u:"../Content/Release-Notes-LS-Central/LS-Nav-Release-Notes-2015-20xx.htm",l:-1,t:"Release Notes 2015-2021",i:4.27263014956771E-05,a:"Release Notes 2015-2021 Use the navigation menu on the left to quickly locate LS Nav and LS Central release notes from 2015 to 2021, collected in a single PDF for each year. Note: An identical link is available at the bottom of the LS Central Help  Home  page.     "},"34":{y:0,u:"../Content/Hotfixes-And-Breaking-Changes.htm",l:-1,t:"Hotfixes and Breaking Changes",i:5.7202051889934E-05,a:"The pages in this section contain lists of breaking changes and hotfixes in the current and previous releases. The lists are work in progress and will be updated as new issues are discovered.  See also Breaking Changes Hotfixes on LS Central version 18.4.x.x Hotfixes on LS Central version 18.3.x.x ..."},"35":{y:0,u:"../Content/Breaking-Changes.htm",l:-1,t:"Breaking Changes",i:5.08300124640508E-05,a:"This page contains lists of breaking changes in the current and previous releases. The lists are work in progress and will be updated as new issues are discovered. Click the heading(s) below to expand and collapse.   LS Central 17.0 Mobile Phone No. field in Customer extension table renamed to LSC ..."},"36":{y:0,u:"../Content/Hotfixes-18-4.htm",l:-1,t:"Hotfixes on LS Central version 18.4.x.x",i:5.08300124640508E-05,a:"18.4.2.0, Release date Oct 22, 2021 CEN-7404 Web replication run by Scheduler Because of technical challenges in SaaS, running web replication in a background session is not a viable solution. Therefore, running the web replications has been changed to be run by a Scheduler job instead of a ..."},"37":{y:0,u:"../Content/Hotfixes-18-3.htm",l:-1,t:"Hotfixes on LS Central version 18.3.x.x",i:5.08300124640508E-05,a:"18.3.5.0, Release date Oct 21, 2021 CEN-7404 Web replication run by Scheduler Because of technical challenges in SaaS, running web replication in a background session is not a viable solution. Therefore, running the web replications has been changed to be run by a Scheduler job instead of a ..."},"38":{y:0,u:"../Content/Hotfixes-18-2.htm",l:-1,t:"Hotfixes on LS Central version 18.2.x.x",i:5.08300124640508E-05,a:"18.2.13.0, Release date Oct 22, 2021 CEN-7483 Upgrade fails due to long table caption value in translation app Upgrades are failing on the ES cluster. A bug in the upgrade codeunit seems to affect the translations resulting in an error. 18.2.12.0, Release date Oct 21, 2021 CEN-7404 Web replication ..."},"39":{y:0,u:"../Content/Hotfixes-18-1.htm",l:-1,t:"Hotfixes on LS Central version 18.1.x.x",i:5.08300124640508E-05,a:"Hotfixes on LS Central version 18.1.x.x 18.1.13.0, Release date Oct 21, 2021 CEN-7404 Web replication run by Scheduler Because of technical challenges in SaaS, running web replication in a background session is not a viable solution. Therefore, running the web replications has been changed to be run ..."},"40":{y:0,u:"../Content/Hotfixes-18-0.htm",l:-1,t:"Hotfixes on LS Central version 18.0.x.x",i:5.08300124640508E-05,a:"18.0.8.0, Release date Sept 21, 2021 CEN-7130 Statement posted with wrong VAT Entry calculation HF18.0 Statement with items with different VAT percentage were posted into one VAT GL account. This applied if VAT calculation is used, and the General Posting Setup and the Item.General Posting Group is ..."},"41":{y:0,u:"../Content/LS-Retail/LS-Data-Director/LS-Data-Director-Release.htm",l:-1,t:"Release Notes",i:5.18057269126885E-05,a:"LS Data Director Release Notes Release notes are published online with each new release of LS Data Director. Latest release LS Data Director 3.2.116 Release Notes See also LS Data Director 3.2.114 Release Notes LS Data Director 3.2.112 Release Notes LS Data Director 3.2.110 Release Notes LS Data ..."},"42":{y:0,u:"../Content/LS-Insight/Release-Notes/Release-Notes-LS-Insight.htm",l:-1,t:"Release Notes",i:5.18057269126885E-05,a:"LS Insight Release Notes Release notes are published online with each new release of LS Insight.  Latest release LS Insight (2021.3) Release Notes See also LS Insight (2021.2) Release Notes LS Insight (2021.1) Release Notes LS Insight (2020.5) Release Notes LS Insight (2020.4) Release Notes LS ..."},"43":{y:0,u:"../Content/LS-Insight/Release-Notes/2021/2021-3-Release-Notes.htm",l:-1,t:"LS Insight 2021.2 Release Notes",i:8.10251074885415E-05,a:"LS Insight (2021.3) Release Notes About This Release Released -  August 30, 2021 This version of LS Insight supports versions 8.4 and later of LS Central On-premises and later versions of LS Central In-cloud (SaaS). Setup of LS Insight for LS Central In-cloud (SaaS) needs some additional setup from ..."},"44":{y:0,u:"../Content/LS-Insight/Release-Notes/2021/2021-3-Update-From-2021-2.htm",l:-1,t:"Update LS Insight from v. 2021.2 to v. 2021.3",i:7.71623746923213E-05,a:"If you have set up version 2021.2 of LS Insight, you can apply the changes in version 2021.3 by downloading the update package and running the script against your current LS Insight instance. Note: The Azure Data Factory containing the ETL process pipelines will be replaced and some of the stored ..."},"45":{y:0,u:"../Content/LS-Insight/Release-Notes/2021/2021-2-Release-Notes.htm",l:-1,t:"LS Insight 2021.2 Release Notes",i:8.10251074885415E-05,a:"LS Insight (2021.2) Release Notes About This Release Released -  April 29, 2021 This version of LS Insight supports versions 8.4 and later of LS Central On-premises and later versions of LS Central In-cloud (SaaS). Setup of LS Insight for LS Central In-cloud (SaaS) needs some additional setup from ..."},"46":{y:0,u:"../Content/LS-Insight/Release-Notes/2021/2021-2-Update-From-2021-1.htm",l:-1,t:"Update LS Insight from v. 2021.1 to v. 2021.2",i:7.71623746923213E-05,a:"In version 2021.2 the Generate LS Insight Query Base pipeline script and the stored procedures that load data into the fact tables were updated. If you have set up version 2021.1 of LS Insight, you can apply these changes by downloading the update package and running the script against your current ..."},"47":{y:0,u:"../Content/LS-Insight/Release-Notes/2021/2021-1-Release-Notes.htm",l:-1,t:"LS Insight 2021.1 Release Notes",i:4.82307144703893E-05,a:"LS Insight (2021.1) Release Notes About This Release Released -  February 9, 2021 This version of LS Insight supports versions 8.4 and later of LS Central On-premises and later versions of LS Central In-cloud (SaaS). Setup of LS Insight for LS Central In-cloud (SaaS) needs some additional setup from ..."},"48":{y:0,u:"../Content/LS-Insight/Release-Notes/2020/2020-5-Release-Notes.htm",l:-1,t:"LS Insight 2020.5 Release Notes",i:4.82307144703893E-05,a:"LS Insight (2020.5) Release Notes About This Release Released - November 4, 2020 This version of LS Insight supports versions 8.4 and later of LS Central on-premises and lates versions of LS Central in cloud (Saas). Setup of LS Insight for LS Central in cloud (Saas) need some additional setup from ..."},"49":{y:0,u:"../Content/LS-Insight/Release-Notes/2020/2020-4-Release-Notes.htm",l:-1,t:"LS Insight 2020.4 Release Notes",i:4.82307144703893E-05,a:"LS Insight (2020.4) Release Notes About This Release Released - July 9, 2020 This version of LS Insight supports versions 8.4 and later of LS Central on-premises. Support for LS Central version 15.0 and later in cloud and hybrid cloud will be added in future versions of LS Insight. This release was ..."},"50":{y:0,u:"../Content/LS-Insight/Release-Notes/2020/2020-3-Release-Notes.htm",l:-1,t:"2020.3 Release Notes",i:4.82307144703893E-05,a:"LS Insight (2020.3) Release Notes About This Release Released - April 8, 2020 This version of LS Insight supports versions 8.4 and later of LS Central on-premises. Support for LS Central version 15.0 and later in cloud and hybrid cloud will be added in future versions of LS Insight. Note:  This ..."},"51":{y:0,u:"../Content/LS-Insight/Release-Notes/2020/2020-3-1-Update-From-2020-1-3.htm",l:-1,t:"Update LS Insight from v. 2020.1-202.3 to v. 2020.3.1",i:9.73883145949369E-05,a:"Update LS Insight from v. 2020.1-2020.3 to v. 2020.3.1 In the 2020.3.1 hotfix of LS Insight a pipeline was added that has been missing since LS Insight was updated from ADF version 1 to version 2. To add this pipeline to a current installation of LS Insight, make sure that you are running LS Insight ..."},"52":{y:0,u:"../Content/LS-Insight/Release-Notes/2020/2020-2-Release-Notes.htm",l:-1,t:"LS Insight 2020.2 Release Notes",i:4.82307144703893E-05,a:"LS Insight (2020.2) Release Notes About This Release Released - February 19, 2020 This version of LS Insight supports versions 8.4 - 14.02 of LS Central. Note:  If you have already set up LS Insight 2020.1, you can update to 2020.2 by following the  update guidelines , but we recommend setting up ..."},"53":{y:0,u:"../Content/LS-Insight/Release-Notes/2020/2020-2-Update-From-2020-1-2.htm",l:-1,t:"Update LS Insight from 2020.1.2 to 2020.2",i:6.32245564078996E-05,a:"Download update You can download the  update package  from our Azure storage. The zip file contains three files: Fix for SP.ipynb LS Insight Inventory 2020.2.pbit LS Insight Sales 2020.2,pbit Update LS Insight To implement the fix in the Fix for SP.ipynb file you need to:  Open the file in Azure ..."},"54":{y:0,u:"../Content/LS-Insight/Release-Notes/2020/2020-1-Release-Notes.htm",l:-1,t:"LS Insight 2020.1 Release Notes",i:4.82307144703893E-05,a:"LS Insight (2020.1) Release Notes About This Release Released - December 16, 2019 This version of LS Insight supports versions 8.4 - 13.05 of LS Central. Note:  It is not possible to update LS Insight from version 2019.1 to version 2020.1. Version 2020.1 needs to be  set up from scratch .  The ..."},"55":{y:0,u:"../Content/LS-Retail/LS-Retail-Apps/Release-Notes/LS-Retail-Apps-Release-Notes.htm",l:-1,t:"LS Commerce \u0026 Apps Release Notes",i:5.18057269126885E-05,a:"Release notes are published online with each new release of LS Commerce Suite which includes LS Commerce Service and LS Retail Apps. Latest release LS Commerce Suite 4.23 Release Notes See also LS Commerce Suite 4.22 Release Notes LS Commerce Suite 4.21 Release Notes LS Commerce Suite 4.20 Release ..."},"56":{y:0,u:"../Content/LS-Retail/LS-Retail-Start-Page.htm",l:-1,t:"Retail -  LS Central Help",i:5.7202051889934E-05,a:"Retail LS Central Retail is a complete retail management system that gives you all the functionality you need to manage your business operations efficiently, from POS terminals to the head office, regardless of industry.      "},"57":{y:0,u:"../Content/LS-Retail/Point-Of-Sale.htm",l:-1,t:"Point of Sale",i:5.82622474426485E-05,a:"The LS Retail Point of Sale (POS) system offers features that make sales transactions easy to set up, manage, and process for any retail business. The POS is a fast, dependable, and powerful application that sets new standards for speed, ease-of-use, and error-free processing of retail sales. It  ..."},"58":{y:0,u:"../Content/LS-Retail/POS/POS.htm",l:-1,t:"POS",i:4.5983497435809E-05,a:" All screenshots and examples in the POS help topics are based on data in the Demo Data Company that is released with LS Central. The POS setup is very flexible and offers a lot of options to suit different needs. The LS Central Demo Data Company includes some stores and restaurants with different ..."},"59":{y:0,u:"../Content/LS-Retail/POS/Overview/Starting-The-POS.htm",l:-1,t:"Starting the POS ",i:0.000284772179763685,a:" The LS Central Demo Data for the POS To be able to run the POS terminal, the active LS Central user has to be set up as Retail User in the BackOffice: Open Business Central in a browser (path: hostname:port/service). Open the Retail Users page, and create a user with a POS terminal assigned.  You ..."},"60":{y:0,u:"../Content/LS-Retail/POS/Overview/Inserting-Default-Data.htm",l:-1,t:"Inserting Default Data",i:0.000316302507513927,a:"It is necessary to insert default data when you set up a new company. Insert Default Data is run from the  Retail Setup page or Import Export Worksheet. This process inserts for example: POS commands which belong to the LS Central Base system Data into Retail Setup Basic number series.  POS Profiles ..."},"61":{y:0,u:"../Content/LS-Retail/POS/Overview/Helpful-Setup-Tools.htm",l:-1,t:"Helpful Setup Tools",i:4.5983497435809E-05,a:"The POS setup includes a lot of data, some of this data is standard and some of it is unique to each installation.  To simplify the data setup  the system has features to assist the POS setup user, making the configuration of the POS easier and faster. These features are: The  Import Export ..."},"62":{y:0,u:"../Content/LS-Retail/POS/Overview/Import-Export-Worksheet.htm",l:-1,t:"The Import Export Worksheet",i:0.000349896365853105,a:"To import and export setup data It is possible to export selected data from a company and then import it into another company in the same database or another database. The tool to do this is the  Import Export Worksheet  or LS Import Export WS. This tool exports the selected data into an XML file ..."},"63":{y:0,u:"../Content/LS-Retail/POS/Overview/Where-Used-Action.htm",l:-1,t:"The Where Used Action",i:5.24978893160726E-05,a:"The Where Used action is very useful in locating where POS setup data is being used.  With this action it is possible to  Display a list of all places where the POS object is used in the POS setup data. Let the user view the page where the POS object is used and edit it. The Where Used action is ..."},"64":{y:0,u:"../Content/LS-Retail/POS/Overview/Create-New-From-Action.htm",l:-1,t:"The Create New From Action",i:5.24978893160726E-05,a:"The Create New From Action For most of the POS objects, the action Create New From is available. This action copies the current object into a new one that you give the desired name.    "},"65":{y:0,u:"../Content/LS-Retail/POS/Overview/Up-And-Down-For-Lines.htm",l:-1,t:"Up And Down Feature For Lines",i:5.24978893160726E-05,a:"The Up and Down feature  is used for moving lines up and down. This is available for example for Menu Lines, Panel Lines, and POS Data Table Lines. The Up and Down buttons look like this: Note:You can only select to move one line at a time. Example: The Currency menu: To move lines within a menu:  ..."},"66":{y:0,u:"../Content/LS-Retail/POS/Clienteling/Clienteling.htm",l:-1,t:"Clienteling",i:0.000141151460846869,a:"Clienteling is an extension to LS Central POS, adding a new customer In-Store experience. Using the Clienteling view, store staff can engage with the customer and navigate items in a similar way the customer is used to in web-stores.  To view a demo terminal with Clienteling Product Compare Other ..."},"67":{y:0,u:"../Content/LS-Retail/POS/Clienteling/How-To-Set-Up-Clienteling.htm",l:-1,t:"How to: Set Up Clienteling",i:0.000209380763000282,a:"Clienteling can be set up and adjusted to the customer\u0027s needs. To that purpose some basic setup is needed.  Import Web Templates Add Web Service Create browser controls Create panels Set up in POS Edit the Web Templates See also Import Web Templates If you are not working with a demo data company, ..."},});