define({"2870":{y:0,u:"../Content/Fields/T_10012206_27.htm",l:-1,t:"Like for Like Process Method, Replen. Item Store Rec",i:4.27263014956771E-05,a:"\n    This field shows the value that is going to be filled in the field Process Method field in the  Replen. Planned Stock Demand  table\n when a Statement is posted and the Replen. Calculation Method of the Item is Like for Like.\n The options are:  Empty - Not Selected.  Replen Job  - The record ..."},"2871":{y:0,u:"../Content/Fields/T_99009021_6.htm",l:-1,t:"Contact No., Member Campaign Line",i:4.87792517736847E-05,a:"Contact No., Member Campaign Line \n    Table Relation definition:  Member Contact Contact No.   WHERE (\n     Account No.  =FIELD(  Account No. ) )\n  "},"2872":{y:0,u:"../Content/Fields/T_99008990_185.htm",l:-1,t:"Receipt Printed for Return, POS Voided Transaction",i:4.27263014956771E-05,a:"Receipt Printed for Return, POS Voided Transaction \n    A checkmark in this field indicates that a receipt was printed for a returned sale in the voided\n POS transaction.\n  "},"2873":{y:0,u:"../Content/Fields/T_27_10012236.htm",l:-1,t:"Out of Stock Days, Item",i:4.27263014956771E-05,a:"Out of Stock Days, Item \n    FlowField definition:      Count(Replen. Out of Stock Log      WHERE (  Item No. =FIELD( No.)));\n  "},"2874":{y:0,u:"../Content/Fields/T_99008915_10.htm",l:-1,t:"Keep Focus, POS Input Control",i:4.27263014956771E-05,a:"Keep Focus, POS Input Control"},"2875":{y:0,u:"../Content/Fields/T_99001526_5.htm",l:-1,t:"Limit Relation Code, Sales Quantity Limitations",i:4.27263014956771E-05,a:"Limit Relation Code, Sales Quantity Limitations \n    If Infocode is selected in the  Limit Relation  field you select the appropriate Infocode from a list by clicking\n in the field. The Infocode selected must be of the type Subcode.\n  "},"2876":{y:0,u:"../Content/Fields/T_113_10012752.htm",l:-1,t:"Payment-At Order Entry-Limit, Sales Invoice Line",i:4.27263014956771E-05,a:"Payment-At Order Entry-Limit, Sales Invoice Line"},"2877":{y:0,u:"../Content/Fields/T_99001597_1.htm",l:-1,t:"Entry No., Scheduler Log",i:4.27263014956771E-05,a:"Entry No., Scheduler Log \n    This field contains the number that the program has assigned to this entry.  \n    The program fills in this field automatically when it processes data exchange.\n  "},"2878":{y:0,u:"../Content/Fields/T_5722_10012203.htm",l:-1,t:"Buyer ID, Item Category",i:4.27263014956771E-05,a:"Buyer ID, Item Category \n    Table Relation definition:  Retail User"},"2879":{y:0,u:"../Content/Fields/T_99001569_30.htm",l:-1,t:"Add.-Curr. Sales Amount, POS Terminal Statistics",i:4.27263014956771E-05,a:"\n    This field contains the net sales amount in the Additional Reporting Currency on the POS terminal in the transactions included\n in the time frame.      The program fills in this field automatically when it receives the corresponding information from\n the POS Terminals.\n  "},"2880":{y:0,u:"../Content/Fields/T_99001633_4.htm",l:-1,t:"Staff Name on Receipt, Staff Store Link",i:4.27263014956771E-05,a:"Staff Name on Receipt, Staff Store Link \n    FlowField definition:  \n    Lookup(Staff.\"Name on Receipt\" WHERE (  \n    ID =FIELD( Staff ID )));\n  "},"2881":{y:0,u:"../Content/Fields/T_10012706_4.htm",l:-1,t:"Vendor Name, Vendor Item Library",i:4.27263014956771E-05,a:"Vendor Name, Vendor Item Library \n    FlowField definition:  \n    Lookup(Vendor.Name WHERE (  \n    No. =FIELD( Vendor No. )));\n  "},"2882":{y:0,u:"../Content/Fields/T_10015057_20.htm",l:-1,t:"Work Region, Staff Management Employee",i:4.27263014956771E-05,a:"Work Region, Staff Management Employee \n    Table Relation definition:  Work Region"},"2883":{y:0,u:"../Content/Fields/T_10012709.htm",l:-1,t:"Option Value",i:4.27263014956771E-05,a:"Option Value"},"2884":{y:0,u:"../Content/Fields/T_99001642_7.htm",l:-1,t:"Member Attribute Value, Trans. Discount Entry",i:4.27263014956771E-05,a:"Member Attribute Value, Trans. Discount Entry"},"2885":{y:0,u:"../Content/Fields/T_10015027_14.htm",l:-1,t:"Period Setting, Unavailability Calc Settings",i:4.27263014956771E-05,a:"\n    Option String definition:  \n    0: Today  \n    1: Manual  \n    2: This Week  \n    3: Last Week  \n    4: Last 2 Weeks  \n    5: Last 3 Weeks  \n    6: This Month  \n    7: Last Month  \n    8: Last 2 Months  \n    9: Last 3 Months  \n    10: Last 6 Months  \n    11: This Year  \n    12: Last Year  \n    ..."},"2886":{y:0,u:"../Content/Fields/T_10001255_1.htm",l:-1,t:"Receipt No., Hosp. Transaction Summary",i:4.27263014956771E-05,a:"Receipt No., Hosp. Transaction Summary \n    Receipt No."},"2887":{y:0,u:"../Content/Fields/T_112_10012709.htm",l:-1,t:"Order Amount, Sales Invoice Header",i:4.27263014956771E-05,a:"Order Amount, Sales Invoice Header"},"2888":{y:0,u:"../Content/Fields/T_10016656_37.htm",l:-1,t:"Amount, Posted Customer Order Line",i:4.27263014956771E-05,a:"Amount, Posted Customer Order Line \n    A decimal field for the amount for the line.\n  "},"2889":{y:0,u:"../Content/Fields/T_10000731_3.htm",l:-1,t:"Replen.PO to Store To Send, Retail Buyer Cue",i:4.27263014956771E-05,a:"\n    FlowField definition:      Count(Purchase Header      WHERE (  Document Type =CONST(Order),      Retail Status =CONST(New),      Buyer ID =FIELD(),      Retail Purchase Source Filter =CONST(Replenishment),      Retail Purchase Dest. Filter =CONST(\" \")));\n  "},"2890":{y:0,u:"../Content/Fields/T_10012717_30.htm",l:-1,t:"Item Category Description, Payment Setup Lines",i:4.27263014956771E-05,a:"Item Category Description, Payment Setup Lines"},"2891":{y:0,u:"../Content/Fields/T_10016651_157.htm",l:-1,t:"Transactions, Customer Order Header",i:4.27263014956771E-05,a:"Transactions, Customer Order Header \n    An integer field that  holds the count of the Transaction Headers for each Customer Order Header."},"2892":{y:0,u:"../Content/Fields/T_99001636_1.htm",l:-1,t:"Currency Code, Tender Type Currency Setup",i:0.000139119564848011,a:"Currency Code, Tender Type Currency Setup \n    Table Relation definition:  Currency"},"2893":{y:0,u:"../Content/Fields/T_10016655_30.htm",l:-1,t:"Member Card No., Posted Customer Order Header",i:4.27263014956771E-05,a:"Member Card No., Posted Customer Order Header \n    A code field for the Member Card No. for the member that is creating the order.\n  "},"2894":{y:0,u:"../Content/Fields/T_99001790_30.htm",l:-1,t:"No. of Lines on Invoice, POS Printer",i:4.27263014956771E-05,a:"No. of Lines on Invoice, POS Printer"},"2895":{y:0,u:"../Content/Fields/T_10012801.htm",l:-1,t:"Inventory Menu Lines",i:5.48322020516923E-05,a:"Inventory Menu Lines"},"2896":{y:0,u:"../Content/Fields/T_10012324_11.htm",l:-1,t:"Group Weight, Allocation Plan Groups",i:4.27263014956771E-05,a:"Group Weight, Allocation Plan Groups"},"2897":{y:0,u:"../Content/Fields/T_10001452_7.htm",l:-1,t:"Calc. on Total Pressed, Retail Charge",i:0.000360862001523578,a:"If this field contains a check mark, the system automatically checks if there is a Retail Charge defined for the store, sales type and items when Total is pressed in a transaction. If this field does not contain a check mark, the retail charge code must be assigned as parameter to the ..."},"2898":{y:0,u:"../Content/Fields/T_10014618_30.htm",l:-1,t:"Variant Dim4 Value, Archived Franch Inb Item Mastt",i:4.27263014956771E-05,a:"Variant Dim4 Value, Archived Franch Inb Item Mastt"},"2899":{y:0,u:"../Content/Fields/T_99001541_50.htm",l:-1,t:"Amount Tendered, Archived Payment Entry",i:4.27263014956771E-05,a:"Amount Tendered, Archived Payment Entry"},"2900":{y:0,u:"../Content/Fields/T_10012327_4.htm",l:-1,t:"Variant Dimension 1 Code, Allocation Plan Dim Values",i:6.44160399918709E-05,a:"Variant Dimension 1 Code, Allocation Plan Dim Values \n    Table Relation definition:  Extended Variant Values Value Type   WHERE (\n     Item No.  =FIELD(  ) )\n     \n    Dimension=CONST(1))\n  "},"2901":{y:0,u:"../Content/Fields/T_10012228_1.htm",l:-1,t:"Type, Replen. Multiple Rounding",i:4.27263014956771E-05,a:"Type, Replen. Multiple Rounding \n    In this field you select the type of replenishment.\n  "},"2902":{y:0,u:"../Content/Fields/T_99008900_167.htm",l:-1,t:"Currency Symbol as ASCII, POS Hardware Profile",i:4.27263014956771E-05,a:"Currency Symbol as ASCII, POS Hardware Profile \n    This field allows you to specify the ASCII value for the currency symbol you want to display on\n the scale.\n  "},"2903":{y:0,u:"../Content/Fields/T_10001404_64.htm",l:-1,t:"Block Positive Adjustment, Item Status Link",i:4.27263014956771E-05,a:"Block Positive Adjustment, Item Status Link"},"2904":{y:0,u:"../Content/Fields/T_10012611_130.htm",l:-1,t:"Delivered Volume, Forecourt Delivery Transaction",i:4.27263014956771E-05,a:"Delivered Volume, Forecourt Delivery Transaction"},"2905":{y:0,u:"../Content/Fields/T_99001605.htm",l:-1,t:"Scheduler Time Slot Line",i:4.27263014956771E-05,a:"Scheduler Time Slot Line \n    The program uses this table internally.\n  "},"2906":{y:0,u:"../Content/Fields/T_10012320_4.htm",l:-1,t:"Season, Store Capacity",i:4.27263014956771E-05,a:"Season, Store Capacity \n    Table Relation definition:  Season Code"},"2907":{y:0,u:"../Content/Fields/T_10012815_20.htm",l:-1,t:"Request ID, Inventory Server Log Entries",i:4.27263014956771E-05,a:"Request ID, Inventory Server Log Entries"},"2908":{y:0,u:"../Content/Fields/T_10001425_30.htm",l:-1,t:"Dim 2 Value, Variant Worksheet",i:4.27263014956771E-05,a:"Dim 2 Value, Variant Worksheet \n    This field contains the dimension 2 value of the variant.\n  "},"2909":{y:0,u:"../Content/Fields/T_99008906_652.htm",l:-1,t:"Current-OptionValue, POS Menu Line",i:4.27263014956771E-05,a:"Current-OptionValue, POS Menu Line"},"2910":{y:0,u:"../Content/Fields/T_99001678_80.htm",l:-1,t:"EFT Server Name, Archived Pos Card Entry",i:4.27263014956771E-05,a:"EFT Server Name, Archived Pos Card Entry"},"2911":{y:0,u:"../Content/Fields/T_10012121_116.htm",l:-1,t:"To Day Plan Date, Recipe Prod. Order Line",i:4.27263014956771E-05,a:"To Day Plan Date, Recipe Prod. Order Line \n    This field shows the latest date of a day plan that the production is for.\n  "},"2912":{y:0,u:"../Content/Fields/T_99008981_364.htm",l:-1,t:"Split from Line No., POS Trans. Line",i:4.27263014956771E-05,a:"Split from Line No., POS Trans. Line"},"2913":{y:0,u:"../Content/Fields/T_99001518_171.htm",l:-1,t:"Void Prepayment Line, Staff Permission Group",i:4.27263014956771E-05,a:"Void Prepayment Line, Staff Permission Group \n    Option String definition:  \n    0: No  \n    1: Yes\n  "},"2914":{y:0,u:"../Content/Fields/T_10012372_60.htm",l:-1,t:"Stock Request Document No., Replen. Planned Stock Demand",i:4.27263014956771E-05,a:"Stock Request Document No., Replen. Planned Stock Demand \n    The field shows the Stock Request Document No. that the record was created from.\n  "},"2915":{y:0,u:"../Content/Fields/T_99009005_15.htm",l:-1,t:"Remaining Points, Member Point Entry",i:8.00816517828094E-05,a:"Remaining Points, Member Point Entry"},"2916":{y:0,u:"../Content/Fields/T_99009059_1.htm",l:-1,t:"User ID, Member Account User",i:4.27263014956771E-05,a:"User ID, Member Account User"},"2917":{y:0,u:"../Content/Fields/T_10012361.htm",l:-1,t:"Item Import Ledger Entry",i:7.90440031637224E-05,a:"\n    The Item Import Ledger Entry table is used to contain the actual data process when creating or updating\n items through item import journals. This table is basically a copy of the item import journal line\n table and contains data from that table at the time of item creation or item updating.\n  "},"2918":{y:0,u:"../Content/Fields/T_10000742_300.htm",l:-1,t:"Buyer Group Code, Retail User",i:4.27263014956771E-05,a:"Buyer Group Code, Retail User \n    Here you can enter a filter for the Buyer Groups the Retail User is responsible for.\n The Buyer\u0027s Workbench can use this information to select purchase orders to monitor.\n  "},"2919":{y:0,u:"../Content/Fields/T_99001471_10.htm",l:-1,t:"Description, POS Terminal",i:5.18057269126885E-05,a:"Description, POS Terminal \n    This field contains a description of the POS terminal. You can enter a maximum of 30 characters, both numbers and letters.\n  "},"2920":{y:0,u:"../Content/LS-Hospitality/Dining-Table-Management/Dining-Area-Layouts.htm",l:-1,t:"Dining Area Layouts",i:8.90028411933033E-05,a:"You can have one or more dining area layouts for a dining area. You can have a layout that is for the weekends and another for the weekdays, and a layout that is for the dinner period, and so on. The layout specifies a number of properties for each dining table in the dining area, such as position ..."},"2921":{y:0,u:"../Content/Fields/T_99001461_1020.htm",l:-1,t:"Max. Diff./Warn. from Perm. Gr, Staff",i:4.27263014956771E-05,a:"Max. Diff./Warn. from Perm. Gr, Staff \n    Option String definition:  \n    0: No  \n    1: Yes\n  "},"2922":{y:0,u:"../Content/Fields/T_10001264_19.htm",l:-1,t:"Back Color Transparent, KDS State Style",i:4.61905991759791E-05,a:"Back Color Transparent, KDS State Style Defines whether the back color is suppose to inherit the color from some other back color or not.  "},"2923":{y:0,u:"../Content/Fields/T_99009074_1.htm",l:-1,t:"Facebook Page Group, Facebook Pages In Groups",i:4.27263014956771E-05,a:"Facebook Page Group, Facebook Pages In Groups \n    Table Relation definition:  Facebook Pages Groups GroupID"},"2924":{y:0,u:"../Content/Fields/T_99009024_40.htm",l:-1,t:"Next Scheme Benefits, Member Scheme",i:4.27263014956771E-05,a:"Next Scheme Benefits, Member Scheme"},"2925":{y:0,u:"../Content/Fields/T_99001471_1008.htm",l:-1,t:"Functionality Profile, POS Terminal",i:4.27263014956771E-05,a:"Functionality Profile, POS Terminal \n    Table Relation definition:  POS Functionality Profile"},"2926":{y:0,u:"../Content/Fields/T_99008981_10012759.htm",l:-1,t:"SPO Document Method, POS Trans. Line",i:4.27263014956771E-05,a:"SPO Document Method, POS Trans. Line \n    Option String definition:  \n    0: None  \n    1: General  \n    2: With Options\n  "},"2927":{y:0,u:"../Content/Fields/T_10016606_10.htm",l:-1,t:"Date and Time Processed, Retail Msg Detail Recipient",i:4.27263014956771E-05,a:"Date and Time Processed, Retail Msg Detail Recipient \n    Date and time when the recipient processed the message\n  "},"2928":{y:0,u:"../Content/Fields/T_99001788_21.htm",l:-1,t:"Finished Time, POS Print Line",i:4.27263014956771E-05,a:"Finished Time, POS Print Line"},"2929":{y:0,u:"../Content/Fields/T_10012121_51.htm",l:-1,t:"Creation Date-Time, Recipe Prod. Order Line",i:4.27263014956771E-05,a:"Creation Date-Time, Recipe Prod. Order Line \n    This field shows the date and time when the line was created.\n  "},"2930":{y:0,u:"../Content/Fields/T_10012732_13.htm",l:-1,t:"Unit of Measure, Canceled Special Order Line",i:4.27263014956771E-05,a:"Unit of Measure, Canceled Special Order Line"},"2931":{y:0,u:"../Content/Fields/T_99001451_16.htm",l:-1,t:"Show for Item, Barcodes",i:4.27263014956771E-05,a:"\n    A checkmark in this field indicates that this barcode number is shown as the barcode number on the\n Retail Item Card and in the Retail Item List windows.  \n    When printing out  Item Label  and  Shelf Label  the barcode that has this field checkmarked will be printed out for the item.\n  "},"2932":{y:0,u:"../Content/Fields/T_10000917_12.htm",l:-1,t:"Comment",i:4.27263014956771E-05,a:"Comment Description"},"2933":{y:0,u:"../Content/Fields/T_99001632_51.htm",l:-1,t:"Amount in LCY, Posted Safe Statement Line",i:4.27263014956771E-05,a:"Amount in LCY, Posted Safe Statement Line \n    This field contains the amount in Local Currency.  \n    The program fills in this field automatically when the Amount field is filled in.\n  "},"2934":{y:0,u:"../Content/Fields/T_10016657_21.htm",l:-1,t:"Discount Amount, Posted Customer Order Discount Line",i:4.27263014956771E-05,a:"Discount Amount, Posted Customer Order Discount Line \n    A decimal field for the Discount amount.\n  "},"2935":{y:0,u:"../Content/Fields/T_10001459_8.htm",l:-1,t:"Line Type, Dining Area Plan",i:4.27263014956771E-05,a:"Contains the line type of the dining area plan line. The    options are: Dining Area - the line is for the dining area plan as a whole. Day Plan - the line is for the plan of a single day. Time Plan - the line is for a period of a day plan. Section Plan - the line is for a section of a period of a ..."},"2936":{y:0,u:"../Content/Fields/T_10001431_5.htm",l:-1,t:"Loading Card No., POS Trans. Loading Card Link",i:4.27263014956771E-05,a:"Loading Card No., POS Trans. Loading Card Link This field contains the number of the loading card linked to the transaction. The loading card can only be linked to one POS transaction at any time."},"2937":{y:0,u:"../Content/Fields/T_10015022_1.htm",l:-1,t:"Work Location, Staff Schedule",i:5.31027876865472E-05,a:"Work Location, Staff Schedule \n    Table Relation definition:  Work Location"},"2938":{y:0,u:"../Content/Fields/T_99001565_30.htm",l:-1,t:"Table Filter, POS Data Table Columns",i:4.27263014956771E-05,a:"Table Filter, POS Data Table Columns \n    Table Relation definition:  POS Data Table Data Table ID"},"2939":{y:0,u:"../Content/Fields/T_10012729_23.htm",l:-1,t:"Unit Of Measure, Pst. Option Type Value Entry",i:4.27263014956771E-05,a:"Unit Of Measure, Pst. Option Type Value Entry"},"2940":{y:0,u:"../Content/Fields/T_10001356_11.htm",l:-1,t:"Variant Code, InStore Difference Entry",i:4.27263014956771E-05,a:"Variant Code, InStore Difference Entry \n    This field contains the Variant Code of the entry that is being viewed. The program fills in this field automatically.\n  "},"2941":{y:0,u:"../Content/Fields/T_10012138_4.htm",l:-1,t:"Entry No., KDS Modified Status",i:4.27263014956771E-05,a:"Entry No., KDS Modified Status \n    Number of the entry.\n  "},"2942":{y:0,u:"../Content/Fields/T_99001482_1015.htm",l:-1,t:"Quantity Handling, Infocode",i:0.000301930777247525,a:"This field indicates how quantity  is handled when item modifiers and cross-selling items are selected (when the item of the line that triggers the item modifier or cross-selling infocode has quantity 2 or more). This applies only when the selected items are linked to the trigger line (the Link Item ..."},"2943":{y:0,u:"../Content/Fields/T_10015034_9.htm",l:-1,t:"Request To Shift, Shift Exchange Requests",i:4.27263014956771E-05,a:"Request To Shift, Shift Exchange Requests \n    Table Relation definition:  Work Shifts"},"2944":{y:0,u:"../Content/Fields/T_99008942_13.htm",l:-1,t:"Source, WS Request Setup",i:4.27263014956771E-05,a:"\n    This field contains the source that makes up the node. It can be a fixed text (single node not referring to a table),\n a table or a field from a table. This is also the key value which is used by the request service to find\n its key fields. The process uses this field to locate the key node and ..."},"2945":{y:0,u:"../Content/Fields/T_99009270_65.htm",l:-1,t:"NetAmount",i:4.27263014956771E-05,a:"NetAmount Description"},"2946":{y:0,u:"../Content/Fields/T_10001456_27.htm",l:-1,t:"Reserv. Capacity %, Dining Area Plan Templ. Line",i:4.27263014956771E-05,a:"Contains the reservation capacity percentage of the period. It indicates how many guests as a proportion of the layout capacity can be registered for reservations in the dining area during the period. The line is a time plan line.  The Reserv. Capacity % field shows the Reservation Capacity as a ..."},"2947":{y:0,u:"../Content/Fields/T_10001469_10.htm",l:-1,t:"No. of Guests, Dining Reserv. History Entry",i:4.27263014956771E-05,a:"No. of Guests, Dining Reserv. History Entry Contains the number of guests that the reservation was for."},"2948":{y:0,u:"../Content/Fields/T_99001470_18.htm",l:-1,t:"Global Dimension 2 Code, Store",i:4.27263014956771E-05,a:"Global Dimension 2 Code, Store \n    This field contains a code for the project dimension to which the store belongs.\n     \n    You can create a specific project dimension value for the store, or use the project code automatically assigned when the  Responsibility Center   field is filled in.\n  "},"2949":{y:0,u:"../Content/Fields/T_10012202_10.htm",l:-1,t:"Exclude Tuesdays, Replen. Journal Batch",i:4.27263014956771E-05,a:"Exclude Tuesdays, Replen. Journal Batch \n    Place a check mark in this field if you do not want the automatic replenishment to run on Tuesdays.\n  "},"2950":{y:0,u:"../Content/Fields/T_99001540_70.htm",l:-1,t:"xStatement No., Archived Sales Entry",i:4.27263014956771E-05,a:"xStatement No., Archived Sales Entry"},"2951":{y:0,u:"../Content/Fields/T_99001621_50.htm",l:-1,t:"No. of Items to Trigger, Coupon Header",i:4.27263014956771E-05,a:"No. of Items to Trigger, Coupon Header \n    The value in this field defines the number of items each coupon needs to be valid.\n  "},"2952":{y:0,u:"../Content/Fields/T_99001481_17.htm",l:-1,t:"Mon. Time within Bounds, Validation Period",i:4.27263014956771E-05,a:"\n    A check mark in this field indicates that the validation period is valid within   Starting Time  and\n     Ending Time  on Monday.  \n    If this field is not marked with the default check mark, then Starting and Ending Time represent the starting and ending time of the Monday period over which\n ..."},"2953":{y:0,u:"../Content/Fields/T_113_10012751.htm",l:-1,t:"No later than Date, Sales Invoice Line",i:4.27263014956771E-05,a:"No later than Date, Sales Invoice Line"},"2954":{y:0,u:"../Content/Fields/T_99008980_212.htm",l:-1,t:"Time when Trans. Closed, POS Transaction",i:4.27263014956771E-05,a:"Time when Trans. Closed, POS Transaction"},"2955":{y:0,u:"../Content/Fields/T_99008919_1.htm",l:-1,t:"Device ID, POS Serial Device Property",i:5.96183420777108E-05,a:"Device ID, POS Serial Device Property \n    Table Relation definition:  POS Serial Device Profile ID   WHERE (\n     Profile ID  =FIELD(  Device ID ) )\n  "},"2956":{y:0,u:"../Content/Fields/T_10000902.htm",l:-1,t:"LS Retail Modules",i:4.27263014956771E-05,a:"LS Retail Modules"},"2957":{y:0,u:"../Content/Fields/T_10012201_4.htm",l:-1,t:"Location Code, Replen. Template",i:4.27263014956771E-05,a:"\n    In this field you can enter the code for the location used when the purchase orders or transfer\n orders are created. If this is a purchase template, the location will represent the code for the warehouse that will receive the purchase orders.\n If the template is a transfer template, the ..."},"2958":{y:0,u:"../Content/Fields/T_10001328_71.htm",l:-1,t:"Lot No., Posted P/R Counting Lines",i:4.27263014956771E-05,a:"Lot No., Posted P/R Counting Lines \n    This field contains the Lot No. of the of the item in the Picking / Receiving line.\n  "},"2959":{y:0,u:"../Content/LS-Retail/Replenishment/Replen. Implementation Guide/Topology/Warehouses_None.htm",l:-1,t:"No Warehouse",i:7.86917919267088E-05,a:"  No Warehouse LS Replenishment can be run without any warehouse. In that case all stores will be supplied directly from vendors.  To achieve this, the Replenishment Templates for the Purchase Order proposals need to be set up accordingly. The Replenishment process is unchanged. LS Central setup ..."},"2960":{y:0,u:"../Content/Fields/T_10001401_22.htm",l:-1,t:"Special Group Code, Event",i:4.27263014956771E-05,a:"\n    This field contains the Special Group Code if there is a Special Group connected to the Event record.\n By connecting a Special Group to the record it is possible to see sales data in the item hierarchy\n tab on the Sales History form and filter capabilities on the Retail Item Search Form.\n  "},"2961":{y:0,u:"../Content/Fields/T_99001586_25.htm",l:-1,t:"Time Between Check, Scheduler Job Header",i:0.000146232113350374,a:"\n    This field contains the time that should pass between each check of data to process.\n This field needs to be filled to enable the replication process to run.  \n    It is recommended not to set this field at a very low interval (under two min.) to ensure a proper\n functioning of the Scheduler.\n  ..."},"2962":{y:0,u:"../Content/Fields/T_99001470_1011.htm",l:-1,t:"Max. Order Timing (Min.), Store",i:4.27263014956771E-05,a:"Max. Order Timing (Min.), Store"},"2963":{y:0,u:"../Content/Fields/T_10014614_30.htm",l:-1,t:"Purch. Order Ship-to Post Code, Archive Franch Inb Buffer Head",i:4.27263014956771E-05,a:"Purch. Order Ship-to Post Code, Archive Franch Inb Buffer Head"},"2964":{y:0,u:"../Content/Fields/T_99009012_16.htm",l:-1,t:"Allow Blank, Member Attribute",i:4.27263014956771E-05,a:"Allow Blank, Member Attribute"},"2965":{y:0,u:"../Content/Fields/T_10015047_4.htm",l:-1,t:"Execution Type, External Adjustment Setup",i:4.27263014956771E-05,a:"Execution Type, External Adjustment Setup \n    Option String definition:  \n    0: Not Active  \n    1: Manual  \n    2: Automatic  \n    3: View\n  "},"2966":{y:0,u:"../Content/Fields/T_99001512_7005.htm",l:-1,t:"Web Server Name, Distribution Location",i:4.27263014956771E-05,a:"Web Server Name, Distribution Location"},"2967":{y:0,u:"../Content/Fields/T_99001545_60.htm",l:-1,t:"Amount in Currency, Archived Tender Declar. Entry",i:4.27263014956771E-05,a:"Amount in Currency, Archived Tender Declar. Entry"},"2968":{y:0,u:"../Content/Fields/T_10012400_13.htm",l:-1,t:"Period Type, Retail Purchase Plan Name",i:4.27263014956771E-05,a:"Period Type, Retail Purchase Plan Name \n    The system uses this field internally.\n  "},"2969":{y:0,u:"../Content/Fields/T_99001586_105.htm",l:-1,t:"Use Job ID, Scheduler Job Header",i:4.27263014956771E-05,a:"\n    The delivery order of jobs that have the same JobID in the Scheduler is not allowed to get mixed\n up in order to maintain continuity. Sometimes it is necessary to create a continuity between jobs with\n different jobIDs. This is done by using another ID for the job in question in order to fool ..."},"2970":{y:0,u:"../Content/Fields/T_99001572_4.htm",l:-1,t:"Label Code, Shelf Label Setup",i:4.27263014956771E-05,a:"Label Code, Shelf Label Setup \n    Table Relation definition:  Label Functions Label Code   WHERE (\n     Type  =CONST(Shelf Label) )\n  "},"2971":{y:0,u:"../Content/Fields/T_99001462_2011.htm",l:-1,t:"To Safe by Denom., Tender Type",i:4.27263014956771E-05,a:"To Safe by Denom., Tender Type"},"2972":{y:0,u:"../Content/Fields/T_99001524_6.htm",l:-1,t:"Status, Object Transfer Header",i:4.27263014956771E-05,a:"Status, Object Transfer Header \n    This field contains the status of the Object Transfer. The options are:  Not Ready  \n    Ready to Send  \n    Sent  \n    Confirmed  \n    Error  \n    Cancelled"},"2973":{y:0,u:"../Content/Fields/T_99001659_6.htm",l:-1,t:"Document No., Discount Ledger Entry",i:4.27263014956771E-05,a:"Document No., Discount Ledger Entry"},"2974":{y:0,u:"../Content/Fields/T_113_10012755.htm",l:-1,t:"Return Policy, Sales Invoice Line",i:4.27263014956771E-05,a:"Return Policy, Sales Invoice Line \n    Option String definition:  \n    0: Permitted  \n    1: Not Permitted\n  "},"2975":{y:0,u:"../Content/Fields/T_99009038_12.htm",l:-1,t:"Time Processed, Member Process Order Entry",i:4.27263014956771E-05,a:"Time Processed, Member Process Order Entry"},"2976":{y:0,u:"../Content/Fields/T_99009035_3.htm",l:-1,t:"Document No., Member Attribute Entry",i:4.27263014956771E-05,a:"Document No., Member Attribute Entry"},"2977":{y:0,u:"../Content/Fields/T_5723_10012300.htm",l:-1,t:"Replenishment Rule Code, Product Group",i:4.27263014956771E-05,a:"Replenishment Rule Code, Product Group \n    Table Relation definition:  Replen. Rule Header"},"2978":{y:0,u:"../Content/Fields/T_99008945_4.htm",l:-1,t:"Terminal No., POS Log",i:4.27263014956771E-05,a:"Terminal No., POS Log \n    Table Relation definition:  POS Terminal No.   WHERE (\n     Store No.  =FIELD(  Store No. ) )\n  "},"2979":{y:0,u:"../Content/Fields/T_99008981_10012721.htm",l:-1,t:"Delivery Date Time, POS Trans. Line",i:4.27263014956771E-05,a:"Delivery Date Time, POS Trans. Line"},"2980":{y:0,u:"../Content/Fields/T_10016651_301.htm",l:-1,t:"Vendor Sourcing, Customer Order Header",i:4.27263014956771E-05,a:"Vendor Sourcing, Customer Order Header \n    A boolean field that is marked when the Customer Order is sourced from Vendor."},"2981":{y:0,u:"../Content/Fields/T_99001641_12.htm",l:-1,t:"Formula, Dyn. Item Hierarchy Field",i:4.27263014956771E-05,a:"Formula, Dyn. Item Hierarchy Field \n    This field contains the formula used for formula type fields.\n  "},"2982":{y:0,u:"../Content/Fields/T_99001632_65.htm",l:-1,t:"Description, Posted Safe Statement Line",i:4.27263014956771E-05,a:"Description, Posted Safe Statement Line \n    This field contains the amount removed from the POS terminal drawer in the transactions summed up\n in the safe statement line.  \n    The program fills in this field automatically when calculating the Statement.\n  "},"2983":{y:0,u:"../Content/Fields/T_10012706_25.htm",l:-1,t:"Unit Price Incl. VAT, Vendor Item Library",i:4.27263014956771E-05,a:"Unit Price Incl. VAT, Vendor Item Library"},"2984":{y:0,u:"../Content/Fields/T_10015007_16.htm",l:-1,t:"System Message, Time Entry Registration",i:4.27263014956771E-05,a:"System Message, Time Entry Registration"},"2985":{y:0,u:"../Content/Fields/T_99001499_3.htm",l:-1,t:"Subgroup Code, Distribution Subgroup",i:4.27263014956771E-05,a:"Subgroup Code, Distribution Subgroup \n    This field contains a code for the distribution subgroup.  \n    The code must be unique - you cannot use the same code twice in one table. You can enter a maximum of 10 characters, both numbers and letters.\n  "},"2986":{y:0,u:"../Content/Fields/T_99009038.htm",l:-1,t:"Member Process Order Entry",i:4.99898418292862E-05,a:"Member Process Order Entry"},"2987":{y:0,u:"../Content/LS-Retail/Replenishment/Replen. Implementation Guide/Item Flow/Item Flow.htm",l:-1,t:"Item Flow",i:0.000237327202293289,a:"  Item Flow The item flow describes how item groups and items are purchased and distributed in the store network.  There are 3 main scenarios: Vendor to Store Vendor to Warehouse, Warehouse to Store (with and without Cross Docking) Store to Store. (Click here to read more) Vendor to Store In this ..."},});