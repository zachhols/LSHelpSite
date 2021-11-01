define({"7476":{y:0,u:"../Content/Fields/T_99008906_602.htm",l:-1,t:"RowSpan, POS Menu Line",i:4.27263014956771E-05,a:"RowSpan, POS Menu Line \n    This field contains the number of rows that the button will span.\n  "},"7477":{y:0,u:"../Content/Fields/T_10012112_2.htm",l:-1,t:"Product Nutrition Code, Recipe/Item Nutrition",i:4.27263014956771E-05,a:"\n    This field contains the code of the product nutrition list that the nutrition information comes\n from. To see the codes available, click the AssistButton in the field.  \n    After you fill in this field, the program retrieves the nutrition values per nutrition weight from\n the product nutrition ..."},"7478":{y:0,u:"../Content/Fields/T_99001542_60.htm",l:-1,t:"Statement No., Archived Income/Expense Entry",i:4.27263014956771E-05,a:"Statement No., Archived Income/Expense Entry \n    Table Relation definition:  \n    IF (  Transaction Status =FILTER(\u003c\u003ePosted))  Statement No. \n    ELSE IF (  Transaction Status =CONST(Posted))  Posted Statement No."},"7479":{y:0,u:"../Content/Fields/T_99001474_85.htm",l:-1,t:"Time, Trans. Payment Entry",i:4.27263014956771E-05,a:"Time, Trans. Payment Entry \n    This field contains the time when this transaction was transacted.\n  "},"7480":{y:0,u:"../Content/Fields/T_99001453_530.htm",l:-1,t:"Line Discount Group Code, Periodic Discount",i:4.27263014956771E-05,a:"Line Discount Group Code, Periodic Discount \n    Table Relation definition:  Line Discount Offer Group Code"},"7481":{y:0,u:"../Content/Fields/T_10001206_3.htm",l:-1,t:"Dining Table No., Dining Table Property",i:4.27263014956771E-05,a:"Dining Table No., Dining Table Property \n    This field contains the number of the table the entry line applies to.\n  "},"7482":{y:0,u:"../Content/Fields/T_99009015_1.htm",l:-1,t:"Club Code, Member Attribute Value",i:6.84135620443336E-05,a:"Club Code, Member Attribute Value \n    Table Relation definition:  Member Club Code"},"7483":{y:0,u:"../Content/Fields/T_10001253_10.htm",l:-1,t:"Active Entry, Dining Table History Entry",i:4.73758491042879E-05,a:"Active Entry, Dining Table History Entry \n    This field indicates whether the entry is active or not. Only one entry can be active for the dining table, indicating whether the dining table is free or occupied."},"7484":{y:0,u:"../Content/Fields/T_10012101_30.htm",l:-1,t:"Cost per Portion per Minute, Meal Plan Menu",i:4.27263014956771E-05,a:"Cost per Portion per Minute, Meal Plan Menu \n    Here you can enter the cost per minute of preparing one recipe portion for the menu.\n     \n    The program uses the amount to calculate labor production cost in day plans.\n  "},"7485":{y:0,u:"../Content/Fields/T_99008981_10012739.htm",l:-1,t:"Option Value Text, POS Trans. Line",i:4.27263014956771E-05,a:"Option Value Text, POS Trans. Line"},"7486":{y:0,u:"../Content/Fields/T_99009038_1.htm",l:-1,t:"Document Source, Member Process Order Entry",i:4.27263014956771E-05,a:"Document Source, Member Process Order Entry \n    Option String definition:  \n    0: POS  \n    1: Order\n  "},"7487":{y:0,u:"../Content/Fields/T_99001530.htm",l:-1,t:"Store Section",i:0.000870453945038327,a:"\n    The Store Section table contains the physical division of the store into sections.\n You can register the size of each section and enter the date when stock was last checked.\n The  Section Shelf  table contains the break down of each section into shelves (or area).\n         After you have set up ..."},"7488":{y:0,u:"../Content/Fields/T_37_10012757.htm",l:-1,t:"Sourcing Status, Sales Line",i:4.27263014956771E-05,a:"Sourcing Status, Sales Line \n    The field shows the status of the sourcing process.  \n    The options for sourcing status are:   New  Info.Missing   On hold   Cancelled   Ready for Sourcing   Sourced "},"7489":{y:0,u:"../Content/Fields/T_10012138_1.htm",l:-1,t:"Receipt No., KDS Modified Status",i:4.27263014956771E-05,a:"Receipt No., KDS Modified Status \n    The number of the transaction. The program calculates this field using the KOT Transaction Mapping\n table.  \n    FlowField definition:  \n    Lookup( KOT Transaction Mapping Receipt No. \n    WHERE (   =FIELD(  KOT No. )));\n  "},"7490":{y:0,u:"../Content/Fields/T_10001228_69.htm",l:-1,t:"Bumpbar Operation, KDS Display Station",i:4.39786360359546E-05,a:"\"Use Bumpbar\" has to be selected in order to enable this field. It contains the operation you want to be pressed on when choosing which bumpbar to use. You have to be done choosing a functional profile for the display station and a button profile for that functional profile. The lookup for this ..."},"7491":{y:0,u:"../Content/Fields/T_10001315_15.htm",l:-1,t:"Counting Period, Store Inv. Worksheet Buffer",i:4.27263014956771E-05,a:"Counting Period, Store Inv. Worksheet Buffer This fileld applies to cycle counting and determines how ofter a worksheet should be counted pr. year.  "},"7492":{y:0,u:"../Content/Fields/T_99008967.htm",l:-1,t:"POS Test Line",i:4.27263014956771E-05,a:"POS Test Line"},"7493":{y:0,u:"../Content/Fields/T_99008900_100.htm",l:-1,t:"Hard Totals, POS Hardware Profile",i:4.27263014956771E-05,a:"Hard Totals, POS Hardware Profile \n    Option String definition:  \n    0: None  \n    1: OPOS "},"7494":{y:0,u:"../Content/Fields/T_10012327_25.htm",l:-1,t:"Maximum Qty. to Distribute, Allocation Plan Dim Values",i:4.27263014956771E-05,a:"Maximum Qty. to Distribute, Allocation Plan Dim Values"},"7495":{y:0,u:"../Content/Fields/T_10001451.htm",l:-1,t:"Attribute Linking",i:5.72682887973234E-05,a:"\n    This table specifies to which tables the attribute is linked to. \nLink Type specifies which tables are available for attribute linking. Division, product group and product group can be used for Item and Variant to\n  set further conditions on which records are linked and/or which default values ..."},"7496":{y:0,u:"../Content/Fields/T_10016606_4.htm",l:-1,t:"Recipient ID, Retail Msg Detail Recipient",i:4.27263014956771E-05,a:"Recipient ID, Retail Msg Detail Recipient \n    Recipient id: Username,Store,Terminal,Staff,Group\n  "},"7497":{y:0,u:"../Content/Fields/T_10016656_31.htm",l:-1,t:"Discount Percent, Posted Customer Order Line",i:4.27263014956771E-05,a:"Discount Percent, Posted Customer Order Line \n    A decimal field for the discount precent for the line.\n  "},"7498":{y:0,u:"../Content/Fields/T_99001473_280.htm",l:-1,t:"Variant Code, Trans. Sales Entry",i:4.27263014956771E-05,a:"Variant Code, Trans. Sales Entry \n    This field is for future use.\n  "},"7499":{y:0,u:"../Content/Fields/T_10012718_11.htm",l:-1,t:"Charge - Value, Additional Charge Lines",i:4.27263014956771E-05,a:"Charge - Value, Additional Charge Lines"},"7500":{y:0,u:"../Content/Fields/T_10001307_9.htm",l:-1,t:"Description, KDS Button Profile Line",i:5.09774713919473E-05,a:"Description, KDS Button Profile Line Contains the description of the button operation."},"7501":{y:0,u:"../Content/Fields/T_10015010_507.htm",l:-1,t:"Export Salary Basis, Staff Management Setup",i:4.27263014956771E-05,a:"Export Salary Basis, Staff Management Setup \n    Option String definition:  \n    0: Standard  \n    1: Base Code\n  "},"7502":{y:0,u:"../Content/Fields/T_10001425_53.htm",l:-1,t:"Dim 4 Attribute 2 Value, Variant Worksheet",i:4.27263014956771E-05,a:"Dim 4 Attribute 2 Value, Variant Worksheet \n    This field contains the value of hard attribute 2 for dimension 4.\n  "},"7503":{y:0,u:"../Content/Fields/T_10001460_131.htm",l:-1,t:"Online Reservation Capacity, Dining Area Plan Interval",i:4.27263014956771E-05,a:"Online Reservation Capacity, Dining Area Plan Interval Contains the online reservation capacity registered for the dining area plan interval.     "},"7504":{y:0,u:"../Content/Fields/T_10000711_2.htm",l:-1,t:"Item No., Price History",i:4.27263014956771E-05,a:"Item No., Price History \n    This field contains the number of the item which the price history applies to.  \n    The program fills in this field automatically.\n  "},"7505":{y:0,u:"../Content/Fields/T_10000734.htm",l:-1,t:"Table Lookup Viewer",i:4.27263014956771E-05,a:"Table Lookup Viewer \n    This is a temporary table to contain lookup data for the dynamic lookup viewer.\n  "},"7506":{y:0,u:"../Content/Fields/T_10012706_100.htm",l:-1,t:"Available for Use, Vendor Item Library",i:4.27263014956771E-05,a:"Available for Use, Vendor Item Library"},"7507":{y:0,u:"../Content/Fields/T_99009059.htm",l:-1,t:"Member Account User",i:4.27263014956771E-05,a:"Member Account User"},"7508":{y:0,u:"../Content/Release-Notes-LS-Central/Release-Notes-2017/Print-Title1.htm",l:-1,t:"Print-Title1",i:4.27263014956771E-05,a:" "},"7509":{y:0,u:"../Content/Fields/T_10000989_21.htm",l:-1,t:"Style Type, KDS Style Type Profile",i:4.69993838913231E-05,a:"Style Type, KDS Style Type Profile Contains the style type that the profile represents. The options are: Items Modifiers Deals Order Header \u0026 Footer Time Style Display Station    "},"7510":{y:0,u:"../Content/Fields/T_99001658_21.htm",l:-1,t:"POS Terminal No., Trans. Inventory Lines",i:4.27263014956771E-05,a:"POS Terminal No., Trans. Inventory Lines \n    Table Relation definition:  POS Terminal No."},"7511":{y:0,u:"../Content/Fields/T_99008980_5.htm",l:-1,t:"New Transaction, POS Transaction",i:4.27263014956771E-05,a:"New Transaction, POS Transaction"},"7512":{y:0,u:"../Content/Fields/T_10012361_23.htm",l:-1,t:"Item No. Exists, Item Import Ledger Entry",i:4.27263014956771E-05,a:"Item No. Exists, Item Import Ledger Entry \n    A check mark in this field indicates that an item number exists and was found either by vendor item\n no. or barcode no.\n  "},"7513":{y:0,u:"../Content/Fields/T_99008922_66.htm",l:-1,t:"xCaption 2 (Rcpt. Ref. Only), POS Lookup",i:4.27263014956771E-05,a:"\n    This field contains the caption for grid 2 when it does not contain a dining table reference,\n only receipt number. %T, %C and %N in the caption string will be replaced with the following:\n     %T = Transaction Total  %C = Cover (No. of registered guests)  %N = Receipt No.\n  "},"7514":{y:0,u:"../Content/Fields/T_10012121.htm",l:-1,t:"Recipe Prod. Order Line",i:4.27263014956771E-05,a:"Recipe Prod. Order Line"},"7515":{y:0,u:"../Content/Fields/T_99001470_140.htm",l:-1,t:"Periodic Discount Nos., Store",i:4.27263014956771E-05,a:"Periodic Discount Nos., Store \n    This field contains the identification code of the  Mix \u0026 Match Line Groups   numbering series assigned to the store.\n  "},"7516":{y:0,u:"../Content/Fields/T_10001467_2.htm",l:-1,t:" Line No., Date Schedule Line",i:4.27263014956771E-05,a:" Line No., Date Schedule Line Contains the line number of the line.  "},"7517":{y:0,u:"../Content/Fields/T_10001316_3.htm",l:-1,t:"Area, Store Inventory Counting Area",i:4.27263014956771E-05,a:"Area, Store Inventory Counting Area This is an area code that can be assigned to different places in a store. Then an area code can be assigned to item journal lines. Area code is only used in counting and it must be set in the worksheet if area codes should be used.  "},"7518":{y:0,u:"../Content/Fields/T_99008991_30.htm",l:-1,t:"Price, POS Voided Trans. Line",i:4.27263014956771E-05,a:"Price, POS Voided Trans. Line \n    This field contains the actual price of the item in the voided POS line before discounts.\n  "},"7519":{y:0,u:"../Content/Fields/T_10012326_5.htm",l:-1,t:"Group Code, Allocation Plan Location Lines",i:6.0481622311166E-05,a:"Group Code, Allocation Plan Location Lines \n    Table Relation definition:  Allocation Plan Group LinesGroup Code  WHERE (\n    Allocation Plan Code =FIELD( Allocation Plan Code) )\n     Item      Variant\n  "},"7520":{y:0,u:"../Content/Fields/T_10000758_40.htm",l:-1,t:"User ID, Retail System Log",i:4.27263014956771E-05,a:"User ID, Retail System Log \n    Table Relation definition:  Retail User ID"},"7521":{y:0,u:"../Content/Fields/T_99001691_1.htm",l:-1,t:"Safe No., Safe Bag Line",i:5.18057269126885E-05,a:"Safe No., Safe Bag Line \n    Table Relation definition:  Store Safe Safe No."},"7522":{y:0,u:"../Content/Fields/T_10012359_45.htm",l:-1,t:"Variant Dim3 Value, Item Import Journal Line",i:4.27263014956771E-05,a:"Variant Dim3 Value, Item Import Journal Line \n    This field contains the value of the third dimension of the item variant framework.\n  "},"7523":{y:0,u:"../Content/Fields/T_10012405_2.htm",l:-1,t:"Budget Type, Retail Sales Budget Lines",i:4.27263014956771E-05,a:"Budget Type, Retail Sales Budget Lines \n    Option String definition:  \n    0: Division  \n    1: Item Category  \n    2: Product Group  \n    3: Item\n  "},"7524":{y:0,u:"../Content/Fields/T_99001474.htm",l:-1,t:"Trans. Payment Entry",i:0.000417611820972719,a:"\n    The Trans. Payment Entry table includes detailed information about the payment used in the transaction,\n such as amount, currency, whether the entry was voided or is a change line and so on.\n     \n    The Trans. Payment Entry table is created automatically by the program. When you perform a ..."},"7525":{y:0,u:"../Content/Fields/T_99001485_15.htm",l:-1,t:"Store No., Posted Statement",i:5.18057269126885E-05,a:"Store No., Posted Statement \n    This field contains the number of the store that the statement belongs to.\n  "},"7526":{y:0,u:"../Content/Fields/T_99001480_25.htm",l:-1,t:"Length, Barcode Mask Segment",i:4.27263014956771E-05,a:"Length, Barcode Mask Segment \n    This field contains the number of characters used when creating barcodes from the barcode mask.\n  "},"7527":{y:0,u:"../Content/Fields/T_10001206_8.htm",l:-1,t:"Joined To Table, Dining Table Property",i:4.27263014956771E-05,a:"Joined To Table, Dining Table Property \n    This field is for internal use.\n  "},"7528":{y:0,u:"../Content/Fields/T_99001462_315.htm",l:-1,t:"Account No., Tender Type",i:0.000112638058257048,a:"Account No., Tender Type \n    This field contains the number of the account that the tender type is posted to.\n  "},"7529":{y:0,u:"../Content/Fields/T_10012732_15.htm",l:-1,t:"Quantity, Canceled Special Order Line",i:4.27263014956771E-05,a:"Quantity, Canceled Special Order Line"},"7530":{y:0,u:"../Content/Fields/T_99001461_160.htm",l:-1,t:"Return in Transaction, Staff",i:4.27263014956771E-05,a:"Return in Transaction, Staff \n    Option String definition:  \n    0: No  \n    1: Yes  \n    2:\n  "},"7531":{y:0,u:"../Content/Fields/T_10012200_102.htm",l:-1,t:"Replenishment Sales Profiles, Replen. Setup",i:4.27263014956771E-05,a:"Replenishment Sales Profiles, Replen. Setup \n    FlowField definition: "},"7532":{y:0,u:"../Content/Fields/T_10016602_6.htm",l:-1,t:"Recipient Name, Retail Message Recipients",i:4.27263014956771E-05,a:"Recipient Name, Retail Message Recipients \n    Recipient name\n  "},"7533":{y:0,u:"../Content/Fields/T_99009029_9.htm",l:-1,t:"Return Type, Dynamic Query",i:4.27263014956771E-05,a:"Return Type, Dynamic Query \n    Option String definition:  \n    0: Boolean By Condition  \n    1: Value\n  "},"7534":{y:0,u:"../Content/Fields/T_10012104_6.htm",l:-1,t:"Planned Portions, Day Plan",i:4.27263014956771E-05,a:"Planned Portions, Day Plan \n    This field shows the planned number of portions in this day plan.  \n    The program automatically calculates and updates the contents of the field, using the Planned Qty. of Portions field in the Day Plan Line table.\n  "},"7535":{y:0,u:"../Content/Fields/T_99001558_36.htm",l:-1,t:"Date Applied, POS Data Entry",i:4.27263014956771E-05,a:"Date Applied, POS Data Entry \n    This field displays the application date of the data entry. The system inserts this date automatically.\n  "},"7536":{y:0,u:"../Content/Fields/T_99001483_1021.htm",l:-1,t:"Linked Infocode, Information Subcode",i:4.72003889621551E-05,a:"\n    This field contains the code of the infocode that is linked to the subcode. When the subcode is selected, the program will display the next linked infocode.\n     Note - A subcode cannot have a linked infocode if the header infocode has a linked infocode.\n     If the header infocode is a group, ..."},"7537":{y:0,u:"../Content/Fields/T_10012712_10.htm",l:-1,t:"Description, Option Type Value Header",i:4.27263014956771E-05,a:"Description, Option Type Value Header"},"7538":{y:0,u:"../Content/Fields/T_10001404_41.htm",l:-1,t:"Created Date and Time, Item Status Link",i:4.27263014956771E-05,a:"Created Date and Time, Item Status Link \n    This field shows the date and time of the creation of the record.\n  "},"7539":{y:0,u:"../Content/Fields/T_99008984_76.htm",l:-1,t:"Context Menu, POS Data Grid Control",i:5.96183420777108E-05,a:"Context Menu, POS Data Grid Control \n    Table Relation definition:  POS Context Menu Context Menu ID   WHERE (\n     Context Menu ID  =FIELD(  Context Menu ) )\n  "},"7540":{y:0,u:"../Content/Fields/T_10012315_16.htm",l:-1,t:"Unit Price Difference, Vendor Perf. Line",i:4.27263014956771E-05,a:"Unit Price Difference, Vendor Perf. Line"},"7541":{y:0,u:"../Content/Fields/T_10001303_111.htm",l:-1,t:"Needs to Be Ordered at Store, Inventory Masks",i:4.27263014956771E-05,a:"Needs to Be Ordered at Store, Inventory Masks \n    If yes, the worksheet will only allow items that have the field \"Order by = Store\" in distribution\n for the store specified in the mask.\n  "},"7542":{y:0,u:"../Content/Fields/T_10001212_69.htm",l:-1,t:"On POS Exit/Posting, Hospitality Type",i:4.42718473385576E-05,a:"\n    This field indicates which items the system sends to the kitchen when Exit is pressed in the Sales POS\n or when the order is posted. The options are:  Send Item with No Menu Type - sends only those items that have no specified menu type.\n The items will belong to one KOT. Items with a menu type ..."},"7543":{y:0,u:"../Content/Fields/T_10012806_1.htm",l:-1,t:"Terminal No., Inventory Terminal-Store",i:4.27263014956771E-05,a:"Terminal No., Inventory Terminal-Store \n    Table Relation definition:  POS Terminal No."},"7544":{y:0,u:"../Content/Fields/T_99001512_6001.htm",l:-1,t:"Distribution Server, Distribution Location",i:4.27263014956771E-05,a:"\n    This field contains the name of the distribution server used for this distribution location when\n using Data Director. It also identifies the Transaction Server for clients that do queries from this\n location, for example POS terminals.  Note If this location is used for both Data Director jobs ..."},"7545":{y:0,u:"../Content/Fields/T_10012708_160.htm",l:-1,t:"No. of Item Opt.Values, Option Type",i:4.27263014956771E-05,a:"No. of Item Opt.Values, Option Type \n    This field shows how often option values for this option type are used.\n  "},"7546":{y:0,u:"../Content/Search-Tips.htm",l:-1,t:"Search Tips",i:5.7202051889934E-05,a:"Use the search bar at the top of the page to search across all products. Type your keywords in the search bar.  Click the  filter icon in the search bar to use the search filters to narrow your search to a specific product, for example select \"All Except Field Help\" to see results from all topics ..."},"7547":{y:0,u:"../Content/Fields/T_10001455_11.htm",l:-1,t:"Previous Prod. Time (Min.), Item Production Time Worksheet",i:4.57527766346809E-05,a:"Previous Prod. Time (Min.), Item Production Time Worksheet \n    Shows the production time of the item before it was updated within the worksheet."},"7548":{y:0,u:"../Content/Fields/T_99008987_70.htm",l:-1,t:"EFT Store No., POS Card Entry",i:4.27263014956771E-05,a:"EFT Store No., POS Card Entry \n    This field shows the EFT Store No. of the store that the card entry was made in.\n The value of this field is usually the same as the  Store No. .\n  "},"7549":{y:0,u:"../Content/Fields/T_99001639_104.htm",l:-1,t:"Item Field Name, Dyn. Item Hierarchy Level",i:4.27263014956771E-05,a:"Item Field Name, Dyn. Item Hierarchy Level \n    This field contains the name of the Item field in the linked table.\n  "},"7550":{y:0,u:"../Content/Fields/T_10000768_2.htm",l:-1,t:"Type, Search Index Result",i:4.27263014956771E-05,a:"Type, Search Index Result \n    Search Index Table\n  "},"7551":{y:0,u:"../Content/Fields/T_10001325_4.htm",l:-1,t:"No. Of Check Rounds, P/R Counting Header",i:4.27263014956771E-05,a:"No. Of Check Rounds, P/R Counting Header \n    The number of checks left when checking quantity received against the quantity in the original\n purchase order document. This is used when receiving with RF handheld terminals\n  "},"7552":{y:0,u:"../Content/Fields/T_99001674_11.htm",l:-1,t:"Offer No., Trans. Disc. Benefit Entry",i:4.27263014956771E-05,a:"Offer No., Trans. Disc. Benefit Entry \n    Table Relation definition:  Periodic Discount No."},"7553":{y:0,u:"../Content/Fields/T_10001269_42.htm",l:-1,t:"Aggregate Pane Position, KDS Visual Profile",i:8.65642047844768E-05,a:"Aggregate Pane Position, KDS Visual Profile Contains the position of the Aggregate pane. The options are: Right Left Top Bottom"},"7554":{y:0,u:"../Content/Fields/T_10001404_5.htm",l:-1,t:"Status Code, Item Status Link",i:4.27263014956771E-05,a:"Status Code, Item Status Link \n    This field contains the Item Status Code for the record.\n  "},"7555":{y:0,u:"../Content/Fields/T_10012327_51.htm",l:-1,t:"Dimension 4, Allocation Plan Dim Values",i:4.27263014956771E-05,a:"Dimension 4, Allocation Plan Dim Values \n    FlowField definition:  \n    Lookup( Item Variant Registration \n    WHERE (  Item No.  =FIELD(  ),\n      =FIELD(  Variant Code )));\n  "},"7556":{y:0,u:"../Content/Fields/T_10012709_21.htm",l:-1,t:"Fixed Input, Option Value",i:4.27263014956771E-05,a:"Fixed Input, Option Value \n    A check mark in this field indicates that the option is a fixed option.\n  "},"7557":{y:0,u:"../Content/Fields/T_10000760_100.htm",l:-1,t:"Value, Item Finder Setup Line",i:4.27263014956771E-05,a:"Value, Item Finder Setup Line \n    This field is used as an input field when a user is entering answers where the item finder is in use.\n This field provides input validation and lookup support.\n  "},"7558":{y:0,u:"../Content/Fields/T_10001412_12.htm",l:-1,t:"Dimension Link, Extended Variant Dimensions",i:4.27263014956771E-05,a:"Dimension Link, Extended Variant Dimensions \n    Table Relation definition:  Dimension "},"7559":{y:0,u:"../Content/Fields/T_99008980_608.htm",l:-1,t:"Original Sales Type, POS Transaction",i:4.27263014956771E-05,a:"Original Sales Type, POS Transaction \n    This field contains the original sales type of the order; that is, the actual sales type. The current sales type is a pre-order sales type that will be converted to\n the original sales type on the day the order is due.\n  "},"7560":{y:0,u:"../Content/Fields/T_99008981_240.htm",l:-1,t:"Price Override, POS Trans. Line",i:4.27263014956771E-05,a:"Price Override, POS Trans. Line"},"7561":{y:0,u:"../Content/Fields/T_99008920_39.htm",l:-1,t:"POS Module, POS Command",i:4.27263014956771E-05,a:"POS Module, POS Command \n    If not empty, then this field contains the POS Module that this parameter applies to.\n  "},"7562":{y:0,u:"../Content/Fields/T_27_99001463.htm",l:-1,t:"Item Family Code, Item",i:4.27263014956771E-05,a:"Item Family Code, Item \n    This field contains a code for the item family that the item belongs to.  \n    You can change the unit price or cost for all items in the same item family by changing the price\n or cost for only one of the items.\n  "},"7563":{y:0,u:"../Content/Fields/T_27_10012202.htm",l:-1,t:"Manual Estimated Daily Sale, Item",i:4.27263014956771E-05,a:"Manual Estimated Daily Sale, Item \n    If the Replenishment Calculation Type is set to Manual Estimate, this is where you enter the Manual Estimated Daily Sale.\n  "},"7564":{y:0,u:"../Content/Fields/T_10000710_42.htm",l:-1,t:"COGS (LCY) Field No., Table Lookup Setup",i:4.27263014956771E-05,a:"COGS (LCY) Field No., Table Lookup Setup \n    This is the field no. of the COGS (LCY) field for this table.\n  "},"7565":{y:0,u:"../Content/Fields/T_10012219_7.htm",l:-1,t:"Valid From Date, Purchase Contract",i:4.27263014956771E-05,a:"Valid From Date, Purchase Contract \n    In this field you can enter the starting period of the purchase contract. This field is used when the purchases are selected in the Purchase Contract Report.\n  "},"7566":{y:0,u:"../Content/Fields/T_10001209_220.htm",l:-1,t:"Del. \u0026 Takeout Order Panel ID, Hospitality Setup",i:4.27263014956771E-05,a:"Del. \u0026 Takeout Order Panel ID, Hospitality Setup \n    Table Relation definition:  POS Panel Control ID"},"7567":{y:0,u:"../Content/Fields/T_99008990_20.htm",l:-1,t:"Store No., POS Voided Transaction",i:4.27263014956771E-05,a:"Store No., POS Voided Transaction \n    This field contains the number of the store the POS terminal that voided the transaction is located\n in.\n  "},"7568":{y:0,u:"../Content/Fields/T_99008987_39.htm",l:-1,t:"EFT Trans. Time, POS Card Entry",i:4.27263014956771E-05,a:"EFT Trans. Time, POS Card Entry \n    This field contains the EFT server time of transaction.\n  "},"7569":{y:0,u:"../Content/Fields/T_10012115.htm",l:-1,t:"Nutrition Nutrient",i:4.27263014956771E-05,a:"Nutrition Nutrient"},"7570":{y:0,u:"../Content/Fields/T_10012732_5403.htm",l:-1,t:"Bin Code, Canceled Special Order Line",i:4.27263014956771E-05,a:"Bin Code, Canceled Special Order Line"},"7571":{y:0,u:"../Content/Fields/T_10015022_13.htm",l:-1,t:"Last Modified Time, Staff Schedule",i:4.27263014956771E-05,a:"Last Modified Time, Staff Schedule"},"7572":{y:0,u:"../Content/Fields/T_99008908_1.htm",l:-1,t:"Profile ID, POS Macro Header",i:4.27263014956771E-05,a:"Profile ID, POS Macro Header \n    The program uses this field internally.\n  "},"7573":{y:0,u:"../Content/Fields/T_10016636_30.htm",l:-1,t:"Expect. Dining Duration (Min.), Din. Tbl. Hist. Entry Archive",i:4.27263014956771E-05,a:"Expect. Dining Duration (Min.), Din. Tbl. Hist. Entry Archive Contains the expected dining duration in minutes for the entry."},"7574":{y:0,u:"../Content/Fields/T_99001703_6.htm",l:-1,t:"Amount, Join Bag Line",i:4.87792517736847E-05,a:"Amount, Join Bag Line"},"7575":{y:0,u:"../Content/Fields/T_99001585_5.htm",l:-1,t:"Vendor No., Coupon Issuer",i:7.90440031637224E-05,a:"Vendor No., Coupon Issuer \n    In this field you can define a Vendor number, representing the coupon issuer if he or she   is registered\n in the system.\n  "},"7576":{y:0,u:"../Content/Fields/T_99001462_320.htm",l:-1,t:"Account Name, Tender Type",i:4.27263014956771E-05,a:"Account Name, Tender Type \n    This field contains the account name.     The program retrieves the account name automatically from the G/L Account or the\n    Bank Account table when the Account No.  field is filled in.\n  "},"7577":{y:0,u:"../Content/Fields/T_99008922_65.htm",l:-1,t:"xCaption 1 (Rcpt. Ref. Only), POS Lookup",i:4.27263014956771E-05,a:"\n    This field contains the caption for grid 1 when it does not contain a dining table reference,\n only receipt number. %T, %C and %N in the caption string will be replaced with the following:\n     %T = Transaction Total  %C = Cover (No. of registered guests)  %N = Receipt No.\n  "},"7578":{y:0,u:"../Content/Fields/T_10001413_21.htm",l:-1,t:"Framework Group Code, Extended Variant Values",i:4.27263014956771E-05,a:"Framework Group Code, Extended Variant Values \n    FlowField definition:  \n    Lookup( Framework Values Group Link Dimension Group Code \n    WHERE (   =FIELD(  Framework Code ),\n      =FIELD(  Item No. ),\n      =FIELD(  Item No. ),\n      =FIELD(  ),   =FIELD(  Value Type )));\n  "},"7579":{y:0,u:"../Content/Fields/T_10000916_10.htm",l:-1,t:"LineNo.",i:4.27263014956771E-05,a:"LineNo. Description"},"7580":{y:0,u:"../Content/Fields/T_10012223_2.htm",l:-1,t:"Item Category Code, Replen. From Warehouse",i:4.27263014956771E-05,a:"Item Category Code, Replen. From Warehouse \n    In this field you can enter the Item Category Code.\n  "},"7581":{y:0,u:"../Content/Fields/T_99001477_83.htm",l:-1,t:"Valid To Date, Trans. Coupon Entry",i:4.27263014956771E-05,a:"Valid To Date, Trans. Coupon Entry"},"7582":{y:0,u:"../Content/Fields/T_99009034_2.htm",l:-1,t:"Source Type, Member Sales Entry",i:4.27263014956771E-05,a:"Source Type, Member Sales Entry \n    Option String definition:  \n    0: POS Transaction  \n    1: Sales Invoice  \n    3: Credit Memo\n  "},"7583":{y:0,u:"../Content/Fields/T_10012800_5.htm",l:-1,t:"Description, Inventory Menus",i:4.27263014956771E-05,a:"Description, Inventory Menus"},"7584":{y:0,u:"../Content/Fields/T_10012803_5.htm",l:-1,t:"Description, Inventory Bitmaps",i:4.27263014956771E-05,a:"Description, Inventory Bitmaps"},"7585":{y:0,u:"../Content/Fields/T_99009020_3.htm",l:-1,t:"Starting Date, Member Campaign",i:4.27263014956771E-05,a:"Starting Date, Member Campaign"},"7586":{y:0,u:"../Content/Fields/T_99008900_709.htm",l:-1,t:"FC Screen Ext Height %, POS Hardware Profile",i:4.27263014956771E-05,a:"FC Screen Ext Height %, POS Hardware Profile"},"7587":{y:0,u:"../Content/Fields/T_99008906_723.htm",l:-1,t:"Shade when Disabled, POS Menu Line",i:4.27263014956771E-05,a:"Shade when Disabled, POS Menu Line"},"7588":{y:0,u:"../Content/Fields/T_10001461_20.htm",l:-1,t:"Expect. Dining Duration (Min.), Din. Tbl. Alloc. Interv. Entry",i:4.27263014956771E-05,a:"Expect. Dining Duration (Min.), Din. Tbl. Alloc. Interv. Entry Contains the Expect. Dining Duration (Min.) of the Din. Tbl. Alloc. Interv. Entry.     "},"7589":{y:0,u:"../Content/Fields/T_10000767_30.htm",l:-1,t:"Alias Field No., Search Index Field",i:4.27263014956771E-05,a:"Alias Field No., Search Index Field \n    Uses the field value of \"Alias Field No.\" field as the alias for current fields value.\n  "},"7590":{y:0,u:"../Content/Fields/T_10000748_100.htm",l:-1,t:"Sales (Qty.), Retail Campaign Line",i:4.27263014956771E-05,a:"Sales (Qty.), Retail Campaign Line \n    This field displays the total quantity of items sold as part of this campaign line.\n The system fills in this field automatically when the campaign is refreshed.\n  "},});