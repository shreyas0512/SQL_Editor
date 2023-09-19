const columns1 = [
    {
      columnName: "customerID",
      dataType: "VARCHAR",
      primaryKey: true,
    },
    {
      columnName: "companyName",
      dataType: "VARCHAR",
      primaryKey: false,
    },
    {
      columnName: "contactName",
      dataType: "VARCHAR",
      primaryKey: false,
    },
    {
      columnName: "companyTitle",
      dataType: "VARCHAR",
      primaryKey: false,
    },
    {
      columnName: "address",
      dataType: "VARCHAR",
      primaryKey: false,
    },
    {
      columnName: "city",
      dataType: "VARCHAR",
      primaryKey: false,
    },
    {
      columnName: "region",
      dataType: "VARCHAR",
      primaryKey: false,
    },
    {
      columnName: "postalCode",
      dataType: "VARCHAR",
      primaryKey: false,
    },
    {
      columnName: "country",
      dataType: "VARCHAR",
      primaryKey: false,
    },
    {
      columnName: "phone",
      dataType: "VARCHAR",
      primaryKey: false,
    },
    {
      columnName: "fax",
      dataType: "VARCHAR",
      primaryKey: false,
    },
  ];

  const columns2 = [{
    columnName: "employeeId",
    dataType: "VARCHAR",
    primaryKey: true,

  },
  {
    columnName: "lastName",
    dataType: "VARCHAR",
    primaryKey: false,
  },
    {
        columnName: "firstName",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    {
        columnName: "title",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    {
        columnName: "titleOfCourtesy",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    {
        columnName: "birthDate",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    {
        columnName: "hireDate",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    {
        columnName: "address",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    {
        columnName: "city",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    {
        columnName: "region",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    {
        columnName: "postalCode",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    {
        columnName: "country",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    {
        columnName: "homePhone",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    {
        columnName: "extension",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    {
        columnName: "photo",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    {
        columnName: "notes",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    {
        columnName: "reportsTo",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    {
        columnName: "photoPath",
        dataType: "VARCHAR",
        primaryKey: false,
    },
    ];
    const columns3 = [{
        columnName:"Stock Name",
        dataType:"VARCHAR",
        primaryKey:true,
    },{
      columnName:"Country of Listing",
        dataType:"VARCHAR",
        primaryKey:false,
        
    },{
      columnName:"Ticker",
      dataType:"VARCHAR",
      primaryKey:false,
    },{
      columnName:"Margin Rate",
      dataType:"Percentage",
      primaryKey:false,
    } ,{
      columnName:"Go Short",
      dataType:"VARCHAR",
      primaryKey:false,
    },{
      columnName:"Limited Risk Premium",
      dataType:"Precentage",
      primaryKey:false,
    }]
  export  {columns1,columns2,columns3};