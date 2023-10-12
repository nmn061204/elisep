use DBQLBH;

create table tblUser(
userID int identity(1,1) primary key,
userName nvarchar(100),
userPass nvarchar(max),
userRole nvarchar(50)
)
--
create table tblSupplierProduct(
idSup int identity (1,1) primary key,
supplierName nvarchar(150)
)
--
create table tblStaff(
IDStaff int identity(1,1) primary key,
StaffName nvarchar(150)
)

--
create table tblStyle(
ID int identity(1,1) primary key,
nameStyle nvarchar(150)
)
--
create table tblCustumer(
ID int identity(1,1) ,
codeCus char(10) primary key,
nameCus nvarchar(150),
addressCus nvarchar(150),
phoneCus char(11),
emailCus nvarchar(150)
)

--
--
create table tblProduct(
ID int identity(1,1),
codeProduct char(20) primary key,
nameProduct nvarchar(100),
descriptionProduct nvarchar(max),
idSup int,
quantityProductInput int,
priceProductInput float,
colorPro varchar(50),
sizePro varchar(10),
material nvarchar(50),
genderUse nvarchar(5),
IDStyle int,
imageProduct1 nvarchar(max),
imageProduct2 nvarchar(max),
imageProduct3 nvarchar(max),
foreign key (IDSup) references tblSupplierProduct(IDSup),
foreign key(IDStyle) references tblStyle(ID),
)
--

create table tblBill(
IDBill int identity(1,1) primary key,
BillDate date,
IDStaff int,
UserID int,
TotalPay float,
codeCus char(10),
foreign key (IDStaff) references tblStaff(IDStaff),
foreign key (codeCus) references tblCustumer(codeCus)
)

create table tblDetailBill(
ID int identity(1,1),
IDBill int,
CodeProduct char(20),
QuantityProduct int,
PriceProductBuying float,
TotalMoney float,
primary key(IDBill, CodeProduct),
foreign key (IDBill) references tblBill(IDBill),
foreign key (CodeProduct) references tblProduct(CodeProduct)
)